/**
 * Constantes do site. Tudo que aparece em mais de um lugar mora aqui, para não
 * existir duas versões de um mesmo link — trocar o formulário do Google ou o
 * e-mail de contato deve ser uma edição só.
 */

/** URL pública. Usada pelo sitemap, pelo robots e pelo `metadataBase`. */
export const BASE_URL = 'https://husyourteacher.vercel.app'

export const CONTATO = {
  email: 'husyouteacher@gmail.com',
  instagram: 'https://www.instagram.com/husyourteacher/',
  instagramHandle: '@husyourteacher',
} as const

/** Inscrições — formulários externos do Google, sem backend próprio. */
export const FORMULARIOS = {
  aluno:
    'https://docs.google.com/forms/d/e/1FAIpQLSeJM1BoAyCr5NuawsJ2AjjfUFKD5tkrsmQchaevWiBb1WRG8A/viewform',
  voluntario:
    'https://docs.google.com/forms/d/e/1FAIpQLSf7qeD9KsP0qAl9fdqdXLcitEkQS1EIa0GrbkTm8gMkKOIJnw/viewform',
} as const

/** Props obrigatórias em todo link externo. */
export const LINK_EXTERNO = {
  target: '_blank',
  rel: 'noreferrer noopener',
} as const
