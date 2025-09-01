"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "500px",
          borderRadius: "10px",
          border: "1px solid black",
          position: "relative",
          overflow: "hidden",
          color: show ? "white" : "black",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          className={show ? "show_black" : "hide_black"}
        ></div>
        <button
          style={{
            color: show ? "white" : "black",
            zIndex: 10,
            position: "relative",
          }}
          onClick={() => setShow(!show)}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
