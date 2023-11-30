import React , {useEffect, useRef}from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { disableGptSearchView, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const gptSearch = useSelector(store => store.gpt?.showGptSearch);
  const languageSelected = useSelector(store => store.config?.lang)
  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }
  useEffect(() =>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        dispatch(disableGptSearchView())
         navigate('/')
      }
    });
    return() => unsubscribe();
  }, [])

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
      <img className='w-44'
       src={LOGO}
      alt='logo' />

    { user && <div className='flex p-2'>
     {gptSearch && <select className='m-2 p-2 bg-gray-800 text-white' onChange={handleLanguageChange} defaultValue={languageSelected}>
        {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
       </select>}
       <button className='py-2 px-4 m-2 bg-purple-800 rounded-md text-white' onClick={handleGptSearchClick}>{gptSearch?"Home Page": "GPT Search"}</button>
        <img className='w-12 h-12' src={user?.photoURL} />
        <button onClick={handleSignOut} className='font-bold text-white px-2'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
