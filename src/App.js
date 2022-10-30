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
  const pageSize = 8;


  function apiCall(pageNum = 1){

    console.log("Current page to call", pageNum);

    const options = { 
      params : {
        page: pageNum - 1,
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


  useState(()=>{
      console.log("intial api call");
      apiCall();
  }, [])



  useEffect( ()=>{
    if(search.length){
      console.log("Search change api call ", search);
      setPage(1);
      apiCall();
    }
  }, [search]);

  function changePage(diff){
    let nextPage = page + diff;
    console.log("Change page", diff, "Next page", nextPage);

    if( 0 < nextPage && nextPage <= totalPages ){
      setPage(nextPage);
      apiCall(nextPage);
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
