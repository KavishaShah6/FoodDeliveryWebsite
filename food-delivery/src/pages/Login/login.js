import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/navbar";
// Styled components for Login component
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const ErrorText = styled.p`
  color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const ButtonContainer = styled.div`
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;
export default function Login() {
  const [form, setForm] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [signUpMode, setSignUpMode] = useState(false);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/demo/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      setLoggedIn(true); // Update login status
      setLoginError(""); // Clear any previous login errors
    } else {
      if (data.error === "InvalidCredentials") {
        setLoginError("Invalid password.");
      } else if (data.error === "UserNotFound") {
        setSignUpMode(true); // Set sign up mode
        setLoginError("User not found. Please sign up below.");
      }
      setLoggedIn(false); // Update login status
    }
  };

  const handleSignUp = async () => {
    const response = await fetch("http://localhost:8080/demo/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      setLoggedIn(true); // Update login status after signing up
      setLoginError(""); // Clear any previous login errors
      setSignUpMode(false); // Exit sign up mode
    } else {
      // Handle sign up errors
      console.error("Error signing up:", data.message);
    }
  };

  return (
    <>
    <Navbar />
    <Container>
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Form onSubmit={(e) => e.preventDefault()}>
          <ErrorText>{loginError}</ErrorText>
          <span>Username</span>
          <Input type="text" name="username" onChange={handleForm} required />
          <span>Password</span>
          <Input
            type="password"
            name="password"
            onChange={handleForm}
            required
          />
          {!signUpMode ? (
            <Button type="button" onClick={handleLogin}>
              Log In
            </Button>
          ) : (
            <div>
              <ButtonContainer>
                <Button type="button" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </ButtonContainer>
              <TextContainer>
                <span>Already have an account? </span>
                <Button type="button" onClick={() => setSignUpMode(false)}>
                  Log In
                </Button>
              </TextContainer>
            </div>
          )}
        </Form>
      )}
    </Container>
    </>
  );
}
