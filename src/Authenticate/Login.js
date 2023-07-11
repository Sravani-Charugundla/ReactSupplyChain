import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
        email,
        password
      })
        .then(res => {
          if (res.data.status === "exist") {
            console.log(res.data);
            if (res.data.role === "ASC") {
              history("/components/ASC/aschome", { state: { id: email } });
            }
            if (res.data.role === "DIVISIONS") {
              history("/components/Divisions/DU1", { state: { id: email } });
            }
            if (res.data.role === "UNITS") {
              history("/components/Units/Unit01", { state: { id: email } });
            }
          }
          else if (res.data === "wrong credentials") {
            setError("Wrong credentials");
          }
          else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch(e => {
          alert("Wrong details");
          console.log(e);
        });

    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="card-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card" style={{ maxWidth: '300px' }}>
        <div className="login">
          <h1>Login</h1>
          <form action="POST">
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="UserID" />
            <br />
            <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <br />
            <br />
            <input type="submit" className="btn btn-success" onClick={submit}/>
            <p>{Error}</p>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Login;
