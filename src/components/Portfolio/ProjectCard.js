import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  IconButton
} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: 410,
      backgroundColor: `${theme.palette.secondary.main}`,
      position: 'relative',
    },
    media: {
      height: 200,
    },
    cardActions: {
        position: 'absolute',
        bottom: 7,
        left: 7,
    }
  }));

function ProjectCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          <CardMedia
            key={props.key}
            className={classes.media}
            image={props.img}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        
        <CardActions className={classes.cardActions}>
          <Button href={props.url} size="small" color="primary">
            View Website
          </Button>
          <IconButton aria-controls="fade-menu" href={props.github}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
//   <IconButton edge="end" aria-controls="fade-menu" aria-haspopup="true"  onClick={handleClick} className={classes.menuButton} aria-label="menu">
//     <MenuIcon />
//   </IconButton>

  export default ProjectCard;