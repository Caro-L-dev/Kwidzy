/**
 * Package Import
 */
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

/**
 * Local Import
 */
import { Button, Triangle } from "@/src/components/atoms";
import Link from "next/link";

/**
 * Page
 */

export default function homePage() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="relative mt-56 md:mt-[20%]">
        <div className="flex justify-center">
          <Triangle className={"md:hidden"} position={"down"} />
        </div>
        <h1 className="absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-20 md:relative md:text-center">
          KWIDZY
        </h1>
      </div>
      {user ? (
        <div className="mb-8">
          <p>
            Coucou <span className="text-tertiary-color">{user.name}</span> !
          </p>
          <p className="mb-5">C'est l'heure de </p>
          <Button
            type={"button"}
            variant={"primary"}
            className={"mb-4"}
            rounded
            onClick={() => handleClick("/categories")}
          >
            Jouer !
          </Button>

          {/* <Link href="/api/auth/logout">
            <Button
              rounded
              className={"mb-4"}
              type={"submit"}
              variant={"tertiary"}
            >
              Se déconnecter
            </Button>
          </Link> */}
          <Link href="/api/auth/logout">Se déconnecter</Link>
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
