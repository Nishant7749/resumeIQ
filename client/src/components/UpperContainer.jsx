import pdf from '../assets/pdf.png'
import { HiOutlineDownload } from "react-icons/hi";
import { useResume } from '../context/ResumeContext';
import { Link } from 'react-router-dom';
import { downloadPDF } from '../services/downloadPDF';

export default function UpperContainer() {
    const {report} = useResume()
      if(!report) return null

    const uploadedAt = new Date(report.file.uploadedAt)
     const date = uploadedAt.toLocaleDateString()
     const time = uploadedAt.toLocaleTimeString()

    

    return(
        <>
        <div>

        <div className='border border-gray-400/20 rounded-md p-3 m-5 flex items-center justify-between'>
            <div className="flex items-center gap-5 ml-5">
                <img className='w-10' src={pdf} alt="pdf-icon" />
                
                <div>
                    <p className='text-blue-500'>{report.file.name}</p>
                    <div>
                        <p className='text-gray-400 text-sm'>{(report.file.size / (1024*1024)).toFixed(2)} MB</p>
                        <p className='text-gray-400 text-sm'>{date} | {time}</p>
                    </div>
                    
                </div>
            </div>

            <div className='flex gap-5 mr-5'>
                <button onClick={()=> downloadPDF(report)} className='border border-blue-500 rounded-md p-2 hover:bg-blue-200/20 text-blue-500 cursor-pointer flex gap-3'>Download Report <HiOutlineDownload className='text-xl'/></button>

                <button className='bg-blue-600/70 text-white p-2 rounded-md hover:bg-blue-600/80 cursor-pointer px-8'><Link to='/'>Analyze Resume</Link></button>
            </div>
        </div>


        </div>
            
        </>
    )
}