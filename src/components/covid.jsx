import React, {useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


export default function Covid() {
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
    <div>
      <h1>Covid</h1>
      <p>{data.active}</p>
    </div>
  );
}
