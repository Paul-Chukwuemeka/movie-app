"use client"
import {useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import AppContext from '@/contexts/contexts'
const page = () => {
    const {movieId,seriesId} = useContext(AppContext)
    const router = useRouter()
    useEffect(()=>{
        if(!movieId && !seriesId){
            router.push("/")
        }
    },[])
  return (
    <div>page</div>
  )
}

export default page