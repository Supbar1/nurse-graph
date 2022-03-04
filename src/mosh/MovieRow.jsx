import React, {useContext} from 'react';
import UserContext from './userContext';
import CartContext from './cartContext';
function MovieRow(props) {
const wspanialaZabawa = useContext(UserContext);    
const chwalebnaSluzba = useContext(CartContext);    
    
    console.log("Cart context chwala", chwalebnaSluzba);
    return (
        <div>
           Linijka nizej {wspanialaZabawa.currentUser ? wspanialaZabawa.currentUser.name : ""}
        </div>
    );
}

export default MovieRow;