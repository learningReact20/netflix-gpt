import { useState } from "react"
import Header from "./Header"

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleInSignIn = () =>{
        setIsSignInForm(!isSignInForm);
    }

    return(
       <div>
         <div>
            <Header />
        </div>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </div>
        <form className="w-3/12 absolute bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1> 

            {!isSignInForm &&  <input type="text" placeholder="Full Name" className="p-3 my-4 w-8/12 bg-gray-800"/>}

            <input type="email" placeholder="Email Address" className="p-3 my-4 w-8/12 bg-gray-800"/>

            <input type="password" placeholder="password" className="p-3 my-4 w-8/12 bg-gray-800"/>

            <button type="submit" className="p-3 my-6 bg-red-700 w-8/12 rounded-lg">{isSignInForm? "Sign In": "Sign Up"}</button>

            <p className="my-4 cursor-pointer" onClick={toggleInSignIn}>{isSignInForm? "New to Netflix?Sign up Now": "Already have Account? Sign In"}</p>
        </form>
       </div>
    )

}

export default Login