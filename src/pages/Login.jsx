import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from "../utils/firebase_config"
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log("Signed Up successfully");
      alert("LoggedIn successfully");
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentuser) => {
    if (currentuser) navigate('/')
  })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h4>Login with your credentials</h4>
            </div>
            <div className="container flex column">
              <input type="email" name="email" placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <input type="password" name="password" placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;
