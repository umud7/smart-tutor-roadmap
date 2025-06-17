"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, Target, TrendingUp, Clock, Award, MessageSquare, Play, Settings, Bell } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [selectedSubject, setSelectedSubject] = useState("math")

  const subjects = [
    { id: "azerbaijani", name: "Azərbaycan dili", progress: 85, icon: "🇦🇿", color: "bg-red-500" },
    { id: "literature", name: "Ədəbiyyat", progress: 70, icon: "📖", color: "bg-pink-500" },
    { id: "math", name: "Riyaziyyat", progress: 75, icon: "📊", color: "bg-blue-500" },
    { id: "english", name: "İngilis dili", progress: 60, icon: "🇬🇧", color: "bg-green-500" },
    { id: "russian", name: "Rus dili", progress: 55, icon: "🇷🇺", color: "bg-blue-600" },
    { id: "history", name: "Tarix", progress: 65, icon: "📚", color: "bg-amber-600" },
    { id: "geography", name: "Coğrafiya", progress: 50, icon: "🌍", color: "bg-emerald-500" },
    { id: "physics", name: "Fizika", progress: 45, icon: "⚛️", color: "bg-purple-500" },
    { id: "chemistry", name: "Kimya", progress: 30, icon: "🧪", color: "bg-orange-500" },
    { id: "biology", name: "Biologiya", progress: 40, icon: "🧬", color: "bg-teal-500" },
    { id: "informatics", name: "İnformatika", progress: 80, icon: "💻", color: "bg-slate-600" },
    { id: "art", name: "Bədii yaradıcılıq", progress: 90, icon: "🎨", color: "bg-violet-500" },
  ]

  const recentActivities = [
    { subject: "Riyaziyyat", activity: "Kvadrat tənliklər testi", score: 85, time: "2 saat əvvəl" },
    { subject: "İngilis dili", activity: "Grammar mövzusu", score: 92, time: "1 gün əvvəl" },
    { subject: "Fizika", activity: "Mexanika problemləri", score: 78, time: "2 gün əvvəl" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Tutor</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 ml-8">
              <Link href="/subjects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Fənlər
              </Link>
              <Link href="/books" className="text-gray-600 hover:text-blue-600 transition-colors">
                Kitablar
              </Link>
              <Link href="/exams" className="text-gray-600 hover:text-blue-600 transition-colors">
                İmtahanlar
              </Link>
              <Link href="/chat" className="text-gray-600 hover:text-blue-600 transition-colors">
                AI Müəllim
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Xoş gəlmisiniz, Aytən!</h1>
          <p className="text-gray-600">Bu gün öyrənməyə davam edək. Sizin üçün yeni tapşırıqlar hazırdır.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ümumi Tərəqqi</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">+12% bu həftə</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tamamlanan Testlər</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 bu həftə</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Öyrənmə Vaxtı</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5s</div>
              <p className="text-xs text-muted-foreground">bu həftə</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Qazanılan Nişanlar</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 yeni</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="subjects" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="subjects">Fənlər</TabsTrigger>
                <TabsTrigger value="tests">Testlər</TabsTrigger>
                <TabsTrigger value="analytics">Analitika</TabsTrigger>
              </TabsList>

              <TabsContent value="subjects" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject) => (
                    <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{subject.icon}</div>
                            <div>
                              <CardTitle className="text-lg">{subject.name}</CardTitle>
                              <CardDescription>Tərəqqi: {subject.progress}%</CardDescription>
                            </div>
                          </div>
                          <Button size="sm" asChild>
                            <Link href={`/learn/${subject.id}`}>
                              <Play className="h-4 w-4 mr-1" />
                              Davam et
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={subject.progress} className="w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tests" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mövcud Testlər</CardTitle>
                    <CardDescription>Sizin səviyyənizə uyğun adaptiv testlər</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Riyaziyyat - Kvadrat tənliklər", difficulty: "Orta", time: "15 dəq", questions: 10 },
                      { name: "İngilis dili - Present Perfect", difficulty: "Asan", time: "10 dəq", questions: 8 },
                      { name: "Fizika - Mexanika", difficulty: "Çətin", time: "20 dəq", questions: 12 },
                    ].map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{test.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{test.questions} sual</span>
                            <span>{test.time}</span>
                            <Badge
                              variant={
                                test.difficulty === "Asan"
                                  ? "default"
                                  : test.difficulty === "Orta"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {test.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/test/${index + 1}`}>Başla</Link>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performans Analitikası</CardTitle>
                    <CardDescription>Son 30 günün nəticələri</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {subjects.map((subject) => (
                        <div key={subject.id}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{subject.name}</span>
                            <span className="text-sm text-gray-600">{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="w-full" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Tutor Chat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>AI Müəllim</span>
                </CardTitle>
                <CardDescription>Suallarınızı verin, dərhal cavab alın</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/chat">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Söhbət Başla
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Son Fəaliyyətlər</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{activity.activity}</p>
                      <p className="text-xs text-gray-600">
                        {activity.subject} • {activity.time}
                      </p>
                    </div>
                    <Badge variant={activity.score >= 80 ? "default" : "secondary"}>{activity.score}%</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Today's Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Bu günün hədəfləri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm">Riyaziyyat testi tamamla</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <span className="text-sm">İngilis dili məşqi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <span className="text-sm">Fizika problemləri</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
