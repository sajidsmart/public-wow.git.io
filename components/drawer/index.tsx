import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerItems from "./DrawerItems";

interface IDrawerProps {
    handleDrawerToggle: () => void;
    container: (() => any) | undefined;
    mobileOpen: boolean;
    drawerWidth: string;
    navItems: string[];
}


export default function index(props: IDrawerProps) {
    const { container, mobileOpen, handleDrawerToggle, drawerWidth, navItems } = props;
    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        backgroundColor: " rgba(0, 0, 0, 0.4)  ",
                        backdropFilter: "blur(30px)"
                    }
                }}
            >
                <DrawerItems navItems={navItems} handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
        </Box>
    )
}
