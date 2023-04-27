/**
 * Package Import
 */
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

/**
 * Local Import
 */
import { Button, Triangle } from "@/src/components/atoms";

/**
 * Page
 */

export default function homePage() {
  /**
   * Routing
   */
  const router = useRouter();

  const { user, error, isLoading } = useUser();
  // console.log(user);

  if (isLoading) return <p>En cours de chargement ...</p>;
  if (error) return <p>{error.message}</p>;

  if (user) {
    return (
      <>
        <h1>Bienvenue {user.name} !</h1>
        <a href="/api/auth/logout">Se déconnecter</a>
      </>
    );
  }

  /**
   * Actions
   */
  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <a href="/api/auth/login">Se connecter</a>
      <div className="relative mt-56 md:mt-[20%]">
        <div className="flex justify-center">
          <Triangle className={"md:hidden"} position={"down"} />
        </div>
        <h1 className="absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-8 md:relative md:text-center">
          KWIDZY
        </h1>
      </div>
      <Button
        type={"button"}
        variant={"primary"}
        className={"mt-20 mb-4"}
        rounded
        onClick={() => handleClick("/categories")}
      >
        Jouer
      </Button>
    </>
  );
}
