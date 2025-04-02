"use client";
import { create } from "zustand";

export const FavoriteWorkspace = create((set) => ({
  workspaceList: [],
  pushWorkspace: () => set((state) => ({ count: state.count + 1 })),
  popWorkspace: () => set((state) => ({ count: state.count - 1 })),
}));
