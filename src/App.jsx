import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import AppRouter from './router/AppRouter.jsx'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
