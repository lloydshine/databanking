import { logout } from "../auth";

export default function LogoutButton() {
  const handleLogout = async () => {
    await logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
}
