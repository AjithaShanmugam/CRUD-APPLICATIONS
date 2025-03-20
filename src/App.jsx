import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from "./table"
import { useState } from "react";
import Popup from './popup';
import { Container } from 'react-bootstrap';

function App() {

  const[refresh,setRefresh]=useState(false)
  const [tempData, setTempData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if(rowData){
      setTempData(rowData);
    }else {
      setTempData({
        Address: null,
        Email:null,
        Name:null, 
        PhoneNo: null,
        Qualification: null,
      })
    }
    setShow(true);
  };
  return (
    <>
      <Container fluid className="p-4">
        <Popup popShow={show} popClose={handleClose} fielddata={tempData}  setFieldData={setTempData} refer={refresh} setRef={setRefresh}/>
        <Tables popClick={handleShow} ref={refresh} setRef={setRefresh}/>
      </Container>
    </>
  )
}

export default App