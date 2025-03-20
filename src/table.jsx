// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Tables(data1) {
    const[tableData,setTableData]=useState(null);   
    useEffect(()=>{
        fetch('https://67d7ed039d5e3a10152c9a65.mockapi.io/user/details', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(tasks => {
          
            setTableData(tasks)
          
          }).catch(error => {
            console.log(error);
            
            // handle error
          })
    },[data1.ref])

    const deleteUser=(id)=>{
          
fetch(`https://67d7ed039d5e3a10152c9a65.mockapi.io/user/details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("Your Data is Deleted successfully...!")
  data1.setRef(!data1.ref)
  // Do something with deleted task
}).catch(error => {
  // handle error
})
    }


    console.log(tableData)
  return (
    <>
     <Button variant="primary" className="mb-3" onClick={createUser}>Add Data</Button>
    <Table striped bordered hover variant="dark">
      <thead >
        <tr className="fs-4 text-center">
          <th className="p-3" >S.No</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">PhoneNo</th>
          <th className="p-3">Address</th>
          <th className="p-3">Qualification</th>
          <th className="p-3">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {tableData&&tableData.map((item,index)=>{
            return(
                <>
              <tr className="fs-5">
          <td className="p-1">{index+1}</td>
          <td className="p-1">{item.Name}</td>
          <td className="p-1">{item.Email}</td>
          <td className="p-1">{item.PhoneNo}</td>
          <td className="p-1">{item.Address}</td>
          <td className="p-1">{item.Qualification}</td>
          <td className="p-1">
            <Button variant="success" onClick={()=>data1.popClick(item)}>Edit</Button>
            <Button variant="danger" onClick={()=>deleteUser(item.id)}> Delete</Button>
          </td>
        </tr>
                </>
            )
        })}
     
      
      </tbody>
    </Table>
    </>
  );
}