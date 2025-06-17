"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function TestPage() {
  const params = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes
  const [isCompleted, setIsCompleted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Kvadrat tənlik ax² + bx + c = 0 üçün diskriminant hansı düsturla hesablanır?",
      options: ["D = b² - 4ac", "D = b² + 4ac", "D = 4ac - b²", "D = a² - 4bc"],
      correct: 0,
      subject: "Riyaziyyat",
      difficulty: "Orta",
    },
    {
      id: 2,
      question: "2x² - 8x + 6 = 0 tənliyinin köklərini tapın:",
      options: ["x₁ = 1, x₂ = 3", "x₁ = 2, x₂ = 4", "x₁ = -1, x₂ = -3", "x₁ = 0, x₂ = 2"],
      correct: 0,
      subject: "Riyaziyyat",
      difficulty: "Orta",
    },
    {
      id: 3,
      question: "Kvadrat tənliyin diskriminantı mənfi olduqda:",
      options: [
        "Tənliyin real kökləri yoxdur",
        "Tənliyin iki bərabər kökü var",
        "Tənliyin iki fərqli real kökü var",
        "Tənlik həll edilə bilməz",
      ],
      correct: 0,
      subject: "Riyaziyyat",
      difficulty: "Asan",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsCompleted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleNext = () => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(newAnswers[currentQuestion + 1] || "")
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1] || "")
    }
  }

  const calculateScore = () => {
    let correct = 0
    answers.forEach((answer, index) => {
      if (Number.parseInt(answer) === questions[index].correct) {
        correct++
      }
    })
    return Math.round((correct / questions.length) * 100)
  }

  if (isCompleted) {
    const score = calculateScore()
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Test Tamamlandı!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{score}%</div>
              <p className="text-gray-600">Sizin nəticəniz</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {answers.filter((answer, index) => Number.parseInt(answer) === questions[index].correct).length}
                </div>
                <div className="text-sm text-gray-600">Düzgün</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {questions.length -
                    answers.filter((answer, index) => Number.parseInt(answer) === questions[index].correct).length}
                </div>
                <div className="text-sm text-gray-600">Səhv</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{questions.length}</div>
                <div className="text-sm text-gray-600">Ümumi</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/dashboard">Dashboard-a qayıt</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/test/review">Cavabları gözdən keçir</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

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
            <div>
              <h1 className="text-xl font-bold">Riyaziyyat Testi</h1>
              <p className="text-sm text-gray-600">Kvadrat tənliklər</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{formatTime(timeLeft)}</span>
            </Badge>
            <Badge variant="outline">
              {currentQuestion + 1} / {questions.length}
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
        <Card className="mb-8">
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
            <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Əvvəlki
          </Button>

          <Button onClick={handleNext} disabled={!selectedAnswer}>
            {currentQuestion === questions.length - 1 ? "Bitir" : "Növbəti"}
            {currentQuestion !== questions.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
