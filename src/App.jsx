import { RegisterModal } from "./components/modals/RegisterModal";

export const App = () => {
  return (
    <main className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/xon0l7vlxlmmasayigsa')] bg-no-repeat bg-cover h-screen text-white">
      <div
        className="flex flex-col items-start justify-center gap-24
       h-full max-w-screen-xl mx-auto"
      >
        <p className="text-6xl max-w-6xl font-semibold">
          Discover Your WEB3 DIDs Event Ecosystem: Unleashing the Power of
          Decentralized Identity!
        </p>
        <h1 className="text-7xl max-w-32 font-bold">Decentralize Events</h1>
        <div className="flex justify-between items-center gap-4 w-full">
          <RegisterModal />
          <img
            src="https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/d5iteqlozm6lf1bmlimv"
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
      </div>
    </main>
  );
};
