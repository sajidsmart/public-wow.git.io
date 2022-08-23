import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function Section4() {
    return (
        <Box>
            <Box
                component="main"
                className="container  relative pt-0 mx-auto justify-center "
            >
                <Grid
                    className="flex justify-center"
                    container
                    spacing={3}
                    sx={{ padding: 2 }}
                >
                    <Grid item xs={6} md={4} className="mb-4 px-6 md:px-0 pt-20">
                        <Box className="imgFram">
                            <img
                                src="./asset/images/bannerImage4.png"
                                className="w-full"
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                        className="mb-4 mt-20 px-6 md:px-0 pt-20"
                    >
                        <Box className="imgFram">
                            <img
                                src="./asset/images/bannerImage4.png"
                                className="w-full"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} className="mb-4 px-6 md:px-0 pt-20">
                        <Box className="imgFram">
                            <img
                                src="./asset/images/bannerImage4.png"
                                className="w-full"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} className="mb-4 px-6 md:px-0 pt-20">
                        <Box className="imgFram">
                            <img
                                src="./asset/images/bannerImage4.png"
                                className="w-full"
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                        className="mb-4  mt-20 px-6 md:px-0 pt-20"
                    >
                        <Box className="imgFram">
                            <img
                                src="./asset/images/bannerImage4.png"
                                className="w-full"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} className="mb-4 px-6 md:px-0 pt-20">
                        <Box className="imgFram">
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

export default Section4