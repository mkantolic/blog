import React, { Component } from "react";
import { getUser, logout } from "../Actions/UserActions";
import { connect } from "react-redux";
import quizQuestions from "./quizQuestions";
import Quiz from "./Quiz";
import Result from "./Result";
import Button from "@material-ui/core/Button";
import "../Layout/Navbar.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Profesionalac from "./Profesionalac";
import Amater from "./Amater";
import Pocetnik from "./Pocetnik";
import Kompaktni from "./Kompaktni";
import { Redirect } from "react-router-dom";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "70%",
    marginLeft: "10%",
    marginTop: "1%",
    backgroundColor: "#f8f6f7",
    borderRadius: "5px",
    display: " inline-block"
  },
  ima1: {
    width: "50%",
    height: "50%",
    marginLeft: "20%"
  },
  header: {
    fontSize: "25px",
    color: "rgb(115, 70, 124)",
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif"
  },
  question: {
    marginTop: "5%",
    fontSize: 17,
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif"
  },
  menu: {
    backgroundColor: " rgb(115, 70, 124)",
    cursor: "pointer"
  },
  fab: {
    backgroundColor: " rgb(115, 70, 124)",
    fontSize: 20,
    color: "white",
    alignItems: "center"
  },
  part: {
    padding: "3%",
    border: "1px solid rgb(115, 70, 124)"
  },
  tag: {
    fontSize: "12px",
    marginLeft: "50%"
  }
});
class QuizHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        Profesionalac: 0,
        Amater: 0,
        Početnik: 0,
        Kompaktni: 0
      },
      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      console.log(this.state);
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Tebi odgovara bridge fotoaparat!" });
    }
  }

  renderQuiz() {
    console.log(this.state.answersCount);
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderResult() {
    console.log(this.state);
    if (this.state.result === "Profesionalac") {
      console.log("true profesionalac");
      return (
        <div>
          {" "}
          <Profesionalac />
        </div>
      );
    } else if (this.state.result === "Amater") {
      console.log("true amater");
      return (
        <div>
          <Amater />
        </div>
      );
    } else if (this.state.result === "Početnik") {
      console.log("true početnik");
      return (
        <div>
          <Pocetnik />
        </div>
      );
    } else if (this.state.result === "Kompaktni") {
      console.log("true kompaktni");
      return (
        <div>
          <Kompaktni />
        </div>
      );
    } else {
      console.log("sth else");
    }
    return <Result quizResult={this.state.result} />;
  }
  reloadPage() {
    window.location.reload();
  }
  render() {
    const { user } = this.props;
    if (!user.uid) return <Redirect to="/Login" />;
    const { classes } = this.props;
    return (
      <div className="App">
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.header}>
            Koja vrsta fotoaparata je za tebe?{" "}
            <Button className="retake-btn" onClick={() => this.reloadPage()}>
              <i class="fas fa-undo" />
            </Button>
          </Typography>

          <Typography component="p" className={classes.question}>
            {" "}
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </Typography>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}
QuizHome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { logout, getUser }
)(withStyles(styles)(QuizHome));
