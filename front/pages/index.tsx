import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <div className="pt-80 md:pt-0">
        <h1 className="font-bold text-3xl md:text-8xl mb-20">KWIDZY</h1>
        <div>
          <Button>
            <a className="font-bold text-3xl" href={"/start"}>
              Jouer
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
