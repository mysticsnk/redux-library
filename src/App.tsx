import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import BookFilter from "./Components/BookFilter";
import BookSorter from "./Components/BookSorter";

export const App = () => {
  return <div>
    <BookForm/>
    <BookFilter/>
    <BookSorter/>
    <BookList/>
  </div>
};

export default App