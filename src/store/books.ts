import { type genre } from "../types/genre"
import { legacy_createStore  } from "redux";

// src/store/ducks/todos.ts — усе про задачі в одному місці

// === ТИПИ ===

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: genre;
  price: number;
}

export interface BookstoreState {
  books: Book[];
  filter: "all" | genre;
  sortOrder: "asc" | "desc";
}

// === ACTION TYPES ===

const BOOK_ADD = "books/add" as const
const BOOK_DELETE = "books/delete" as const
const BOOK_SET_FILTER = "books/setFilter" as const
const BOOKS_SORT = "books/sort" as const

// === ACTION CREATORS ===

export const bookActions = {
    add: (book : Book) => ({type: BOOK_ADD, payload: book }),
    delete: (id: number) => ({type: BOOK_DELETE, payload: id}),
    setFilter: (filter: "all" | genre) => ({type: BOOK_SET_FILTER, payload: filter}),
    sort: (status: "asc" | "desc") => ({type: BOOKS_SORT, payload: status})
}

export type BookAction = ReturnType<
  (typeof bookActions)[keyof typeof bookActions]
>;

// === REDUCER ===

let initialState: BookstoreState = {
    books: [ {id: -1, title: "Bravý vojak Švejk", author: "Jaroslav Hašek", year:1923, genre:"history", price: 10} ],  
    filter: "all",
    sortOrder: "asc"
} 

export const bookReducer = (state: BookstoreState = initialState, action: BookAction) => {
    switch (action.type) {
        case BOOK_ADD: {
            return {
                ...state,
                books: [...state.books, action.payload],
            }
        }
        case BOOK_DELETE: {
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
        }
        case BOOK_SET_FILTER: {
            return {
                ...state,
                filter: action.payload
            }
        }
        case BOOKS_SORT: {
            return {
                ...state,
                sortOrder: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export let store = legacy_createStore(bookReducer)

// === СЕЛЕКТОРИ (додатково) ===

export const selectCurrentBooks = (state: BookstoreState): Book[] => {
    const filteredBooks = state.filter === "all"
        ? state.books
        : state.books.filter(book => book.genre === state.filter)

    return [...filteredBooks].sort((a, b) => {
        return state.sortOrder === "asc"
            ? a.price - b.price
            : b.price - a.price
    })
}