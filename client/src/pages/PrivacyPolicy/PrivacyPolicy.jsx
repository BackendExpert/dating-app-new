import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/70 border border-white/40 p-10 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 leading-tight">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>

        <div className="space-y-16 text-gray-700 text-lg leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your name, email address, and contact details.</li>
              <li>Technical details like IP address, browser type, and usage data.</li>
              <li>Cookies and tracking information to enhance your experience.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">2. How We Use Your Information</h2>
            <p>Your information helps us:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Customize and improve your experience.</li>
              <li>Send you updates and promotional content.</li>
              <li>Provide customer service and support.</li>
              <li>Maintain website security and functionality.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. How We Protect Your Information</h2>
            <p>We ensure your data is safe through:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Encryption and secure servers.</li>
              <li>Routine security checks and monitoring.</li>
              <li>Limited access controls and authentication measures.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">4. Sharing Your Information</h2>
            <p>We only share your data with trusted third parties for services such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Cloud and storage solutions.</li>
              <li>Email delivery and customer support platforms.</li>
              <li>Analytics and performance monitoring tools.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">5. Cookies</h2>
            <p>Cookies help us:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Remember your settings and preferences.</li>
              <li>Analyze website traffic and usage trends.</li>
              <li>Provide tailored content and features.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">6. Third-Party Interactions</h2>
            <p>
              Interactions outside of our platform are not under our control. We recommend caution when:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Using third-party messaging or video call services.</li>
              <li>Clicking external links or sharing data off-platform.</li>
              <li>Engaging in personal exchanges beyond our app’s secure environment.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">7. Your Consent</h2>
            <p>
              By using our services, you agree to this policy. You can withdraw consent at any time by updating your account preferences or ceasing usage.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">8. Policy Updates</h2>
            <p>
              We may update this policy from time to time. Check this page regularly to stay informed of any changes.
            </p>
          </section>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-700">
            Questions? Reach out to us at{' '}
            <a href="mailto:support@example.com" className="text-pink-500 underline">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
