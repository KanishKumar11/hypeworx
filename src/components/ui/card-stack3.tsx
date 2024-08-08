"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  src: string;
};

export const CardStack3 = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 30;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 1000);
  };

  return (
    <div className="relative w-full  h-40 flex items-start justify-center   ">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-40 sm:w-[80%] w-[120%] rounded-3xl p-4   border-neutral-200 dark:border-white/[0.1]   flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Image
              src={card.src}
              alt=""
              width={800}
              height={800}
              className="mx-auto"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
