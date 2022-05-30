import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

import API from '../Data/API'

import Main1 from '../Component/Main1'
import Main2 from '../Component/Main2'
import Main3 from '../Component/Main3'


export default function Home() {
  const [data, setData] = useState([]);
  useEffect(
    ()=>{
        axios.get(API)
        .then(res=>setData(res.data))
        .catch(res=>console.log(res))
    },[])
  return (
    <>
      <div>
      <div className="row">
        <Main1 duLieu = {data}/>
        <Main2 duLieu = {data}/>
        <Main3 duLieu = {data}/>
      </div>
    </div>
    </>
  )
}
