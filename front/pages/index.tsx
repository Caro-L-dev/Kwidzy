import MainBtn from "@/components/atoms/Button/MainBtn";

export default function Home() {
  return (
    <>
      <div className="relative mt-56">
        <div className="flex justify-center">
          {/* Triangle Shape */}
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-primary-color" />
        </div>
        <h1 className="absolute top-6 right-0 left-0 font-bold text-3xl md:text-8xl mb-8">
          KWIDZY
        </h1>
      </div>

      <div className="mt-20">
        <MainBtn>
          <a className="font-bold text-3xl tracking-wider" href={"/start"}>
            Jouer
          </a>
        </MainBtn>
      </div>
    </>
  );
}
