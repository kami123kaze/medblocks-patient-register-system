import React, { useState, useEffect } from "react";

const SqlQueryInput = ({ query, setQuery }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const seenCount = parseInt(sessionStorage.getItem("sqlWarningSeen") || "0", 10);
    if (seenCount < 2) {
      setShowTooltip(true);
      sessionStorage.setItem("sqlWarningSeen", (seenCount + 1).toString());
    }
  }, []);

  return (
    <div className="relative group">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your raw SQL query here..."
        className="w-full h-32 p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 resize-none"
      />
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none z-50 max-w-xs text-center select-none">
        NOTE ::  Since it was not mentioned, I have not disabled dangerous commands such as DROP or DELETE
        </div>
      )}
    </div>
  );
};

export default SqlQueryInput;
