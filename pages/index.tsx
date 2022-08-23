import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Header from "@/components/header";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";

import Users from "../components/home/users";
import RoadMap from "../components/home/roadMap";
import Team from "../components/home/team";

const Home: NextPage = (props : any) => {
  const window = props;

  const container = window !== undefined ? () => window?.body : undefined;

  return (
    <>
      <Grid>
        <Header container={container} />
        <Section1 aria-label="section one" />
        <Section2 />
        <Section3 />
        <Users />
        <RoadMap />
        <Team />
      </Grid>
    </>
  );
};

export default Home;