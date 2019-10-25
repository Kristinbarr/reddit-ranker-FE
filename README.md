# Front-End

### Tuesday

- push prettierrc to the repo
  ~~- figure out routing for both login and registration, not sure how to do it with redux~~
  ~~- need to access the components history prop inside the actions folder~~
- ~~looking to do recommended posts, and get request to get that back from the system~~

### Wednesday

- PostForm and submit a post to the backend
- Where are we submitting a draft for evaluation?
  - do we submit the draft to the backend for evaluation or do we submit it to the DS API?
- Need to make a SavedPost Component
  - has EDIT/DELETE buttons
- Need to make a recommendation component
  - how do I store recommendations? should be in the store? isn't it technically already in the drafts array?

## Questions to People

- what information would I need to have styling done? Do they have any of the following?
  - primary/secondary color of subreddit?
  - customized png of the robot? (or can I get that from the URL of the subreddit itself)
  - banner image (size it down with opacity to mimic the subreddit)

Wednesday Wait:

- Recommendations route from Backend (fetch recommendations from backend)
- New SavedPosts route (that )

Names for App:

- Postr
- Get Rec'd
- Reddit Ranker (are we still ranking?)
- Post Here

2. Why can't I call login in my actions? (and instead have to repeat myself in registration)

3. When I click on Dashboard in my nav, it refreshes the screen, do I need to `e.preventDefault()`?

- the other nav buttons do not refresh

4. This link in SavedPosts updates state AND redirects them, is there a better way to do this?

Modal on the the loading screen

### Sprint Retro

- communication
  - easy morning made difficult because backend expected content, DS API had post, and the Formik forms with my React 1 dev was using body, so I had to unify that, and make util helper functions

Questions

1. When I'm debugging authenticated routes, and then I save a file, my state resets (so I'm logged out), but my navBar conditional rendering is based on looking at localStorage for the token. Is there a way to sync them?

2. Is there a simpler way to view the state of my app without trying to console log each piece of state?

3. if a user has no saved posts, it receives an object with a key value pair of message: string versus just an empty array, had to do additional logic to do that.
