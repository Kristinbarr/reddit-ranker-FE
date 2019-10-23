import React, { useState, useEffect } from 'react';

import { getSavedPosts } from '../actions';
import { connect } from 'react-redux';

//needs to have the users saved posts
//each post will have the title and the body
// * do I want to include when the post was saved?
const initialState = [
	{
		title: 'TIFU',
		body: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
	},
	{
		title: 'TIL',
		body:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
	},
	{
		title: 'Give me gold',
		body:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
	},
	{
		title: 'Look at this dog pic aww',
		body:
			'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33'
	},
	{
		title: 'I found this interiesting sign',
		body:
			'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
	}
];
const SavedPosts = (props) => {
	const [ query, setQuery ] = useState('');
	const id = localStorage.getItem('id');

	const [ savedPosts, setSavedPosts ] = useState(initialState);

	useEffect(
		() => {
			const filteredResults = savedPosts.filter((savedPost) => {
				savedPost.title.toLowerCase().includes(query.toLowerCase());
				console.log('current query', query);
			});
			setSavedPosts(filteredResults);
		},
		[ query ]
	);

	// useEffect(() => {
	// 	// setSavedPosts(getSavedPosts(id));
	// 	setSavedPosts(initialState);
	// }, []);

	const handleInputChange = (e) => {
		setQuery(e.target.value);
		console.log('e dot target', e.target.value);
		console.log('my query', query);
	};

	if (!savedPosts) {
		return <div className="saved-post-container">You have no saved posts</div>;
	} else {
		console.log('this is the whats', savedPosts);

		return (
			<div>
				<form>
					<label htmlFor="name">Search: </label>
					<input type="text" onChange={handleInputChange} name="name" placeholder="search by name" />
				</form>
				{savedPosts.map((savedPost) => {
					console.log('saved post', savedPost);
					return (
						<div>
							<h1>{savedPost.title}</h1>
							<h3>{savedPost.body}</h3>
						</div>
					);
				})}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { initialState: state.drafts };
};

export default connect(mapStateToProps, { getSavedPosts })(SavedPosts);
