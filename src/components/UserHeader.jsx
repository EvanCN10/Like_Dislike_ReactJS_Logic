const ProfileHeader = ({ name, username }) => {
  return (
    <div className="flex gap-6 items-center">
      <img
        src="https://placehold.co/80x80/000000/FFFFFF/png?text=Profile"
        alt="profile"
        width={70}
        height={70}
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-xl text-gray-600">@{username}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
