import { createContext, useEffect, useState } from "react";
import { API } from "../utils/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { data } = await API.post("/auth/login", { email, password });
    localStorage.setItem("burro_token", data.token);
    setUser(data);
  };

  const register = async (name, email, password) => {
    const { data } = await API.post("/auth/register", { name, email, password });
    localStorage.setItem("burro_token", data.token);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("burro_token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("burro_token");
    if (!token) return;
    API.get("/auth/me").then(({ data }) => setUser(data)).catch(() => logout());
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
