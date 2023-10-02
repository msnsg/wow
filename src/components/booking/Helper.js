const FormatGui = (rawData, type, tonnage_value, vehicle_type, selectDay) => {
  let data = [
    { name: "Current Location", field: "address" },
    { name: "Enter Desitination", field: "address" },
    {
      name: "Tonnage",
      menuItem: [{ id: "", label: "Tonnage" }],
      field: "select",
    },
    {
      name: "Length",
      menuItem: [{ id: "", label: "Length" }],
      field: "select",
    },

    {
      name: "Vehicle Body Type",
      menuItem: [{ id: "", label: "Vehicle Body Type" }],
      field: "select",
    },
    {
      name: "Specifications",
      menuItem: [{ id: "", label: "specification" }],
      field: "select",
    },
    {
      name: "Material Type",
      menuItem: [{ id: "", label: "Material Type" }],
      field: "select",
    },
    { name: "advance amount", field: "amount", value: "" },
    { name: "Date of Pickup", field: "date", value: [""] },
    {
      name: "Select POD",
      menuItem: [
        { id: "", label: "Select POD Type" },
        { id: "1", label: "POD" },
        { id: "2", label: "e-POD" },
      ],
      field: "select",
    },
    { name: "Insurance", field: "button", value: [""] },
    // {
    //   name: "Date",
    //   field: "text",
    //   value: [""],
    // },
    {
      name: "Book Later",
      menuItem: [
        { id: "1", label: "Book Now" },
        { id: "2", label: "Book Later" },
      ],
      field: "select",
    },
    {
      name: "time_date",
      child: [
        { name: "Date", field: "select", menuItem: [] },
        { name: "Time", field: "select", menuItem: [] },
      ],
      field: "group",
    },
  ];

  let intercity_materials = rawData?.intercity_materials?.map((item) => {
    return { id: `${item?.id}`, label: `${item?.value}` };
  });
  let intracity_materials = rawData?.intracity_materials?.map((item) => {
    return { id: `${item?.id}`, label: `${item?.value}` };
  });

  let tonnage = rawData?.price_list?.tonnage?.map((item) => {
    return { id: item?.value, label: item?.description };
  });
  let Length = rawData?.price_list?.tonnage
    ?.filter((item) => {
      if (tonnage_value == item?.value) {
        return item;
      }
    })
    .map((item) => {
      if (item?.vehicle_description !== null) {
        return [
          {
            id: item?.vehicle_description,
            description: item?.vehicle_description,
          },
        ];
      } else {
        return item?.feet;
      }
    })[0]
    .map((item1) => {
      return { id: item1?.id, label: item1?.description };
    });

  let vehicle_body = rawData?.truckbody?.body_type?.body?.map((item) => {
    return { id: `${item?.id}`, label: `${item?.type_of_body}` };
  });
  let specification = rawData?.truckbody?.body_type?.body
    ?.filter((item) => {
      if (vehicle_type == item?.id) {
        return item;
      }
    })
    ?.map((item) => item?.specification)[0]
    ?.map((item1) => {
      return { id: item1?.id, label: item1?.specification };
    });

  const handleInbetweenDays = () => {
    let currentDate = new Date();

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    const daysInBetween = [];

    while (currentDate <= endDate) {
      daysInBetween.push(currentDate.getDay());
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysInBetween;
  };

  

  const hanldeTimeandDate = (field) => {
    let returnObj = { ...field };
    field?.child?.map((item, index) => {
      if (item?.name == "Date") {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const daysBetween = handleInbetweenDays();
        let menuItem = daysBetween?.map((day) => {
          return { id: day + 1, label: days[day] };
        });
        menuItem.unshift({id:"", label:"Date"})
        returnObj.child[index]["menuItem"] = menuItem;
      } else {
        let currentday = new Date()
        let menuItem = [{id:"", label:"Time"}]
        if ((currentday.getDay()+1)== selectDay ){
          let currentTime = currentday?.getHours() +1
          for (let i =currentTime ; i <24 ; i++ ){
            menuItem.push({id:i , label:`${(i % 12).toString().length>1?(i% 12): "0"+(i% 12) }:00-${i>12 ? "pm" : "am"}`})
          }
          returnObj.child[index]["menuItem"] = menuItem

        }else {
          for (let i =0 ; i <24 ; i++ ){
            menuItem.push({id:i , label:`${(i % 12).toString().length>1?(i% 12): "0"+(i% 12) }:00-${i>=12 ? "pm" : "am"}`})
          }
          returnObj.child[index]["menuItem"] = menuItem

        }
      }
    });
    return returnObj;
  };

  let RetunData = data?.map((item) => {
    if (type == "OutStation") {
      if (item?.name == "Material Type") {
        return {
          ...item,
          menuItem: [...item?.menuItem, ...intercity_materials],
        };
      } else if (item?.name == "Vehicle Body Type") {
        return { ...item, menuItem: [...item?.menuItem, ...vehicle_body] };
      } else if (item?.name == "Specifications") {
        return { ...item, menuItem: [...item?.menuItem, ...specification] };
      } else if (item?.name == "Tonnage") {
        return { ...item, menuItem: [...item?.menuItem, ...tonnage] };
      } else if (item?.name == "Length") {
        return { ...item, menuItem: [...item?.menuItem, ...Length] };
      } else if (item?.name == "time_date") {
        return hanldeTimeandDate(item);
      }
    } else {
      if (item?.name == "Material Type") {
        return {
          ...item,
          menuItem: [...item?.menuItem, ...intracity_materials],
        };
      }
    }
    return item;
  });

  // console.log(rawData, "rawData");
  // console.log(RetunData, "RetunData");

  return RetunData;
};

export { FormatGui };
