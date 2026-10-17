import { useSelector } from "react-redux"
import { type BookstoreState } from "../store/books"

export const BookstoreStats = () => {
    const books = useSelector((state: BookstoreState) => state.books)

    return <div>
        <p>Books: {books.length}</p>
        <p>Average price: {(books.reduce((sum, book) => sum += book.price, 0)) / books.length}</p>
        <p>The biggest price: {(books.reduce((max, min) => max > min ? max : min)).price}</p>
    </div>
}

export default BookstoreStats