import React from "react";
import { MainBtn, SecondaryBtn, ThirdBtn } from "@/components/Button";

const CreateCharactersWithProps = ({
  ASCIIChar,
  ...props
}: {
  ASCIIChar: string;
}) => {
  return <span {...props}>{ASCIIChar}</span>;
};

const RepeatDots = ({ times, children }: { times: number; children: any }) => {
  return React.cloneElement(children, {
    //   This will override the original ASCIIChar in the div
    ASCIIChar: children.props.ASCIIChar.repeat(times),
  });
};

export default function index() {
  return (
    <div>
      <h1 className="hidden md:block md:font-bold md:text-4xl md:mb-12">
        Catégories
      </h1>
      <section className="md:grid md:grid-cols-2 md:gap-y-4 md:gap-x-6 md:justify-items-center">
        <MainBtn>Numérique</MainBtn>
        <ThirdBtn>Cinéma et séries</ThirdBtn>
        <SecondaryBtn>Blagues nulles</SecondaryBtn>
        <MainBtn>Histoire de l'art</MainBtn>
        <ThirdBtn>Gastronomie</ThirdBtn>
        <SecondaryBtn>Sport</SecondaryBtn>
      </section>
      <div className="flex justify-center text-5xl">
        {/* <div className="bg-tertiary-color h-5 w-5 rounded-full opacity-30"></div> */}
        <RepeatDots times={3}>
          <CreateCharactersWithProps ASCIIChar="."></CreateCharactersWithProps>
        </RepeatDots>
      </div>
    </div>
  );
}
