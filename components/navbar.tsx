"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Bell, Menu, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">ClienxDev</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Clients</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/client/post-project"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Post Your Project
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Find the perfect developer for your project
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/client/dashboard">Project Dashboard</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/client/payments">Payments</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/freelancer/profile">My Profile</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Freelancers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/freelancer/projects"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Find Projects
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse exciting projects that match your skills
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/freelancer/dashboard">Freelancer Dashboard</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/freelancer/profile">My Profile</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogTitle>Menu</DialogTitle>
              <nav className="flex flex-col space-y-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="clients">
                    <AccordionTrigger>For Clients</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <Link href="/client/post-project" onClick={() => setIsOpen(false)}>
                          Post Your Project
                        </Link>
                        <Link href="/client/dashboard" onClick={() => setIsOpen(false)}>
                          Project Dashboard
                        </Link>
                        <Link href="/client/payments" onClick={() => setIsOpen(false)}>
                          Payments
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="freelancers">
                    <AccordionTrigger>For Freelancers</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <Link href="/freelancer/projects" onClick={() => setIsOpen(false)}>
                          Find Projects
                        </Link>
                        <Link href="/freelancer/dashboard" onClick={() => setIsOpen(false)}>
                          Freelancer Dashboard
                        </Link>
                        <Link href="/freelancer/profile" onClick={() => setIsOpen(false)}>
                          My Profile
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Log in
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  Sign up
                </Link>
              </nav>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:flex">Log in</Button>
          <Button className="hidden md:flex">Sign up</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

