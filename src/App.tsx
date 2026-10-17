import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import BookFilter from "./Components/BookFilter";
import BookSorter from "./Components/BookSorter";
import BookstoreStats from "./Components/BookstoreStats";

export const App = () => {
  return <div>
    <BookForm/>
    <BookFilter/>
    <BookSorter/>
    <BookstoreStats/>
    <BookList/>
  </div>
};

export default App