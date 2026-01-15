import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    const { namee, mail } = this.props;

    return (
      <div className="max-w-sm mx-auto my-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all hover:shadow-md">
        
        {/* State/Counter Section */}
        <div className="flex flex-col items-center pb-6 border-b border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            State Management
          </span>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-4">
            {this.state.count}
          </h2>
          <button 
            className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 active:scale-95 transition-all"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment Count
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="pt-6 text-center">
          <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
            Class Profile
          </h2>
          <h3 className="text-xl font-bold text-gray-800">{namee}</h3>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <span className="opacity-60">📧</span> {mail}
            </p>
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <span className="opacity-60">📞</span> 9876543210
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;