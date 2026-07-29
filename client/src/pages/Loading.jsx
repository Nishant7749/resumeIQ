import loading from "../assets/loading.svg"

export default function Loading() {

    return(
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-148" src={loading} alt="loading" />

            <h1 className="text-3xl text-blue-500 font-bold">Analyzing your resume</h1>

            <p className="text-gray-400 text-sm">This usually takes 15-30 seconds</p>
            </div>
        </div>
        </>
    )
}