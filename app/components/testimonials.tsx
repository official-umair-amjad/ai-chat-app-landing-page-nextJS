"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Community Leader",
    company: "Islamic Center of Technology",
    content:
      "Muslim Chats has been a blessing for our community. The integrated AI helps us answer common questions about Islamic practices, and the secure environment makes everyone feel comfortable sharing their thoughts.",
    rating: 5,
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Fatima Rahman",
    role: "Islamic Studies Student",
    company: "Al-Azhar University",
    content:
      "As a student of Islamic studies, I appreciate how the AI integration provides accurate information while maintaining the human element of our discussions. The real-time chat keeps me connected with fellow students worldwide.",
    rating: 5,
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "Yusuf Abdullah",
    role: "Software Developer",
    company: "Halal Tech Solutions",
    content:
      "The Muslim Chats platform is impressive. The real-time communication combined with AI assistance creates a seamless experience. Plus, the end-to-end encryption gives us peace of mind when discussing personal matters.",
    rating: 5,
    avatar: "/avatars/avatar-3.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div 
        className="absolute -top-20 -left-20 w-80 h-80 bg-green-500/5 rounded-full"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-20 w-96 h-96 bg-teal-500/5 rounded-full"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Community Testimonials
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            style={{ color: 'var(--foreground)', opacity: 0.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear how Muslim Chats is connecting communities through intelligent conversation
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full translate-x-1/2 translate-y-1/2" />
          
          {/* Quote marks */}
          <motion.div 
            className="absolute top-10 left-10 text-6xl font-serif text-green-500/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &quot;
          </motion.div>
          <motion.div 
            className="absolute bottom-10 right-10 text-6xl font-serif text-green-500/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &quot;
          </motion.div>
          
          {/* Testimonial slider */}
          <motion.div 
            className="relative mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12" 
            style={{ backgroundColor: 'var(--background)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Mock avatar - would be replaced with real images in production */}
                <motion.div 
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {testimonials[current].name[0]}
                </motion.div>
                
                {/* Rating stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <Star
                          className={`h-5 w-5 ${
                            i < testimonials[current].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                </div>
                
                <motion.p 
                  className="text-xl mb-8 italic text-gray-700 dark:text-gray-300" 
                  style={{ color: 'var(--foreground)', opacity: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  &quot;{testimonials[current].content}&quot;
                </motion.p>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {testimonials[current].role}, {testimonials[current].company}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                onClick={prev}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrent(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      current === index ? "bg-green-500" : "bg-green-500/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={next}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 