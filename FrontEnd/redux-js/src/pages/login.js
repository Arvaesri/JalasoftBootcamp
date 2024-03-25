import React, { useState } from 'react';
import { useSelector} from 'react-redux';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const users = useSelector((state) => state.user);
    console.log(users);
    //const dispatch = useDispatch();

    const handleLogin = () => {
        console.log(users)
        const user = users.find((user) => user.email === email && user.password === password);
        if (!user) {
            alert("Invalid email or password");
            return;
        }
        else {
            alert("Login successful");
            console.log("susessfully logged in: ", user)
        }
    };

    return (
        <div className="container">
            <h1>User Login</h1>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button onClick={handleLogin}>Login</button>
            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .container {
                    max-width: 400px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    border: 2px solid #007bff;
                    border-radius: 10px;
                    text-align: right;
                    padding: 35px 50px;
                    margin-top: 50px;
                }

                h1 {
                    text-align:center;
                    color: #007bff;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                    color: #333;
                    text-align: left;
                }

                input {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }

                a{ 
                    display: inline-block;
                    margin:15px;
                }
            `}</style>
        </div>
    );
};

export default LoginPage;