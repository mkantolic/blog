import React, { Component } from "react";
import InputField from "../Components/InputField";
import FooterFormButton from "../Components/FooterFormButton";
import SimpleBox from "../Components/SimpleBox";
import { createAccount } from "../Actions/UserActions";
import { connect } from "react-redux";
import ErrorAlert from "../Components/ErrorAlert";
import { errStyle } from "../Helpers/ReduxFormValidation";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: localStorage.getItem("message") || "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  isValid() {
    const { email, password, confirmPassword } = this.state;

    if (email === "" || password === "" || confirmPassword === "") {
      this.setState({
        error: "Molimo ispunite sva polja"
      });
      return false;
    }

    if (password !== confirmPassword) {
      this.setState({
        error: "Lozinke trebaju biti točne"
      });
      return false;
    }

    return true;
  }

  submitAccount(event) {
    event.preventDefault();
    if (!this.isValid()) {
      return;
    }
    this.props
      .createAccount(this.state.email, this.state.password, this.state.username)
      .then(() => {
        this.props.history.replace("/");
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  onChange = event => {
    event.preventDefault();
    const message = event.target.value;

    localStorage.setItem("message", message);
    this.setState({ message });
  };
  renderBody() {
    return (
      <div className="account-form">
        <form onSubmit={event => this.submitAccount(event)}>
          <h2>Registracija</h2>

          <InputField
            id="email"
            type="text"
            label="Email"
            inputAction={event => this.setState({ email: event.target.value })}
            style={this.state.error ? errStyle : null}
          />
          <InputField
            id="password"
            type="password"
            label="Lozinka"
            inputAction={event =>
              this.setState({ password: event.target.value })
            }
            style={this.state.error ? errStyle : null}
          />
          <InputField
            id="confirm-password"
            type="password"
            label="Potvrdi lozinku"
            inputAction={event =>
              this.setState({ confirmPassword: event.target.value })
            }
            style={this.state.error ? errStyle : null}
          />
          {this.state.error && <ErrorAlert>{this.state.error}</ErrorAlert>}
          <FooterFormButton submitLabel="Registriraj se" {...this.props} />
        </form>
      </div>
    );
  }

  render() {
    return <SimpleBox body={this.renderBody()} className="account-form" />;
  }
}

export default connect(
  null,
  { createAccount }
)(CreateAccount);
