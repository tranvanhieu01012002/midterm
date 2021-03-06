import axios from 'axios';
import React from 'react'

import Form from '../Component/Form'
import { useEffect,useState } from 'react';
import Show from '../Component/Show';
import API from '../Data/API';

export default function Add() {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState("add")
  const [status,setStatus] = useState(false)
  const [posting, setPosting] = useState({
    img:'',
    title:'',
    content:'',
    show:''
    });
  
  useEffect(
    ()=>{
        axios.get(API)
        .then(res=>setData(res.data))
        .catch(res=>console.log(res))
    },[status])
    //done

    const  deletee = async (e)=>{
      await axios.delete(`${API}/${e.target.id}`)
      .then(res => {
      console.log(res);
      console.log(res.data);})
      setStatus(!status)
      alert("Bạn đã xóa thành công tin tức");
  }

  const edit = (e)=>{
    axios.get(`${API}/${e.target.id}`)
    .then(res=>{
      setPosting(res.data);
      setBtn("edit")
    })
    .catch(res=>console.log(res))
  }
    const changeHandler = e => {
      let name = e.target.name
      let value = e.target.value
      if(name === "img"){
        value = ""+ document.querySelector("#image").files.item(0).name;
      }
      setPosting({...posting, [name]: value})
    }
   const submit = e=>{
      e.preventDefault()
      document.querySelector("#submit").innerHTML === 'add'
       ?
       axios.post(API, posting)
       .then(res => {
         setStatus(!status)
         alert("Bạn đã thêm thành công tin tức");
         // after post need to reset form
         reset();
       })
       :
       axios.put(`${API}/${posting.id}`, posting)
       .then(res => {
         console.log(res);
         alert("Bạn đã thay đổi thành công tin tức");
         console.log(res.data);
         setStatus(!status)
       })
   }
   const reset = ()=>{
    setPosting({img:'',title:'',content:'',show:''})
   }
  return (
    <>
      <Form 
       action={btn}
       posting = {posting}
       changeHandler = {changeHandler}
       submit = {submit} 
       reset = {reset}/>
        
      <Show
        edit ={edit}
        data={data}
        delete={deletee}
      
      ></Show>
    </>
  )
}
