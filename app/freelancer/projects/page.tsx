"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FindProjects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")

  const projects = [
    { id: 1, title: "E-commerce Website Development", category: "Web Development", budget: "$5000 - $10000", duration: "2-3 months" },
    { id: 2, title: "Mobile App for Fitness Tracking", category: "Mobile Development", budget: "$8000 - $15000", duration: "3-4 months" },
    { id: 3, title: "Data Visualization Dashboard", category: "Data Science", budget: "$3000 - $6000", duration: "1-2 months" },
    { id: 4, title: "AI Chatbot Integration", category: "Artificial Intelligence", budget: "$7000 - $12000", duration: "2-3 months" },
  ]

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "all" || project.category === category)
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Find Projects</h1>
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Mobile Development">Mobile Development</SelectItem>
            <SelectItem value="Data Science">Data Science</SelectItem>
            <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p><strong>Budget:</strong> {project.budget}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

