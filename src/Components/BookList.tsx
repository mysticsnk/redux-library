import { useDispatch, useSelector } from "react-redux"
import { bookActions, selectCurrentBooks, type BookstoreState } from "../store/books"
import Book from "./Book"
import { useEffect, useRef } from "react"

export const BookList = () => {
    const state = useSelector((state: BookstoreState) => state)
    const books = selectCurrentBooks(state)
    const dispatch = useDispatch()
    let counter = useRef(0)

    useEffect(() => {
        dispatch(bookActions.setFilter("all"))
    }, [])


    return <ul>
        {books.map(book => <Book 
        id={book.id}
        key={counter.current++}
        title={book.title}
        author={book.author}
        year={book.year}
        genre={book.genre}
        price={book.price}
        />)}
    </ul>
}

export default BookList