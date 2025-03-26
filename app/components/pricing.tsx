"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Button from "./ui/button";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Community",
    price: "0",
    description: "For individuals and small groups",
    features: [
      { name: "Personal chats with AI assistant", included: true },
      { name: "Basic Islamic knowledge database", included: true },
      { name: "Group chats (up to 5 people)", included: true },
      { name: "1GB file storage", included: true },
      { name: "Standard encryption", included: true },
      { name: "Community forum access", included: true },
      { name: "Advanced AI features", included: false },
      { name: "Custom Islamic resources", included: false },
    ],
    buttonText: "Join Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "7.99",
    description: "For active Muslim community members",
    features: [
      { name: "Enhanced AI conversation capabilities", included: true },
      { name: "Advanced Islamic knowledge database", included: true },
      { name: "Group chats (up to 50 people)", included: true },
      { name: "10GB file storage", included: true },
      { name: "End-to-end encryption", included: true },
      { name: "Priority support", included: true },
      { name: "Scholarly Q&A access", included: true },
      { name: "Custom Islamic resources", included: false },
    ],
    buttonText: "Upgrade Now",
    popular: true,
  },
  {
    name: "Masjid & Organization",
    price: "19.99",
    description: "For Islamic centers and organizations",
    features: [
      { name: "Full AI capabilities with custom training", included: true },
      { name: "Complete Islamic knowledge database", included: true },
      { name: "Unlimited group members & channels", included: true },
      { name: "100GB file storage", included: true },
      { name: "Military-grade encryption", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Admin console & analytics", included: true },
      { name: "Custom Islamic resources & branding", included: true },
    ],
    buttonText: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Affordable Plans for Our Community
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--foreground)', opacity: 0.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the perfect plan for your Muslim community needs
          </motion.p>

          {/* Billing cycle toggle */}
          <div className="inline-flex items-center bg-muted/50 p-1 rounded-lg mb-10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-background shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annually"
                  ? "bg-background shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Annually <span className="text-green-500 font-semibold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border ${
                plan.popular
                  ? "border-green-500/50 relative scale-105 shadow-xl z-10"
                  : "border-gray-200 dark:border-gray-700"
              }`}
              style={{ backgroundColor: 'var(--background)', borderColor: plan.popular ? null : 'var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {plan.popular && (
                <div className="bg-green-500 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>

                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  className="w-full mb-6"
                >
                  {plan.buttonText}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      style={{ color: 'var(--foreground)', opacity: 0.9 }}
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Need a custom solution for your Islamic organization or Masjid?
          </p>
          <Button variant="outline">Contact Our Team</Button>
        </div>
      </div>
    </section>
  );
} 