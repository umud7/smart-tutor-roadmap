import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, ArrowLeft, CheckCircle, Lightbulb, Heart, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Aytən Məmmədova",
      role: "Baş Direktor",
      description: "15 illik təhsil təcrübəsi olan AI mütəxəssisi",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Elçin Həsənov",
      role: "Texniki Direktor",
      description: "Machine Learning və təhsil texnologiyaları üzrə ekspert",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Günel Əliyeva",
      role: "Təhsil Məsləhətçisi",
      description: "Azərbaycan təhsil sistemi və kurikulum mütəxəssisi",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Rəşad Quliyev",
      role: "UX/UI Dizayner",
      description: "İstifadəçi təcrübəsi və interfeys dizaynı üzrə mütəxəssis",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Məqsədyönlülük",
      description: "Hər şagirdin uğuru bizim əsas məqsədimizdir",
    },
    {
      icon: Lightbulb,
      title: "İnnovasiya",
      description: "Ən müasir texnologiyalarla təhsili inkişaf etdiririk",
    },
    {
      icon: Heart,
      title: "Qayğı",
      description: "Hər şagirdə fərdi yanaşma və diqqət göstəririk",
    },
    {
      icon: Globe,
      title: "Əlçatanlıq",
      description: "Keyfiyyətli təhsili hamı üçün əlçatan edirik",
    },
  ]

  const achievements = [
    { number: "10,000+", label: "Aktiv İstifadəçi" },
    { number: "95%", label: "Müvəffəqiyyət Nisbəti" },
    { number: "50+", label: "Fənn və Mövzu" },
    { number: "24/7", label: "AI Dəstək" },
  ]

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

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Haqqımızda</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gələcəyin Təhsilini
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Yaradırıq
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Smart Tutor - Azərbaycanda süni intellekt əsaslı təhsil həllərinin öncülüdür. Biz hər şagirdin potensialını
            açmaq və onların akademik uğurlarını artırmaq üçün ən müasir texnologiyalardan istifadə edirik.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Target className="h-6 w-6 text-blue-600" />
                <span>Missiyamız</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Azərbaycanda hər şagirdə keyfiyyətli, fərdiləşdirilmiş və əlçatan təhsil imkanları yaratmaq. Süni
                intellekt texnologiyalarından istifadə edərək ənənəvi təhsil metodlarını müasirləşdirmək və hər şagirdin
                öz tempində öyrənməsinə şərait yaratmaq.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Lightbulb className="h-6 w-6 text-purple-600" />
                <span>Vizyonumuz</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Azərbaycanda təhsil sahəsində rəqəmsal transformasiyanın lideri olmaq və regionda ən qabaqcıl AI əsaslı
                təhsil platforması kimi tanınmaq. Gələcəkdə bütün Azərbaycan şagirdlərinin Smart Tutor vasitəsilə
                öyrənməsi və uğur qazanması.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizim Dəyərlərimiz</h2>
            <p className="text-xl text-gray-600">Smart Tutor komandası kimi bizə rəhbərlik edən prinsiplər</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nailiyyətlərimiz</h2>
            <p className="text-xl opacity-90">Rəqəmlərlə bizim uğur hekayəmiz</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizim Komanda</h2>
            <p className="text-xl text-gray-600">Smart Tutor-u yaradıb inkişaf etdirən mütəxəssislər</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Bizim Hekayəmiz</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Smart Tutor layihəsi 2023-cü ildə Azərbaycanda təhsil keyfiyyətini artırmaq məqsədi ilə başladı.
                    Bizim komandamız təhsil sahəsində çalışan mütəxəssislər, AI mühəndisləri və dizaynerlərindən
                    ibarətdir.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    İlk günlərdən etibarən məqsədimiz sadə idi: hər şagirdə öz potensialını açmaq üçün lazım olan
                    alətləri vermək. Süni intellekt texnologiyalarının gücündən istifadə edərək, biz fərdiləşdirilmiş
                    öyrənmə təcrübəsi yaratdıq.
                  </p>
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">2024-cü ildə 10,000+ aktiv istifadəçi</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 text-center">
                  <Brain className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Learning</h3>
                  <p className="text-gray-600">
                    Ən müasir süni intellekt texnologiyaları ilə təchiz olunmuş təhsil platforması
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizimlə Əlaqə Saxlayın</h2>
              <p className="text-xl text-gray-600 mb-8">
                Smart Tutor haqqında daha çox məlumat almaq və ya bizimlə əməkdaşlıq etmək istəyirsiniz?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Əlaqə</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/dashboard">Platformaya Bax</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
