import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

export function Home() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            message.success("Login Successful!");
            navigate('/dashboard');
        } catch (error) {
            message.error("Login failed: Invalid email or password."); 
            console.error("Login Error: ", error.message);
        } finally {
            setLoading(false);
        }
    };

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
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Admin Portal Login</h2>
                        
                        <Form
                            name="admin_login"
                            onFinish={handleLogin} 
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
                                rules={[{ required: true, message: 'Please input your password!' }]}
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
                                >
                                    Login Now
                                </Button>
                            </Form.Item>
                        </Form>
                        
                        <div className="mt-4 text-center text-sm text-gray-600">
                            Don’t have an account?
                            <Link to="/signup" className="text-blue-600 hover:underline font-medium"> Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}