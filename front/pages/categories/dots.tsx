import React from "react";

interface Props {
  ASCIIChar: string;
}

export const Dot = ({ ASCIIChar }: Props) => {
  return <span>{ASCIIChar}</span>;
};

export const RepeatDots = ({
  times,
  children,
}: {
  times: number;
  children: React.ReactNode;
}) => {
  return React.cloneElement(children as React.ReactElement<Props>, {
    ASCIIChar: (children as React.ReactElement<Props>).props.ASCIIChar.repeat(
      times
    ),
  });
};
