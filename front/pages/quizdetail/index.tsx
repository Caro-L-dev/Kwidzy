/**
 * Package Import
 */
import React from "react";
import router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";

/**
 * Local Import
 */
import { Title, Box, Button } from "@/src/components/atoms";
import { HiArrowCircleLeft } from "react-icons/hi";
import axios from "axios";

/**
 * Datas
 */
const categoryURL = process.env.NEXT_PUBLIC_CATEGORY_URL ?? "";

/**
 * Page
 */
export default function quizdetailPage() {
  const router = useRouter();

  const handleClick = (path: string) => {
    if (path === "/quiz") {
      let categoryName = router.query.category;
      router.push(
        {
          pathname: path,
          query: {category: categoryName},
        }
      )
    }
  };

  const [categories, setCategories] = React.useState(null);

  /**
   * Fetch datas
   */
  React.useEffect(() => {
    let categoryUrl = categoryURL + '?name=' + router.query.category;
    axios.get(categoryUrl).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  return (
    <>
      <div className="hidden md:flex md:mb-4 md:items-center">
        <span className="mr-4 text-4xl cursor-pointer">
          <Link href={""} onClick={() => router.back()}>
            <HiArrowCircleLeft />
          </Link>
        </span>
        <Title name={categories[0].name} />
      </div>

      <div className="flex flex-col justify-between">
        <div className="md:flex md:mb-10">
          <div>
            <div className="h-[73px] md:h-full md:w-[580px] p-4 font-bold text-xl rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center" />
          </div>
          <div className="md:w-full md:ml-12">
            <div className="mb-32">
              <Box bgColor="bg-tertiary-color">{categories[0].level}</Box>
              <Box bgColor="bg-secondary-color">
                {categories[0].questions_total} questions
              </Box>
              <div className="text-sm text-left">
                <h3>But du jeu :</h3>
                <p>
                  Répondre au plus de questions possibles dans un temps imparti.
                </p>
                <p>
                  Attention toutefois, dès qu'une réponse est fausse, la partie
                  s'arrête.
                </p>
                <p>Bonne chance à vous !</p>
              </div>
            </div>

            <Button
              rounded
              className={"mb-4"}
              type={"button"}
              variant={"primary"}
              onClick={() => handleClick("/quiz")}
            >
              Commencer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
