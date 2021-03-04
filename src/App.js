import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firestore, functions } from "./firebase";
import CustomTextField from "./components/Fields";
import CustomButton from "./components/Buttons";
function App() {
  const [summonerName, setSummonerName] = useState("baark");
  const [response, setResponse] = useState(["not found"]);
  useEffect(() => {
    // const getData = async () => {
    //   const responseDoc = await firestore.collection("other").doc("test").get();
    //   setTest(responseDoc.data().message);
    // };
    // getData();
  }, []);
  const retrieveSummonerInfo = async () => {
    const getSummonerByName = functions.httpsCallable("getSummonerByName");
    const response = await getSummonerByName({
      summonerName,
      riotKey: process.env.REACT_APP_RIOT_KEY_TEMP,
    });
    setResponse(JSON.stringify(response.data).split(","));
  };
  return (
    <div className="App">
      <div className="section">
        <div className="row">
          <CustomTextField value={summonerName} setValue={setSummonerName} />
          <CustomButton action={retrieveSummonerInfo} label="Search" />
        </div>
      </div>
      {response.map((v, index) => (
        <p key={index}>{v}</p>
      ))}
    </div>
  );
}

export default App;
