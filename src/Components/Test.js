import React, { useEffect, useState } from 'react'
import {csv,keys} from 'd3';
import Papa from 'papaparse';
import data from './test.csv';
import { stringify } from 'flatted';
import alasql from 'alasql';
// const csv = require('csvtojson');
const Test = () => {
  const [st,setSt] = useState([]);
  const [load,setLoad] = useState(false);
  const [head,setHead] = useState()
  // async function GetData(artist) {
  //     const data = Papa.parse(await fetchCsv());
  //     console.log(data);
  //     return data;
  // }

  // async function fetchCsv() {
  //     const response = await fetch('./test.csv');
  //     // const reader = response.body.getReader();
  //     // const result = await reader.read();
  //     // const decoder = new TextDecoder('utf-8');
  //     // const csv = await decoder.decode(result.value);
  //     // console.log('csv', csv);
  //     // return csv;
  // }


  useEffect(() => {
    // csv({headers:false}).fromFile('../Components/test.csv').then(source=>{
    //   // c.push(source);
    //   // console.log(source);
    //   setSt(source);
    // })  
    // GetData();
    // csv('test.csv', (error, t) => 
    //   console.log(t)
      
    // );
    // setSt(t)
    // console.log(data);
    let stt=[]
    setLoad(true);
    csv(data, function(data) {setSt(existing=>[...existing,data])})
    
    setLoad(false);
    setSt(stt);
  }, []);

  const getHeaders = (id) => {
    var data = [ { name: 'bill' , sex:'M', income:"50000" },
                { name: 'sara' , sex:'F', income:"100000" },
                { name: 'sara' , sex:'F', income:"100000" },
                { name: 'sara' , sex:'F', income:"100000" },
                { name: 'sara' , sex:'F', income:"223488" }];

   // Do the query
  //  console.log(alasql("SELECT * FROM ? ",[data]));
    // console.log(st,alasql("SELECT polidyID FROM ? ",[st]));
    // for (var item of st){
    //   console.log("stt",item.policyID="433512");
    // }
    // console.log(st.length);
    // console.log("st",st)
    let dt=[]
    var qry = `SELECT * FROM ? as a JOIN ? as b`
    console.log(qry)
    // dt = alasql(`SELECT * FROM ?,? where ?.policyID=?.income`,[st,data]);
    dt = alasql('SELECT * FROM ? as a JOIN ? as b where a.policyID=b.income',[st,data]);
    console.log("dt",dt)
    // {!load && st.map((item)=>(
    //   String(item.policyID) === String(id) ? dt.push(item) : null
    // ))}
    // console.log("dt",dt);
    return dt;
  }
  return (
    <div>
      this is test component 
      {!load && getHeaders("223488").map((item,index)=>{
        
        return <h1>{item.policyID}</h1>
      })}
      {/* {!load && console.log(st)} */}
      {/* {!load && getHeaders()} */}

    </div>  
  )
}

export default Test
