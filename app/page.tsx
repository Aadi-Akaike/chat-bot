"use client";
import Chat from "@/components/Chat";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <main
      className={`flex h-screen flex-col gap-3 items-start bg-transparent overflow-y-auto`}
    >
      {open && <Chat />}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-500 border rounded-lg px-3 py-2 font-semibold self-end"
      >
        {open ? "Close" : "Open"}
      </button>
    </main>
  );
}
