import UpperContainer from "../components/UpperContainer"
import Info from "../components/Info"
import BottomContainer from "../components/BottomContainer"
import StrengthWeakness from "../components/StrengthWeakness"
import Suggestions from "../components/Suggestions"
import { useResume } from "../context/ResumeContext"
import empty from "../assets/empty.png"
import { Link } from "react-router-dom"
import Loading from "./Loading"


export default function Dashboard() {
    const { report, loading } = useResume()

      if(loading) {
        return <Loading/>
    }


    return (
        <>
            <div className="font-space mx-20 my-10">

                {report ? (
                    <>
                        <UpperContainer />
                        <Info />
                        <StrengthWeakness />
                        <Suggestions />
                        <BottomContainer />
                    </>
                ) : (

                    <div>
                        <div className="flex flex-col items-center justify-center">
                           <img className="animate-pulse w-72 h-72" src={empty} alt="empty-page" />

                           <p className="font-bold text-2xl">Oops...no resume to see!</p>

                           <button className="bg-blue-600/70 text-white p-2 rounded-md hover:bg-blue-600/80 cursor-pointer px-12 mt-8"><Link to="/">Upload a resume</Link></button>
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}