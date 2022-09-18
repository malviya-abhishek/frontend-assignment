import { useEffect, useState } from 'react';
import classes from './App.module.css';
import axios from './axios';
import Navbar from './components/Navbar/Navbar';
import VideoCard from './components/VideoCard/VideoCard';

function App() {

  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  function apiCall(){
    const options = { 
      params : {
        page: page - 1,
        pageSize: pageSize,
        search: search
       }
    };
    axios
      .get("/videos", options)
      .then( (res)=>{
        console.log(res.data);
        setTotalCount( Number(res.data.totalCount) );
        setTotalPages( Number(res.data.totalPages));
        const list = res.data.videos;
        const temp = [];

        list.forEach( (video,index) => {
          temp.push(
            <VideoCard
              videoId={video.videoId}
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
  }


  useState( ()=>{
    console.log("Page change api call");
    apiCall();
  }, [page]);

  useEffect( ()=>{
    console.log("Search change api call");
    setPage(1);
    apiCall();
  }, [search])

  function changePage(diff){
    console.log("Change page", diff);
    if( 0 < page + diff && page + diff <= totalPages ){
      setPage(page+diff);
      apiCall();
    }
  }


  return (
    <div className={classes["App"]}>
      <Navbar 
        search={search} 
        setSearch={setSearch} 
        page={page} 
        changePage={changePage}
        totalCount={totalCount}
        totalPages={totalPages}
        pageSize={pageSize}
        />

      <div className={classes["video-container"]}>
        {videos}
      </div>
      
    </div>
  );
}

export default App;
