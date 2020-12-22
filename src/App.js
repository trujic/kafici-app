import {useState, useEffect} from 'react'
import Nav from './components/Nav.js'
import Main from './components/Main.js'

function App() {
  const [bars, setBars] = useState([
  {
    id: 0,
    title: "irish pub",
    image: "https://www.nemagreske.com/wp-content/uploads/2015/01/redcow_ftr.jpg",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 1,
    title: "gondola",
    image: "https://www.gondola-restoran.rs/uploads/images/Gallery/gondola/gondola_09.JPG",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 2,
    title: "petrus",
    image: "https://www.horecapropeler.com/images/media/147-rcfrooftop2.jpg",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 3,
    title: "cafe masa",
    image: "https://www.masha.rs/wp-content/uploads/2018/06/EMP5070.jpg",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 4,
    title: "shamrock pub",
    image: "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2018/03/shamrock-pub.jpg",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 5,
    title: "toster",
    image: "https://lh3.googleusercontent.com/proxy/vPkOhspkZg3cs1pGGtYIDZn_DYzGNP7xUas18JYaSNTVprSzgKzeCSpkBntgtd3kVzPOqtjofE1O1AL9QLgNOlfwmK7GwNZkhcl49Q",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 6,
    title: "pivnica",
    image: "https://www.gradskapivnica.rs/images/restro/restro6.jpg",
    tables: Math.floor(Math.random() * 10)
  },
  {
    id: 7,
    title: "puberaj",
    image: "https://lh5.googleusercontent.com/p/AF1QipO25PbBWrPpETp_rbRhEE0Pu9kNAYsA34fooiWm=w400-h300-k-no",
    tables: Math.floor(Math.random() * 10)
  }
])

//GIVES A RANDOM NUMBER BETWEEN (0 - 10) EVERY 10 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      let randomTables = [...bars];
      randomTables.filter((bar) => {
        bar.tables = Math.floor(Math.random() * 10)
        setBars(randomTables)
      })
    }, 10000);
    return () => clearInterval(interval);
  }, [])

//CHECKS IF THERE ARE TABLES AVAILABLE. IF SO TABLE IS RESERVED FOR USER AND UPDATES NUMBER OF TABLES FOR THAT BAR(PUB)
  const handleReservation = (id, title, tables) => {
    if (tables === 0) {
      alert(`ne postoji slobodan sto u ${title} probajte negde drugde!`)
    } else {
      let asd = bars.filter(bar => bar.id !== id)
      alert(`rezervisali ste sto u ${title}!`)
      let updateBars = [...bars];
      updateBars.filter((bar) => {
        if (bar.id === id) {
          bar.tables = tables - 1;
        }
      })
      setBars(updateBars)
    }
  }

  return (
    <div className="App">
      <Nav />
      <Main key={bars.id} handleReservation={handleReservation} bars={bars}/>
    </div>
  );
}

export default App;
