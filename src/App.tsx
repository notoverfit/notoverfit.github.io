import { About } from './components/About'
import { FadeUp } from './components/FadeUp'
import { Header } from './components/Header'
import { Resources } from './components/Resources'

export function App() {
  return (
    <main className="page">
      <FadeUp order={0}>
        <Header />
      </FadeUp>
      <div className="page__sections">
        <FadeUp order={1}>
          <About />
        </FadeUp>
        <FadeUp order={2}>
          <Resources />
        </FadeUp>
      </div>
    </main>
  )
}
