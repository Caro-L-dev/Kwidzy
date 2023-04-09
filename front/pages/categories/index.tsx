/**
 * Package Import
 */
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

/**
 * Local Import
 */
import { Title, Button } from "@/src/components/atoms";
import { Start } from "@/src/components/molecules";

/**
 * Several dots Function
 */
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

/**
 * Types
 */
interface UsernameState {
  username: string;
}

/**
 * Datas
 */
const baseURL = "http://localhost:3030/categories";

/**
 * Page
 */
export default function categoriesPage() {
  /**
   * Routing
   */
  const router = useRouter();

  /**
   * State
   */
  const [username, setUsername] = useState<UsernameState | null>(null);
  const [categories, setCategories] = React.useState(null);

  /**
   * Action
   */
  const handleClick = (path: string) => {
    if (path === "/quizdetail") {
      console.log("Je me rends sur la page QuizDetail");
      router.push(path);
    }
  };

  /**
   * Fetch datas
   */
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  return (
    <>
      {username ? (
        <>
          <Title name="Catégories" />
          <section className="mb-4 md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-4 md:justify-items-center md:mt-12">
            {/* Boucle .map */}
            {/* {categories.map((category: any) => (
              <Button
                key={category.id}
                rounded
                className={"mb-2"}
                type={"button"}
                variant={"primary"}
                onClick={() => handleClick("/quizdetail")}
              >
                {category.name}
              </Button>
            ))} */}

            <Button
              className={"mb-2"}
              type={"button"}
              variant={"primary"}
              rounded
              onClick={() => handleClick("/quizdetail")}
            >
              {categories[0].name}
            </Button>

            <Button
              className={"mb-2"}
              type={"button"}
              variant={"secondary"}
              rounded
              onClick={() => handleClick("/quizdetail")}
            >
              {categories[1].name}
            </Button>

            <Button
              className={"mb-2"}
              type={"button"}
              variant={"tertiary"}
              rounded
              onClick={() => handleClick("/quizdetail")}
            >
              {categories[2].name}
            </Button>

            <Button
              className={"mb-2"}
              type={"button"}
              variant={"primary"}
              rounded
              onClick={() => handleClick("/quizdetail")}
            >
              {categories[3].name}
            </Button>

            <Button
              className={"mb-2"}
              type={"button"}
              variant={"secondary"}
              rounded
              onClick={() => handleClick("/quizdetail")}
            >
              {categories[4].name}
            </Button>

            <Button
              className={"mb-2"}
              type={"button"}
              variant={"tertiary"}
              rounded
              onClick={() => handleClick("/quizdetail")}
            >
              {categories[5].name}
            </Button>
          </section>
          <div className="flex justify-center text-2xl mb-4">
            <RepeatDots times={3}>
              <CreateCharactersWithProps ASCIIChar="."></CreateCharactersWithProps>
            </RepeatDots>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </>
  );
}
