/**
 * Package Import
 */
import { useRouter } from "next/router";

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

  /**
   * Actions
   */
  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="relative mt-56 md:mt-[20%]">
        <div className="flex justify-center">
          <Triangle className={"md:hidden"} position={"down"} />
        </div>
        <h1 className="absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-8 md:relative md:text-center text-white">
          KWIDZY
        </h1>
      </div>

      <Button
        type={"button"}
        variant={"primary"}
        className={"mt-20 mb-4 text-txt-primary-color"}
        rounded
        onClick={() => handleClick("/categories")}
      >
        Jouer
      </Button>
    </>
  );
}
