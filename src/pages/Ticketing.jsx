import { useState } from "react";
import { profile } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { DatePicker } from "antd";
// import {Button} from "../components/ui/button"
import { ArrowLeft, Image } from "lucide-react";
// import { useNavigate } from "react-router";

export const Ticketing = () => {
  // const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [tokenImage, setTokenImage] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setTokenImage(file);
      const prevFile = URL.createObjectURL(file);
      setPreview(prevFile);
    }
  };

  const [eventNameValue, setEventNameValue] = useState("");

  function handleEventNameChange(evt) {
    const value = evt.target.value;
    setEventNameValue(value);
  }

  const [eventDescValue, setEventDescValue] = useState("");

  function handleEventDescChange(evt) {
    const value = evt.target.value;
    setEventDescValue(value);
  }

  const [selectedOption, setSelectedOption] = useState("");

  const ticketType = ["VIP", "Regular", "General"];

  const handleTicketTypeChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [eventVenueValue, setEventVenueValue] = useState("");

  function handleEventVenueChange(evt) {
    const value = evt.target.value;
    setEventVenueValue(value);
  }

  const [selectedDate, setSelectedDate] = useState("");

//   const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
// console.log("today",today);
// console.log("selectedDate",selectedDate);
  // Handle change event for date input
  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected);

    // Basic validation: check if the selected date is in the future
    // if (selected < today) {
    //  return alert("Please select a future date.");
    // }else{
    //   setSelectedDate(selected);
    // }
  };

  const [ticketPrice, setTicketPrice] = useState("");

  function handleTicketPriceChange(evt) {
    const value = evt.target.value;
    setTicketPrice(value);
  }

  const [ticketAmount, setTicketAmount] = useState("");

  function handleTicketAmountChange(evt) {
    const value = evt.target.value;
    setTicketAmount(value);
  }

  function handleMintTicket(){
    alert(`${eventNameValue} ${eventDescValue} ${selectedOption} ${ticketPrice} ${eventVenueValue} ${selectedDate} ${ticketAmount}`);
  }

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
            {/* <Button
              onClick={() => {
                navigate("/ticketing/ticket-type");
              }}
              variant="ghost"
              className="p-0 rounded-full hover:bg-transparent"
            >
              <p className="text-lg">Save</p>
            </Button> */}
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
              className="cursor-pointer bg-white text-black w-fit px-7 py-3 rounded-lg"
            >
              <Input
                id="file-upload"
                name="file-upload"
                accept="image/*"
                type="file"
                onChange={handleFileUpload}
                className="sr-only"
              />
              {preview ? (
                <img
                  // aria-hidden="true"
                  src={preview}
                  alt="Avatar Preview"
                  // width={300}
                  // height={300}
                  className="h-20 w-20 rounded-[16px] object-cover"
                  // className="h-full w-full rounded-[16px] object-cover"
                ></img>
              ) : (
                <Image className="w-20 h-20" />
              )}
            </label>
            <p className="text-xl">Upload an image</p>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Name"
              value={eventNameValue}
              onChange={handleEventNameChange}
              className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Description"
              value={eventDescValue}
              onChange={handleEventDescChange}
              className=" w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <p>Ticket Type</p>
          <div className="w-full">
            <select
              id="ticket-type"
              className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              value={selectedOption}
              onChange={handleTicketTypeChange}
            >
              <option value="">Select...</option>
              {ticketType.map((fruit) => (
                <option key={fruit} value={fruit.toLowerCase()}>
                  {fruit}
                </option>
              ))}
            </select>
          </div>

          {selectedOption && (
            <div className="w-full">
              <Input
                type="text"
                placeholder="Ticket Price"
                value={ticketPrice}
              onChange={handleTicketPriceChange}
                className=" w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          )}

          <div className="w-full">
            <Input
              type="text"
              placeholder="Enter Amount of Tickets"
              value={ticketAmount}
              onChange={handleTicketAmountChange}
              className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="w-full">
            <Input
              type="text"
              placeholder="Venue"
              value={eventVenueValue}
              onChange={handleEventVenueChange}
              className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="w-full">
            <input
            className="w-full bg-transparent max-w-3xl py-4 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              min={today} // Prevent selecting past dates
            />
            {/* <DatePicker className="w-full max-w-3xl py-4 px-6" /> */}
          </div>

          <Button
          variant="outline"
          onClick={handleMintTicket}
          className="bg-[#3A296B] border-[#2E2155] hover:bg-transparent hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96"
        >
          Mint Ticket
        </Button>
        </form>
      </main>
    </div>
  );
};
