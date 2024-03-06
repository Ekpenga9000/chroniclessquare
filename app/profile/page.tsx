import React from "react";
import Feed from "@components/Feed";
import Profile from "@components/Profile";

const page = () => {
  return (
    <section className="flex justify-center bg-white">
      <div className="container-custom flex flex-col lg:flex-row bg-gray-900 relative">
        <div className="p-4 lg:w-1/4 lg:sticky top-0">
          <Profile
            personal={true}
            username="coder123"
            profession="Fullstack Developer"
            bio="I am a fullstack developer with 5 years of experience. I love to code and build new things."
            links={{
              website: "https://coder123.com",
              github: "https://github.com/coder123",
              twitter: "https://twitter.com/coder123",
              linkedin: "https://linkedin.com/coder123",
              coffee: "https://buymeacoffee.com/coder123",
            }}
          />
        </div>
        <div className="bg-white overflow-y-scroll h-screen w-full">
          <Feed />
        </div>
      </div>
    </section>
  );
};

export default page;
