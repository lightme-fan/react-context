import React from 'react';
// import UsernameContext from './context'
import Header from './Header';
import Button from './Button'
// import { ThemeContextConsumer } from './themeContext'

function App() {
	return (
		// <div>			
		// 	<UsernameContext.Consumer>				
		// 		{userName => (
		// 			<>
		// 				<Header userName={userName}/>
		// 				<main>
		// 					<p className="main">No new notifications, {userName}! 🎉</p>
		// 				</main>
		// 			</>
		// 		)}
		// 	</UsernameContext.Consumer>
		// </div>

		<div>
			<Header />
			{/* <ThemeContextConsumer>
				{theme => (
					<Button theme={theme} />
				)}
			</ThemeContextConsumer> */}
			<Button />
		</div>
	);
}

export default App;
