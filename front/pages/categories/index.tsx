/**
 * Package Import
 */
import React from "react";
import { useRouter } from "next/router";

/**
 * Local Import
 */
import { Title, Button } from "../../components/atoms";

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

  const handleClick = (path: string) => {
    if (path === "/quizdetail") {
      console.log("Je me rends sur la page QuizDetail");
      router.push(path);
    }
  };

  return (
    <>
      <Title Title="Catégories" />
      <section className="mb-4 md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-4 md:justify-items-center md:mt-12">
        <Button
          rounded
          className={"mb-2"}
          type={"button"}
          variant={"primary"}
          onClick={() => handleClick("/quizdetail")}
        >
          Numérique
        </Button>

        <Button
          className={"mb-2"}
          type={"button"}
          variant={"secondary"}
          rounded
          onClick={() => handleClick("/quizdetail")}
        >
          Cinéma et séries
        </Button>

        <Button
          className={"mb-2"}
          type={"button"}
          variant={"tertiary"}
          rounded
          onClick={() => handleClick("/quizdetail")}
        >
          Blagues nulles
        </Button>

        <Button
          className={"mb-2"}
          type={"button"}
          variant={"primary"}
          rounded
          onClick={() => handleClick("/quizdetail")}
        >
          Histoire de l'art
        </Button>

        <Button
          className={"mb-2"}
          type={"button"}
          variant={"secondary"}
          rounded
          onClick={() => handleClick("/quizdetail")}
        >
          Gastronomie
        </Button>

        <Button
          className={"mb-2"}
          type={"button"}
          variant={"tertiary"}
          rounded
          onClick={() => handleClick("/quizdetail")}
        >
          Sport
        </Button>
      </section>
      <div className="flex justify-center text-2xl mb-4">
        <RepeatDots times={3}>
          <CreateCharactersWithProps ASCIIChar="."></CreateCharactersWithProps>
        </RepeatDots>
      </div>
    </>
  );
}
