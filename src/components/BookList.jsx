// src/components/BookList.jsx

export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

// export const BookList = ({ books }) => (
//   <ul>
// 		{books.map((book, index) => {
// 			return <li key={index}>{book.name}</li>;
// 		})}
//   </ul>
// );