import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    btn: {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  }));

const SinglePlayer = () => {
    const classes = useStyles();
    return (
        <Layout>
            
        </Layout>
    );
};

export default SinglePlayer;