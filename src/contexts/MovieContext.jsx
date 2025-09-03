import {createContext,useContext,useState,useEffect, Children} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({Children}) => {

    return <MovieContext.Provider>
        {Children}
    </MovieContext.Provider>
}