/**
 * Package Import
 */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

/**
 * Local Import
 */
import { Button, Triangle } from "@/src/components/atoms";
import Link from "next/link";
import styles from "./index.module.css";

/**
 * Page
 */
export default function homePage() {
  const [pageTitle, setPageTitle] = useState("localhost:3000/⁤");
  const router = useRouter();
  const { user } = useUser();
  console.log(user);

  const greeting =
    user && user.given_name ? `${user.given_name}` : "cher joueur";

  const handleClick = (path: string) => router.push(path);

  useEffect(() => {
    setPageTitle("Kwidzy | Acceuil : Testez votre culture en vous amusant !");
  }, []);

  return (
    <>
      {/* <title>{pageTitle}</title> */}
      <div className="relative mt-56 md:mt-[20%]">
        <div className="flex justify-center">
          <Triangle className={"md:hidden"} />
        </div>
        <h1 className="absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-20 md:relative md:text-center">
          KWIDZY
        </h1>
      </div>
      {user ? (
        <div className="mt-8 mb-8">
          <p>
            Coucou <span className="text-tertiary-color">{greeting}</span> !
          </p>
          <p className="mb-5">C'est l'heure de </p>
          <Button
            type={"button"}
            variant={"primary"}
            className={"mb-4 text-txt-primary-color"}
            rounded
            onClick={() => handleClick("/categories")}
          >
            Jouer !
          </Button>

          <Link href="/api/auth/logout" className={styles.logout}>
            Se déconnecter
          </Link>
        </div>
      ) : (
        <>
          <Link href="/api/auth/login">
            <Button
              rounded
              className={"mt-20 mb-8"}
              type={"submit"}
              variant={"secondary"}
            >
              Se connecter
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
