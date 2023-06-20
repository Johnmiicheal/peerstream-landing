"use client";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";

export default function HomePage() {
  const router = useRouter();

  return (
    <body className="bg-[url('/bgp.png')] bg-center bg-cover bg-no-repeat">
      <header className="justify-between flex py-4 px-5 h-14 items-center">
        <a
          href="/"
          className="flex items-center text-xl font-semibold text-gray-900 dark:text-white gap-1"
        >
          <img
            width="140"
            height="140"
            src="/peerlogo.png"
            alt="peerlogo"
          />
        </a>
        <div>
          <button
            className="z-40 text-black px-4 py-2 relative"
            style={{ background: "#F1680D" }}
            onMouseEnter={() => {
              const divs = document.querySelectorAll(".hover-div");
              divs.forEach((div) => {
                div.classList.add("bg-white");
              });
            }}
            onMouseLeave={() => {
              const divs = document.querySelectorAll(".hover-div");
              divs.forEach((div) => {
                div.classList.remove("bg-white");
              });
            }}
            onClick={() => router.push("https://live.peerstream.xyz")}
          >
            Demo
          </button>
          <div
            className="z-20 h-10 w-20  hover-div"
            style={{ marginTop: -37, marginLeft: -4, border: "1px solid #F1680D" }}
          ></div>
          <div
            className="z-0 h-10 w-20 outline outline-black outline-1 "
            style={{ marginTop: -37, marginLeft: -8 , border: "1px solid #F1680D"}}
          ></div>
        </div>
      </header>
      <section>
        <div className="justify-center items-center px-40">
          <h1
            className="text-center text-5xl font-black mt-20"
            style={{ lineHeight: 1.4, color: "white" }}
          >
            The future of the internet is <br />
            <h1 className="text-5xl p-4 text-center font-black from-orange-700 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent">
              Federated
            </h1>
          </h1>
          <Player
            autoplay
            loop
            src="/Earth.json"
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </div>
      </section>
      <div className="fixed bottom-0 bg-black outline outline-black outline-2 text-center text-gray-500 px-4 w-full">
        &copy; 2023 PeerStream: A final year project of Johnmicheal Elijah-
        Covenant University
      </div>
    </body>
  );
}