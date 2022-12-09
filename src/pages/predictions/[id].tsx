import { useState } from "react";
import predictions from "../../data/predictions.json";
import { IPredictions } from "../../interfaces/IPredictions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Prediction() {
  // const [prediction, setPrediction] = useState<IPredictions>(predictions);

  // const quinze = "0-15";

  // ChartJS.register(ArcElement, Tooltip, Legend);

  // console.log(
  //   prediction.response[0].teams.home?.league?.goals.for.minute.quinze?.total
  // );

  // const data = {
  //   labels: ["red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div>
      building
      {/* <Doughnut data={data} /> */}
    </div>
  );
}
