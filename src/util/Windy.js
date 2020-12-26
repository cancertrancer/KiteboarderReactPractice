//const url = 'https://api.windy.com/api/point-forecast/v2';
//const lat = 26.484;
//const long = -82.004;
//26.485170269658564, -82.00530052609375
//const models = ['gfs', 'namConus'];
//const parameters = ['temp', 'precip', 'wind', 'windGust', 'rh'];
//const levels = 'surface';
//const key = 'N72ErLMBgD4tEOUy5G695g5N1ofz3qdO';

const Windy = {   //got it to where it's returning a 500 error instead of 400!
    search() {
      fetch('https://cors-anywhere.herokuapp.com/https://api.windy.com/api/point-forecast/v2', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
          body: {
              'lat': 26.485170269658564,
              'lon': -82.00530052609375,
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

export default Windy;