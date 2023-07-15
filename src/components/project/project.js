import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
const Project = () => {
  const [like, setLike] = useState(100);
  const [isliked, setIsliked] = useState(false);
  const [isdisliked, setIsdisliked] = useState(false);
  const [dislike, setDislike] = useState(25);
  return (
    <div className="Project">
      <div className="border border-primary m-2 p-2">
        <article>
          Various educators teach rules governing the length of paragraphs. They
          may say that a paragraph should be 100 to 200 words long, or be no
          more than five or six sentences. But a good paragraph should not be
          measured in characters, words, or sentences. The true measure of your
          paragraphs should be ideas.
        </article>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (isliked) {
              setDislike(dislike + 1);
              setLike(like - 1);
            } else {
              setLike(like + 1);
              setDislike(dislike - 1);
            }
            setIsliked(!isliked);
          }}
        >
          {isliked ? "liked" : "like"} | <span>{like}</span>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (isdisliked) {
              setDislike(dislike - 1);
              setLike(like + 1);
            } else {
              setDislike(dislike + 1);
              setLike(like - 1);
            }
            setIsdisliked(!isdisliked);
          }}
        >
          {isdisliked ? "dislike" : "disliked"} | <span>{dislike}</span>
        </button>
      </div>
      <div className="calculate m-2 p-2">
        <Link to="/portfolio/calculate">redirect to calculator PJ</Link>
      </div>
      <div className="baller">
        <Link to="/portfolio/basketball">redirect to Basketball court</Link>
      </div>
      <div className="timer">
        <Link to="/portfolio/timer">redirect to timer</Link>
      </div>
      <div className="searchauto">
        <Link to="/portfolio/searchauto">redirect to auto search</Link>
      </div>
    </div>
  );
};

export default Project;
