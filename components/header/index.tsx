import Box from "@mui/material/Box";
import { useState } from "react";
import AppNavBar from "@/components/appBar";
import DrawerComponent from "components/drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const drawerWidth = "100%";
const navItems = ["ABOUT US", "ROADMAP", "OUR TEAM"];

interface IHeaderProps {
  container: (() => any) | undefined;
}

function index(props: IHeaderProps) {
  const { container } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((s) => !s);

  return (
    <Box sx={{ display: "flex" }}>
      <AppNavBar handleDrawerToggle={handleDrawerToggle} />
      <Box component="nav">
        <DrawerComponent
          handleDrawerToggle={handleDrawerToggle}
          container={container}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
          navItems={navItems}
        />
      </Box>

      <Box className=" relative w-full mt-[130px]  lg:pb-80">
        {/* <Toolbar /> */}
        <Box component="main" className="container pt-[30px] mx-auto ">
          {/* <Toolbar /> */}
          <Grid container>
            <Grid xs={12} md={6} className="mb-4 px-6 md:px-0">
              <Typography className="font-RoslindaleText text-white leading-9 md:leading-[70px] lg:leading-[80px] font-bold uppercase text-[32px] md:text-[58px] lg:text-[80px]">
                Women who come together to tell their stories
              </Typography>
            </Grid>
            <Grid xs={12} md={6} className="mb-4 ">
              {/* <img src="./asset/images/BannerImage1.png" alt="bannerImage " className=" md:ml-auto" /> */}
              <Box sx={{ display: { xs: "block", lg: "none" } }}>
                <img src="./asset/images/bannerImg2.png" alt="bannerImage" />
              </Box>
            </Grid>
            <Grid xs={12} md={5} className="order-2 lg:order-1 mt-10 md:mt-0">
              <Box sx={{ display: { xs: "block", lg: "none" } }}>
                <img src="./asset/images/bannerImg1.png" alt="bannerImage" />
              </Box>
            </Grid>
            <Grid xs={12} md={6} className="order-1 lg:order-2 px-6 md:px-0">
              <Box>
                <Typography className="font-RoslindaleText leading-9 md:leading-[70px] lg:leading-[108px] text-white font-bold uppercase text-[32px] md:text-7xl lg:text-[108px]">
                  can change the world.
                </Typography>
              </Box>
              <Box className="h-px bg-white w-full mt-5 mb-6"></Box>
              <Box className="mb-8">
                <Typography className="text-white text-base   font-IBMPlexMono">
                  Welcome to Women of Mystery (WoM). We are the first web3
                  storytelling collective to bridge stories across women-led and
                  non-biary NFT worlds. We welcome all storytellers interested
                  in building ideas into comic books, screenplays, stage
                  scripts,and novels. This community aims to support writers
                  making their way from script to screen and changing the world
                  together - one word at a time.{" "}
                </Typography>
              </Box>
              <Box className="mt-px">
                <Button className="bg-bgorange cursor-pointer text-lg rounded-3xl text-white font-IBMPlex font-bold w-full md:w-[217px] h-[71px] hover:bg-bgorange shadow-3xl">
                  Sign up Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="absolute w-full top-0 "
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <img src="./asset/images/bannerImage.png" className="w-full" />
          {/* <img src="./asset/images/BannerImage2.png" alt="bannerImage" /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default index;
