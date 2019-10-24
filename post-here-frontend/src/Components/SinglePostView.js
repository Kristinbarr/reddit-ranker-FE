import React from 'react';
import { withFormik, Form } from 'formik';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PostTextWrapper = styled.div`
	width: 60%;
	margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
const useStylesReddit = makeStyles((theme) => ({
	root: {
		border: '1px solid #e2e2e1',
		overflow: 'hidden',
		borderRadius: 4,
		backgroundColor: '#fcfcfb',
		transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
		'&:hover': {
			backgroundColor: '#fff'
		},
		'&$focused': {
			backgroundColor: '#fff',
			boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
			borderColor: theme.palette.primary.main
		}
	},
	focused: {}
}));

function RedditTextField(props) {
	const classes = useStylesReddit();

	return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	margin: {
		margin: theme.spacing(1)
	}
}));

const SinglePost = ({ values, handleChange }) => {
	const classes = useStyles();
	return (
		<PostTextWrapper>
			<h1>Single View</h1>
			<Form>
				<RedditTextField
					label="Reddit Title Here"
					name="title"
					className={classes.margin}
					variant="filled"
					id="reddit-input"
					readonly
					fullWidth
					onChange={handleChange}
					value="Put the title in right here. You cannot edit this"
				/>{' '}
				<br />
				<RedditTextField
					label="Reddit Post Here"
					name="post"
					className={classes.margin}
					variant="filled"
					multiline
					readonly
					rows="16"
					fullWidth
					id="reddit-input"
					onChange={handleChange}
					value="Put the body in right here. You cannot edit this"
				/>
				<ButtonsWrapper>
					<Button
						variant="outlined"
						className={classes.button}
						onClick={() => {
							console.log('Deleting from server...');
						}}
					>
						Delete
					</Button>

					<Button variant="outlined" className={classes.button} color="primary" type="submit">
						Resubmit For Recommendation
					</Button>

					<Button
						variant="outlined"
						className={classes.button}
						color="secondary"
						onClick={() => {
							console.log('Saving to server...');
						}}
					>
						Save
					</Button>
				</ButtonsWrapper>
			</Form>
		</PostTextWrapper>
	);
};

const FormikAppPostSingle = withFormik({
	mapPropsToValues({ title, post }) {
		return {
			title: title || '',
			post: post || ''
		};
	},
	handleSubmit(text) {
		console.log(text);
	}
})(SinglePost);

export default FormikAppPostSingle;
