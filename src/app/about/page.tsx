"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 dir-rtl font-sans overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-16"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800">
            من نحن
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            نحن منصة تعليمية رائدة تهدف إلى سد الفجوة بين التعليم الأكاديمي
            واحتياجات سوق العمل. نؤمن بأن التعليم المتميز يجب أن يكون متاحاً
            للجميع وفي أي وقت.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Value 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-slate-800">رؤيتنا</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              أن نكون الوجهة الأولى للتعلم الذكي وتطوير المهارات في الوطن
              العربي، عبر تقديم محتوى تفاعلي عالي الجودة.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-slate-800">رسالتنا</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              تمكين الأفراد من اكتشاف قدراتهم وتطويرها من خلال دورات مصممة على
              يد خبراء لضمان تجربة تعليمية مثمرة.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-slate-800">قيمنا</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              نلتزم بالجودة، الشفافية، والابتكار المستمر. نضع نجاح الطالب في قمة
              أولوياتنا ونوفر له بيئة داعمة وآمنة.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
