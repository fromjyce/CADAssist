"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HistoryIcon, Clock, ArrowLeft, ArrowRight, RotateCcw, GitCompare } from "lucide-react"
import { useModelHistory } from "@/hooks/use-model-history"

export default function ModelHistoryTimeline() {
  const { history, currentVersion, revertToVersion, compareVersions } = useModelHistory()
  const [compareMode, setCompareMode] = useState(false)
  const [selectedVersions, setSelectedVersions] = useState<number[]>([])

  const toggleVersionSelection = (versionId: number) => {
    if (selectedVersions.includes(versionId)) {
      setSelectedVersions(selectedVersions.filter((id) => id !== versionId))
    } else {
      if (selectedVersions.length < 2) {
        setSelectedVersions([...selectedVersions, versionId])
      }
    }
  }

  const handleCompare = () => {
    if (selectedVersions.length === 2) {
      compareVersions(selectedVersions[0], selectedVersions[1])
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <HistoryIcon className="h-5 w-5 mr-2 text-indigo-400" />
          Model History
        </h3>
        <Button variant="outline" size="sm" onClick={() => setCompareMode(!compareMode)}>
          {compareMode ? (
            <>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Cancel
            </>
          ) : (
            <>
              <GitCompare className="h-4 w-4 mr-1" />
              Compare
            </>
          )}
        </Button>
      </div>

      {compareMode && (
        <div className="mb-4 p-2 bg-slate-700/30 rounded-md">
          <p className="text-sm mb-2">Select two versions to compare</p>
          <div className="flex justify-between">
            <div>
              {selectedVersions.length > 0 ? (
                <Badge variant="outline">Version {selectedVersions[0]}</Badge>
              ) : (
                <Badge variant="outline" className="opacity-50">
                  Select first
                </Badge>
              )}
            </div>
            <ArrowRight className="h-4 w-4" />
            <div>
              {selectedVersions.length > 1 ? (
                <Badge variant="outline">Version {selectedVersions[1]}</Badge>
              ) : (
                <Badge variant="outline" className="opacity-50">
                  Select second
                </Badge>
              )}
            </div>
          </div>
          <Button className="w-full mt-2" size="sm" disabled={selectedVersions.length !== 2} onClick={handleCompare}>
            <GitCompare className="h-4 w-4 mr-1" />
            Compare Versions
          </Button>
        </div>
      )}

      <div className="relative flex-1 overflow-y-auto pr-2">
        <div className="absolute top-0 bottom-0 left-4 w-px bg-slate-700" />

        {history.map((version, index) => (
          <div
            key={version.id}
            className={`relative pl-8 py-3 mb-1 rounded-md ${
              currentVersion === version.id ? "bg-slate-700/30" : "hover:bg-slate-700/20"
            } ${compareMode ? "cursor-pointer" : ""}`}
            onClick={() => compareMode && toggleVersionSelection(version.id)}
          >
            <div
              className={`absolute left-4 top-4 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                currentVersion === version.id
                  ? "bg-indigo-500"
                  : selectedVersions.includes(version.id)
                    ? "bg-green-500"
                    : "bg-slate-600"
              }`}
            />

            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-medium">Version {version.id}</h4>
                <p className="text-xs text-slate-400 mt-1">{version.description}</p>
                <div className="flex items-center mt-2">
                  <Clock className="h-3 w-3 mr-1 text-slate-400" />
                  <span className="text-xs text-slate-400">{version.timestamp}</span>
                </div>
              </div>

              {!compareMode && currentVersion !== version.id && (
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => revertToVersion(version.id)}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              )}

              {compareMode && (
                <div
                  className={`h-5 w-5 rounded-full border-2 ${
                    selectedVersions.includes(version.id) ? "bg-green-500 border-green-600" : "border-slate-600"
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
