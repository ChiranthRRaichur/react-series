//import User from "./User";
import UserClass from "./UserClass";
import React from "react";

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center py-12 px-4 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About <span className="text-orange-500">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are dedicated to bringing the best culinary experiences from local
          restaurants straight to your doorstep.
        </p>
      </div>

      {/* Profile Card Container */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
          Our Team
        </h2>

        {/* User Info Component */}
        <div className="space-y-4 text-gray-700">
          <UserClass name={"CRR_Class"} mail={"crr@gmail.com"} />
        </div>
      </div>
    </div>
  );
};

export default About;
