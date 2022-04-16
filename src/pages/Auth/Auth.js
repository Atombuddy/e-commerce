import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid,Button,Container,Paper,Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Icon from "./googleIcon"
import {GoogleLogin} from "react-google-login"
import { Avatar } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import "./styles.css"

const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

export default function Auth() {
    const [showPassword,setShowPassword]=useState(false)
    const [isSignup,setIsSignUp]=useState(false)
    const [formData,setFormData]=useState(initialState)
    const history=useNavigate()

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
        
    }

    const handleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }

    const handleSubmit=()=>{
        history("/")
    }

    const switchMode=()=>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
        setShowPassword(false)
    }

    const googleSuccess= async (res)=>{
        history("/")
    }

    const googleFailure=()=>{
        console.log("Google Sign In was Unsussessful")
    }

  return (
    <Container component="main" maxWidth="xs">
            <Paper className="authPaper" elevation={3}> 
                <Avatar className="avatar">
                    <LockOutlined/>
                </Avatar>
                <Typography className="signInTitle">{isSignup?"Sign Up":"Sign In"}</Typography>
                <form className="authForm" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <TextField className="input firstName" name='firstName' label="First Name" variant="outlined" size='small' onChange={handleChange} half autoFocus/>        
                                <TextField className="input" name='lastName' label="Last Name" variant="outlined" size='small' xs={6} onChange={handleChange} half autoFocus/>        
                                </>
                            )
                        }
                        <TextField className="input emailInput" name='email' label="email" variant="outlined" size='small' onChange={handleChange}/>
                        <TextField className="input passwordInput" name='password' label="Password" variant="outlined" size='small' onChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <TextField className="input" name="confirmPassword" label="Re-enter Password" variant="outlined" size='small' onChange={handleChange} type="password" />}
                        <Button type="submit" variant="contained" color="primary" className="signInButton">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId="323816882038-7kjuitto3h8cal7o1gc9q70u67if1cho.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button className="googleSignInButton" color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    </Grid>
                        
                    <Button className="switchButton" onClick={switchMode} >
                            {isSignup? "Already have an account? Sign In": "Don't have an account ? Sign Up"}
                    </Button>
                        
    
                </form>
            </Paper>
        </Container>
  )
}
