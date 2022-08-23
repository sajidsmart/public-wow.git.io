import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Grid, Hidden } from "@mui/material";
import Title from "components/title";

interface IImageProps {
  src: string;
  alt: string;
  className: string;
  imgClassName?: string;
}

function Image(props: IImageProps) {
  const { src, alt, className, imgClassName } = props;

  return (
    <Box className={className}>
      <img src={src} className={imgClassName} alt={alt} />
    </Box>
  );
}

function Section1() {
  return (
    <Box className="relative xl:pt-10 overflow-hidden xl:overflow-visible ">
      <Image
        src="./asset/images/bookimg.png"
        alt="bookimg"
        className="absolute -right-2 lg:right-0 xl:-top-32"
        imgClassName="w-40 xl:w-11/12 mr-0 ml-auto"
      />

      <Image
        src="./asset/images/bookimg.png"
        alt="bookimg"
        className="absolute right-0 bottom-80 left-0"
        imgClassName="h-[416px] w-full"
      />

      <Box className="relative">
        <Box
          component="main"
          className="container   relative pt-[30px] mx-auto "
        >
          <Grid container spacing={3}>
            <Grid xs={12} lg={4} xl={5} className="mb-4  px-6 md:px-0">
              <Hidden smDown>
                <Image
                  src="./asset/images/knowthatimg.png"
                  alt="knowthatimg"
                  className="absolute -top-28 -left-20"
                />

                <Image
                  src="./asset/images/line.png"
                  alt="line"
                  className="absolute -top-[136px] left-[67px]"
                />
              </Hidden>
            </Grid>
            <Grid xs={12} lg={7} xl={6} className="mb-4 pl-2">
              <Grid container className="mb-10">
                <Grid xs={7} sm={6} lg={12}>
                  <Box className="px-6 md:px-0">
                    <Title
                      title="DID YOU KNOW THAT..."
                      className="md:leading-[60px] lg:leading-[70px] md:text-[52px] lg:text-[70px]"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={12} md={6} lg={6} xl={5}>
                  <Grid xs={11} className="mx-auto">
                    <Box className={`${styles.bgpage} py-14 px-12 mx-auto`}>
                      <Typography className="font-IBMPlexMono font-medium text-lg">
                        In 2021, men appeared on screen 2x as many times as
                        women
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={11} className="mx-auto">
                    <Box
                      className={`${styles.bgpage}  pl-10 pr-5 pt-14 pb-9 mx-auto`}
                    >
                      <Typography className="font-IBMPlexMono font-medium text-lg">
                        Only 11 of the highest grossing 100 films in 2021
                        featured a woman of color as lead or co-lead
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid xs={12} md={6} lg={6} xl={7}>
                  <Box
                    className={`${styles.bgpagesec} px-20 pt-20 pb-14 mx-auto`}
                  >
                    <Typography className="font-IBMPlexMono font-medium text-lg">
                      27% percent of all DC and Marvel characters are female,
                      and only 12% of mainstream superhero comics have female
                      protagonists. Behind the scenes, 39% of comic book writers
                      are women, and only 20% are non-white.{" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box className="pt-5 mx-8 lg:mx-auto">
            <Hidden only={["lg", "xl"]}>
              <Image
                src="./asset/images/knowthatimg.png"
                alt="knowthatimg"
                className="mt=10"
              />
            </Hidden>
          </Box>
          <Box className="pt-5 mx-8 lg:mx-auto">
            <Grid
              container
              className="bg-boxgb pt-14 pb-12 pr-6 pl-6 lg:pr-20 lg:pl-10 "
            >
              <Grid xs={12} md={4} lg={2}>
                <img src="./asset/images/cross.png" className="mx-auto" />
              </Grid>
              <Grid xs={12} md={8} lg={10}>
                <Typography className="font-IBMPlexMono font-semibold text-2xl leading-10">
                  And that’s exactly why we’ve made it our mission to create an
                  inclusive ecosystem that is open to any creator no matter
                  where you come from, what you look like or who you know.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
