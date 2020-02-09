import React from "react";
import ReactDOM from "react-dom";
import SocialFollow from "./SocialCard";
import "./style.css";

function App() {
    return (
        <div className="App">
            <h1>Social Cards</h1>
            <SocialFollow />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
