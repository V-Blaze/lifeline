import React from "react";

const Onboarding = () => {
  const countries = ["Select Country", "Nigeria", "Ghana", "Niger"];
  const states = ["Choose Your State", "Anambra", "Enugu", "Lagos"];
  const localGovs = [
    "Your Local Government",
    "Onitsha-North",
    "Anaocha",
    "Ogbaru",
  ];
  const towns = ["Choose Your Town", "Nkpor", "Omagba", "Obosi"];
  const bloodGroups = [
    "Choose Blood Group",
    "A+",
    "A-",
    "AB+",
    "AB-",
    "B+",
    "B-",
    "O+",
    "O-",
  ];

  return (
    <main className="onboarding ">
      <div className=" w-full h-full flex flex-col items-center bg-black bg-opacity-[50%] pt-[3%]">
        <h2 className="font-bold text-[2.5rem] md:text-[3rem] text-white mb-8 text-center">
          WELCOME TO LIFELINE
        </h2>
        <div className="flex flex-col gap-4 w-full px-4 md: p-2 md:w-[30%] items-center mb-4">
          <input
            type="text"
            name="Full name"
            placeholder="Enter Your full name"
            className="w-full py-2 rounded-md px-1"
          />
          <input
            type="number"
            name="Phone Number"
            placeholder="Enter Your Phone Number"
            className="w-full py-2 rounded-md px-1"
          />
          <select
            name="gender"
            id="gender"
            className="w-full py-2 rounded-md px-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>

          <select
            name="Countries"
            id="countries"
            className="w-full py-2 rounded-md px-1"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            name="states"
            id="states"
            className="w-full py-2 rounded-md px-1"
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <select
            name="localGovs"
            id="localGovs"
            className="w-full py-2 rounded-md px-1"
          >
            {localGovs.map((localGov) => (
              <option key={localGov} value={localGov}>
                {localGov}
              </option>
            ))}
          </select>
          <select
            name="towns"
            id="towns"
            className="w-full py-2 rounded-md px-1"
          >
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
          <label htmlFor="date-of-birth" className="w-full text-white">
            Date Of Birth
            <input
              type="date"
              name="date-of-birth"
              className="w-full py-2 rounded-md px-1 text-black"
            />
          </label>
          <label htmlFor="blood-group" className="w-full ">
            <span className="text-white">Blood Group</span>
            <select
              name="blood-group"
              id="blood-group"
              className="w-full py-2 rounded-md px-1"
            >
              {bloodGroups.map((bloodGroup) => (
                <option
                  key={bloodGroup}
                  value={bloodGroup}
                  className="w-full py-2 rounded-md px-1 text-black"
                >
                  {bloodGroup}
                </option>
              ))}
            </select>
          </label>

          <div className="w-full flex items-center justify-center">
            <button
              type="button"
              className="w-[60%] py-2 rounded-md bg-green-400 text-black font-bold text-"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;
