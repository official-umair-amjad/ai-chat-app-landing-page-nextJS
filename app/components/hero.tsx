"use client";

import { motion } from "framer-motion";
import Button from "./ui/button";
import { Users, Zap, Shield, BookOpen } from "lucide-react";

export default function Hero() {
  const messageAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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

  return (
    <section className="relative pt-20 pb-16 md:pt-30 md:pb-24 overflow-hidden">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          className="absolute inset-0 opacity-20 dark:opacity-30 bg-gradient-to-br from-green-500/30 via-teal-500/30 to-blue-500/30" 
          animate={{ 
            background: [
              "linear-gradient(to bottom right, rgba(34, 197, 94, 0.3), rgba(20, 184, 166, 0.3), rgba(59, 130, 246, 0.3))",
              "linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.3), rgba(20, 184, 166, 0.3))",
              "linear-gradient(to bottom right, rgba(20, 184, 166, 0.3), rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.3))"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-green-400/20 dark:from-green-600/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Two column layout with text on left, chat window on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-gradient"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                Muslim AI
              </motion.span>{" "}
              Chat Assistant
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-lg"
              style={{ color: 'var(--foreground)', opacity: 0.8 }}
              variants={fadeInUp}
            >
              A secure messaging platform with Islamic AI intelligence to enhance your spiritual journey.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
              variants={fadeInUp}
            >
              Connect with fellow Muslims, access Islamic knowledge, and grow in your faith through meaningful conversations guided by our AI assistant.
            </motion.p>

            <motion.div 
              className="flex gap-4 mb-10"
              variants={fadeInUp}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="gradient" size="lg" className="shadow-lg shadow-green-500/25">
                  Get Started Free
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg">
                  View Features
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-600 dark:text-gray-400"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-2" variants={fadeInUp} whileHover={{ x: 5 }}>
                <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>Inclusive Community</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" variants={fadeInUp} whileHover={{ x: 5 }}>
                <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>Private & Secure</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" variants={fadeInUp} whileHover={{ x: 5 }}>
                <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>Lightning Fast</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" variants={fadeInUp} whileHover={{ x: 5 }}>
                <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>Islamic Knowledge</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Chat Window */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden h-[600px]" 
              style={{ backgroundColor: 'var(--background)' }}>
              {/* Chat header */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gray-100 dark:bg-gray-800 flex items-center px-6 border-b" style={{ backgroundColor: 'var(--muted)', opacity: 0.8 }}>
                <div className="flex space-x-2">
                  <motion.div className="w-3 h-3 rounded-full bg-red-500" whileHover={{ scale: 1.2 }}></motion.div>
                  <motion.div className="w-3 h-3 rounded-full bg-yellow-500" whileHover={{ scale: 1.2 }}></motion.div>
                  <motion.div className="w-3 h-3 rounded-full bg-green-500" whileHover={{ scale: 1.2 }}></motion.div>
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    Muslim Chats AI Assistant
                  </h3>
                </div>
              </div>

              {/* Chat content area */}
              <div className="pt-20 pb-20 px-6 h-full overflow-y-auto">
                <motion.div 
                  className="flex flex-col space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {/* AI welcome message */}
                  <motion.div 
                    className="flex justify-start"
                    custom={0}
                    variants={messageAnimation}
                  >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[80%]" style={{ backgroundColor: 'var(--muted)' }}>
                      <p className="text-base">As-salamu alaykum, welcome to Muslim Chats! How may I assist you today with Islamic knowledge or community connection?</p>
                    </div>
                  </motion.div>

                  {/* User response */}
                  <motion.div 
                    className="flex justify-end"
                    custom={1}
                    variants={messageAnimation}
                  >
                    <div className="bg-green-600 text-white rounded-lg rounded-tr-none p-4 max-w-[80%]" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                      <p className="text-base">Wa alaykumu s-salam! I&apos;d like to learn more about Ramadan practices and traditions.</p>
                    </div>
                  </motion.div>

                  {/* AI response */}
                  <motion.div 
                    className="flex justify-start"
                    custom={2}
                    variants={messageAnimation}
                  >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[85%]" style={{ backgroundColor: 'var(--muted)' }}>
                      <p className="text-base">I&apos;d be happy to share information about Ramadan! Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting, prayer, reflection, and community. What specific aspects would you like to explore?</p>
                    </div>
                  </motion.div>

                  {/* User question */}
                  <motion.div 
                    className="flex justify-end"
                    custom={3}
                    variants={messageAnimation}
                  >
                    <div className="bg-green-600 text-white rounded-lg rounded-tr-none p-4 max-w-[80%]" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                      <p className="text-base">I&apos;m particularly interested in the spiritual benefits of fasting and recommended duas for breaking fast.</p>
                    </div>
                  </motion.div>

                  {/* AI detailed response */}
                  <motion.div 
                    className="flex justify-start"
                    custom={4}
                    variants={messageAnimation}
                  >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[90%]" style={{ backgroundColor: 'var(--muted)' }}>
                      <p className="text-base">The spiritual benefits of fasting include:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
                        <li>Increased God-consciousness (taqwa)</li>
                        <li>Self-discipline and self-control</li>
                        <li>Gratitude for Allah&apos;s blessings</li>
                        <li>Compassion for those less fortunate</li>
                        <li>Patience and stronger willpower</li>
                      </ul>
                      <p className="text-base mt-3">For breaking fast, a commonly recited dua is:</p>
                      <p className="italic mt-1 text-base">&quot;Allahumma inni laka sumtu, wa bika aamantu, wa &apos;alayka tawakkaltu, wa &apos;ala rizq-ika aftartu.&quot;</p>
                      <p className="mt-2 text-base">Translation: &quot;O Allah, I fasted for You, I believe in You, I put my trust in You, and I break my fast with Your sustenance.&quot;</p>
                    </div>
                  </motion.div>

                  {/* User follow-up */}
                  <motion.div 
                    className="flex justify-end"
                    custom={5}
                    variants={messageAnimation}
                  >
                    <div className="bg-green-600 text-white rounded-lg rounded-tr-none p-4 max-w-[80%]" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                      <p className="text-base">That&apos;s very helpful, thank you! Are there specific activities recommended during Ramadan nights?</p>
                    </div>
                  </motion.div>

                  {/* AI final response */}
                  <motion.div 
                    className="flex justify-start"
                    custom={6}
                    variants={messageAnimation}
                  >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[90%]" style={{ backgroundColor: 'var(--muted)' }}>
                      <p className="text-base">During Ramadan nights, Muslims are encouraged to engage in:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
                        <li>Taraweeh prayers - special night prayers performed in congregation</li>
                        <li>Reading and reflecting on the Quran</li>
                        <li>Dhikr (remembrance of Allah)</li>
                        <li>I&apos;tikaf (spiritual retreat in the mosque) during the last ten days</li>
                        <li>Searching for Laylat al-Qadr (the Night of Power)</li>
                      </ul>
                      <p className="text-base mt-3">Laylat al-Qadr is especially significant as it&apos;s considered better than a thousand months of worship. Many Muslims increase their prayers and good deeds during this time.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Chat input field */}
              <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4" style={{ backgroundColor: 'var(--background)' }}>
                <motion.div 
                  className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-5 py-3"
                  style={{ backgroundColor: 'var(--muted)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="bg-transparent flex-1 focus:outline-none text-base" 
                    style={{ color: 'var(--foreground)' }}
                    disabled
                  />
                  <motion.button 
                    className="ml-2 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12h20M16 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />
    </section>
  );
}