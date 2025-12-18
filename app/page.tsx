export default function Home() {
  return <div className="w-full min-h-screen bg-blue-400 md:bg-transparent flex items-center justify-center md:bg-linear-to-br lg:bg-linear-to-br 
    md:from-purple-800 lg:from-purple-800 md:to-red-500 lg:to-red-500  ">
    <div className="bg-blue-400 p-20 sm:p-20 p-10 lg:rounded-lg md:rounded-lg flex min-h-screen md:min-h-0 lg:h-1/2 lg:w-1/2 md:w-1/2 md:h-1/2 flex-col gap-10 max-[450px]:w-full max-[450px]:min-h-screen max-[450px]:rounded-none max-[450px]:p-4 max-[450px]:justify-center max-[450px]:items-center">
      <div className="bg-white p-10 flex flex-col gap-4">
        <h1 className="text-blue-300  text-lg">
          Login into your account
        </h1>
        <form className="flex flex-col gap-8">
          <input
            type="email"
            placeholder="Username"
            className="border-2 border-black p-3 rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black p-3 rounded-xl"
          />
          <button className="bg-blue-300 p-4 rounded-xl">Login</button>
        </form>
      </div>
    </div>
  </div>
}
