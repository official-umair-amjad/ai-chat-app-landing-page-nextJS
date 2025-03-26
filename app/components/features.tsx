"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Shield, 
  Zap, 
  Users, 
  Bot, 
  Heart, 
  BookOpen,
  Lock
} from "lucide-react";

const features = [
  {
    title: "Real-time Conversation",
    description: "Connect instantly with other community members through seamless real-time messaging.",
    icon: MessageSquare,
  },
  {
    title: "Enhanced Privacy",
    description: "Your conversations are protected with advanced security measures to ensure complete privacy.",
    icon: Shield,
  },
  {
    title: "Islamic AI Assistant",
    description: "Get instant answers to your questions about Islamic practices and teachings from our intelligent assistant.",
    icon: Bot,
  },
  {
    title: "Vibrant Community",
    description: "Join a growing network of Muslims worldwide sharing knowledge and supporting each other.",
    icon: Users,
  },
  {
    title: "Islamic Knowledge Base",
    description: "Access a comprehensive library of Islamic resources, articles, and scholarly content.",
    icon: BookOpen,
  },
  {
    title: "Lightning Fast",
    description: "Experience high-performance messaging with minimal latency regardless of your location.",
    icon: Zap,
  },
  {
    title: "Complete Security",
    description: "Enjoy peace of mind with state-of-the-art encryption protecting your private communications.",
    icon: Lock,
  },
  {
    title: "Community Support",
    description: "Find spiritual and practical support from a welcoming community dedicated to Islamic values.",
    icon: Heart,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Designed for the Muslim Community
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            style={{ color: 'var(--foreground)', opacity: 0.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need for meaningful Islamic conversation and community building in one place
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5 transform transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400" style={{ color: 'var(--foreground)', opacity: 0.7 }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 