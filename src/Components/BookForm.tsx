import { useRef, useState } from "react"
import { type genre, genres } from "../types/genre"
import { useDispatch } from "react-redux"
import { bookActions} from "../store/books"

export const BookForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState<number>()
    const [genre, setGenre] = useState<genre>("fiction")
    const [price, setPrice] = useState<number>()

    const idCounter = useRef(0)

    const dispatch = useDispatch()

    const submitForm = () => {
        if (title !== "" &&
            author !== "" &&
            year !== undefined &&
            price !== undefined
        )
        dispatch(bookActions.add({id: idCounter.current++, title, author, year, genre, price}))
        setTitle("")
        setAuthor("")
        setYear(undefined)
        setGenre("fiction")
        setPrice(undefined)
    }

    return <div>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="number" placeholder="Year" name="year" id="year" value={year ?? ""} onChange={(e) => setYear(+e.target.value)}/>
        <select value={genre} onChange={(e) => setGenre(e.target.value as genre)}>
            {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
        <input type="number" placeholder="Price" name="price" id="price" value={price ?? ""} onChange={(e) => setPrice(+e.target.value)}/>
        <button type="submit" onClick={submitForm}>Add book</button>
    </div>
}

export default BookForm