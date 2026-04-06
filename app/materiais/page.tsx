"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function MateriaisPage() {
  const [downloads, setDownloads] = useState<Record<string, number>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
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
      category: "Atividades",
      filePath: "/downloads/Welcome Activity.pdf"
    },
    {
      title: "Beginner Lesson",
      description: "Expressões básicas - cumprimentos e apresentações em inglês",
      level: "Iniciante",
      icon: "👋",
      category: "Atividades",
      filePath: "/downloads/Beginner Lesson.pdf"
    },
    {
      title: "Animals",
      description: "Aprenda como nomear alguns animais em inglês.",
      level: "Iniciante",
      icon: "🐾",
      category: "Vocabulário",
      filePath: "/downloads/Animals.pdf"
    },
    {
      title: "Animals Vocabulary",
      description: "Vocabulário e atividades sobre animais!",
      level: "Iniciante",
      icon: "🐾",
      category: "Vocabulário",
      filePath: "/downloads/Animals_vocabulary.pdf"
    },
    {
      title: "Professions Exercise",
      description: "Atividades sobre profissões em inglês",
      level: "Iniciante",
      icon: "👩‍⚕️",
      category: "Atividades",
      filePath: "/downloads/Professions Exercise.pdf"
    },
    {
      title: "Verb \"To Be\"",
      description: "Regras gramaticais para o verbo \"to be\" ",
      level: "Iniciante",
      icon: "📝",
      category: "Gramática",
      filePath: "/downloads/Verb to be.pdf"
    },
    {
      title: "O que é o verbo \"to be\"?",
      description: "Explicação detalhada sobre o verbo \"to be\" e seus usos em inglês",
      level: "Iniciante",
      icon: "📝",
      category: "Gramática",
      filePath: "/downloads/O que é o verbo to be.pdf"
    },
    {
      title: "Practice Verb \"To Be\"",
      description: "Pratique o que você aprendeu na última aula! ",
      level: "Iniciante",
      icon: "📖",
      category: "Atividades",
      filePath: "/downloads/Practice Verb to be.pdf"
    },
    {
      title: "Classroom Vocabulary",
      description: "Vocabulário sobre sala de aula",
      level: "Iniciante",
      icon: "🗣️",
      category: "Vocabulário",
      filePath: "/downloads/Classroom Vocabulary.pdf"
    },
    {
      title: "Classroom Vocabulary Lesson",
      description: "Resumo sobre vocabulário sobre sala de aula e atividades propostas!",
      level: "Iniciante",
      icon: "🗣️",
      category: "Vocabulário",
      filePath: "/downloads/Classroom Vocabulary Lesson.pdf"
    },
    {
      title: "Classroom Vocabulary Activity",
      description: "Outra atividade sobre vocabulário de sala de aula!",
      level: "Iniciante",
      icon: "🗣️",
      category: "Atividades",
      filePath: "/downloads/Classroom Vocabulary Activity.pdf"
    },
    {
      title: "Resolutions",
      description: "Destaque o que você aprendeu nas últimas aulas e o que foi difícil!",
      level: "Iniciante",
      icon: "✏️",
      category: "Atividades",
      filePath: "/downloads/Resolutions.pdf"
    },
    {
      title: "Simple Present - introduction",
      description: "Uma introdução ao tempo verbal Simple Present e suas regras gramaticais",
      level: "Iniciante",
      icon: "⏰",
      category: "Gramática",
      filePath: "/downloads/Simple Present - intro.pdf"
    },
    {
      title: "Simple Present",
      description: "Regras gramaticais para o tempo verbal Simple Present",
      level: "Iniciante",
      icon: "⏰",
      category: "Gramática",
      filePath: "/downloads/Simple Present.pdf"
    },
    {
      title: "Simple Present Lesson",
      description: "Resumo sobre o tempo verbal Simple Present e atividades propostas!",
      level: "Iniciante",
      icon: "⏰",
      category: "Gramática",
      filePath: "/downloads/Simple Present Lesson.pdf"
    },
    {
      title: "Simple Present Practice",
      description: "Outra atividade para praticar o Simple Present",
      level: "Iniciante",
      icon: "⏰",
      category: "Atividades",
      filePath: "/downloads/Simple Present Practice.pdf"
    },
    {
      title: "Do, Does & Did",
      description: "Aprenda as diferenças entre \"do\", \"does\" e \"did\"",
      level: "Iniciante",
      icon: "❓",
      category: "Gramática",
      filePath: "/downloads/Do Does Did.pdf"
    },
    {
      title: "Verb \"To Do\"",
      description: "Regras gramaticais para o verb \"to do\" e suas contrações",
      level: "Iniciante",
      icon: "❓",
      category: "Gramática",
      filePath: "/downloads/Verb To Do.pdf"
    },
    {
      title: "Verb \"To Do\" Practice ",
      description: "Pratique a colocação do verb \"to do\" e suas contrações",
      level: "Iniciante",
      icon: "❓",
      category: "Gramática",
      filePath: "/downloads/Verb To Do Practice.pdf"
    },

    {
      title: "Antonyms Lesson",
      description: "Aprenda sobre antônimos em inglês",
      level: "Iniciante",
      icon: "❌",
      category: "Vocabulário",
      filePath: "/downloads/Antonyms Lesson.pdf"
    },
    {
      title: "Antonyms Practice",
      description: "Atividade sobre antônimos em inglês",
      level: "Iniciante",
      icon: "❌",
      category: "Atividades",
      filePath: "/downloads/Antonyms Practice.pdf"
    },
    {
      title: "Verb \"To Like\"",
      description: "Regras gramaticais referentes ao verb \"to like\"",
      level: "Iniciante",
      icon: "❓",
      category: "Gramática",
      filePath: "/downloads/Verb ''To Like''.pdf"
    },
    {
      title: "Progress Check",
      description: "Complete esta atividade para avaliar o quanto você aprendeu até agora! Não hesite em nos mandá-la para corrigirmos  😉",
      level: "Iniciante",
      icon: "💡",
      category: "Atividades",
      filePath: "/downloads/Progress Check.pdf"
    },
    {
      title: "Past Simple",
      description: "Regras gramaticais para o tempo verbal Past Simple",
      level: "Iniciante",
      icon: "📅",
      category: "Gramática",
      filePath: "/downloads/Past Simple.pdf"
    },
    {
      title: "Past Simple Practice",
      description: "Pratique o que você aprendeu na última aula",
      level: "Iniciante",
      icon: "🕰️",
      category: "Gramática",
      filePath: "/downloads/Past Simple Practice.pdf"
    },
    {
      title: "Past Simple Practice 2",
      description: "Pratique a colocação de verbos no Past Simple",
      level: "Iniciante",
      icon: "🕰️",
      category: "Gramática",
      filePath: "/downloads/Past Simple Practice 2.pdf"
    },
    {
      title: "Present Perfect ",
      description: "Regras gramaticais para o tempo verbal Present Perfect",
      level: "Iniciante",
      icon: "🕰️",
      category: "Gramática",
      filePath: "/downloads/Present Perfect.pdf"
    },
    {
      title: "Present Perfect Practice",
      description: "Pratique o que você aprendeu na última aula",
      level: "Iniciante",
      icon: "🕰️",
      category: "Gramática",
      filePath: "/downloads/Present Perfect Practice.pdf"
    },
    {
      title: "Past Simple Vs Present Perfect",
      description: "Comparação entre os tempos verbais Past Simple e Present Perfect",
      level: "Iniciante",
      icon: "🕰️",
      category: "Gramática",
      filePath: "/downloads/Past Simple Vs Present Perfect.pdf"
    },
    {
      title: "Reading Comprehension",
      description: "Atividade de compreensão de leitura em inglês",
      level: "Iniciante",
      icon: "📚",
      category: "Leitura",
      filePath: "/downloads/Reading Comprehension.pdf"
    },
    {
      title: "Interpretation of a Text",
      description: "Interprete o texto fornecido e responda às perguntas relacionadas a ele!",
      level: "Iniciante",
      icon: "📚",
      category: "Atividades",
      filePath: "/downloads/Interpretation.pdf"
    },
    {
      title: "Verb Tenses Review",
      description: "Revise o quanto você aprendeu sobre tempos verbais até agora!",
      level: "Iniciante",
      icon: "✍️",
      category: "Gramática",
      filePath: "/downloads/Verb Tenses Review.pdf"
    },
    {
      title: "Creative Writing",
      description: "Produção de texto com os tempos verbais que aprendemos até agora",
      level: "Iniciante",
      icon: "✍️",
      category: "Escrita",
      filePath: "/downloads/Creative Writing.pdf"
    },
    {
      title: "Food Idioms",
      description: "Expressões idiomáticas sobre comida",
      level: "Iniciante",
      icon: "🍔",
      category: "Vocabulário",
      filePath: "/downloads/Food Idioms.pdf"
    },
    {
      title: "Food Vocabulary",
      description: "Vocabulário sobre comida",
      level: "Iniciante",
      icon: "🍔",
      category: "Vocabulário",
      filePath: "/downloads/Food Vocabulary.pdf"
    },
    {
      title: "Personality Adjectives",
      description: "Vocabulário sobre adjetivos de personalidade",
      level: "Iniciante",
      icon: "😎",
      category: "Vocabulário",
      filePath: "/downloads/Personality Adjectives.pdf"
    },
    {
      title: "Emotional Adjectives",
      description: "Vocabulário sobre adjetivos que descrevem emoções",
      level: "Iniciante",
      icon: "😢",
      category: "Vocabulário",
      filePath: "/downloads/Emotional Adjectives.pdf"
    },
    {
      title: "Reading Comprehension 2",
      description: "Mais uma atividade de compreensão de leitura!",
      level: "Iniciante",
      icon: "📚",
      category: "Leitura",
      filePath: "/downloads/Reading Comprehension 2.pdf"
    },
    {
      title: "Creative Writing 2",
      description: "Produção textual com os Personality e Emotional Adjectives que aprendemos nas últimas aulas",
      level: "Iniciante",
      icon: "✍️",
      category: "Escrita",
      filePath: "/downloads/Creative Writing 2.pdf"
    },
    {
      title: "Grammatical Class",
      description: "Identifique a classe gramatical das palavras fornecidas!",
      level: "Iniciante",
      icon: "🔤",
      category: "Gramática",
      filePath: "/downloads/Grammatical Class.pdf"
    },
    {
      title: "Seasons Vocabulary",
      description: "Vocabulário sobre o inverno e o verão",
      level: "Iniciante",
      icon: "🌞",
      category: "Vocabulário",
      filePath: "/downloads/Seasons Vocabulary.pdf"
    },
    {
      title: "Present Perfect Continuous",
      description: "Regras gramaticais para o tempo verbal Present Perfect Continuous",
      level: "Iniciante",
      icon: "⏰",
      category: "Gramática",
      filePath: "/downloads/Present Perfect Continuous.pdf"
    },
    {
      title: "Reading Comprehension 3",
      description: "Outra atividade de compreensão de leitura!",
      level: "Iniciante",
      icon: "📚",
      category: "Leitura",
      filePath: "/downloads/Reading Comprehension 3.pdf"
    },
    {
      title: "Reading Comprehension 4",
      description: "Mais uma atividade de compreensão de leitura!",
      level: "Iniciante",
      icon: "📚",
      category: "Leitura",
      filePath: "/downloads/Reading Comprehension 4.pdf"
    },
    {
      title: "Practice Daily Vocabulary",
      description: "Palavras essenciais e úteis para uso cotidiano!",
      level: "Iniciante",
      icon: "🗣️",
      category: "Vocabulário",
      filePath: "/downloads/Practice Daily Vocabulary.pdf"
    },

  ];

  const categories = ["Todos", "Gramática", "Vocabulário", "Leitura", "Escrita", "Atividades"];

  const filteredSheets = learningSheets.filter(sheet => {
    const matchesSearch = sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sheet.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || sheet.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors retro-text">
              Início 🏠
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-pink-600 transition-colors retro-text">
              Sobre 🌟
            </Link>
            <Link href="/#team" className="text-gray-700 hover:text-pink-600 transition-colors retro-text">
              Equipe 👨‍👩‍👧‍👦
            </Link>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <section className="py-8 px-4 bg-green-50/60">
        <div className="container mx-auto max-w-6xl">
          <Button variant="outline" asChild className="border-pink-400 text-pink-700 hover:bg-pink-50 retro-text">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Início
            </Link>
          </Button>
        </div>
      </section>

      {/* All Materials Section */}
      <section className="py-16 px-4 bg-green-50/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl vintage-heading mb-6 text-gray-800">Todos os Materiais 📚</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto retro-text">
              Aqui você encontra todos os materiais de aprendizado disponíveis. Baixe, imprima e comece a aprender hoje! 🌟
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Buscar materiais..." 
                className="pl-10 bg-white/80 border-pink-300 focus:border-pink-500 focus:ring-pink-200 retro-text text-lg h-12 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`retro-text rounded-full ${
                    selectedCategory === category 
                      ? "bg-pink-500 hover:bg-pink-600 text-white border-pink-500" 
                      : "bg-white/50 text-gray-700 border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSheets.length > 0 ? (
              filteredSheets.map((sheet, index) => (
                <Card
                  key={index}
                  className="vintage-card scrapbook-tape hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs bg-cream-200 text-gray-700 retro-text">
                          {sheet.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-pink-300 text-pink-600 retro-text">
                          {sheet.category}
                        </Badge>
                      </div>
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500 retro-text">Nenhum material encontrado... 😢</p>
                <Button 
                  variant="link" 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("Todos")}}
                  className="text-pink-500 hover:text-pink-700 retro-text"
                >
                  Limpar filtros
                </Button>
              </div>
            )}
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

      {/* Footer */}
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
                  <Link href="/" className="hover:text-yellow-100 transition-colors">
                    Início 🏠
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-yellow-100 transition-colors">
                    Sobre Nós 🌟
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="hover:text-yellow-100 transition-colors">
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
