import * as React from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdReadMore } from "react-icons/md";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DHome from '../DHome/DHome'
import RENuser from '../RENuser/RENuser'
import AllUsers from '../AllUsers/AllUsers'
import UserRequest from '../UserRequest/UserRequest';
import ContactRE from '../ContactRe/ContactRE';
import CallBR from '../CallBR/CallBR';
import ComplainB from '../ComplainB/ComplainB';
import WithdrawRE from '../WithdrawRE/WithdrawRE';
import PurchesHistory from '../PurchesHistory/PurchesHistory';





const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List className='d-bg'>
                <ListItem >
                    <Link className='li-d' to="/">Go-To-Home</Link>
                </ListItem>

                <div>

                    <ListItem >
                        <Link className='li-d' to={`${url}/dashboard-home`}>Dashboard</Link>
                    </ListItem>

                    <ListItem >
                        <Link className='li-d' to={`${url}/all-users`}>All Users</Link>
                    </ListItem>
                    <ListItem >
                        <Link className='li-d' to={`${url}/user-request`}>User Request</Link>
                    </ListItem>
                    <ListItem >
                        <Link className='li-d' to={`${url}/purchesHistory`}>Parches History</Link>
                    </ListItem>
                    <ListItem >

                    </ListItem>
                    <ListItem >
                        <Link className='li-d' to={`${url}/withdraw-request`}>Withdraw Request</Link>
                    </ListItem>
                    <ListItem >
                        <Link className='li-d' to={`${url}/contact-request`}>Contact Request</Link>
                    </ListItem>
                    <ListItem >
                        <Link className='li-d' to={`${url}/call-back-result`}>Call-Back Request</Link>
                    </ListItem>
                    <ListItem >
                        <Link className='li-d' to={`${url}/all-complain`}>Complain</Link>
                    </ListItem>

                </div>




            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                className='d2-bg'
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="tool-c">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MdReadMore />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route exact path={path}>
                        <DHome />
                    </Route>

                    <Route path={`${path}/dashboard-home`}>
                        <DHome />
                    </Route>
                    <Route path={`${path}/purchesHistory`}>
                        <PurchesHistory />
                    </Route>

                    <Route path={`${path}/new-user`}>
                        <RENuser />
                    </Route>
                    <Route path={`${path}/all-users`}>
                        <AllUsers />
                    </Route>
                    <Route path={`${path}/user-request`}>
                        <UserRequest />
                    </Route>
                    <Route path={`${path}/contact-request`}>
                        <ContactRE />
                    </Route>
                    <Route path={`${path}/call-back-result`}>
                        <CallBR />
                    </Route>
                    <Route path={`${path}/all-complain`}>
                        <ComplainB />
                    </Route>
                    <Route path={`${path}/withdraw-request`}>
                        <WithdrawRE />
                    </Route>
                    <Route path={`${path}/paid-match`}>

                    </Route>



                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;