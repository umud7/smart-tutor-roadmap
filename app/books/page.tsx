"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Brain,
  ArrowLeft,
  Search,
  BookOpen,
  Download,
  Eye,
  Star,
  Calendar,
  User,
  Building,
  FileText,
  Heart,
  MessageCircle,
  Send,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import Link from "next/link"

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedPublisher, setSelectedPublisher] = useState("all")

  const books = [
    // 1-ci sinif
    {
      id: 1,
      title: "Azərbaycan dili",
      subtitle: "1-ci sinif dərsliyi",
      grade: "1",
      subject: "Azərbaycan dili",
      author: "Məhərrəm Qasımov, Gülnar Aslanova",
      publisher: "Şərq-Qərb",
      year: 2023,
      pages: 128,
      isbn: "978-9952-34-567-8",
      description:
        "1-ci sinif şagirdləri üçün Azərbaycan dili dərsliyi. Əlifba öyrənmə, oxu və yazı bacarıqlarının inkişafı.",
      difficulty: "Asan",
      rating: 4.8,
      reviews: 245,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/azerbaijani-1.pdf",
      features: ["İnteraktiv tapşırıqlar", "Rəngli illüstrasiyalar", "Audio dəstək", "Oyun elementləri"],
      topics: ["Əlifba", "Səslər", "Hərflər", "Sadə sözlər", "Cümlə quruluşu"],
      userReviews: [
        {
          id: 1,
          user: "Əli Məmmədov",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-12",
          comment: "Çox yaxşı kitabdır! Uşağım çox sevir və asanlıqla öyrənir.",
          likes: 8,
          dislikes: 0,
        },
        {
          id: 2,
          user: "Günel Həsənova",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-10",
          comment: "Kitab yaxşıdır, amma bəzi hissələr bir az çətindir 1-ci sinif üçün.",
          likes: 5,
          dislikes: 1,
        },
        {
          id: 3,
          user: "Rəşad Quliyev",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-08",
          comment: "Əla kitab! Rəngli şəkillər və oyunlar uşaqları çox maraqlandırır.",
          likes: 12,
          dislikes: 0,
        },
      ],
    },
    {
      id: 2,
      title: "Riyaziyyat",
      subtitle: "1-ci sinif dərsliyi",
      grade: "1",
      subject: "Riyaziyyat",
      author: "Rəna Məmmədova, Aygün Həsənova",
      publisher: "Təhsil",
      year: 2023,
      pages: 112,
      isbn: "978-9952-34-568-5",
      description: "1-ci sinif şagirdləri üçün riyaziyyat dərsliyi. Ədədlər, hesablama və həndəsi fiqurlar.",
      difficulty: "Asan",
      rating: 4.7,
      reviews: 198,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/math-1.pdf",
      features: ["Vizual öyrənmə", "Praktik tapşırıqlar", "Oyun metodları", "Addım-addım izahat"],
      topics: ["1-10 ədədləri", "Toplama", "Çıxma", "Həndəsi fiqurlar", "Ölçmə"],
      userReviews: [
        {
          id: 1,
          user: "Leyla Əhmədova",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-14",
          comment: "Riyaziyyat kitabı çox maraqlıdır. Uşaqlar oyun kimi öyrənirlər.",
          likes: 10,
          dislikes: 0,
        },
        {
          id: 2,
          user: "Vüsal İsmayılov",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-11",
          comment: "Yaxşı kitabdır, amma daha çox nümunə ola bilərdi.",
          likes: 6,
          dislikes: 2,
        },
      ],
    },
    {
      id: 3,
      title: "Həyat bilgisi",
      subtitle: "1-ci sinif dərsliyi",
      grade: "1",
      subject: "Həyat bilgisi",
      author: "Sevil Əliyeva, Könül Rəhimova",
      publisher: "Şərq-Qərb",
      year: 2023,
      pages: 96,
      isbn: "978-9952-34-569-2",
      description: "Uşaqların ətraf aləmlə tanışlığı, təhlükəsizlik qaydaları və sosial bacarıqlar.",
      difficulty: "Asan",
      rating: 4.9,
      reviews: 167,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/life-skills-1.pdf",
      features: ["Real həyat nümunələri", "Təhlükəsizlik qaydaları", "Sosial bacarıqlar", "Ailə dəyərləri"],
      topics: ["Ailə", "Məktəb", "Təhlükəsizlik", "Sağlamlıq", "Ətraf mühit"],
      userReviews: [
        {
          id: 1,
          user: "Aynur Rəhimova",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-13",
          comment: "Həyat bilgisi kitabı çox faydalıdır. Uşaqlar çox şey öyrənirlər.",
          likes: 15,
          dislikes: 0,
        },
      ],
    },

    // 5-ci sinif
    {
      id: 4,
      title: "Azərbaycan dili",
      subtitle: "5-ci sinif dərsliyi",
      grade: "5",
      subject: "Azərbaycan dili",
      author: "Nizami Cəfərov, Məleykə Abbaszadə",
      publisher: "Təhsil",
      year: 2023,
      pages: 184,
      isbn: "978-9952-34-570-8",
      description: "5-ci sinif şagirdləri üçün Azərbaycan dili dərsliyi. Qrammatika, üslubiyyat və mətn təhlili.",
      difficulty: "Orta",
      rating: 4.6,
      reviews: 312,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/azerbaijani-5.pdf",
      features: ["Qrammatika qaydaları", "Mətn təhlili", "Yaradıcı yazı", "Lüğət işi"],
      topics: ["Nitq hissələri", "Cümlə üzvləri", "İmla qaydaları", "Mətn növləri", "Üslub"],
      userReviews: [
        {
          id: 1,
          user: "Nigar Məmmədova",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-09",
          comment: "5-ci sinif üçün çox yaxşı kitabdır. Qrammatika qaydaları aydın izah edilib.",
          likes: 18,
          dislikes: 1,
        },
        {
          id: 2,
          user: "Elvin Həsənov",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-07",
          comment: "Kitab yaxşıdır, amma bəzi tapşırıqlar çox çətindir.",
          likes: 9,
          dislikes: 3,
        },
      ],
    },
    {
      id: 5,
      title: "Riyaziyyat",
      subtitle: "5-ci sinif dərsliyi",
      grade: "5",
      subject: "Riyaziyyat",
      author: "Ləman Vəliyeva, Rəşad Məmmədov",
      publisher: "Şərq-Qərb",
      year: 2023,
      pages: 256,
      isbn: "978-9952-34-571-5",
      description: "5-ci sinif şagirdləri üçün riyaziyyat dərsliyi. Kəsrlər, onluq kəsrlər və həndəsə.",
      difficulty: "Orta",
      rating: 4.5,
      reviews: 289,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/math-5.pdf",
      features: ["Addım-addım həllər", "Praktik məsələlər", "Həndəsi konstruksiyalar", "Yoxlama testləri"],
      topics: ["Kəsrlər", "Onluq kəsrlər", "Faizlər", "Həndəsə", "Tənliklər"],
      userReviews: [
        {
          id: 1,
          user: "Səbinə Quliyeva",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-06",
          comment: "Riyaziyyat kitabı yaxşıdır, amma kəsrlər mövzusu çox çətindir.",
          likes: 11,
          dislikes: 4,
        },
      ],
    },
    {
      id: 6,
      title: "İngilis dili",
      subtitle: "5-ci sinif dərsliyi",
      grade: "5",
      subject: "İngilis dili",
      author: "Sarah Johnson, Aynur Məmmədova",
      publisher: "Oxford-Bakı",
      year: 2023,
      pages: 168,
      isbn: "978-9952-34-572-2",
      description: "5-ci sinif şagirdləri üçün İngilis dili dərsliyi. Əsas qrammatika və leksika.",
      difficulty: "Orta",
      rating: 4.7,
      reviews: 234,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/english-5.pdf",
      features: ["Audio materiallar", "İnteraktiv tapşırıqlar", "Mədəniyyət məlumatları", "Oyunlar"],
      topics: ["Present Simple", "Past Simple", "Vocabulary", "Reading", "Speaking"],
      userReviews: [
        {
          id: 1,
          user: "Kamran Əliyev",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-05",
          comment: "İngilis dili kitabı əladır! Audio materiallar çox kömək edir.",
          likes: 20,
          dislikes: 0,
        },
      ],
    },

    // 9-cu sinif
    {
      id: 7,
      title: "Fizika",
      subtitle: "9-cu sinif dərsliyi",
      grade: "9",
      subject: "Fizika",
      author: "Ədalət Məmmədov, Rəna İsmayılova",
      publisher: "Elm və Təhsil",
      year: 2023,
      pages: 312,
      isbn: "978-9952-34-573-9",
      description: "9-cu sinif şagirdləri üçün fizika dərsliyi. Mexanika, istilik və elektrik.",
      difficulty: "Çətin",
      rating: 4.4,
      reviews: 156,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/physics-9.pdf",
      features: ["Laboratoriya işləri", "Praktik təcrübələr", "Düsturlar toplusu", "Real həyat nümunələri"],
      topics: ["Mexanika", "İstilik", "Elektrik", "Maqnetizm", "Dalğalar"],
      userReviews: [
        {
          id: 1,
          user: "Tural Həsənov",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-04",
          comment: "Fizika kitabı çox maraqlıdır, amma çox çətindir.",
          likes: 7,
          dislikes: 2,
        },
      ],
    },
    {
      id: 8,
      title: "Kimya",
      subtitle: "9-cu sinif dərsliyi",
      grade: "9",
      subject: "Kimya",
      author: "Gülnar Həsənova, Vüsal Quliyev",
      publisher: "Elm və Təhsil",
      year: 2023,
      pages: 284,
      isbn: "978-9952-34-574-6",
      description: "9-cu sinif şagirdləri üçün kimya dərsliyi. Atom quruluşu, kimyəvi reaksiyalar.",
      difficulty: "Çətin",
      rating: 4.3,
      reviews: 142,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/chemistry-9.pdf",
      features: ["Təcrübə təsvirləri", "Molekul modelleri", "Reaksiya sxemləri", "Təhlükəsizlik qaydaları"],
      topics: ["Atom quruluşu", "Kimyəvi bağlar", "Reaksiyalar", "Məhlullar", "Turşular və əsaslar"],
      userReviews: [
        {
          id: 1,
          user: "Aysel Məmmədova",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-03",
          comment: "Kimya kitabı yaxşıdır, təcrübələr maraqlıdır.",
          likes: 8,
          dislikes: 1,
        },
      ],
    },

    // 11-ci sinif
    {
      id: 9,
      title: "Riyaziyyat",
      subtitle: "11-ci sinif dərsliyi",
      grade: "11",
      subject: "Riyaziyyat",
      author: "Akif Həziyev, Məleykə Sultanova",
      publisher: "Təhsil",
      year: 2023,
      pages: 384,
      isbn: "978-9952-34-575-3",
      description: "11-ci sinif şagirdləri üçün riyaziyyat dərsliyi. Diferensial və inteqral hesab.",
      difficulty: "Çətin",
      rating: 4.2,
      reviews: 98,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/math-11.pdf",
      features: ["Qrafiklər və diaqramlar", "Mərhələli həllər", "Abituriyent hazırlığı", "Praktik tətbiqlər"],
      topics: ["Diferensial hesab", "İnteqral hesab", "Funksiyalar", "Həndəsə", "Ehtimallar"],
      userReviews: [
        {
          id: 1,
          user: "Rəvan Əliyev",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2024-01-02",
          comment: "11-ci sinif riyaziyyatı çox çətindir, amma yaxşı izah edilib.",
          likes: 5,
          dislikes: 3,
        },
      ],
    },
    {
      id: 10,
      title: "Ədəbiyyat",
      subtitle: "11-ci sinif dərsliyi",
      grade: "11",
      subject: "Ədəbiyyat",
      author: "Yaşar Qarayev, Səadət Əliyeva",
      publisher: "Şərq-Qərb",
      year: 2023,
      pages: 456,
      isbn: "978-9952-34-576-0",
      description: "11-ci sinif şagirdləri üçün Azərbaycan və dünya ədəbiyyatı dərsliyi.",
      difficulty: "Orta",
      rating: 4.6,
      reviews: 187,
      cover: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/books/pdf/literature-11.pdf",
      features: ["Əsər təhlilləri", "Müəllif bioqrafiyaları", "Ədəbi cərəyanlar", "Yaradıcı tapşırıqlar"],
      topics: ["XX əsr ədəbiyyatı", "Müasir ədəbiyyat", "Dünya ədəbiyyatı", "Ədəbi təhlil", "Yaradıcılıq"],
      userReviews: [
        {
          id: 1,
          user: "Zeynəb Həsənova",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2024-01-01",
          comment: "Ədəbiyyat kitabı çox gözəldir! Əsər təhlilləri əladır.",
          likes: 14,
          dislikes: 0,
        },
      ],
    },
  ]

  const grades = [
    { value: "all", label: "Bütün siniflər" },
    { value: "1", label: "1-ci sinif" },
    { value: "2", label: "2-ci sinif" },
    { value: "3", label: "3-cü sinif" },
    { value: "4", label: "4-cü sinif" },
    { value: "5", label: "5-ci sinif" },
    { value: "6", label: "6-cı sinif" },
    { value: "7", label: "7-ci sinif" },
    { value: "8", label: "8-ci sinif" },
    { value: "9", label: "9-cu sinif" },
    { value: "10", label: "10-cu sinif" },
    { value: "11", label: "11-ci sinif" },
  ]

  const subjects = [
    { value: "all", label: "Bütün fənlər" },
    { value: "Azərbaycan dili", label: "Azərbaycan dili" },
    { value: "Ədəbiyyat", label: "Ədəbiyyat" },
    { value: "Riyaziyyat", label: "Riyaziyyat" },
    { value: "İngilis dili", label: "İngilis dili" },
    { value: "Fizika", label: "Fizika" },
    { value: "Kimya", label: "Kimya" },
    { value: "Biologiya", label: "Biologiya" },
    { value: "Tarix", label: "Tarix" },
    { value: "Coğrafiya", label: "Coğrafiya" },
    { value: "Həyat bilgisi", label: "Həyat bilgisi" },
  ]

  const publishers = [
    { value: "all", label: "Bütün nəşriyyatlar" },
    { value: "Şərq-Qərb", label: "Şərq-Qərb" },
    { value: "Təhsil", label: "Təhsil" },
    { value: "Elm və Təhsil", label: "Elm və Təhsil" },
    { value: "Oxford-Bakı", label: "Oxford-Bakı" },
  ]

  const filterBooks = () => {
    let filtered = books

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.subject.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedGrade !== "all") {
      filtered = filtered.filter((book) => book.grade === selectedGrade)
    }

    if (selectedSubject !== "all") {
      filtered = filtered.filter((book) => book.subject === selectedSubject)
    }

    if (selectedPublisher !== "all") {
      filtered = filtered.filter((book) => book.publisher === selectedPublisher)
    }

    return filtered
  }

  const filteredBooks = filterBooks()

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

  const getSubjectIcon = (subject: string) => {
    const icons: Record<string, string> = {
      "Azərbaycan dili": "🇦🇿",
      Ədəbiyyat: "📖",
      Riyaziyyat: "📊",
      "İngilis dili": "🇬🇧",
      Fizika: "⚛️",
      Kimya: "🧪",
      Biologiya: "🧬",
      Tarix: "📚",
      Coğrafiya: "🌍",
      "Həyat bilgisi": "🌱",
    }
    return icons[subject] || "📚"
  }

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
          <Badge className="mb-4 bg-blue-100 text-blue-800">Kitablar</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rəqəmsal
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Kitabxana
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            1-ci sinifdən 11-ci sinifə qədər bütün fənlər üzrə dərslikləri online oxuyun və PDF formatında yükləyin.
            Azərbaycan təhsil sisteminin bütün kitabları bir yerdə!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{books.length}</div>
              <div className="text-gray-600">Kitab</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">11</div>
              <div className="text-gray-600">Sinif Səviyyəsi</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Fənn</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">PDF</div>
              <div className="text-gray-600">Format</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Axtarış və Filtrlər</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Kitab adı, müəllif və ya fənn ilə axtarın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Sinif</label>
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade.value} value={grade.value}>
                        {grade.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Fənn</label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Nəşriyyat</label>
                <Select value={selectedPublisher} onValueChange={setSelectedPublisher}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {publishers.map((publisher) => (
                      <SelectItem key={publisher.value} value={publisher.value}>
                        {publisher.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <Badge variant="secondary">{filteredBooks.length} kitab tapıldı</Badge>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedGrade("all")
              setSelectedSubject("all")
              setSelectedPublisher("all")
            }}
          >
            Filtrləri Təmizlə
          </Button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Dialog key={book.id}>
              <DialogTrigger asChild>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="p-4">
                    <div className="relative">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={getDifficultyColor(book.difficulty)}>{book.difficulty}</Badge>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary">{book.grade}-ci sinif</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{getSubjectIcon(book.subject)}</span>
                        <Badge variant="outline" className="text-xs">
                          {book.subject}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                      <CardDescription className="text-sm">{book.subtitle}</CardDescription>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-3 w-3" />
                        <span className="truncate">{book.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{book.rating}</span>
                          <span className="text-xs text-gray-500">({book.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <FileText className="h-3 w-3" />
                          <span>{book.pages} səh</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{book.title}</DialogTitle>
                  <DialogDescription>{book.subtitle}</DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Book Cover and Actions */}
                  <div className="space-y-4">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />

                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <Link href={`/books/reader/${book.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          Online Oxu
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={book.pdfUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          PDF Yüklə
                        </a>
                      </Button>
                      <Button variant="ghost" className="w-full">
                        <Heart className="h-4 w-4 mr-2" />
                        Sevimlilərə Əlavə Et
                      </Button>
                    </div>

                    {/* Rating */}
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.floor(book.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-lg font-semibold">{book.rating}/5</div>
                      <div className="text-sm text-gray-600">{book.reviews} rəy</div>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Təsvir</h3>
                      <p className="text-gray-600 leading-relaxed">{book.description}</p>
                    </div>

                    {/* Book Info */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Kitab Məlumatları</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Müəllif:</span>
                          <span className="font-medium">{book.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Nəşriyyat:</span>
                          <span className="font-medium">{book.publisher}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">İl:</span>
                          <span className="font-medium">{book.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Səhifə:</span>
                          <span className="font-medium">{book.pages}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">ISBN:</span>
                          <span className="font-medium">{book.isbn}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getDifficultyColor(book.difficulty)}>{book.difficulty}</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Xüsusiyyətlər</h3>
                      <div className="flex flex-wrap gap-2">
                        {book.features.map((feature, index) => (
                          <Badge key={index} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Əhatə Olunan Mövzular</h3>
                      <div className="flex flex-wrap gap-2">
                        {book.topics.map((topic, index) => (
                          <Badge key={index} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span>Kitab Rəyləri</span>
                      </h3>

                      {/* Review Form */}
                      <Card className="border border-blue-200 bg-blue-50 mb-6">
                        <CardContent className="p-4 space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Qiymətləndirmə</label>
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="h-5 w-5 text-yellow-500 fill-current cursor-pointer hover:scale-110 transition-transform"
                                />
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Rəyiniz</label>
                            <Textarea placeholder="Bu kitab haqqında fikirlərinizi yazın..." className="min-h-[80px]" />
                          </div>
                          <Button size="sm">
                            <Send className="h-4 w-4 mr-2" />
                            Rəy Göndər
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Reviews List */}
                      <div className="space-y-4 max-h-60 overflow-y-auto">
                        {(book.userReviews || []).map((review) => (
                          <div key={review.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={review.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-medium text-sm">{review.user}</h5>
                                <div className="flex items-center space-x-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-3 w-3 ${
                                        star <= review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                              <div className="flex items-center space-x-3 text-xs text-gray-500">
                                <span>{review.date}</span>
                                <button className="flex items-center space-x-1 hover:text-green-600">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span>{review.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-red-600">
                                  <ThumbsDown className="h-3 w-3" />
                                  <span>{review.dislikes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Heç bir kitab tapılmadı</h3>
            <p className="text-gray-600 mb-4">Axtarış kriteriyalarınızı dəyişdirməyi cəhd edin</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedGrade("all")
                setSelectedSubject("all")
                setSelectedPublisher("all")
              }}
            >
              Bütün kitabları göstər
            </Button>
          </div>
        )}

        {/* Popular Books Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ən Populyar Kitablar</CardTitle>
              <CardDescription className="text-center">Ən çox oxunan və yüklənən kitablar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {books
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map((book, index) => (
                    <Card key={book.id} className="border hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-2">{getSubjectIcon(book.subject)}</div>
                        <CardTitle className="text-lg">{book.title}</CardTitle>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{book.rating}</span>
                          <span>({book.reviews} rəy)</span>
                        </div>
                        {index === 0 && <Badge className="bg-yellow-100 text-yellow-800">🏆 #1 Populyar</Badge>}
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
