# Finanzas GT

App web (PWA) para gestionar los pagos mensuales de cada usuario en Guatemala. Fuente funcional: `docs/requerimientos.md`.

## Requisitos
Node 22+, pnpm 12.15.0 (`corepack enable` o `npm i -g pnpm`), Docker + Supabase CLI (a partir de M1).

## Comandos
| Comando | Qué hace |
|---|---|
| `pnpm install` | Instala dependencias (lockfile con versiones exactas) |
| `pnpm dev` | Servidor de desarrollo de `apps/web` |
| `pnpm check` | Formato + lint + tipos + pruebas con cobertura + build |

## Variables de entorno
Copia `.env.example` a `.env`. Nada de secretos en el repositorio.

## Despliegue (Cloudflare Pages)
- Build command: `pnpm install --frozen-lockfile && pnpm --filter @finanzas/web build`
- Output directory: `apps/web/dist`
- Variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- Cabeceras de seguridad: `apps/web/public/_headers`

## Estructura
`apps/web` · `packages/domain` (lógica financiera pura) · `packages/shared` · `supabase/` · `e2e/` · `docs/`
