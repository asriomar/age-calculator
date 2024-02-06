import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(`${birthYear}-${birthMonth}-${birthDate}`);
    const ageDiffInMilliseconds = today - birthDateObj;
    const ageDate = new Date(ageDiffInMilliseconds);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Subtracting 1 to avoid counting the day of the current month
    setAge({ years, months, days });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Age Calculator</h2>
      <div className="mb-4">
        <label
          htmlFor="birthDate"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth:
        </label>
        <div className="mt-1 flex">
          <input
            type="number"
            id="birthDate"
            className="block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="DD"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <input
            type="number"
            id="birthMonth"
            className="block mx-2 w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="MM"
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
          />
          <input
            type="number"
            id="birthYear"
            className="block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="YYYY"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Your age is: {age.years} years, {age.months} months, and {age.days}{" "}
            days
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
