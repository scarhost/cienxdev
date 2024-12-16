import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart, Clock, DollarSign, Users } from 'lucide-react'

export default function ClientDashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Client Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Project Duration
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5 months</div>
            <p className="text-xs text-muted-foreground">
              -0.5 months from last quarter
            </p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="active" className="mt-6">
        <TabsList>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed Projects</TabsTrigger>
          <TabsTrigger value="applications">Applications Received</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>
                Your currently ongoing projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["E-commerce Website", "Mobile App Development", "API Integration"].map((project) => (
                  <div key={project} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{project}</h3>
                      <p className="text-sm text-muted-foreground">In progress</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Projects</CardTitle>
              <CardDescription>
                Your successfully completed projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Website Redesign", "SEO Optimization"].map((project) => (
                  <div key={project} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{project}</h3>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Applications Received</CardTitle>
              <CardDescription>
                Recent applications for your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["John Doe - Web Developer", "Jane Smith - UI/UX Designer", "Mike Johnson - Full Stack Developer"].map((applicant) => (
                  <div key={applicant} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{applicant}</h3>
                      <p className="text-sm text-muted-foreground">Applied 2 days ago</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Review Application <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

