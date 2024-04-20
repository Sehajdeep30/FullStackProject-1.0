import React from "react";
import Posts from "./Posts";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  console.log("this is the test")
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((resp) => {
      setListOfPosts(resp.data);
    });
  }, []);

  return (
    <div className="App">
      <h2>This is the Frontend</h2>
      <div>
        {listOfPosts.map((post, key) => {
          return <Posts post={post} />;
        })}
      </div>
    </div>
  );
}

export default Home;
