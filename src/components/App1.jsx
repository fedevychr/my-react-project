// src/components/App1.jsx

import BookList from './BookList/BookList';

const favoriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

// const favoriteBooks = [
//   { name: "JS for beginners" },
//   { name: "React basics" },
//   { name: "React Router overview" }
// ];

export default function App1() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favoriteBooks} />
    </>
  );
}
