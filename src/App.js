import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { lightBlue, deepPurple } from "@material-ui/core/colors";
import "./App.css";
import { functions } from "./firebase";
import CustomTextField from "./components/Fields";
import CustomButton from "./components/Buttons";

function App() {
  const [summonerName, setSummonerName] = useState("");
  const [response, setResponse] = useState([]);
  const [toggleTheme, setToggleTheme] = useState(false);
  const mainPrimaryColor = toggleTheme ? "#482880" : lightBlue[500];
  const mainSecondaryColor = toggleTheme ? "#3d5afe" : deepPurple[500];
  const customTheme = createMuiTheme({
    palette: {
      type: toggleTheme ? "dark" : "light",
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
    props: {
      MuiAppBar: {
        variant: "outlined",
        position: "sticky",
      },
      MuiPaper: {
        square: true,
      },
    },
  });
  const retrieveSummonerInfo = async () => {
    const getSummonerByName = functions.httpsCallable("getSummonerByName");
    const summonerData = await getSummonerByName({
      summonerName,
      riotKey: process.env.REACT_APP_RIOT_KEY_TEMP,
    });
    setResponse([JSON.stringify(summonerData.data).split(","), ...response]);
  };
  const handleThemeChange = () => {
    setToggleTheme((curr) => !curr);
  };
  return (
    <ThemeProvider theme={customTheme}>
      <Paper className="App">
        <AppBar>
          <Toolbar>
            <Typography>LoL Fans</Typography>
            <div className="filler" />
            <div className="row">
              <CustomTextField
                value={summonerName}
                setValue={setSummonerName}
                placeholder="Enter Summoner Name"
              />
              <CustomButton action={retrieveSummonerInfo} label="Search" />
            </div>
            <div className="filler" />
            <Switch onChange={handleThemeChange} checked={toggleTheme} />
          </Toolbar>
        </AppBar>
        <Grid container spacing={0}>
          <Grid className="gridColumn" item xs={12} md={12}>
            {response.map((summoner, i) => (
              <div key={i} className="listItem">
                {summoner.map((attribute, j) => (
                  <div className="margin10Top" key={j}>
                    <Typography className="text">{attribute}</Typography>
                  </div>
                ))}
              </div>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
