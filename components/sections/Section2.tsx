import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Title from "@/components/title";

function Section2() {
  return (
    <Box>
      <Box component="main" className="container  relative pt-20 mx-auto ">
        <Grid container>
          <Grid xs={12} lg={4} xl={5} className="">
            <Box className="relative">
              <img
                src="./asset/images/jumpcutleft.png"
                className="xl:absolute  -right-[116px] z-0 -top-[70px]"
              />
            </Box>
          </Grid>
          <Grid xs={12} lg={8} xl={7} className="z-10 pb-10">
            <Grid container xs={12} lg={10} className="ml-auto">
              <Grid xs={9} lg={10} xl={9} className="mb-9 px-9 lg:px-0">
                <Title
                  title="A JUMPCUT PROJECT"
                  className="md:leading-[60px] lg:leading-[70px] md:text-[52px] lg:text-[70px]"
                />
              </Grid>
              <Grid xs={3} lg={2} xl={3}>
                <Box className="-mt-32">
                  <img src="./asset/images/quationmark.png" />
                </Box>
              </Grid>
              <Grid xs={12} className="px-6 ">
                <Typography className="font-IBMPlexMono text-white font-bold leading-9">
                  We are a web3 entertainment company that is democratizing
                  Hollywood through harnessing our collective creativity to
                  build IP and premium storytelling brands from the bottom up.{" "}
                </Typography>
              </Grid>
            </Grid>
            <Box className="lg:pl-[71px] lg:pr-[71px] pl-[30px] pr-[30px]">
              <Box className="bg-boxgb py-9 px-12 mt-5 mb-14 relative">
                <Typography className="font-IBMPlexMono font-medium text-lg">
                  Meet the first member of our collective and star of the show:
                  Eva Morales. Eva is a problem solver, truth seeker,
                  certifiable badass and World of Women’s first private
                  investigator. She is our window into the lives and experiences
                  of women of all colors, beliefs, professions, passions,
                  cultures, shapes and sizes. Together with her trustworthy and
                  oh-so-smart companion, Eva’s mission in life is to tell the
                  stories of smart, passionate, complicated, vulnerable and
                  audacious women.{" "}
                </Typography>
                <img
                  src="./asset/images/ui-object_tape 11.png"
                  className="absolute -top-[27px] -right-[25px] lg:-right-[68px] z-10 lg:-top-[68px] w-16 lg:w-36 "
                />
                <img
                  src="./asset/images/ui-object_tape 11.png"
                  className="absolute -right-[20px] -bottom-[20px] lg:-right-10 z-10 lg:-bottom-[34px]  w-16 lg:w-32"
                />
              </Box>
            </Box>
            <Box className="lg:pl-[69px] lg:pr-[69px] pr-[30px] pl-[30px]">
              <Box className="bg-boxgb py-9 px-12 mt-5 relative">
                <Typography className="font-IBMPlexMono font-medium text-lg">
                  Women of Mystery strives to elevate female, non-binary and
                  other underrepresented writ ers and creators, supporting them
                  in the creation of diverse characters (like Eva!), stories and
                  premium IP via Jumpcut’s collaborative communities
                  storytelling platform. Our first goal? Create a comic book
                  that is avant-garde - created collectively by and for the
                  community{" "}
                </Typography>
                <img
                  src="./asset/images/ui-object_tape 11.png"
                  className="absolute -left-[27px] -top-[25px] lg:-left-14 z-10 lg:-top-12 w-16 lg:w-32"
                />
                <img
                  src="./asset/images/ui-object_tape 11.png"
                  className="absolute -right-[25px] lg:-right-[68px] z-10 lg:-bottom-[68px] w-16 lg:w-36 rotate-90 "
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Section2;
