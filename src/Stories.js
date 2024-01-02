import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading,nbPages, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="Stories-div">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <>
      <div className="Stories-div">
        {
          hits.map((curPost) => {
            const { title, author, objectID, url, num_comments } = curPost;

            return (
              <div className="card" key={objectID}>
                <h2 className="con">{title}</h2>

                <p className="con">
                  By <span>{author}</span> | <span> {num_comments} </span>comments
                </p>

                <div className="card-button ">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                
                  <a href="#" onClick={() => removePost(objectID)}>Remove</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Stories;