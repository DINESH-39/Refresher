import React, { Component } from 'react';
import './Login.css';

export const Login=()=>
{
    return(
    <>
    <div className='bg'>
        <h3 className='h31'>Login</h3>
    <label className='lab'>Enter Username</label>
    <input type="textbox" className='input'></input><br></br>
    <label className='lab'>Enter Password</label>
    <input type="password" className='input'></input><br></br>
    <button className='ibutton'>Login</button><br/>
    <button className='ibutton'>Signup</button>
    </div>
    </>

    )
}
