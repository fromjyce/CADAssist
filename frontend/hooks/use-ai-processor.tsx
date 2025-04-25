"use client"

import { create } from "zustand"

interface AIProcessorState {
  isProcessing: boolean
  confidence: number
  recentPrompts: string[]
  processPrompt: (prompt: string) => void
  cancelProcessing: () => void
}

const useAIProcessorStore = create<AIProcessorState>((set, get) => ({
  isProcessing: false,
  confidence: 0,
  recentPrompts: [
    "Create a cylindrical container with a threaded cap",
    "Design a mounting bracket for a 120mm fan",
    "Model a simple gear with 24 teeth",
  ],
  processPrompt: (prompt) => {
    set({
      isProcessing: true,
      confidence: 0,
    })

    // Simulate AI processing with confidence increasing over time
    const interval = setInterval(() => {
      set((state) => {
        const newConfidence = state.confidence + 10
        if (newConfidence >= 100) {
          clearInterval(interval)

          // Add the prompt to recent prompts
          const updatedPrompts = [
            prompt,
            ...state.recentPrompts.slice(0, 4), // Keep only the 5 most recent
          ]

          return {
            confidence: 100,
            isProcessing: false,
            recentPrompts: updatedPrompts,
          }
        }
        return { confidence: newConfidence }
      })
    }, 300)

    // Simulate completion after 3 seconds
    setTimeout(() => {
      clearInterval(interval)
      set({
        isProcessing: false,
        confidence: 100,
      })
    }, 3000)
  },
  cancelProcessing: () => {
    set({
      isProcessing: false,
      confidence: 0,
    })
  },
}))

export const useAIProcessor = () => useAIProcessorStore()
