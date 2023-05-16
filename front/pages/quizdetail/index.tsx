/**
 * Package Import
 */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

/**
 * Local Import
 */
import { Title, Box, Button } from "@/src/components/atoms";
import { HiArrowCircleLeft } from "react-icons/hi";
import styles from "./index.module.css";
import axios from "axios";

/**
 * Datas
 */
const categoryURL = process.env.NEXT_PUBLIC_CATEGORY_URL ?? "";

interface CategoryDetail {
  id: number;
  name: string;
  level: string;
  questions_total: number;
}

/**
 * Page
 */
export default function quizdetailPage() {
  const router = useRouter();

  const handleClick = (path: string) => {
    let categoryName = router.query.category;
    router.push({
      pathname: path,
      query: { category: categoryName },
    });
  };

  const [categories, setCategories] = React.useState<CategoryDetail[] | null>(
    null
  );

  /**
   * Fetch datas
   */
  React.useEffect(() => {
    if (router.query.category) {
      let categoryUrl = categoryURL + "?name=" + router.query.category;
      axios.get(categoryUrl).then((response) => {
        setCategories(response.data);
      });
    }
  }, [router.query]);

  if (!categories) return null;

  return (
    <>
      <div className=" flex mb-4 items-center">
        <span className="mr-4 text-4xl cursor-pointer">
          <Link href={""} onClick={() => router.back()}>
            <HiArrowCircleLeft />
          </Link>
        </span>
        <div className="uppercase">
          <Title name={categories[0].name} />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="md:flex md:mb-10">
          <div>
            <div className="hidden md:block h-[73px] md:h-full md:w-[580px] p-4 font-bold text-xl rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center" />
          </div>
          <div className="md:w-full md:ml-12">
            <div className="mb-32">
              <div className="text-txt-tertiary-color">
                <Box bgColor="bg-tertiary-color">{categories[0].level}</Box>
              </div>

              <div className="text-txt-secondary-color">
                <Box bgColor="bg-secondary-color">
                  {categories[0].questions_total} questions
                </Box>
              </div>

              <div className="text-sm text-left">
                <h3>But du jeu :</h3>
                <div className={styles.rules}>
                  <p>
                    Répondre au plus de questions possibles dans un temps
                    imparti.
                  </p>
                  <p>
                    Attention toutefois, dès qu'une réponse est fausse, la
                    partie s'arrête.
                  </p>
                  <p>Bonne chance à vous !</p>
                </div>
              </div>
            </div>

            <Button
              rounded
              className={"mb-4 text-txt-primary-color"}
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
