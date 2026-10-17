import { useDispatch } from "react-redux";
import { type genre } from "../types/genre"
import { bookActions } from "../store/books";

interface BookProps {
    id: number,
    title: string;
    author: string;
    year: number;
    genre: genre;
    price: number;
}

export const Book = ({id, title, author, year, genre, price}: BookProps) => {
    const dispatch = useDispatch()
    return <div key={id}>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{year}</p>
        <b>{genre}</b>
        <p>{price}$</p>
        <button onClick={() => dispatch(bookActions.delete(id))}>Delete</button>
    </div>
}

export default Book