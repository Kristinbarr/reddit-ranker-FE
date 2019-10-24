import React from 'react';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { login } from '../actions';
import { connect } from 'react-redux';

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

const Login = ({ values, handleChange }) => {
	return (
		<Form>
			<FormWrapper>
				<h1>Login</h1>
				<TextField
					label="email"
					variant="outlined"
					onChange={handleChange}
					style={{
						backgroundColor: 'white'
					}}
					// value={values.email}
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
					// value={values.password}
					type="password"
					placeholder="Password"
					name="password"
				/>{' '}
				<ButtonWrapper>
					<Button variant="contained" type="submit">
						Login
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
		props.login(values, props.history);
	}
})(Login);

export default connect(null, { login })(FormikApp);
