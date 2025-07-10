import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

export function SignupForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSignup = async (values) => {
        setLoading(true); 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: values.email,
                createdAt: new Date()
            });
        
            message.success("Account created! Redirecting to login page..."); 
            
            await new Promise(resolve => setTimeout(resolve, 3000));
            navigate('/'); 

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                message.error("This email is already in use.");
            } else {
                message.error("Signup failed. Please try again.");
            }
            console.error("Signup Error: ", error.message);
        } finally {
            setLoading(false); 
        }
    };

    function btnClick(){
        setTimeout(() => {
            navigate('/'); 
        }, 3000)
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-900 grid'>
            <div className='ms-20 pt-5'>
                <h1 className='text-6xl font-bold text-blue-700'>Zyon Technology</h1>
                <h1 className='text-6xl font-bold text-white'>Admin Portal</h1>
            </div>

            <div className='justify-self-end p-5 bg-white rounded-2xl grid grid-cols-2 gap-4 h-102 mr-5'>
                <div className="bg-cover bg-center bg-no-repeat text-center text-white flex flex-col justify-between md:px-10 py-5 rounded-2xl h-92" style={{ backgroundImage: "url('/left-pannel.jpg')" }}>
                    <div className="space-y-2">
                        <h1 className="text-2xl md:text-2xl font-bold">Welcome to the Zyon Dashboard</h1>
                        <p className="text-sm md:text-base">Powerful tools to manage your operations.</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl md:text-2xl font-bold">Data-Driven Insights</h1>
                        <p className="text-sm md:text-base">Visualize metrics and streamline your</p>
                        <p className="text-sm md:text-base">workflow with our integrated platform.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center p-4">
                    <div className="bg-white px-8 rounded-xl w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Create an Admin Account</h2>
                        
                        <Form
                            name="admin_signup"
                            onFinish={handleSignup}
                            autoComplete="off"
                            layout="vertical"
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                            >
                                <Input 
                                    prefix={<MailOutlined className="site-form-item-icon" />} 
                                    placeholder="Enter your email" 
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    { required: true, message: 'Please input your password!' },
                                    { min: 6, message: 'Password must be at least 6 characters!' }
                                ]}
                            >
                                <Input.Password 
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your password"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    className="w-full"
                                    size="large"
                                    loading={loading} 
                                    onClick={btnClick}
                                >
                                    Create Account
                                </Button>
                            </Form.Item>
                        </Form>
                        
                        <div className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?
                            <Link to="/" className="text-blue-600 hover:underline font-medium"> Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}