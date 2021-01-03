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

  const Windy = {   //added additional headers based on herokuapp suggestions
    search() {
      fetch("https://cors-anywhere.herokuapp.com/https://api.windy.com/api/point-forecast/v2", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Origin": "http://192.168.0.16:3000",
              "X-Requested-With": "XMLHttpRequest"
            },
          body: {
              "lat": 26.485170269658564,
              "lon": -82.00530052609375,
              "model": "gfs",
              "parameters": ["temp", "precip", "wind", "windGust", "rh"],
              "levels": ["surface"],
              "key": "N72ErLMBgD4tEOUy5G695g5N1ofz3qdO"
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

  const Windy = {   //getting error: name_not_resolved after adding xhr.setRequestHeader() functions
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
              console.log(xhr.readystate);
          }
      };
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
      //xhr.setRequestHeader("Origin", "http://192.168.0.16:3000");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(body);
    }
}

const Windy = {   //returning 500 error wih NO info, I think it actually may be a development server error
search() {
  fetch("https://api.windy.com/api/point-forecast/v2", {  //https://cors-anywhere.herokuapp.com/
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          //"X-Requested-With": "XMLHttpRequest"
        },
      body: {
          "lat": 26.485170269658564,
          "lon": -82.00530052609375,
          "model": "gfs",
          "parameters": ["temp", "precip", "wind", "windGust", "rh"],
          "levels": ["surface"],
          "key": "N72ErLMBgD4tEOUy5G695g5N1ofz3qdO"
      }
  }).then(response => {
      if (response.ok) {
          return response.json();
      }
  }).then(jsonResponse => {
      console.log(jsonResponse);
  }).catch(error => {
      console.log(error);
  });
}
}