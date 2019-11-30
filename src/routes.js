import React from 'react';
import { Redirect, Route} from 'react-router-dom';


export const PrivateRoute = ({component: Component, ...rest}) => {
	return (

			// Show the component only when the user is logged in
			// Otherwise, redirect the user to /signin page
			<Route {...rest} render={props => (
					localStorage.isAuthenticated ?
							<Component {...props} />
					: <Redirect to="/	" />
			)} />
	);
};

