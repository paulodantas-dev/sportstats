import Image from "next/image";
import { ILive } from "../interfaces/ILives";
import stadium from "../../public/stadium.png";
import { IoFootball } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { format } from "date-fns";
import Link from "next/link";

interface CardLiveProps {
  prediction: ILive;
}

export const CardLive = ({ prediction }: CardLiveProps) => {
  return (
    <Link
      href={`/predictions/${prediction.fixture.id}`}
      className="flex flex-col p-4 shadow rounded bg-slate-900 border-2 border-slate-900 cursor-pointer hover:border-sky-700 hover:border-2 transition-colors "
    >
      <div className="flex-grow grid grid-cols-3 ">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={prediction.teams.home.logo ?? ""}
            alt={""}
            width={70}
            height={70}
          />
          <span className="uppercase font-bold text-lg text-center">
            {prediction.teams.home.name}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center text-4xl">
          <div className="font-extrabold text-4xl">
            <span>{prediction.goals.home}</span>
            <span className="text-sky-700 mx-2 font-extrabold text-4xl">-</span>
            <span>{prediction.goals.away}</span>
          </div>
          <p className="text-xs font-thin text-slate-300">
            {format(new Date(prediction.fixture.date), "dd/MM/yyyy")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={prediction.teams.away?.logo ?? ""}
            alt={""}
            width={70}
            height={70}
          />
          <span className="uppercase font-bold text-lg text-center">
            {prediction.teams.away.name}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative flex items-center gap-2 ml-4">
          <Image src={stadium} alt={""} width={48} height={48} />
          <div>
            <span className="flex items-center gap-2 text-sm font-light">
              <IoFootball />
              {prediction.fixture.venue.name}
            </span>
            <span className="flex items-center gap-2 text-sm font-light">
              <FaCity />
              {prediction.fixture.venue.city}
            </span>
          </div>
        </div>
        <div className="relative shadow bg-slate-700 rounded p-2 flex items-center justify-center flex-col">
          <div className="text-center">
            <h3 className="text-base font-light">{prediction.league.name}</h3>
            <span className="text-xs font-thin text-slate-300">
              {prediction.league.country}
            </span>
          </div>

          <Image
            className="rounded-full absolute -top-2 -left-2"
            src={prediction.league.flag}
            alt={""}
            width={40}
            height={40}
          />

          <Image
            className="rounded-full absolute -bottom-2 -right-2"
            src={prediction.league.logo}
            alt={""}
            width={40}
            height={40}
          />

          <div className="text-center">
            <p className="text-sm font-light text-slate-300">
              {prediction.league.round}
            </p>
            <p className="text-xs font-thin text-slate-300">
              {prediction.league.season}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
