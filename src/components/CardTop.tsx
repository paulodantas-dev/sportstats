import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { ITop } from "../interfaces/ITops";
import { GiFootTrip } from "react-icons/gi";

interface ICardTopProps {
  item: ITop;
  type: "score" | "assist" | "red" | "yellow";
}

export const CardTop = ({ item, type }: ICardTopProps) => {
  return (
    <Link
      href={`/player/${item.player.id}`}
      className="flex items-center justify-between p-2 rounded shadow bg-slate-800"
    >
      <div className="flex-grow flex items-center gap-2 ">
        <Image
          className="rounded-full"
          src={item.player.photo}
          alt="Neil image"
          width={32}
          height={32}
        />
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <FaUserCircle size={12} />
            <p className="text-sm font-light">{item.player.name}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <Image
              src={item.statistics[0].team.logo}
              alt={""}
              width={14}
              height={14}
              className="object-cover"
            />
            <p className="text-xs font-light">{item.statistics[0].team.name}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {type === "score" && <IoFootball size={16} />}
        {type === "assist" && <GiFootTrip size={16} />}
        {type === "red" && (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Red_card.svg"
            alt=""
            width={12}
            height={12}
          />
        )}
        {type === "yellow" && (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Yellow_card.svg"
            alt=""
            width={12}
            height={12}
          />
        )}

        <p className="text-lg font-bold">{item.statistics[0].goals.total}</p>
      </div>
    </Link>
  );
};
