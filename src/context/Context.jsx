import React, {createContext, useContext, useEffect, useState} from 'react';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import Loading from "../components/Loading.jsx";


const BlogContext = createContext(undefined);

const Context = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
      {loading ? <Loading /> : children}
    </BlogContext.Provider>
  );
};

export default Context;
export const Blog = () => useContext(BlogContext);