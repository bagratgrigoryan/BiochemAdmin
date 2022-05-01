import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import {useNavigate} from 'react-router-dom'

function NavBar({ Icon,Name,style,styleItem,styleText,path }) {
    const navigate = useNavigate();
    return (
        <>
            <ListItemButton
               onClick={()=>{navigate(path)}}
                style={style}
            >
                <ListItemIcon
                    sx={styleItem}
                >
                    {Icon}
                </ListItemIcon>
                <ListItemText primary={Name} sx={styleText} />
            </ListItemButton>
        </>
    );
}

export default NavBar;