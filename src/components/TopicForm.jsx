import React, { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  topic: z.string().min(3, "Topic is required"),
  classLevel: z.string().min(1, "Select class level"),
  examType: z.string().min(1, "Select exam type"),
  includeDiagram: z.boolean(),
  includeChart: z.boolean(),
  revisionMode: z.boolean(),
});

function TopicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      includeDiagram: false,
      revisionMode: false,
      includeChart: false,
    },
  });

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-linear-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.75)]
  p-8 space-y-6 text-white "
    >
      <input
        {...register("topic")}
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30  "
        placeholder="Enter topic (e.g Web Development) "
      />
      {errors.topic && (
        <p className="text-red-400 text-sm">{errors.topic.message}</p>
      )}

        <input
        {...register("classLevel")}
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Class / Level (e.g Class 10)"
      />
      {errors.classLevel && (
        <p className="text-red-400 text-sm">{errors.topic.message}</p>
      )}

        <input
        {...register("examType")}
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30  "
        placeholder="Exam Type (e.g CBSE,JEE,NEET)"
      />
      {errors.examType && (
        <p className="text-red-400 text-sm">{errors.topic.message}</p>
      )}
    </motion.div>
  );
}


function Toggle({label,checked,onChange}){
  
}
export default TopicForm;
