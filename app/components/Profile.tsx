import React from "react";
import { ProfileProps } from "@app/interfaces/interfaces";
import { getFirstLetter } from "@app/utils/utils";

const Profile = (props: ProfileProps) => {
    const { username, bio, links, profession } = props;
    const { github, twitter, linkedin, coffee, website } = links;
  return (
    <div>
      <span className="text-2xl md:text-4xl bg-purple-600 rounded-md px-2 font-bold text-white inline-block mb-4">
        {username? getFirstLetter(username) : "C"}
      </span>
      <address className="text-white">coder123</address>
          <p className="text-white text-sm">{ profession ? profession : "" }</p>
      <p className="text-white my-8">
        {bio? bio : "Empty bio.."}
      </p>

      {(!github && !linkedin && !website && !twitter && !coffee ) && <div> <p className="text-white font-bold mb-2">Check them out:</p>
      <div className="flex items-center gap-2 mb-2">
        <a href="">
          <i className="bx bx-globe text-white text-lg"></i>
        </a>
        <a href="">
          {" "}
          <i className="bx bxl-github text-white text-lg"></i>{" "}
        </a>
        <a href="">
          {" "}
          <i className="bx bxl-linkedin text-white text-lg"></i>{" "}
        </a>
      </div>
      <span className="text-white cursor-pointer">
        <i className="bx bx-coffee-togo"></i>
        Buy them coffee
      </span> </div>}
    </div>
  );
};

export default Profile;
