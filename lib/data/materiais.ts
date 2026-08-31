/**
 * Fonte única dos materiais de aprendizado.
 *
 * Antes esta lista vivia duplicada em `app/materiais/page.tsx` (completa) e em
 * `app/page.tsx` (uma amostra de 6 para a home). A amostra continua existindo —
 * é intencional, serve de vitrine —, mas agora sai daqui: marque `featured: true`
 * no material que deve aparecer na home.
 *
 * Para adicionar um material: ponha o PDF em `public/downloads/`, acrescente uma
 * entrada em `learningSheets` e use `downloadHref()` no href. O TypeScript recusa
 * categoria ou nível fora dos valores válidos.
 */

export type Level = 'Iniciante' | 'Intermediário' | 'Avançado'

export type Category =
  | 'Gramática'
  | 'Vocabulário'
  | 'Leitura'
  | 'Escrita'
  | 'Atividades'
  | 'Organização'

export type Material = {
  title: string
  description: string
  level: Level
  /** Emoji mostrado no card. */
  icon: string
  category: Category
  /** Caminho cru dentro de `public/`. Passe por `downloadHref()` antes de usar. */
  filePath: string
  /** Aparece na amostra da home. */
  featured?: boolean
}

/**
 * Vários nomes de arquivo têm espaço, vírgula e aspas — sem `encodeURI` o
 * download quebra. Use sempre esta função em vez de montar o href na mão.
 */
export function downloadHref(filePath: string): string {
  return encodeURI(filePath)
}

/** Opções da barra de filtros de /materiais. `Todos` não é uma categoria real. */
export const categories: ReadonlyArray<'Todos' | Category> = [
  'Todos',
  'Gramática',
  'Vocabulário',
  'Leitura',
  'Escrita',
  'Atividades',
  'Organização',
]

