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
        src="https://previews.dropbox.com/p/thumb/ABpWnIWwWtKt_4e15inEhmKz9e9Rf4Iyb6MTxpUk5USnL22erWf68BOblcTAjtoQtdR9e-6kXhG1EMw51Gbcb2UYNRHCNYQs9VflyLjSAhkSzlGUDcEv_4daWWHAej9Y2E7fzRqtAdTmXKBvg7HSxkGnJKS-86kee6QKD-vp29dMPQj5fCjWu4dxd2arO2Bzl7TK2akJOyX94krx_v2MDFmwMrzZqOZhzam9ONxWRnakQyULRjrGyZ3cSg-UJO-XTxJSQ3Z52G592LUBQtZxzZQWzlpNQryMpupQu4vjWj7REdOdOQv7QHQcd7h4rx-U-c4uqCbyXHqGfb4uw_9kLciEdSyBgYWYOpdGeY6STnZciI2LKgHWmfLSvNyoJT15lBs/p.png"
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
      </div>
    </div>
  );
}
