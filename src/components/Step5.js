import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box, Tooltip } from "@material-ui/core";

export class Step5 extends Component {
  render() {
    const { values, handleChange } = this.props;
    const immediateFamily =
      " Immediate family means husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild.";
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Tooltip title={immediateFamily} arrow>
              <h1>
                Do you or one of your immediate family members have a financial
                relationship with the health care provider you are referring to?
              </h1>
            </Tooltip>
            <Box component="span">
              <Container maxWidth="sm">
                <Button
                  variant="contained"
                  color="secondary"
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep("NO");
                  }}
                >
                  No
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  primary={true}
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep("YES");
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  primary={true}
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep("YES");
                  }}
                >
                  I'm not sure
                </Button>
              </Container>
            </Box>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Step5;
