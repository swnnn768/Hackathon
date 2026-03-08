## Versions
- Next.js **16.1.6**
- React **19.2.3**
- TypeScript **5.x**
- TailwindCSS **4.x**
- Recharts **3.7.0**

## Pratiques utilisées
- Structure claire : `app/` (pages), `components/` (UI), `components/lib/` (data/types/scoring)
- TypeScript strict (types `Player` / `PlayerStats`)
- Composants réutilisables + responsive (grid/cards)
- Optimisation : `useMemo` (filtre + calculs), état minimal
- Favoris en `localStorage`
