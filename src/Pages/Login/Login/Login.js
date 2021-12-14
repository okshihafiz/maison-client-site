import { Container, Grid, Typography ,  TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../../Images/loginImg.png';



const Login = () => {

     

   
     const [loginData, setLoginData] = useState({})

     const handleChange = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[filed] = value;
          
          setLoginData(newLoginData);
     }
     const handleLoginSubmit = e =>{

     
          
     }

     //Google handler
     const handleGoogleSignIn = () =>{
          
     }


     return (
          <Container sx={{my:8}}>
          <Grid container >
          <Grid sx={{background:'#9DBEC1'}} item xs={12} md={6} lg={6}>
          <img style={{width:'100%'}} src={loginImg} alt="" />
          </Grid>

          <Grid sx={{textAlign:'center'}} item xs={12} md={6} lg={6}>
          <Box>
          <Typography sx={{fontWeight:'bold', color:'#585C5F', mt:5}} variant="h4">
               PLEASE LOGIN 
          </Typography>
          
           <form onSubmit={handleLoginSubmit}>
          <TextField 
          required
          sx={{width:"75%", mt:5}}
          id="standard-basic" 
          label="Your Email" 
          name="email"
          type="email"
          onChange={handleChange}
          variant="standard" />

          <TextField 
          required
          sx={{width:"75%" , mt:5}}
          id="standard-basic" 
          label="Password" 
          name="password"
          onChange={handleChange}
          type="password"
          variant="standard" />
          <br />
          <Button sx={{width:"75%", mt:5, background:'#fff', color:'#585C5F', fontWeight:'bold'}} variant="contained" color="inherit" type="submit">Login</Button>
          </form>

          <NavLink style={{textDecoration:'none'}} to="/register">
          <Button  variant="text" sx={{color:'#585C5F', mt:2
          }}>Don't have an account? register</Button>
          </NavLink>

          <Button className="btn-submit" onClick={handleGoogleSignIn} sx={{width:"75%", mt:5, fontWeight:'bold',background:'#fff', color:'#585C5F'}} variant="contained" color="inherit" type="submit">Google Login</Button>

         
          </Box>
          </Grid>
          </Grid>
          </Container>
     );
};

export default Login;