import { useState } from "react";
import predictions from "../../data/predictions.json";
import { IPredictions } from "../../interfaces/IPredictions";

export default function Prediction() {
  const [prediction, setPrediction] = useState<IPredictions>(predictions);

  return <div>Prediction</div>;
}
