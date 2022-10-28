import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";

const voteStyle = {
  votes: "py-1 text-xs font-bold text-white",
  wrapper: "flex flex-col items-center",
};

function Vote() {
    const upvote = 10
    const downvote = 5

  return (
    <div  className={voteStyle.wrapper}>
      <button>
        <UpvoteIcon />
      </button>

      <p className={voteStyle.votes}>{upvote - downvote}</p>
       
      <button>
        <DownvoteIcon />
      </button>
    </div>
  );
}

export default Vote;
