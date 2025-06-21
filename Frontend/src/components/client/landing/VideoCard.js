import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

function VideoCard(props) {
  return (
    <>
      {props.left ? (
        <div className="flex py-12 mx-32 justify-between">
          <video autoPlay loop muted playsInline height="345" width="600">
            <source
              src={props.video}
              className="bg-transparent"
              type="video/webm"
            />
          </video>
          <div className="flex flex-col space-y-5 justify-center max-w-[30rem] ml-8">
            <h2 className="text-4xl poppins-extrabold">{props.title}</h2>
            <p className="font-medium">{props.desc}</p>
            <Link href={props.path}>
              {props.link} <RiArrowRightLine className="inline" />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="flex py-12 mx-32 justify-between">
            <div className="flex flex-col space-y-5 justify-center max-w-[30rem] mr-8">
              <h2 className="text-4xl poppins-extrabold">{props.title}</h2>
              <p className="font-medium">{props.desc}</p>
              <Link href={props.path}>
                {props.link} <RiArrowRightLine className="inline" />
              </Link>
            </div>
            <video autoPlay loop muted playsInline height="345" width="600">
              <source
                src={props.video}
                className="bg-transparent"
                type="video/webm"
              />
            </video>
          </div>
        </>
      )}
    </>
  );
}

export default VideoCard;
