// File: src/components/UserProfile.jsx

import UserHeader from "./UserHeader";      
import UserPost from "./UserPost";          
import UserReaction from "./UserReaction";  

const ProfileCard = ({ name, username, content, likes }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-2xl shadow-md flex flex-col gap-8">
      <UserHeader name={name} username={username} />
      <UserPost content={content} />
      {/* Kirim props likes (dari PostList.jsx) */}
      <UserReaction likes={likes} />
    </div>
  );
};

export default ProfileCard;
