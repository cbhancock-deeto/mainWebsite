import React, { useState } from "react";
import Toolbar from "../Layout/Toolbar/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  contactBackground: {
    backgroundColor: `${theme.palette.secondary.main}`,
    height: "100vh",
  },
  contactText: {
    paddingTop: 200,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      
      width: "45ch",
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
  },
  contactHeading: {
    fontWeight: "500",
    fontSize: "2.25rem",
    textAlign: "center",
    paddingBottom: 50,
    paddingTop: 100,
    color: `${theme.palette.primary.main}`,
    [theme.breakpoints.down("xs")]: {
      fontWeight: "500",
      fontSize: "2.25rem",
      textAlign: "center",
      paddingBottom: 18,
    },
  },
  recaptcha: {
    paddingTop: 5,
    paddingLeft: 15,
  },
  subButton: {
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 20,
    color: 'blue',
    backgroundColor: 'green',
  },
}));

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_x9rqx4s",
      "template_74npasl",
      e.target,
      "user_Wukm2xVv5xx1ZNXiQnAVN"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Contact() {
  const classes = useStyles();

  const [valid, setValid] = useState(true);

  function onChange(value) {
    setValid((valid) => !valid);
  }

  return (
      <div className={classes.contactBackground}>
    <Grid container 
      direction="column" 
      justify="center" 
      alignContent="center"
      >
      <Toolbar />
      <Typography className={classes.contactHeading}>CONTACT:</Typography>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <div>
          <TextField id="name" label="Your Name" />
        </div>
        <div>
          <TextField id="email" label="Your Email" />
        </div>
        <div>
          <TextField
            id="message"
            className={classes.tField}
            multiline
            rows={7}
            size="medium"
            defaultValue="Your Message"
            variant="filled"
          />
        </div>
        <ReCAPTCHA
          className={classes.recaptcha}
          sitekey="6LcTRuMZAAAAAAzy_ecossXZStEU0HEfKhFzC9gR"
          onChange={onChange}
        />
        <Button
          className={classes.subButton}
          disabled={valid}
          color="secondary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Grid>
    </div>
  );
}

export default Contact;
