import React from "react";
import { Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const q4 = [
  "The Inaugural Writer’s Collective launches",
  "Over the course of several months, ticket holders will give creative direction to an established writer - the story architect harnessing the community’s collective creativity to build out the story world, character arcs and key plot points - all inputs into the Women of Mystery comic book we will create together",
  "Holders will participate in the storytelling by completing quests and earning points on the platform. Quests include voting on story direction, submitting loglines, pitches, character ideas, and more.",
  "Holders will create alongside and learn from [story architect] and Winnie Kemp, gaining real-world experience of how to develop and pitch IP.",
  "Our comic book goes into production; ticket holders will get an exclusive, limited edition physical collectible and other member perks."
];

function RoadMap() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} className="mb-4 px-6 md:px-0 pt-10">
          <Typography className="font-RoslindaleText text-white leading-9 md:leading-[70px] lg:leading-[80px] font-bold uppercase text-[32px] md:text-[58px] lg:text-[80px]">
            ROADMAP
          </Typography>
          <Typography
            sx={{ padding: 0, fontSize: 20 }}
            className="font-RoslindaleText text-white font-bold leading-9 "
          >
            Step 1. Eva and the Inaugural Writers’ collective
          </Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          className="mb-4 px-6 md:px-0 pt-10 flex justify-center items-center"
        >
          <Container className=" bg-white p-10">
            <Typography
              component="div"
              variant="h6"
              sx={{ color: "#F06A4D" }}
              className="
              font-RoslindaleText 
              text-orange  
              md:leading-[70px] 
              lg:leading-[80px] 
              font-bold 
              uppercase 
              text-[70px] 
              md:text-[58px] 
              lg:text-[80px]"
            >
              Q2
            </Typography>
            <Typography
              component="div"
              variant="h6"
              sx={{ color: "#023E1D" }}
              className="
              font-RoslindaleText 
              text-orange md:leading-[70px] 
              lg:leading-[80px] 
              font-bold 
              uppercase 
              text-[70px] 
              md:text-[58px] 
              lg:text-[80px]"
            >
              2022
            </Typography>

            <List>
              <ListItem className="flex items-start">
                <FiberManualRecordIcon className=" mr-3 mt-3  text-[10px]" />
                <ListItemText>
                  <Typography
                    className=" text-base font-IBMPlexMono "
                    sx={{ fontSize: 12, fontWeight: "700" }}
                  >
                    Eva signs online. She is the first character to seed the WoM
                    storytelling collective.1
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Container>
        </Grid>
        <Grid
          xs={12}
          md={6}
          className="mb-4 px-6 md:px-0 pt-10 flex justify-center items-center"
        >
          <Container className=" bg-white p-10 mt-10">
            <Typography
              sx={{ color: "#F06A4D" }}
              className="font-RoslindaleText text-orange leading-15 md:leading-[70px] lg:leading-[80px] font-bold uppercase text-[70px] md:text-[58px] lg:text-[80px]"
            >
              Q3
            </Typography>
            <Typography
              sx={{ color: "#023E1D", fontSize: 70 }}
              className="font-RoslindaleText text-orange leading-15 md:leading-[70px] lg:leading-[80px] font-bold uppercase text-[70px] md:text-[58px] lg:text-[80px]"
            >
              2022
            </Typography>

            <List>
              <ListItem className="flex items-start">
                <FiberManualRecordIcon className=" mr-3 mt-3  text-[10px]" />
                <ListItemText>
                  <Typography
                    className=" text-base font-IBMPlexMono "
                    sx={{ fontSize: 12, fontWeight: "700" }}
                  >
                    750 Writer’s Room tickets are available to mint in September
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem className="flex items-start">
                <FiberManualRecordIcon className=" mr-3 mt-3  text-[10px]" />
                <ListItemText>
                  <Typography
                    className=" text-base font-IBMPlexMono "
                    sx={{ fontSize: 12, fontWeight: "700" }}
                  >
                    Tickets unlock access to Jumpcut’s proprietary members-only
                    storytelling platform where creators and holders come
                    together to collaborate on community-driven IP{" "}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Container>
        </Grid>
        <Grid
          xs={12}
          md={6}
          className="mb-4 px-6 md:px-0 pt-10 flex justify-center items-center"
        >
          <Container className=" bg-white p-10 mt-10">
            <Typography
              sx={{ color: "#F06A4D" }}
              className="font-RoslindaleText text-orange leading-15 md:leading-[70px] lg:leading-[80px] font-bold uppercase text-[70px] md:text-[58px] lg:text-[80px]"
            >
              Q4
            </Typography>
            <Typography
              sx={{ color: "#023E1D", fontSize: 70 }}
              className="font-RoslindaleText text-orange leading-15 md:leading-[70px] lg:leading-[80px] font-bold uppercase text-[70px] md:text-[58px] lg:text-[80px]"
            >
              2022
            </Typography>

            <List>
              {q4.map((item) => {
                return (
                  <ListItem key={item} className="flex items-start">
                    <ListItemText>
                      <Typography
                        className=" text-base font-IBMPlexMono "
                        sx={{ fontSize: 12, fontWeight: "700" }}
                      >
                        <FiberManualRecordIcon className=" mr-3 mt-3  text-[10px]" />

                        {item}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RoadMap;
