import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline";

const actionStyle = {
  icon: "h-4 w-4",
  iconContainer: "flex items-center space-x-1 text-[#818384]",
  wrapper: "flex items-center space-x-4 p-2"
};

function Actions() {
  return (
      <div className={actionStyle.wrapper}>
        <div className={actionStyle.iconContainer}>
          <AnnotationIcon className={actionStyle.icon} />
          <span className="text-xs">19 comments</span>
        </div>

        <div className={actionStyle.iconContainer}>
          <GiftIcon className={actionStyle.icon} />
          <span className="text-xs">Awards</span>
        </div>

        <div className={actionStyle.iconContainer}>
          <ShareIcon className={actionStyle.icon} />
          <span className="text-xs">Share</span>
        </div>
      </div>
  );
}

export default Actions;
