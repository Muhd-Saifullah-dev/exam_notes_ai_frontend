import React from "react";
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

function TopicForm({setResult,setLoading,loading,setError}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      topic: "",
      classLevel: "",
      examType: "",
      includeDiagram: false,
      includeChart: false,
      revisionMode: false,
    },
  });

  const revisionMode = watch("revisionMode");
  const includeDiagram = watch("includeDiagram");
  const includeChart = watch("includeChart");

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-linear-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.75)] p-8 space-y-6 text-white"
    >
      <input
        {...register("topic")}
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Enter topic (e.g Web Development)"
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
        <p className="text-red-400 text-sm">{errors.classLevel.message}</p>
      )}

      <input
        {...register("examType")}
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Exam Type (e.g CBSE, JEE, NEET)"
      />
      {errors.examType && (
        <p className="text-red-400 text-sm">{errors.examType.message}</p>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <Toggle
          label="Revision Mode"
          checked={revisionMode}
          onChange={() => setValue("revisionMode", !revisionMode)}
        />

        <Toggle
          label="Include Diagram"
          checked={includeDiagram}
          onChange={() => setValue("includeDiagram", !includeDiagram)}
        />

        <Toggle
          label="Include Chart"
          checked={includeChart}
          onChange={() => setValue("includeChart", !includeChart)}
        />
      </div>

      <motion.button
      whileHover={!loading?{scale:1.02}:{}}
      whileTap={!loading? {scale:0.95}:{}}
      disabled={loading}
        type="submit"
        className={`w-full rounded-xl mt-4  text-black font-semibold py-3 flex items-center justify-center gap-3  transition ${loading?"bg-gray-300 text-gray-600 cursor-not-allowed":"bg-linear-to-br from-white to-gray-200 text-black shadow-[(0_15px_35px_rgba(0,0,0,0.4))]"} `}
      >
      {loading ? "Generating Notes...":"Genearate Notes"}
      </motion.button>
    </motion.form>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <div
      className="flex items-center justify-between gap-4 cursor-pointer select-none rounded-xl px-4 py-3"
      onClick={onChange}
    >
    

      <motion.div
        animate={{
          backgroundColor: checked
            ? "rgba(34,197,94,0.35)"
            : "rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.25 }}
        className="relative w-12 h-6 rounded-full border border-white/20 backdrop-blur-lg"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          style={{
            left: checked ? "1.6rem" : "0.25rem",
          }}
        />
      </motion.div>
        <span
        className={`text-sm transition-colors ${
          checked ? "text-green-300" : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default TopicForm;