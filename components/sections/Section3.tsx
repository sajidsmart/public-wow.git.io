import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Title from '@/components/title';


function Section3() {
    return (
        <Box>
            <Box component="main" className="container  relative pt-10 mx-auto ">
                <Grid container>
                    <Grid xs={12} md={6} className="mb-4 px-6 md:px-0 pt-20">
                        <Title
                            title='WoM COUNCIL'
                            className="md:leading-[70px] lg:leading-[80px] md:text-[58px] lg:text-[80px]"
                        />
                        <Typography
                            sx={{ padding: 0 }}
                            className="font-IBMPlexMono text-white font-bold leading-9 "
                        >
                            Women of Mystery strives to elevate female, non-binary and
                            other underrepresented writ ers and creators, supporting them
                            in the creation of diverse characters (like Eva!), stories and
                            premium IP via Jumpcut’s collaborative communities
                            storytelling platform. Our first goal? Create a comic book
                            that is avant-garde - created collectively by and for the
                            community
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Box className="relative w-full">
                            <img
                                src="./asset/images/bannerImage4.png"
                                className="w-full"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Section3