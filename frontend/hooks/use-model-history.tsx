"use client"

import { create } from "zustand"

interface HistoryVersion {
  id: number
  description: string
  timestamp: string
  changes: string[]
}

interface ModelHistoryState {
  history: HistoryVersion[]
  currentVersion: number
  revertToVersion: (versionId: number) => void
  compareVersions: (versionId1: number, versionId2: number) => void
}

const useModelHistoryStore = create<ModelHistoryState>((set) => ({
  history: [
    {
      id: 5,
      description: "Added chamfer to edges",
      timestamp: "Today, 2:45 PM",
      changes: ["Added 2mm chamfer to all edges"],
    },
    {
      id: 4,
      description: "Modified dimensions",
      timestamp: "Today, 1:30 PM",
      changes: ["Changed width from 80mm to 100mm", "Changed height from 40mm to 50mm"],
    },
    {
      id: 3,
      description: "Added mounting holes",
      timestamp: "Today, 11:15 AM",
      changes: ["Added 4x 5mm mounting holes"],
    },
    {
      id: 2,
      description: "Created base extrusion",
      timestamp: "Yesterday, 4:20 PM",
      changes: ["Extruded base sketch to 25mm"],
    },
    {
      id: 1,
      description: "Initial sketch",
      timestamp: "Yesterday, 3:45 PM",
      changes: ["Created initial 2D sketch"],
    },
  ],
  currentVersion: 5,
  revertToVersion: (versionId) => set({ currentVersion: versionId }),
  compareVersions: (versionId1, versionId2) => {
    // In a real app, this would show a diff between versions
    console.log(`Comparing versions ${versionId1} and ${versionId2}`)
  },
}))

export const useModelHistory = () => useModelHistoryStore()
