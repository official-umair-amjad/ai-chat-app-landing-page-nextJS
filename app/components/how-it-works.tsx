"use client";

import { motion } from "framer-motion";
import { UserCircle, Heart, BookOpen, MessageSquareText } from "lucide-react";

const steps = [
  {
    title: "Join Our Community",
    description: "Create your account and join thousands of Muslims seeking meaningful connections and knowledge.",
    details: [
      "Simple sign-up process with email or social accounts",
      "Personalize your profile with interests and preferences",
      "Connect your account with other Muslim communities",
      "Set your privacy preferences and notification settings"
    ],
    icon: UserCircle,
  },
  {
    title: "Explore Islamic Content",
    description: "Discover a wealth of Islamic resources, articles, and discussions tailored to your interests.",
    details: [
      "Access to curated Islamic articles and teachings",
      "Search through categorized knowledge base",
      "Save favorite resources for later reference",
      "Contribute to community discussions on various topics"
    ],
    icon: BookOpen,
  },
  {
    title: "Connect with Others",
    description: "Find and connect with like-minded Muslims from around the world in a secure environment.",
    details: [
      "Find community members with similar interests",
      "Join topic-based groups and discussion circles",
      "Share experiences and knowledge in a safe space",
      "Build meaningful relationships with fellow Muslims"
    ],
    icon: Heart,
  },
  {
    title: "Engage in Conversations",
    description: "Participate in enriching discussions with community members and our Islamic AI assistant.",
    details: [
      "Real-time messaging with end-to-end encryption",
      "Ask questions to our AI powered by Islamic knowledge",
      "Share images, documents, and voice messages",
      "Create group discussions for community learning"
    ],
    icon: MessageSquareText,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Journey With Muslim Chats
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            style={{ color: 'var(--foreground)', opacity: 0.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A simple path to meaningful connections in the Muslim community
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-400 to-teal-600 hidden md:block" />

          <div className="space-y-20 md:space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="md:grid md:grid-cols-2 md:gap-8 items-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white font-bold hidden md:flex z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {index + 1}
                </motion.div>

                {/* Content - alternating sides */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                  <div className="flex items-center mb-4 md:justify-start space-x-4">
                    <motion.div 
                      className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-1 md:hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>{step.description}</p>
                  
                  {/* Bullet points for detailed info */}
                  <ul className={`space-y-2 mb-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {step.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * detailIndex + 0.3 }}
                      >
                        <div className={`min-w-3 h-3 rounded-full bg-green-500/50 mt-1.5 ${index % 2 === 0 ? 'md:order-last md:ml-2' : 'mr-2'}`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Visual representation for mobile */}
                  <div className="p-4 bg-muted/30 rounded-lg mb-8 md:hidden">
                    <motion.div 
                      className="aspect-video rounded-lg bg-muted flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon className="h-12 w-12 text-green-500/70" />
                    </motion.div>
                  </div>
                </div>

                {/* Visual representation for desktop - alternating sides */}
                <div className={`hidden md:block md:col-span-1 ${index % 2 === 0 ? 'md:pl-16 md:col-start-2' : 'md:pr-16'}`}>
                  <div className="p-4 bg-muted/30 rounded-lg overflow-hidden">
                    <motion.div 
                      className="aspect-video rounded-lg bg-muted flex flex-col items-center justify-center p-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon className="h-16 w-16 text-green-500/70 mb-4" />
                      <div className="text-center">
                        <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Step {index + 1}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                          {step.title}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Final step - success message */}
          <motion.div
            className="text-center mt-20 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-6 rounded-lg inline-block">
              <h3 className="text-xl font-semibold mb-2">Begin Your Journey Today</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Start experiencing the benefits of a dedicated Muslim community platform. Create meaningful connections, learn, and grow in your faith journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 