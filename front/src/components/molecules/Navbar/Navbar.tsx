/**
 * Package Import
 */
import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

/**
 * Local Import
 */
import { Logo } from "@/src/components/atoms";

/**
 * Component
 */
export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>En cours de chargement ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <nav className="flex justify-end items-center mb-7">
      <>
        <Link href={"/"} className="hidden md:block">
          <Logo />
        </Link>
        {user ? (
          <>
            <div className="flex items-center">
              <Link href={"/profil"}>
                {user && (
                  <img
                    className=" h-12 w-12 rounded-full mb-4 border-4 border-secondary-color flex justify-center items-center"
                    src={user.picture?.toString()}
                    alt={user.name?.toString()}
                  />
                )}
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    </nav>
  );
}
