const Card = (props) => {
    // console.log(props.user)
    // console.log(props.age)
    console.log(props.user , props.age)
    // console.log(props) // ye walues object ki form me aaye gi {user: 'Aman'}
    return (
        
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <h2>{props.age}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sequi voluptatem dolor doloribus. Nam eos rerum dicta quibusdam? Nam impedit vitae consectetur, repellat inventore ex libero architecto quos nobis ea?</p>
            <button>View Profile</button>
        </div>
    
  )
}

export default Card