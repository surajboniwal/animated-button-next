"use client";
import { useState } from "react";
import * as styles from "./page.css";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className={styles.main}>
      <div
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        className={styles.button({
          type: "rounded",
          variant: "primary",
          state: clicked ? "clicked" : "default",
        })}
      >
        Click me!
      </div>
    </main>
  );
}
