//const url = 'https://api.windy.com/api/point-forecast/v2';
//const lat = 26.484;
//const long = -82.004;
//26.485170269658564, -82.00530052609375
//const models = ['gfs', 'namConus'];
//const parameters = ['temp', 'precip', 'wind', 'windGust', 'rh'];
//const levels = 'surface';
//const key = 'N72ErLMBgD4tEOUy5G695g5N1ofz3qdO';

const Windy = {   //this XHR is formatted same as last fetch() request. I think it actually may be a 500 internal server error :(
    search() {
      const xhr = new XMLHttpRequest();
      const url = "https://api.windy.com/api/point-forecast/v2"; //https://cors-anywhere.herokuapp.com/
      //const header = {
        //"Content-Type": "application/json",
        //"Accept": "application/json",
        //"Origin": "http://192.168.0.16:3000",
        //"X-Requested-With": "XMLHttpRequest"
      //}
      const body = {
        "lat": 26.484,
        "lon": -82.004,
        "model": "gfs",
        "parameters": ["temp", "precip", "wind", "windGust", "rh"],
        "levels": ["surface"],
        "key": "N72ErLMBgD4tEOUy5G695g5N1ofz3qdO"
      };
      xhr.responseType = "json";
      xhr.onreadystatechange = () => {
          if (xhr.readystate === XMLHttpRequest.DONE) {
              console.log(xhr.readystate);    //this line is returning: bootstrap:82 XHR finished loading: GET "http://192.168.0.16:3000/f6729087fcb0b98a8c27.hot-update.json"
          }
      };
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
      //xhr.setRequestHeader("Origin", "http://192.168.0.16:3000");
      //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(body);
    }
}

export default Windy;