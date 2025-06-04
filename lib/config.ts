import {
  BookOpenText,
  Brain,
  Code,
  Lightbulb,
  Notepad,
  PaintBrush,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 56
export const AUTH_DAILY_MESSAGE_LIMIT = 1000
export const REMAINING_QUERY_ALERT_THRESHOLD = 26
export const DAILY_FILE_UPLOAD_LIMIT = 56
// @todo: remove this
export const DAILY_SPECIAL_AGENT_LIMIT = 56
export const DAILY_LIMIT_PRO_MODELS = 56

export const FREE_MODELS_IDS = [
  "gemini-2.5-flash-preview-05-20"
]

export const MODEL_DEFAULT = "gemini-2.5-flash-preview-05-20"

export const APP_NAME = "EMD"
export const APP_DOMAIN = "https://emd.chat"
export const APP_DESCRIPTION =
  "EMD is a free, open-source AI chat app with multi-model support."

export const SUGGESTIONS = [
  {
    label: "Résumé",
    highlight: "Résumer",
    prompt: `Résumer`,
    items: [
      "Résumer la Révolution française",
      "Résumer l'intrigue d'Inception",
      "Résumer la Seconde Guerre mondiale en 5 phrases",
      "Résumer les bienfaits de la méditation",
    ],
    icon: Notepad,
  },
  {
    label: "Code",
    highlight: "Aide-moi à",
    prompt: `Aide-moi à`,
    items: [
      "Aide-moi à écrire une fonction pour inverser une chaîne en JavaScript",
      "Aide-moi à créer une barre de navigation réactive en HTML/CSS",
      "Aide-moi à écrire une requête SQL pour trouver les e-mails en double",
      "Aide-moi à convertir cette fonction Python en JavaScript",
    ],
    icon: Code,
  },
  {
    label: "Conception",
    highlight: "Concevoir",
    prompt: `Concevoir`,
    items: [
      "Concevoir une palette de couleurs pour un blog tech",
      "Concevoir une checklist UX pour les applications mobiles",
      "Concevoir 5 excellentes paires de polices pour une page de destination",
      "Concevoir de meilleurs CTA avec des conseils utiles",
    ],
    icon: PaintBrush,
  },
  {
    label: "Recherche",
    highlight: "Rechercher",
    prompt: `Rechercher`,
    items: [
      "Rechercher les avantages et les inconvénients du travail à distance",
      "Rechercher les différences entre Apple Vision Pro et Meta Quest",
      "Rechercher les meilleures pratiques pour la sécurité des mots de passe",
      "Rechercher les dernières tendances en matière d'énergie renouvelable",
    ],
    icon: BookOpenText,
  },
  {
    label: "S'inspirer",
    highlight: "Inspire-moi",
    prompt: `Inspire-moi`,
    items: [
      "Inspire-moi avec une belle citation sur la créativité",
      "Inspire-moi avec une invite d'écriture sur la solitude",
      "Inspire-moi avec une façon poétique de commencer une newsletter",
      "Inspire-moi en décrivant une matinée paisible dans la nature",
    ],
    icon: Sparkle,
  },
  {
    label: "Réfléchir profondément",
    highlight: "Réfléchir à",
    prompt: `Réfléchir à`,
    items: [
      "Réfléchir à pourquoi nous craignons l'incertitude",
      "Réfléchir à ce qui rend une conversation significative",
      "Réfléchir au concept du temps de manière simple",
      "Réfléchir à ce que signifie vivre intentionnellement",
    ],
    icon: Brain,
  },
  {
    label: "Apprendre en douceur",
    highlight: "Expliquer",
    prompt: `Expliquer`,
    items: [
      "Expliquer la physique quantique comme si j'avais 10 ans",
      "Expliquer le stoïcisme en termes simples",
      "Expliquer comment fonctionne un réseau neuronal",
      "Expliquer la différence entre l'IA et l'AGI",
    ],
    icon: Lightbulb,
  },
]

export const SYSTEM_PROMPT_DEFAULT = `You are EMD, a thoughtful and clear assistant. Your tone is calm, minimal, and human. You write with intention—never too much, never too little. You avoid clichés, speak simply, and offer helpful, grounded answers. When needed, you ask good questions. You don’t try to impress—you aim to clarify. You may use metaphors if they bring clarity, but you stay sharp and sincere. You're here to help the user think clearly and move forward, not to overwhelm or overperform.`

export const MESSAGE_MAX_LENGTH = 4000

export const CURATED_AGENTS_SLUGS = [
  "github/ibelick/prompt-kit",
  "github/ibelick/emd",
  "github/shadcn/ui",
  "tweet-vibe-checker",
  "blog-draft",
]
