/* eslint-disable react/no-unescaped-entities */
export const LoginForm = () => {
  return (
    <div className="relative z-10 bg-black md:bg-opacity-80 text-white p-6 rounded-md w-full md:max-w-sm md:max-h-xl">
      <h2 className="text-3xl font-semibold mb-5 mt-10">Sign In</h2>
      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-white-300 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white-800 text-black rounded-lg p-4 w-full focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-white-300 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-white-800 text-black rounded-lg p-4 w-full focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-5 flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label
            htmlFor="rememberMe"
            className="text-gray-300 text-sm font-medium"
          >
            Remember Me
          </label>
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full mb-"
        >
          Sign In
        </button>
        <p className="text-center text-white-300 mb-10 mt-2 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};
