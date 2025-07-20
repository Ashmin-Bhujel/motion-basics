"use client";
import { type ParallaxCard } from "@/data/parallaxCards";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxCard({
  parallaxCard,
}: {
  parallaxCard: ParallaxCard;
}) {
  const parallaxCardContainer = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parallaxCardContainer,
    offset: ["start end", "end start"],
  });

  const transformImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    { mass: 1, damping: 12, stiffness: 100 }
  );
  const opacityImage = useTransform(scrollYProgress, [0, 0.5, 0.75], [0, 1, 0]);
  const blurDescription = useTransform(scrollYProgress, [0.5, 1], [0, 8]);
  const scaleDescription = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={parallaxCardContainer}
      className="flex items-center justify-center max-lg:py-8 lg:min-h-screen"
    >
      <div className="flex items-center justify-between gap-20 max-lg:flex-col-reverse max-lg:gap-16">
        {/* Decription */}
        <motion.div
          style={{
            filter: useMotionTemplate`blur(${blurDescription}px)`,
            scale: scaleDescription,
          }}
          className="flex max-w-md flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold tracking-tighter">
              {parallaxCard.description}
            </h2>
            {parallaxCard.location && (
              <small className="text-sm text-neutral-400">
                {parallaxCard.location}
              </small>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-2 max-lg:flex-row max-lg:items-center max-lg:gap-4">
            <Image
              src={parallaxCard.avatar}
              alt={parallaxCard.owner}
              priority
              width={64}
              height={64}
              className="rounded-full"
            />
            <p className="text-lg text-neutral-400">{parallaxCard.owner}</p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{
            y: transformImage,
            opacity: opacityImage,
          }}
        >
          <Image
            src={parallaxCard.image}
            alt={parallaxCard.description}
            priority
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
