import React from "react";
import {
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Toolbar from "../Layout/Toolbar/Toolbar";
import projects from "./Projects";
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
  portfolioBackground1: {
    backgroundColor: `${theme.palette.primary.main}`,
  },
  portfolioBackground2: {
    backgroundColor: `${theme.palette.primary.main}`,
    height: "100vh",
  },
  portfolioHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "200",
    fontSize: "2rem",
    textAlign: "center",
    paddingBottom: 50,
    paddingTop: 70,
    color: `${theme.palette.secondary.main}`,
    [theme.breakpoints.down("xs")]: {
      fontWeight: "500",
      textAlign: "center",
      paddingBottom: 18,
    },
  },
}));

function Portfolio() {
  const classes = useStyles();

  const projectList = projects.map((p) => (
    <Grid item key={p.key}>
      <ProjectCard
        
        url={p.url}
        description={p.description}
        title={p.title}
        img={p.img}
        github={p.github}
      />
    </Grid>
  ));

  return (
    <div className={classes.portfolioBackground2}>
      <Toolbar />
      <Grid
        container
        className={classes.portfolioBackground1}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid xs={12} item>
          <Typography className={classes.portfolioHeading}>
            Portfolio
          </Typography>
        </Grid>

        {projectList}
      </Grid>
    </div>
  );
}


export default Portfolio;
