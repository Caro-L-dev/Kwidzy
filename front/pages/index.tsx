import { Button } from "@/components/atoms/AdvancedButton.tsx/AdavancedButton";
import MainBtn from "@/components/atoms/Button/MainBtn";

export default function Home() {
  return (
    <>
      <div className="relative mt-56 md:mt-[20%]">
        <div className="flex justify-center">
          {/* Triangle Shape */}
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-primary-color md:hidden" />
        </div>
        <h1 className="absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-8 md:relative md:text-center">
          KWIDZY
        </h1>
      </div>

      <div className="mt-20">
        <Button className="m-1" rounded variant="primary">
          Primary
        </Button>
        <Button className="m-1" rounded variant="secondary">
          Secondary
        </Button>
        <Button className="m-1" rounded variant="tertiary">
          Tertiary
        </Button>
        <Button className="m-1" rounded variant="correct">
          Correct
        </Button>
        <Button className="m-1" rounded={false} variant="mistake">
          Mistake
        </Button>

        <MainBtn>
          <a href={"/start"}>Jouer</a>
        </MainBtn>
      </div>
    </>
  );
}
