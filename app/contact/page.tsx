"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "info@smarttutor.az",
      description: "Bizə yazın, 24 saat ərzində cavab veririk",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+994 12 345 67 89",
      description: "İş günləri 09:00-18:00 arası",
    },
    {
      icon: MapPin,
      title: "Ünvan",
      value: "Bakı şəhəri, Nəsimi rayonu",
      description: "28 May küçəsi, IT Park",
    },
    {
      icon: Clock,
      title: "İş saatları",
      value: "B.e - Cümə: 09:00-18:00",
      description: "Həftə sonu: 10:00-16:00",
    },
  ]

  const faqItems = [
    {
      question: "Smart Tutor necə işləyir?",
      answer:
        "Smart Tutor AI texnologiyası ilə hər şagird üçün fərdi öyrənmə planı hazırlayır və adaptiv testlər təklif edir.",
    },
    {
      question: "Hansı fənlər mövcuddur?",
      answer: "Azərbaycan təhsil sisteminin bütün fənləri: Azərbaycan dili, Riyaziyyat, İngilis dili, Fizika və s.",
    },
    {
      question: "Qiymətlər necədir?",
      answer:
        "Müxtəlif paketlərimiz var. Ətraflı məlumat üçün qiymətlər səhifəsinə baxın və ya bizimlə əlaqə saxlayın.",
    },
    {
      question: "Müəllimlər üçün xüsusi funksiyalar varmı?",
      answer: "Bəli, müəllimlər üçün xüsusi panel, şagird izləmə və tapşırıq verme funksiyaları mövcuddur.",
    },
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
          <Badge className="mb-4 bg-blue-100 text-blue-800">Əlaqə</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bizimlə
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Əlaqə Saxlayın
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suallarınız, təklifləriniz və ya əməkdaşlıq üçün bizimlə əlaqə saxlayın. Komandamız sizə kömək etməkdən
            məmnun olacaq.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <span>Bizə Yazın</span>
                </CardTitle>
                <CardDescription>Formu doldurun və biz ən qısa zamanda sizinlə əlaqə saxlayacağıq</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad və Soyad *</Label>
                      <Input
                        id="name"
                        placeholder="Adınızı daxil edin"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="userType">İstifadəçi tipi</Label>
                      <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Şagird</SelectItem>
                          <SelectItem value="teacher">Müəllim</SelectItem>
                          <SelectItem value="parent">Valideyn</SelectItem>
                          <SelectItem value="school">Məktəb</SelectItem>
                          <SelectItem value="other">Digər</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Mövzu</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Mövzu seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Ümumi sual</SelectItem>
                          <SelectItem value="technical">Texniki dəstək</SelectItem>
                          <SelectItem value="partnership">Əməkdaşlıq</SelectItem>
                          <SelectItem value="pricing">Qiymətlər</SelectItem>
                          <SelectItem value="feature">Yeni funksiya təklifi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Mesaj Göndər
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Əlaqə Məlumatları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-blue-600 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Dərhal Kömək</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Təcili suallarınız varsa, AI müəllimimizlə dərhal söhbət edə bilərsiniz.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/chat">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    AI Müəllimlə Söhbət
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <HelpCircle className="h-8 w-8 text-blue-600" />
              <span>Tez-tez Verilən Suallar</span>
            </h2>
            <p className="text-xl text-gray-600">Ən çox soruşulan sualların cavabları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Bizim Yerləşdiyimiz Yer</CardTitle>
            <CardDescription className="text-center">Bakı şəhərində yerləşən ofisimizə xoş gəlmisiniz</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Xəritə burada göstəriləcək</p>
                <p className="text-sm text-gray-500">Bakı şəhəri, Nəsimi rayonu, 28 May küçəsi</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
