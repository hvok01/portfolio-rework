"use client";

import { motion, AnimatePresence, Spring } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useRef, useContext } from 'react';
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const key = usePathname();
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "#0c0c0c";

  return (
    <AnimatePresence mode="wait">
    <motion.div key={key}>
      <motion.div
        style={{
          backgroundColor: transitionColor,
          position: "fixed",
          width: "100vw",
          zIndex: 1000,
          bottom: 0,
        }}
        transition={transitionSpringPhysics}
        animate={{ height: "0vh" }}
        exit={{ height: "100vh" }}
      />

      <motion.div
        style={{
          backgroundColor: transitionColor,
          position: "fixed",
          width: "100vw",
          zIndex: 1000,
          top: 0,
        }}
        transition={transitionSpringPhysics}
        initial={{ height: "100vh" }}
        animate={{ height: "0vh", transition: { delay: 0.2 } }}
      />

      <FrozenRouter>
        {children}
      </FrozenRouter>
    </motion.div>
  </AnimatePresence>
  );
}