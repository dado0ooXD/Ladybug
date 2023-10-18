import React from 'react';
import ladybug from "../../assets/ladybug.png";
import { Box } from '@mui/material';
import './Sidebar.css'
import { sidebarButtons } from '../../utils/sidebarButtons';
import SidebarButton from '../SidebarButton/SidebarButton';

const Sidebar = () => {
  return (
    <Box sx = {{width: "260px" }}>
        <Box sx = {{marginTop: '20px'}}> 
        <img src = {ladybug} alt='ladybug-logo' style={{ height: "45px", width: "55px", marginTop: "10px", marginLeft: "10px"}}/>
        </Box>
        <Box sx = {{display: "flex", flexDirection: "column",marginTop: "10px", marginLeft: "15px", justifyContent:"center" }}>
{sidebarButtons.map((item, index) => <SidebarButton key={index} item = {item} />)}
        </Box>
        <button className='ladybug'>Ladybug</button>
    </Box>
  )
}

export default Sidebar