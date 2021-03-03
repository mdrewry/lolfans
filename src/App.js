import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./firebase";
function App() {
  const [test, setTest] = useState("❌");
  useEffect(() => {
    const getData = async () => {
      const responseDoc = await firestore.collection("other").doc("test").get();
      setTest(responseDoc.data().message);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{test}</p>
      </header>
    </div>
  );
}

export default App;
