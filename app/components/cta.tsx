"use client";

import { motion } from "framer-motion";
import Button from "./ui/button";

export default function CTA() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-teal-600/20 to-emerald-600/20 opacity-70 dark:opacity-30"
          animate={{ 
            background: [
              "linear-gradient(to bottom right, rgba(22, 163, 74, 0.2), rgba(13, 148, 136, 0.2), rgba(16, 185, 129, 0.2))",
              "linear-gradient(to bottom right, rgba(13, 148, 136, 0.2), rgba(16, 185, 129, 0.2), rgba(22, 163, 74, 0.2))",
              "linear-gradient(to bottom right, rgba(16, 185, 129, 0.2), rgba(22, 163, 74, 0.2), rgba(13, 148, 136, 0.2))"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />
      
      <motion.div 
        className="max-w-4xl mx-auto px-6 md:px-10 text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          variants={fadeInUp}
        >
          Join Our Muslim Chat Community
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--foreground)', opacity: 0.8 }}
          variants={fadeInUp}
        >
          Connect with fellow Muslims, share knowledge, and engage in meaningful conversations with our AI-enhanced secure messaging platform.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="gradient" size="lg" className="shadow-lg shadow-green-500/25">
              Join Now
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.p
          className="text-sm text-gray-600 dark:text-gray-400 mt-6"
          style={{ color: 'var(--foreground)', opacity: 0.6 }}
          variants={fadeInUp}
        >
          Safe, secure, and built with the Muslim community in mind.
        </motion.p>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute -top-6 left-6 md:left-24 w-12 h-12 bg-green-500/10 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/4 right-8 md:right-32 w-8 h-8 bg-teal-500/10 rounded-full"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-12 left-12 md:left-40 w-10 h-10 bg-emerald-500/10 rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
    </section>
  );
}