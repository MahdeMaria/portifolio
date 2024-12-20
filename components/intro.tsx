"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div
        className="flex items-center 
    justify-center"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src="/Maria.png"
              alt="Maria Gurgel"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full
                    object-cover border-[0.35rem]
                    border-white shadow-xl"
            />

            <motion.span
              className="absolute bottom-0 right-0 text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.3,
                duration: 1,
              }}
            >
              🥰
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Oii! Meu nome é Maria Eduarda.</span> Eu sou uma {" "}
        <span className="font-bold">desenvolvedora fullStack</span> com{" "}
        <span className="font-bold">2 anos</span> de experiência. Adoro
        construir <span className="italic">sites & soluções</span>. O meu foco é {" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
}
