/**
 * Package Import
 */
import { useRouter } from "next/router";

/**
 * Local Import
 */
import { Button } from "@/components/atoms/Button/Button";

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
      <div className="mt-20">
        <Button
          className="m-1"
          rounded
          variant="primary"
          type={"button"}
          onClick={() => handleClick("/start")}
          id={"1"}
        >
          Primary
        </Button>
        <Button
          className="m-1"
          rounded
          variant="secondary"
          type={"button"}
          id={""}
          onClick={() => handleClick("/profil")}
        >
          Secondary
        </Button>
        <Button
          className="m-1"
          rounded
          variant="tertiary"
          type={"button"}
          id={""}
        >
          Tertiary
        </Button>
        <Button
          className="m-1"
          rounded
          variant="correct"
          type={"button"}
          id={""}
        >
          Correct
        </Button>
        <Button
          className="m-1"
          rounded={false}
          variant="mistake"
          type={"button"}
          id={""}
        >
          Mistake
        </Button>

        <Button
          type={"button"}
          variant={"primary"}
          className={""}
          rounded
          onClick={() => handleClick("/start")}
        >
          Jouer
        </Button>
      </div>
    </>
  );
}
