import React, { useCallback, useState } from "react";
import {
  CustomAccortionList,
  CustomeInput,
  CustomeSelect,
  GroupRadioButton,
} from "./CustomeInput";
import { useNavigate } from "react-router-dom";

const BookingLocal = () => {
  const dummyData = [
    { name: "Current Location", field: "text", value: [""] },
    { name: "Enter Desitination", field: "text", value: [""] },
    { name: "MySelf", field: "text", value: [""] },
    
    {
      name: "Book Later",
      menuItem: [{ id: "", label: "Book Later" }, {id:"1" , label:"Book later"}],
      field: "select",
    },
    {
      name :"Amount Type", 
      menuItem: [{name:"Rental" , value:"0"}, {name:"Package", value:"1"}], 
      value:"0" , 
      field:"Radio"
    }
   
  ];

  const rental ={
    "tata_ace": [
        {
            "name":"Tata Ace",
            "distance": "2",
            "duration": 60,
            "amount": 230,
            "id": "780",
            "unit": "Mins"
        }
    ],
    "dost": [
        {
            "name":"All Dost",
            "distance": "2",
            "duration": 60,
            "amount": 330,
            "id": "781",
            "unit": "Mins"
        }
    ],
    "three_wheeler": [
        {
            "name":"Three Wheeler",
            "distance": "1",
            "duration": 60,
            "amount": 200,
            "id": "813",
            "unit": "Mins"
        }
    ]
}
const list = [
  {
    name: "Tata Ace",
    type: "Open",
    dutarion: "10",
    unit: "mins",
    label: "Max 1 Ton",
    MenuItem: [
      { hour: "1", km: "10", amount: "850" },
      { hour: "2", km: "20", amount: "950" },
      { hour: "3", km: "30", amount: "1050" }
    ]
  },
  {
    name: "Tata Ace",
    type: "CLosed",
    dutarion: "20",
    unit: "mins",
    label: "max 1.2 Ton",
    MenuItem: [
      { hour: "1", km: "10", amount: "855" },
      { hour: "2", km: "20", amount: "955" },
      { hour: "3", km: "30", amount: "1055" }
    ]
  }
];

  const navigate  = useNavigate()

  const [textData, setTextData] = useState({
    "Current Location": [""],
    "Enter Desitination": [""],
    MySelf: [""],
    "Date of Pickup":[""],
    'Amount Type':"0"
  });

  const hanleDelEmptyField = useCallback(
    (idx1) => (event) => {
      let { name, value } = event?.target;
      if (name !=="Date of Pickup" &&  value?.length < 1) {
        let data = { ...textData };
        let returnData = data?.[`${name}`]?.filter((item, idx) => idx != idx1);
        setTextData((prev) => ({ ...prev, [`${name}`]: returnData }));
      }
    },
    [textData]
  );

  const handleAddText = useCallback(
    (name) => (event) => {
      let data = { ...textData };
      data[`${name}`].unshift("");
      setTextData(data);
    },
    [textData]
  );
  const handleDelete = useCallback(
    (name, idx1) => (event) => {
      let data = { ...textData };
      let returnData = data?.[`${name}`]?.filter((item, idx) => idx != idx1);
      setTextData((prev) => ({ ...prev, [`${name}`]: returnData }));
    },
    [textData]
  );

  const handleEditText = useCallback(
    (index) => (event) => {
      let { name, value } = event?.target;
      let data = { ...textData };
      data[`${name}`][index] = value;
      setTextData(data);
    },
    [textData]
  );

  // const handleSubmit  = useCallback(()=>{
  //   navigate("/booking_success")
  // },[])

  const handleRadioButton  = useCallback((e)=>{
    const {name , value} = e.target
    setTextData((prev)=>({...prev, "Amount Type": value}))
  },[])

  return (
    <div className="row" style={{ marginLeft: "0px", padding: "10px 0px" , height:"100vh"}}> 
      {dummyData?.map((item, idx) => (
      <div >
        {item.field == "text" &&
          textData?.[item.name]?.map((item1, idx1) => (
            <CustomeInput
              name={item?.name}
              value={item1 || ""}
              buttonImage={
                item?.name == "Date of Pickup" ? "->" : idx1 == 0 ? "+" : "-"
              }
              onClick={
                idx1 == 0
                  ? handleAddText(item?.name, item1)
                  : handleDelete(item?.name, idx1)
              }
              onChange={handleEditText(idx1)}
              disabled={idx1 == 0 && item1?.length < 1}
              onBlur={hanleDelEmptyField(idx1)}
            />
          ))}
        {item?.field == "select" && (
          <CustomeSelect name={item?.name} menuItems={item?.menuItem} />
        )}
        <div className="row">
          {item?.field == "Radio" &&<GroupRadioButton field={item?.menuItem} value={textData?.["Amount Type"]} onChange={handleRadioButton}/> }
        </div>
      </div>
    ))} 
    {textData?.["Amount Type"] =="0"? 
    <div style={{marginTop:"20px" , maxHeight:"40vh"}}>
     {Object.entries(rental).map((item)=>(
            <>
            {["open" , "close"]?.map((item1)=><>
            <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"left"}} onClick={()=>navigate("/booking_confirm", {state:`${item?.[0]}-${item1}`})}>
              <img src = {"images/booking-img/tataace.png"} alt="" />
              <div style={{display:"flex" , flexDirection:"column" }}>

              <h5>{item[1][0].name}</h5>
              <p>{item1}</p>
              </div>
              <div>
                <div>{item[1][0].distance} {item[1][0].unit}</div>
                <div>{`Max 1 Ton`}</div>
                <div>{item[1][0].amount}</div>
              </div>
            </div>
            <hr style={{ borderTop:" 1px dashed"}}/>
            </>)}
            </>
          ))}
    </div>
:
    <div style={{marginTop:"20px" , maxHeight:"40vh"}}>
    <CustomAccortionList list={list}/>
    </div>
    }
    
    </div>
  )
}

export default BookingLocal    