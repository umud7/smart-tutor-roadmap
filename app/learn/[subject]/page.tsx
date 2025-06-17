"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, CheckCircle, Lock, Star, Clock, Target, Award } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function LearnSubjectPage() {
  const params = useParams()
  const subject = params.subject as string

  const subjectData = {
    math: {
      name: "Riyaziyyat",
      icon: "📊",
      color: "bg-blue-500",
      description: "Riyazi düşüncə və problem həlli bacarıqlarınızı inkişaf etdirin",
    },
    english: {
      name: "İngilis dili",
      icon: "🇬🇧",
      color: "bg-green-500",
      description: "İngilis dilində danışıq və yazı bacarıqlarınızı təkmilləşdirin",
    },
    physics: {
      name: "Fizika",
      icon: "⚛️",
      color: "bg-purple-500",
      description: "Təbiət qanunlarını və fiziki prosesləri öyrənin",
    },
  }

  const currentSubject = subjectData[subject as keyof typeof subjectData] || subjectData.math

  const lessons = [
    {
      id: 1,
      title: "Kvadrat tənliklər - Giriş",
      description: "Kvadrat tənliklərin əsas anlayışları və növləri",
      duration: "15 dəq",
      difficulty: "Asan",
      completed: true,
      locked: false,
      progress: 100,
    },
    {
      id: 2,
      title: "Diskriminant və köklər",
      description: "Diskriminant düsturu və tənliyin köklərinin tapılması",
      duration: "20 dəq",
      difficulty: "Orta",
      completed: true,
      locked: false,
      progress: 100,
    },
    {
      id: 3,
      title: "Vieta düsturları",
      description: "Köklər və əmsallar arasındakı əlaqə",
      duration: "18 dəq",
      difficulty: "Orta",
      completed: false,
      locked: false,
      progress: 60,
    },
    {
      id: 4,
      title: "Kvadrat tənliklərin tətbiqi",
      description: "Real həyatda kvadrat tənliklərin istifadəsi",
      duration: "25 dəq",
      difficulty: "Çətin",
      completed: false,
      locked: false,
      progress: 0,
    },
    {
      id: 5,
      title: "Mürəkkəb məsələlər",
      description: "Çətin kvadrat tənlik məsələlərinin həlli",
      duration: "30 dəq",
      difficulty: "Çətin",
      completed: false,
      locked: true,
      progress: 0,
    },
  ]

  const achievements = [
    { name: "İlk addım", description: "İlk dərsi tamamladınız", earned: true },
    { name: "Davamlılıq", description: "5 gün ardıcıl öyrəndiniz", earned: true },
    { name: "Mükəmməl", description: "Testdə 100% nəticə əldə etdiniz", earned: false },
    { name: "Ekspert", description: "Bütün dərsleri tamamladınız", earned: false },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Asan":
        return "bg-green-100 text-green-800"
      case "Orta":
        return "bg-yellow-100 text-yellow-800"
      case "Çətin":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{currentSubject.icon}</div>
              <div>
                <h1 className="text-2xl font-bold">{currentSubject.name}</h1>
                <p className="text-gray-600">{currentSubject.description}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Target className="h-3 w-3" />
              <span>75% tamamlandı</span>
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="lessons" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lessons">Dərslər</TabsTrigger>
                <TabsTrigger value="practice">Məşq</TabsTrigger>
                <TabsTrigger value="tests">Testlər</TabsTrigger>
              </TabsList>

              <TabsContent value="lessons" className="space-y-6">
                <div className="space-y-4">
                  {lessons.map((lesson) => (
                    <Card
                      key={lesson.id}
                      className={`transition-all hover:shadow-lg ${lesson.locked ? "opacity-60" : ""}`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              {lesson.completed ? (
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                              ) : lesson.locked ? (
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                  <Lock className="h-6 w-6 text-gray-400" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Play className="h-6 w-6 text-blue-600" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg">{lesson.title}</CardTitle>
                              <CardDescription>{lesson.description}</CardDescription>
                              <div className="flex items-center space-x-4 mt-2">
                                <div className="flex items-center space-x-1 text-sm text-gray-600">
                                  <Clock className="h-3 w-3" />
                                  <span>{lesson.duration}</span>
                                </div>
                                <Badge className={getDifficultyColor(lesson.difficulty)}>{lesson.difficulty}</Badge>
                              </div>
                            </div>
                          </div>
                          <Button
                            disabled={lesson.locked}
                            variant={lesson.completed ? "outline" : "default"}
                            asChild={!lesson.locked}
                          >
                            {lesson.locked ? (
                              <span>Kilidli</span>
                            ) : (
                              <Link href={`/lesson/${lesson.id}`}>
                                {lesson.completed ? "Təkrar bax" : lesson.progress > 0 ? "Davam et" : "Başla"}
                              </Link>
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      {lesson.progress > 0 && !lesson.completed && (
                        <CardContent>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Tərəqqi</span>
                            <span className="text-sm text-gray-600">{lesson.progress}%</span>
                          </div>
                          <Progress value={lesson.progress} className="w-full" />
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="practice" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Günlük məşq</CardTitle>
                      <CardDescription>Hər gün 10 dəqiqə məşq edin</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Məşqə başla</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Zəif nöqtələr</CardTitle>
                      <CardDescription>Çətinlik çəkdiyiniz mövzular</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Təkmilləşdir
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tests" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "Kvadrat tənliklər - Ümumi test", questions: 15, time: "20 dəq" },
                    { name: "Diskriminant məsələləri", questions: 10, time: "15 dəq" },
                    { name: "Vieta düsturları testi", questions: 8, time: "12 dəq" },
                  ].map((test, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{test.name}</CardTitle>
                        <CardDescription>
                          {test.questions} sual • {test.time}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full" asChild>
                          <Link href={`/test/${index + 1}`}>Testə başla</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Ümumi tərəqqi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Tamamlanan dərslər</span>
                    <span className="text-sm font-medium">2/5</span>
                  </div>
                  <Progress value={40} className="w-full" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Ümumi tərəqqi</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-xs text-gray-600">Öyrənmə saatı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-xs text-gray-600">Tamamlanan test</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Nailiyyətlər</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.earned ? "bg-yellow-50" : "bg-gray-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.earned ? "bg-yellow-100" : "bg-gray-100"}`}
                    >
                      <Star className={`h-4 w-4 ${achievement.earned ? "text-yellow-600" : "text-gray-400"}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium text-sm ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}>
                        {achievement.name}
                      </div>
                      <div className="text-xs text-gray-600">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card>
              <CardHeader>
                <CardTitle>Öyrənmə ardıcıllığı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                  <div className="text-sm text-gray-600">Ardıcıl gün</div>
                  <div className="text-xs text-gray-500 mt-2">Möhtəşəm! Davam edin!</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
