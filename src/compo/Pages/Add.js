import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    function savedata(data){
        axios.post('http://localhost:5000/users', data)
        // alert('record added')
        navi('/show')
    }

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

export default Add