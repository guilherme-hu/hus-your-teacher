"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Heart, Users, BookOpen, Star, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { VintageStickers } from "@/components/vintage-stickers"


export default function HomePage() {
  const [downloads, setDownloads] = useState<Record<string, number>>({});
  useEffect(() => {
    fetch("/api/downloads")
      .then(res => res.json())
      .then(setDownloads);
  }, []);

  const handleDownload = async (filePath: string) => {
    // Atualiza localmente para resposta rápida
    setDownloads(prev => ({ ...prev, [filePath]: (prev[filePath] || 0) + 1 }));
    // Atualiza no backend
    await fetch("/api/downloads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filePath }),
    });
  };

  const learningSheets = [
    {
      title: "Welcome Activity",
      description: "Compartilhe um pouco de você com esta atividade de boas-vindas!",
      level: "Iniciante",
      icon: "🔤",
      filePath: "/downloads/Welcome Activity.pdf"
    },
    {
      title: "Animals",
      description: "Aprenda como nomear alguns animais em inglês.",
      level: "Iniciante",
      icon: "💬",
      filePath: "/downloads/Animals.pdf"
    },
    {
      title: "Verb “To Be”",
      description: "Regras gramaticais para o verbo “to be” ",
      level: "Iniciante",
      icon: "📝",
      filePath: "/downloads/Verb to be.pdf"
    },
    {
      title: "Practice Verb “To Be”",
      description: "Pratique o que você aprendeu na última aula! ",
      level: "Iniciante",
      icon: "📖",
      filePath: "/downloads/Practice Verb to be.pdf"
    },
    {
      title: "Classroom Vocabulary",
      description: "Vocabulário sobre sala de aula",
      level: "Iniciante",
      icon: "🗣️",
      filePath: "/downloads/Classroom Vocabulary.pdf"
    },
    {
      title: "Resolutions ",
      description: "Destaque o que você aprendeu nas últimas 5 aulas e o que foi difícil!",
      level: "Iniciante",
      icon: "✏️",
      filePath: "/downloads/Resolutions.pdf"
    },
    {
      title: "Simple Present",
      description: "Regras gramaticais para o tempo verbal Simple Present",
      level: "Iniciante",
      icon: "💬",
      filePath: "/downloads/Simple Present.pdf"
    },
    {
      title: "Simple Present Practice",
      description: "Pratique a forma afirmativa do Simple Present",
      level: "Iniciante",
      icon: "⏰",
      filePath: "/downloads/Simple Present Practice.pdf"
    },
    {
      title: "Verb “To Do” Practice ",
      description: "Pratique a colocação do verb “to do” e suas contrações",
      level: "Iniciante",
      icon: "👪",
      filePath: "/downloads/Verb To Do Practice.pdf"
    },
    {
      title: "Do, Does & Did",
      description: "Aprenda as diferenças entre “do”, “does” e “did”",
      level: "Iniciante",
      icon: "🏠",
      filePath: "/downloads/Do Does Did.pdf"
    },
    {
      title: "Antonyms",
      description: "Antônimos em inglês",
      level: "Iniciante",
      icon: "❌",
      filePath: "/downloads/Antonyms.pdf"
    },
    {
      title: "Verb “To Like”",
      description: "Regras gramaticais referentes ao verb “to like”",
      level: "Iniciante",
      icon: "❓",
      filePath: "/downloads/Verb ''To Like''.pdf"
    },
    {
      title: "Progress Check",
      description: "Complete esta atividade para avaliar o quanto você aprendeu até agora! Não hesite em nos mandá-la para corrigirmos  😉",
      level: "Iniciante",
      icon: "💡",
      filePath: "/downloads/Progress Check.pdf"
    },
    {
      title: "Past Simple",
      description: "Regras gramaticais para o tempo verbal Past Simple",
      level: "Iniciante",
      icon: "📅",
      filePath: "/downloads/Past Simple.pdf"
    },
    {
      title: "Past Simple Practice",
      description: "Pratique o que você aprendeu na última aula",
      level: "Iniciante",
      icon: "🕰️",
      filePath: "/downloads/Past Simple Practice.pdf"
    },
    {
      title: "Past Simple Practice 2",
      description: "Pratique a colocação de verbos no Past Simple",
      level: "Iniciante",
      icon: "🕰️",
      filePath: "/downloads/Past Simple Practice 2.pdf"
    },
    {
      title: "Present Perfect ",
      description: "Regras gramaticais para o tempo verbal Present Perfect",
      level: "Iniciante",
      icon: "🕰️",
      filePath: "/downloads/Present Perfect.pdf"
    },
    {
      title: "Present Perfect Practice",
      description: "Pratique o que você aprendeu na última aula",
      level: "Iniciante",
      icon: "🕰️",
      filePath: "/downloads/Present Perfect Practice.pdf"
    },
    {
      title: "Reading Comprehension",
      description: "Atividade de compreensão de leitura em inglês",
      level: "Iniciante",
      icon: "🕰️",
      filePath: "/downloads/Reading Comprehension.pdf"
    },
    {
      title: "Verb Tenses Review",
      description: "Revise o quanto você aprendeu sobre tempos verbais até agora!",
      level: "Iniciante",
      icon: "🕰️",
      filePath: "/downloads/Verb Tenses Review.pdf"
    },
    // {
    //   title: "Creative Writing",
    //   description: "Produção de texto com os tempos verbais que aprendemos até agora",
    //   level: "Iniciante",
    //   icon: "⏳",
    //   filePath: "/downloads/Creative Writing.pdf"
    // },
    // {
    //   title: "Food Idioms",
    //   description: "Expressões idiomáticas sobre comida",
    //   level: "Iniciante",
    //   icon: "⏳",
    //   filePath: "/downloads/Food Idioms.pdf"
    // },
    // {
    //   title: "Personality Adjectives",
    //   description: "Vocabulário sobre adjetivos de personalidade",
    //   level: "Iniciante",
    //   icon: "🍽️",
    //   filePath: "/downloads/Personality Adjectives.pdf"
    // },
    // {
    //   title: "Emotional Adjectives",
    //   description: "Vocabulário sobre adjetivos que descrevem emoções",
    //   level: "Iniciante",
    //   icon: "🍕",
    //   filePath: "/downloads/Emotional Adjectives.pdf"
    // },
    // {
    //   title: "Reading Comprehension 2",
    //   description: "Mais uma atividade de compreensão de leitura!",
    //   level: "Iniciante",
    //   icon: "🥗",
    //   filePath: "/downloads/Reading Comprehension 2.pdf"
    // },
    // {
    //   title: "Creative Writing 2",
    //   description: "Produção textual com os Personality e Emotional Adjectives que aprendemos nas últimas aulas",
    //   level: "Iniciante",
    //   icon: "🥗",
    //   filePath: "/downloads/Creative Writing 2.pdf"
    // },

  ]

  const teamMembers = [
    {
      name: "Jessie Hu",
      role: "Criadora de Conteúdo",
      description: "Desenvolve materiais de aprendizado envolventes",
      avatar: "/dudu.jpeg?height=100&width=100",
      icon: "🎨",
    },
    {
      name: "Emily Hu",
      role: "Especialista em Educação",
      description: "Garante a eficácia pedagógica",
      avatar: "/bonnie.jpeg?height=100&width=100",
      icon: "🍎",
    },
    {
      name: "Guilherme Hu",
      role: "Tecnologia e Design",
      description: "Constrói e mantém a plataforma",
      avatar: "/bingo.jpeg?height=100&width=100",
      icon: "💻",
    },
  ]

  return (
    <div className="min-h-screen crayon-scribbles film-grain dreamy">

      {/* Header */}
      <header className="border-b border-pink-300 bg-pink-50/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <div>
              <h1 className="text-2xl vintage-heading text-gray-800">Hu's Your Teacher</h1>
              <p className="text-sm text-pink-600 handwritten italic">Hu cares? We do.</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#materials" className="text-gray-700 hover:text-pink-600 transition-colors retro-text">
              Materiais 📚
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-pink-600 transition-colors retro-text">
              Sobre 🌟
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-pink-600 transition-colors retro-text">
              Equipe 👨‍👩‍👧‍👦
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - STAYS IN ENGLISH */}
      <section className="py-24 px-4 relative hero-section vignette">
        <VintageStickers />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="mb-12">
            <Badge className="mb-8 bg-pink-400 text-white border-0 retro-text photo-border">
              🎉 100% Free Learning Materials
            </Badge>
            <h2 className="text-6xl md:text-8xl vintage-heading mb-8 text-gray-800 leading-tight">
              Learn English,
              <br />
              <span className="italic text-pink-600">Dream Bigger</span>
            </h2>
            <div className="mb-8">
              <p className="text-3xl handwritten italic text-pink-500 mb-4">"Hu cares? We do." 💛</p>
            </div>
              <div className="flex justify-center mb-8">
                <div className="relative rounded-full overflow-hidden photo-border" style={{ width: 480, height: 480 }}>
                <Image
                  src="/images/logo.jpg"
                  alt="Hu's Your Teacher Logo"
                  fill
                  sizes="280px"
                  className="object-cover rounded-sm"
                  priority
                />
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed retro-text">
              Free, high-quality English learning materials created with love by three cousins. Perfect for kids, great
              for everyone. No barriers, just learning. 🌈
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="vintage-btn text-lg px-10 py-8 retro-text" asChild>
              <a href="/downloads/Welcome Activity.pdf" download>
                <Download className="w-5 h-5 mr-3" />
                Download Your First Material! 📖
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pink-400 text-pink-700 hover:bg-pink-50 text-lg px-10 py-8 retro-text photo-border"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfycbC8kjQpKJxz9cXk_a-FxP0r46dVWI_gMvI2muFHItHKmg/viewform"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Heart className="w-5 h-5 mr-3" />
                Acessar Formulário 💕
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-6 photo-border animate-vintage-glow">
                <Users className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="vintage-heading text-gray-800 mb-3 text-xl">Independent Learners 👨‍🎓</h3>
              <p className="text-gray-600 retro-text">Students worldwide using our materials</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-6 photo-border animate-vintage-glow">
                <BookOpen className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="vintage-heading text-gray-800 mb-3 text-xl">50+ Worksheets 📄</h3>
              <p className="text-gray-600 retro-text">Comprehensive learning materials</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-6 photo-border animate-vintage-glow">
                <Globe className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="vintage-heading text-gray-800 mb-3 text-xl">Always Free 🎁</h3>
              <p className="text-gray-600 retro-text">No paywalls, no subscriptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Materials Section - IN PORTUGUESE */}
      <section id="materials" className="py-24 px-4 bg-green-50/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl vintage-heading mb-6 text-gray-800">Materiais de Aprendizado 📚</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto retro-text">
              Folhas de trabalho cuidadosamente elaboradas cobrindo todos os aspectos do aprendizado de inglês. Baixe,
              imprima e comece a aprender hoje! 🌟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningSheets.map((sheet, index) => (
              <Card
                key={index}
                className="vintage-card scrapbook-tape hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs bg-cream-200 text-gray-700 retro-text">
                      {sheet.level}
                    </Badge>
                    {/* Contador de downloads no canto superior direito */}
                    {downloads[sheet.filePath] ? (
                      <span className="absolute top-2 right-3 flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full shadow text-gray-500 text-xs font-semibold retro-text z-10">
                        <Download className="w-3 h-3 text-gray-400" />
                        {downloads[sheet.filePath]}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{sheet.icon}</span>
                    <CardTitle className="text-lg text-gray-800 vintage-heading">{sheet.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 retro-text">{sheet.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full vintage-btn retro-text" asChild onClick={() => handleDownload(sheet.filePath)}>
                    <a href={sheet.filePath} download>
                      <Download className="w-4 h-4 mr-2" />
                      Baixar PDF 📥
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pink-400 text-pink-700 hover:bg-pink-50 retro-text photo-border"
            >
              Fique ligado nos materiais futuros! 👀
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - IN PORTUGUESE */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl vintage-heading mb-8 text-gray-800">Nossa Missão 🎯</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed retro-text">
                Acreditamos que o aprendizado de idiomas deve ser acessível a todos, independentemente de sua situação
                econômica. É por isso que criamos o Hu's Your Teacher - uma plataforma completamente gratuita oferecendo
                materiais de aprendizado de inglês de alta qualidade. 🌍
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed retro-text">
                Nossas folhas de trabalho são projetadas pensando nas crianças, mas são perfeitas para aprendizes de
                todas as idades. Cada folha cobre tópicos importantes de inglês com atividades e explicações. 📝
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-gray-700 retro-text">Design amigável para crianças 👶</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-500 fill-current" />
                  <span className="text-gray-700 retro-text">Feito com amor 💝</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="vintage-card p-10 text-center photo-border scrapbook-corner">
                <div className="bg-yellow-100 rounded-lg p-8 photo-border">
                  <div className="text-4xl mb-4">🎁</div>
                  <BookOpen className="w-20 h-20 text-gray-600 mx-auto mb-6" />
                  <h3 className="text-3xl vintage-heading text-gray-800 mb-4">100% Gratuito</h3>
                  <p className="text-gray-600 retro-text text-lg">
                    Sem custos ocultos, sem níveis premium. Apenas educação gratuita e de qualidade para todos. 🌟
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - IN PORTUGUESE */}
      <section id="team" className="py-24 px-4 bg-blue-50/60">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl vintage-heading mb-6 text-gray-800">Conheça a Família Hu 👨‍👩‍👧‍👦</h2>
            <p className="text-xl text-gray-600 retro-text">
              Três primos unidos por uma paixão pela educação e por ajudar outros. 💕
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center vintage-card border-2 border-pink-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scrapbook-tape"
              >
                <CardHeader>
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-pink-200 flex items-center justify-center photo-border">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">{member.icon}</span>
                    <CardTitle className="text-xl text-gray-800 vintage-heading">{member.name}</CardTitle>
                  </div>
                  <CardDescription className="text-pink-600 handwritten font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 retro-text">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - IN PORTUGUESE */}
      <section className="py-24 px-4 bg-pink-400 vignette">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl vintage-heading mb-8 text-white">Pronto para Começar a Aprender? 🚀</h2>
          <p className="text-xl mb-12 text-white/90 retro-text">
            Junte-se a aprendizes que estão melhorando seu inglês com nossos materiais e aulas gratuitas! Preencha o formulário abaixo para se inscrever como aluno! 🌍
          </p>
          <p className="text-xl mb-12 text-white/90 retro-text">
          Você também pode se inscrever como voluntário no projeto, participando como professor ou criador de conteúdo! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-yellow-300 text-gray-800 hover:bg-yellow-400 text-lg px-10 py-8 retro-text photo-border"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfycbC8kjQpKJxz9cXk_a-FxP0r46dVWI_gMvI2muFHItHKmg/viewform"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Download className="w-5 h-5 mr-3" />
                Responder ao Formulário 📥
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - IN PORTUGUESE */}
      <footer className="py-16 px-4 bg-gray-800 text-yellow-100">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Logo size="small" />
                <h3 className="text-xl vintage-heading">Hu's Your Teacher 📚</h3>
              </div>
              <p className="text-yellow-200 retro-text">
                Materiais gratuitos de aprendizado de inglês para todos, em todos os lugares. 🌍
              </p>
            </div>
            <div>
              <h4 className="vintage-heading mb-6">Links Rápidos 🔗</h4>
              <ul className="space-y-3 text-yellow-200 retro-text">
                <li>
                  <Link href="#materials" className="hover:text-yellow-100 transition-colors">
                    Materiais de Aprendizado 📚
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-yellow-100 transition-colors">
                    Sobre Nós 🌟
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-yellow-100 transition-colors">
                    Nossa Equipe 👨‍👩‍👧‍👦
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="vintage-heading mb-6">Contato 📞</h4>
              <p className="text-yellow-200 mb-3 retro-text">Perguntas ou sugestões? 💭</p>
              <p className="text-yellow-200 retro-text">husyouteacher@gmail.com 📧</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-yellow-200 retro-text">
            <p>
              &copy; {new Date().getFullYear()} Hu's Your Teacher. Feito com ❤️ para aprendizes em todos os lugares. 🌟
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
