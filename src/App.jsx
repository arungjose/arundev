import './App.css'

function App() {

  return (
    <main className="min-h-screen bg-[#fffdf5] p-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest">
          Portfolio // 001
        </p>

        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Hello, I'm Arun.
        </h1>
        <div className="mt-6 border-2 border-black bg-[#b8f36b] p-6 shadow-[6px_6px_0px_#000]">
          <p className="text-lg font-bold">
            Tailwind CSS is working!
          </p>
          <p className="mt-2 text-sm">
            React + Vite + Tailwind CSS v4
          </p>
        </div>
        <button className="mt-6 border-2 border-black bg-white px-5 py-3 font-bold shadow-[4px_4px_0px_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          Test button
        </button>
      </div>
    </main>
  )
}

export default App
