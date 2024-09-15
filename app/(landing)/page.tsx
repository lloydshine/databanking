"use client";

import { useState } from "react";
import { register, login, logout, testsanctum } from "./auth";

export default function AuthPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password, passwordConfirmation);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(loginEmail, loginPassword);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logout successful!");
    } catch (error) {
      alert("Logout failed.");
    }
  };
  const handleTestsanctum = async () => {
    try {
      await testsanctum();
      alert("works");
    } catch (error) {
      alert("failed.");
    }
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleTestsanctum}>test sanctum</button>
    </div>
  );
}
