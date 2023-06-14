import AsmahulHusna from "./components/AsmahulHusna";
import DoaHarian from "./components/DoaHarian";
import Footer from "./components/Footer";
import Header from "./components/Header"
import NiatSholat from "./components/NiatSholat"

function App() {

  function cn(...cns) {
    return cns.join(' ');
  }

  return (
    <>
     <Header />
     <div className={cn(
      'w-[95%]',
      'mx-auto'
     )}>
      <NiatSholat />
      <AsmahulHusna />
      <DoaHarian />
     </div>
     <Footer />
    </>
  )
}

export default App
