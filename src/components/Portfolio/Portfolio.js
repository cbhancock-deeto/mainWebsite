import React from "react";

import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Toolbar from "../Layout/Toolbar/Toolbar";
import projects from "./Projects";

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
  root: {
    maxWidth: 345,
    height: 420,
    backgroundColor: `${theme.palette.secondary.main}`,
  },
  media: {
    height: 200,
  },
}));

function Portfolio() {
  const classes = useStyles();

  const projectList = projects.map((p) => (
    <Grid item key={p.key}>
      <MediaCard
        
        url={p.url}
        description={p.description}
        title={p.title}
        img={p.img}
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

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          key={props.key}
          className={classes.media}
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.url} size="small" color="primary">
          View Website
        </Button>
      </CardActions>
    </Card>
  );
}

export default Portfolio;
