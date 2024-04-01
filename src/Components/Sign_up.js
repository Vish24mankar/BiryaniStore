import React, { useState } from 'react';
import '../Components/Sign_up.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign_up = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: null,
        uFirstName: '',
        uLastName: '',
        uEmail: '',
        uPassword: '',
        uDateOfBirth: '',
        uContact: '',
        saveData: false
    });

    const inputChangeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const addUser = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8888/User1', userData)
            .then((res) => {
                if (userData.saveData) {
                    // Handle saving data
                    console.log('Data saved!');
                }
                console.log('User added successfully:', res.data);
                window.alert('Information Added Successfully!!!');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error adding user:', error);
                window.alert('Error adding user. Please try again.');
            });
    };

    const { id, uFirstName, uLastName, uEmail, uPassword, uDateOfBirth, uContact, saveData } = userData;

    return (
        <div className='uSignMain'>
            <p className='gTitle'>Sign_up here</p>
            <form className='uSignUp' onSubmit={addUser}>
                <div className='nameData'>
                    <br />
                    <input
                        type='text'
                        name='uFirstName'
                        value={uFirstName}
                        placeholder='First Name'
                        onChange={inputChangeHandler}
                        required
                    />
                    &nbsp;
                    <input
                        type='text'
                        name='uLastName'
                        value={uLastName}
                        placeholder='Last Name'
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type='email'
                        name='uEmail'
                        value={uEmail}
                        placeholder='Email'
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type='password'
                        name='uPassword'
                        value={uPassword}
                        placeholder='Password'
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type='date'
                        name='uDateOfBirth'
                        value={uDateOfBirth}
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type='text'
                        name='uContact'
                        value={uContact}
                        placeholder='Contact'
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <br />
                <div className='checkData'>
                    <input
                        type='checkbox'
                        name='saveData'
                        checked={saveData}
                        onChange={inputChangeHandler}
                        required
                    />
                    <span>Save this data</span>
                </div>
                <br />
                <button type='submit' className='sbtn'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Sign_up;
