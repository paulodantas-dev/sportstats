import Link from "next/link";
import { useState } from "react";
import { CardTop } from "../components/CardTop";
import tops from "../data/tops.json";
import lives from "../data/lives.json";
import predictions from "../data/predictions.json";
import { ITops } from "../interfaces/ITops";
import { format } from "date-fns";
import { ILives } from "../interfaces/ILives";
import Image from "next/image";
import stadium from "../../public/stadium.png";
import { IPredictions } from "../interfaces/IPredictions";
import { IoFootball } from "react-icons/io5";

export default function Home() {
  const [top, setTop] = useState<ITops>(tops);
  const [live, setLive] = useState<ILives>(lives);
  const [prediction, setPrediction] = useState<IPredictions>(predictions);

  return (
    <div className="flex flex-col gap-12 h-full p-2">
      <div className="flex-grow grid grid-cols-[1fr_3fr_1fr] gap-2 p-2">
        <div className="flex flex-col gap-4 p-2 rounded shadow bg-slate-700">
          <h5 className="text-xl font-bold leading-none uppercase text-sky-700">
            Match Details
          </h5>
          <div className="text-sm font-light">
            <span className="block text-center">
              {live.response[0].league.name}
            </span>
            <cite className="text-center block">
              {live.response[0].league.country}
            </cite>
            <div className="flex items-center justify-between gap-2 mt-2">
              {live.response[0].league.flag && (
                <Image
                  src={live.response[0].league.flag}
                  alt={""}
                  width={24}
                  height={24}
                />
              )}
              <div className="flex flex-col">
                <span className="block text-center">
                  {live.response[0].league.round}
                </span>
                <cite className="block text-center">
                  {live.response[0].league.season}
                </cite>
              </div>
              {live.response[0].league.logo && (
                <Image
                  src={live.response[0].league.logo}
                  alt={""}
                  width={24}
                  height={24}
                />
              )}
            </div>
          </div>
        </div>
        <Link
          href={`/predictions/${live.response[0].fixture.id}`}
          className="cursor-pointer border-2 border-transparent hover:border-sky-700 transition-all hover:scale-105 rounded shadow p-2 bg-slate-700"
        >
          <h5 className="text-xl pb-2 mb-2 font-bold leading-none text-center uppercase border-b-2 border-slate-300/60">
            Jogo do dia
          </h5>
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={live.response[0].teams.home.logo ?? ""}
                alt={""}
                width={70}
                height={70}
              />
              <span className="uppercase font-bold text-lg text-center">
                {live.response[0].teams.home.name}
              </span>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center text-4xl">
              <div className="font-extrabold text-4xl">
                <span>{live.response[0].goals.home}</span>
                <span className="text-sky-700 mx-2 font-extrabold text-4xl">
                  -
                </span>
                <span>{live.response[0].goals.away}</span>
              </div>
              <p className="text-xs font-thin text-slate-300">
                {format(new Date(live.response[0].fixture.date), "dd/MM/yyyy")}
              </p>
              <div className="flex flex-col items-center justify-center">
                <Image src={stadium} width={24} height={24} alt={""} />
                <p className="text-xs font-extralight">
                  {live.response[0].fixture.venue.name}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                src={live.response[0].teams.away.logo ?? ""}
                alt={""}
                width={70}
                height={70}
              />
              <span className="uppercase font-bold text-lg text-center">
                {live.response[0].teams.away.name}
              </span>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2 p-2 rounded shadow bg-slate-700">
          <h5 className="text-xl font-bold leading-none uppercase text-sky-700">
            Predição
          </h5>
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex flex-col">
                <h5 className="font-medium tracking-tighter text-xs uppercase">
                  Ganhar
                </h5>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extralight">
                    {prediction.response[0].predictions.winner.comment}
                  </span>
                  -
                  <span className="text-sm font-extralight">
                    {prediction.response[0].predictions.winner.name}
                  </span>
                </div>
              </div>
              <div>
                <h5 className="font-medium tracking-tighter text-xs uppercase">
                  gols
                </h5>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col items-center justify-center">
                    <IoFootball size={12} />
                    <span>{prediction.response[0].predictions.under_over}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={live.response[0].teams.home.logo ?? ""}
                      alt={""}
                      width={12}
                      height={12}
                    />
                    <span>{prediction.response[0].predictions.goals.home}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={live.response[0].teams.away.logo ?? ""}
                      alt={""}
                      width={12}
                      height={12}
                    />
                    <span>{prediction.response[0].predictions.goals.away}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm font-extralight">
              Dica:
              <span className="text-slate-300 text-xs font-thin ml-2">
                {prediction.response[0].predictions.advice}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-slate-100">
              Top scores
            </h5>
            <Link
              href="#"
              className="text-sm font-medium cursor-pointer text-sky-800 hover:underline hover:text-sky-600 transition-colors"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-slate-700 mt-2">
            {top.response.slice(0, 5).map((item) => {
              return (
                <li
                  key={item.player.id}
                  className="p-2 hover:scale-105 transition-transform cursor-pointer hover:bg-slate-700/80 rounded px-2"
                >
                  <CardTop item={item} type="score" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-slate-100">
              Top assists
            </h5>
            <Link
              href="#"
              className="text-sm font-medium cursor-pointer text-sky-800 hover:underline hover:text-sky-600 transition-colors"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-slate-700 mt-2">
            {top.response.slice(0, 5).map((item) => {
              return (
                <li
                  key={item.player.id}
                  className="p-2 hover:scale-105 transition-transform cursor-pointer hover:bg-slate-700/80 rounded px-2"
                >
                  <CardTop item={item} type="assist" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-slate-100">
              Top yellow cards
            </h5>
            <Link
              href="#"
              className="text-sm font-medium cursor-pointer text-sky-800 hover:underline hover:text-sky-600 transition-colors"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-slate-700 mt-2">
            {top.response.slice(0, 5).map((item) => {
              return (
                <li
                  key={item.player.id}
                  className="p-2 hover:scale-105 transition-transform cursor-pointer hover:bg-slate-700/80 rounded px-2"
                >
                  <CardTop item={item} type="yellow" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-slate-100">
              Top red cards
            </h5>
            <Link
              href="#"
              className="text-sm font-medium cursor-pointer text-sky-800 hover:underline hover:text-sky-600 transition-colors"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-slate-700 mt-2">
            {top.response.slice(0, 5).map((item) => {
              return (
                <li
                  key={item.player.id}
                  className="p-2 hover:scale-105 transition-transform cursor-pointer hover:bg-slate-700/80 rounded px-2"
                >
                  <CardTop item={item} type="red" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
