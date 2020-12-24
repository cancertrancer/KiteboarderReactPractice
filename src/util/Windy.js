//const url = 'https://api.windy.com/api/point-forecast/v2';
//const lat = 26.484;
//const long = -82.004;
//const models = ['gfs', 'namConus'];
//const parameters = ['temp', 'precip', 'wind', 'windGust', 'rh'];
//const levels = 'surface';
//const key = 'N72ErLMBgD4tEOUy5G695g5N1ofz3qdO';


const Windy = {
    search() {
      const xhr = new XMLHttpRequest();
      const url = "https://api.windy.com/api/point-forecast/v2";
      const body = {
        "lat": 26.484,
        "lon": -82.004,
        "model": "gfs",
        "parameters": ["temp", "precip", "wind", "windGust", "rh"],
        "levels": ["surface"],
        "key": "N72ErLMBgD4tEOUy5G695g5N1ofz3qdO"
      }
      xhr.responseType = "json";
      xhr.onreadystatechange = () => {
          if (xhr.readystate === XMLHttpRequest.DONE) {
              console.log(xhr.readystate);
          }
      };
      xhr.open("POST", url);
      xhr.send(body);
    }
}

export default Windy;

const Windy = {
    search() {
      fetch('https://api.windy.com/api/point-forecast/v2', {
          method: 'POST',
          body: {
              'lat': 26.484,
              'lon': -82.004,
              'model': 'gfs',
              'parameters': ['temp', 'precip', 'wind', 'windGust', 'rh'],
              'levels': ['surface'],
              'key': 'N72ErLMBgD4tEOUy5G695g5N1ofz3qdO'
          }
      }).then(response => {
          if (response.ok) {
              return response.json();
          } else {
              console.log('Error!');
          }
      }).then(jsonResponse => {
          console.log(jsonResponse);
      });
    }
  }