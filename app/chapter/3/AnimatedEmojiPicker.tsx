"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import EmojiPopover from "./EmojiPopover";
import { cn } from "@/lib/utils";

export default function AnimatedEmojiPicker() {
  const [currentEmoji, setCurrentEmoji] = useState("😅");
  const [showPopover, setShowPopover] = useState(false);
  const [emojiDescription, setEmojiDescription] = useState(
    "Grinning Face with Sweat"
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 32, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Emoji Button */}
      <motion.button
        className={cn(
          "flex min-w-20 cursor-pointer items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 p-4 text-4xl transition-colors duration-300 ease-in-out hover:bg-neutral-700",
          {
            "bg-neutral-700": showPopover,
          }
        )}
        title={emojiDescription}
        onClick={() => setShowPopover((prevState) => !prevState)}
        whileTap={{
          scale: 0.8,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <span>{currentEmoji}</span>
      </motion.button>

      {/* Emoji Popover */}
      <AnimatePresence>
        {showPopover && (
          <EmojiPopover
            setEmojiDescription={setEmojiDescription}
            setShowPopover={setShowPopover}
            setCurrentEmoji={setCurrentEmoji}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
