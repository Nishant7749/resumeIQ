import { LiaSuitcaseSolid } from "react-icons/lia";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import { postResume } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useResume } from "../context/ResumeContext";


export default function Upload() {
    const [file, setFile] = useState("")
    const [role, setRole] = useState(null)
    const navigate = useNavigate()
    const { setReport, setLoading } = useResume()

    const handleUpload = async () => {
        setLoading(true)
        navigate('/dashboard')

        try {
            const data = await postResume(file, role)
            setReport(data)

        } catch (error) {
            console.log(error.messag)
        }
        finally {
            setLoading(false)
        }

    }



    return (
        <>
            <div className="font-space w-full">
                <div className="flex gap-8 flex-col rounded-md">

                    <div className="flex w-full flex-col gap-4">
                        <div className="flex gap-5">
                            <p className="border border-blue-500 rounded-full w-8 h-8 p-3 text-lg text-blue-600 flex items-center justify-center ">1</p>
                            <p className="text-lg">Select Target Job Role</p>
                        </div>

                        <div className="border border-gray-400 rounded-md p-2 text-gray-500 flex items-center justify-center gap-6">
                            <LiaSuitcaseSolid className="text-blue-500 text-xl" />
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="outline-none w-full">

                                <option value="">e.g : Web Developer, Data Analyst, AI Engineer</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="Data Analyst">Data Analyst</option>
                                <option value="AI Engineer">AI Engineer</option>
                                <option value="Human Resource">Human Resource</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="UI/UX Enginner">UI/UX Designer</option>
                                <option value="Cloud Architect">Cloud Architect</option>
                                <option value="Digital Marketer">Digital Marketer</option>
                                <option value="Content Writer">Content Writer</option>

                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col  gap-4">
                        <div className="flex gap-5">
                            <p className="border border-blue-500 rounded-full w-8 h-8 p-3 text-lg text-blue-600 flex items-center justify-center ">2</p>
                            <p className="text-lg">Upload your resume</p>
                        </div>

                        <div className="border bg-gray-200/50 border-dotted text-gray-500 border-gray-400 rounded-md p-3 flex flex-col items-center justify-center gap-3">
                            <FiUpload className="w-10 h-10 p-2 hover:bg-blue-500/30 cursor-pointer text-blue-500 rounded-full bg-blue-500/20" />

                            <p className="text-black">Drag or Drop here</p>
                            <p>or</p>


                            <label className="border border-gray-400 mb-6 rounded-lg p-2 text-blue-600 hover:bg-blue-100 cursor-pointer">
                                Browser files
                                <input type="file" accept=".pdf" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
                            </label>


                            <p className="text-xs">*Supports PDF file size upto 5MB Max.</p>
                        </div>
                    </div>


                    {file &&
                        <p className="text-sm flex items-center justify-center border rounded-md border-gray-400 p-2 text-gray-600 bg-gray-400/20"><span className="text-blue-500 text-lg mr-5 ">Selected:</span>{file.name}</p>}

                    <div className="flex items-center justify-center">
                        <button onClick={handleUpload} className="bg-blue-600/70 shadow-lg shadow-blue-700 text-white p-3 rounded-xl hover:bg-blue-600/80 cursor-pointer w-full">Analyze my resume</button>
                    </div>


                </div>
            </div>
        </>
    )
}