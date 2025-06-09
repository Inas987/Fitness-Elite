import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const ADMIN_PASSCODE = "elitefit2025"; //Admin registracija

const LoginRegister = ({ onLogin }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [adminPasscode, setAdminPasscode] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegistering) {
            // Provjera passcoda za admin registraciju
            if (role === "admin" && adminPasscode !== ADMIN_PASSCODE) {
                alert("Neispravan admin passcode.");
                return;
            }

            const res = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, role }),
            });

            const user = await res.json();
            localStorage.setItem("user", JSON.stringify(user));
            onLogin(user);
        } else {
            // Login
            const res = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
            const users = await res.json();

            if (users.length > 0) {
                const loggedUser = users[0];
                localStorage.setItem("user", JSON.stringify(loggedUser));
                onLogin(loggedUser);
            } else {
                alert("Neispravni podaci.");
            }
        }
    };

    return (
        <div className="auth-box">
            <h2>{isRegistering ? "Registracija" : "Prijava"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Korisničko ime" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="password" placeholder="Lozinka" value={password} onChange={e => setPassword(e.target.value)} required />

                {isRegistering && (
                    <>
                        <select value={role} onChange={e => setRole(e.target.value)}>
                            <option value="user">Korisnik</option>
                            <option value="admin">Administrator</option>
                        </select>

                        {role === "admin" && (
                            <input
                                type="password"
                                placeholder="Admin passcode"
                                value={adminPasscode}
                                onChange={e => setAdminPasscode(e.target.value)}
                                required
                            />
                        )}
                    </>
                )}

                <button type="submit">{isRegistering ? "Registruj se" : "Prijavi se"}</button>
            </form>

            <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: "pointer" }}>
                {isRegistering ? "Već imate račun? Prijavite se." : "Nemate račun? Registrujte se."}
            </p>
        </div>
    );
};

export default LoginRegister;
