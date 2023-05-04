/**
 * Package Import
 */
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

/**
 * Local Import
 */
import { Button } from "@/src/components/atoms";
import Link from "next/link";

/**
 * Page
 */
export default function ProfilePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>En cours de chargement ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <title>Kwidzy | Mon profil</title>
      <div className="flex flex-col justify-between items-center">
        {user ? (
          <>
            <img
              className=" h-24 w-24 rounded-full mb-4 border-4 border-secondary-color flex justify-center items-center"
              src={user.picture?.toString()}
              alt={user.name?.toString()}
            />
            <h2>{user.name}</h2>
            <p className="text-xs mb-6">Compte officiel</p>
          </>
        ) : (
          <>
            <div
              className="bg-tertiary-color h-24 w-24 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center"
              aria-hidden="true"
            >
              <span>K</span>
            </div>
            <h2>Invité</h2>
            <p className="text-xs mb-6">Compte invité</p>
          </>
        )}
      </div>

      <Link href="/api/auth/logout">
        <Button rounded className={"mb-4"} type={"submit"} variant={"tertiary"}>
          Se déconnecter
        </Button>
      </Link>
    </>
  );
}
