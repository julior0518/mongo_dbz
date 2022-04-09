
import GoogleLogInOut from './googleLogInOut';

function Navbar({user, setUser}){

    return (
        <div className="Navbar">
            <GoogleLogInOut user={user} setUser={setUser} />
        </div>
    )
}

export default Navbar;