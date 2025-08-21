"use client";
import useGlobalScripts from "@/utils/global";

export default function GlobalScript() {
  useGlobalScripts();
  return null; // No UI, just runs the JS hook
}