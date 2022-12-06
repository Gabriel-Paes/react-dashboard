import { useState } from "react";
import { ProSidebarProvider, Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutLinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutLinedIcon from "@mui/icons-material/MapOutlined";
 
const MySidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [Selected, setSelected] = useState("Dashboard");

    return (
        <ProSidebarProvider>
            <Sidebar backgroundColor={colors.primary[400]}>
                <Menu>
                <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)} 
                        icon={isCollapsed ? <MenuOutLinedIcon /> : undefined} 
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box>
                                <Typography>
                                    ADMINS
                                </Typography>
                                <IconButton>
                                    <MenuOutLinedIcon />
                                </IconButton>
                            </Box>
                        )}

                    </MenuItem>
                    <MenuItem>
                    
                    </MenuItem>
                </Menu>
            </Sidebar>
        </ProSidebarProvider>    
        /* <Box sx={{
            "& .pro-sidebar-inner": {background: `${colors.primary[400]} !important`},
            "& .pro-sidebar-wrapper": {backgroundColor: "transparent !important"},
            "& .pro-inner-item": {padding: "5px 35px 5px 20px !important"},
            "& .pro-inner-item:hover": {color: "#868dfb !important"},
            "& .pro-menu-item.active": {color: "#6870fa !important"},
            }}>
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)} 
                        icon={isCollapsed ? <MenuOutLinedIcon /> : undefined} 
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box>
                                <Typography>
                                    ADMINS
                                </Typography>
                                <IconButton>
                                    <MenuOutLinedIcon />
                                </IconButton>
                            </Box>
                        )}

                    </MenuItem>
                </Menu>
            </Sidebar>
        </Box> */
    );
}

export default MySidebar;