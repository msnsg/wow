//var env = "development";
//var env = "staging";
var env = "production";

var script = document.createElement("script");
script.type = "text/javascript";
//&callback=Function.prototype
if (env === "production") {
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMeyTr5MeTJpriLMC68jxa3FofnE0X2ak&libraries=places&region=in`;
} else if (env === "staging") {
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA1BwztXA7rDx3_Zjukty2gJe6mPJG_VZ0&libraries=places&region=in`;
} else {
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzMTgGSaW2JSv65rHLgOdU2PLEDOfbu_A&libraries=places&region=in`;
}
script.async = true;
script.defer = true;
document.head.appendChild(script);
