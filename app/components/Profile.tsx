import React from "react";
import Link from "next/link";
import { ProfileProps } from "@app/interfaces/interfaces";
import { getFirstLetter } from "@app/utils/utils";

const Profile = (props: ProfileProps) => {
  const { username, bio, links, profession, personal } = props;
  const { website, github, twitter, linkedin, coffee } = links || {};
  return (
    <div>
      <div className="flex items-start justify-between">
        <span className="text-2xl md:text-4xl bg-purple-600 rounded-md px-2 font-bold text-white inline-block mb-4">
          {username ? getFirstLetter(username) : "C"}
        </span>
        {personal && (
          <Link href="/profile/edit">
            <i className="bx bx-edit-alt text-gray-400 text-lg"></i>
          </Link>
        )}
      </div>
      <address className="text-white">coder123</address>
      <p className="text-white text-sm">{profession ? profession : ""}</p>
      <p className="text-white my-8">{bio ? bio : "Empty bio.."}</p>

      {links && github && linkedin && website && twitter && coffee && (
        <div>
          {" "}
          {!personal ? <p className="text-white font-bold mb-2">Check them out:</p> : <Link href={"/profile/edit"} className="text-white font-bold mb-2"> Edit your links:</Link> }
          <div className="flex items-center gap-2 mb-2">
            {!!website && (
              <a href={website}>
                <i className="bx bx-globe text-white text-lg"></i>
              </a>
            )}
            {!!github && (
              <a href={github}>
                {" "}
                <i className="bx bxl-github text-white text-lg"></i>{" "}
              </a>
            )}
            {!!linkedin && (
              <a href={linkedin}>
                {" "}
                <i className="bx bxl-linkedin text-white text-lg"></i>{" "}
              </a>
            )}
          </div>
          {!!coffee && !personal && (
            <a href={coffee} className="text-white cursor-pointer">
              <i className="bx bx-coffee-togo"></i>
              Buy them coffee
            </a>
          )}
          {personal && <div className="border-t border-t-gray-600 py-4">
            <p className="text-white"><i className='bx bxs-bookmark-plus'></i> Saved topics</p>
          </div>}
        </div>
        
      )}
    </div>
  );
};

export default Profile;
