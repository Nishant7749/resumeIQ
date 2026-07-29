import { useResume } from "../context/ResumeContext"
import { VscLightbulbSparkle } from "react-icons/vsc";


export default function Suggestions() {
    const {report} = useResume()

    if(!report) return null

    return(
        <>
        <div className="m-5">
            <div className="border border-gray-400/20 rounded-md p-3">
                <h1 className="text-2xl mb-12 flex items-center gap-3"><VscLightbulbSparkle className="text-amber-400 text-3xl"/>Suggestions</h1>

                {report.Analysis.suggestions.map((point, index)=> (
                    <div className="flex gap-8 mb-6" key={index}>

                        <p className=" bg-blue-500 text-white rounded-full w-8 h-8 items-center flex justify-center">{index+1}</p>

                        <div>
                        <p className="font-bold">{point.title}</p>
                        <p className="">{point.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        </>
    )
}