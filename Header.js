import React, { Component } from 'react';
// import UsernameContext from './context';
import { ThemeContextConsumer } from './themeContext';


function Header() {
	return (
		<ThemeContextConsumer>
			{theme => (
				<header className={`${theme}-theme`}>
					<h2>{`${theme === 'light' ? 'Light' : 'Dark'} Theme`}</h2>
				</header>
			)}
		</ThemeContextConsumer>
	);
}


// function Header({userName}) {
// 	return (
// 		<header>
// 			<p>{`Welcome, ${userName}!`}</p>
// 		</header>
// 	)    
// }


export default Header;
