import React from 'react'
import { useState } from 'react'
const Login = ({ validation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <label>Username :</label>
      <input type='text' placeholder='username' onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password :</label>
      <input type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <div>
        <button
          onClick={async (e) => {
            const response = await fetch("http://localhost:3001/login", {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password
              })
            })
            const json = await response.json();
            console.log(json);
          }}
        >Login</button>
      </div>
    </div>
  )
}
export default Login;