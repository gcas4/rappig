import React from "react";
import { Typography } from "@material-ui/core";

const PageTitle = props => {
  return (
    <Typography variant="body1" align={"center"} gutterBottom>
     <strong> {props.title}</strong>
    </Typography>
  );
};

export default PageTitle;