import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
		<Router
			{...rest}
			render={(props) =>
				auth == true ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		/>
	)
}

export default PrivateRoute