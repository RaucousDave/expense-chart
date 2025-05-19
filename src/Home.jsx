import Chart from "./Chart";
import Header from "./Header";

export default function Home() {
  return (
    <div className="min-h-screen flex gap-5 px-5 flex-col justify-center items-center ">
      <Header />
      <Chart />
    </div>
  );
}
