import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LogoIcon from "public/asset/Icon/Logo";
import MenuIcon from "public/asset/Icon/Menu";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TwitterIcon from "public/asset/Icon/Twitter";
import DiscordIcon from "public/asset/Icon/Discord";
import BoatIcon from "public/asset/Icon/Boat";
import InstagramIcon from "public/asset/Icon/Instagram";
import styles from "../styles/Home.module.css";

interface IAppNavBar {
  handleDrawerToggle: () => void;
}

const AppNavBar = (props: IAppNavBar) => {
  const { handleDrawerToggle } = props;
  const navItems = ["ABOUT US", "ROADMAP", "OUR TEAM"];

  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      <Toolbar className="container p-0 ">
        <Grid container className="justify-between items-center">
          <Grid>
            <Box className="grow xs:hidden sm:flex items-center ">
              <LogoIcon />
            </Box>
          </Grid>
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <Box className="flex">
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
          <Grid>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  className={`${styles.nevlink} text-white hover:bg-transparent font-IBMPlex font-bold`}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>
          <Box className="flex">
            <Grid>
              <Box className="mr-6">
                <Button className="bg-bgorange text-lg rounded-3xl text-white font-IBMPlex font-bold w-[100px] lg:w-[140px] md-w-[120px] h-[40px] md:h-[48px] lg:h-[56px] hover:bg-bgorange shadow-3xl">
                  SIGN IN
                </Button>
              </Box>
            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className=""
              sx={{ mr: "0px", display: { md: "none" } }}
            >
              <MenuIcon />
              {/* <MenuIcon /> */}
            </IconButton>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default AppNavBar;
