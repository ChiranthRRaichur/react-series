const User = (props) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm mx-auto">
            {/* Avatar Placeholder */}
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-3xl font-bold mb-4">
                {props.name?.charAt(0) || "U"}
            </div>

            <div className="text-center">
                <h2 className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">
                    User Profile
                </h2>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {props.name}
                </h3>
                
                <div className="space-y-1">
                    <p className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <span className="text-gray-400">📧</span> crr@gmail.com
                    </p>
                    <p className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <span className="text-gray-400">📞</span> 9876543210
                    </p>
                </div>
            </div>

            {/* Social Links Placeholder */}
            <div className="flex gap-4 mt-6">
                <button className="text-xs font-semibold px-4 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                    Follow
                </button>
                <button className="text-xs font-semibold px-4 py-1.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                    Message
                </button>
            </div>
        </div>
    );
}

export default User;