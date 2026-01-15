const MenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-8">
      {/* Header Shimmer: Restaurant Info */}
      <div className="border-b-2 border-dashed border-gray-200 pb-8 mb-8 animate-pulse">
        <div className="h-8 bg-gray-200 rounded-md w-1/2 mb-4"></div>
        <div className="flex gap-4 mb-4">
          <div className="h-5 bg-gray-100 rounded-full w-20"></div>
          <div className="h-5 bg-gray-100 rounded-full w-32"></div>
        </div>
        <div className="h-4 bg-gray-100 rounded-md w-1/3"></div>
      </div>

      {/* Menu Categories Shimmer */}
      {Array(3)
        .fill("")
        .map((_, idx) => (
          <div className="mb-10" key={idx}>
            {/* Category Title */}
            <div className="h-6 bg-gray-200 rounded-md w-44 mb-6 animate-pulse"></div>

            {/* Menu Items */}
            <ul className="space-y-12">
              {Array(3)
                .fill("")
                .map((__, j) => (
                  <li className="flex justify-between items-start pb-8 border-b border-gray-100 last:border-0" key={j}>
                    {/* Item Details (Left side) */}
                    <div className="flex-1 space-y-3 pr-8 animate-pulse">
                      <div className="h-5 bg-gray-200 rounded-md w-2/3"></div> {/* Dish Name */}
                      <div className="h-4 bg-gray-200 rounded-md w-16"></div> {/* Price */}
                      <div className="space-y-2 pt-2">
                        <div className="h-3 bg-gray-100 rounded-md w-full"></div> {/* Description Line 1 */}
                        <div className="h-3 bg-gray-100 rounded-md w-4/5"></div> {/* Description Line 2 */}
                      </div>
                    </div>

                    {/* Item Image (Right side) */}
                    <div className="relative animate-pulse">
                      <div className="w-32 h-32 bg-gray-200 rounded-2xl"></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-8 bg-gray-100 rounded-lg border border-gray-200"></div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default MenuShimmer;