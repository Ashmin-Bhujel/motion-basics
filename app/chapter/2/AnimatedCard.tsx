"use client";
import { cn } from "@/lib/utils";
import { Bot, CircleCheck, Cpu, Feather, Gift, Smile, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function MotionSvg() {
  return (
    <svg viewBox="0 0 24 9" className="h-6 w-6">
      <path
        d="M 9.062 0 L 4.32 8.992 L 0 8.992 L 3.703 1.971 C 4.277 0.882 5.709 0 6.902 0 Z M 19.656 2.248 C 19.656 1.006 20.623 0 21.816 0 C 23.009 0 23.976 1.006 23.976 2.248 C 23.976 3.49 23.009 4.496 21.816 4.496 C 20.623 4.496 19.656 3.49 19.656 2.248 Z M 9.872 0 L 14.192 0 L 9.45 8.992 L 5.13 8.992 Z M 14.974 0 L 19.294 0 L 15.592 7.021 C 15.018 8.11 13.585 8.992 12.392 8.992 L 10.232 8.992 Z"
        fill="rgb(255, 243, 18)"
      ></path>
    </svg>
  );
}

interface MotionFeature {
  icon: React.ReactNode;
  title: string;
}

const motionFeatures: MotionFeature[] = [
  { icon: <Gift className="h-4 w-4" />, title: "Free and Open-source" },
  {
    icon: <Smile className="h-4 w-4" />,
    title: "Easy to use",
  },
  {
    icon: <CircleCheck className="h-4 w-4" />,
    title: "Production-ready",
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    title: "Hybrid engine",
  },
  {
    icon: <Bot className="h-4 w-4" />,
    title: "Robot friendly",
  },
  {
    icon: <Feather className="h-4 w-4" />,
    title: "Tiny footprint",
  },
];

function MotionFeature({ feature }: { feature: MotionFeature }) {
  return (
    <div className="flex items-center gap-2 p-4">
      <div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900">
          {feature.icon}
        </div>
      </div>
      <div>
        <p className="text-sm">{feature.title}</p>
      </div>
    </div>
  );
}

export default function AnimatedCard() {
  const [showCard, setShowCard] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{
              opacity: 0,
              y: 32,
              scale: 1.02,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "none",
            }}
            exit={{
              opacity: 0,
              y: 32,
              scale: 1.02,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "min-h-[32rem] w-96 rounded-xl bg-neutral-900",
              "flex flex-col p-6",
              "border-2 border-neutral-800",
              "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            )}
          >
            {/* Head */}
            <div>
              <h2 className="text-lg font-bold">Motion for React</h2>
              <p className="mt-2 text-neutral-500">
                A powerful animation library and developer tools for making
                beautiful animations.
              </p>
            </div>

            {/* Close */}
            <div className="mt-6 flex items-center justify-center">
              <button
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-full bg-neutral-800 px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-neutral-700",
                  "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                )}
                onClick={() => setShowCard(false)}
                title="Close Card"
                aria-label="Close Card"
              >
                <MotionSvg />
                <span className="text-sm">Motion</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div
              className={cn(
                "mt-4 flex-1 rounded-lg border border-neutral-700 bg-neutral-800",
                "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
                "flex items-center justify-center"
              )}
            >
              <p className="absolute text-sm text-neutral-400">Hover Over</p>
              {/* Features */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(4px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: "none",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="h-full w-full divide-y divide-neutral-700 rounded-lg bg-neutral-800"
              >
                {motionFeatures.map((feature) => (
                  <MotionFeature key={feature.title} feature={feature} />
                ))}
              </motion.div>
            </div>

            {/* Get Creative */}
            <div className="mt-4 text-center">
              <button className="mx-auto cursor-pointer rounded-full bg-[hsl(57,100%,54%)] px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors duration-300 ease-in-out hover:bg-[hsl(57,100%,42%)]">
                Get Creative
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
