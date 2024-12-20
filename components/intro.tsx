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
    </section>
  );
}
