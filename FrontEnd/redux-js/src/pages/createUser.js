import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {createUser} from '../app/userSlice';

const CreateUserPage = () => {

    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');


    const handleCreateUser = () => {
        const newUser = {
            id: users.length + 1, // Atribui um novo ID com base no tamanho da lista atual
            name: name,
            email: email,
            phone: phone,
            password: password
          };
      
          dispatch(createUser(newUser));
          console.log("user created: ", users)
          alert("User created successfully");
    };

    return (
        <div className="container">
            <h1>Create User</h1>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <label>phone:</label>
            <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone"
            />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button onClick={handleCreateUser}>Create Account</button>
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
                    margin-top: 20px;
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

export default CreateUserPage;