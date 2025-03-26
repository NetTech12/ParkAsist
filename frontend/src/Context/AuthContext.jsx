import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    // Check if there is a user stored in sessionStorage when the component mounts
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse the stored user and set it to state
        }
    }, []);

    const login = async (username, password) => {
        try {
            console.log("Login denemesi:", { username, password }); // Konsolda göster
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log("API Yanıtı:", data); // Yanıtı konsolda göster

            if (!response.ok) {
                throw new Error(data.message || "Giriş başarısız!");
            }

            setUser(data.user);
            setError("");
            
            // Store the user in sessionStorage
            sessionStorage.setItem("user", JSON.stringify(data.user));
        } catch (err) {
            setError(err.message);
            console.error("Giriş hatası:", err.message);
        }
    };

    const logout = () => {
        setUser(null); // Clear the user state
        sessionStorage.removeItem("user"); // Remove the user from sessionStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, error, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
