import React from 'react';
import "./Login.css";
import {auth ,provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {

  const [{user},dispatch]=useStateValue();
  const signIn=()=>{
     auth.signInWithPopup(provider).then(result=>{
       console.log(result);
       dispatch({type:actionTypes.SET_USER,user:result.user});
     }).catch((err)=>alert(err.message))
  }

  const signInFake=()=>{
     dispatch({type:actionTypes.SET_USER,user:{photoURL:'https://lh3.googleusercontent.com/ogw/ADGmqu_e9-P2E2ykEOJsOFt3EB4UWtErqCB-bA3XIdqX=s32-c-mo',displayName:'Liu Yi'}})
  }

  console.log('user',user);
  return (
    <div className="login">
      <div className="login__container">
       <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_e9-P2E2ykEOJsOFt3EB4UWtErqCB-bA3XIdqX=s32-c-mo" alt="" />

       <h1>Login in Demo App HQ</h1>
       <p>www.whatever.com</p>
       <button onClick={signIn}>Sign In with Google</button> <br/>
       <button onClick={signInFake}>Fake Signin</button>
      </div>
    </div>
  )
}

export default Login
