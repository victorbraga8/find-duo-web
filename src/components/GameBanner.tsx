import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "./CreateAdModal";

interface GameBannerProps {
  id: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger className=" text-white rounded flex items-center gap-3">
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={props.bannerUrl} alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {props.title}
              </strong>
              <span className="text-zinc-300 text-sm block mt-1">
                {props.adsCount} anúncio (s)
              </span>
            </div>
          </a>
        </Dialog.Trigger>
        <CreateAdModal id={props.id} title={props.title} />
      </Dialog.Root>
    </div>
  );
}
