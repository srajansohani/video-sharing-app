import React,{useEffect,useState} from 'react'
import { YOUTUBE_API_LIST } from '../../constants/yt-consts';
import VideoCard from './VideoCard';

function Home() {

  const [videos,setVideos] = useState([]);
  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API_LIST);
    const json = await data.json();
    setVideos(json.items)
    console.log(json);
} 
  useEffect(()=>{
    getVideos();
  },[])
  return (
    <div className='grid grid-cols-3'> 
      {videos.length > 0 && (
        videos.map((video)=>(
          <VideoCard className='gri' info={video} key={video.id} /> 
        ))
      )
      }
    </div>
  )
}

export default Home;