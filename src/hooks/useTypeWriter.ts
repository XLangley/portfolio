import { useEffect, useMemo, useState } from "react"

export function useTypewriter(
  phrases: string[],
  typingMs = 65,
  deletingMs = 35,
  holdMs = 1000
) {
  const list = useMemo(() => phrases, [phrases])
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = list[index % list.length]
    if (!deleting && text.length < current.length) {
      const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingMs)
      return () => clearTimeout(t)
    }
    if (!deleting && text.length === current.length) {
      const t = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(t)
    }
    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingMs)
      return () => clearTimeout(t)
    }
    if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % list.length)
    }
  }, [text, deleting, index, list, typingMs, deletingMs, holdMs])

  return text
}
