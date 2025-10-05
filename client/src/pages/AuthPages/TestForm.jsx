// TestForm.jsx
import React, { useState } from 'react';
import DefaultInput from '../../components/Form/DefaultInput';
import DateInput from '../../components/Form/DateInput';
import Dropdown from '../../components/Form/Dropdown';
import TextAreaInput from '../../components/Form/TextAreaInput';
import FileInput from '../../components/Form/FileInput';
import DefaultButton from '../../components/Buttons/DefaultButton';

const TestForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        bio: '',
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        alert("Form submitted! Check console for details.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="max-w-7xl my-16 w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
            >
                <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
                    Dating App Test Form 💖
                </h1>

                <DefaultInput
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

                <DefaultInput
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                <DateInput
                    label="Date of Birth"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    required
                />

                <Dropdown
                    label="Gender"
                    name="gender"
                    onChange={handleChange}
                    required
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' },
                    ]}
                />

                <TextAreaInput
                    label="About You"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Tell us something fun about yourself..."
                />

                <FileInput
                    label="Upload Profile Picture"
                    name="photo"
                    onChange={handleChange}
                    accept="image/*"
                />

                <DefaultButton
                    type="submit"
                    label="Create Profile ❤️"
                />
            </form>
        </div>
    );
};

export default TestForm;
