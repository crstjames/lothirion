import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import stjamesAvatar from "../assets/stjames_avatar.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section - made more compact */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent"></div>
          <div className="max-w-[90rem] mx-auto px-6 py-20 max-h-[300px] flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-medium mb-6 tracking-tight">About Us</h1>
              <p className="text-xl max-w-2xl leading-relaxed text-gray-300 font-light">
                We deliver exceptional consulting services to help businesses transform and thrive in the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Company values section - new section */}
        <div className="bg-gray-950 py-16">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-3 text-sky-500">Our Mission</h3>
                <p className="text-gray-400 font-light">
                  To empower organizations with technology solutions that deliver measurable business value and drive
                  innovation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-sky-500">Our Approach</h3>
                <p className="text-gray-400 font-light">
                  We combine deep industry expertise with cutting-edge technical knowledge to solve complex business
                  challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-sky-500">Our Values</h3>
                <p className="text-gray-400 font-light">
                  Integrity, excellence, innovation, and client-centricity guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leader section */}
        <div className="max-w-[90rem] mx-auto px-6 py-20">
          <div className="border-b border-gray-800 pb-8 mb-16">
            <h2 className="text-3xl font-medium mb-4">Our leadership</h2>
            <div className="flex justify-between items-end">
              <p className="text-gray-400 text-lg max-w-2xl font-light">Meet the visionary leader behind our success</p>
              <a
                href="/contact"
                className="inline-flex items-center bg-sky-600 hover:bg-sky-500 px-6 py-3 rounded-sm transition-colors text-sm font-normal group"
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Christopher St James card */}
            <div className="max-w-sm">
              <div className="relative mb-8 group w-3/4 mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-emerald-800 rounded-lg opacity-20 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative">
                  <img
                    src={stjamesAvatar}
                    alt="Christopher St James"
                    className="w-full aspect-square object-cover bg-gray-800 rounded-lg"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-2">Christopher St James</h3>
                <p className="text-xl text-gray-400 mb-6 font-light">Owner</p>

                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-sky-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center text-white hover:text-sky-500 transition-colors group/bio"
                  >
                    Read bio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transform group-hover/bio:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
