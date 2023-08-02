
import { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function App() {

  useEffect(()=>{
    fetch('http://localhost:5041/studentData')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, []);
  const [dataa, setData] = useState([]);




  useEffect(()=>{
    fetch('http://localhost:5041/studentData9th')
    .then(ress => ress.json())
    // .then(data => console.log(data))
    .then(data1 => setData2(data1))
    .catch(errr => console.log(errr));
  }, []);

  const [dataa2, setData2] = useState([]);




  useEffect(()=>{
    fetch('http://localhost:5041/studentData8th')
    .then(ress3 => ress3.json())
    // .then(data => console.log(data))
    .then(data3 => setData3(data3))
    .catch(errr3 => console.log(errr3));
  }, []);

  const [dataa3, setData3] = useState([]);



  useEffect(()=>{
    fetch('http://localhost:5041/studentData7th')
    .then(ress4 => ress4.json())
    // .then(data => console.log(data))
    .then(data4 => setData4(data4))
    .catch(errr3 => console.log(errr3));
  }, []);

  const [dataa4, setData4] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:5041/studentData6th')
    .then(ress4 => ress4.json())
    // .then(data => console.log(data))
    .then(data5 => setData5(data5))
    .catch(errr3 => console.log(errr3));
  }, []);

  const [dataa5, setData5] = useState([]);
// -----------------------------------------------------------------------------
  useEffect(()=>{
    fetch('http://localhost:5041/studentData')
    .then(resa => resa.json())
    // .then(data => console.log(data))
    .then(all => allData(all))
    .catch(erra => console.log(erra));
  }, []);

  const [all, allData] = useState([]);
  return (
    <div className='display-flex row '  style={{display:'flex'}}>
        {/* <div>
        <table>
        
        <thead>
          <th>StudentName</th>
          <th>StudentEmail</th>
          <th>RegNo</th>
          <th>Addres</th>
          <th>Coures</th>
        
        
        </thead>
        <tbody>
          {dataa.map((d, i)=>{
          return(
            <tr key={i}>
              <td>{d.StudentName}</td>
              <td>{d.StudentEmail}</td>
              <td>{d.RegNo}</td>
              <td>{d.Addres}</td>
              <td>{d.Coures}</td>
    
            </tr>
          )
          })}
        </tbody>
        </table>

      </div> */}





    {/* --------------------------------------------- */}
    <div className='w-100 col-md'>
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>All 10th class student list</Accordion.Header>
        <Accordion.Body>
        <table className='table table-hover table-bordered table-striped'>
      <thead>
      <tr>
        <th className='col'>StudentName</th>
        <th className='col'>StudentEmail</th>
        <th className='col'>RegNo</th>
        <th className='col'>Addres</th>
        <th className='col'>Coures</th>
      </tr>
      </thead>
      <tbody>
        {dataa.map((d, i)=>{
        return(
          <tr key={i}>
            <td className='col'>{d.StudentName}</td>
            <td className='col'>{d.StudentEmail}</td>
            <td className='col'>{d.RegNo}</td>
            <td className='col'>{d.Addres}</td>
            <td className='col'>{d.Coures}</td>
   
          </tr>
        )
        })}
      </tbody>
      </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>9th class</Accordion.Header>
        <Accordion.Body>
        <table className='table  table-hover table-bordered table-striped'>
      
      <thead>
        <th className='col'>StudentName</th>
        <th className='col'>StudentEmail</th>
        <th className='col'>RegNo</th>
        <th className='col'>Addres</th>
        <th className='col'>Coures</th>
      
      
      </thead>
      <tbody>
        {dataa2.map((dD, ii)=>{
        return(
          <tr key={ii}>
            <td className='col'>{dD.StudentName}</td>
            <td className='col'>{dD.StudentEmail}</td>
            <td className='col'>{dD.RegNo}</td>
            <td className='col'>{dD.Addres}</td>
            <td className='col'>{dD.Coures}</td>
   
          </tr>
        )
        })}
      </tbody>
      </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>8th class</Accordion.Header>
        <Accordion.Body>
        <table className='table table-hover table-bordered table-striped'>
      
      <thead>
        <th className='col'>StudentName</th>
        <th className='col'>StudentEmail</th>
        <th className='col'>RegNo</th>
        <th className='col'>Addres</th>
        <th className='col'>Coures</th>
      
      
      </thead>
      <tbody>
        {dataa3.map((d, i)=>{
        return(
          <tr key={i}>
            <td className='col'>{d.StudentName}</td>
            <td className='col'>{d.StudentEmail}</td>
            <td className='col'>{d.RegNo}</td>
            <td className='col'>{d.Addres}</td>
            <td className='col'>{d.Coures}</td>
   
          </tr>
        )
        })}
      </tbody>
      </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>7th class</Accordion.Header>
        <Accordion.Body>
        <table className='table table-hover table-bordered table-striped'>
      
      <thead>
        <tr>
        <th className='col'>StudentName</th>
        <th className='col'>StudentEmail</th>
        <th className='col'>RegNo</th>
        <th className='col'>Addres</th>
        <th className='col'>Coures</th>
        </tr>
      
      </thead>
      <tbody>
        {dataa4.map((d, i)=>{
        return(
          <tr key={i}>
            <td className='col'>{d.StudentName}</td>
            <td className='col'>{d.StudentEmail}</td>
            <td className='col'>{d.RegNo}</td>
            <td className='col'>{d.Addres}</td>
            <td className='col'>{d.Coures}</td>
   
          </tr>
        )
        })}
      </tbody>
      </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>6th class</Accordion.Header>
        <Accordion.Body>
        <table className='table  table-bordered table-striped'>
      
      <thead>
        <tr>
        <th className='col'>StudentName</th>
        <th className='col'>StudentEmail</th>
        <th className='col'>RegNo</th>
        <th className='col'>Addres</th>
        <th className='col'>Coures</th>
        </tr>
      
      </thead>
      <tbody>
        {dataa5.map((d, i)=>{
        return(
          <tr key={i}>
            <td className='col'>{d.StudentName}</td>
            <td className='col'>{d.StudentEmail}</td>
            <td className='col'>{d.RegNo}</td>
            <td className='col'>{d.Addres}</td>
            <td className='col'>{d.Coures}</td>
   
          </tr>
        )
        })}
      </tbody>
      </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
    <div className='col-md'> 
      <Accordion>
        <AccordionItem eventKey='4'>
          <Accordion.Header>All Student Data List</Accordion.Header>
          <AccordionBody>
          <table className='table  table-bordered table-striped'>
      
      <thead>
        <tr>
        <th className='col'>StudentName</th>
        <th className='col'>StudentEmail</th>
        <th className='col'>RegNo</th>
        <th className='col'>Addres</th>
        <th className='col'>Coures</th>
        </tr>
      
      </thead>
      <tbody>
        {all.map((d, i)=>{
        return(
          <tr key={i}>
            <td className='col'>{d.StudentName}</td>
            <td className='col'>{d.StudentEmail}</td>
            <td className='col'>{d.RegNo}</td>
            <td className='col'>{d.Addres}</td>
            <td className='col'>{d.Coures}</td>
   
          </tr>
        )
        })}
      </tbody>
      </table>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    </div>
  )
}

export default App
