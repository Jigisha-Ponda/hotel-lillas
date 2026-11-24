"use client";
import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Read a browser-only value without a setState-in-effect round trip. */
export function useClientValue<T>(get: () => T, server: T): T {
  return useSyncExternalStore(noop, get, () => server);
}
