import React, { createContext, useState } from "react";



export interface contextType {
    children: React.ReactNode
}

interface valueInterface{
    userPoints: number,
    setUserPoints: React.Dispatch<React.SetStateAction<number>>,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    category: string,

}

export const AppContext = createContext<valueInterface>({} as valueInterface)

export function AppContextProvider({children}:contextType){
    const [userPoints, setUserPoints] = useState<number>(0)
    const [category, setCategory] = useState<string>('biologia')
    return(

        <AppContext.Provider value={{userPoints, setUserPoints, category, setCategory}} >
        {children}
    </AppContext.Provider>
        )
}
