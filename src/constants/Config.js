let Config;

// let ENV = "production";
let ENV = "staging";
// let ENV = "dev";
// let ENV = 'local';

if (ENV === "local") {
  Config = {
    SITE_URL: "http://www.wowtruck.in",
    FLEET_WEBSITE_URL: "http://fleet-dev.wowtruck.in/",
    CCPHONE: "044 40257777",
    DCPHONE: "044 40257766",
    PRODUCTS_URL: "https://products.wowtruck.in/",

    SERVICE_URL: "http://wowtruckadmin.test/",
    CUSTOMERAPP_CONTROLLER: "customerapp/",
    WEBSERVICE_CONTROLLER: "webservice/",

    WEB_SOCKET_URL: "ws://localhost:3000",
    WEB_SOCKET_SERVICE_URL: "http://localhost:3000/",
    WEBSOCKET_CONTROLLER: "customer/",

    VECHICLE_TYPE: [
      { name: "TATA ACE", value: 1 },
      { name: "AL DOST", value: 16 },
      // { "name": "TATA 407", "value": 27 },
    ],

    VECHICLE_BODY: [
      { name: "Open", value: 2 },
      { name: "Closed", value: 1 },
      { name: "Any", value: 0 },
    ],
    CUSTOMER_ID: 44405,
    CUSTOMER_TOKEN: "lHHP4t_jJ3nBHvwYkPKX5Zgq7GKDPdAL",
    GOOGLE_KEY: "AIzaSyAt_rHFmRYXwRKSUCqZmzmL6IWN9qgyKr0",
    GOOGLE_MAP_KEY: "AIzaSyCzMTgGSaW2JSv65rHLgOdU2PLEDOfbu_A",
  };
} else if (ENV === "dev") {
  Config = {
    SITE_URL: "http://www.wowtruck.in",
    FLEET_WEBSITE_URL: "http://fleet-dev.wowtruck.in/",
    CCPHONE: "044 40257777",
    DCPHONE: "044 40257766",
    PRODUCTS_URL: "https://products.wowtruck.in/",

    SERVICE_URL: "http://dev.wowtruck.in/",
    CUSTOMERAPP_CONTROLLER: "customerapp/",
    WEBSERVICE_CONTROLLER: "webservice/",

    WEB_SOCKET_URL: "ws://13.127.71.162:3000",
    WEB_SOCKET_SERVICE_URL: "http://13.127.71.162:3000/",
    WEBSOCKET_CONTROLLER: "customer/",

    VECHICLE_TYPE: [
      { name: "TATA ACE", value: 1 },
      { name: "AL DOST", value: 16 },
      // { "name": "TATA 407", "value": 27 },
    ],
    VECHICLE_BODY: [
      { name: "Open", value: 2 },
      { name: "Closed", value: 1 },
      { name: "Any", value: 0 },
    ],
    CUSTOMER_ID: 44405,
    CUSTOMER_TOKEN: "lHHP4t_jJ3nBHvwYkPKX5Zgq7GKDPdAL",
    GOOGLE_KEY: "AIzaSyAt_rHFmRYXwRKSUCqZmzmL6IWN9qgyKr0",

    SUPPLIER_APP_URL:
      "https://play.google.com/store/apps/details?id=in.wowtruck.supplierapp",
    GOOGLE_MAP_KEY: "AIzaSyCzMTgGSaW2JSv65rHLgOdU2PLEDOfbu_A",
  };
} else if (ENV === "staging") {
  Config = {
    SITE_URL: "https://www.wowtruck.in",
    FLEET_WEBSITE_URL: "http://fleet-dev.wowtruck.in/",
    CCPHONE: "044 40257777",
    DCPHONE: "044 40257766",
    SUPPLIER_APP_URL:
      "https://play.google.com/store/apps/details?id=in.wowtruck.supplierapp",
    PRODUCTS_URL: "https://products.wowtruck.in/",

    SERVICE_URL: "https://admin-staging.wowtruck.in/",
    CUSTOMERAPP_CONTROLLER: "customerapp/",
    WEBSERVICE_CONTROLLER: "webservice/",

    WEB_SOCKET_URL: "ws://13.127.89.92:3000",
    WEB_SOCKET_SERVICE_URL: "http://13.127.89.92:3000/",
    WEBSOCKET_CONTROLLER: "customer/",

    VECHICLE_TYPE: [
      { name: "TATA ACE", value: 1 },
      { name: "AL DOST", value: 16 },
      // { "name": "TATA 407", "value": 27 },
    ],
    VECHICLE_BODY_TYPE: [
      { name: "Open", value: 1 },
      { name: "Closed", value: 2 },
      { name: "Tanker", value: 3 },
      { name: "Tipper", value: 4 },
      { name: "Any", value: 5 },
    ],
    VECHICLE_BODY: [
      { name: "Open", value: 2 },
      { name: "Closed", value: 1 },
      { name: "Any", value: 0 },
    ],
    CUSTOMER_ID: 44405,
    CUSTOMER_TOKEN: "lHHP4t_jJ3nBHvwYkPKX5Zgq7GKDPdAL",
    GOOGLE_KEY: "AIzaSyAt_rHFmRYXwRKSUCqZmzmL6IWN9qgyKr0",
    // GOOGLE_MAP_KEY: "AIzaSyA1BwztXA7rDx3_Zjukty2gJe6mPJG_VZ0",
    GOOGLE_MAP_KEY: "AIzaSyBMeyTr5MeTJpriLMC68jxa3FofnE0X2ak",
  };
} else if (ENV === "production") {
  Config = {
    SITE_URL: "https://www.wowtruck.in",
    FLEET_WEBSITE_URL: "https://fleet.wowtruck.in/",
    CCPHONE: "044 40257777",
    DCPHONE: "044 40257766",
    SUPPLIER_APP_URL:
      "https://play.google.com/store/apps/details?id=in.wowtruck.supplierapp",
    PRODUCTS_URL: "https://products.wowtruck.in/",

    SERVICE_URL: "https://a.wowtruck.in/",
    CUSTOMERAPP_CONTROLLER: "customerapp/",
    WEBSERVICE_CONTROLLER: "webservice/",

    WEB_SOCKET_URL: "https://node.wowtruck.in",
    WEB_SOCKET_SERVICE_URL: "https://node.wowtruck.in/",
    WEBSOCKET_CONTROLLER: "customer/",

    VECHICLE_TYPE: [
      { name: "TATA ACE", value: 1 },
      { name: "AL DOST", value: 16 },
      // { "name": "TATA 407", "value": 27 },
    ],
    VECHICLE_BODY: [
      { name: "Open", value: 2 },
      { name: "Closed", value: 1 },
      { name: "Any", value: 0 },
    ],
    CUSTOMER_ID: 85431,
    CUSTOMER_TOKEN: "lHHP4t_jJ3nBHvwYkPKX5Zgq7GKDPdAL",
    GOOGLE_KEY: "AIzaSyBicxHGJ5wtQQVrR94wotN4JdDYOwfh-x0",
    GOOGLE_MAP_KEY: "AIzaSyBMeyTr5MeTJpriLMC68jxa3FofnE0X2ak",
  };
}

Config.displayPopupImage = false;
Config.POD_ID = "54";
export { Config };
