import React from 'react';
import DefaultInput from '../../components/Form/DefaultInput';
import DefaultButton from '../../components/Buttons/DefaultButton';
import useForm from '../../hooks/useForm';

const SignUp = () => {
    const { values, handleChange } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", values);
        alert("Login submitted! Check console for details.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
            >
                <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
                    Welcome  💖
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Create New Account to Start your love journey
                </p>

                <DefaultInput
                    label="Username"
                    type="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Enter your Username"
                    required
                />

                <DefaultInput
                    label="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                <DefaultInput
                    label="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />

                <DefaultButton type="submit" label="Create New Account ❤️" />

                <div className="flex justify-between items-center mt-4 text-sm">
                    <a href="/login" className="text-purple-600 hover:underline">
                        Login
                    </a>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
