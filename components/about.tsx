"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.section
      //ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28  text-gray-400"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <p className="mb-3">     
        Atualmente curso ADS . e constatemente aprendendo{" "}
        <span className="font-medium">desenvolvimento web full-stack</span>.{" "}
        <span className="italic">Minha parte favorita da programação</span> é o
        aspecto de resolução de problemas. Eu{" "}
        <span className="underline">adoro</span> a sensação de finalmente
        encontrar uma solução para um problema. Minha stack principal é{" "}
        <span className="font-medium">React, Next.js, Node.js e MongoDB</span>.
        Também tenho familiaridade com TypeScript e Nest.JS. Estou sempre
        buscando aprender novas tecnologias. Atualmente, estou procurando uma{" "}
        <span className="font-medium">posição em tempo integral</span> como
        desenvolvedora de software.
      </p>

      <p>
        <span className="italic">Quando não estou programando</span>, gosto de
        jogar videogames, assistir filmes (sou uma grande fã de HP). Também
        gosto de <span className="font-medium">aprender coisas novas</span>.
        Atualmente estou aprendendo sobre{" "}
        <span className="font-medium">segurança da informação</span>e também estou
        aprendendo a falar francês.
      </p>
    </motion.section>
  );
}
