import  { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data =  useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/snehasishdasz')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
      <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className='m-auto size-60 mt-3' src={data.avatar_url} alt="Git Picture" />
     </div>

    </>

  )
}

export default Github

export const githubUserInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/snehasishdasz')
    return response.json();
}