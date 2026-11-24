"use client";
import { useClientValue } from "@/lib/useClient";

export function Year() {
  const year = useClientValue(() => new Date().getFullYear(), 2026);
  return <span>{year}</span>;
}
