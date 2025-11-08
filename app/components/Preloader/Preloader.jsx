"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SiBitcoin, SiSolana } from "react-icons/si";

export default function Preloader({ loading, symbol }) {
  const Icon = symbol === "BTC" ? SiBitcoin : SiSolana;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="preloaderInner">
            <motion.div
              style={{ fontSize: 64 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "linear" }}
            >
              <Icon />
            </motion.div>

            <motion.div
              className="preloaderText"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              Loading ${symbol} data…
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
