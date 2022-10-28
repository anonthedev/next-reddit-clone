import Image from "next/image";

const infoStyle = {
  wrapper: "flex items-center space-x- tet-xs text-[#818384]",
  profilePic: "rounded-full",
  profilePicContainer: "h-4 w-4 flex items-center space-x-1 relative",
  tag: "cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline px-1",
  postedBy: "flex item-center px-1",
};

function Info({author}) {
  return (
    <div className={infoStyle.wrapper}>
      <div className={infoStyle.profilePicContainer}>
        <Image
          layout="fill"
          className={infoStyle.profilePic}
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="avatar"
        />
      </div>

      <div className={infoStyle.tag}>r/anonthedev</div>
      <div>•</div>

      <div className={infoStyle.postedBy}>
        <span>Posted by {author}</span>
        <span className="px-1">•</span>
        <span>29th March 2022</span>
      </div>
    </div>
  );
}

export default Info;
