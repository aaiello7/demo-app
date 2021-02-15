import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch , Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Login from './components/Login'
import HeadBar from './components/HeadBar'
import SocialFeed from './components/SocialFeed'
import Treats from './components/Treats'
import Camera from './components/Camera'
import Nearby from './components/Nearby'
import PetProfile from './components/PetProfile'
import Footer from './components/Footer'
import VetProfile from './components/VetProfile';
import Schedule from './components/Schedule';

const useStyles = makeStyles ((theme) => ({
  mobileScreen: {
    maxWidth: "480px",
    margin: "auto",
  }
}));

function App() {
  const classes = useStyles(); 

  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogged] = useState(false);


  function fetchProfile(user) {
    setUserInfo(user);
    setIsLogged(false);
  }

  function verifyLogScreen(toggle) {
    setIsLogged(toggle)
  }

  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <div className={classes.mobileScreen}>
        {/* Multi Page Render on Switch */}
        {!isLogin && 
          <HeadBar 
          />}
        <Switch>
            <Route exact path="/">
              <Login
              isLogin={verifyLogScreen}
              getUser={fetchProfile}
              /> 
            </Route>
            <Route path="/feed">
              <SocialFeed 
                user={userInfo}
              />
              </Route>
              <Route path="/petProfile">
                <PetProfile 
                />
              </Route>
              <Route path="/Treats">
                <Treats 
                />
              </Route>
              <Route path="/Camera">
                <Camera 
                />
              </Route>
              <Route path="/Nearby">
                <Nearby 
                />
              </Route>
              <Route path="/vetProfile">
                <VetProfile 
                />
              </Route>
              <Route path="/Schedule">
                <Schedule 
                />
              </Route>
        </Switch>   
        <Footer 
          isLogin = {!isLogin}
        />
      </div>
     
    </ThemeProvider>
  );
}

export default App;

