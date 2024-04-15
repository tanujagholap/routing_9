import React, { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const navi = useNavigate();

    const {userId} = useParams();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('roll', result.data.roll);
        setValue('name', result.data.name);
    }

    function savedata(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show');
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <center>
      <div>
          <form onSubmit={handleSubmit(savedata)}>
              <label htmlFor='r'>ROLL:</label>
              <input type='number' id='r' {...register('roll')}/>
              <br/>
              <label htmlFor='n'>NAME:</label>
              <input type='text' id='n'{...register('name')}/>
              <br/><br/>
              <input type='submit' value="Add User"></input>
          </form>
      </div>
    </center>
  )
}

export default Update