import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, BookOpen, Users, BarChart3, MessageSquare, Target, ArrowRight, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"
import { EducationSystemSection } from "@/components/education-system"
import { SubjectFilter } from "@/components/subject-filter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Smart Tutor</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Xüsusiyyətlər
            </Link>
            <Link href="/subjects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Fənlər
            </Link>
            <Link href="/books" className="text-gray-600 hover:text-blue-600 transition-colors">
              Kitablar
            </Link>
            <Link href="/exams" className="text-gray-600 hover:text-blue-600 transition-colors">
              İmtahanlar
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              Haqqımızda
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Əlaqə
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Daxil ol</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Qeydiyyat</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Zap className="h-3 w-3 mr-1" />
            Süni İntellekt ilə Təhsil
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Şəxsi AI Müəlliminlə
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Öyrən</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Smart Tutor - hər şagird üçün fərdi öyrənmə təcrübəsi yaradan süni intellekt sistemi. Adaptiv testlər, real
            vaxt dəstəyi və detallı analitika ilə təhsilinizi növbəti səviyyəyə aparın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/dashboard">
                İndi Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/demo">Demo İzlə</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Aktiv Şagird</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Müvəffəqiyyət Nisbəti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Fənn və Mövzu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Niyə Smart Tutor?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ən müasir AI texnologiyaları ilə təchiz olunmuş xüsusiyyətlər
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI Sual-Cavab Botu</CardTitle>
                <CardDescription>24/7 mövcud olan AI müəllim. İstənilən sual verin, dərhal cavab alın.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Adaptiv Testlər</CardTitle>
                <CardDescription>
                  Sizin səviyyənizə uyğun testlər. Hər cavaba görə çətinlik dərəcəsi dəyişir.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Detallı Analitika</CardTitle>
                <CardDescription>Tərəqqinizi izləyin, güclü və zəif tərəflərinizi müəyyən edin.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Şəxsi Öyrənmə Planı</CardTitle>
                <CardDescription>AI sizin üçün fərdi öyrənmə planı hazırlayır və hədəflər qoyur.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Müəllim Paneli</CardTitle>
                <CardDescription>
                  Müəllimlər şagirdlərin tərəqqisini izləyə və tapşırıqlar verə bilərlər.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Real Vaxt Dəstək</CardTitle>
                <CardDescription>Çətinlik çəkdiyiniz anda dərhal kömək və izahat alın.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Education System Section */}
      <EducationSystemSection />

      {/* Subjects Section */}
      <section id="subjects" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mövcud Fənlər</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Müxtəlif fənlər üzrə AI dəstəyi ilə öyrənin</p>
          </div>

          <SubjectFilter
            subjects={[
              { id: "azerbaijani", name: "Azərbaycan dili", icon: "🇦🇿", level: "1-11 sinif", color: "bg-red-500" },
              { id: "literature", name: "Ədəbiyyat", icon: "📖", level: "5-11 sinif", color: "bg-pink-500" },
              { id: "math", name: "Riyaziyyat", icon: "📊", level: "1-11 sinif", color: "bg-blue-500" },
              { id: "english", name: "İngilis dili", icon: "🇬🇧", level: "2-11 sinif", color: "bg-green-500" },
              { id: "russian", name: "Rus dili", icon: "🇷🇺", level: "2-11 sinif", color: "bg-blue-600" },
              { id: "german", name: "Alman dili", icon: "🇩🇪", level: "5-11 sinif", color: "bg-yellow-600" },
              { id: "french", name: "Fransız dili", icon: "🇫🇷", level: "5-11 sinif", color: "bg-blue-700" },
              { id: "history", name: "Tarix", icon: "📚", level: "5-11 sinif", color: "bg-amber-600" },
              { id: "geography", name: "Coğrafiya", icon: "🌍", level: "6-11 sinif", color: "bg-emerald-500" },
              { id: "physics", name: "Fizika", icon: "⚛️", level: "7-11 sinif", color: "bg-purple-500" },
              { id: "chemistry", name: "Kimya", icon: "🧪", level: "8-11 sinif", color: "bg-orange-500" },
              { id: "biology", name: "Biologiya", icon: "🧬", level: "6-11 sinif", color: "bg-teal-500" },
              { id: "informatics", name: "İnformatika", icon: "💻", level: "5-11 sinif", color: "bg-slate-600" },
              { id: "life-skills", name: "Həyat bilgisi", icon: "🌱", level: "1-4 sinif", color: "bg-lime-500" },
              { id: "nature-science", name: "Təbiət bilgisi", icon: "🌿", level: "3-5 sinif", color: "bg-green-600" },
              { id: "art", name: "Bədii yaradıcılıq", icon: "🎨", level: "1-8 sinif", color: "bg-violet-500" },
              { id: "music", name: "Musiqi", icon: "🎵", level: "1-8 sinif", color: "bg-rose-500" },
              {
                id: "physical-education",
                name: "Bədən tərbiyəsi",
                icon: "⚽",
                level: "1-11 sinif",
                color: "bg-cyan-500",
              },
              { id: "labor-education", name: "Əmək tərbiyəsi", icon: "🔨", level: "5-8 sinif", color: "bg-stone-600" },
              {
                id: "religious-education",
                name: "Din tərbiyəsi",
                icon: "☪️",
                level: "1-11 sinif",
                color: "bg-emerald-600",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Gələcəyin Təhsilinə Başlayın</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Süni intellekt dəstəyi ilə öyrənmə təcrübənizi fərdiləşdirin və akademik uğurlarınızı artırın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/register">
                Pulsuz Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Əlaqə</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Smart Tutor</span>
              </div>
              <p className="text-gray-400">AI ilə təchiz olunmuş şəxsi öyrənmə sistemi</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Məhsul</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Xüsusiyyətlər
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Qiymətlər
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Dəstək</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Kömək
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Əlaqə
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Şirkət</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Haqqımızda
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Karyera
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Məxfilik
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Smart Tutor. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
