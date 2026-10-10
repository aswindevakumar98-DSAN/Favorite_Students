# Campus Circle — Favourite Student List

A responsive React project demonstrating React Router, Context API, `useContext`, list rendering with `map()`, and conditional rendering.

## Features
- All Students and Favourites pages with client-side routing (`Link` / `NavLink`)
- Global favourites state using `createContext`, `useContext`, and `useState`
- Add and remove favourites instantly
- Duplicate prevention by student ID
- Search students and filter by course
- Empty state when no favourites exist
- Responsive, campus-inspired UI

## Run locally
1. Install Node.js (LTS).
2. Extract this project and open the folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Main structure
```text
src/
├── components/
│   ├── Layout.jsx
│   └── StudentCard.jsx
├── context/
│   └── StudentContext.jsx
├── data/
│   └── students.js
├── pages/
│   ├── FavouriteStudents.jsx
│   └── StudentList.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Learning notes
- `BrowserRouter`, `Routes`, and `Route` provide page routing.
- `NavLink` and `Link` navigate without a full page reload.
- `StudentProvider` wraps the app so both pages can access the same state.
- `addFavourite` checks IDs before adding; `removeFavourite` filters by ID.
- The demo data is held in memory, so favourites reset when the page is refreshed.
