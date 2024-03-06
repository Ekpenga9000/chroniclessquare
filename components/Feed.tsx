"use client";
import {useState, useEffect} from "react";
import FeedItem from "./FeedItem";
import data from "@app/database/database.json";
import { FeedItemProps } from "@app/interfaces/interfaces";


const Feed = () => {
    const [feedItems, setFeedItems] = useState<FeedItemProps[] | null>(null);

    useEffect(() => {
      setFeedItems(data.map(item => ({
        ...item,
        creatorId: item.creatorId.toString(), // Convert creatorId to string
        topicId: item.topicId.toString() // Convert topicId to string
      })));
    }, []);

  return (
    <section className="flex justify-center bg-white">
          <div className="container-custom min-h-50 shadow-md bg-slate-50 p-4">
              {!feedItems ? <div>No topics found</div> : feedItems.map((item) => { 
                  return <FeedItem key={item.topicId} {...item} />
              })}
      </div>
    </section>
  );
};

export default Feed;
