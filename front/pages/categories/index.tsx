/**
 * Package Import
 */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

/**
 * Local Import
 */
import { Title, Button } from "@/src/components/atoms";
import { Start } from "@/src/components/molecules";
import { Dot, RepeatDots } from "@/pages/categories/dots";

/**
 * Types
 */
interface UsernameState {
  username: string;
}

interface Category {
  id: string;
  name: string;
}

/**
 * Page
 */
export default function categoriesPage() {
  /**
   * Routing
   */
  const router = useRouter();

  /**
   * Button Style
   */
  const bgColorBtn = [
    "bg-primary-color",
    "bg-secondary-color",
    "bg-tertiary-color",
  ];

  const bgBorderColorBtn = [
    "border-darker-primary-color",
    "border-darker-secondary-color",
    "border-darker-tertiary-color",
  ];

  /**
   * State
   */
  const [username, setUsername] = useState<UsernameState | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);

  /**
   * Action
   */
  const handleClick = (path: string, categoryName: string) => {
    if (path === "/quizdetail") {
      console.log("Je me rends sur la page QuizDetail");

      router.push(
        {
          pathname: path,
          query: {category: categoryName},
        }
      );
    }
  };

  /**
   * Fetch datas
   */
  useEffect(() => {
    const categoriesURL = process.env.NEXT_PUBLIC_CATEGORIES_URL ?? "";
    axios.get(categoriesURL).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) {
    return null;
  }

  return (
    <>
      {username ? (
        <>
          <Title name="Catégories" />
          <section className="mb-4 md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-4 md:justify-items-center md:mt-12">
            {categories.map((category: Category, index: number) => (
              <Button
                key={category.id}
                rounded
                // L'opérateur modulo "% bgColorBtn.length" garantit que la valeur de "index"
                // est toujours comprise entre 0 et 2, ce qui nous permet de sélectionner
                // la couleur correspondante dans le tableau "bgColorBtn".
                className={`mb-2 ${bgColorBtn[index % bgColorBtn.length]} ${
                  bgBorderColorBtn[index % bgBorderColorBtn.length]
                }`}
                type={"button"}
                variant={"primary"}
                onClick={() => handleClick("/quizdetail", category.name)}
              >
                {category.name}
              </Button>
            ))}
          </section>
          <div className="flex justify-center text-2xl mb-4">
            <RepeatDots times={3}>
              <Dot ASCIIChar="." />
            </RepeatDots>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </>
  );
}
