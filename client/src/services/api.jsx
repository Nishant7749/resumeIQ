import axios from 'axios'

const api = axios.create({
    baseURL: 'https://resumeiq-t2f1.onrender.com/'
})

export const postResume = async(file, role)=> {
   try {
    const formData = new FormData()
   formData.append('resume', file)
   formData.append('targetRole', role)

   const res = await api.post('/analyze', formData)

   return res.data

   } catch (error) {
    console.log(error.message)
    throw error
   }

}

