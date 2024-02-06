import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode =()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
    // console.log(prefersDarkMode);
    if(storedDarkMode === null){
        return prefersDarkMode;
    }
    return storedDarkMode === 'true';
}

export const AppProvider = ({ children }) => {
  //   const greeting = "hello";
  const [isDarkTheme, setIsDarkTheme] = useState(false);
const[searchTerm , setSearchTerm] = useState('dog');
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-theme', newDarkTheme);
    // console.log(body);

    localStorage.setItem('darkTheme', newDarkTheme);

  };
  useEffect(()=>{
    document. body.classList.toggle('dark-theme', isDarkTheme);
  },[isDarkTheme]);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
