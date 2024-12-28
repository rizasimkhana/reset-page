import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function Reset() {
    const { randomString } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');


        setLoading(true);
        try {
            const response = await axios.post(
                `https://password-reset-4t87.onrender.com/reset-password/${randomString}`,
                { newPassword: password }
            );
            setMessage('Password reset successfully!');
            setTimeout(() => {
                navigate("https://password-reset678.netlify.app/")
               }, 3000);

            setPassword(' ');

            
        } catch (err) {
            setError('expired link');
            setPassword(" ")
        } finally {
            setLoading(false);
        }
    };


    return (

        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        <div className="card p-4" style={{ marginLeft: "1rem", marginTop: "17%", marginRight: "1%"}}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                    <label for="password" className="form-label">New Pasword:</label>
                    <input

                        className="form-control"
                        style={{ padding: "0%" }}
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>   {loading ? 'Submitting...' : 'Reset Password'}</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
        </>
       
    )
}
export default Reset