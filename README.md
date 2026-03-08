<<<<<<< HEAD
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
=======
# FootStats

App Next.js (TypeScript) pour **rechercher** et **comparer 2 joueurs de foot** à partir de leurs stats (vitesse, tir, passe, dribble, physique, défense) et afficher le **meilleur** via un score pondéré.

## Fonctionnalités
- Recherche de joueurs
- Comparaison 2 joueurs (score + radar chart)
- Profil joueur
- Favoris (localStorage)

## Installation
```bash
git clone https://github.com/swnnn768/Hackathon.git
cd Hackathon/footstats
npm install
npm run dev
>>>>>>> 68e2048dcbfa0bdea1f5373f61ea2ff6b690741b
