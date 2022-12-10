import { useState } from "react";
import { ILives } from "../../interfaces/ILives";
import dataLives from "../../data/lives.json";
import { CardLive } from "../../components/CardLive";

export default function Predictions() {
  const [predictions, setPredictions] = useState<ILives>(dataLives);

  return (
    <div className="p-2 bg-slate-800 rounded h-full flex flex-col gap-4">
      <h1 className="uppercase text-3xl font-extrabold text-sky-700 md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-teal-400">
          previ
        </span>
        sões
      </h1>
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {predictions.response.slice(0, 4).map((prediction) => (
          <CardLive key={prediction.fixture.id} prediction={prediction} />
        ))}
      </div>
      <div />
    </div>
  );
}
