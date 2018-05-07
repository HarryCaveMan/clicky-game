import React from "react";
import logo from '../logo.svg';
import Grid from 'material-ui/Grid';

export const Scoreboard = props => 
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <Grid container spacing={24} justify="space-around">
  <Grid item xs={4}>
  <h2 className="App-title"> High Score: {props.highScore}</h2>
  </Grid>
  <Grid item xs={4}>
  <h1 className="App-title">Clicky Birbs!</h1>
  </Grid>
  <Grid item xs={4}>
  <h2 className="App-title"> Current Score:{props.score}</h2>
  </Grid>
  </Grid>
</header>
;



