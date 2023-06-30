"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps {
  children?: ReactNode;
  [x: string]: any;
}
export const MotionDiv = ({ children, ...rest }: MotionDivProps) => (
  <motion.div {...rest}>{children}</motion.div>
);
export default MotionDiv;
