import React from "react";
import CountUpImport, { type CountUpProps } from "react-countup";

const CountUp: React.FC<CountUpProps> =
  typeof CountUpImport === "function"
    ? CountUpImport
    : (CountUpImport as unknown as { default: React.FC<CountUpProps> }).default;

export type AnimatedNumberProps = Omit<CountUpProps, "children">;

export const AnimatedNumber: React.FC<AnimatedNumberProps> = (props) => {
  return (
    <CountUp
      start={0}
      duration={2.2}
      enableScrollSpy
      scrollSpyDelay={0}
      scrollSpyOnce
      {...props}
    >
      {({ countUpRef }) => <span ref={countUpRef}>0</span>}
    </CountUp>
  );
};

export default AnimatedNumber;

