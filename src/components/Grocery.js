const Grocery = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-green-50 px-4 py-16">
      {/* Icon/Illustration Container */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <span className="text-5xl">🛒</span>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Insta<span className="text-green-600">Mart</span> & Grocery
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our Grocery Store! This vertical is 
          <span className="font-semibold text-green-700"> Lazy Loaded</span>, 
          meaning it was bundled separately to keep our main app light and fast.
        </p>
      </div>

      {/* Placeholder Grid to show "Coming Soon" vibe */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {['Fruits', 'Veggies', 'Dairy', 'Snacks'].map((item) => (
          <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-50 rounded-lg mb-3"></div>
            <span className="text-sm font-medium text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <button className="mt-10 px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-lg active:scale-95">
        Start Shopping
      </button>
    </div>
  );
};

export default Grocery;