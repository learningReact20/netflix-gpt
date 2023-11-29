import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTOURL, USERLOGO } from "../utils/constants";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handliClick = (e) => {
    e.preventDefault();
    const msg = checkValidate(email.current.value,password.current.value);
    setErrorMsg(msg);
    if(msg) return
    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value , photoURL: USERLOGO
            
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));  
            // navigate('/browse')
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMsg(error.message)
            // An error occurred
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+ "-" + errorMessage)
          // ..
        });
    }
    else if(isSignInForm){
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // navigate('/browse')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + '-' + errorMessage)
  });
    }
  };

  const toggleInSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img src={PHOTOURL} />
      </div>
      <form className="w-3/12 absolute bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <div className="mx-20">
          <h1 className="font-bold text-3xl py-4 text-red-800">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              ref={name}
              className="p-3 my-4  w-full rounded-md bg-gray-800"
              />
          )}
          <input
            type="email"
            placeholder="Email Address"
            ref={email}
            className="p-3 my-4  w-full rounded-md bg-gray-800"
          />

          <input
            type="password"
            placeholder="password"
            ref={password}
            className="p-3 my-4  w-full rounded-md bg-gray-800"
          />

          <p className="text-red-500 font-bold">{errorMsg}</p>

          <button
            type="submit"
            className="p-3 my-6 bg-red-700 w-full rounded-lg"
            onClick={handliClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="my-4 cursor-pointer" onClick={toggleInSignIn}>
            {isSignInForm
              ? "New to Netflix?Sign up Now"
              : "Already have Account? Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
