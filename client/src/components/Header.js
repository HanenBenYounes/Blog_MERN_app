import React, {useState} from 'react';
import useNaviagte from "react-router-dom";
import {Box, AppBar, Toolbar, Button, Typography, Tabs, Tab} from '@mui/material'
import {authActions} from "../redux/store";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    // global state
    const isLogin = useSelector( state => state.isLogin)
    const dispatch= useDispatch();
    const navigate = useNavigate();
    
  
    //state
    const [value, setValue] = useState();
    const handleLogout = ()=>{
      try{
      dispatch(authActions.logout ())
      alert('Logout Successfully')
      navigate('/login')
      } catch(error){
        console.log(error)
      }
    }
  return (
    <>
    <AppBar position='sticky'>
        <Toolbar>
            <Typography variant='h4'>My Blog APP</Typography>
            {isLogin && (
                     <Box display={'flex'} marginLeft="auto" marginRight={'auto'}>
                     <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                         <Tab label="blogs" LinkComponent={Link} to="/blogs" ></Tab>
                         <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" ></Tab> 
     
                     </Tabs>
                     </Box>

            )}
       
                <Box display={"flex"} marginLeft="auto">
                 {!isLogin &&(
                    <>
                    <Button onClick={handleLogout} sx={{margin:1, color:'white'}} LinkComponent={Link} to ="/login">Login</Button>
                      <Button sx={{margin:1, color:'white'}} LinkComponent={Link} to ="/register">Register</Button>
                    </>
                      
                 )}
                 {isLogin &&( <Button sx={{margin:1, color:'white'}}>Logout</Button>)
}
                
                </Box>
     
           
        </Toolbar>
    </AppBar>
      
    </>
  )
}

export default Header
