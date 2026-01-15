const Shimmer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Matching the Search/Filter Bar Loading State */}
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4 animate-pulse">
        <div className="h-10 w-full md:w-64 bg-gray-200 rounded-lg"></div>
        <div className="h-10 w-44 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Shimmer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div 
              key={index} 
              className="flex flex-col p-4 border border-gray-100 rounded-2xl bg-white shadow-sm space-y-4"
            >
              {/* Shimmer Image */}
              <div className="w-full aspect-video bg-gray-200 rounded-xl animate-pulse"></div>
              
              {/* Shimmer Lines */}
              <div className="space-y-3">
                {/* Title Line */}
                <div className="h-5 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
                
                {/* Info Line (Rating/Time) */}
                <div className="flex gap-2">
                   <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
                   <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
                </div>

                {/* Cuisines Line */}
                <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;