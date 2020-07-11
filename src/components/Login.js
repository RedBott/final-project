import React, { useState } from 'react'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
		<div>
			<div>
				<input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
				<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='submit' value='Login' onClick={() => localStorage.setItem('user', true)} />
			</div>
		</div>
	)
}

export default Login