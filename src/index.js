import React from "react";
import ReactDOM from "react-dom";

const day = new Date();
const time = day.getHours();
let wishes;

const colorstyle = {
  color: ""
};

if (time < 12) {
  wishes = "Good morning";
  colorstyle.color = "red";
} else if (time < 18) {
  wishes = "Good afternoon";
  colorstyle.color = "green";
} else if (time > 18) {
  wishes = "Good night";
  colorstyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 style={colorstyle}>{wishes}</h1>
  </div>,
  document.getElementById("root")
);
