import Upload from "../components/Upload"
import resume from "../assets/resume-svg.svg"
import { BiTargetLock } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";

export default function Home() {

    return (
        <>
            <div className="font-space flex items-center justify-between m-10">
                <div>
                    <div>
                        <h1 className="text-5xl font-semibold">Find the <span className="text-blue-500">right</span> path</h1>
                        <h1 className="text-5xl font-semibold mb-8">for your <span className="text-blue-500">career</span>.</h1>

                        <p>Upload your resume, select your job role and get AI-powered insight <br /> and analysis to improve for free</p>
                    </div>

                    <div className="flex ml-15 mt-8">
                        <Upload />
                    </div>

                </div>


                <div className="mr-10">
                    <img className="w-132 h-108" src={resume} alt="resume-svg" />

                    <div className="flex flex-col gap-8 ml-10">
                        <div className="flex gap-3">
                            <BiTargetLock className=" bg-blue-200 rounded-lg w-10 h-10 p-2 text-blue-600"/>
                            <div>
                                <p className="text-lg font-semibold">Target Analysis</p>
                                <p className="text-sm">Get tailored insights based on your job role</p>
                            </div>
                            
                        </div>
                        <div className="flex gap-3">
                            <BsGraphUpArrow className=" bg-blue-200 rounded-lg w-10 h-10 p-2 text-blue-600"/>
                            <div>
                                <p className="text-lg font-semibold">Improve & Advance</p>
                                <p className="text-sm">Optimize your resume & stand out to recruiters</p>
                            </div>
                            
                        </div>
                        <div className="flex gap-3">
                            <BsBarChartLine className=" bg-blue-200 rounded-lg w-10 h-10 p-2 text-blue-600"/>
                            <div>
                                <p className="text-lg font-semibold">AI-powered Insights</p>
                                <p className="text-sm">Identify strengths, gaps & oppurtunities</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}