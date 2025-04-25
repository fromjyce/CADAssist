"use client"

import { create } from "zustand"

type ModelType = "cube" | "sphere" | "cylinder" | "container" | "bracket" | "gear" | "phone_stand" | "custom"

interface CADModelState {
  model: ModelType
  dimensions: {
    width: number
    height: number
    depth: number
    radius: number
  }
  setModel: (model: ModelType) => void
  setDimension: (dimension: string, value: number) => void
  setDimensions: (dimensions: { width: number; height: number; depth: number; radius: number }) => void
  resetDimensions: () => void
}

const useCADModelStore = create<CADModelState>((set) => ({
  model: "cube",
  dimensions: {
    width: 1,
    height: 1,
    depth: 1,
    radius: 0.5,
  },
  setModel: (model) => set({ model }),
  setDimension: (dimension, value) =>
    set((state) => ({
      dimensions: {
        ...state.dimensions,
        [dimension]: value,
      },
    })),
  setDimensions: (dimensions) => set({ dimensions }),
  resetDimensions: () =>
    set({
      dimensions: {
        width: 1,
        height: 1,
        depth: 1,
        radius: 0.5,
      },
    }),
}))

export const useCADModel = () => useCADModelStore()
