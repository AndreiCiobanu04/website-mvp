"use client";
import Image from "next/image";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const teamData = [
  {
    name: "Elon Musk",
    role: "Co-Founder & Software Developer",
    avatar: "/elon.jpg",
    linkedinUrl: "https://www.linkedin.com/",
    email: "elon.musk@tesla.com",
  },
  {
    name: "Elon Musk",
    role: "Co-Founder & Software Developer",
    avatar: "/elon.jpg",
    linkedinUrl:
      "https://www.linkedin.com/",
    email: "elon.musk@tesla.com",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white" id="team">
      <div className="text-black flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pb-16 text-center relative">
        <h1 className=" text-3xl md:text-7xl font-medium mt-10 mb-10">
          Meet our{" "}
          <span className="text-[#f0b90c] relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-[50px] left-0 h-[0.58em] w-full fill-[#f0b90c] opacity-40"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            Team
          </span>
        </h1>
        <p className="text-xl mb-10">
          Our web development team is made up of highly skilled individuals with
          a passion for creating innovative and cutting-edge digital solutions.
          With expertise in both AI and crypto technologies, we are committed to
          delivering exceptional web experiences that leverage the latest
          advancements in these fields. Our team is dedicated to pushing the
          boundaries of what&apos;s possible in web development. With a focus on
          collaboration, creativity, and a commitment to excellence, we work
          closely with our clients to bring their ideas to life and help them
          achieve their goals online.
        </p>
        <div className=" relative w-full items-center justify-center">
          <div className="border-[12px] border-[#f0b90c] w-full h-[95%] md:h-[90%] absolute left-0 top-[70px] z-0"></div>
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-8 z-10 md:ml-[100px]">
            {teamData.map((member) => (
              <div key={member.name} className="z-10 flex flex-col py-4 px-4">
                <div className="mb-5 relative mx-auto h-[320px] w-[280px]">
                  {/* <div className="absolute bottom-2 right-0">
                  <a target="_blank" href={member.linkedinUrl}>
                    <BsLinkedin className="w-8 h-8 mx-5" />
                  </a>
                </div> */}
                  <Image
                    className="h-[320px] object-cover"
                    src={member.avatar}
                    alt="Vercel Logo"
                    priority
                    width={280}
                    height={320}
                  />
                </div>
                <div className="">
                  <div className="text-xl">{member.name}</div>
                </div>
                <div className="text-gray-400 text-base">{member.role}</div>
                <div className="flex items-center justify-center mt-2">
                  <a target="_blank" href={member.linkedinUrl}>
                    <BsLinkedin className="w-6 h-6 mx-2" />
                  </a>
                  <a target="_blank" href={`mailto:${member.email}`}>
                    <HiOutlineMail className="w-8 h-8 mx-2" />
                  </a>
                  <a target="_blank" href={member.linkedinUrl}>
                    <BsWhatsapp className="w-6 h-6 mx-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
