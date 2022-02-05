
function Card (props) {
    return (
        <div className="content">
          {props.team.map(data => (
          <div key={data.id} className="image">
            <img src={data.avatar} alt=''/>
            <div className="data">
              <h3>First Name: {data.first_name}</h3>
              <h3>Last Name: {data.last_name}</h3>
              <span>Email: {data.email}</span>
            </div>
          </div>
          ))}
        </div>
    );
}
export default Card;