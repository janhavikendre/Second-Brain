import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            description: "Perfect for getting started",
            price: "$9.99/month",
            features: [
                "Store up to 1000 ideas",
                "Basic AI assistance",
                "Twitter and YouTube integration",
            ],
        },
        {
            name: "Pro",
            description: "For power users",
            price: "$19.99/month",
            features: [
                "Unlimited ideas storage",
                "Advanced AI features",
                "Collaboration tools",
                "Priority support",
            ],
        },
        {
            name: "Enterprise",
            description: "For large teams and organizations",
            price: "Custom",
            features: [
                "All pro features",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 premium support",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-800 text-center p-5">
            <h1 className="text-4xl text-white font-bold mb-8">Pricing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-700 hover:bg-gray-900 p-6 rounded-lg min-h-[350px] transition duration-300"
                    >
                        <h2 className="text-4xl text-white font-bold mb-4">{plan.name}</h2>
                        <p className="text-white font-semibold mb-4">{plan.description}</p>
                        <p className="text-white font-semibold text-3xl mb-2">{plan.price}</p>
                        <ul className="text-white mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="mb-2">- {feature}</li>
                            ))}
                        </ul>
                        <button className="bg-purple-300 p-3 rounded-lg text-black w-full hover:bg-blue-500 transition duration-300">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
