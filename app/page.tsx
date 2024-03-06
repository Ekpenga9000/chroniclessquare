import Image from "next/image";
import Feed from "../components/Feed";
import PopularTags from "../components/PopularTags";
import Search from "../components/Search";

export default async function Home() {

  return (
    <section>
      <div className="flex gap-4 justify-center bg-white">
        <div className="container-custom h-50 flex flex-col justify-center p-4 bg-gray-900">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Developer Solutions Hub
          </h1>
          <p className="text-white text-sm hidden md:block mb-5">
            A repository of resource for software configuration insights,
            <br />
            solutions and more.
          </p>
          <p className="text-white text-sm md:hidden mb-5">
            A repository of resource for software configuration insights,
            solutions and more.
          </p>
          <Search />
          <PopularTags
            title="Popular Tags"
            tags={["javascript", "react", "node", "express", "mongodb"]}
          />
        </div>
      </div>
      <Feed />
    </section>
  );
}
