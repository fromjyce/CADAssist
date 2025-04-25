import ModelWorkspace from "@/components/model-workspace"
import ParametricPanel from "@/components/parametric-panel"
import PromptInterface from "@/components/prompt-interface"
import ModelHistoryTimeline from "@/components/model-history-timeline"
import ExportPanel from "@/components/export-panel"
import ProjectManagement from "@/components/project-management"
import LearningComponents from "@/components/learning-components"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WorkspacePage() {
  return (
    <main className="flex flex-col h-full w-full bg-background text-foreground overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Main workspace area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 relative">
            <ModelWorkspace />
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm text-foreground">
                Save
              </Button>
              <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm text-foreground">
                Share
              </Button>
            </div>
          </div>
          <div className="h-64 border-t border-border bg-card p-4 md:h-72 sm:h-80">
            <PromptInterface />
          </div>
        </div>

        {/* Right sidebar panels */}
        <div className="w-80 border-l border-border bg-card overflow-y-auto hidden md:block">
          <Tabs defaultValue="parameters" className="w-full">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="parameters">Params</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="parameters" className="p-4">
              <ParametricPanel />
            </TabsContent>
            <TabsContent value="history" className="p-4">
              <ModelHistoryTimeline />
            </TabsContent>
            <TabsContent value="export" className="p-4">
              <ExportPanel />
            </TabsContent>
            <TabsContent value="projects" className="p-4">
              <ProjectManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Learning components (collapsible) */}
      <div className="h-12 border-t border-border bg-card p-2 flex items-center justify-between">
        <LearningComponents />
      </div>
    </main>
  )
}
