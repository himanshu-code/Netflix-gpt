import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { AVATAR_ICON, BG_IMG_URL } from "../utils/constants";
const Login = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUp = () => {
    setIsSignUpPage(!isSignUpPage);
  };
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) {
      return;
    }
    if (isSignUpPage) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { AVATAR_ICON },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-full" src={BG_IMG_URL} alt="bg "></img>
      </div>
      <div className="w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black opacity-90">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl py-4">
            {isSignUpPage ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUpPage && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full bg-gray-800"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-2 w-full bg-gray-800"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-gray-800 "
          />
          <p className="text-red-400 font-bold my-2">{errorMessage}</p>
          <button
            className="p-2 my-2 bg-red-700 w-full rounded-lg "
            onClick={handleButtonClick}
          >
            {isSignUpPage ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p onClick={toggleSignUp} className="cursor-pointer">
          {!isSignUpPage
            ? "Are you new to Neflix? Sign up Now"
            : "Alreay a user? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default Login;
