"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import {
  ArrowLeft,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Bookmark,
  Search,
  Menu,
  ChevronLeft,
  ChevronRight,
  Maximize,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function BookReaderPage() {
  const params = useParams()
  const bookId = params.id as string

  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState([100])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  // Sample book data - in real app this would come from API
  const book = {
    id: bookId,
    title: "Azərbaycan dili",
    subtitle: "5-ci sinif dərsliyi",
    grade: "5",
    subject: "Azərbaycan dili",
    author: "Nizami Cəfərov, Məleykə Abbaszadə",
    publisher: "Təhsil",
    year: 2023,
    pages: 184,
    totalPages: 184,
  }

  const tableOfContents = [
    { chapter: "1. Nitq hissələri", page: 5 },
    { chapter: "2. İsim", page: 15 },
    { chapter: "3. Sifət", page: 35 },
    { chapter: "4. Əvəzlik", page: 55 },
    { chapter: "5. Say", page: 75 },
    { chapter: "6. Fel", page: 95 },
    { chapter: "7. Zərf", page: 125 },
    { chapter: "8. Cümlə üzvləri", page: 145 },
    { chapter: "9. Mətn təhlili", page: 165 },
  ]

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < book.totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleZoomIn = () => {
    if (zoom[0] < 200) {
      setZoom([zoom[0] + 25])
    }
  }

  const handleZoomOut = () => {
    if (zoom[0] > 50) {
      setZoom([zoom[0] - 25])
    }
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="text-white hover:bg-gray-700">
              <Link href="/books">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-lg font-semibold">{book.title}</h1>
              <p className="text-sm text-gray-400">{book.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{book.grade}-ci sinif</Badge>
            <Badge variant="outline" className="text-white border-gray-600">
              {currentPage} / {book.totalPages}
            </Badge>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        {showSidebar && (
          <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold mb-4">Mündəricat</h2>

              {/* Page Navigation */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    max={book.totalPages}
                    value={currentPage}
                    onChange={(e) => goToPage(Number.parseInt(e.target.value) || 1)}
                    className="w-20 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm"
                  />
                  <span className="text-sm text-gray-400">/ {book.totalPages}</span>
                  <Button size="sm" onClick={() => goToPage(currentPage)}>
                    Get
                  </Button>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(item.page)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-sm">{item.chapter}</div>
                    <div className="text-xs text-gray-400">Səhifə {item.page}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Book Info */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-sm space-y-1">
                <div>
                  <span className="text-gray-400">Müəllif:</span> {book.author}
                </div>
                <div>
                  <span className="text-gray-400">Nəşriyyat:</span> {book.publisher}
                </div>
                <div>
                  <span className="text-gray-400">İl:</span> {book.year}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="bg-gray-800 border-b border-gray-700 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="text-white hover:bg-gray-700"
                >
                  <Menu className="h-4 w-4" />
                </Button>

                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleZoomOut}
                    disabled={zoom[0] <= 50}
                    className="text-white hover:bg-gray-700"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>

                  <div className="w-24 mx-2">
                    <Slider value={zoom} onValueChange={setZoom} max={200} min={50} step={25} className="w-full" />
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleZoomIn}
                    disabled={zoom[0] >= 200}
                    className="text-white hover:bg-gray-700"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>

                  <span className="text-sm text-gray-400 ml-2">{zoom[0]}%</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <RotateCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="text-white hover:bg-gray-700"
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-auto bg-gray-600 p-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-2xl">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[800px] bg-white flex items-center justify-center"
                    style={{ transform: `scale(${zoom[0] / 100})`, transformOrigin: "top center" }}
                  >
                    {/* PDF Page Placeholder */}
                    <div className="w-full h-full bg-white border border-gray-200 flex flex-col">
                      {/* Page Header */}
                      <div className="p-6 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          {currentPage === 1 ? book.title : `Fəsil ${Math.ceil(currentPage / 20)}`}
                        </h1>
                        <p className="text-gray-600">{currentPage === 1 ? book.subtitle : `Səhifə ${currentPage}`}</p>
                      </div>

                      {/* Page Content */}
                      <div className="flex-1 p-6">
                        {currentPage === 1 ? (
                          // Title Page
                          <div className="text-center space-y-8">
                            <div className="text-6xl mb-8">📚</div>
                            <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
                            <h2 className="text-2xl text-gray-700">{book.subtitle}</h2>
                            <div className="space-y-2 text-lg text-gray-600">
                              <p>{book.author}</p>
                              <p>{book.publisher}</p>
                              <p>{book.year}</p>
                            </div>
                          </div>
                        ) : (
                          // Content Page
                          <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900">
                              {currentPage <= 20
                                ? "Nitq hissələri"
                                : currentPage <= 40
                                  ? "İsim"
                                  : currentPage <= 60
                                    ? "Sifət"
                                    : currentPage <= 80
                                      ? "Əvəzlik"
                                      : currentPage <= 100
                                        ? "Say"
                                        : currentPage <= 120
                                          ? "Fel"
                                          : currentPage <= 140
                                            ? "Zərf"
                                            : currentPage <= 160
                                              ? "Cümlə üzvləri"
                                              : "Mətn təhlili"}
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                              <p>
                                Bu səhifədə {book.subject} fənni üzrə mühüm məlumatlar yer alır. Şagirdlər bu mövzunu
                                öyrənməklə dil bacarıqlarını inkişaf etdirə bilərlər.
                              </p>

                              <p>
                                Dərslikdə müxtəlif tapşırıqlar, nümunələr və izahatlar mövcuddur. Hər mövzu addım-addım
                                izah edilir və praktik nümunələrlə dəstəklənir.
                              </p>

                              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-blue-900 mb-2">Qeyd:</h3>
                                <p className="text-blue-800">
                                  Bu nümunə səhifədir. Real PDF məzmunu burada göstəriləcək.
                                </p>
                              </div>

                              <p>
                                Tapşırıqları həll edərkən diqqətli olun və qaydaları yaxşı öyrənin. Suallarınız olduqda
                                müəlliminizə müraciət edin.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Page Footer */}
                      <div className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
                        Səhifə {currentPage}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <Button
                variant="ghost"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="text-white hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Əvvəlki
              </Button>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">
                  Səhifə {currentPage} / {book.totalPages}
                </span>
                <div className="w-64">
                  <Slider
                    value={[currentPage]}
                    onValueChange={(value) => setCurrentPage(value[0])}
                    max={book.totalPages}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={handleNextPage}
                disabled={currentPage === book.totalPages}
                className="text-white hover:bg-gray-700"
              >
                Növbəti
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
