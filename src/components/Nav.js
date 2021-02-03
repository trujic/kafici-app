import Reservations from './Reservations.js'

const Nav = (props) => {
  return(
    <nav className="nav">
      <div className="title">
        <h1>My</h1>
        <h1>App</h1>
      </div>
      <div>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">events</a></li>
          <li><a href="#" className="reservations" onClick={() => props.handleShowReservation()}>reservations {props.reservations}</a></li>
          <li><a href="#">account</a></li>
          <li><a href="#">login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
