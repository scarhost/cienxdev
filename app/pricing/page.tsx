"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from 'lucide-react'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("clients")

  const clientPlans = [
    {
      name: "Basic",
      price: "$49",
      description: "For small businesses and startups",
      features: [
        "Post up to 5 projects per month",
        "Access to verified freelancers",
        "Basic support",
      ],
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Post unlimited projects",
        "Priority access to top-rated freelancers",
        "Dedicated account manager",
        "Advanced project management tools",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Custom project posting limits",
        "Exclusive access to elite freelancers",
        "24/7 premium support",
        "Custom integration options",
      ],
    },
  ]

  const freelancerPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "For new freelancers",
      features: [
        "Create a basic profile",
        "Apply to up to 10 projects per month",
        "Access to job board",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      description: "For established freelancers",
      features: [
        "Verified profile badge",
        "Unlimited project applications",
        "Priority in search results",
        "Skills assessment and certification",
      ],
    },
    {
      name: "Expert",
      price: "$79",
      description: "For top-tier freelancers",
      features: [
        "Expert profile badge",
        "Featured placement in search results",
        "Access to exclusive high-paying projects",
        "Personalized career coaching",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing Plans</h1>
      <Tabs defaultValue="clients" className="w-full" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="clients">For Clients</TabsTrigger>
          <TabsTrigger value="freelancers">For Freelancers</TabsTrigger>
        </TabsList>
        <TabsContent value="clients">
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {clientPlans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="freelancers">
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {freelancerPlans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

