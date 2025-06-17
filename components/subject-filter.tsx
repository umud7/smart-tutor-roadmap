"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface SubjectFilterProps {
  subjects: Array<{
    id: string
    name: string
    icon: string
    level: string
    color: string
  }>
}

export function SubjectFilter({ subjects }: SubjectFilterProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>("all")

  const grades = [
    { value: "all", label: "Bütün siniflər" },
    { value: "1-4", label: "İbtidai (1-4)" },
    { value: "5-9", label: "Orta (5-9)" },
    { value: "10-11", label: "Yuxarı (10-11)" },
  ]

  const filterSubjects = () => {
    if (selectedGrade === "all") return subjects

    return subjects.filter((subject) => {
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

  const filteredSubjects = filterSubjects()

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {grades.map((grade) => (
          <Button
            key={grade.value}
            variant={selectedGrade === grade.value ? "default" : "outline"}
            onClick={() => setSelectedGrade(grade.value)}
            className="text-sm"
          >
            {grade.label}
          </Button>
        ))}
      </div>

      {/* Filtered Results */}
      <div className="text-center mb-4">
        <Badge variant="secondary">{filteredSubjects.length} fənn tapıldı</Badge>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredSubjects.map((subject, index) => (
          <Link key={index} href={`/subject/${subject.id}`}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-3">{subject.icon}</div>
                <CardTitle className="text-lg">{subject.name}</CardTitle>
                <Badge variant="secondary" className="mt-2">
                  {subject.level}
                </Badge>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
