import Vote from "../feed/Vote"
import Actions from "../feed/Actions"
import Info from "../feed/Info"

const postStyle = {
  post: "flex flex-col space-y-1 cursour-pointe",
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border=[#343536]",
  postTitle: "text-lg font-medium text-[#D7DADC]",
  postContent: "text-sm font-light text-[#D7DADC]/80"
};

function Post({author, title}) {
  return (
    <>
      <div className={postStyle.wrapper}>
        <Vote/>
        <div className={postStyle.post}>
          <Info author={author}/>
          <h1 className={postStyle.postTitle}>{title}</h1>
          <p className={postStyle.postContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, aliquid rerum magni, error fugit maxime maiores
            repellendus aut odio provident inventore ab, placeat quod optio
            excepturi sint qui ipsum cupiditate!
          </p>
          <Actions/>
        </div>
      </div>
    </>
  );
}

export default Post;
