# Hu's Your Teacher

> Hu cares? We do.

Site do **Hu's Your Teacher**, um projeto sem fins lucrativos que democratiza o acesso ao
aprendizado de inglês. Tudo aqui é gratuito: sem cadastro, sem paywall, sem plano premium.

🌐 **[husyourteacher.vercel.app](https://husyourteacher.vercel.app)**

O projeto começou em 2022, numa sala de igreja em São Paulo, com aulas presenciais e gratuitas
aos sábados. Quando manter as aulas presenciais deixou de ser possível, o material virou este
site — para continuar chegando aos alunos e alcançar quem nunca teria entrado naquela sala.

## O que o site faz

1. **Distribui materiais** — 60 PDFs de gramática, vocabulário, leitura, escrita, atividades e
   planners, livres para baixar.
2. **Conta a história do projeto** — missão, conquistas e a equipe por trás dele.
3. **Capta pessoas** — inscrição de alunos nas aulas online ao vivo e de voluntários.

## Rodando localmente

Requer Node.js 20+ e npm.

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:3000`.

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (roda checagem de tipos) |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

**Antes de abrir um PR, rode `npm run lint` e `npm run typecheck`.** Os dois passam limpos hoje.

## Stack

Next.js 16 (App Router) · React 18 · TypeScript · Tailwind CSS 3.4 · shadcn/ui · Vercel

Todas as rotas são estáticas, prerenderizadas no build. Não há banco de dados nem CMS — o
conteúdo é TypeScript tipado em `lib/data/`.

> O `package.json` tem **12 dependências** e a ideia é que continue assim. Antes de instalar
> algo, veja se dá para resolver com o que já existe.

## Estrutura

```
app/                    rotas (App Router)
  page.tsx              /
  materiais/            /materiais
  sobre/                /sobre
  membros/              /membros
  voluntariado/         /voluntariado
  not-found.tsx         404
components/             componentes compartilhados
  ui/                   shadcn — só badge, button, card, input e sheet
lib/
  data/                 todo o conteúdo do site
  site.ts               URL base, formulários e contato
public/
  downloads/            os PDFs
  members/              fotos da equipe
```

## Adicionando um material

1. Coloque o PDF em `public/downloads/` — **comprimido**, por favor (veja Assets abaixo).
2. Adicione uma entrada em `learningSheets`, em [`lib/data/materiais.ts`](lib/data/materiais.ts):

   ```ts
   {
     title: "Nome do Material",
     description: "Descrição em português",
     level: "Iniciante",
     icon: "📝",
     category: "Gramática",
     filePath: "/downloads/Nome do Material.pdf",
   }
   ```

3. `level` e `category` são uniões de tipo — o `npm run typecheck` recusa valor inválido.
   Categorias válidas: `Gramática`, `Vocabulário`, `Leitura`, `Escrita`, `Atividades`,
   `Organização`.
4. Para o material aparecer na vitrine da home, acrescente `featured: true`. Não há mais nada
   para editar em outro arquivo.

Nomes de arquivo com espaço, vírgula ou aspas funcionam: o `href` passa por `downloadHref()`,
do mesmo módulo, que cuida do `encodeURI`.

## Assets

`public/downloads/` soma ~74 MB e `public/videos/depoimento.mp4` tem 88 MB. **Comprima antes de
adicionar mais** — o repositório e cada deploy carregam esse peso:

```bash
ffmpeg -i entrada.mp4 -vf scale=-2:720 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k saida.mp4
```

Imagens vão pelo `next/image`, então o `src` **não pode ter query string** (`/foto.jpg?w=100`
quebra o build). Use o caminho limpo.

## Como ajudar

- **Quer dar aula ou criar material?** Temos vagas em Teaching, Curriculum Development,
  Communication & Marketing e Community Engagement — veja
  [/voluntariado](https://husyourteacher.vercel.app/voluntariado).
- **Quer estudar com a gente?** As aulas online são gratuitas e ao vivo. A inscrição está
  na [home](https://husyourteacher.vercel.app).
- **Achou um bug ou tem uma ideia para o site?** Abra uma issue.

## Contato

📧 husyouteacher@gmail.com · 📸 [@husyourteacher](https://www.instagram.com/husyourteacher/)

---

Feito com ❤️ por três primos e uma equipe de voluntários.
