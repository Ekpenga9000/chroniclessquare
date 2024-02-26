"use client";
import Link from "next/link";
import { FeedItemProps } from "@app/interfaces/interfaces"; 
import { getFirstLetter, randomizeColor } from "@app/utils/utils";

const FeedItem = (props: FeedItemProps) => {
    const {creatorId, topicId, topic, upvotes, username, datePosted } = props;

  return (
    <div className="flex items-center gap-4 shadow-sm w-full rounded-sm px-4 py-3">
      <div className="flex flex-col items-center justify-center w-1/5">
        <i className="bx bxs-up-arrow text-sm text-gray-500 cursor-pointer"></i>
        <span className="text-sm text-gray-500 font-semibold">{upvotes}</span>
      </div>
      <div>
        <Link
          href={`/profile/${creatorId}`}
          className={`hidden md:block text-2xl font-semibold ${randomizeColor()} text-white rounded-md px-3.5 py-2 cursor-pointer`}
        >
        {getFirstLetter(username)}
        </Link>
      </div>
      <div className="w-4/5">
        <Link
          href={`/profile/${creatorId}`}
          className="text-sm font-semibold text-gray-500 cursor-pointer"
        >
          {username}
        </Link>
        <Link
          href={`/topic/${topicId}`}
          className="text-gray-500 text-xs font-medium two-line-ellipsis cursor-pointer"
        >
          {topic}
        </Link>
      </div>
      <div className="flex justify-center w-1/5">
        <p className="text-sm text-gray-500">{datePosted}</p>
      </div>
    </div>
  );
};

export default FeedItem;
