"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Grid,
  Environment,
  PerspectiveCamera,
  Box,
  Sphere,
  Cylinder,
  useHelper,
} from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ruler, Eye, BoxIcon, Circle, CylinderIcon } from "lucide-react"
import { useCADModel } from "@/hooks/use-cad-model"
import { useMediaQuery } from "@/hooks/use-media-query"

// Simple component to show a model
const Model = () => {
  const { model, dimensions } = useCADModel()
  const directionalLightRef = React.useRef<THREE.DirectionalLight>(null)

  // Show helper for the directional light in development
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5, "red")

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight ref={directionalLightRef} position={[5, 5, 5]} intensity={1} castShadow />

      {/* Placeholder model - would be replaced with actual CAD model */}
      {model === "cube" && (
        <Box args={[dimensions.width, dimensions.height, dimensions.depth]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#7c3aed" />
        </Box>
      )}

      {model === "sphere" && (
        <Sphere args={[dimensions.radius, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#7c3aed" />
        </Sphere>
      )}

      {model === "cylinder" && (
        <Cylinder
          args={[dimensions.radius, dimensions.radius, dimensions.height, 32]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#7c3aed" />
        </Cylinder>
      )}

      {model === "container" && (
        <group>
          {/* Container body */}
          <Cylinder args={[dimensions.radius, dimensions.radius, dimensions.height, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#7c3aed" />
          </Cylinder>

          {/* Container hollow inside */}
          <Cylinder
            args={[dimensions.radius * 0.9, dimensions.radius * 0.9, dimensions.height * 0.95, 32]}
            position={[0, dimensions.height * 0.05, 0]}
          >
            <meshStandardMaterial color="#7c3aed" colorWrite={false} />
          </Cylinder>

          {/* Cap */}
          <Cylinder
            args={[dimensions.radius * 1.1, dimensions.radius * 1.1, dimensions.height * 0.1, 32]}
            position={[0, dimensions.height * 0.55, 0]}
          >
            <meshStandardMaterial color="#9333ea" />
          </Cylinder>
        </group>
      )}

      {model === "bracket" && (
        <group>
          {/* Base plate */}
          <Box
            args={[dimensions.width, dimensions.height * 0.2, dimensions.depth]}
            position={[0, -dimensions.height * 0.4, 0]}
          >
            <meshStandardMaterial color="#7c3aed" />
          </Box>

          {/* Vertical support */}
          <Box
            args={[dimensions.width * 0.2, dimensions.height, dimensions.depth]}
            position={[-dimensions.width * 0.4, 0, 0]}
          >
            <meshStandardMaterial color="#7c3aed" />
          </Box>

          {/* Mounting holes */}
          <Cylinder
            args={[dimensions.radius * 0.3, dimensions.radius * 0.3, dimensions.height * 0.3, 16]}
            position={[dimensions.width * 0.25, -dimensions.height * 0.4, dimensions.depth * 0.25]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial color="black" />
          </Cylinder>

          <Cylinder
            args={[dimensions.radius * 0.3, dimensions.radius * 0.3, dimensions.height * 0.3, 16]}
            position={[dimensions.width * 0.25, -dimensions.height * 0.4, -dimensions.depth * 0.25]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial color="black" />
          </Cylinder>
        </group>
      )}

      {model === "gear" && (
        <group>
          {/* This is a simplified gear representation */}
          <Cylinder args={[dimensions.radius, dimensions.radius, dimensions.height * 0.5, 24]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#7c3aed" />
          </Cylinder>

          {/* Center hole */}
          <Cylinder
            args={[dimensions.radius * 0.2, dimensions.radius * 0.2, dimensions.height * 0.6, 16]}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial color="black" />
          </Cylinder>

          {/* Gear teeth representation (simplified) */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2
            const x = Math.cos(angle) * dimensions.radius
            const z = Math.sin(angle) * dimensions.radius

            return (
              <Box
                key={i}
                args={[dimensions.radius * 0.2, dimensions.height * 0.5, dimensions.radius * 0.2]}
                position={[x, 0, z]}
                rotation={[0, angle, 0]}
              >
                <meshStandardMaterial color="#9333ea" />
              </Box>
            )
          })}
        </group>
      )}

      {model === "phone_stand" && (
        <group>
          {/* Base */}
          <Box
            args={[dimensions.width, dimensions.height * 0.1, dimensions.depth * 1.2]}
            position={[0, -dimensions.height * 0.45, 0]}
          >
            <meshStandardMaterial color="#7c3aed" />
          </Box>

          {/* Back support */}
          <Box
            args={[dimensions.width, dimensions.height * 0.8, dimensions.height * 0.1]}
            position={[0, -dimensions.height * 0.1, -dimensions.depth * 0.5]}
            rotation={[Math.PI * 0.15, 0, 0]}
          >
            <meshStandardMaterial color="#7c3aed" />
          </Box>

          {/* Phone rest */}
          <Box
            args={[dimensions.width, dimensions.height * 0.1, dimensions.depth * 0.3]}
            position={[0, -dimensions.height * 0.4, dimensions.depth * 0.4]}
          >
            <meshStandardMaterial color="#9333ea" />
          </Box>
        </group>
      )}

      <Grid
        infiniteGrid
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#7c3aed"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#9333ea"
        fadeDistance={30}
      />
    </>
  )
}

// Toolbar for view controls
const ViewToolbar = () => {
  const { setModel, setDimensions } = useCADModel()
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleModelChange = (modelType: string) => {
    switch (modelType) {
      case "cube":
        setModel("cube")
        setDimensions({
          width: 1,
          height: 1,
          depth: 1,
          radius: 0.5,
        })
        break
      case "sphere":
        setModel("sphere")
        setDimensions({
          width: 1,
          height: 1,
          depth: 1,
          radius: 0.5,
        })
        break
      case "cylinder":
        setModel("cylinder")
        setDimensions({
          width: 1,
          height: 2,
          depth: 1,
          radius: 0.5,
        })
        break
      case "container":
        setModel("container")
        setDimensions({
          width: 1,
          height: 2,
          depth: 1,
          radius: 0.8,
        })
        break
      case "bracket":
        setModel("bracket")
        setDimensions({
          width: 2,
          height: 2,
          depth: 1,
          radius: 0.5,
        })
        break
      case "gear":
        setModel("gear")
        setDimensions({
          width: 1,
          height: 0.5,
          depth: 1,
          radius: 1,
        })
        break
      case "phone_stand":
        setModel("phone_stand")
        setDimensions({
          width: 2,
          height: 2,
          depth: 2,
          radius: 0.5,
        })
        break
    }
  }

  return (
    <div
      className={`absolute ${
        isMobile ? "bottom-4 left-4 right-4" : "top-4 left-4"
      } z-10 bg-card/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-border`}
    >
      <Tabs defaultValue="view" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="view">
            <Eye className="h-4 w-4 mr-1" />
            <span className="sr-only sm:not-sr-only sm:inline-block">View</span>
          </TabsTrigger>
          <TabsTrigger value="measure">
            <Ruler className="h-4 w-4 mr-1" />
            <span className="sr-only sm:not-sr-only sm:inline-block">Measure</span>
          </TabsTrigger>
          <TabsTrigger value="shapes">
            <BoxIcon className="h-4 w-4 mr-1" />
            <span className="sr-only sm:not-sr-only sm:inline-block">Shapes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="view" className="mt-2 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Top
          </Button>
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Front
          </Button>
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Side
          </Button>
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Isometric
          </Button>
        </TabsContent>

        <TabsContent value="measure" className="mt-2 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Distance
          </Button>
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Angle
          </Button>
          <Button variant="outline" size="sm" className="bg-background/50 text-foreground">
            Area
          </Button>
        </TabsContent>

        <TabsContent value="shapes" className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("cube")}
            className="bg-background/50 text-foreground"
          >
            <BoxIcon className="h-4 w-4 mr-1" />
            Cube
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("sphere")}
            className="bg-background/50 text-foreground"
          >
            <Circle className="h-4 w-4 mr-1" />
            Sphere
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("cylinder")}
            className="bg-background/50 text-foreground"
          >
            <CylinderIcon className="h-4 w-4 mr-1" />
            Cylinder
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("container")}
            className="bg-background/50 text-foreground"
          >
            <CylinderIcon className="h-4 w-4 mr-1" />
            Container
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("bracket")}
            className="bg-background/50 text-foreground"
          >
            <BoxIcon className="h-4 w-4 mr-1" />
            Bracket
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("gear")}
            className="bg-background/50 text-foreground"
          >
            <Circle className="h-4 w-4 mr-1" />
            Gear
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleModelChange("phone_stand")}
            className="bg-background/50 text-foreground"
          >
            <BoxIcon className="h-4 w-4 mr-1" />
            Phone Stand
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function ModelWorkspace() {
  return (
    <div className="relative w-full h-full bg-background">
      <Canvas shadows className="w-full h-full">
        <PerspectiveCamera makeDefault position={[3, 3, 3]} />
        <Model />
        <OrbitControls enableDamping dampingFactor={0.05} rotateSpeed={0.5} zoomSpeed={0.5} panSpeed={0.5} />
        <Environment preset="city" />
      </Canvas>

      <ViewToolbar />
    </div>
  )
}
