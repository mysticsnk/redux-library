import { useDispatch } from "react-redux"
import { bookActions } from "../store/books"

export const BookSorter = () => {
    const dispatch = useDispatch()
    return <select onChange={(e) => dispatch(bookActions.sort(e.target.value as "asc" | "desc"))}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
    </select>
}

export default BookSorter