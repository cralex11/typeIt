import React from "react";

const Spinner = ({ loading = true }) => {
  if (!loading) return;
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center fixed top-0 left-0">
      <div
        className="animate-spin rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
        viewBox="0 0 24 24"
        style={{ borderTopColor: "#a373a1" }}
      ></div>
    </div>
  );
};

export default Spinner;
