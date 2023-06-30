import MotionDiv from "@/components/wrappers/motion/div";
import ContactSection from "@/components/features/contact-section";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ContactUs() {
  return (
    <main className="h-[calc(100%-120px)]">
      <div className="bg-black min-h-full w-full">
        <MotionDiv
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center lg:pt-10"
        >
          <MotionDiv variants={item}>
            <h1 className="mx-auto max-w-3xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-400">
              We would love to hear from you!
            </p>
          </MotionDiv>
          <ContactSection item={item} />
        </MotionDiv>
      </div>
    </main>
  );
}
