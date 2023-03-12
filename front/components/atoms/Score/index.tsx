import React from "react";

interface ScoreProps {}

const Score: React.FC<ScoreProps> = ({}) => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="opacity-30 h-[73px] md:w-full p-4 rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center"></div>
        <p className="absolute top-5 bottom-0 right-0 left-0 text-lg font-bold">
          0 Brouette
        </p>
      </div>
    </div>
  );
};

export default Score;
