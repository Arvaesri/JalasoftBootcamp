import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {deleteUser} from '../app/userSlice';

const UserList = () => {

    const users = useSelector((state) => state.user);
    console.log(users);
    const dispatch = useDispatch();

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };

    return (
        <div className="container">
            <h1>User List</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
            </table>
            <tbody>
            {users.map((user) => (
                    <tr  key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <button style={{ margin: "0 20px" }} onClick={() => handleDeleteUser(user)}>Delete</button>
                    </tr>
                ))}
            </tbody>
                   
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

                td,th{
                    padding: 10px 15px;
                    text-align: center;
                }

                .container {
                    max-width: 400px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    border: 2px solid #007bff;
                    border-radius: 10px;
                    text-align: right;
                    padding: 35px 50px;
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
                    width: 70%;
                    padding: 6px;
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

export default UserList;