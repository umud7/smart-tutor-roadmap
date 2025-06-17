"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Trophy } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

export default function ExamPage() {
  const params = useParams()
  const router = useRouter()
  const examId = params.id as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(2700) // 45 minutes default
  const [isCompleted, setIsCompleted] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Parse exam ID to get type, subject, and grade
  const [examType, subject, grade] = examId.split("-")

  // Sample exam questions - in real app this would come from API
  const examQuestions = [
    {
      id: 1,
      question: "Azərbaycan Respublikasının paytaxtı hansıdır?",
      options: ["Bakı", "Gəncə", "Sumqayıt", "Mingəçevir"],
      correct: 0,
      subject: "Tarix",
      difficulty: "Asan",
    },
    {
      id: 2,
      question: "2x + 5 = 15 tənliyində x-in qiyməti nədir?",
      options: ["5", "10", "7", "8"],
      correct: 0,
      subject: "Riyaziyyat",
      difficulty: "Orta",
    },
    {
      id: 3,
      question: "'Hello' sözünün Azərbaycan dilinə tərcüməsi nədir?",
      options: ["Salam", "Xoş gəlmisiniz", "Görüşənədək", "Təşəkkür"],
      correct: 0,
      subject: "İngilis dili",
      difficulty: "Asan",
    },
    {
      id: 4,
      question: "Azərbaycanın ən böyük gölü hansıdır?",
      options: ["Xəzər dənizi", "Mingəçevir su anbarı", "Şamaxı gölü", "Göygöl"],
      correct: 0,
      subject: "Coğrafiya",
      difficulty: "Orta",
    },
    {
      id: 5,
      question: "Fotosintez prosesi hansı orqanoidlərdə baş verir?",
      options: ["Xloroplastlarda", "Mitoxondriyalarda", "Ribosomlərdə", "Lizosomlərdə"],
      correct: 0,
      subject: "Biologiya",
      difficulty: "Çətin",
    },
  ]

  const examInfo = {
    name: `${subject} - ${examType} İmtahanı`,
    grade: `${grade}-ci sinif`,
    duration: examType === "practice" ? 30 : examType === "monthly" ? 45 : examType === "quarterly" ? 60 : 90,
    totalQuestions: examQuestions.length,
  }

  useEffect(() => {
    setTimeLeft(examInfo.duration * 60) // Convert minutes to seconds
  }, [examInfo.duration])

  useEffect(() => {
    if (timeLeft <= 0 && !isCompleted) {
      setIsCompleted(true)
      setShowResults(true)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsCompleted(true)
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, isCompleted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleNext = () => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)

    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(newAnswers[currentQuestion + 1] || "")
    } else {
      setIsCompleted(true)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1] || "")
    }
  }

  const calculateResults = () => {
    let correct = 0
    let totalAnswered = 0

    answers.forEach((answer, index) => {
      if (answer !== "") {
        totalAnswered++
        if (Number.parseInt(answer) === examQuestions[index].correct) {
          correct++
        }
      }
    })

    const score = totalAnswered > 0 ? Math.round((correct / examQuestions.length) * 100) : 0
    const grade = score >= 90 ? "5" : score >= 80 ? "4" : score >= 60 ? "3" : score >= 40 ? "2" : "1"

    return {
      score,
      grade,
      correct,
      wrong: totalAnswered - correct,
      unanswered: examQuestions.length - totalAnswered,
      totalAnswered,
    }
  }

  if (showResults) {
    const results = calculateResults()

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">İmtahan Tamamlandı!</CardTitle>
            <p className="text-gray-600">{examInfo.name}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score Display */}
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-2">{results.score}%</div>
              <div className="text-2xl font-semibold text-gray-700 mb-2">Qiymət: {results.grade}</div>
              <Badge
                className={
                  results.score >= 80
                    ? "bg-green-100 text-green-800"
                    : results.score >= 60
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }
              >
                {results.score >= 80 ? "Əla" : results.score >= 60 ? "Yaxşı" : "Zəif"}
              </Badge>
            </div>

            {/* Detailed Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{results.correct}</div>
                <div className="text-sm text-gray-600">Düzgün</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{results.wrong}</div>
                <div className="text-sm text-gray-600">Səhv</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{results.unanswered}</div>
                <div className="text-sm text-gray-600">Cavabsız</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{examQuestions.length}</div>
                <div className="text-sm text-gray-600">Ümumi</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Tərəqqi</span>
                <span>{results.score}%</span>
              </div>
              <Progress value={results.score} className="w-full" />
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Tövsiyələr:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                {results.score >= 80 ? (
                  <>
                    <li>• Əla nəticə! Davam edin</li>
                    <li>• Digər fənlərdə də imtahan verin</li>
                  </>
                ) : results.score >= 60 ? (
                  <>
                    <li>• Yaxşı nəticə, daha çox məşq edin</li>
                    <li>• Səhv etdiyiniz mövzuları təkrar edin</li>
                  </>
                ) : (
                  <>
                    <li>• Mövzuları ətraflı öyrənin</li>
                    <li>• AI müəllimdən kömək alın</li>
                    <li>• Məşq imtahanları verin</li>
                  </>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/exams">Yeni İmtahan</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/chat">AI Müəllimlə Söhbət</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = examQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / examQuestions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/exams">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">{examInfo.name}</h1>
              <p className="text-sm text-gray-600">{examInfo.grade}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{formatTime(timeLeft)}</span>
            </Badge>
            <Badge variant="outline">
              {currentQuestion + 1} / {examQuestions.length}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Tərəqqi</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Question */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{question.subject}</Badge>
              <Badge
                variant={
                  question.difficulty === "Asan"
                    ? "default"
                    : question.difficulty === "Orta"
                      ? "secondary"
                      : "destructive"
                }
              >
                {question.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion + 1}. {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {String.fromCharCode(65 + index)}. {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Əvvəlki
          </Button>

          <div className="flex items-center space-x-2">
            {timeLeft <= 300 && ( // Show warning when 5 minutes left
              <div className="flex items-center space-x-1 text-orange-600">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">Vaxt azalır!</span>
              </div>
            )}
          </div>

          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={currentQuestion === examQuestions.length - 1 ? "bg-green-600 hover:bg-green-700" : ""}
          >
            {currentQuestion === examQuestions.length - 1 ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Bitir
              </>
            ) : (
              <>
                Növbəti
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Question Navigator */}
        <Card className="border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Sual Naviqatoru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {examQuestions.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentQuestion ? "default" : answers[index] ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => {
                    // Save current answer before switching
                    const newAnswers = [...answers]
                    newAnswers[currentQuestion] = selectedAnswer
                    setAnswers(newAnswers)

                    setCurrentQuestion(index)
                    setSelectedAnswer(newAnswers[index] || "")
                  }}
                  className="w-full"
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span>Cari sual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span>Cavablanıb</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                <span>Cavablanmayıb</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
