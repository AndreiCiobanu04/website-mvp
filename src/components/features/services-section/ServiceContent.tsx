"use client";
import { ReactNode, useEffect, useRef } from "react";

interface ServiceContentProps {
  children: ReactNode;
  className?: string;
  id?: string;
  handleActiveOnScroll: Function;
}

export const ServiceContent = ({
  children,
  className,
  id,
  handleActiveOnScroll,
}: ServiceContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return null;
      }

      if (
        ref.current.getBoundingClientRect().top < 150 &&
        ref.current.getBoundingClientRect().top > -150
      ) {
        handleActiveOnScroll?.(ref.current.getBoundingClientRect().top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
};
