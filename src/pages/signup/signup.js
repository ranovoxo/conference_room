import React from 'react';
import { useState } from 'react';
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Organize} from '/Users/randalcarr/conference_room/src/backend/AWSFunctions.js'

const SignUp = ({ handleClose }) => {

  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    Organize(userName, email, password);
  };

return (
  <div className= "sign-up-form">
        <form className='signup-box' onClick={handleSubmit}>
           <TextField className="input-field"
           label="User Name" 
           variant="filled" 
           required value={userName} 
           onChange={event => setUserName(event.target.value)} />
          
          <TextField className="input-field"
          label="Email" 
          variant="filled" 
          type="email" 
          required value={email} 
          onChange={event => setEmail(event.target.value)}/>

          <TextField className="input-field"
          label="Password" 
          variant="filled" 
          type="password" 
          required value={password} 
          onChange={event => setPassword(event.target.value)} />
            
          <div className = 'canc-sub'>
            <Button variant="contained">
                Cancel
            </Button>
            <div className='divider'></div>

            <Button type="submit" variant="contained" color="primary">
                Sign Up
            </Button>
          </div>
      </form>
      </div>
  );
};

export default SignUp;

