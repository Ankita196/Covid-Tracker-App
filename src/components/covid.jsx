import React, {useEffect,useState} from "react";


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
