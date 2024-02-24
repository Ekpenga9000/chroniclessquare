import Image from "next/image";
import Feed from "./components/Feed";
import PopularTags from "./components/PopularTags";
import Search from "./components/Search";

export default function Home() {
  return (
    <section>
      <div className="flex gap-4 justify-center bg-gray-900">
        <div className="container-custom h-50 flex flex-col justify-center p-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold">
            Chronicles Square
          </h1>
          <p className="text-white ">
            A repository of how to's and tutorials for web development, software
            engineering, and more.
          </p>
          <Search />
          <PopularTags />
        </div>
      </div>
      <Feed />
    </section>
  );
}
