import React from 'react';
import { useState } from 'react';
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp = ({handleClose}) => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [open, setOpen] = useState(false);

const handleOpen = () => {
    setOpen(true);
  };

const handleClosed = () => {
    setOpen(false);
  };


const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClosed();
  };

return (
	<>
        <h1 className='signup-title'>Sign Up</h1>
        <form className='signup-box' onSubmit={handleSubmit}>
            <TextField label="First Name" variant="filled" required value={firstName} onChange={e => setFirstName(e.target.value)} />
            <TextField label="Last Name" variant="filled" required value={lastName} onChange={e => setLastName(e.target.value)}/>
            <TextField label="Email" variant="filled" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            <TextField label="Password" variant="filled" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <div className = 'canc-sub'>
                <Button variant="contained" onClick={handleClosed}>
                    Cancel
                </Button>
                <div className='divider'></div>
                <Button type="submit" variant="contained" color="primary">
                    Sign Up
                </Button>
            </div>
        </form>
	</>
);
};

export default SignUp;

