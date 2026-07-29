import { BsPersonBoundingBox } from "react-icons/bs";
import { useResume } from "../context/ResumeContext";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Info() {
    const { report } = useResume()

    if (!report) {
        return null
    }


    return (
        <>
            <div className="flex items-center gap-3 m-5">

                <div className="border border-gray-400/20 rounded-md p-3">
                    <h1 className="font-bold flex gap-3 items-center"><BsPersonBoundingBox className="text-blue-500 text-lg" /> Candidate Information</h1>

                    <div className="flex gap-6 mt-5">
                        <p className="text-gray-400">Name</p>
                        <p>{report.Analysis.candidate.name}</p>
                    </div>

                    <div className="flex gap-6 mt-5">
                        <p className="text-gray-400">Phone</p>
                        <p>{report.Analysis.candidate.phone}</p>
                    </div>

                    <div className="flex gap-6 mt-5">
                        <p className="text-gray-400">Email</p>
                        <p>{report.Analysis.candidate.email}</p>
                    </div>

                    <div className="flex gap-6 mt-5">
                        <p className="text-gray-400">Job Role</p>
                        <p>{report.Analysis.candidate.targetRole}</p>
                    </div>

                </div>


                <div className="border border-gray-400/20 rounded-md p-3 w-full">


                    <div className="flex items-center justify-center gap-40 h-50">
                        <div className="w-40 flex flex-col items-center gap-4">
                            <h1 className="font-bold text-2xl">ATS Score</h1>

                            <CircularProgressbarWithChildren value={report.Analysis.atsScore} strokeWidth={10} styles={buildStyles({
                                pathColor: "#3B82F6",
                                trailColor: "#E5E7EB",
                                strokeLinecap: "round",
                                pathTransitionDuration: 1.5,
                            })} >
                                <div className="flex items-center justify-center">
                                    <h1 className="font-bold text-4xl flex flex-col items-center">{report.Analysis.atsScore} <span className="text-xs text-gray-500">/100</span></h1>
                                </div>
                            </CircularProgressbarWithChildren>

                        </div>

                        <div className="w-40 flex flex-col items-center gap-4">
                            <h1 className="font-bold text-2xl">Overall Score</h1>

                            <CircularProgressbarWithChildren value={report.Analysis.overallScore} strokeWidth={10} styles={buildStyles({
                                pathColor: "#3B82F6",
                                trailColor: "#E5E7EB",
                                strokeLinecap: "round",
                                pathTransitionDuration: 1.5,
                            })} >
                                <div className="flex items-center justify-center">
                                    <h1 className="font-bold text-4xl flex flex-col items-center">{report.Analysis.overallScore} <span className="text-xs text-gray-500">/100</span></h1>
                                </div>
                            </CircularProgressbarWithChildren>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}