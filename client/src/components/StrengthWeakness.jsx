import { useResume } from "../context/ResumeContext"
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdError } from "react-icons/md";


export default function StrengthWeakness() {
    const {report} = useResume()

    if(!report) return null

    return(
        <>
        <div className="m-5 flex gap-4">

            <div className="border border-gray-400/20 rounded-md p-3 w-1/2">
                <h1 className="text-green-500 text-xl mb-3">Strengths</h1>

                {report.Analysis.summary.strengths.map((strength, index)=> (
                    <div className="flex items-center gap-3" key={index}>
                        <IoCheckmarkCircle className="text-green-500 text-lg"/>
                        <p className="my-2">{strength}</p>
                    </div>
                ))}
            </div>


            <div className="border border-gray-400/20 rounded-md p-3 w-1/2">
                <h1 className="text-red-500 text-xl mb-3">Weakness</h1>

                {report.Analysis.summary.weaknesses.map((weakness, index)=> (
                    <div className="flex items-center gap-3" key={index}>
                        <MdError className="text-red-500 text-lg"/>
                        <p className="my-2">{weakness}</p>
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}