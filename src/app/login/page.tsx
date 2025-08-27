export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex overflow-hidden">
        {/* Sección izquierda con la imagen */}
        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-6">
          <img
            src="/login-illustration.svg" 
            alt="Login Illustration"
            className="max-w-sm"
          />
        </div>

        {/* Sección derecha con el formulario */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Sign in</h2>

          {/* Botones sociales */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100">Google</button>
            <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100">Apple ID</button>
          </div>

          <p className="text-gray-500 text-sm mb-4">Or continue with email address</p>

          {/* Formulario */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700"
            >
              Start trading
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
