import React from "react";
import { MainBtn, SecondaryBtn, ThirdBtn } from "@/components/atoms/Button";

import { useRouter } from "next/router";
import Link from "next/link";
import Title from "@/components/atoms/Title";

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
  const router = useRouter();

  return (
    <div>
      <Title Title="Catégories" />
      <section className="md:grid md:grid-cols-2 md:gap-y-4 md:gap-x-6 md:justify-items-center md:mt-12">
        <MainBtn>
          <Link href={"/quizdetail"}>
            <p>Numérique</p>
          </Link>
        </MainBtn>
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
