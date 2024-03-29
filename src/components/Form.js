import React, { Component } from "react";

function Form(props) {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <input type="text" name="country" placeholder="country" />
      <button>Get weather</button>
    </form>
  );
}

export default Form;
