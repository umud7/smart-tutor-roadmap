import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen } from "lucide-react"

export function EducationSystemSection() {
  const educationLevels = [
    {
      level: "İbtidai təhsil",
      grades: "1-4 sinif",
      age: "6-10 yaş",
      icon: BookOpen,
      color: "bg-green-100 text-green-800",
      subjects: ["Azərbaycan dili", "Riyaziyyat", "Həyat bilgisi", "Bədii yaradıcılıq", "Musiqi", "Bədən tərbiyəsi"],
    },
    {
      level: "Ümumi orta təhsil (I pillə)",
      grades: "5-9 sinif",
      age: "10-15 yaş",
      icon: Users,
      color: "bg-blue-100 text-blue-800",
      subjects: [
        "Azərbaycan dili",
        "Ədəbiyyat",
        "Riyaziyyat",
        "Tarix",
        "Coğrafiya",
        "Biologiya",
        "Fizika",
        "Kimya",
        "İngilis dili",
      ],
    },
    {
      level: "Ümumi orta təhsil (II pillə)",
      grades: "10-11 sinif",
      age: "15-17 yaş",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-800",
      subjects: ["Bütün fənlər + İxtisaslaşma", "Abituriyent hazırlığı", "Peşə yönümü"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Azərbaycan Təhsil Sistemi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Tutor Azərbaycanın təhsil sisteminin bütün pillələrini əhatə edir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {educationLevels.map((level, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <level.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{level.level}</CardTitle>
                <div className="space-y-2">
                  <Badge className={level.color}>{level.grades}</Badge>
                  <Badge variant="outline">{level.age}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700 mb-3">Əsas fənlər:</h4>
                  <div className="flex flex-wrap gap-1">
                    {level.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">11</div>
            <div className="text-gray-600 text-sm">Sinif səviyyəsi</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-600 text-sm">Müxtəlif fənn</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600 text-sm">Təhsil pilləsi</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Kurikulum uyğunluğu</div>
          </div>
        </div>
      </div>
    </section>
  )
}
