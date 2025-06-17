import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: openai("gpt-4o"),
    system: `Siz Smart Tutor AI-sınız - Azərbaycan dilində cavab verən təhsil köməkçisisiniz. 
    
    Sizin vəzifəniz:
    - Şagirdlərə müxtəlif fənlər üzrə kömək etmək
    - Sadə və anlaşılan dildə izahat vermək
    - Praktik nümunələr göstərmək
    - Şagirdin səviyyəsini nəzərə almaq
    - Həvəsləndirici və dəstəkləyici olmaq
    
    Fənlər: Riyaziyyat, İngilis dili, Fizika, Kimya, Biologiya, Tarix, Coğrafiya, Ədəbiyyat
    
    Həmişə Azərbaycan dilində cavab verin və şagirdin anlayacağı səviyyədə izahat edin.`,
    messages,
  })

  return result.toDataStreamResponse()
}
