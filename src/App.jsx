
import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-4xl font-black">
        Neobrutalism UI Test
      </h1>

      <div className="flex flex-wrap gap-4">
        <Button>Default Button</Button>
        <Button variant="neutral">Neutral Button</Button>
        <Button variant="noShadow">No Shadow</Button>
      </div>
    </main>
  )
}

export default App
