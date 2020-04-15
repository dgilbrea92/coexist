import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles/login.css';
import { TextField } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//     border: 0,
//     borderRadius: 3,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: '0 5px',
//     '&:hover': {
//       boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//     },
//   },
// });

const Login = () => {
  // const classes = useStyles();
  useEffect(() => {
    // adds event listeners for sliding panel on login/signup
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  });

  return (
    <>
      <div className='container' id='container'>
        <div className='form-container sign-up-container'>
          <form action='POST'>
            <h1 className='header'>Create A Board</h1>
            <span>Enter your information below</span>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <Button id='primary-signup' variant='contained'>
              Sign Up
            </Button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form action='#'>
            <h1 className='header'>Sign in</h1>
            <span>Enter your email and password below</span>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <Button id='primary-signin' variant='contained'>
              Sign In
            </Button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back</h1>
              <p>Sign back in using the button below</p>
              <Button className='ghost' id='signIn' variant='outlined'>
                Sign In
              </Button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hey! First time here?</h1>
              <p>Click the button below to quickly get started</p>
              <Button className='ghost' id='signUp' variant='outlined'>
                Create a Board
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
