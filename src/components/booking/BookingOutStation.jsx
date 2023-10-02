import React, { useCallback, useState, useEffect } from "react";

import {
  CustomButton,
  CustomAddress,
  CustomeAdvanceAmount,
  CustomeInput,
  CustomeSelect,
  PickUpPerson,
} from "./CustomeInput";
import { useNavigate } from "react-router-dom";
import { FormatGui } from "./Helper";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import axios from "axios";



const BookingOutStation = () => {

  const [state, setState] = React.useState({
    tonnage: "",
    length: ""
  })

  const onChange = (evt) =>{
    const value = evt.target.label;
    setState({
      ...state,
      [evt.target.name]: value
    });
    //console.log(value);

    // if(value == 'Tonnage'){
    //   console.log('Tonnage');
    // }
    // console.log('Lenght');
  }


  const [outStationData, setOutStationData] = useState({
    "Current Location": [{ address: "", lat: "", lng: "" }],
    "Enter Desitination": [{ address: "", lat: "", lng: "" }],
    "Date of Pickup": [""],
    Tonnage: "",
    Length: "",
    Specifications: "",
    "Vehicle Body Type": "",
    "Material Type": "",
    "Select POD": "",
    "Book Later": "1",
    "advance amount": [""],
    'Date':"",
    "Time":""
  });
  const data = {
    location_count: "1",
    from_time: "06:00:00",
    to_time: "20:00:00",
    location: [
      {
        id: "34683",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Ambattur, Chennai, Tamil Nadu",
        customer_order_latitude: "13.1143393",
        customer_order_longitute: "80.1547844",
        created_at: "2022-08-12 15:08:09",
        address_tag: "",
        need_alert: "1",
      },
      {
        id: "34689",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "16, Triplicane High Rd, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.064848918607",
        customer_order_longitute: "80.274032335728",
        created_at: "2022-08-19 17:17:11",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34690",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "F-9, 1st floor, 1st phase, Spencer plaza, No: 769, Anna salai, Anna Salai, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.0676822",
        customer_order_longitute: "80.2707239",
        created_at: "2022-08-19 17:17:39",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34691",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "95, Triplicane High Rd, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.060658324005",
        customer_order_longitute: "80.274346824735",
        created_at: "2022-08-19 17:24:59",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34692",
        customer_id: "45805",
        door_no: "Coimbatore",
        customer_order_address: "582/A1, Coimbatore, Tamil Nadu 641024, India",
        customer_order_latitude: "10.9642427",
        customer_order_longitute: "76.9700669",
        created_at: "2022-08-19 17:27:53",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34718",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Spencer Plaza Mall, Anna Salai, Thousand Lights East, Thousand Lights, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0614646",
        customer_order_longitute: "80.261353",
        created_at: "2022-09-15 13:17:09",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34736",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Padi Flyover, TVS Industries, Padi, Chennai, Tamil Nadu",
        customer_order_latitude: "13.1023615",
        customer_order_longitute: "80.194162",
        created_at: "2022-10-12 14:38:05",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34737",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Next Level, Periyamedu, Choolai, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0888403",
        customer_order_longitute: "80.26961299999999",
        created_at: "2022-10-12 14:40:17",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34738",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Saveetha Dental College And Hospitals, Poonamallee High Road, Velappanchavadi, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0554953",
        customer_order_longitute: "80.1244676",
        created_at: "2022-10-12 14:40:28",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34749",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Ramanathapuram, Trichy Road, Olymbus, Ramasamy Nagar, Coimbatore, Tamil Nadu",
        customer_order_latitude: "10.996977",
        customer_order_longitute: "76.995442",
        created_at: "2022-10-26 16:19:15",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34750",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Mayflower Sakthi Garden, Nanjundapuram Road, Keelakarai, Coimbatore, Tamil Nadu",
        customer_order_latitude: "10.9891135",
        customer_order_longitute: "77.0025722",
        created_at: "2022-10-26 16:23:07",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34761",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Coimbatore, Tamil Nadu",
        customer_order_latitude: "11.0168445",
        customer_order_longitute: "76.9558321",
        created_at: "2022-11-04 10:42:31",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34779",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Maraimalai Nagar, Tamil Nadu",
        customer_order_latitude: "12.7930081",
        customer_order_longitute: "80.0252383",
        created_at: "2022-11-14 16:54:52",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34780",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Guindy, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0066625",
        customer_order_longitute: "80.2206369",
        created_at: "2022-11-14 17:16:17",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34781",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Ramapuram, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0317443",
        customer_order_longitute: "80.1816719",
        created_at: "2022-11-14 17:16:43",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34782",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "DLF IT SEZ Park Main Entrance, Ramapuram, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0243823",
        customer_order_longitute: "80.1772356",
        created_at: "2022-11-14 17:17:02",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34783",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Chennai Central (MAS), Kannappar Thidal, Periyamet, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0832022",
        customer_order_longitute: "80.2755252",
        created_at: "2022-11-15 12:44:19",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34784",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Thousand Lights Metro Rail Station, Anna Salai, Express Estate, Triplicane, Chennai, Tamil Nadu",
        customer_order_latitude: "13.057888",
        customer_order_longitute: "80.2581394",
        created_at: "2022-11-15 12:51:57",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34785",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Blue Cross of India, Velachery Road, Guindy, Chennai, Tamil Nadu",
        customer_order_latitude: "12.9997525",
        customer_order_longitute: "80.2155527",
        created_at: "2022-11-15 12:58:36",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34786",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Little Mount, NGR Colony, Little Mount, Saidapet, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0147143",
        customer_order_longitute: "80.2239942",
        created_at: "2022-11-15 13:03:45",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34787",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Saidapet Metro, Chennai - Trichy Highway, Todd Hunter Nagar, Nandanam, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0240266",
        customer_order_longitute: "80.2288408",
        created_at: "2022-11-15 13:04:38",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34788",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Thiruvanmiyur Beach, Valmiki Nagar, Chennai, Tamil Nadu",
        customer_order_latitude: "12.9736122",
        customer_order_longitute: "80.2664556",
        created_at: "2022-11-15 13:14:07",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34789",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Madras Medical College, Poonamallee High Road, Park Town, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0798185",
        customer_order_longitute: "80.2722966",
        created_at: "2022-11-15 13:22:03",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34790",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "770A, Spencer Tower Annexe, 600002,, Anna Salai, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.062419200964",
        customer_order_longitute: "80.262038167566",
        created_at: "2022-11-16 15:13:36",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34794",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Leh Ladakh - लेह लदाख, Ladakh, India, Leh",
        customer_order_latitude: "34.1425528",
        customer_order_longitute: "77.5556727",
        created_at: "2022-11-19 12:20:56",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34795",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Chennai, Tamil Nadu",
        customer_order_latitude: "13.0826802",
        customer_order_longitute: "80.2707184",
        created_at: "2022-11-19 12:25:23",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34796",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Hyderabad, Telangana",
        customer_order_latitude: "17.385044",
        customer_order_longitute: "78.486671",
        created_at: "2022-11-19 12:26:34",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34797",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Ahmedabad, Gujarat",
        customer_order_latitude: "23.022505",
        customer_order_longitute: "72.5713621",
        created_at: "2022-11-19 12:26:54",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34798",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Kolkata, West Bengal",
        customer_order_latitude: "22.572646",
        customer_order_longitute: "88.363895",
        created_at: "2022-11-19 12:27:41",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34799",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Agra, Uttar Pradesh",
        customer_order_latitude: "27.1766701",
        customer_order_longitute: "78.0080745",
        created_at: "2022-11-19 12:28:01",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34800",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "New Delhi, Delhi",
        customer_order_latitude: "28.6139391",
        customer_order_longitute: "77.2090212",
        created_at: "2022-11-19 12:28:22",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34801",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Bangalore, Karnataka",
        customer_order_latitude: "12.9715987",
        customer_order_longitute: "77.5945627",
        created_at: "2022-11-19 13:02:24",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34802",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Thiruppur Kumaran Road, Chinnaiyan Colony, Perambur, Chennai, Tamil Nadu",
        customer_order_latitude: "13.1168541",
        customer_order_longitute: "80.2468431",
        created_at: "2022-11-19 16:15:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34808",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Triplicane, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0587654",
        customer_order_longitute: "80.2756297",
        created_at: "2022-11-21 12:38:15",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34809",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Nanjundapuram Post Office, near Ramar kovil, Coimbatore, Tamil Nadu",
        customer_order_latitude: "10.9767505",
        customer_order_longitute: "76.9942317",
        created_at: "2022-11-21 12:50:38",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34820",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Salem, Tamil Nadu",
        customer_order_latitude: "11.6643",
        customer_order_longitute: "78.146",
        created_at: "2022-11-22 14:35:13",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34821",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Thanjavur, Tamil Nadu",
        customer_order_latitude: "10.787",
        customer_order_longitute: "79.1378",
        created_at: "2022-11-22 14:41:02",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34822",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Madurai, Tamil Nadu",
        customer_order_latitude: "9.9252",
        customer_order_longitute: "78.1198",
        created_at: "2022-11-22 14:41:51",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34823",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Bangalore, Tamil Nadu",
        customer_order_latitude: "12.9716",
        customer_order_longitute: "77.5946",
        created_at: "2022-11-22 14:43:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34824",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Mumbai, Tamil Nadu",
        customer_order_latitude: "19.076",
        customer_order_longitute: "72.8777",
        created_at: "2022-11-22 14:44:09",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34825",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Kolkata, Tamil Nadu",
        customer_order_latitude: "22.5726",
        customer_order_longitute: "88.3639",
        created_at: "2022-11-22 14:46:27",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34826",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Nammakkal, Tamil Nadu",
        customer_order_latitude: "11.2194",
        customer_order_longitute: "78.1678",
        created_at: "2022-11-22 14:48:21",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34827",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "kerala, Tamil Nadu",
        customer_order_latitude: "10.544276328904",
        customer_order_longitute: "76.13836674099",
        created_at: "2022-11-22 14:52:58",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34828",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Vadapalani, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0499711",
        customer_order_longitute: "80.2121306",
        created_at: "2022-11-22 14:58:48",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34829",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Trichy, Tamil Nadu",
        customer_order_latitude: "10.7904833",
        customer_order_longitute: "78.7046725",
        created_at: "2022-11-23 12:51:26",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34836",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Royapettah High Road, Azad Nagar, Royapettah, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0501383",
        customer_order_longitute: "80.2641155",
        created_at: "2022-12-01 12:26:50",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34845",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Pondicherry, Puducherry",
        customer_order_latitude: "11.9415915",
        customer_order_longitute: "79.8083133",
        created_at: "2022-12-06 14:46:40",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34846",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Namakkal, Tamil Nadu",
        customer_order_latitude: "11.2193848",
        customer_order_longitute: "78.1678418",
        created_at: "2022-12-06 14:48:14",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34847",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Thoothukudi, Tamil Nadu",
        customer_order_latitude: "8.7641661",
        customer_order_longitute: "78.1348361",
        created_at: "2022-12-06 14:48:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34848",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Selam, Tamil Nadu",
        customer_order_latitude: "11.664325",
        customer_order_longitute: "78.1460142",
        created_at: "2022-12-06 15:47:32",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34849",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Ramanathapuram bus stop, Pankaja Mills Road, Olymbus, Ramasamy Nagar, Ramanathapuram, Tamil Nadu",
        customer_order_latitude: "10.9977872",
        customer_order_longitute: "76.9954471",
        created_at: "2022-12-08 10:42:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34850",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Spencer Plaza Mall, Anna Salai, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0613",
        customer_order_longitute: "80.2611",
        created_at: "2022-12-08 14:13:49",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34851",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Triplicane Post Office, Triplicane High Road, Police Quarters, Triplicane, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0597811",
        customer_order_longitute: "80.2743774",
        created_at: "2022-12-12 13:12:18",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34864",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Triplicane High Road, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0625771",
        customer_order_longitute: "80.2741945",
        created_at: "2022-12-14 12:24:36",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34887",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Guindy Railway Station Bus Stop, MKN Road, Guindy, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0075293",
        customer_order_longitute: "80.2097364",
        created_at: "2022-12-16 12:22:00",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34888",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Kodambakkam, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0521019",
        customer_order_longitute: "80.22552859999999",
        created_at: "2022-12-16 12:23:44",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34889",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Nungambakkam, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0569467",
        customer_order_longitute: "80.242469",
        created_at: "2022-12-16 12:24:14",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34890",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Kodambakkam Railway Station, Taylor Estate, Kodambakkam, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0521563",
        customer_order_longitute: "80.2306937",
        created_at: "2022-12-16 12:44:23",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34905",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Kanyakumari, Tamil Nadu",
        customer_order_latitude: "8.0883064",
        customer_order_longitute: "77.5384507",
        created_at: "2022-12-17 12:15:40",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34923",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Tambaram, Chennai, Tamil Nadu",
        customer_order_latitude: "12.9249308",
        customer_order_longitute: "80.1000026",
        created_at: "2022-12-19 14:56:40",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34926",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Coimbatore International Airport, Peelamedu - Pudur Main Road, Coimbatore, Tamil Nadu",
        customer_order_latitude: "11.0304324",
        customer_order_longitute: "77.03909279999999",
        created_at: "2022-12-20 11:42:10",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34927",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Central Railway Station, Jutkapuram, Periyamet, Chennai, Tamil Nadu",
        customer_order_latitude: "13.08343",
        customer_order_longitute: "80.27614799999999",
        created_at: "2022-12-20 11:51:31",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34928",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Broadway MTC Bus Terminus, NSC Bose Road, Esplanade, George Town, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0876658",
        customer_order_longitute: "80.2838055",
        created_at: "2022-12-20 11:51:44",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34929",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Broadway Bus Stand, Esplanade, George Town, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0872233",
        customer_order_longitute: "80.28372499999999",
        created_at: "2022-12-20 11:53:13",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34945",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Marina Beach Chennai, Marina Beach, Triplicane, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0499526",
        customer_order_longitute: "80.2824026",
        created_at: "2022-12-22 14:33:47",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34988",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Triplicane Post Office, Triplicane High Road, Police Quarters, Triplicane, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0597811",
        customer_order_longitute: "80.27437739999999",
        created_at: "2022-12-24 16:07:40",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "34989",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Government Estate, Anna Salai, Mount Road, Anna Salai, Triplicane, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0695606",
        customer_order_longitute: "80.2728393",
        created_at: "2022-12-24 16:08:34",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35065",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Guindy Metro Station, Guindy Flyover, Race View Colony, Guindy, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0092293",
        customer_order_longitute: "80.213198",
        created_at: "2023-01-02 17:25:49",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35067",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Vadapalani Murugan Temple, Palani Andavar Koil Street, Vadapalani, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0528421",
        customer_order_longitute: "80.2135209",
        created_at: "2023-01-02 17:53:29",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35090",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Thirupur, Tamil Nadu",
        customer_order_latitude: "11.1085242",
        customer_order_longitute: "77.3410656",
        created_at: "2023-01-04 15:35:58",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35091",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "TKT Bus Company, Tiruppur - Palladam Road, Thottam, Tiruppur, Tamil Nadu",
        customer_order_latitude: "11.090928",
        customer_order_longitute: "77.3465846",
        created_at: "2023-01-04 16:02:04",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35109",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Meenambakkam, Chennai, Tamil Nadu",
        customer_order_latitude: "12.987454",
        customer_order_longitute: "80.17534909999999",
        created_at: "2023-01-05 15:42:31",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35110",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Chromepet, Chennai, Tamil Nadu",
        customer_order_latitude: "12.951611",
        customer_order_longitute: "80.14616629999999",
        created_at: "2023-01-05 15:42:42",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35112",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "769, Anna Salai Service Ln, Anna Salai, Triplicane, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.061931912301",
        customer_order_longitute: "80.262029115111",
        created_at: "2023-01-05 17:18:28",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35113",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Sholinganallur, Chennai, Tamil Nadu",
        customer_order_latitude: "12.9009877",
        customer_order_longitute: "80.2279301",
        created_at: "2023-01-05 17:19:04",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35114",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Perungudi, Chennai, Tamil Nadu",
        customer_order_latitude: "12.9653652",
        customer_order_longitute: "80.2461057",
        created_at: "2023-01-05 17:31:11",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35122",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Palladam Bus Stand, Coimbatore Rd, Mullai Nagar, Palladam, Tamil Nadu",
        customer_order_latitude: "10.9943987",
        customer_order_longitute: "77.2830765",
        created_at: "2023-01-10 10:09:05",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35178",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Erode Annamalaiyar Mess, Grand Southern Trunk Road, Alandur, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0066516",
        customer_order_longitute: "80.20468640000001",
        created_at: "2023-02-06 15:16:24",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35180",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Vellore, Tamil Nadu",
        customer_order_latitude: "12.9165167",
        customer_order_longitute: "79.13249859999999",
        created_at: "2023-02-06 16:13:44",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35189",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Ramanathapuram bus stop, Pankaja Mills Road, Olymbus, Ramasamy Nagar, Ramanathapuram, Tamil Nadu, India",
        customer_order_latitude: "10.9977872",
        customer_order_longitute: "76.99544709999999",
        created_at: "2023-02-11 12:20:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35226",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "260, Bharathi Salai Rd, Ellis Puram, Police Quarters, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.0605443",
        customer_order_longitute: "80.2743304",
        created_at: "2023-02-28 08:12:27",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35235",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "133, Velachery Rd, Little Mount, Guindy, Chennai, Tamil Nadu 600032, India",
        customer_order_latitude: "13.009303990369",
        customer_order_longitute: "80.222575999796",
        created_at: "2023-02-28 09:57:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35236",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Kannigapuram, Little Mount, Guindy, Chennai, Tamil Nadu 600032, India",
        customer_order_latitude: "13.00476126504",
        customer_order_longitute: "80.220249183476",
        created_at: "2023-02-28 09:57:36",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35238",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "No.118,10th, Street,Kannikapuram,Velachery Road, Guindy, Guindy, Chennai, Tamil Nadu 600032, India",
        customer_order_latitude: "13.003511723314",
        customer_order_longitute: "80.218569785357",
        created_at: "2023-02-28 09:57:45",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35252",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Saidapet, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0212805",
        customer_order_longitute: "80.2231037",
        created_at: "2023-03-02 09:52:10",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35271",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "133-77, Quaid-E-Millath Rd, Police Quarters, Kanna Bagh, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.0606337",
        customer_order_longitute: "80.2744705",
        created_at: "2023-03-02 20:24:53",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35272",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Triplicane Post Office, Triplicane High Rd, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.0605998",
        customer_order_longitute: "80.2742844",
        created_at: "2023-03-02 20:26:15",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35273",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "75, Triplicane High Rd, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.0607559",
        customer_order_longitute: "80.274394",
        created_at: "2023-03-02 20:27:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35312",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Kodambakkam Railway Station, Taylor Estate, Kodambakkam, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0519306",
        customer_order_longitute: "80.2306936",
        created_at: "2023-03-07 15:14:46",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35314",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "84-41, Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.066235",
        customer_order_longitute: "80.281155",
        created_at: "2023-03-07 15:38:45",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35339",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Guindy Railway Station, Guindy, Chennai, Tamil Nadu",
        customer_order_latitude: "13.008693",
        customer_order_longitute: "80.2130519",
        created_at: "2023-03-09 10:30:44",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35406",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Coimbatore marine college, Purasaiwakkam, Chennai, Tamil Nadu",
        customer_order_latitude: "13.0810547",
        customer_order_longitute: "80.2581438",
        created_at: "2023-03-16 12:42:29",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35407",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Coimbatore Railway Station, State Bank Road, Opp.Railway Station, Gopalapuram, Coimbatore, Tamil Nadu",
        customer_order_latitude: "10.9960406",
        customer_order_longitute: "76.9677727",
        created_at: "2023-03-16 12:43:56",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35448",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "376Q+8F Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.060831596783",
        customer_order_longitute: "80.28872564435",
        created_at: "2023-03-30 12:27:09",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35449",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "376P+Q95, Marina Beach, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.06197078459",
        customer_order_longitute: "80.285728275776",
        created_at: "2023-03-30 12:27:12",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35450",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "6th, Ezhilagam, PWD Estate, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.063006108401",
        customer_order_longitute: "80.282420106232",
        created_at: "2023-03-30 12:27:16",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35451",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "82, Triplicane High Rd, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.060365207598",
        customer_order_longitute: "80.274341292679",
        created_at: "2023-03-30 12:36:08",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35452",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "3rd Floor, Agriculture complex, Ezhilagam, PWD Estate, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.064251757226",
        customer_order_longitute: "80.282097905874",
        created_at: "2023-03-30 12:36:36",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35453",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Adham Market, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.065984028208",
        customer_order_longitute: "80.27380283922",
        created_at: "2023-03-30 12:45:41",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35458",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "41, Triplicane High Rd, Ellis Puram, Padupakkam, Triplicane, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.059607159992",
        customer_order_longitute: "80.274276249111",
        created_at: "2023-03-31 10:25:41",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35459",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "103/1, New No 193/1, Triplicane High Rd, Police Quarters, Triplicane, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.060116009094",
        customer_order_longitute: "80.274357050657",
        created_at: "2023-03-31 10:25:50",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35460",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "106, Big St, Police Quarters, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.059387028541",
        customer_order_longitute: "80.275803767145",
        created_at: "2023-03-31 10:26:02",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35461",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "65/66, 65/66, Nanjundapuram Rd, Kurichi, Tamil Nadu 641024, India",
        customer_order_latitude: "10.976045799062",
        customer_order_longitute: "76.996089443564",
        created_at: "2023-03-31 16:55:40",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35462",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "26/90, Kurichchi, Coimbatore, Tamil Nadu 641024, India",
        customer_order_latitude: "10.960203",
        customer_order_longitute: "76.97474",
        created_at: "2023-03-31 16:57:00",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35463",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Besent Nagar, Perungudi, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.9638482",
        customer_order_longitute: "80.2456362",
        created_at: "2023-04-04 10:01:55",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35464",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Besant Nagar Beach, Elliot's Promenade, Odaimanagar, Besant Nagar, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.9992201",
        customer_order_longitute: "80.2728694",
        created_at: "2023-04-04 10:02:16",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35465",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Egmore Railway Station, Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0773363",
        customer_order_longitute: "80.2613806",
        created_at: "2023-04-04 14:29:05",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35466",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Express Avenue, Pattullos Road, Express Estate, Thousand Lights, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0584546",
        customer_order_longitute: "80.2641844",
        created_at: "2023-04-05 15:22:00",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35467",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "7, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.057444049703",
        customer_order_longitute: "80.264992117882",
        created_at: "2023-04-05 15:22:08",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35468",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "71A, Valliammal St, Kamaraj Nagar, Kilpauk, Chennai, Tamil Nadu 600010, India",
        customer_order_latitude: "13.078758498073",
        customer_order_longitute: "80.232394225895",
        created_at: "2023-04-05 16:15:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35469",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Egmore, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0732259",
        customer_order_longitute: "80.2609209",
        created_at: "2023-04-05 16:15:47",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35470",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "16 Aarti Chambers, 189, Anna Salai, Express Estate, Royapettah, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.057797111878",
        customer_order_longitute: "80.257897675037",
        created_at: "2023-04-05 16:16:34",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35471",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "37H7+9WW, Ansari Estate, Egmore, Chennai, Tamil Nadu 600008, India",
        customer_order_latitude: "13.078441389621",
        customer_order_longitute: "80.264894217253",
        created_at: "2023-04-06 10:11:50",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35472",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "653, Anna Salai, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.055716291354",
        customer_order_longitute: "80.255609750748",
        created_at: "2023-04-06 10:12:11",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35473",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "259, Anna Salai, Teynampet, Thousand Lights East, Thousand Lights, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.057888235152",
        customer_order_longitute: "80.258017368615",
        created_at: "2023-04-06 10:12:23",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35477",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "213/158, NH 45, Express Estate, Royapettah, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.0617453",
        customer_order_longitute: "80.2625376",
        created_at: "2023-04-13 14:37:47",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35478",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "3-7, Cross St, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600031, India",
        customer_order_latitude: "13.065057473767",
        customer_order_longitute: "80.25087531656",
        created_at: "2023-04-13 14:41:38",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35479",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "265G+J3V, Little Mount, Kotturpuram, Chennai, Tamil Nadu 600022, India",
        customer_order_latitude: "13.008937138823",
        customer_order_longitute: "80.225916020572",
        created_at: "2023-04-15 10:06:05",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35480",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Chromepet bus stand, Chennai - Theni Highway, New Colony, Chromepet, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.9515582",
        customer_order_longitute: "80.1400217",
        created_at: "2023-04-15 11:48:28",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35481",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Chromepet, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.951611",
        customer_order_longitute: "80.1461663",
        created_at: "2023-04-17 15:59:00",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35482",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "New no 11, old no 6, Gopathi Narayanaswami Chetty Rd, near Gemini Flyover, Teynampet, Thiru Vi Ka Kudiyiruppu, Teynampet, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.051292325732",
        customer_order_longitute: "80.249280408025",
        created_at: "2023-04-18 15:01:44",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35483",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "19-7, Nathamuni St, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017, India",
        customer_order_latitude: "13.043116027907",
        customer_order_longitute: "80.234196670353",
        created_at: "2023-04-18 15:02:10",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35484",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "19, Pattullos Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.058746882553",
        customer_order_longitute: "80.264404043555",
        created_at: "2023-04-18 15:02:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35485",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Old No- 185, New, 243, Mount Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.058274610521",
        customer_order_longitute: "80.258514583111",
        created_at: "2023-04-18 15:04:12",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35486",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "256, 3rd Floor, Express Avenue, Mall, Whites Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.058544060443",
        customer_order_longitute: "80.263828039169",
        created_at: "2023-04-18 15:04:22",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35487",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "12/3, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.054641743679",
        customer_order_longitute: "80.259130820632",
        created_at: "2023-04-18 15:04:34",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35488",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "654, Anna Salai, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.05560589731",
        customer_order_longitute: "80.255323424935",
        created_at: "2023-04-18 15:04:57",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35489",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Mobile Application Development company in Chennai, pharmacy mobile apps development in chennai, 140, Gopathi Narayanaswami Chetty Rd, Lakshimi Colony, T. Nagar, Chennai, Tamil Nadu 600017, India",
        customer_order_latitude: "13.045323031115",
        customer_order_longitute: "80.240849889815",
        created_at: "2023-04-18 15:05:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35490",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "33, Singaram St, Erukkanchery, Parthasarathi Puram, Kodungaiyur, Chennai, Tamil Nadu 600118, India",
        customer_order_latitude: "13.045220798014",
        customer_order_longitute: "80.237888731062",
        created_at: "2023-04-18 15:07:43",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35491",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "U.S.I.S., Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.052639937084",
        customer_order_longitute: "80.251063406467",
        created_at: "2023-04-18 15:21:29",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35492",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Thiruvottiyur Bus Depot, Rettai Malai Srinivasan Nagar, Manickam Nagar, Tiruvottiyur, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.1722834",
        customer_order_longitute: "80.3043452",
        created_at: "2023-04-19 17:47:24",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35493",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "21, Westcott Rd, Indira Garden, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.055663053996",
        customer_order_longitute: "80.264399684966",
        created_at: "2023-04-20 10:18:46",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35494",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "73-9, R O B 5th St, Anna Salai, Royapettah, Chennai, Tamil Nadu 600031, India",
        customer_order_latitude: "13.0545544",
        customer_order_longitute: "80.2474948",
        created_at: "2023-04-20 10:18:56",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35495",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "306, Kamala Arcade, 669, Anna Salai, Thousand Lights East, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.056475004117",
        customer_order_longitute: "80.25647342205",
        created_at: "2023-04-20 10:19:16",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35496",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "187, Anna Salai, Express Estate, Triplicane, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.058153439612",
        customer_order_longitute: "80.25827921927",
        created_at: "2023-04-20 10:19:38",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35497",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "26RM+M9J, N Usman Rd, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017, India",
        customer_order_latitude: "13.04164947204",
        customer_order_longitute: "80.233248174191",
        created_at: "2023-04-20 10:20:23",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35498",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Royapettah, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0539587",
        customer_order_longitute: "80.2640711",
        created_at: "2023-04-20 10:47:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35499",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "LLA Building, Rangoon St, Anna Salai, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.058352016165",
        customer_order_longitute: "80.25806799531",
        created_at: "2023-04-20 11:25:16",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35500",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Victoria Hostel, 73, Bharathi Salai, Mattan Kuppam, Triplicane, Chennai, Tamil Nadu 600005, India",
        customer_order_latitude: "13.057890848005",
        customer_order_longitute: "80.280141569674",
        created_at: "2023-04-20 11:25:27",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35501",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "No : 738, First Floor, Anna Salai, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.0658145",
        customer_order_longitute: "80.2682054",
        created_at: "2023-04-20 12:23:07",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35502",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "210, 5, Anna Salai, Peters Colony, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.055356040785",
        customer_order_longitute: "80.255182273686",
        created_at: "2023-04-20 12:23:21",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35503",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "396/673 & 304/670, Kammalar St, Thousand Lights East, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.056748375299",
        customer_order_longitute: "80.255907140672",
        created_at: "2023-04-20 12:23:34",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35504",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "16, Woods Rd, Mount Road, Express Estate, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.058762886223",
        customer_order_longitute: "80.265249274671",
        created_at: "2023-04-20 14:13:46",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35505",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "25, Westcott Rd, near Hindustan Petroleum Petrol Pump, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.056572660046",
        customer_order_longitute: "80.264790952206",
        created_at: "2023-04-20 14:14:01",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35506",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "3727+XRJ, Balaji Nagar, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.052466178592",
        customer_order_longitute: "80.264458693564",
        created_at: "2023-04-20 14:30:00",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35507",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "15, Royapettah High Rd, Balaji Nagar, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.053831420594",
        customer_order_longitute: "80.26410933584",
        created_at: "2023-04-20 17:03:18",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35508",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "14, Anthony St, Balaji Nagar, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.051100602434",
        customer_order_longitute: "80.264177061617",
        created_at: "2023-04-20 17:03:27",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35509",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Royapettah Hospital, Westcott Rd, Indira Garden, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.05433015664",
        customer_order_longitute: "80.264206565917",
        created_at: "2023-04-20 17:04:35",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35510",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "3737+2GG, Royapettah High Rd, Ganapathy Colony, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.052486428649",
        customer_order_longitute: "80.263760983944",
        created_at: "2023-04-20 17:05:04",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35511",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "No. 9, Whites Road, Westcott Rd, Indira Garden, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.056966876062",
        customer_order_longitute: "80.264647118747",
        created_at: "2023-04-20 17:05:11",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35512",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "232, Door No.6, Bharathi Salai, Pudupakkam, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.058603829294",
        customer_order_longitute: "80.268910489976",
        created_at: "2023-04-20 17:05:27",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35513",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "57,(29) royapettah High Road, Royapettah, Royapettah, Azad Nagar, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.050843229186",
        customer_order_longitute: "80.264055356383",
        created_at: "2023-04-20 17:05:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35516",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "4950l, Whites Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.058135476265",
        customer_order_longitute: "80.264110676944",
        created_at: "2023-04-21 10:17:12",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35517",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Old No:7 New No:15, Near sathyam cinema, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.05601481228",
        customer_order_longitute: "80.258282572031",
        created_at: "2023-04-21 10:17:29",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35518",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "3733+XRF, Anna Salai, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.05472241657",
        customer_order_longitute: "80.254602245986",
        created_at: "2023-04-21 10:17:33",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35519",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "216, Church Park, Anna Salai, Gopalapuram, Chennai, Tamil Nadu 600086, India",
        customer_order_latitude: "13.054418994914",
        customer_order_longitute: "80.254163704813",
        created_at: "2023-04-21 10:39:11",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35520",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "200, Avvai Shanmugam Salai, Gopalapuram, Chennai, Tamil Nadu 600086, India",
        customer_order_latitude: "13.05335717949",
        customer_order_longitute: "80.253656096756",
        created_at: "2023-04-21 10:39:19",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35521",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "7-4, 7-4, Beerkaran 1st St, Chokkalingam Nagar, Teynampet, Chennai, Tamil Nadu 600018, India",
        customer_order_latitude: "13.050097563812",
        customer_order_longitute: "80.250404253602",
        created_at: "2023-04-21 10:39:28",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35522",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Thousand Light, Express Estate, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.058304984891",
        customer_order_longitute: "80.258490107954",
        created_at: "2023-04-21 14:17:13",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35523",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "B-16, Parsn Commercial Complex, 121, Anna Salai, Thousand Lights West, Gopalapuram, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.05424687073",
        customer_order_longitute: "80.253526344895",
        created_at: "2023-04-21 14:17:22",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35524",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "194/A, 2nd Floor, Anna Salai, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.054422261026",
        customer_order_longitute: "80.253940746188",
        created_at: "2023-04-21 14:17:30",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35525",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "362X+5C Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.050433979042",
        customer_order_longitute: "80.24850089103",
        created_at: "2023-04-21 14:17:35",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35526",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "3, Peter's Rd, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.054337015479",
        customer_order_longitute: "80.258770734072",
        created_at: "2023-04-21 14:28:14",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35527",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "8, Thiruvika Rd, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.055515426415",
        customer_order_longitute: "80.257943943143",
        created_at: "2023-04-21 15:38:25",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35528",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "50, Whites Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.058409498822",
        customer_order_longitute: "80.264347046614",
        created_at: "2023-04-21 15:39:22",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35529",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Porur, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0381896",
        customer_order_longitute: "80.1565461",
        created_at: "2023-04-25 17:52:39",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35584",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "33-16, Kasturi Estate, Teynampet, Chennai, Tamil Nadu 600086, India",
        customer_order_latitude: "13.043312003534",
        customer_order_longitute: "80.255502797663",
        created_at: "2023-05-06 16:30:04",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35585",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "No 205, Royapettah high Road, Luz Corner Mylapore Opposite to Canara Bank, near Viveks/Vidya Mandir School, Luz, Mylapore, Chennai, Tamil Nadu 600004, India",
        customer_order_latitude: "13.037613622189",
        customer_order_longitute: "80.267454385757",
        created_at: "2023-05-06 16:30:11",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35586",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "770a, Anna Salai Service Ln, Anna Salai, Triplicane, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.0616921",
        customer_order_longitute: "80.2623587",
        created_at: "2023-05-06 17:36:29",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35589",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Merina beach Bengali fish fry, Marina Beach, Triplicane, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0502123",
        customer_order_longitute: "80.2814169",
        created_at: "2023-05-09 10:22:54",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35590",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "165, 361, Pycrofts Rd, Padupakkam, Royapettah, Chennai, Tamil Nadu 600014, India",
        customer_order_latitude: "13.058329806953",
        customer_order_longitute: "80.265279449522",
        created_at: "2023-05-09 10:26:41",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35591",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Vignesh Hospital, Poothapedu Main Road, TNHB Colony, Ramapuram, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0309824",
        customer_order_longitute: "80.1714823",
        created_at: "2023-05-09 10:41:20",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35592",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Guindy National Park, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0049251",
        customer_order_longitute: "80.2378725",
        created_at: "2023-05-09 11:28:57",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35593",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Vandalur Zoo, Tamil Nadu, India",
        customer_order_latitude: "12.8812767",
        customer_order_longitute: "80.0925684",
        created_at: "2023-05-09 11:31:08",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35594",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "SH 121, Peerakankaranai, Tamil Nadu 603210, India",
        customer_order_latitude: "12.883134",
        customer_order_longitute: "80.0817925",
        created_at: "2023-05-09 11:34:47",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35595",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Poonamallee, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0472609",
        customer_order_longitute: "80.0945307",
        created_at: "2023-05-11 11:50:47",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35596",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Pallavaram, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.9675069",
        customer_order_longitute: "80.1490955",
        created_at: "2023-05-11 11:56:35",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35597",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Mugalivakkam, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0209529",
        customer_order_longitute: "80.1613511",
        created_at: "2023-05-11 15:57:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35605",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Tharamani, Chennai, Tamil Nadu",
        customer_order_latitude: "12.986279",
        customer_order_longitute: "80.2432487",
        created_at: "2023-05-18 11:31:32",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35621",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "770, NH 45, Anna Salai, Triplicane, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.0620117",
        customer_order_longitute: "80.2622987",
        created_at: "2023-06-06 10:25:43",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35622",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "251, Anna Salai, Peters Colony, Thousand Lights, Chennai, Tamil Nadu 600006, India",
        customer_order_latitude: "13.055915849694",
        customer_order_longitute: "80.256030522287",
        created_at: "2023-06-06 10:26:23",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35625",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "SIPCOT Industrial Park, Thervoy Kandigai, Tamil Nadu 601202, India",
        customer_order_latitude: "13.3665213",
        customer_order_longitute: "79.9853585",
        created_at: "2023-06-15 17:37:04",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35626",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "SIPCOT Industrial Park, Mangal, Tamil Nadu, India",
        customer_order_latitude: "12.7233435",
        customer_order_longitute: "79.6661248",
        created_at: "2023-06-15 17:37:21",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35664",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Tambaram Railway Station, Railway Station Road, East Tambaram, Tambaram, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.9257861",
        customer_order_longitute: "80.1178836",
        created_at: "2023-08-04 17:22:47",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35666",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Maraimalai Nagar, Bus Stand, Maraimalai Nagar, Tamil Nadu, India",
        customer_order_latitude: "12.7915528",
        customer_order_longitute: "80.0326096",
        created_at: "2023-08-05 13:58:37",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35686",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "770a, Anna Salai, Triplicane, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "13.0621038",
        customer_order_longitute: "80.262099",
        created_at: "2023-08-30 12:07:30",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35687",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "W4G8+4PR, Tambaram Flyover, East Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India",
        customer_order_latitude: "12.925468746726",
        customer_order_longitute: "80.116903670132",
        created_at: "2023-09-01 15:44:05",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35688",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Kanchipuram Lekshana Textile 4, 58, Nehru Nedunchalai, Balaji Nagar, MRK NAGAR, New Perungalathur, Chennai, Perungalathur, Tamil Nadu 600063, India",
        customer_order_latitude: "12.90232145972",
        customer_order_longitute: "80.092667900026",
        created_at: "2023-09-01 15:44:53",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35690",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Little Mount, Kotturpuram, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0167754",
        customer_order_longitute: "80.2269031",
        created_at: "2023-09-05 12:08:50",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35691",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Perungalathur, Tamil Nadu, India",
        customer_order_latitude: "12.904759",
        customer_order_longitute: "80.0890842",
        created_at: "2023-09-05 12:09:03",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35692",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Perungalathur Bus Stand, Tambaram Corporation, Grand Southern Trunk Road, Otteri Extension, Kamaraj Nagar, New Perungalathur, Chennai, Tamil Nadu, India",
        customer_order_latitude: "12.9061804",
        customer_order_longitute: "80.0964027",
        created_at: "2023-09-05 12:09:30",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35693",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Little Mount Metro Bike Parking, Anna Salai, NGR Colony, Gotha Medu Housing Board, Saidapet, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0149615",
        customer_order_longitute: "80.2241692",
        created_at: "2023-09-05 14:01:17",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35694",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Guduvanchery bus stand, Nandivaram, Kamarajapuram, Nandhivaram, Tamil Nadu, India",
        customer_order_latitude: "12.8447677",
        customer_order_longitute: "80.0616833",
        created_at: "2023-09-05 14:08:49",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35695",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "AG-DMS Metro, Anna Salai, Chokkalingam Nagar, Teynampet, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0445007",
        customer_order_longitute: "80.2481655",
        created_at: "2023-09-05 14:19:27",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35696",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Thousand Lights, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0616905",
        customer_order_longitute: "80.2544454",
        created_at: "2023-09-05 14:21:41",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35705",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "473H+2X4, Mint St, Kondithope, George Town, Chennai, Tamil Nadu 600001, India",
        customer_order_latitude: "13.102505",
        customer_order_longitute: "80.2799417",
        created_at: "2023-09-19 12:31:57",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35709",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "No 770 Main Road, Anna Salai, Chennai, Tamil Nadu 600002, India",
        customer_order_latitude: "12.8513598",
        customer_order_longitute: "80.2412831",
        created_at: "2023-09-19 15:25:44",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35712",
        customer_id: "45805",
        door_no: null,
        customer_order_address:
          "Guindy Metro Station, Guindy Flyover, Race View Colony, Guindy, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.0093336",
        customer_order_longitute: "80.2131005",
        created_at: "2023-09-20 10:05:53",
        address_tag: "",
        need_alert: "0",
      },
      {
        id: "35713",
        customer_id: "45805",
        door_no: null,
        customer_order_address: "Ekkatuthangal, Chennai, Tamil Nadu, India",
        customer_order_latitude: "13.02248",
        customer_order_longitute: "80.203187",
        created_at: "2023-09-20 12:38:50",
        address_tag: "",
        need_alert: "0",
      },
    ],
    customer: [
      {
        first_name: "Vignesh ",
        phone: "08610960522",
        city_name: "Chennai",
        company_name: "Vignesh Enterprises pvt",
        supplier_type: "1",
      },
    ],
    customer_type: "1",
    address_type: [
      {
        id: "2",
        name: "Office",
      },
      {
        id: "3",
        name: "Shop",
      },
    ],
    is_last_load: 0,
    last_load: [],
    recipients: {
      id: "3060",
      recipient_name: "Vignesh",
      recipient_phone: "09566458282",
    },
    offers_count: 0,
    auto_accept: "1",
    payment_options: "2",
    preference: [
      {
        name: "Angle",
        setting_id: "28",
        description: "",
        value: "0",
      },
      {
        name: "Driver as Helper",
        setting_id: "29",
        description: "",
        value: "0",
      },
    ],
    intercity_preference: [
      {
        name: "POD",
        setting_id: "54",
        description: "",
        value: "0",
      },
      {
        name: "Insurance",
        setting_id: "58",
        description: "",
        value: "0",
      },
    ],
    all_packages_hours: [
      {
        label: "1.00 Hr",
        value: "1.00",
      },
      {
        label: "2.00 Hr",
        value: "2.00",
      },
      {
        label: "3.00 Hr",
        value: "3.00",
      },
      {
        label: "4.00 Hr",
        value: "4.00",
      },
      {
        label: "5.00 Hr",
        value: "5.00",
      },
      {
        label: "6.00 Hr",
        value: "6.00",
      },
      {
        label: "7.00 Hr",
        value: "7.00",
      },
      {
        label: "8.00 Hr",
        value: "8.00",
      },
      {
        label: "10.00 Hr",
        value: "10.00",
      },
    ],
    all_packages_distances: [
      {
        label: "5 Km",
        value: "5",
      },
      {
        label: "10 Km",
        value: "10",
      },
      {
        label: "20 Km",
        value: "20",
      },
      {
        label: "30 Km",
        value: "30",
      },
      {
        label: "40 Km",
        value: "40",
      },
      {
        label: "50 Km",
        value: "50",
      },
      {
        label: "60 Km",
        value: "60",
      },
      {
        label: "70 Km",
        value: "70",
      },
      {
        label: "90 Km",
        value: "90",
      },
    ],
    standard_packages: {
      tata_ace: [
        {
          distance: "5",
          duration: "1.00",
          amount: 349,
          id: "1",
        },
        {
          distance: "10",
          duration: "2.00",
          amount: 579,
          id: "2",
        },
        {
          distance: "20",
          duration: "3.00",
          amount: 779,
          id: "3",
        },
        {
          distance: "30",
          duration: "4.00",
          amount: 999,
          id: "4",
        },
        {
          distance: "40",
          duration: "5.00",
          amount: 1299,
          id: "50",
        },
        {
          distance: "50",
          duration: "6.00",
          amount: 1349,
          id: "56",
        },
        {
          distance: "60",
          duration: "7.00",
          amount: 1650,
          id: "44",
        },
        {
          distance: "70",
          duration: "8.00",
          amount: 1749,
          id: "5",
        },
        {
          distance: "90",
          duration: "10.00",
          amount: 2299,
          id: "46",
        },
      ],
      dost: [
        {
          distance: "5",
          duration: "1.00",
          amount: 449,
          id: "1",
        },
        {
          distance: "10",
          duration: "2.00",
          amount: 699,
          id: "2",
        },
        {
          distance: "20",
          duration: "3.00",
          amount: 949,
          id: "3",
        },
        {
          distance: "30",
          duration: "4.00",
          amount: 1249,
          id: "4",
        },
        {
          distance: "40",
          duration: "5.00",
          amount: 1499,
          id: "50",
        },
        {
          distance: "50",
          duration: "6.00",
          amount: 1649,
          id: "56",
        },
        {
          distance: "60",
          duration: "7.00",
          amount: 1899,
          id: "44",
        },
        {
          distance: "70",
          duration: "8.00",
          amount: 1949,
          id: "5",
        },
        {
          distance: "90",
          duration: "10.00",
          amount: 2499,
          id: "46",
        },
      ],
      tata_ace_desc: [
        "Overshoot Charges : ₹ 3 Per Minute and ₹ 18 Per KM for Tata Ace",
      ],
      dost_desc: [
        "Overshoot Charges : ₹ 3.5 per minute and ₹ 19 Per KM for AL Dost & Bolero Segment",
      ],
    },
    rental_packages: {
      tata_ace: [
        {
          distance: "2",
          duration: 60,
          amount: 230,
          id: "780",
          unit: "Mins",
        },
      ],
      dost: [
        {
          distance: "2",
          duration: 60,
          amount: 330,
          id: "781",
          unit: "Mins",
        },
      ],
      three_wheeler: [
        {
          distance: "1",
          duration: 60,
          amount: 200,
          id: "813",
          unit: "Mins",
        },
      ],
      tata_ace_desc: [
        "Extra Charges : ₹ 40/KM and ₹ 3.5/min (<=15KM)",
        "Extra Charges : ₹ 32/KM and ₹ 3.5/min (<=30KM)",
      ],
      dost_desc: [
        "Extra Charges : ₹ 47/KM and ₹ 4/min (<=15KM)",
        "Extra Charges : ₹ 39/KM and ₹ 4/min (<=30KM)",
      ],
      three_wheeler_desc: [
        "Extra Charges : ₹ 13/KM and ₹ 10/min (<=60 MINUTES)",
        "Extra Charges : ₹ 13/KM and ₹ 5/min (>60 MINUTES)",
      ],
    },
    activate_coupon: 0,
    coupon_text: "",
    coupon_count: 0,
    app_booking_start_time: "0",
    app_booking_end_time: "24",
    truckbody: {
      manufacturer: [
        {
          id: "1",
          name: "TATA",
        },
        {
          id: "2",
          name: "ASHOK LEYLAND",
        },
        {
          id: "3",
          name: "EICHER",
        },
        {
          id: "4",
          name: "FORCE",
        },
        {
          id: "5",
          name: "BHARATBENZ",
        },
        {
          id: "6",
          name: "ASIA MOTOR WORKS LTD",
        },
        {
          id: "7",
          name: "MAHINDRA & MAHINDRA",
        },
        {
          id: "8",
          name: "MAN FORCE TRUCKS LTD",
        },
        {
          id: "9",
          name: "BAJAJ",
        },
        {
          id: "10",
          name: "MARUTI",
        },
        {
          id: "11",
          name: "SWARAJ MAZDA LIMITED",
        },
        {
          id: "12",
          name: "TK Vehicle",
        },
        {
          id: "13",
          name: "VMT",
        },
        {
          id: "34",
          name: "Birla",
        },
        {
          id: "35",
          name: "ETO Motors",
        },
      ],
      body_type: {
        body: [
          {
            id: "1",
            type_of_body: "Open",
            specification: [
              {
                id: "1",
                specification: "LOW TECH",
              },
              {
                id: "2",
                specification: "HI TECH",
              },
            ],
          },
          {
            id: "2",
            type_of_body: "Closed",
            specification: [
              {
                id: "3",
                specification: "CLOSED",
              },
              {
                id: "4",
                specification: "CONTAINER",
              },
              {
                id: "5",
                specification: "AC CONTAINER",
              },
            ],
          },
          {
            id: "4",
            type_of_body: "Tanker",
            specification: [
              {
                id: "6",
                specification: "MS TANKER",
              },
              {
                id: "7",
                specification: "SS TANKER",
              },
            ],
          },
          {
            id: "5",
            type_of_body: "Tipper",
            specification: [
              {
                id: "8",
                specification: "Tipper",
              },
            ],
          },
          {
            id: "6",
            type_of_body: "Trailer",
            specification: [
              {
                id: "10",
                specification: "Trailer Low Bed",
              },
              {
                id: "11",
                specification: "Trailer High Bed",
              },
              {
                id: "12",
                specification: "Trailer Semi Low Bed",
              },
            ],
          },
          {
            id: "7",
            type_of_body: "Axles",
            specification: [
              {
                id: "9",
                specification: "Hydraulic Axles",
              },
              {
                id: "13",
                specification: "Single Axles",
              },
              {
                id: "14",
                specification: "Multi Axles",
              },
            ],
          },
          {
            id: "22",
            type_of_body: "Container",
            specification: [],
          },
          {
            id: "0",
            type_of_body: "Any",
            specification: [
              {
                id: "0",
                specification: "Any",
              },
            ],
          },
        ],
      },
      transporter_type: {
        1: "Driver Cum Owner",
        2: "Driver",
        3: "Fleet Operator",
        4: "Lorry Booking Office",
      },
    },
    intercity_materials: [
      {
        id: "27",
        value: "Agriculture Products",
      },
      {
        id: "1",
        value: "Auto Parts",
      },
      {
        id: "2",
        value: "Bardana jute or plastic",
      },
      {
        id: "3",
        value: "Building Materials",
      },
      {
        id: "4",
        value: "Cement",
      },
      {
        id: "45",
        value: "Chemicals",
      },
      {
        id: "6",
        value: "Coal And Ash",
      },
      {
        id: "7",
        value: "Container",
      },
      {
        id: "8",
        value: "Cotton seed",
      },
      {
        id: "9",
        value: "Electronics Consumer Durables",
      },
      {
        id: "10",
        value: "Fertilizers",
      },
      {
        id: "11",
        value: "Fruits And Vegetables",
      },
      {
        id: "12",
        value: "Furniture And Wood Products",
      },
      {
        id: "13",
        value: "House Hold Goods",
      },
      {
        id: "14",
        value: "Industrial Equipments",
      },
      {
        id: "15",
        value: "Iron sheets or bars or scraps",
      },
      {
        id: "16",
        value: "Liquids in drums",
      },
      {
        id: "17",
        value: "Liquids/Oil",
      },
      {
        id: "18",
        value: "Machinery new or old",
      },
      {
        id: "19",
        value: "Medicals",
      },
      {
        id: "20",
        value: "Metals",
      },
      {
        id: "21",
        value: "Mill Jute Oil",
      },
      {
        id: "22",
        value: "Packed Food",
      },
      {
        id: "23",
        value: "Plastic Pipes",
      },
      {
        id: "24",
        value: "powder bags",
      },
      {
        id: "25",
        value: "Printed books or Paper rolls",
      },
      {
        id: "26",
        value: "Refrigerated Goods",
      },
      {
        id: "28",
        value: "Scrap",
      },
      {
        id: "29",
        value: "Textiles",
      },
      {
        id: "30",
        value: "Tyres",
      },
      {
        id: "31",
        value: "Vehicles",
      },
    ],
    intracity_materials: [
      {
        id: "64",
        value: "Books/Stationery/Toys/Gifts ",
      },
      {
        id: "50",
        value: "Building/Construction",
      },
      {
        id: "51",
        value: "Catering/Restaurant/Event Management",
      },
      {
        id: "56",
        value: "Ceramics/Sanitary/Hardware",
      },
      {
        id: "58",
        value: "Chemicals/Paints",
      },
      {
        id: "48",
        value: "Electrical/Electronics/Home Appliances",
      },
      {
        id: "62",
        value: "FMCG/Food Products",
      },
      {
        id: "54",
        value: "Furniture/Home Furnishing",
      },
      {
        id: "49",
        value: "General",
      },
      {
        id: "55",
        value: "House Shifting",
      },
      {
        id: "59",
        value: "Logistics service provider/Packers and Movers",
      },
      {
        id: "52",
        value: "Machines/Equipments/Spare Parts/Metals",
      },
      {
        id: "57",
        value: "Paper/Packaging/Printed Material",
      },
      {
        id: "60",
        value: "Perishable food items",
      },
      {
        id: "61",
        value: "Pharmacy/Medical/Healthcare/Fitness Equipment",
      },
      {
        id: "63",
        value: "Plastic/Rubber",
      },
      {
        id: "53",
        value: "Textile/Garments/Fashion Accessories",
      },
      {
        id: "47",
        value: "Timber/Plywood/Laminate",
      },
      {
        id: "46",
        value: "Woods",
      },
    ],
    show_intercity: true,
    price_list: {
      filter: [],
      insurance: [],
      tonnage: [
        {
          value: "1",
          show_feet: false,
          show_sub_body: false,
          description: "1 Ton",
          vehicle_description: "TATA ACE / AL DOST",
          feet: [
            {
              id: "594",
              value: "1",
              description: "Any",
              rate_per_km: "30.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "2",
          show_feet: false,
          show_sub_body: false,
          description: "1.5 Ton",
          vehicle_description: "AL DOST",
          feet: [
            {
              id: "591",
              value: "1",
              description: "Any",
              rate_per_km: "15.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "3",
          show_feet: false,
          show_sub_body: false,
          description: "2 Ton",
          vehicle_description: "AL DOST",
          feet: [
            {
              id: "598",
              value: "1",
              description: "Any",
              rate_per_km: "17.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "4",
          show_feet: false,
          show_sub_body: false,
          description: "3 Ton",
          vehicle_description: "TATA 407",
          feet: [
            {
              id: "590",
              value: "1",
              description: "Any",
              rate_per_km: "30.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "5",
          show_feet: true,
          show_sub_body: true,
          description: "4 - 6 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "592",
              value: "2",
              description: "14 Feet",
              rate_per_km: "40.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "593",
              value: "3",
              description: "17 Feet",
              rate_per_km: "50.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "597",
              value: "4",
              description: "19 Feet",
              rate_per_km: "90.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "767",
              value: "5",
              description: "20 Feet",
              rate_per_km: "35.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "811",
              value: "16",
              description: "10 Feet",
              rate_per_km: "35.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "812",
              value: "15",
              description: "7 Feet",
              rate_per_km: "32.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "6",
          show_feet: true,
          show_sub_body: true,
          description: "6 - 9 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "595",
              value: "2",
              description: "14 Feet",
              rate_per_km: "60.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "768",
              value: "6",
              description: "21 Feet",
              rate_per_km: "35.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "7",
          show_feet: true,
          show_sub_body: true,
          description: "9 - 11 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "769",
              value: "7",
              description: "22 Feet",
              rate_per_km: "40.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "770",
              value: "9",
              description: "24 Feet",
              rate_per_km: "50.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "13",
          show_feet: true,
          show_sub_body: true,
          description: "12 - 16 TON\t",
          vehicle_description: null,
          feet: [
            {
              id: "792",
              value: "10",
              description: "32 Feet",
              rate_per_km: "35.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "793",
              value: "9",
              description: "24 Feet",
              rate_per_km: "80.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "794",
              value: "14",
              description: "12 Wheeler",
              rate_per_km: "80.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "17",
          show_feet: true,
          show_sub_body: true,
          description: "15 - 20 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "800",
              value: "13",
              description: "50 Feet",
              rate_per_km: "980.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
            {
              id: "801",
              value: "11",
              description: "40 Feet",
              rate_per_km: "980.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "8",
          show_feet: true,
          show_sub_body: true,
          description: "15 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "795",
              value: "10",
              description: "32 Feet",
              rate_per_km: "55.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "14",
          show_feet: true,
          show_sub_body: true,
          description: "26 - 30 TON\t",
          vehicle_description: null,
          feet: [
            {
              id: "796",
              value: "11",
              description: "40 Feet",
              rate_per_km: "60.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "15",
          show_feet: true,
          show_sub_body: true,
          description: "27 - 30 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "797",
              value: "9",
              description: "24 Feet",
              rate_per_km: "65.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "11",
          show_feet: true,
          show_sub_body: true,
          description: "55 - 60 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "798",
              value: "12",
              description: "44 Feet",
              rate_per_km: "980.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
        {
          value: "16",
          show_feet: true,
          show_sub_body: true,
          description: "60 - 70 Ton",
          vehicle_description: null,
          feet: [
            {
              id: "799",
              value: "12",
              description: "44 Feet",
              rate_per_km: "980.00",
              amount: 0,
              advance_amount: 0,
              discount_amount: 0,
              total_amount: 0,
            },
          ],
        },
      ],
    },
    vehicle_type: [
      {
        name: "TATA ACE",
        value: 1,
        tonnage: "1",
      },
      {
        name: "AL DOST / BOLERO",
        value: 16,
        tonnage: "1.5",
      },
      {
        name: "3 WHEELER",
        value: 579,
        tonnage: "0.5",
      },
    ],
    vehicle_body: [
      {
        name: "Any",
        value: 2,
      },
      {
        name: "Closed",
        value: 1,
      },
      {
        name: "Open",
        value: 0,
      },
    ],
  };

  useEffect(() => {
    let date = new Date();
    let assigndate = `${date.getFullYear()}-${
      date.getMonth()?.toString()?.length == 1
        ? "0" + date.getMonth()
        : date.getMonth()
    }-${
      date?.getDate()?.toString()?.length == 1
        ? "0" + date?.getDate()
        : date?.getDate()
    }`;

    setOutStationData((prev) => ({
      ...prev,
      ["Date of Pickup"]: [assigndate],
    }));
  }, []);

  const GuiData = FormatGui(
    data,
    "OutStation",
    outStationData?.["Tonnage"] || "1",
    outStationData?.["Vehicle Body Type"] || "1",
    outStationData?.["Date"] || null
  );

  const navigate = useNavigate();

  // const hanleDelEmptyField = useCallback(
  //   (idx1) => (event) => {
  //     let { name, value } = event?.target;
  //     if (name !== "Date of Pickup" && value?.length < 1) {
  //       let data = { ...outStationData };
  //       let returnData = data?.[`${name}`]?.filter((item, idx) => idx != idx1);
  //       setOutStationData((prev) => ({ ...prev, [`${name}`]: returnData }));
  //     }
  //   },
  //   [outStationData]
  // );

  const handleAddAddress = useCallback((name)=>(e)=>{
    let data = { ...outStationData };
    data[`${name}`].unshift({ address: "", lat: "", lng: "" });
    setOutStationData(data);
  },[outStationData])



  const handleAddText = useCallback(
    (name) => (event) => {
      if (name !== "Date of Pickup") {
        let data = { ...outStationData };
        data[`${name}`].unshift("");
        setOutStationData(data);
      }
    },
    [outStationData]
  );
  const handleDelete = useCallback(
    (name, idx1) => (event) => {
      let data = { ...outStationData };
      let returnData = data?.[`${name}`]?.filter((item, idx) => idx != idx1);
      setOutStationData((prev) => ({ ...prev, [`${name}`]: returnData }));
    },
    [outStationData]
  );

  const amountFormate = useCallback((value) => {
    const data = (value || "").toString().replace(/\D+/g, "").slice(0, 7);
    return data
      ? (parseFloat(data) / 100)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,")
      : "0.00";
  }, []);

  const handleEditaddress = useCallback(
    (index, name) => (newaddress) => {
      let data = { ...outStationData };
      data[`${name}`][index]["address"] = newaddress;
      setOutStationData(data);
    },
    [outStationData]
  );

  const handleEditText = useCallback(
    (index) => (event) => { 
      const {value, name}= event?.target
      let data = { ...outStationData };
      data[`${name}`][index] =
        name == "advance amount" ? amountFormate(value) : value;
      setOutStationData(data);
    },
    [outStationData]
  );

  const handleSubmit = useCallback(async() => {

    let post_data ={
      "advance_payment": 12504,
      "advance_payment_mode": 2,
      "auth_token": "Sb4szRciwZSbHmxDON0E-2zVrCQUQNh6",
      "body_specification": 0,
      "booking_creation_timestamp": "2022-09-01 17:06:44",
      "booking_filter": "[\"54\"]",
      "customer_id": "45805",
      "distance": 521,
      "droparray": "[{\"lat\":\"10.9642427\",\"long\":\"76.9700669\",\"addr_type\":\"drop\",\"address\":\"582/A1, Coimbatore, Tamil Nadu 641024, India\",\"recipient_name\":\"Vignesh\",\"recipient_phone\":\"8610960522\"}]",
      "dropcount": 1,
      "length": "1",
      "material_type": "Building Materials",
      "payment_type": 2,
      "pic_address": "16, Triplicane High Rd, Triplicane, Chennai, Tamil Nadu 600005, India",
      "pickup_lat": "13.064848918607",
      "pickup_long": "80.274032335728",
      "pickuparray": "[{\"lat\":\"13.064848918607\",\"long\":\"80.274032335728\",\"addr_type\":\"pickup\",\"address\":\"16, Triplicane High Rd, Triplicane, Chennai, Tamil Nadu 600005, India\",\"recipient_name\":\"Vignesh\",\"recipient_phone\":\"8610960522\"}]",
      "pod": 0,
      "pod_type": 2,
      "price_id": "594",
      "tonnage": "1",
      "total_booking_amount": "15630",
      "vehicle_body_type": "2"
    }

 let res = await axios.post(" https://admin-staging.wowtruck.in/webservice/intercityconfirmbooking",post_data )
  if (res.status==200){
    navigate("/booking_success");
  }
  }, []);

  const handleSelect = useCallback((event) => {
    const { name, value } = event.target;
    setOutStationData((prev) => ({ ...prev, [`${name}`]: value }));

    if (name == "Tonage" && value == "") {
      setOutStationData((prev) => ({ ...prev, ["Length"]: "" }));
    } else if (name == "Vehicle Body Type" && value == "") {
      setOutStationData((prev) => ({ ...prev, ["Specifications"]: "" }));
    }
  }, []);

  const handleDisabled = useCallback(
    (name) => {
      let allow = true;
      if (name == "Length" && outStationData?.["Tonnage"] == "") {
        allow = false;
      } else if (
        name == "Specifications" &&
        outStationData?.["Vehicle Body Type"] == ""
      ) {
        allow = false;
      } else {
        allow = true;
      }
      return !allow;
    },
    [outStationData]
  );

  const handleSelectAddress = useCallback(
    (index, name) => async (selectedAddress) => {
      let data = { ...outStationData };

      try {
        geocodeByAddress(selectedAddress)
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            data[`${name}`][index] = {
              address: selectedAddress,
              lat: lat,
              lng: lng,
            };
            setOutStationData(data);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    },
    []
  );




  return (
    <div
      className="row"
      style={{ marginLeft: "0px", padding: "10px 0px", height: "100vh" }}
    >
      {GuiData?.map((item, idx) => (
        <div>
          {item?.field == "address" && (
            <>
              {outStationData?.[item?.name]?.map((addressIndex, index) => (
                <CustomAddress
                name={item?.name}
                  handlePickupChange={handleEditaddress(index, item?.name)}
                  handlePickupSelect={handleSelectAddress(index, item?.name)}
                  value={addressIndex}
                  onClick={
                    index == 0
                      ? handleAddAddress(item?.name)
                      : handleDelete(item?.name, index)
                  }
                  ButtonImage={
                    index == 0
                    ? "+"
                    : "-"
                  }
                  disabled={
                    index == 0 && addressIndex?.address?.length < 1
                      
                  }
                />
              ))}
              {["Current Location", "Enter Desitination"].includes(
                item?.name
              ) && <PickUpPerson data={outStationData?.[item.name]} type={item?.name}/>}
            </>
          )}

          {( item.field == "date") && (
            <>
              {outStationData?.[item.name]?.map((item1, idx1) => (
                <>
                  <CustomeInput
                    name={item?.name}
                    value={item1 || ""}
                    buttonImage={
                      item?.name == "Insurance"
                        ?  ">"
                        :null 
                    }
                    onClick={
                      idx1 == 0
                        ? handleAddText(item?.name, item1)
                        : handleDelete(item?.name, idx1)
                    }
                    onChange={handleEditText(idx1)}
                    disabled={
                      item?.name != "Date of Pickup"
                        ? idx1 == 0 && item1?.length < 1
                        : false
                    }
                    type={item?.field}
                    //onBlur={hanleDelEmptyField(idx1)}
                  />
                </>
              ))}
              
            </>
          )}
          {item?.field == "select" && (
            <CustomeSelect
              name={item?.name}
              menuItems={item?.menuItem}
              value={outStationData?.[`${item?.name}`]}
              onChange={handleSelect}
              disabled={handleDisabled(item?.name)}
            />
          )}
          {outStationData?.["Book Later"] == "2" && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {item?.field == "group" &&
                item?.child?.map((item1) => (
                  <>
                  <CustomeSelect
                    name={item1?.name}
                    menuItems={item1?.menuItem}
                    value={outStationData?.[`${item1?.name}`]}
                    onChange={handleSelect}
                    disabled={handleDisabled(item1?.name)}
                    style={{width:"48%"}}
                  />
                  </>
                ))}
            </div>
          )}

          {item?.field == "button" && (
            <CustomButton
              ButtonImage={">"}
              name={item?.name}
              onClick={() => navigate("/Insurance")}
            />
          )}
          {item?.field == "amount" && outStationData?.["Material Type"] && (
            <CustomeAdvanceAmount />
          )}
        </div>
      ))}
      <button
        className="btn-blue"
        name="contact_form"
        id="contact_form"
        style={{ marginTop: "25px" }}
        onClick={handleSubmit}
      >
        Confirm & Book
      </button>
    </div>
  );
};

export default BookingOutStation;
