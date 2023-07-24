import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    longitude: undefined,
    latitude: undefined,
    description: undefined,
    weather: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call =
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
        &APPID=b9be2ac3359d379601590bb23a6e2952`);

    const data = await api_call.json();

    console.log({ data });

    if (city && country) {
      if (data.cod === 404) {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          weather: undefined,
          error: "Input doesn't match any known location!",
        });
      }
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        longitude: data.coord.lon,
        latitude: data.coord.lat,
        description: data.weather[0].description,
        weather: data.weather[0].main,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        longitude: undefined,
        latitude: undefined,
        description: undefined,
        weather: undefined,
        error: "please enter your city and country",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Title />
                </div>
                <div className="col-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    longitude={this.state.longitude}
                    latitude={this.state.latitude}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    weather={this.state.weather}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
