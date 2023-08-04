import React from "react";
import Image from "next/image";

function Author({ author }) {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black/20">
      <div className="flex justify-center -mt-20">
        <Image
          src={author?.photo?.url}
          alt={author?.name}
          unoptimized
          width={100}
          height={100}
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author?.name}</h3>
      <p className="text-white text-lg">{author?.bio}</p>
    </div>
  );
}

export default Author;
