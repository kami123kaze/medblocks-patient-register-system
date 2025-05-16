import React from "react";

const SqlQueryInput = ({ query, setQuery }) => {
  return (
    <textarea
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Enter your raw SQL query here..."
      className="w-full h-32 p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 resize-none"
    />
  );
};

export default SqlQueryInput;
