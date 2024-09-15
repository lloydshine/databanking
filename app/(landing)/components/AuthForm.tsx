import { useState } from "react";

interface AuthFormProps {
  onSubmit: (data: any) => void;
  isLogin: boolean;
}

const AuthForm = ({ onSubmit, isLogin }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password, name, passwordConfirmation });
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      )}
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
      {!isLogin && (
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      )}
      <button type="submit">{isLogin ? "Login" : "Register"}</button>
    </form>
  );
};

export default AuthForm;
