import { useDispatch } from "react-redux"
import { type genre, genres } from "../types/genre"
import { bookActions } from "../store/books"

export const BookFilter = () => {
    let dispatch = useDispatch()
    return <select onChange={(e) => dispatch(bookActions.setFilter(e.target.value as genre))}>
        <option key={"all"} value={"all"}>all</option>
        {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
    </select>
}

export default BookFilter