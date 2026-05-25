import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

type TFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  // =========================
  // STATES
  // =========================
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  // =========================
  // ANIMATION VARIANTS
  // =========================
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Start Loading
    setIsSubmitting(true);

    // Clear old success message
    setSuccessMessage("");

    // Mock delay (3 sec)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Save data in localStorage
    const oldMessages = JSON.parse(localStorage.getItem("messages") || "[]");

    localStorage.setItem(
      "messages",
      JSON.stringify([...oldMessages, formData]),
    );

    // Success Message

    // Stop Loading
    toast.success(`Message sent successfully 🚀 I will contact you soon `);
    setIsSubmitting(false);

    // Reset Form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0ea5e9] font-sans text-white antialiased pt-24">
      {/* NAVBAR */}
      <div className="text-center pt-8 pb-4 px-4">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold tracking-tight inline-block text-white"
        >
          Get in <span className="text-[#0ea5e9]">Touch</span>
          {/* Subtle accent bar matching screenshot layout layout */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className="h-[3px] bg-[#0ea5e9] w-1/3 mx-auto mt-3 rounded-full"
          />
        </motion.h2>
      </div>
      {/* MAIN */}
      <main className="flex flex-grow items-center justify-center px-4 py-10 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-12"
        >
          {/* LEFT SIDE */}
          <div className="flex w-full flex-col gap-5 lg:col-span-4">
            {/* EMAIL */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group flex cursor-pointer items-center gap-5 rounded-2xl border border-[#1d232a] bg-[#11141a] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16222f] text-[#00a8e8] transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <h4 className="mb-0.5 text-sm font-semibold tracking-wide text-gray-200">
                  Email
                </h4>

                <p className="break-all text-xs text-gray-400 group-hover:text-gray-200 sm:text-sm">
                  talhaafridi739@gmail.com
                </p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group flex cursor-pointer items-center gap-5 rounded-2xl border border-[#1d232a] bg-[#11141a] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1c1930] text-[#8a5cf6] transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h4 className="mb-0.5 text-sm font-semibold tracking-wide text-gray-200">
                  Location
                </h4>

                <p className="text-xs text-gray-400 group-hover:text-gray-200 sm:text-sm">
                  Remote / Worldwide
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={itemVariants}
            className="w-full rounded-2xl border border-[#1d232a] bg-[#171a1f96] p-6 shadow-2xl sm:p-9 lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wide text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#1d232a] bg-[#0b0c10] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wide text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-[#1d232a] bg-[#0b0c10] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wide text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[#1d232a] bg-[#0b0c10] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30"
                  required
                />
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0ea5e9] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#0ea5e9]/10 transition-all duration-200 hover:bg-[#0284c7] hover:shadow-[#0ea5e9]/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{isSubmitting ? "Submitting..." : "Send Message"}</span>

                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </motion.button>
            </form>

            {/* SUCCESS MESSAGE */}
            {/* {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5" />

                <p className="text-sm leading-relaxed">{successMessage}</p>
              </motion.div>
            )} */}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
