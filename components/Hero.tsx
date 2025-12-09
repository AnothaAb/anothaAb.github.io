"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <motion.div className="card p-6" initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.5 }}>
        <h1 className="text-4xl font-bold tracking-tight">Hi, I’m Ab (Abdulelah) Almasri 👋</h1>
        <p className="text-mute mt-2">Computer Engineering (Robotics) @ Boston University. I build embedded devices and simple web apps that solve real problems.</p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link className="px-3 py-2 rounded-lg bg-accent text-black" href="#projects">See Projects</Link>
          <a className="px-3 py-2 rounded-lg border border-line" href="mailto:aalmasri@bu.edu">Get in Touch</a>
        </div>
      </motion.div>
      <motion.div className="card p-6" initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.5, delay:0.08 }}>
        <h2 className="text-xl font-semibold">Quick Facts</h2>
        <ul className="mt-2 space-y-2">
          <li>📍 Boston, MA</li>
          <li>🎓 BU — B.S. Computer Engineering (Robotics), Expected May 2027</li>
          <li>💼 Seeking: Internship / Entry-level</li>
          <li>✉️ <a className="underline" href="mailto:aalmasri@bu.edu">aalmasri@bu.edu</a></li>
        </ul>
      </motion.div>
    </section>
  );
}
