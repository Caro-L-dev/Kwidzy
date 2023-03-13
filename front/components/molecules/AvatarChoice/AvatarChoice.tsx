/**
 * Package Import
 */
import React from "react";

/**
 * Local Import
 */
import { SubTitle } from "../../atoms/index";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function AvatarChoice() {
  return (
    <>
      <SubTitle subtitle="Choix de votre avatar" />
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
