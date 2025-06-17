"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Play,
  BookOpen,
  Target,
  CheckCircle,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SubjectDetailPage() {
  const params = useParams()
  const subjectId = params.id as string

  const subjectData: Record<string, any> = {
    azerbaijani: {
      name: "Azərbaycan dili",
      icon: "🇦🇿",
      level: "1-11 sinif",
      color: "bg-red-500",
      description: "Ana dilimizi düzgün və gözəl danışmaq, yazmaq və oxumaq bacarıqlarını inkişaf etdirin",
      longDescription:
        "Azərbaycan dili fənni şagirdlərin ana dilinə olan sevgisini artırmaq, düzgün danışıq və yazı bacarıqlarını formalaşdırmaq məqsədi daşıyır. Bu fənn vasitəsilə şagirdlər dil qaydalarını öyrənir, lüğət ehtiyatlarını zənginləşdirir və mədəni dəyərlərimizlə tanış olurlar.",
      topics: [
        { name: "Əlifba və səslər", grade: "1-2 sinif", difficulty: "Asan" },
        { name: "Söz və cümlə", grade: "2-3 sinif", difficulty: "Asan" },
        { name: "Nitq hissələri", grade: "4-6 sinif", difficulty: "Orta" },
        { name: "Cümlə üzvləri", grade: "5-7 sinif", difficulty: "Orta" },
        { name: "Mürəkkəb cümlələr", grade: "8-9 sinif", difficulty: "Çətin" },
        { name: "Üslubiyyat", grade: "10-11 sinif", difficulty: "Çətin" },
      ],
      skills: ["Oxu bacarığı", "Yazı bacarığı", "Danışıq bacarığı", "Dinləmə bacarığı", "Dil qaydaları"],
      benefits: [
        "Ana dilinə olan sevginin artması",
        "Düzgün və gözəl danışıq bacarığı",
        "Yazı bacarıqlarının təkmilləşməsi",
        "Mədəni dəyərlərlə tanışlıq",
        "Kritik düşüncənin inkişafı",
      ],
    },
    math: {
      name: "Riyaziyyat",
      icon: "📊",
      level: "1-11 sinif",
      color: "bg-blue-500",
      description: "Riyazi düşüncə və problem həlli bacarıqlarınızı inkişaf etdirin",
      longDescription:
        "Riyaziyyat fənni şagirdlərin məntiqi düşüncəsini inkişaf etdirən, problem həlli bacarıqlarını formalaşdıran və gündəlik həyatda tətbiq edilə bilən bilikləri öyrədən əsas fənlərdən biridir.",
      topics: [
        { name: "Ədədlər və əməllər", grade: "1-4 sinif", difficulty: "Asan" },
        { name: "Kəsrlər", grade: "5-6 sinif", difficulty: "Orta" },
        { name: "Cəbr", grade: "7-9 sinif", difficulty: "Orta" },
        { name: "Həndəsə", grade: "7-11 sinif", difficulty: "Çətin" },
        { name: "Funksiyalar", grade: "9-11 sinif", difficulty: "Çətin" },
        { name: "Diferensial hesab", grade: "11 sinif", difficulty: "Çətin" },
      ],
      skills: ["Problem həlli", "Məntiqi düşüncə", "Analitik bacarıqlar", "Hesablama", "Həndəsi təsəvvür"],
      benefits: [
        "Məntiqi düşüncənin inkişafı",
        "Problem həlli bacarıqlarının artması",
        "Analitik düşüncənin formalaşması",
        "Gündəlik həyatda tətbiq imkanı",
        "Digər fənlər üçün əsas biliklər",
      ],
    },
    english: {
      name: "İngilis dili",
      icon: "🇬🇧",
      level: "2-11 sinif",
      color: "bg-green-500",
      description: "Beynəlxalq ünsiyyət dili olan İngilis dilini öyrənin",
      longDescription:
        "İngilis dili müasir dövrdə beynəlxalq ünsiyyətin əsas vasitəsidir. Bu fənni öyrənməklə şagirdlər qlobal dünyada öz yerlərini tapa və beynəlxalq imkanlardan faydalana bilərlər.",
      topics: [
        { name: "Əlifba və səslər", grade: "2-3 sinif", difficulty: "Asan" },
        { name: "Əsas söz ehtiyatı", grade: "3-5 sinif", difficulty: "Asan" },
        { name: "Grammar əsasları", grade: "5-7 sinif", difficulty: "Orta" },
        { name: "Zamanlar sistemi", grade: "7-9 sinif", difficulty: "Orta" },
        { name: "Mürəkkəb qrammatika", grade: "9-11 sinif", difficulty: "Çətin" },
        { name: "Academic English", grade: "11 sinif", difficulty: "Çətin" },
      ],
      skills: ["Speaking", "Listening", "Reading", "Writing", "Grammar", "Vocabulary"],
      benefits: [
        "Beynəlxalq ünsiyyət imkanı",
        "Karyera perspektivlərinin genişlənməsi",
        "Xarici ədəbiyyat və mədəniyyətlə tanışlıq",
        "İnternet resurslarından istifadə",
        "Beynəlxalq imtahanlara hazırlıq",
      ],
    },
    physics: {
      name: "Fizika",
      icon: "⚛️",
      level: "7-11 sinif",
      color: "bg-purple-500",
      description: "Təbiət qanunlarını və fiziki prosesləri öyrənin",
      longDescription:
        "Fizika fənni təbiətdə baş verən hadisələri izah edən, texnologiyanın əsasını təşkil edən və şagirdlərin elmi dünyagörüşünü formalaşdıran mühüm fəndir.",
      topics: [
        { name: "Mexanika", grade: "7-8 sinif", difficulty: "Orta" },
        { name: "Istilik", grade: "8 sinif", difficulty: "Orta" },
        { name: "Elektrik", grade: "9 sinif", difficulty: "Orta" },
        { name: "Optika", grade: "9-10 sinif", difficulty: "Çətin" },
        { name: "Atom fizikası", grade: "11 sinif", difficulty: "Çətin" },
        { name: "Kvant mexanikası", grade: "11 sinif", difficulty: "Çətin" },
      ],
      skills: ["Eksperiment", "Analiz", "Hesablama", "Modelləşdirmə", "Elmi düşüncə"],
      benefits: [
        "Təbiət hadisələrinin anlaşılması",
        "Texnoloji savadlılığın artması",
        "Elmi düşüncənin inkişafı",
        "Mühəndislik sahələrinə hazırlıq",
        "İnnovasiya qabiliyyətinin formalaşması",
      ],
    },
  }

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Ayşə Məmmədova",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-15",
      comment: "Bu fənn çox maraqlıdır! Müəllim çox yaxşı izah edir və mövzular anlaşıqlıdır.",
      likes: 12,
      dislikes: 1,
      helpful: true,
    },
    {
      id: 2,
      user: "Rəşad Əliyev",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2024-01-10",
      comment: "Yaxşı fənndir, amma bəzi mövzular bir az çətindir. Daha çox nümunə lazımdır.",
      likes: 8,
      dislikes: 2,
      helpful: false,
    },
    {
      id: 3,
      user: "Leyla Həsənova",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-08",
      comment: "Əla fənn! AI müəllim çox kömək edir. Hər kəsə tövsiyə edirəm.",
      likes: 15,
      dislikes: 0,
      helpful: true,
    },
  ])

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
  })

  const [showReviewForm, setShowReviewForm] = useState(false)

  const subject = subjectData[subjectId] || subjectData.math

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

  const handleSubmitReview = () => {
    if (newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        user: "Siz", // Real app-da user məlumatı olacaq
        avatar: "/placeholder.svg?height=40&width=40",
        rating: newReview.rating,
        date: new Date().toISOString().split("T")[0],
        comment: newReview.comment,
        likes: 0,
        dislikes: 0,
        helpful: false,
      }
      setReviews([review, ...reviews])
      setNewReview({ rating: 5, comment: "" })
      setShowReviewForm(false)
    }
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
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{subject.icon}</div>
              <div>
                <h1 className="text-2xl font-bold">{subject.name}</h1>
                <p className="text-gray-600">{subject.level}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="/dashboard">
                <Play className="h-4 w-4 mr-2" />
                Öyrənməyə Başla
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-800">{subject.level}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{subject.description}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{subject.longDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href="/register">
                        İndi Başla
                        <Play className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/chat">AI Müəllimlə Söhbət</Link>
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{subject.icon}</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-blue-600">1000+</div>
                      <div className="text-sm text-gray-600">Məşq sualı</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-green-600">50+</div>
                      <div className="text-sm text-gray-600">Video dərs</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="topics" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="topics">Mövzular</TabsTrigger>
                <TabsTrigger value="skills">Bacarıqlar</TabsTrigger>
                <TabsTrigger value="benefits">Faydalar</TabsTrigger>
              </TabsList>

              <TabsContent value="topics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Öyrənmə Mövzuları</CardTitle>
                    <CardDescription>Sinif səviyyəsinə görə təşkil olunmuş mövzular</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {subject.topics.map((topic: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-lg">{topic.name}</h3>
                          <p className="text-sm text-gray-600">{topic.grade}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
                          <Button size="sm" variant="outline">
                            <BookOpen className="h-4 w-4 mr-1" />
                            Öyrən
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>İnkişaf Edəcəyiniz Bacarıqlar</CardTitle>
                    <CardDescription>Bu fənni öyrənməklə qazanacağınız əsas bacarıqlar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subject.skills.map((skill: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Bu Fənni Öyrənməyin Faydaları</CardTitle>
                    <CardDescription>Gələcək həyatınızda sizə necə kömək edəcək</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {subject.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                          <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
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
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Fənn Statistikaları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Çətinlik səviyyəsi</span>
                  <Badge variant="secondary">Orta</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Ortalama öyrənmə vaxtı</span>
                  <span className="font-medium">6 ay</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Aktiv şagird sayı</span>
                  <span className="font-medium">2,500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Müvəffəqiyyət nisbəti</span>
                  <span className="font-medium text-green-600">94%</span>
                </div>
              </CardContent>
            </Card>

            {/* Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Öyrənmə Yolu</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Əsas anlayışlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm">Praktik məşqlər</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm">Mürəkkəb mövzular</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm">Final qiymətləndirməsi</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Subjects */}
            <Card>
              <CardHeader>
                <CardTitle>Əlaqəli Fənlər</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Ədəbiyyat", icon: "📖", id: "literature" },
                  { name: "Tarix", icon: "📚", id: "history" },
                  { name: "Coğrafiya", icon: "🌍", id: "geography" },
                ].map((relatedSubject, index) => (
                  <Link
                    key={index}
                    href={`/subject/${relatedSubject.id}`}
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl">{relatedSubject.icon}</span>
                    <span className="font-medium">{relatedSubject.name}</span>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="lg:col-span-3 mt-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Şagird Rəyləri</span>
                  </CardTitle>
                  <CardDescription>Bu fənn haqqında şagirdlərin fikirləri</CardDescription>
                </div>
                <Button onClick={() => setShowReviewForm(!showReviewForm)}>Rəy Yaz</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Review Form */}
              {showReviewForm && (
                <Card className="border border-blue-200 bg-blue-50">
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Qiymətləndirmə</label>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className={`h-6 w-6 ${
                              star <= newReview.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                            }`}
                          >
                            <Star className="h-6 w-6" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Rəyiniz</label>
                      <Textarea
                        placeholder="Bu fənn haqqında fikirlərinizi yazın..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button onClick={handleSubmitReview} disabled={!newReview.comment.trim()}>
                        <Send className="h-4 w-4 mr-2" />
                        Rəy Göndər
                      </Button>
                      <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                        Ləğv et
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="border">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium">{review.user}</h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{review.comment}</p>
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{review.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600">
                              <ThumbsDown className="h-4 w-4" />
                              <span>{review.dislikes}</span>
                            </button>
                            {review.helpful && (
                              <Badge variant="secondary" className="text-xs">
                                Faydalı
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline">Daha çox rəy göstər</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
