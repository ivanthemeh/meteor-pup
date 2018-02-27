import React from 'react';
import PropTypes from 'prop-types';
import { Grid, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import validate from '../../../modules/validate';

export class FormExample extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submitting Contact Form');
    Meteor.call('contact.sendContactEmail', {emailAddress: 'imarik81@gmail.com', name: 'Ivan Marik'}, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Contact Form Submitted!', 'success');
      }
    });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Grid fluid>
        <form>
          <FormGroup
            controlId=""
            validationState={this.getValidationState()}
          >
            <ControlLabel><h1>Contact Us!</h1></ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Enter Name"
            /><br />
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="Enter Email"
            /><br />
            <FormControl
              componentClass="textarea"
              value={this.state.message}
              placeholder="Enter Message"
            /><br />
            <Button
              bsStyle="success"
              onClick={this.handleSubmit}
            >SUBMIT</Button>
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </Grid>
    );
  }
}
