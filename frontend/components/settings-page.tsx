"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Bell,
  Monitor,
  CreditCard,
  Download,
  Upload,
  Save,
  Trash2,
  Shield,
  Sliders,
  Palette,
  HardDrive,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const [theme, setTheme] = useState("dark")
  const [accentColor, setAccentColor] = useState("indigo")

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Tabs
            defaultValue="account"
            value={activeTab}
            onValueChange={setActiveTab}
            orientation="vertical"
            className="w-full"
          >
            <TabsList className="flex flex-row md:flex-col h-auto justify-start bg-transparent p-0 w-full">
              <TabsTrigger value="account" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="appearance" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="display" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <Monitor className="h-4 w-4 mr-2" />
                Display
              </TabsTrigger>
              <TabsTrigger value="security" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="billing" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="storage" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <HardDrive className="h-4 w-4 mr-2" />
                Storage
              </TabsTrigger>
              <TabsTrigger value="advanced" className="justify-start data-[state=active]:bg-muted w-full mb-1 px-3">
                <Sliders className="h-4 w-4 mr-2" />
                Advanced
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="md:w-3/4">
          <TabsContent value="account" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details and profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-1" />
                        Upload
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="johndoe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about yourself"
                        defaultValue="Product designer and 3D modeling enthusiast."
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <RadioGroup defaultValue={theme} onValueChange={setTheme} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="cursor-pointer">
                        Light
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark" className="cursor-pointer">
                        Dark
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="system" />
                      <Label htmlFor="system" className="cursor-pointer">
                        System
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {["indigo", "violet", "blue", "green", "red"].map((color) => (
                      <div
                        key={color}
                        className={`h-10 rounded-md cursor-pointer border-2 ${
                          accentColor === color ? "border-primary" : "border-transparent"
                        }`}
                        style={{ backgroundColor: `var(--${color}-600)` }}
                        onClick={() => setAccentColor(color)}
                      />
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <Slider defaultValue={[16]} max={24} min={12} step={1} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Small</span>
                    <span>Medium</span>
                    <span>Large</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduced-motion">Reduce Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch id="reduced-motion" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="high-contrast">High Contrast</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch id="high-contrast" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-comments">Comments on your models</Label>
                      <Switch id="email-comments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-shares">When someone shares a model with you</Label>
                      <Switch id="email-shares" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-updates">Product updates and announcements</Label>
                      <Switch id="email-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-tips">Tips and tutorials</Label>
                      <Switch id="email-tips" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">In-App Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-comments">Comments on your models</Label>
                      <Switch id="app-comments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-shares">When someone shares a model with you</Label>
                      <Switch id="app-shares" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-mentions">When you're mentioned</Label>
                      <Switch id="app-mentions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-updates">Product updates and announcements</Label>
                      <Switch id="app-updates" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="notification-frequency">Notification Frequency</Label>
                  <Select defaultValue="realtime">
                    <SelectTrigger id="notification-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="hourly">Hourly Digest</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Digest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="display" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Display Settings</CardTitle>
                <CardDescription>Customize how models and the workspace are displayed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Default View</Label>
                  <RadioGroup defaultValue="isometric" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="isometric" id="isometric" />
                      <Label htmlFor="isometric" className="cursor-pointer">
                        Isometric
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="top" id="top" />
                      <Label htmlFor="top" className="cursor-pointer">
                        Top
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="front" id="front" />
                      <Label htmlFor="front" className="cursor-pointer">
                        Front
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="side" id="side" />
                      <Label htmlFor="side" className="cursor-pointer">
                        Side
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Grid Display</Label>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-grid">Show Grid</Label>
                    <Switch id="show-grid" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label>Grid Size</Label>
                    <Slider defaultValue={[10]} max={50} min={5} step={5} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Small</span>
                      <span>Medium</span>
                      <span>Large</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Model Display Quality</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Better Performance)</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High (Better Quality)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="shadows">Show Shadows</Label>
                      <p className="text-sm text-muted-foreground">Enable shadows for better depth perception</p>
                    </div>
                    <Switch id="shadows" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="wireframe">Show Wireframe</Label>
                      <p className="text-sm text-muted-foreground">Display model wireframe overlay</p>
                    </div>
                    <Switch id="wireframe" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="measurements">Show Measurements</Label>
                      <p className="text-sm text-muted-foreground">Display dimensions on the model</p>
                    </div>
                    <Switch id="measurements" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Display Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                    <Switch id="two-factor" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sessions</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your active sessions and sign out from other devices.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">Windows 11 • Chrome • New York, USA</p>
                      </div>
                      <Badge>Active Now</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <div>
                        <p className="font-medium">Mobile Device</p>
                        <p className="text-sm text-muted-foreground">iOS 16 • Safari • Last active 2 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Sign Out
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">Sign Out of All Devices</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account Deletion</h3>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all associated data.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Current Plan</h3>
                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-lg">Professional Plan</p>
                        <p className="text-sm text-muted-foreground">$19.99/month • Renews on June 15, 2023</p>
                      </div>
                      <Badge className="bg-primary">Current</Badge>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm">Plan Features:</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> Unlimited projects
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> Advanced AI modeling
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> 50GB storage
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> Team collaboration
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline">Change Plan</Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Methods</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                  </div>
                  <Button variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <p className="font-medium">May 15, 2023</p>
                        <p className="text-sm text-muted-foreground">Professional Plan • $19.99</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Invoice
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <p className="font-medium">April 15, 2023</p>
                        <p className="text-sm text-muted-foreground">Professional Plan • $19.99</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Invoice
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <p className="font-medium">March 15, 2023</p>
                        <p className="text-sm text-muted-foreground">Professional Plan • $19.99</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">View All Invoices</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storage" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Storage Management</CardTitle>
                <CardDescription>Manage your storage usage and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Storage Usage</h3>
                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">12.4 GB of 50 GB used</p>
                      <p className="text-sm text-muted-foreground">24.8% used</p>
                    </div>
                    <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "24.8%" }} />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <p className="font-medium">8.2 GB</p>
                        <p className="text-muted-foreground">Models</p>
                      </div>
                      <div>
                        <p className="font-medium">3.1 GB</p>
                        <p className="text-muted-foreground">Exports</p>
                      </div>
                      <div>
                        <p className="font-medium">1.1 GB</p>
                        <p className="text-muted-foreground">Other</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Upgrade Storage</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Storage Settings</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-backup">Automatic Backups</Label>
                        <p className="text-sm text-muted-foreground">Automatically backup your models daily</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="version-history">Version History</Label>
                        <p className="text-sm text-muted-foreground">Keep history of model versions</p>
                      </div>
                      <Switch id="version-history" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retention-period">Version Retention Period</Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="retention-period">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export All Data
                  </Button>
                  <Button variant="outline" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Cached Data
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Storage Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>Configure advanced application settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Performance</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="hardware-acceleration">Hardware Acceleration</Label>
                        <p className="text-sm text-muted-foreground">Use GPU for better performance (recommended)</p>
                      </div>
                      <Switch id="hardware-acceleration" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="background-processing">Background Processing</Label>
                        <p className="text-sm text-muted-foreground">Allow processing when app is in background</p>
                      </div>
                      <Switch id="background-processing" defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">AI Settings</h3>
                  <div className="space-y-2">
                    <Label>Default AI Model</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue placeholder="Select AI model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (Balanced)</SelectItem>
                        <SelectItem value="performance">Performance (Faster)</SelectItem>
                        <SelectItem value="quality">Quality (More Detailed)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Default Creativity Level</Label>
                    <Slider defaultValue={[50]} max={100} min={0} step={10} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Precise</span>
                      <span>Balanced</span>
                      <span>Creative</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Developer Options</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="debug-mode">Debug Mode</Label>
                        <p className="text-sm text-muted-foreground">Show additional debugging information</p>
                      </div>
                      <Switch id="debug-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="experimental">Experimental Features</Label>
                        <p className="text-sm text-muted-foreground">Enable experimental features (may be unstable)</p>
                      </div>
                      <Switch id="experimental" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex">
                      <Input id="api-key" type="password" value="••••••••••••••••" className="rounded-r-none" />
                      <Button variant="outline" className="rounded-l-none">
                        Show
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Used for API access and integrations</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Reset Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Reset the application to its default settings. This will not affect your models or account.
                  </p>
                  <Button variant="destructive">Reset to Default Settings</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Advanced Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </div>
    </div>
  )
}
