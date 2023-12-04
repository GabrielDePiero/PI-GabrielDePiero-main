import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
return (
<div>
    <SearchBar onSearch={onSearch}/>
<button></button>
<Link to= "/about">ABOUT</Link>
<button></button>
<Link to="/home">HOME</Link>


</div>

)

}
export default Nav;