import React from "react";
import SubTitle from "@/components/atoms/SubTitle";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function AvatarChoice() {
  return (
    <>
      <SubTitle>Choix de votre avatar</SubTitle>
      <div className="flex justify-between items-center my-12">
        <MdOutlineKeyboardArrowLeft />
        <div className="aspect-square h-24 bg-white rounded-lg shadow-lg">
          <img src="" alt="" />
        </div>
        <MdOutlineKeyboardArrowRight />
      </div>
    </>
  );
}
