import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoIcon from "public/asset/Icon/Logo";
import MenuIcon from "public/asset/Icon/Menu";
import { Grid } from "@mui/material";
import TwitterIcon from "public/asset/Icon/Twitter";
import DiscordIcon from "public/asset/Icon/Discord";
import BoatIcon from "public/asset/Icon/Boat";
import InstagramIcon from "public/asset/Icon/Instagram";

interface IDrawerItemProps {
    handleDrawerToggle: () => void;
    navItems: string[];
}

function DrawerItems(props: IDrawerItemProps) {
    const { navItems, handleDrawerToggle } = props;
    return (
        <Grid className="text-center bg-transparent h-full flex flex-col py-6">
            <Box className="flex justify-between items-center mx-3">
                <Typography variant="h6" sx={{ my: 2 }}>
                    <LogoIcon />
                </Typography>
                <Box className="flex">
                    <Box className="mr-6">
                        <Button className="bg-bgorange text-base rounded-3xl text-white font-IBMPlex font-bold w-[100px] h-[40px] hover:bg-bgorange shadow-3xl">
                            SIGN IN
                        </Button>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        className=""
                        sx={{ mr: 2, display: { md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box className="h-full pt-16 justify-around flex flex-col ">
                <List>
                    {navItems.map((item: any) => (
                        <ListItem key={item} disablePadding className="pb-8">
                            <ListItemButton className="text-center">
                                <ListItemText
                                    primary={
                                        <Typography className="font-IBMPlex text-white text-[40px] font-bold">
                                            {item}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Grid>
                    <Box className="flex justify-center">
                        <Box>
                            <TwitterIcon />
                        </Box>
                        <Box className="mx-[23px]">
                            <DiscordIcon />
                        </Box>
                        <Box className="mr-[23px]">
                            <BoatIcon />
                        </Box>
                        <Box>
                            <InstagramIcon />
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    )
}

export default DrawerItems