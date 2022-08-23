import React from "react";
import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const users = [
  {
    id: 1,
    avtar: "./asset/images/lady2.png",
    name: "Tal Navarro",
    designation: "Serial Entrepreneur and Founder of Social Lady"
  },
  {
    id: 2,
    avtar: "./asset/images/lady1.png",
    name: "Evette Vargas",
    designation: "Writer, Director, Producer"
  },
  {
    id: 3,
    avtar: "./asset/images/lady1.png",
    name: "Evette Vargas",
    designation: "Writer, Director, Producer"
  },
  {
    id: 4,
    avtar: "./asset/images/lady2.png",
    name: "Evette Vargas",
    designation: "Writer, Director, Producer"
  },
  {
    id: 5,
    avtar: "./asset/images/lady2.png",
    name: "Evette Vargas",
    designation: "Writer, Director, Producer"
  },
  {
    id: 6,
    avtar: "./asset/images/lady2.png",
    name: "Evette Vargas",
    designation: "Writer, Director, Producer"
  }
];

function Team() {
  return (
    <Container>
      <Typography
        className="
        mt-2
        mb-2
        font-RoslindaleText 
      text-white leading-9
       md:leading-[70px] 
       lg:leading-[80px] 
       font-bold uppercase 
       text-[32px]
        md:text-[58px] text-center
        lg:text-[75px]"
      >
        OUR TEAM
      </Typography>
      <Grid className="flex justify-center" container spacing={3}>
        {users.map((item) => {
          return (
            <Grid
              key={item.id}
              item
              xs={6}
              lg={4}
              className="mb-4 px-6 md:px-0 "
            >
              <img src={item.avtar} className="w-full" />
              <Typography className="font-RoslindaleText text-white font-medium text-lg text-center pt-2 pb-2">
                {item.name}
              </Typography>
              <Typography
                className="text-white text-base font-IBMPlexMono text-center"
                sx={{ fontSize: 12, fontWeight: "700" }}
              >
                {item.designation}
              </Typography>
            </Grid>
          );
        })}
        {/* <Grid item xs={6} lg={4} className="mb-4 px-6 md:px-0">
        <Box>
          <img
            src="./asset/images/relation2.png"
            style={{ height: 10, width: "100%" }}
            className="absolute w-full h-full"
          />

          <img
            src="./asset/images/lady2.png"
            className="w-full"
            style={{ height: "46%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6} lg={4} className="mb-4 px-6 md:px-0 ">
        <Box>
          <img src="./asset/images/lady1.png" className="w-full" />
        </Box>
      </Grid>
      <Grid item xs={6} lg={4} className="mb-4 px-6 md:px-0 ">
        <Box className="imgFram" sx={{ height: 156 }}></Box>
      </Grid>
      <Grid item xs={6} lg={4} className="mb-4 px-6 md:px-0">
        <Box className="imgFram" sx={{ height: 156 }}></Box>
      </Grid>
      <Grid item xs={6} lg={4} className="mb-4 px-6 md:px-0">
        <Box className="imgFram" sx={{ height: 156 }}></Box>
      </Grid>
      <Grid item xs={6} lg={4} className="mb-4 px-6 md:px-0">
        <Box className="imgFram" sx={{ height: 156 }}></Box>
      </Grid> */}
      </Grid>
    </Container>
  );
}

export default Team;
