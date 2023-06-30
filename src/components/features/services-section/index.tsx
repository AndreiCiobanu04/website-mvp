"use client";

import { ServiceContent } from "@/components/features/services-section/ServiceContent";
import { useCallback, useState } from "react";
import MotionDiv from "@/components/wrappers/motion/div";

const titleServicesProps = (isActive: boolean) => ({
  initial: {
    opacity: 0.3,
  },
  animate: {
    opacity: isActive ? 1 : 0.3,
    transition: {
      duration: 1,
    },
  },
  whileHover: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
});

const textContentArray = [
  {
    id: "custom-software-dev",
    className: "mb-40",
    title: "Custom software development",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi auctor metus suscipit, eu pulvinar leo efficitur. Sed dapibus, justo ac lobortis congue, diam tortor aliquam nulla, vitae pellentesque ex enim ac nibh. Phasellus eget augue eu tellus laoreet iaculis. Integer nec libero eget lorem rhoncus pharetra.",
  },
  {
    id: "web-application-dev",
    className: "pt-[100px] mb-40",
    title: "Web Application Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi auctor metus suscipit, eu pulvinar leo efficitur. Sed dapibus, justo ac lobortis congue, diam tortor aliquam nulla, vitae pellentesque ex enim ac nibh. Phasellus eget augue eu tellus laoreet iaculis. Integer nec libero eget lorem rhoncus pharetra.",
  },
  {
    id: "api-development",
    title: "API development and integration",
    className: "pt-[100px] mb-40",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi auctor metus suscipit, eu pulvinar leo efficitur. Sed dapibus, justo ac lobortis congue, diam tortor aliquam nulla, vitae pellentesque ex enim ac nibh. Phasellus eget augue eu tellus laoreet iaculis. Integer nec libero eget lorem rhoncus pharetra.",
  },
  {
    id: "software-maintenance",
    className: "pt-[100px] mb-40",
    title: "Software maintenance and support",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi auctor metus suscipit, eu pulvinar leo efficitur. Sed dapibus, justo ac lobortis congue, diam tortor aliquam nulla, vitae pellentesque ex enim ac nibh. Phasellus eget augue eu tellus laoreet iaculis. Integer nec libero eget lorem rhoncus pharetra.",
  },
  {
    id: "team-augmentation",
    className: "pt-[100px] mb-40",
    title: "Team augmentation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi auctor metus suscipit, eu pulvinar leo efficitur. Sed dapibus, justo ac lobortis congue, diam tortor aliquam nulla, vitae pellentesque ex enim ac nibh. Phasellus eget augue eu tellus laoreet iaculis. Integer nec libero eget lorem rhoncus pharetra.",
  },
  {
    id: "web-optimization",
    className: "pt-[100px] mb-40",
    title: "Web Optimization Expertise",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi auctor metus suscipit, eu pulvinar leo efficitur. Sed dapibus, justo ac lobortis congue, diam tortor aliquam nulla, vitae pellentesque ex enim ac nibh. Phasellus eget augue eu tellus laoreet iaculis. Integer nec libero eget lorem rhoncus pharetra. ",
  },
];

const ServicesSection = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const handleActiveOnScroll = useCallback(
    (index: number) => () => {
      setActiveSectionIndex(index);
    },
    [setActiveSectionIndex]
  );

  return (
    <div id="services">
      <div className="text-white text-2xl pt-[100px] pb-14 text-start hidden md:flex">
        <div className="w-1/3 sticky top-[100px] h-fit">
          <MotionDiv {...titleServicesProps(activeSectionIndex === 0)}>
            <a
              className="inline-block rounded-lg py-1 px-2 text-white cursor-pointer"
              href="/#services"
            >
              Custom software development
            </a>
          </MotionDiv>
          <MotionDiv
            {...titleServicesProps(activeSectionIndex === 1)}
            className="my-5"
          >
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover cursor-pointer"
              href="/#web-application-dev"
            >
              Web Application Development
            </a>
          </MotionDiv>
          <MotionDiv
            {...titleServicesProps(activeSectionIndex === 2)}
            className="my-5"
          >
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover cursor-pointer"
              href="/#api-development"
            >
              API development and integration
            </a>
          </MotionDiv>
          <MotionDiv
            {...titleServicesProps(activeSectionIndex === 3)}
            className="my-5"
          >
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover cursor-pointer"
              href="/#software-maintenance"
            >
              Software maintenance and support
            </a>
          </MotionDiv>
          <MotionDiv
            {...titleServicesProps(activeSectionIndex === 4)}
            className="my-5"
          >
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover cursor-pointer"
              href="/#team-augmentation"
            >
              Team augmentation
            </a>
          </MotionDiv>
          <MotionDiv
            {...titleServicesProps(activeSectionIndex === 5)}
            className="my-5"
          >
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover cursor-pointer"
              href="/#web-optimization"
            >
              Web Optimization Expertise
            </a>
          </MotionDiv>
        </div>
        <div className="w-2/3 pl-10 text-xl">
          {textContentArray.map((value, index) => (
            <ServiceContent
              key={value.id}
              id={value.id}
              className={value?.className}
              handleActiveOnScroll={handleActiveOnScroll(index)}
            >
              {value?.content}
            </ServiceContent>
          ))}
        </div>
      </div>
      <div className="w-full md:hidden text-white text-left">
        {textContentArray.map((value) => (
          <div className="mt-20" key={value.id}>
            <div className="title font-bold text-xl my-5">{value?.title}</div>
            <div className="text-gray-400">{value?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
