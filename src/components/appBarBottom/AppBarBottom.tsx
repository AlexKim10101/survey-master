import React from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LeftBottomButton from "../appBarButtons/LeftBottomBtn";
import RightBottomButton from "../appBarButtons/RightBottomBtn";
import { makeStyles } from "@material-ui/core/styles";
import { IState } from "../../duck/fakeData/surveyData";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    background: "#46ACAF",
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    "& :last-child": {
      marginLeft: "auto",
    },
  },
  toolbarSecondScreen: {
    display: "flex",
    justifyContent: "flex-end",
  },
  toolbarThirdScreen: {
    display: "flex",
    justifyContent: "flex-end",
  },
  marginLeftButton: {
    marginLeft: "35px",
  },
  marginRightButton: {
    marginRight: "35px",
  },
  title: {
    color: "#ffffff",
  },
  titleQuestionEndPage: {
    color: "#ffffff",
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    marginLeft: "5px",
    color: "#ffffff",
  },
}));

const AppBarBottom: React.FC<IAppBarBottomProps> = ({
  currentPage,
  currentQuestionIndex,
  sendData,
}) => {
  const classes = useStyles();

  const showLeftBottomBtn =
    currentPage === "question" && currentQuestionIndex !== 0;

  const showRightBottomBtn = currentPage !== "error";
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {showLeftBottomBtn && <LeftBottomButton />}
        {showRightBottomBtn && <RightBottomButton sendData={sendData} />}
      </Toolbar>
    </AppBar>
  );
};

export type IAppBarBottomProps = ConnectedProps<typeof connector>;

const mapStateToProps = (state: IState) => {
  const { currentPage, currentQuestionIndex } = state;

  return {
    currentPage,
    currentQuestionIndex,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendData: () => {
      dispatch({ type: "SEND_SURVEY_DATA" });
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AppBarBottom);
