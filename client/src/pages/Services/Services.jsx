import React from "react";

function Services() {
    const services = [
        {
            title: "Smart Matchmaking",
            description:
                "AI-powered compatibility matching to help you find people who truly connect with you.",
            icon: "💘",
            color: "from-pink-400 to-rose-500",
        },
        {
            title: "Verified Profiles",
            description:
                "Every profile is verified to ensure a safe, respectful, and genuine dating environment.",
            icon: "🛡️",
            color: "from-emerald-400 to-green-500",
        },
        {
            title: "Boost Profile",
            description:
                "Stand out and appear on top of search results with our Boost feature.",
            icon: "🚀",
            color: "from-purple-400 to-indigo-500",
        },
        {
            title: "Private Chat",
            description:
                "Chat securely in real time with people you match with — no third parties involved.",
            icon: "💬",
            color: "from-cyan-400 to-sky-500",
        },
        {
            title: "Location-Based Matches",
            description:
                "Discover people near you or explore long-distance connections easily.",
            icon: "📍",
            color: "from-orange-400 to-amber-500",
        },
        {
            title: "Premium Experience",
            description:
                "Unlock unlimited swipes, profile insights, and exclusive features with premium.",
            icon: "🌟",
            color: "from-yellow-400 to-yellow-500",
        },
        {
            title: "In-App Video Calls",
            description:
                "Connect face-to-face with your match before you meet them in real life.",
            icon: "🎥",
            color: "from-indigo-400 to-blue-500",
        },
        {
            title: "Events & Hangouts",
            description:
                "Join community events, speed dates, and meet-ups organized by us.",
            icon: "🎉",
            color: "from-fuchsia-500 to-pink-500",
        },
        {
            title: "Safe Mode",
            description:
                "Extra privacy controls for solo browsing and interaction safety.",
            icon: "🔒",
            color: "from-slate-500 to-gray-600",
        },
    ];

    const testimonials = [
        {
            name: "Nimali & Aravinda",
            text: "We found each other through this app and now we're engaged! Thank you for helping us connect so genuinely.",
        },
        {
            name: "Sandeepa",
            text: "The verified profiles gave me peace of mind, and I finally met someone who truly gets me.",
        },
        {
            name: "Hiran",
            text: "Premium features were totally worth it. Found my soulmate within a month!",
        },
    ];

    const pricingPlans = [
        {
            title: "Basic",
            price: "Free",
            features: [
                "Smart Matching",
                "Verified Profiles",
                "Limited Swipes",                
            ],
        },
        {
            title: "Premium",
            price: "$9.99/mo",
            features: [
                "Everything in Basic",
                "Secure Chat",
                "Unlimited Swipes",
                "Profile Boost",
                "See Who Likes You",
            ],
        },
        {
            title: "Elite",
            price: "$19.99/mo",
            features: [
                "Everything in Premium",
                "Video Calls",
                "Event Access",
                "Personal Matchmaker",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white py-14 px-6 pt-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-5xl font-extrabold text-center text-rose-600 mb-4">
                    Our Services
                </h1>
                <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">
                    Premium features designed to build deeper, safer, and more exciting connections.
                </p>

                {/* Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {services.map((service, idx) => {
                        const isComingSoon = [
                            "Boost Profile",
                            "Private Chat",
                            "Location-Based Matches",
                            "Premium Experience",
                            "In-App Video Calls",
                            "Events & Hangouts"
                        ].includes(service.title);

                        return (
                            <div
                                key={idx}
                                className="relative bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/40"
                            >
                                {isComingSoon && (
                                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex items-center justify-center rounded-3xl">
                                        <span className="text-lg font-semibold text-rose-500">Coming Soon</span>
                                    </div>
                                )}
                                <div
                                    className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white text-3xl mb-5 shadow-md`}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Testimonials */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
                            >
                                <p className="italic text-gray-600 mb-4">“{t.text}”</p>
                                <h4 className="font-bold text-rose-500">{t.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Plan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingPlans.map((plan, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-bold text-rose-600 mb-2">
                                    {plan.title}
                                </h3>
                                <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
                                <ul className="text-gray-600 space-y-2 text-sm mb-6">
                                    {plan.features.map((f, i) => (
                                        <li key={i}>• {f}</li>
                                    ))}
                                </ul>
                                <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-full transition">
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Ready to Find Your Match?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Download our app and start connecting today.
                    </p>
                    <button className="bg-rose-500 text-white px-6 py-3 rounded-full text-lg hover:bg-rose-600 transition">
                        Get the App
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;
