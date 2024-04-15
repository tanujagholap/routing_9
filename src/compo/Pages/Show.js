import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


function Show() {

    const [users, setUser] = useState([])

    async function fethData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data);
    }

    useEffect(()=>{
        fethData();
    }, [])


    

  return (
    <center>
     <table className='table table-dark table-stripted'>
        <thead>
            <tr>
                <th>Roll:</th>
                <th>Name:</th>
                <th>Action:</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((obj)=>{
                    return(
                        <tr>
                            <td>{obj.roll}</td>
                            <td>{obj.name}</td>
                            <td>
                                <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning'>UPDATE</button></NavLink>
                                <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
     </table>
    </center>
  )
}

export default Show