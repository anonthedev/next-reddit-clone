import Post from "../common/Post";

function Feed({posts}) {
  return (
    <div className="space-y-2.5">
    {posts.map((post)=>(
      <Post key={post.id} {...post}/>
    ))}
    </div>
  );
}

export default Feed;
