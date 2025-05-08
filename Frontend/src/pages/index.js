import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";
import bnb from "../../public/logo-airbnb-small.png";
import nasa from "../../public/logo-nasa-small.png";
import uber from "../../public/logo-uber-small.png";
import target from "../../public/logo-target-small.png";
import times from "../../public/logo-nyt-small.png";
import etsy from "../../public/logo-etsy-small.png";
import VideoCard from "@/components/client/landing/VideoCard";
import PercentCard from "@/components/client/landing/PercentCard";
import CustomButton from "@/components/common/CustomButton";

function index() {
  return (
    <>
      <div className="mt-5 mx-32 flex flex-col items-center space-y-8 max-h-[33rem]">
        <h1 className="text-center text-5xl font-semibold">
          Made for people.{" "}
          <span className="text-secondary">Built for productivity.</span>
        </h1>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex space-x-3 justify-center">
            <CustomButton variant="solid" text="Get Started" />
            <CustomButton
              variant="bordered"
              text={"Find Your Plan"}
              components={<RiArrowRightLine />}
            />
          </div>
          <p className="text-center">
            Slack is free to try for as long as you'd like
          </p>
        </div>
        <div className="flex gap-16 justify-center items-center">
          <Image src={bnb} alt="Airbnb" />
          <Image src={nasa} alt="Nasa" />
          <Image src={uber} alt="Uber" />
          <Image src={target} alt="Target" />
          <Image src={times} alt="NYT" />
          <Image src={etsy} alt="Etsy" />
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          height="544"
          width="900"
          className="rounded-md"
        >
          <source src="/intro-video.webm" type="video/webm" />
        </video>
      </div>
      <div className="bg-[#F4EDE4] pt-96">
        <VideoCard
          left={true}
          video="/tools-video.webm"
          title="Move faster with your tools in one place"
          desc="Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack."
          link="Learn more about the Slack platform"
          path="none"
        />
        <VideoCard
          left={false}
          video="./work-video.webm"
          title="Choose how you want to work"
          desc="In Slack, you've got all the flexibility to work when, where and how it's best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
          link="Learn more about flexible communication"
          path="none"
        />
        <VideoCard
          left={true}
          video="./team-video.webm"
          title="Bring your team together"
          desc="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it's easier to connect across departments, offices, time zones and even other companies."
          link="Learn more about channels"
          path="none"
        />
      </div>
      <div className="relative p-16">
        <div className="flex flex-col space-y-20 justify-center items-center">
          <div className="flex flex-col space-y-5 text-center">
            <h2 className="text-4xl poppins-extrabold">
              Teams large and small rely on Slack
            </h2>
            <p>
              Slack securely scales up to support collaboration at the world's
              biggest companies.
            </p>
            <div className="flex flex-row space-x-3 justify-center">
              <CustomButton variant="solid" text="Meet Slack For Enterprises" />
              <CustomButton variant="bordered" text="Talk To Sales" />
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-28 items-center">
            <PercentCard
              title="85%"
              disc="of users say Slack has improved communication*"
            />
            <PercentCard
              title="86%"
              disc="feel their ability to work remotely has improved*"
            />
            <PercentCard
              title="88%"
              disc="feel more connected to their teams*"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        {/* <a href="https://www.youtube.com/embed/63nWDTJdeQ0">
          <video
            autoPlay="true"
            loop="true"
            title="Video featuring a Slack customer"
            muted="true"
            playsInline="true"
          >
            <source
              src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4"
              type="video/mp4"
            />
          </video> */}
        {/* </a> */}
      </div>
    </>
  );
}

export default index;
