// auth.ts
import apiClient from "./utils/apiClient";

// Register function
export const register = async (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) => {
  try {
    const response = await apiClient.post("/register", {
      name,
      email,
      password,
      password_confirmation,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Login function
export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    const token = response.data.token;
    if (token) {
      // Store the token in localStorage
      localStorage.setItem("api_token", token);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    const response = await apiClient.post("/logout");
    // Remove the token from localStorage on logout
    localStorage.removeItem("api_token");
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

export const testsanctum = async () => {
  try {
    // If walay token for authorization nakabutang sa localstorage mag error
    const response = await apiClient.get("/user");
    return response.data;
  } catch (error) {
    console.error("Sanctum test failed:", error);
    throw error;
  }
};
