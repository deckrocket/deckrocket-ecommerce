// Due to the nature of Server-Side Rendered components,
// they do not have access to client-side features and hooks.
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type itemDetail = {
  id: number;
};

export default function ItemDetails({ id }: itemDetail) {
  // fetchapi GET req for item details using id

  const [item, setItem] = useState({
    name: `Kodama's Reach (Borderless)`,
    rarity: `Common`,
    type: `Sorcery -- Arcane`,
    set: `Commander Masters`,
    desc: `"The trees keep out history better than any digital device.” -- Satsuki, the Living Lore"`,
    effect: `Search your library for up to two basic land cards, reveal those cards, put one onto the battlefield tapped and the other into your hand, then shuffle.`,
    imageUrl: `/assets/images/magic-kodamas-reach.png`,
    quality: `NM`,
    quantity: 91,
    instock: `T`,
    foil: `foil`,
    issueNum: 649,
    artist: `James Bond`,
    price: 0.39,
  });

  return (
    <>
      <div className="m-4">
        <h1>{item.name}</h1>
        <div className="my-4 rounded-xl bg-gray-200 p-4 ">
          <Image
            className="mx-auto rounded"
            src={item.imageUrl}
            alt={item.name}
            height={200}
            width={150}
          />
        </div>

        <div className="my-4 flex flex-col rounded-xl bg-gray-300 p-4">
          <p className="p-large font-bold">${item.price} CAD</p>
          <div className="flex">
            <div className="flex w-1/2 border-r-2 border-solid border-black">
              <p className="w-1/2">NM</p>
              <p className="w-1/2">PL</p>
            </div>
            <div className="ml-4 flex w-1/2">
              <p className="w-1/2">Non-Foil</p>
              <p className="w-1/2">Foil</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}
