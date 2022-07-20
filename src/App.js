import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [set, getset] = useState([]);
  flag = Boolean;
  let fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => getset(data));
    flag = false;
  };
  return (
    <div>
      <h1> Users Data </h1>
      <p>Click the button to get Users data</p>
      <button onClick={fetchdata}> Click me </button>
      <div>
        {Object.values(set).map((value) => {
          return (
            <div style={{ display: "inline", width: "180px", height: "180px" }}>
              <div style={{ display: "block", float: "center" }}>
                <h4>Id:{value.id}</h4>
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars
/${value.username}.svg?options[mood][]=happy`}
                  width="100px"
                  height="100px"
                />
                <h4>Name:{value.name}</h4>
                <h4>username:{value.username}</h4>
              </div>
            </div>
          );
        })}
        <div flag="true">
          <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
