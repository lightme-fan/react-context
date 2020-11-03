import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import UsernameContext from './context'
import { ThemeContextProvider } from './themeContext';


ReactDOM.render(
    <ThemeContextProvider><App /></ThemeContextProvider>, 
    document.getElementById("root")
)
// ReactDOM.render(<UsernameContext.Provider value="dark"><App /></UsernameContext.Provider>, document.getElementById("root"))
