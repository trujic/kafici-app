
//RENDERS PUBS WITH THEIR PROPS
const Main = (props) => {
  return(
    <main className="main">
      {props.bars.map((bar) => {
        return(
          <div className="bar-box">
            <h1>{bar.title}</h1>
            <img src={bar.image}/>
            <div className="actions">
              <h2>free tables: {bar.tables}</h2>
              <button onClick={() => props.handleReservation(bar.id, bar.title, bar.tables)}>Reserve</button>
            </div>
          </div>
          )
        })}
    </main>
  )
}

export default Main
