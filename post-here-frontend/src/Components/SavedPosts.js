import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSavedPosts, EDIT_DRAFT, EDIT_SAVED_POST, editPost } from '../actions';
import { connect } from 'react-redux';

const initialState = [
	{
		title: 'TIFU',
		body: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		id: 14
	},
	{
		title: 'TIL',
		body:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
		id: 15
	},
	{
		title: 'Give me gold',
		body:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
		id: 16
	},
	{
		title: 'Look at this dog pic aww',
		body:
			'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33',
		id: 17
	},
	{
		title: 'I found this interiesting sign',
		body:
			'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
		id: 18
	}
];
const SavedPosts = (props) => {
	console.log('savedPosts props', props);
	const [ query, setQuery ] = useState('');
	const [ savedPosts, setSavedPosts ] = useState(initialState);
	const [ filteredResults, setFilteredResults ] = useState(savedPosts);
	const { getSavedPosts } = props;

	useEffect(
		() => {
			setFilteredResults(
				savedPosts.filter(({ title, body }) => {
					return (
						title.toLowerCase().includes(query.toLowerCase()),
						body.toLowerCase().includes(query.toLowerCase())
					);
				})
			);
		},
		[ query ]
	);

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};
	console.log('savedPosts', savedPosts);
	console.log('filteredResults', filteredResults);

	if (!savedPosts) {
		return <div className="saved-post-container">You have no saved posts</div>;
	} else {
		return (
			<div>
				<form>
					<label htmlFor="name">Search: </label>
					<input type="text" onChange={handleInputChange} name="name" placeholder="search by name" />
				</form>
				{filteredResults.map((filteredResult) => {
					const { title, body } = filteredResult;
					return (
						<Link
							style={{ textDecoration: 'none' }}
							onClick={() => {
								//update state that this is the post we are editing
								console.log(filteredResult);
								editPost(filteredResult);
							}}
							key={title}
						>
							<h1>{title}</h1>
							<h3>{body}</h3>
						</Link>
					);
				})}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		initialState: state.drafts,
		id: state.loggedInUser
	};
};

export default connect(mapStateToProps, { getSavedPosts, editPost })(SavedPosts);
