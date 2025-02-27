import Image from "next/image";
import Better from "../components/Better";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col items-start">
          <span className="text-emerald-600 font-bold text-xl">Better</span>
          <span className="text-gray-600 text-lg">Mortgage</span>
        </div>
        <div className="flex items-center text-gray-700">
          <svg
            className="w-5 h-5 text-emerald-600 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="font-bold ">Need help? Call (415) 523 8837</span>
        </div>
      </div>

      {/* Divider with profile avatar */}
      <div className="relative mb-12">
        <hr className="border-gray-200" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
            <div className="w-full h-full flex items-center justify-center">
              <Image 
              src = '/girl.png'
              alt = "girl"
              width={300}
              height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Greeting and options */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Hi, I'm Betsy!
        </h1>
        <h2 className="text-3xl text-gray-700 mb-8">
          What can I help you with?
        </h2>

        {/* Option buttons */}
        <div className="space-y-4 max-w-lg mx-auto">
          <button className="w-full flex items-center border border-green-700 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-50 rounded-md mr-4">
              <svg
                className="w-5 h-5 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-left text-lg text-gray-700">
              Buying a home
            </span>
          </button>

          <button className="w-full flex items-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50 hover:border-green-700 transition">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-50 rounded-md mr-4">
              <svg
                className="w-5 h-5 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <span className="text-left text-lg text-gray-700">
              Refinance my mortgage
            </span>
          </button>

          <button className="w-full hover:border-green-700 flex items-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-50 rounded-md mr-4">
              <svg
                className="w-5 h-5 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-left text-lg text-gray-700">
              Get cash from my home
            </span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center mb-8 gap-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800">$100B</h3>
          <p className="text-gray-600">home loans funded entirely online</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800">400K</h3>
          <p className="text-gray-600">Customers who chose a Better Mortgage</p>
        </div>
      </div>

      {/* Unlock benefits */}
      <div className="bg-emerald-50 rounded-lg p-6 max-w-lg mx-auto">
        <p className="text-center text-gray-700 mb-4">
          After a few questions, you'll unlock:
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-gray-700">Custom mortgage rates</span>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08-.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-gray-700">Exclusive offers</span>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-gray-700">A personalized dashboard</span>
          </div>
        </div>
      </div>
      <Better />
      <Footer />
    </section>
  );
}
