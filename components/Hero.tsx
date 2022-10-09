import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Anas Ryadi",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://previews.dropbox.com/p/thumb/ABqwfRxAxqZSMZOGTrHwL98XixsdJLP15qHuV-plhnnNv7-y_0JGkmtlZdrGOXx-fyxpuJv_xWFTi4ovQ0PAtunMr64-QqiznKbfqQCnFK6sPYYtM2Y0-84BGJC59GqcpVjqAqZiwFr4vDkyjca2buU91haFWW6BoS325Ut8K5Oc9_ZEqlZqxGnzK1-ua3c3lyqZQR2Pic3ExmVE46m3MyNidHDf6Qdi_y70bWXMSSavgsEJABgdiRgSvd4MjuO0qWqQXKSB7ebMbmhtAMPR12wL820natCghETioJuoOmDoMIHm66BE3dr24ZUvyZ3lreTvSdOAre5Z6zWfBCmXWF0a738KI9NGxZ6-7X2GiSIx70Fs5kndNb5zQDqyChB5l7c/p.png"
        alt=""
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#Experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
