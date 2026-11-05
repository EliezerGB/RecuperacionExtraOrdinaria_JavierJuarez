import {useState,useEffect} from 'react'

export function useFetch(url){
    const[data,setData] = useState([])
    const[cargando, setCargando] = useState(true)

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((datos)=>{
            setData(datos)
            setCargando(false)
        })
        .catch((error)=> console.log('Error en useFetch:',error))
    },[url])

    return {data, cargando}
}