import * as React from "react";
import {Link} from "react-router-dom";
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
 const  Header=()=> {
return (
	<AppBar position="static" style={{backgroundColor:'red'}}>
		<Toolbar>
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Blood Donation Management
		</Typography>
		<ul style={{display:'flex' ,spaceBetween:'5px'}}>
			<li >
               <Link>Home</Link>
			</li>
			<li>
               <Link>about</Link>
			</li>
			<li>
               <Link>Blog</Link>
			</li>
		</ul>
    
		<Button  style={{backgroundColor:'blue',margin:'0 5px'}}><Link to="/Login" >Login</Link></Button>
		<Button style={{backgroundColor:'blue'}}><Link to="/SignUp" >SignUp</Link></Button>
		</Toolbar>
	</AppBar>
);
}

export default Header