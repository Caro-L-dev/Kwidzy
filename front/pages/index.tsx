/**
 * Package Import
 */
import { useRouter } from "next/router";

/**
 * Local Import
 */
import { Button, Triangle } from "../components/atoms";

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    if (path === "/start") {
      console.log("Je me rends sur la page Start");
      router.push(path);
    }
    if (path === "/profil") {
      console.log("Je me rends sur la page de Profil");
      router.push(path);
    }
  };

  return (
    <>
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
        onClick={() => handleClick("/start")}
      >
        Jouer
      </Button>
    </>
  );
}
