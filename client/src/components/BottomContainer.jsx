import { useResume } from "../context/ResumeContext"


export default function BottomContainer() {
    const{report} = useResume()

    if(!report) return null

    return(
        <>
        <div className="m-5">

            <div className="border border-gray-400/20 rounded-md p-3">

            <h1 className="text-xl text-blue-500 mb-5">Final Verdict</h1>

           <p className="">{report.Analysis.finalVerdict.comment}</p>

            </div>
            
        </div>
        </>
    )
}