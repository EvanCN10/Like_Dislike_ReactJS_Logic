// File: src/components/PostList.jsx

import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

export default function PostList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments");
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {comments.map((comment) => (
        <UserProfile
          key={comment.id}
          name={comment.user.fullName}
          username={comment.user.username}
          content={comment.body}
          likes={comment.likes} // Hanya oper “likes”, dislikes kita default di UserReaction = 0
        />
      ))}
    </div>
  );
}
