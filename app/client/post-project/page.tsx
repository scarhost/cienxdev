"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PostProject() {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    type: "",
    scope: [],
    techStack: [],
    templatePreference: false,
    complexity: "",
    budget: "",
    timeline: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setProjectData({ ...projectData, [name]: value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting project:", projectData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Post a New Project</CardTitle>
          <CardDescription>Fill in the details to post your project and find the perfect freelancer.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={projectData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={projectData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Project Type</Label>
                <Select onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="desktop-app">Desktop App</SelectItem>
                    <SelectItem value="api">API Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Scope of Work</Label>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Frontend", "Backend", "Full-stack", "DevOps"].map((scope) => (
                    <label key={scope} className="flex items-center space-x-2">
                      <Checkbox
                        name="scope"
                        value={scope}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setProjectData({ ...projectData, scope: [...projectData.scope, scope] })
                          } else {
                            setProjectData({ ...projectData, scope: projectData.scope.filter((s) => s !== scope) })
                          }
                        }}
                      />
                      <span>{scope}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Technical Preferences</Label>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "Java", "AWS", "Docker"].map((tech) => (
                    <label key={tech} className="flex items-center space-x-2">
                      <Checkbox
                        name="techStack"
                        value={tech}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setProjectData({ ...projectData, techStack: [...projectData.techStack, tech] })
                          } else {
                            setProjectData({ ...projectData, techStack: projectData.techStack.filter((t) => t !== tech) })
                          }
                        }}
                      />
                      <span>{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="templatePreference"
                  name="templatePreference"
                  checked={projectData.templatePreference}
                  onCheckedChange={(checked: boolean) => setProjectData({ ...projectData, templatePreference: checked })}
                />
                <Label htmlFor="templatePreference">I prefer to use a template or theme</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="complexity">Project Complexity</Label>
                <Select onValueChange={(value) => handleSelectChange("complexity", value)}>
                  <SelectTrigger id="complexity">
                    <SelectValue placeholder="Select complexity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Simple</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="complex">Complex</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  name="budget"
                  type="number"
                  placeholder="Enter budget in USD"
                  value={projectData.budget}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timeline">Timeline (in weeks)</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  type="number"
                  placeholder="Enter project timeline in weeks"
                  value={projectData.timeline}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>Post Project</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

