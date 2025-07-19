import { emojiList } from "@/data/emojiList";
import { X } from "lucide-react";
import { motion } from "motion/react";

interface EmojiPopoverProps {
  setEmojiDescription: React.Dispatch<React.SetStateAction<string>>;
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentEmoji: React.Dispatch<React.SetStateAction<string>>;
}

const popverAnimationVariants = {
  closed: {
    opacity: 0,
    scale: 0.8,
    y: 32,
    filter: "blur(8px)",
  },
  open: { opacity: 1, scale: 1, y: 0, filter: "none" },
};

const emojiListAnimationVariants = {
  open: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const emojiAnimationVariants = {
  closed: {
    opacity: 0,
    y: 32,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};

export default function EmojiPopover({
  setEmojiDescription,
  setShowPopover,
  setCurrentEmoji,
}: EmojiPopoverProps) {
  return (
    <motion.div
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      variants={popverAnimationVariants}
      className="absolute top-1/2 left-1/2 min-h-96 w-96 -translate-x-1/2 -translate-y-[432px] rounded-xl border border-neutral-700 bg-neutral-800 p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-neutral-400">Pick an emoji</p>
        <button
          onClick={() => setShowPopover(false)}
          className="cursor-pointer rounded-full bg-neutral-700 p-2 hover:bg-neutral-600"
          title="Close Emoji Picker"
          aria-label="Close Emoji Picker"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Emoji list */}
      <motion.ul
        variants={emojiListAnimationVariants}
        className="mt-2 flex flex-wrap items-center gap-1"
      >
        {emojiList.map((emoji) => (
          <motion.li
            key={emoji.description}
            variants={emojiAnimationVariants}
            whileHover={{
              scale: 1.2,
              rotate: [-10, 0, 10, 0, -10, 0],
              transition: {
                duration: 0.3,
              },
            }}
          >
            <button
              key={emoji.description}
              className="cursor-pointer rounded-full bg-neutral-800 p-2 text-2xl transition-colors duration-300 ease-in-out hover:bg-neutral-700"
              onClick={() => {
                setCurrentEmoji(emoji.content);
                setEmojiDescription(emoji.description);
                setShowPopover(false);
              }}
              title={emoji.description}
              aria-label={emoji.description}
            >
              {emoji.content}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
