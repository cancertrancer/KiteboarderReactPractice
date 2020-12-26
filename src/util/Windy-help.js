const Windy = { //boilerplate fetch POST request
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

  const Windy = {   //xhr POST boilerplate
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
      };
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

const Windy = {   //This one is with CORS solution added + headers based on research; now getting 500 error instead of 400!
    search() {
      fetch('https://cors-anywhere.herokuapp.com/https://api.windy.com/api/point-forecast/v2', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
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