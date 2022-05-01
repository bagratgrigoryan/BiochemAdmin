import * as React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SvgIcon from '@mui/material/SvgIcon';
import HistoryIcon from '@mui/icons-material/History';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {Route, Routes, useNavigate,Link} from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Register from "../pages/Register";
import CustomizedTables from "./adminPanel/CustomizedTables";
import Home from "../home/Home";

const arr = [
    {
        id: "1",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "2",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "3",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "4",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "5",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "6",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "7",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "8",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "9",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "10",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "11",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    }
];

const drawerWidth = 240;

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link to="/" style={{
                            textDecoration: "none",
                            color:"white",
                            fontStyle:"italic"
                        }}>Institute of Biochemistry of Hrachya Buniatyan</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List >
                    <NavBar
                        path={"/history"}
                        Name="History"
                        Icon={<HistoryIcon />}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/departments"}
                        Name="Departments"
                        Icon={<GroupWorkIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/councils"}
                        Name="Councils"
                        Icon={<BusinessCenterIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/museum"}
                        Name="Museum"
                        Icon={<AccountBalanceIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/library"}
                        Name="Library"
                        Icon={<LocalLibraryIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/trade&union"}
                        Name="Trade Union"
                        Icon={<PeopleAltIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/media"}
                        Name="Media"
                        Icon={<CollectionsIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/contact"}
                        Name="Contact"
                        Icon={<LocalPhoneIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                    <NavBar
                        path={"/register"}
                        Name="Register"
                        Icon={<LockOpenIcon/>}
                        style={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        styleItem={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        styleText={{ opacity: open ? 1 : 0 }}
                    />
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={'/register'} element={<Register/>}/>
                    <Route exact path={'/history'} element={<CustomizedTables arr={arr}/>}/>
                </Routes>
            </Box>
        </Box>
    );
}
