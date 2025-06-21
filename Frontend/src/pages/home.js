// The page the user is redirected to after logging in
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";





function Home() {

    const { user, isAuthenticated, logout } = useContext(AuthContext);

    if (typeof window !== "undefined") {
    // Check if the user is authenticated;
    if (user === null) {
        // Redirect to the login page if not authenticated
        window.location.href = "/signin";
    }
}

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page!</h1>
      <p className="text-lg text-gray-700">You have successfully logged in.</p>
      {user && (
        <div className="mt-4">
          <p className="text-md text-gray-600">Hello, {user.name}!</p>
          <button
            onClick={logout}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;