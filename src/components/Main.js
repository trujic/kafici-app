import Reservations from './Reservations.js'
//RENDERS PUBS WITH THEIR PROPS
const Main = (props) => {
  return(
    <main className="asd">
    <div>
      <Reservations handleShowReservation={props.handleShowReservation} showReservations={props.showReservations} cancelReservation={props.cancelReservation} addReservation={props.addReservation} reservations={props.reservations} showReservations={props.showReservations}/>
    </div>
    <div className="main">
      {props.bars.map((bar) => {
        return(
          <div className="bar-box">
            <h2>{bar.title}</h2>
            <img src={bar.image}/>
            <div className="actions">
              <h3>free tables: {bar.tables}</h3>
              <button className="button" onClick={() => props.handleReservation(bar.id, bar.title, bar.tables)}>Reserve</button>
            </div>
          </div>
          )
        })}
      </div>
    </main>
  )
}

export default Main
