"use client";
import { create } from "zustand";

export const FavoriteWorkspace = create((set) => ({
  workspaceList: [],
  pushWorkspace: () => set((state) => ({})),
}));
