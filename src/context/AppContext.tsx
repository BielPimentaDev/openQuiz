import React, { createContext, useState } from "react";



export interface contextType {
    children: React.ReactNode
}

interface valueInterface{
    questionsLength: number,
    setQuestionsLength: React.Dispatch<React.SetStateAction<number>>,
    userPoints: number,
    setUserPoints: React.Dispatch<React.SetStateAction<number>>,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    category: string,
    setCategories: React.Dispatch<React.SetStateAction<[]>>,
    categories: [],

}

export const AppContext = createContext<valueInterface>({} as valueInterface)

export function AppContextProvider({children}:contextType){
    const [userPoints, setUserPoints] = useState<number>(0)
    const [questionsLength, setQuestionsLength] = useState<number>(0)
    const [category, setCategory] = useState<string>('biologia')
    const [categories, setCategories] = useState<[]>([])
    return(

        <AppContext.Provider value={{userPoints, setUserPoints, category, setCategory, categories, setCategories, questionsLength, setQuestionsLength}} >
        {children}
    </AppContext.Provider>
        )
}
