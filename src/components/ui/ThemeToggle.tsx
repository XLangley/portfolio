import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../hooks/useTheme"

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { tema, alternar } = useTheme()
  const esOscuro = tema === "dark"

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={esOscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={esOscuro ? "Tema claro" : "Tema oscuro"}
      data-augmented-ui="tl-clip br-clip border"
      className={`brillo inline-flex h-9 w-9 items-center justify-center text-humo transition-colors hover:text-verde [--aug-border-all:1px] [--aug-border-bg:var(--color-linea)] [--aug-br:6px] [--aug-tl:6px] hover:[--aug-border-bg:var(--color-verde)] ${className}`}
    >
      {esOscuro ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  )
}
