import React, {useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'block',
    
   
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:60,
    width:300,
    fontWeight:"bold",
    fontFamily:"Lucida Console",
    backgroundImage:"linear-gradient(#4db6ac,#b2dfdb)"
    
  },
  papers: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color:"#004d40",
    fontWeight:"bold",
    fontSize:30,
    fontFamily:"Lucida Console"
    
  },
  
}));


export default function Covid() {
  const classes = useStyles();
 const [data, setData]= useState([])
const getCovidData= async ()=>{
try {
const res= await fetch('https://data.covid19india.org/data.json');
const actualData= await res.json()
console.log(actualData.statewise[0])
setData(actualData.statewise[0])
}catch(err){
  console.log(err)
}
}

useEffect(()=>{
  // getCovidData()
},[])

  return (
    <div >
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.papers}>Covid 19 Tracker App</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Total Active cases <br/><br/> {data.active}      </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}> Total Confirmed <br/><br/> {data.confirmed}</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}> Total Deaths<br/><br/>  {data.deaths }</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}> Last updatedtime <br/><br/> {data.lastupdatedtime}</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}> Total recovered <br/><br/> {data.recovered}</Paper>
      </Grid>
     
    </Grid>
  </div>
);
}
