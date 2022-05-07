import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {Menu, Settings, Logout} from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';

export default function MenuListComposition() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <Menu style={{
                        color: "white",
                    }}/>
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper style={{
                                marginRight: "15px",
                                textDecoration: "none"
                            }}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        style={{
                                            margin: "10px",
                                        }}
                                    >
                                        <Link to={"/user/register"} style={{textDecoration: 'none', color: '#FF00FF'}}>
                                            <MenuItem onClick={handleClose}><AddIcon style={{
                                                marginRight: "10px",
                                                color: '#FF00FF',
                                                border: '1px solid #FF00FF',
                                                borderRadius: '25px'
                                            }}/><span>Add User</span></MenuItem>
                                        </Link>
                                        <Link to={"/cms"} style={{textDecoration: 'none', color: 'red'}}>
                                            <MenuItem onClick={handleClose}><Logout style={{
                                                marginRight: "10px",
                                                color: 'red'
                                            }}/><span>Logout</span></MenuItem>
                                        </Link>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
