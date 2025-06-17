"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, ArrowLeft, Search, BookOpen, Users, Target, Filter } from "lucide-react"
import Link from "next/link"

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const subjects = [
    {
      id: "azerbaijani",
      name: "Azərbaycan dili",
      icon: "🇦🇿",
      level: "1-11 sinif",
      category: "dil",
      color: "bg-red-500",
      description: "Ana dilimizi düzgün və gözəl danışmaq, yazmaq və oxumaq bacarıqları",
      students: 8500,
      lessons: 120,
      difficulty: "Orta",
    },
    {
      id: "literature",
      name: "Ədəbiyyat",
      icon: "📖",
      level: "5-11 sinif",
      category: "dil",
      color: "bg-pink-500",
      description: "Azərbaycan və dünya ədəbiyyatı ilə tanışlıq",
      students: 6200,
      lessons: 85,
      difficulty: "Orta",
    },
    {
      id: "math",
      name: "Riyaziyyat",
      icon: "📊",
      level: "1-11 sinif",
      category: "dəqiq",
      color: "bg-blue-500",
      description: "Riyazi düşüncə və problem həlli bacarıqları",
      students: 9200,
      lessons: 150,
      difficulty: "Çətin",
    },
    {
      id: "english",
      name: "İngilis dili",
      icon: "🇬🇧",
      level: "2-11 sinif",
      category: "dil",
      color: "bg-green-500",
      description: "Beynəlxalq ünsiyyət dili olan İngilis dili",
      students: 7800,
      lessons: 110,
      difficulty: "Orta",
    },
    {
      id: "russian",
      name: "Rus dili",
      icon: "🇷🇺",
      level: "2-11 sinif",
      category: "dil",
      color: "bg-blue-600",
      description: "Rus dili və ədəbiyyatı",
      students: 4500,
      lessons: 95,
      difficulty: "Orta",
    },
    {
      id: "german",
      name: "Alman dili",
      icon: "🇩🇪",
      level: "5-11 sinif",
      category: "dil",
      color: "bg-yellow-600",
      description: "Alman dili və mədəniyyəti",
      students: 2100,
      lessons: 80,
      difficulty: "Çətin",
    },
    {
      id: "french",
      name: "Fransız dili",
      icon: "🇫🇷",
      level: "5-11 sinif",
      category: "dil",
      color: "bg-blue-700",
      description: "Fransız dili və mədəniyyəti",
      students: 1800,
      lessons: 75,
      difficulty: "Çətin",
    },
    {
      id: "history",
      name: "Tarix",
      icon: "📚",
      level: "5-11 sinif",
      category: "ictimai",
      color: "bg-amber-600",
      description: "Azərbaycan və dünya tarixi",
      students: 5600,
      lessons: 90,
      difficulty: "Orta",
    },
    {
      id: "geography",
      name: "Coğrafiya",
      icon: "🌍",
      level: "6-11 sinif",
      category: "ictimai",
      color: "bg-emerald-500",
      description: "Yer kürəsi və təbiət hadisələri",
      students: 4800,
      lessons: 85,
      difficulty: "Orta",
    },
    {
      id: "physics",
      name: "Fizika",
      icon: "⚛️",
      level: "7-11 sinif",
      category: "təbiət",
      color: "bg-purple-500",
      description: "Təbiət qanunları və fiziki proseslər",
      students: 3900,
      lessons: 100,
      difficulty: "Çətin",
    },
    {
      id: "chemistry",
      name: "Kimya",
      icon: "🧪",
      level: "8-11 sinif",
      category: "təbiət",
      color: "bg-orange-500",
      description: "Maddələrin tərkibi və xassələri",
      students: 3200,
      lessons: 95,
      difficulty: "Çətin",
    },
    {
      id: "biology",
      name: "Biologiya",
      icon: "🧬",
      level: "6-11 sinif",
      category: "təbiət",
      color: "bg-teal-500",
      description: "Canlı orqanizmlər və həyat prosesləri",
      students: 4100,
      lessons: 105,
      difficulty: "Orta",
    },
    {
      id: "informatics",
      name: "İnformatika",
      icon: "💻",
      level: "5-11 sinif",
      category: "texniki",
      color: "bg-slate-600",
      description: "Kompüter texnologiyaları və proqramlaşdırma",
      students: 5200,
      lessons: 120,
      difficulty: "Çətin",
    },
    {
      id: "life-skills",
      name: "Həyat bilgisi",
      icon: "🌱",
      level: "1-4 sinif",
      category: "ümumi",
      color: "bg-lime-500",
      description: "Gündəlik həyat bacarıqları və sosial bilik",
      students: 3800,
      lessons: 60,
      difficulty: "Asan",
    },
    {
      id: "nature-science",
      name: "Təbiət bilgisi",
      icon: "🌿",
      level: "3-5 sinif",
      category: "təbiət",
      color: "bg-green-600",
      description: "Təbiət və ətraf mühit haqqında əsas biliklər",
      students: 2900,
      lessons: 70,
      difficulty: "Asan",
    },
    {
      id: "art",
      name: "Bədii yaradıcılıq",
      icon: "🎨",
      level: "1-8 sinif",
      category: "yaradıcılıq",
      color: "bg-violet-500",
      description: "Rəsm, əl işləri və yaradıcı fəaliyyət",
      students: 6500,
      lessons: 80,
      difficulty: "Asan",
    },
    {
      id: "music",
      name: "Musiqi",
      icon: "🎵",
      level: "1-8 sinif",
      category: "yaradıcılıq",
      color: "bg-rose-500",
      description: "Musiqi nəzəriyyəsi və praktik bacarıqlar",
      students: 4700,
      lessons: 75,
      difficulty: "Asan",
    },
    {
      id: "physical-education",
      name: "Bədən tərbiyəsi",
      icon: "⚽",
      level: "1-11 sinif",
      category: "fiziki",
      color: "bg-cyan-500",
      description: "Fiziki inkişaf və idman bacarıqları",
      students: 8900,
      lessons: 90,
      difficulty: "Asan",
    },
    {
      id: "labor-education",
      name: "Əmək tərbiyəsi",
      icon: "🔨",
      level: "5-8 sinif",
      category: "texniki",
      color: "bg-stone-600",
      description: "Praktik bacarıqlar və əmək vərdişləri",
      students: 3600,
      lessons: 65,
      difficulty: "Orta",
    },
    {
      id: "religious-education",
      name: "Din tərbiyəsi",
      icon: "☪️",
      level: "1-11 sinif",
      category: "mənəvi",
      color: "bg-emerald-600",
      description: "Dini və əxlaqi tərbiyə",
      students: 7200,
      lessons: 85,
      difficulty: "Asan",
    },
  ]

  const categories = [
    { value: "all", label: "Bütün kateqoriyalar", count: subjects.length },
    { value: "dil", label: "Dil fənləri", count: subjects.filter((s) => s.category === "dil").length },
    { value: "dəqiq", label: "Dəqiq elmlər", count: subjects.filter((s) => s.category === "dəqiq").length },
    { value: "təbiət", label: "Təbiət elmləri", count: subjects.filter((s) => s.category === "təbiət").length },
    { value: "ictimai", label: "İctimai elmlər", count: subjects.filter((s) => s.category === "ictimai").length },
    { value: "texniki", label: "Texniki fənlər", count: subjects.filter((s) => s.category === "texniki").length },
    { value: "yaradıcılıq", label: "Yaradıcılıq", count: subjects.filter((s) => s.category === "yaradıcılıq").length },
    { value: "fiziki", label: "Fiziki tərbiyə", count: subjects.filter((s) => s.category === "fiziki").length },
    { value: "mənəvi", label: "Mənəvi tərbiyə", count: subjects.filter((s) => s.category === "mənəvi").length },
    { value: "ümumi", label: "Ümumi fənlər", count: subjects.filter((s) => s.category === "ümumi").length },
  ]

  const grades = [
    { value: "all", label: "Bütün siniflər" },
    { value: "1-4", label: "İbtidai (1-4)" },
    { value: "5-9", label: "Orta (5-9)" },
    { value: "10-11", label: "Yuxarı (10-11)" },
  ]

  const filterSubjects = () => {
    let filtered = subjects

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (subject) =>
          subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          subject.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((subject) => subject.category === selectedCategory)
    }

    // Filter by grade
    if (selectedGrade !== "all") {
      filtered = filtered.filter((subject) => {
        const level = subject.level
        if (selectedGrade === "1-4") {
          return level.includes("1-4") || level.includes("1-") || level.includes("1-8")
        }
        if (selectedGrade === "5-9") {
          return level.includes("5-") || level.includes("6-") || level.includes("7-") || level.includes("8-")
        }
        if (selectedGrade === "10-11") {
          return level.includes("10-11") || level.includes("-11")
        }
        return true
      })
    }

    return filtered
  }

  const filteredSubjects = filterSubjects()

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

  const totalStudents = subjects.reduce((sum, subject) => sum + subject.students, 0)
  const totalLessons = subjects.reduce((sum, subject) => sum + subject.lessons, 0)

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
          <Badge className="mb-4 bg-blue-100 text-blue-800">Fənlər</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bütün
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Fənlər</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Azərbaycan təhsil sisteminin bütün fənləri üzrə AI dəstəyi ilə öyrənin. Hər fənn üçün fərdiləşdirilmiş
            öyrənmə planı və adaptiv testlər.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{subjects.length}</div>
              <div className="text-gray-600">Fənn</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalStudents.toLocaleString()}</div>
              <div className="text-gray-600">Aktiv Şagird</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">{totalLessons}</div>
              <div className="text-gray-600">Video Dərs</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Dəstək</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Axtarış və Filtrlər</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Fənn adı və ya açıqlama ilə axtarın..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Grade Filter */}
              <div>
                <h3 className="font-medium mb-3">Sinif səviyyəsi</h3>
                <div className="flex flex-wrap gap-2">
                  {grades.map((grade) => (
                    <Button
                      key={grade.value}
                      variant={selectedGrade === grade.value ? "default" : "outline"}
                      onClick={() => setSelectedGrade(grade.value)}
                      size="sm"
                    >
                      {grade.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories and Subjects */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
            {categories.slice(0, 10).map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="text-xs">
                {category.label.split(" ")[0]}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-6">
            {/* Results Count */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{filteredSubjects.length} fənn tapıldı</Badge>
                {searchTerm && <Badge variant="outline">"{searchTerm}" üçün nəticələr</Badge>}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedGrade("all")
                  setSelectedCategory("all")
                }}
              >
                Filtrləri Təmizlə
              </Button>
            </div>

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSubjects.map((subject) => (
                <Link key={subject.id} href={`/subject/${subject.id}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl">{subject.icon}</div>
                        <Badge className={getDifficultyColor(subject.difficulty)}>{subject.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      <CardDescription className="text-sm">{subject.description}</CardDescription>
                      <Badge variant="secondary" className="w-fit">
                        {subject.level}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3 text-gray-400" />
                            <span className="text-gray-600">{subject.students.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-3 w-3 text-gray-400" />
                            <span className="text-gray-600">{subject.lessons} dərs</span>
                          </div>
                        </div>
                        <Button className="w-full" size="sm">
                          <Target className="h-3 w-3 mr-1" />
                          Öyrənməyə Başla
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredSubjects.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Heç bir fənn tapılmadı</h3>
                <p className="text-gray-600 mb-4">Axtarış kriteriyalarınızı dəyişdirməyi cəhd edin</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedGrade("all")
                    setSelectedCategory("all")
                  }}
                >
                  Bütün fənləri göstər
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Popular Subjects */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ən Populyar Fənlər</CardTitle>
              <CardDescription className="text-center">Ən çox öyrənilən fənlər</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subjects
                  .sort((a, b) => b.students - a.students)
                  .slice(0, 3)
                  .map((subject, index) => (
                    <Link key={subject.id} href={`/subject/${subject.id}`}>
                      <Card className="border hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="text-center">
                          <div className="text-4xl mb-2">{subject.icon}</div>
                          <CardTitle className="text-lg">{subject.name}</CardTitle>
                          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <Users className="h-3 w-3" />
                            <span>{subject.students.toLocaleString()} şagird</span>
                          </div>
                          {index === 0 && <Badge className="bg-yellow-100 text-yellow-800">🏆 #1 Populyar</Badge>}
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Öyrənməyə Başlayın</h2>
              <p className="text-xl text-gray-600 mb-8">
                İstədiyiniz fənni seçin və AI müəlliminizlə birlikdə öyrənməyə başlayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/register">Pulsuz Qeydiyyat</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/chat">AI Müəllimlə Söhbət</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
