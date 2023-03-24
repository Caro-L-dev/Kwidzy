/**
 * Package Import
 */
import React from "react";
import Image from "next/image";

/**
 * Local Import
 */
import { SubTitle } from "../../atoms/index";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import avatar from "../../../public/assets/images/avatar.png";

/**
 * Component
 */
export default function AvatarChoice() {
  return (
    <>
      <SubTitle name="Choix de votre avatar" />
      <div className="flex justify-between items-center my-12">
        <MdOutlineKeyboardArrowLeft />
        <div className="aspect-square h-24 ">
          <Image
            src={avatar}
            alt={"avatar 01"}
            className="rounded-lg shadow-lg"
          />
        </div>
        <MdOutlineKeyboardArrowRight />
      </div>
    </>
  );
}
