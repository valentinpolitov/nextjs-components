"use client";

import { Text } from "nextjs-components/src/components/Text";

import styles from "./colors.module.css";

// color prop is expected to be a value like
// --geist-foreground
const ColorCard = ({ color }: { color: string }) => {
  const varName = `var(${color})`;
  const hex =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(color)
      : "";

  return (
    <button
      className={styles.colorCard}
      style={{ "--color": hex }}
      onClick={() => {
        navigator.clipboard.writeText(hex.toUpperCase());
      }}
    >
      <div className={styles.colorRect}></div>
      <div className={styles.content}>
        <Text>{varName}</Text>
        <Text color="accents-5">
          {hex}
          {/* TODO */}
          {false ? <div className={styles.text}></div> : null}
        </Text>
      </div>
    </button>
  );
};

export default ColorCard;
