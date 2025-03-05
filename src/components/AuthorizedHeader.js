import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { toggleLanguageChange } from "../utils/configSlice";
import { Link } from "react-router-dom";
const AuthorizedHeader = () => {
  const dispatch = useDispatch();
  const isGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // /navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGptSearchClick = () => {
    if (isGptSearchView) {
      dispatch(toggleGptSearchView(false));
      navigate("/browse");
    } else {
      navigate("/gptSearch");
    }
  };
  const handleLanguageSelection = (e) => {
    dispatch(toggleLanguageChange(e.target.value));
  };

  return (
    <div className="absolute px-2 md:px-8 py-2 bg-gradient-to-b from-black to-transparent w-full flex justify-center sm:justify-between items-center z-10 flex-col sm:flex-row">
      <Link to="/browse">
        <img className="w-40" src={LOGO} alt="netflix logo"></img>
      </Link>
      {user && (
        <div className="flex p-2 justify-between item-center">
          {isGptSearchView && (
            <select
              className="p-2 m-2 bg-black bg-greay-900 text-white"
              onChange={handleLanguageSelection}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.value} key={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {isGptSearchView ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 hidden md:inline-block"
            src={user?.photoURL}
            alt="user icon"
          />
          <button
            className="cursor-pointer p-2 m-2 text-white bg-red-600 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthorizedHeader;
