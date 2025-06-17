"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, ArrowLeft, Clock, Target, Trophy, BookOpen, Play, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ExamsPage() {
  const [selectedGrade, setSelectedGrade] = useState("")

  const grades = [
    { value: "1", label: "1-ci sinif", subjects: ["Azərbaycan dili", "Riyaziyyat", "Həyat bilgisi"] },
    { value: "2", label: "2-ci sinif", subjects: ["Azərbaycan dili", "Riyaziyyat", "Həyat bilgisi", "İngilis dili"] },
    {
      value: "3",
      label: "3-cü sinif",
      subjects: ["Azərbaycan dili", "Riyaziyyat", "Həyat bilgisi", "İngilis dili", "Təbiət bilgisi"],
    },
    {
      value: "4",
      label: "4-cü sinif",
      subjects: ["Azərbaycan dili", "Riyaziyyat", "Həyat bilgisi", "İngilis dili", "Təbiət bilgisi"],
    },
    {
      value: "5",
      label: "5-ci sinif",
      subjects: ["Azərbaycan dili", "Ədəbiyyat", "Riyaziyyat", "İngilis dili", "Tarix", "İnformatika"],
    },
    {
      value: "6",
      label: "6-cı sinif",
      subjects: ["Azərbaycan dili", "Ədəbiyyat", "Riyaziyyat", "İngilis dili", "Tarix", "Coğrafiya", "Biologiya"],
    },
    {
      value: "7",
      label: "7-ci sinif",
      subjects: [
        "Azərbaycan dili",
        "Ədəbiyyat",
        "Riyaziyyat",
        "İngilis dili",
        "Tarix",
        "Coğrafiya",
        "Biologiya",
        "Fizika",
      ],
    },
    {
      value: "8",
      label: "8-ci sinif",
      subjects: [
        "Azərbaycan dili",
        "Ədəbiyyat",
        "Riyaziyyat",
        "İngilis dili",
        "Tarix",
        "Coğrafiya",
        "Biologiya",
        "Fizika",
        "Kimya",
      ],
    },
    {
      value: "9",
      label: "9-cu sinif",
      subjects: [
        "Azərbaycan dili",
        "Ədəbiyyat",
        "Riyaziyyat",
        "İngilis dili",
        "Tarix",
        "Coğrafiya",
        "Biologiya",
        "Fizika",
        "Kimya",
      ],
    },
    {
      value: "10",
      label: "10-cu sinif",
      subjects: [
        "Azərbaycan dili",
        "Ədəbiyyat",
        "Riyaziyyat",
        "İngilis dili",
        "Tarix",
        "Coğrafiya",
        "Biologiya",
        "Fizika",
        "Kimya",
      ],
    },
    {
      value: "11",
      label: "11-ci sinif",
      subjects: [
        "Azərbaycan dili",
        "Ədəbiyyat",
        "Riyaziyyat",
        "İngilis dili",
        "Tarix",
        "Coğrafiya",
        "Biologiya",
        "Fizika",
        "Kimya",
      ],
    },
  ]

  const examTypes = [
    {
      id: "monthly",
      name: "Aylıq İmtahan",
      description: "Hər ay keçirilən qiymətləndirmə imtahanı",
      duration: "45 dəq",
      questions: 20,
      difficulty: "Orta",
      icon: "📅",
    },
    {
      id: "quarterly",
      name: "Rüblük İmtahan",
      description: "Rüb sonunda keçirilən ümumi qiymətləndirmə",
      duration: "60 dəq",
      questions: 30,
      difficulty: "Çətin",
      icon: "📊",
    },
    {
      id: "final",
      name: "İllik İmtahan",
      description: "İl sonunda keçirilən yekun imtahanı",
      duration: "90 dəq",
      questions: 40,
      difficulty: "Çətin",
      icon: "🎓",
    },
    {
      id: "practice",
      name: "Məşq İmtahanı",
      description: "Hazırlıq üçün məşq imtahanı",
      duration: "30 dəq",
      questions: 15,
      difficulty: "Asan",
      icon: "📝",
    },
  ]

  const monthlyResults = [
    {
      id: 1,
      subject: "Riyaziyyat",
      examType: "Aylıq",
      grade: "9",
      score: 85,
      maxScore: 100,
      gradePoint: "4",
      date: "15 Dekabr 2024",
      duration: "45 dəq",
      questionsCorrect: 17,
      questionsTotal: 20,
      rank: 12,
      classAverage: 78,
    },
    {
      id: 2,
      subject: "İngilis dili",
      examType: "Aylıq",
      grade: "9",
      score: 92,
      maxScore: 100,
      gradePoint: "5",
      date: "12 Dekabr 2024",
      duration: "45 dəq",
      questionsCorrect: 18,
      questionsTotal: 20,
      rank: 3,
      classAverage: 82,
    },
    {
      id: 3,
      subject: "Fizika",
      examType: "Rüblük",
      grade: "9",
      score: 78,
      maxScore: 100,
      gradePoint: "4",
      date: "8 Dekabr 2024",
      duration: "60 dəq",
      questionsCorrect: 23,
      questionsTotal: 30,
      rank: 18,
      classAverage: 75,
    },
    {
      id: 4,
      subject: "Azərbaycan dili",
      examType: "Aylıq",
      grade: "9",
      score: 88,
      maxScore: 100,
      gradePoint: "4",
      date: "5 Dekabr 2024",
      duration: "45 dəq",
      questionsCorrect: 18,
      questionsTotal: 20,
      rank: 8,
      classAverage: 80,
    },
    {
      id: 5,
      subject: "Tarix",
      examType: "Aylıq",
      grade: "9",
      score: 76,
      maxScore: 100,
      gradePoint: "4",
      date: "1 Dekabr 2024",
      duration: "45 dəq",
      questionsCorrect: 15,
      questionsTotal: 20,
      rank: 15,
      classAverage: 73,
    },
    {
      id: 6,
      subject: "Biologiya",
      examType: "Məşq",
      grade: "9",
      score: 94,
      maxScore: 100,
      gradePoint: "5",
      date: "28 Noyabr 2024",
      duration: "30 dəq",
      questionsCorrect: 14,
      questionsTotal: 15,
      rank: 2,
      classAverage: 79,
    },
  ]

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "5":
        return "bg-green-100 text-green-800"
      case "4":
        return "bg-blue-100 text-blue-800"
      case "3":
        return "bg-yellow-100 text-yellow-800"
      case "2":
        return "bg-orange-100 text-orange-800"
      case "1":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPerformanceColor = (score: number, average: number) => {
    if (score > average + 10) return "text-green-600"
    if (score > average) return "text-blue-600"
    if (score > average - 10) return "text-yellow-600"
    return "text-red-600"
  }

  const recentExams = [
    { subject: "Riyaziyyat", grade: "9", score: 85, date: "2 gün əvvəl", type: "Aylıq" },
    { subject: "İngilis dili", grade: "9", score: 92, date: "1 həftə əvvəl", type: "Məşq" },
    { subject: "Fizika", grade: "9", score: 78, date: "2 həftə əvvəl", type: "Rüblük" },
  ]

  const subjectIcons: Record<string, string> = {
    "Azərbaycan dili": "🇦🇿",
    Ədəbiyyat: "📖",
    Riyaziyyat: "📊",
    "İngilis dili": "🇬🇧",
    Tarix: "📚",
    Coğrafiya: "🌍",
    Biologiya: "🧬",
    Fizika: "⚛️",
    Kimya: "🧪",
    İnformatika: "💻",
    "Həyat bilgisi": "🌱",
    "Təbiət bilgisi": "🌿",
  }

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

  const selectedGradeData = grades.find((g) => g.value === selectedGrade)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Tutor</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">İmtahanlar</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onlayn
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              İmtahanlar
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Sinif səviyyənizə uyğun imtahanlar verin və bilik səviyyənizi yoxlayın. AI dəstəyi ilə dərhal nəticə alın və
            zəif tərəflərinizi müəyyən edin.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">İmtahan Növü</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Verilmiş İmtahan</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
              <div className="text-gray-600">Ortalama Nəticə</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Mövcudluq</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Grade Selection */}
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Sinif Seçimi</span>
                </CardTitle>
                <CardDescription>İmtahan vermək üçün sinfinizi seçin</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sinfinizi seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade.value} value={grade.value}>
                        {grade.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Exam Types */}
            <Tabs defaultValue="monthly" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                {examTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id} className="text-xs">
                    {type.icon} {type.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
                <TabsTrigger value="results" className="text-xs">
                  📊 Nəticələrim
                </TabsTrigger>
              </TabsList>

              {examTypes.map((examType) => (
                <TabsContent key={examType.id} value={examType.id} className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{examType.icon}</div>
                          <div>
                            <CardTitle className="text-xl">{examType.name}</CardTitle>
                            <CardDescription>{examType.description}</CardDescription>
                          </div>
                        </div>
                        <Badge className={getDifficultyColor(examType.difficulty)}>{examType.difficulty}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <div className="font-medium">{examType.duration}</div>
                          <div className="text-sm text-gray-600">Müddət</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <div className="font-medium">{examType.questions}</div>
                          <div className="text-sm text-gray-600">Sual</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <Trophy className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                          <div className="font-medium">100</div>
                          <div className="text-sm text-gray-600">Max Bal</div>
                        </div>
                      </div>

                      {selectedGrade && selectedGradeData && (
                        <div>
                          <h3 className="font-semibold mb-4">{selectedGradeData.label} üçün mövcud fənlər:</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedGradeData.subjects.map((subject, index) => (
                              <Card key={index} className="border hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                      <div className="text-2xl">{subjectIcons[subject]}</div>
                                      <div>
                                        <div className="font-medium">{subject}</div>
                                        <div className="text-sm text-gray-600">
                                          {examType.questions} sual • {examType.duration}
                                        </div>
                                      </div>
                                    </div>
                                    <Button size="sm" asChild>
                                      <Link
                                        href={`/exam/${examType.id}-${subject.toLowerCase().replace(/\s+/g, "-")}-${selectedGrade}`}
                                      >
                                        <Play className="h-3 w-3 mr-1" />
                                        Başla
                                      </Link>
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {!selectedGrade && (
                        <div className="text-center py-8 text-gray-500">
                          <Target className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                          <p>İmtahan vermək üçün əvvəlcə sinfinizi seçin</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
              <TabsContent value="results" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Aylıq İmtahan Nəticələrim</span>
                    </CardTitle>
                    <CardDescription>Bütün imtahan nəticələriniz və performans analitikası</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {Math.round(
                            monthlyResults.reduce((sum, result) => sum + result.score, 0) / monthlyResults.length,
                          )}
                          %
                        </div>
                        <div className="text-sm text-gray-600">Ortalama Bal</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {monthlyResults.filter((r) => Number.parseFloat(r.gradePoint) >= 4).length}
                        </div>
                        <div className="text-sm text-gray-600">Yaxşı Qiymət</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{monthlyResults.length}</div>
                        <div className="text-sm text-gray-600">Ümumi İmtahan</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">
                          {Math.round(
                            (monthlyResults.reduce(
                              (sum, result) => sum + (result.score > result.classAverage ? 1 : 0),
                              0,
                            ) /
                              monthlyResults.length) *
                              100,
                          )}
                          %
                        </div>
                        <div className="text-sm text-gray-600">Sinif Ortalamasından Yuxarı</div>
                      </div>
                    </div>

                    {/* Results Table */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Detallı Nəticələr</h3>
                      <div className="overflow-x-auto">
                        <div className="space-y-3">
                          {monthlyResults.map((result) => (
                            <Card key={result.id} className="border hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                                  {/* Subject & Date */}
                                  <div className="md:col-span-2">
                                    <div className="flex items-center space-x-3">
                                      <div className="text-2xl">{subjectIcons[result.subject]}</div>
                                      <div>
                                        <div className="font-semibold">{result.subject}</div>
                                        <div className="text-sm text-gray-600">{result.date}</div>
                                        <Badge variant="outline" className="text-xs mt-1">
                                          {result.examType}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Score */}
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">{result.score}%</div>
                                    <div className="text-sm text-gray-600">
                                      {result.questionsCorrect}/{result.questionsTotal} düzgün
                                    </div>
                                  </div>

                                  {/* Grade */}
                                  <div className="text-center">
                                    <Badge className={getGradeColor(result.gradePoint)} size="lg">
                                      Qiymət: {result.gradePoint}
                                    </Badge>
                                  </div>

                                  {/* Performance vs Class */}
                                  <div className="text-center">
                                    <div
                                      className={`text-lg font-semibold ${getPerformanceColor(result.score, result.classAverage)}`}
                                    >
                                      {result.score > result.classAverage ? "+" : ""}
                                      {result.score - result.classAverage}
                                    </div>
                                    <div className="text-sm text-gray-600">Sinif ort: {result.classAverage}%</div>
                                    <div className="text-xs text-gray-500">Sıra: {result.rank}</div>
                                  </div>

                                  {/* Actions */}
                                  <div className="text-center">
                                    <Button variant="outline" size="sm">
                                      Detaylar
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Performance Chart Placeholder */}
                    <Card className="mt-8">
                      <CardHeader>
                        <CardTitle>Performans Trendi</CardTitle>
                        <CardDescription>Son 6 ayın imtahan nəticələri</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                            <p>Performans qrafiki burada göstəriləcək</p>
                            <p className="text-sm">Zaman üzrə bal dəyişikliyi</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Subject Performance */}
                    <Card className="mt-8">
                      <CardHeader>
                        <CardTitle>Fənlər üzrə Performans</CardTitle>
                        <CardDescription>Hər fənn üzrə ortalama nəticələr</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(
                            monthlyResults.reduce(
                              (acc, result) => {
                                if (!acc[result.subject]) {
                                  acc[result.subject] = { total: 0, count: 0, scores: [] }
                                }
                                acc[result.subject].total += result.score
                                acc[result.subject].count += 1
                                acc[result.subject].scores.push(result.score)
                                return acc
                              },
                              {} as Record<string, { total: number; count: number; scores: number[] }>,
                            ),
                          ).map(([subject, data]) => {
                            const average = Math.round(data.total / data.count)
                            const best = Math.max(...data.scores)
                            const worst = Math.min(...data.scores)

                            return (
                              <div
                                key={subject}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="text-2xl">{subjectIcons[subject]}</div>
                                  <div>
                                    <div className="font-medium">{subject}</div>
                                    <div className="text-sm text-gray-600">{data.count} imtahan</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-semibold text-blue-600">{average}%</div>
                                  <div className="text-sm text-gray-600">
                                    En yaxşı: {best}% | En pis: {worst}%
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Exams */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Son İmtahanlar</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentExams.map((exam, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl">{subjectIcons[exam.subject]}</div>
                      <div>
                        <div className="font-medium text-sm">{exam.subject}</div>
                        <div className="text-xs text-gray-600">
                          {exam.grade}-cu sinif • {exam.type}
                        </div>
                        <div className="text-xs text-gray-500">{exam.date}</div>
                      </div>
                    </div>
                    <Badge variant={exam.score >= 80 ? "default" : exam.score >= 60 ? "secondary" : "destructive"}>
                      {exam.score}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Exam Tips */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>İmtahan Məsləhətləri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-gray-600">İmtahandan əvvəl mövzuları təkrar edin</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-gray-600">Vaxtı düzgün bölüşdürün</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm text-gray-600">Əmin olmadığınız sualları ən sona buraxın</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-xs font-bold">4</span>
                  </div>
                  <p className="text-sm text-gray-600">Cavabları yoxlamağı unutmayın</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Help */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <span>AI Kömək</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">İmtahan hazırlığı üçün AI müəlliminizlə söhbət edin</p>
                <Button className="w-full" asChild>
                  <Link href="/chat">AI Müəllimlə Söhbət</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
