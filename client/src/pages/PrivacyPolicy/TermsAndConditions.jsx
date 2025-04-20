import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/70 border border-white/40 p-10 rounded-3xl shadow-2xl">
                <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 leading-tight">
                    Terms & Conditions
                </h1>

                <p className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
                    Please read these Terms and Conditions carefully before using our services. By accessing our platform, you agree to be bound by these terms.
                </p>

                <div className="space-y-16 text-gray-700 text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">1. Acceptance of Terms</h2>
                        <p>
                            By registering or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and any future modifications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-purple-600">2. User Responsibilities</h2>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>You must be at least 18 years old or have parental consent.</li>
                            <li>Provide accurate and up-to-date information.</li>
                            <li>Use the platform only for lawful and respectful purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Account Security</h2>
                        <p>
                            You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-rose-600">4. Prohibited Activities</h2>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Harassment, spamming, or abuse of other users.</li>
                            <li>Uploading malicious software or attempting to hack the system.</li>
                            <li>Violating local, national, or international laws.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">5. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access at any time for violating these terms or engaging in harmful behavior.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-teal-600">6. Limitation of Liability</h2>
                        <p>
                            We are not liable for any direct, indirect, or incidental damages resulting from your use of the platform or any content posted by users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">7. Modifications</h2>
                        <p>
                            We may update these terms at any time. Continued use of the service after changes are posted means you accept the new terms.
                        </p>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-700">
                        Have questions? Contact us at{' '}
                        <a href="mailto:support@example.com" className="text-pink-500 underline">
                            support@example.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
