"use client";

import { useState } from "react";

type Advocate = {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string;
  phoneNumber: string;
};

const MIN_SEARCH_LENGTH = 2;

export default function Home({ advocates }: { advocates: Advocate[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAdvocates, setFilteredAdvocates] = useState(advocates ?? []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    setSearchTerm(searchTerm);

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      // destructure filterable values from the object
      const {
        firstName,
        lastName,
        city,
        degree,
        specialties,
        yearsOfExperience,
      } = advocate;

      return [
        firstName,
        lastName,
        city,
        degree,
        specialties,
        yearsOfExperience,
      ].some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const handleResetSearch = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main>
      <header className="flex justify-center items-center py-4 bg-gray-100">
        <h1 className="text-2xl font-bold lg:text-4xl">Solace Advocates</h1>
      </header>

      <form className="flex flex-col bg-white w-full py-12">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold pb-2">Who are you looking for?</h2>
          <p className="pb-4">
            Search for an advocate by name, city, degree, specialties, or years
            of experience.
          </p>
          <div className="relative w-max">
            <input
              className="w-64 border-2 border-gray-500 rounded-md p-2"
              onChange={handleInputChange}
              placeholder="Search..."
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 pb-0.5 rounded-full text-sm data-[show=false]:hidden transition-opacity duration-300"
              data-show={searchTerm.length > MIN_SEARCH_LENGTH}
              onClick={handleResetSearch}
            >
              x
            </button>
          </div>
          <p
            className="pt-2 data-[show=true]:opacity-100 data-[show=false]:opacity-0 transition-opacity duration-300"
            data-show={searchTerm.length > MIN_SEARCH_LENGTH}
          >
            Results for: <span className="font-bold text-lg">{searchTerm}</span>
          </p>
        </div>
      </form>

      <div className="max-lg:overflow-x-scroll">
        <table className="flex w-full flex-col text-center pb-4 max-lg:min-w-7xl">
          <thead className="border-b-2 border-gray-600 w-full">
            <tr className="grid grid-cols-8 lg:grid-cols-10 bg-gray-100 *:py-2 *:border-r-2 *:border-gray-300 *:last:border-r-0">
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Degree</th>
              <th className="col-span-2 lg:col-span-4">Specialties</th>
              <th>
                <span className="max-lg:hidden">Years of Experience</span>
                <span className="lg:hidden">YOE</span>
              </th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody className="w-full *:odd:bg-gray-200 *:even:bg-gray-100">
            {filteredAdvocates.map((advocate, index) => {
              return (
                <tr
                  className="grid grid-cols-8 lg:grid-cols-10 items-center border-gray-300 *:grid *:place-content-center *:h-full *:p-2 *:border-r-2 *:border-gray-300 *:last:border-r-0"
                  key={index}
                >
                  <td>{advocate.firstName}</td>
                  <td>{advocate.lastName}</td>
                  <td>{advocate.city}</td>
                  <td>{advocate.degree}</td>
                  <td className="text-xs lg:text-sm col-span-2 lg:col-span-4">
                    <ul>
                      {advocate.specialties.map((s, index) => (
                        <li key={`${s}-${index}`}>{s}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{advocate.yearsOfExperience}</td>
                  <td>{advocate.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
