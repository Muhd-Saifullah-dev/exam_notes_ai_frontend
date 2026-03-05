import React from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";
import { useCurrentUser } from "../hooks/getCurrentUserHook";
export const Navbar = () => {
  const { data: user } = useCurrentUser();
  console.log(user);
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="relative z-20 mx-6 mt-6 rounded-2xl bg-linear-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.75)] flex items-center justify-between px-8 py-4 "
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="ExamNotes" className="w-9 h-9" />
        <span className="text-lg hidden md:block font-semibold text-white">
          ExamNotes <span className="text-gray-400">AI</span>
        </span>
      </div>
      <div className="flex items-center gap-6 relative">
        <div className="relative">
          <motion.div className="flex items-center gap-1 px-2 y-2 rounded-full bg-white/10 border border-white/20 text-white text-sm shadow-md cursor-pointer">
            <span className="text-xl">💎</span>
            <span>{user.credits}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
