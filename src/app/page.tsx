import { Inter } from "next/font/google";
import MotionDiv from "@/components/wrappers/motion/div";
import Image from "next/image";
import ServicesSection from "@/components/features/services-section";
import TeamSection from "@/components/features/team-section";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <MotionDiv
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center lg:pt-36"
        >
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Unleash{/* */}{" "}
            <span className="relative whitespace-nowrap text-[#f0b90c]">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#f0b90c] opacity-40"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">the power</span>
            </span>{" "}
            {/* */}of Web Applications
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-400">
            When it comes to software development, there is no one-size-fits-all
            solution. That&apos;s why we offer custom software development
            services to meet your unique needs.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent text-[#f0b90c] border border-[#f0b90c] hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
              href="/contact-us"
            >
              Contact us now
            </Link>
          </div>
          <div className="mt-20 md:mt-32 md:mb-32">
            <div className="rounded-3xl w-8 h-14 border border-white mx-auto mouse" />
          </div>
          <MotionDiv
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          >
            <ServicesSection />
          </MotionDiv>
        </MotionDiv>
      </div>
      <MotionDiv
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        <TeamSection />
      </MotionDiv>
      <div className="bg-black">
        <MotionDiv
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center lg:pt-14"
        >
          <h1
            className="mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-white sm:text-7xl"
            id="mission"
          >
            Building{" "}
            <span className="relative whitespace-nowrap text-[#f0b90c] inline-flex">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#f0b90c] opacity-40"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative"> innovative solutions </span>
            </span>{" "}
            for a better tomorrow
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-400">
            Our Software Development Mission
          </p>
          <MotionDiv
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row justify-between mt-10"
          >
            <div className="mt-14 md:mt-0 md:w-1/2 text-white text-left text-xl md:pr-10">
              <div>
                At our software development agency, we are passionate about
                creating cutting-edge solutions that transform the way
                businesses operate and people live. Our mission is to leverage
                the latest technologies, methodologies, and best practices to
                build software that addresses the most pressing challenges of
                our time and empowers organizations to thrive in a rapidly
                evolving digital landscape.
              </div>
              <div className="mt-10">
                We believe that software development is not just a technical
                process but also a collaborative and iterative one that involves
                constant communication, feedback, and improvement. That&apos;s
                why we use agile methodologies and modern tools to ensure that
                our clients are involved at every stage of the project and have
                full visibility into the progress, timelines, and budget.
              </div>
            </div>
            <div className="md:w-1/2 h-full md:pl-10">
              <Image
                src="https://cdn.discordapp.com/attachments/1008571127779573780/1089918622056579122/AndreiRotaru_computers_interacting_to_each_other_blockchain_fut_aa95cbb0-0154-4d89-b57e-7de4ed18b874.png"
                alt="image"
                className="w-max-[450px] mx-auto md:w-full h-[400px] object-cover"
                width={400}
                height={300}
              />
            </div>
          </MotionDiv>
          <MotionDiv
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-left text-white text-xl"
          >
            If you are looking for a software development partner that shares
            your vision, values, and ambitions, we would love to hear from you.
            Let&apos;s embark on a journey of innovation, collaboration, and
            impact together.
          </MotionDiv>
        </MotionDiv>
      </div>
    </main>
  );
}
