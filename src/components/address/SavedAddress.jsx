import React, { useState, useEffect } from "react";
import axios from "axios";

const SavedAddress = () => {

  const [isAlertVisible, setIsAlertVisible] = React.useState(false);

  const [resData, setAddresses] = useState([]);
  const [message, setMessage] = useState("");
  
  const fetchData = async () => {

    const { data } = await axios.get(
      "https://admin-staging.wowtruck.in/webservice/list_address"
    );
    const addresses = data;
    setAddresses(addresses.response.data);
    //console.log("prod data ",JSON.stringify(addresses.response.data));
  };

  useEffect(() => {
    fetchData();
   }, []);

  useEffect(() => {
   fetchData();
  }, [resData]);

  const deleteData = async(id) => {
    setIsAlertVisible(true);
    var updated_by = 457;
    const reqData = {
      "id": id,
      "updated_by": updated_by,
    }

    try {
      axios.post("https://admin-staging.wowtruck.in/webservice/delete_address", reqData)
          .then((saveResponse) => {
            if (saveResponse.status === 200) {
              setMessage('Deleted successfully..!')
              setTimeout(() => {
                setIsAlertVisible(false);
              }, 1000);
            } else {
              setMessage("Some error occured on delete");
            }
          })
          .catch((error) => {console.log("Error! ",error)});
        } catch (err) {
          console.log(err);
        }

    
    //console.log("url ", `https://admin-staging.wowtruck.in/webservice/delete_address?id=${id}&updated_by=${updated_by}`);
  };
  

  return (
    <>
      <div className="row">
          <div className="col-lg-3" style={{ marginLeft: "0px", padding: "0px 0px" , height:"100vh"}}>
            <div className="row">
              <div className="registertitle">
              Saved Addresses
              </div>
            </div> 

            <div className="row col-md-12 titlebottomline"></div>

              {resData.map((item, index) => (
              <div className="row col-md-12" key={index}>
                <div className="col-md-11">
                  <p className="address_title">{item.title}</p>
                  <p className="address">{item.address}</p>
                </div>
                <div className="col-md-1">
                  <p style={{marginTop:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg></p>
                  <a
                  onClick={() => deleteData(item.id)}
                  >
                  <p style={{marginTop:"-5px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                  </svg></p>
                  </a>
                </div>
                
                <div className="row col-md-12 addressline"></div>

              </div>
            
            ))}

            {isAlertVisible && <div className='alert-container'>
              <div className='alert-inner'>
                <div className="message">{message ? <p>{message}</p> : null}</div>
              </div>
              </div>}
            

            <div className="row col-md-12">
              <button
                className="btn-primary"
                name="contact_form"
                id="contact_form"
                style={{ marginLeft: "0px" }}
              >
              Add Address
              </button>
            </div>

          </div>  
          <div className="col-lg-9">
            <img src="images/booking-img/booking-02.png" className="img-fluid" alt="" />
          </div>
      </div>
      
    </>
  );
};

export default SavedAddress;
