import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Reset() {
    const { randomString } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log(randomString)
    }, [])


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
        } catch (err) {
            setError('expired link');
        } finally {
            setLoading(false);
        }
    };


    return (


        <div className="card p-4" style={{ marginLeft: "1rem", marginTop: "17%", marginRight: "1%" }}>
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
    )
}
export default Reset