import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'ko' || saved === 'en') return saved
  } catch {}
  return navigator.language?.startsWith('ko') === false ? 'en' : 'ko'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])

  // t({ ko: '...', en: '...' }) -> string for the current language
  const t = (entry) => (entry && typeof entry === 'object' && 'ko' in entry ? entry[lang] : entry)

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
