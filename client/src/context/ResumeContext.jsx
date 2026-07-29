import { createContext, useContext, useState } from "react";

const ResumeContext = createContext()

export const ResumeProvider = ({children})=> {

    const [report, setReport] = useState(null)
     const [loading, setLoading] = useState(false)

    return (
        <ResumeContext.Provider value={{report, setReport, loading, setLoading}}>
            {children}
        </ResumeContext.Provider>
    )
}

export const useResume = ()=> useContext(ResumeContext)