const Reservations = (props) => {
  if (props.showReservations === true) {
    if (props.reservations === null || props.reservations === 0) {
      return(
          <div className="reservations-block">
            <div className="reservation-text">
              <h2>You have no reservations</h2>
              <h2 onClick={props.handleShowReservation}>X</h2>
            </div>
          </div>
      )
    } else {
      //CREATES A RESERVATION
      return (
        <div className="reservations-block">
        {props.addReservation.map((reservation) => {
          return(
            <div className="your-reservation">
              <h3>{reservation.title}</h3>
              <button className="button" onClick={() => props.cancelReservation(reservation.id, reservation.title)}>&#x2716;</button>
            </div>
          )
        })}
        </div>
      )
    }
  } else {
    return(
      <div> </div>
    )
  }
}

export default Reservations
