import React from 'react';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { registerUser } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 33%;
	margin-left: 33%;
	margin-top: 10%;
`;

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 10px;
`;

const SignUp = (props) => {
	const { values, handleChange } = props;
	return (
		<Form>
			<FormWrapper>
				<h1>Sign Up</h1>
				<TextField
					label="email"
					variant="outlined"
					onChange={handleChange}
					style={{
						backgroundColor: 'white'
					}}
					type="email"
					placeholder="Email"
					name="email"
				/>
				<TextField
					label="password"
					variant="outlined"
					onChange={handleChange}
					style={{
						backgroundColor: 'white'
					}}
					type="password"
					placeholder="Password"
					name="password"
				/>
				<ButtonWrapper>
					<Button variant="contained" type="submit">
						Sign Up
					</Button>
				</ButtonWrapper>
			</FormWrapper>
		</Form>
	);
};

const FormikApp = withFormik({
	mapPropsToValues({ email, password }) {
		return {
			email: email || '',
			password: password || ''
		};
	},
	handleSubmit(values, { props }) {
		//passing props / history through actions
		props.registerUser(values, props.history);
	}
})(SignUp);

export default connect(null, { registerUser })(FormikApp);
