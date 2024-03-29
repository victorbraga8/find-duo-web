import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdsBanner } from "./components/CreateAdsBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("https://api-findduo.vercel.app/games").then((response) => {
      console.log(games);
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} className="max-w-sm" alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-clip-text text-transparent bg-nlw-gradient">
          duo
        </span>{" "}
        está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              id={game.id}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
              title={game.title}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdsBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
