import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex place-items-center justify-center h-screen w-full fixed bg-mobile-pattern lg:bg-desktop-pattern bg-no-repeat bg-contain bg-[#dfe8ff]">
      <div className="max-w-[440px] min-w-[370px] bg-white rounded-3xl overflow-hidden">
        <img src="/images/illustration-hero.svg" alt="Girl listening to music" />
        <div className="flex flex-col items-center gap-6 pt-10 ">
          <h1 className="text-3xl font-bold">Order Summary</h1>
          <p className="text-center text-gray-400 text-[1.1rem] px-10">You can now listen to millions of songs, audiobooks,
            and podcasts on
            any device anywhere you like!</p>
          <div className="w-4/5 flex p-5 rounded-2xl justify-between bg-[#f8f9fe]">
            <div className="flex gap-6">
              <img src="/images/icon-music.svg" alt="" />
              <div className="">
                <h2 className="font-bold">Annual Plan</h2>
                <p className="text-gray-400">$59.99/year</p>
              </div>
            </div>
            <button className="underline text-blue-800 hover:no-underline hover:text-purple-600 font-semibold">Change</button>
          </div>
          <button className="w-4/5 py-4 mt-2 bg-blue-700 hover:bg-blue-400 rounded-3xl text-white text-xl font-semibold">Proceed to Payment</button>
          <button className="w-4/5 py-4 mb-5 text-gray-400 hover:text-gray-900 text-xl font-semibold">Cancel Order</button>
        </div>


      </div>
    </div>
  )
}
