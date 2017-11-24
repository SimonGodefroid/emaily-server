// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
class SurveyForm extends Component {
	renderFields() {
		return (
			<div>
				<Field name={`title`} label={`Survey Title`} type={`text`} component={SurveyField} />
				<Field name={`subject`} label={`Subject Line`} type={`text`} component={SurveyField} />
				<Field name={`body`} label={`Email Body`} type={`text`} component={SurveyField} />
				<Field name={`emails`} label={`Recipients List`} type={`text`} component={SurveyField} />
			</div>
		);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<button className={``} type={`submit`}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

// handleSubmit comes from surveyForm
export default reduxForm({ form: 'surveyForm' })(SurveyForm);
