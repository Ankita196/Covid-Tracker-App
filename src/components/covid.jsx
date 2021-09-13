import React, {useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:10,
    alignItems: 'center',
   
    
  },
  paper: {
  
      padding: theme.spacing(2),
      height:250,
      width:250,
      textAlign: 'center',
      color:"#004d40",
     
      fontSize:30,
      fontFamily:"Lucida Console",
     backgroundImage:"linear-gradient(#b2dfdb,white)"
    
  },
  

  papers: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color:"#004d40",
    fontWeight:"bold",
    fontSize:30,
    fontFamily:"Lucida Console"
    
  },
  avtar:{
    display: 'flex',
    justifyContent:"center",
    
   '& > <ArrowRightIcon style={{fontSize:20}} />': {
     margin: theme.spacing(2),
    
 }
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
   getCovidData()
},[])

  return (
    <div  className={classes.root}  ><br/><br/><br/>
    <Grid container spacing={6} className={classes.avtar}className={classes.root}>
      <Grid item xs={12}className={classes.papers} >
        COVID19 TRACKER <br/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}><Typography style={{fontSize:30,fontFamily:"Lucida Console",}} >Total Active cases</Typography> <br/> {data.active}      </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}> <Typography style={{fontSize:30,fontFamily:"Lucida Console",}} >Total Confirmed</Typography> <br/><br/> {data.confirmed}</Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}><Typography style={{fontSize:30,fontFamily:"Lucida Console",}} > Total Deaths</Typography><br/><br/>  {data.deaths }</Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}> <Typography style={{fontSize:30,fontFamily:"Lucida Console",}} >Last updatedtime </Typography><br/><br/> {data.lastupdatedtime}</Paper>
      </Grid>
      <Grid item xs={12}  sm={}>
        <Paper className={classes.paper}> <Typography style={{fontSize:30,fontFamily:"Lucida Console",}} >Total recovered</Typography> <br/><br/> {data.recovered}</Paper>
      </Grid>
      <Grid item xs={12}  sm={}>
        <Paper className={classes.paper}> <Typography style={{fontSize:30,fontFamily:"Lucida Console",}} >Migrated Other</Typography> <br/><br/> {data.migratedother}</Paper>
      </Grid>
    </Grid>
  </div>
);
}
