import { useState } from 'react';
import classes from './App.module.css';
import axios from './axios';
import Navbar from './components/Navbar/Navbar';
import VideoCard from './components/VideoCard/VideoCard';

function App() {

  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pageLimit, setPageLimit] = useState(5);
  const pageSize = 10;


  useState( ()=>{
    const options = { 
      params : {
        page: page,
        pageSize: pageSize,
        search: search
       }
    };
    axios
      .get("/videos", options)
      .then( (res)=>{
        const list = res.data.videos;
        console.log(list);
        const temp = [];

        list.forEach( (video,index) => {
          temp.push(
            <VideoCard
              key={index}
              thumbnail = {video.thumbnails.high.url}
              description= {video.description}
            />
          )
        });



        setVideos(temp);
      })
      .catch( (err)=>{
        console.log(err);
      })
  }, [page]);


  return (
    <div className={classes["App"]}>
      <Navbar 
        search={search} 
        setSearch={setSearch} 
        page={page} 
        setPage={setPage}
        pageLimit={pageLimit}/>

      <div className={classes["video-container"]}>
        {videos}
      </div>
      
    </div>
  );
}

export default App;
