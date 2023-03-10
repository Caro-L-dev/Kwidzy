import MainBtn from "@/components/atoms/Button/MainBtn";

export default function Home() {
  return (
    <>
      <div className="pt-80 h-full">
        <h1 className="font-bold text-3xl md:text-8xl mb-8">KWIDZY</h1>
        <div>
          <MainBtn>
            <a className="font-bold text-3xl" href={"/start"}>
              Jouer
            </a>
          </MainBtn>
        </div>
      </div>
    </>
  );
}
