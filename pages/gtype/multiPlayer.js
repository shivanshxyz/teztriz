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

const MultiPlayer = () => {
    const classes = useStyles();
    return (
      <Layout
        // type your page title and page description.
        title="Teztriz"
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            style={{ marginBottom: "1em" }}
          >
            Welcome to Teztriz
          </Typography>
          <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item>
              <Button
                component={"a"}
                href="/league/join"
                className={classes.btn}
              >
                Join League
              </Button>
            </Grid>
            <Grid>  
              <Button
              component={"a"}
              href="/league/create"
              className={classes.btn}
            >
              Create League
            </Button>
            </Grid>
            
          </Grid>
        </Container>
      </Layout>
    );
};

export default MultiPlayer;