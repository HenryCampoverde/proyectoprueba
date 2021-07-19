import Cards from "./Cards"
import celebridades from '../../helpers//usuario'

const ListCards = () => {


console.log(celebridades[0].name.last)

    return (
        <div>        
            <div className="container">
                <div className="row">
                {celebridades.map(user =>(    
                    <div className="col-md-4" key={user.login.wid}>
                        <Cards user={user}/>
                    </div>
                ))}
                    
                </div>
            </div>
        </div>
    )
}

export default ListCards

