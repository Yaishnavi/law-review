import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Container,
  Box,
  Button,
  ButtonGroup,
  List,
  Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import ReferralListCell from "./ReferralListCell.js";

export class Referral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Card style={styles.cardRoot}>
              <CardContent style={styles.cardmain}>
                <Typography
                  variant="h4"
                  component="h2"
                  style={styles.titleSpace}
                >
                  {this.props.step.questionText}
                  {this.props.step.tooltip != null && (
                    <IconButton
                      edge="end"
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="show more"
                      style={
                        this.state.expanded ? styles.expand : styles.expandOpen
                      }
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  )}
                </Typography>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{this.props.step.tooltip}</Typography>
                  </CardContent>
                </Collapse>
                <ButtonGroup size={"large"} color="primary" variant="contained" style={styles.button}>
                  <Button
                    onClick={() => {
                      this.props.addReferral();
                    }}
                  >
                    Add Another Referral
                  </Button>
                  <Button
                    onClick={() => {
                      this.props.nextStep();
                    }}
                  >
                    Done
                  </Button>
                </ButtonGroup>
                <Box component="span">
                  <Container maxWidth="med">
                    <List>
                      {this.props.step.answer.map((referral, index) => (
                        <Paper elevation={3}>
                          <ReferralListCell
                            update={newState => {
                              this.props.update(newState, index);
                            }}
                            referral={referral}
                          />
                        </Paper>
                      ))}
                    </List>
                  </Container>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  cardRoot: {
    margin: 15
  },
  cardmain: {
    minWidth: 275,
    margin: 15
  },
  expand: {
    transform: "rotate(180deg)"
  },
  expandOpen: {
    transform: "rotate(0deg)"
  },
  titleSpace: {
    marginBottom: 15
  }
};

export default Referral;