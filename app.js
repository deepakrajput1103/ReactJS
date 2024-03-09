import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";


    // never use index as a key because it is a bad practice.



const App = ()=>{
    return (
        <div className="Layout">
            <Header/>
            <Body/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);