import { profile } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "antd";
import { ArrowLeft, Image } from "lucide-react";
import { useNavigate } from "react-router";

export const Ticketing = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover min-h-screen text-white">
      <header className="bg-[#242062] px-8 py-5">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <Button
            onClick={() => {
              window.history.back();
            }}
            variant="ghost"
            className="p-0 rounded-full hover:bg-transparent hover:text-white"
          >
            <ArrowLeft className="w-10 h-10" />
          </Button>
          <p className="text-2xl font-bold text-white">Ticketing</p>
          <div className="flex items-center gap-4">
            <Button onClick={() => {navigate("/ticketing/ticket-type")}} variant="ghost" className="p-0 rounded-full hover:bg-transparent">
              <p className="text-lg">Save</p>
            </Button>
            <Button variant="ghost" className="p-0 rounded-full">
              <img src={profile} alt="" className="w-10 h-10 rounded-full" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-10 py-10 max-w-screen-xl mx-auto">
        <h3 className="text-4xl font-bold">Create new NFT Ticket</h3>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-white text-black w-fit px-14 py-6 rounded-lg"
            >
              <Input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
              <Image className="w-20 h-20" />
            </label>
            <p className="text-xl">Upload an image</p>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Description"
              className=" w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <p>Ticket Sale</p>
          <div className="w-full">
            <Input
              type="text"
              placeholder="Ticket Price"
              className=" w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="w-full">
            <Input
              type="text"
              placeholder="Venue"
              className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="w-full">
            <DatePicker className="w-full max-w-3xl py-4 px-6" />
          </div>
        </form>
      </main>
    </div>
  );
};
