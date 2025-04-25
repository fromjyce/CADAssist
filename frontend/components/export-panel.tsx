"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Download, Share2, FileDown, Copy, Check } from "lucide-react"
import { useExportHandler } from "@/hooks/use-export-handler"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExportPanel() {
  const [format, setFormat] = useState("stl")
  const [quality, setQuality] = useState(75)
  const [includeTextures, setIncludeTextures] = useState(true)
  const [copied, setCopied] = useState(false)
  const { exportModel, generateShareLink } = useExportHandler()

  const handleExport = () => {
    exportModel(format, quality, includeTextures)
  }

  const handleCopyLink = () => {
    const link = generateShareLink()
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const exportFormats = [
    { value: "stl", label: "STL - 3D Printing" },
    { value: "obj", label: "OBJ - With Materials" },
    { value: "step", label: "STEP - CAD Exchange" },
    { value: "fbx", label: "FBX - Animation/Game" },
    { value: "gltf", label: "glTF - Web Optimized" },
  ]

  const cadSoftware = [
    { name: "Fusion 360", icon: "🔄" },
    { name: "SolidWorks", icon: "🔧" },
    { name: "Onshape", icon: "☁️" },
    { name: "Blender", icon: "🎨" },
  ]

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <Download className="h-5 w-5 mr-2 text-indigo-400" />
        Export Model
      </h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="format">Export Format</Label>
          <Select value={format} onValueChange={setFormat}>
            <SelectTrigger id="format">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              {exportFormats.map((format) => (
                <SelectItem key={format.value} value={format.value}>
                  {format.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="quality">Quality/Resolution</Label>
            <span className="text-sm text-slate-400">{quality}%</span>
          </div>
          <Slider
            id="quality"
            min={10}
            max={100}
            step={5}
            value={[quality]}
            onValueChange={(value) => setQuality(value[0])}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="textures" className="cursor-pointer">
            Include Textures/Materials
          </Label>
          <Switch id="textures" checked={includeTextures} onCheckedChange={setIncludeTextures} />
        </div>

        <Button className="w-full" onClick={handleExport}>
          <FileDown className="h-4 w-4 mr-2" />
          Export as {format.toUpperCase()}
        </Button>

        <div className="pt-4">
          <h4 className="text-sm font-medium mb-3">Export to CAD Software</h4>
          <div className="grid grid-cols-2 gap-2">
            {cadSoftware.map((software) => (
              <Button key={software.name} variant="outline" className="justify-start" size="sm">
                <span className="mr-2">{software.icon}</span>
                {software.name}
              </Button>
            ))}
          </div>
        </div>

        <Card className="mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Share Model</CardTitle>
            <CardDescription className="text-xs">Generate a link to share this model</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex">
              <Input value="https://ai-cad.app/share/m0d3l1d" readOnly className="rounded-r-none" />
              <Button variant="outline" className="rounded-l-none" onClick={handleCopyLink}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Model
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
