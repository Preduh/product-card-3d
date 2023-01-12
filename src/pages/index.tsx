import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showGif, setShowGif] = useState(false);

  return (
    <div className="bg-[#D9CDF7] w-full h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="w-[449pt] h-[253pt] flex flex-col justify-center relative">
          {showGif ? (
            <div className="absolute z-10 top-[8pt] right-[67pt]">
              <button
                onClick={() => setShowGif(!showGif)}
                className="w-[16pt] h-[16pt] relative"
              >
                <Image
                  className="object-contain"
                  quality={100}
                  priority
                  fill
                  alt="X Icon"
                  src="/xIcon.svg"
                />
              </button>
            </div>
          ) : (
            <div className="absolute z-10 top-[8pt] right-[50pt]">
              <button
                onClick={() => setShowGif(!showGif)}
                className="w-[33pt] h-[22.47pt] relative"
              >
                <Image
                  className="object-contain"
                  quality={100}
                  priority
                  fill
                  alt="360°"
                  src="/360.svg"
                />
              </button>
            </div>
          )}

          {showGif ? (
            <img className="object-contain" alt="sofa" src="/sofa.gif" />
          ) : (
            <div className="w-full h-full relative">
              <Image
                className="object-contain"
                quality={200}
                priority
                fill
                alt="sofa"
                src="/sofa.svg"
              />
            </div>
          )}
        </div>
      </div>

      <section className="flex flex-col justify-center">
        <div className="text-[#271A45] space-y-3">
          <p className="font-lato font-light text-[10pt]">CÓDIGO: 42404</p>
          <h1 className="text-[32pt] font-semibold font-crimson-pro">
            Sofá Margot II - Rosé
          </h1>
          <p className="text-[16pt] font-lato font-normal">R$ 4.000</p>
        </div>

        <button className="uppercase border border-[#271A45] w-[148pt] h-[32pt] rounded-full mt-[20pt] text-[12pt] text-[#271A45] font-lato">
          Adicionar à cesta
        </button>
      </section>
    </div>
  );
}