export const learningSheets: Material[] = [
  {
    title: "Welcome Activity",
    description: "Compartilhe um pouco de você com esta atividade de boas-vindas!",
    level: "Iniciante",
    icon: "🔤",
    category: "Atividades",
    filePath: "/downloads/Welcome Activity.pdf",
    featured: true,
  },
  {
    title: "Beginner Lesson",
    description: "Expressões básicas - cumprimentos e apresentações em inglês",
    level: "Iniciante",
    icon: "👋",
    category: "Atividades",
    filePath: "/downloads/Beginner Lesson.pdf",
    featured: true,
  },
  {
    title: "Animals",
    description: "Aprenda como nomear alguns animais em inglês.",
    level: "Iniciante",
    icon: "🐾",
    category: "Vocabulário",
    filePath: "/downloads/Animals.pdf",
    featured: true,
  },
  {
    title: "Animals Vocabulary",
    description: "Vocabulário e atividades sobre animais!",
    level: "Iniciante",
    icon: "🐾",
    category: "Vocabulário",
    filePath: "/downloads/Animals_vocabulary.pdf",
    featured: true,
  },
  {
    title: "Professions Exercise",
    description: "Atividades sobre profissões em inglês",
    level: "Iniciante",
    icon: "👩‍⚕️",
    category: "Atividades",
    filePath: "/downloads/Professions Exercise.pdf",
    featured: true,
  },
  {
    title: "Verb \"To Be\"",
    description: "Regras gramaticais para o verbo \"to be\" ",
    level: "Iniciante",
    icon: "📝",
    category: "Gramática",
    filePath: "/downloads/Verb to be.pdf",
    featured: true,
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
    filePath: "/downloads/verb_to_do.pdf"
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
    title: "Verb \"To Like\" - introduction",
    description: "Uma introdução ao verbo \"to like\" e suas regras gramaticais",
    level: "Iniciante",
    icon: "❓",
    category: "Gramática",
    filePath: "/downloads/Verb ''To Like''.pdf"
  },
  {
    title: "Verb \"To Like\"",
    description: "Regras gramaticais para o verbo \"to like\" e suas contrações",
    level: "Iniciante",
    icon: "❓",
    category: "Gramática",
    filePath: "/downloads/Verbo To Like.pdf"
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
    title: "Present Perfect - introduction",
    description: "Uma introdução ao tempo verbal Present Perfect e suas regras gramaticais",
    level: "Iniciante",
    icon: "🕰️",
    category: "Gramática",
    filePath: "/downloads/Present Perfect - intro.pdf"
  },
      {
    title: "Present Perfect",
    description: "Regras gramaticais para o tempo verbal Present Perfect",
    level: "Iniciante",
    icon: "🕰️",
    category: "Gramática",
    filePath: "/downloads/Present Perfect.pdf"
  },
      {
    title: "Present Perfect Lesson",
    description: "Resumo sobre o tempo verbal Present Perfect e atividades propostas!",
    level: "Iniciante",
    icon: "🕰️",
    category: "Gramática",
    filePath: "/downloads/Present Perfect Lesson.pdf"
  },
  {
    title: "Present Perfect Practice",
    description: "Pratique o que você aprendeu na última aula",
    level: "Iniciante",
    icon: "🕰️",
    category: "Atividades",
    filePath: "/downloads/Present Perfect Practice.pdf"
  },
  {
    title: "Present Perfect X Present Perfect Continuous",
    description: "Comparação entre os tempos verbais Present Perfect e Present Perfect Continuous",
    level: "Iniciante",
    icon: "🕰️",
    category: "Gramática",
    filePath: "/downloads/present perfect x present perfect continous.pdf"
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
  {
    title: "Slang and Abbreviations",
    description: "Expressões idiomáticas e abreviações comuns!",
    level: "Iniciante",
    icon: "🗣️",
    category: "Vocabulário",
    filePath: "/downloads/Slang_Abbreviations.pdf"
  },
  {
    title: "Vacation Vocabulary",
    description: "Vocabulário sobre viagens e férias",
    level: "Iniciante",
    icon: "🗣️",
    category: "Vocabulário",
    filePath: "/downloads/Vacation Vocabulary.pdf"
  },
  {
    title: "Action Verbs",
    description: "Vocabulário sobre verbos de ação",
    level: "Iniciante",
    icon: "🏃",
    category: "Vocabulário",
    filePath: "/downloads/Action Verbs.pdf"
  },
  {
    title: "Professions Around Us",
    description: "Vocabulário sobre profissões comuns",
    level: "Iniciante",
    icon: "👩‍⚕️",
    category: "Vocabulário",
    filePath: "/downloads/Professions Around Us.pdf"
  },
  {
    title: "Study Planner - Horizontal",
    description: "Plano de estudo horizontal para organizar seu tempo de aprendizado",
    level: "Iniciante",
    icon: "🗓️",
    category: "Organização",
    filePath: "/downloads/study planner horizontal.pdf"
  },
  {
    title: "Study Planner - Vertical",
    description: "Plano de estudo vertical para organizar seu tempo de aprendizado",
    level: "Iniciante",
    icon: "🗓️",
    category: "Organização",
    filePath: "/downloads/study planner vertical.pdf"
  },
  {
    title: "Read, Think & React",
    description: "Atividade de interpretação de texto",
    level: "Iniciante",
    icon: "🗓️",
    category: "Atividades",
    filePath: "/downloads/Read, Think & React.pdf"
  },
  {
    title: "Environment and Sustainability",
    description: "Vocabulário sobre o meio ambiente e a sustentabilidade",
    level: "Iniciante",
    icon: "🌱",
    category: "Vocabulário",
    filePath: "/downloads/Environment and Sustainability.pdf"
  },
  {
    title: "Family Vocabulary",
    description: "Vocabulário sobre a família",
    level: "Iniciante",
    icon: "👨‍👩‍👧‍👦",
    category: "Vocabulário",
    filePath: "/downloads/Family Vocabulary.pdf"
  },
  {
    title: "Modal Verbs",
    description: "Regras gramaticais para os verbos modais em inglês",
    level: "Iniciante",
    icon: "📝",
    category: "Gramática",
    filePath: "/downloads/Modal Verbs.pdf"
  },
  {
    title: "Homework 1",
    description: "Exercício de casa de volta às aulas!",
    level: "Iniciante",
    icon: "📝",
    category: "Atividades",
    filePath: "/downloads/Homework_1.pdf"
  },


];

/** A amostra que a home exibe. Controlada pelo `featured` de cada material. */
export const featuredSheets: Material[] = learningSheets.filter((sheet) => sheet.featured)
