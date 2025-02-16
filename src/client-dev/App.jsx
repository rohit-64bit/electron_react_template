import { Button, Card, CardBody, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineDelete } from 'react-icons/ai'
import { PiFilePdfLight } from 'react-icons/pi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SERVER_URL = 'http://localhost:8000/api/'

const App = () => {

  return (
    <>
    
      <ToastContainer />

      <div>
        Hello World! Chnage me in src/client-dev/App.jsx
      </div>

    </>
  )

}

export default App