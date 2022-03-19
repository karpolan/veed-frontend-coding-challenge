# Frontend Coding Challenge

Hi there and thank you for your interest in working with us.
We would really like to know more about the way you work, so we think that starting with
a small coding challenge is a great way to get an idea of your style.
Since we value your time, we do not think that you should spend more than 4 hours on
this task. Implementing software is always about trade-offs, so we are honestly
interested to see you balancing between clarity and getting-things-doneTM .
Afterwards, we will have a follow-up call so you can guide us through your
implementation but also to discuss your design decisions.

## Exercise

The idea of this project is to implement a small client application for discovering trending
repositories on GitHub.
A list of the repositories created in the last 7 days with the most number of stars in
github should be displayed and the user should be able to favourite them.
The favourited repositories should be visible either through a filter or in a different
tab. Some basic info about the repo should be displayed, such as: repo name, link
to GitHub, description and number of stars.
To keep things simple, the favourites won’t be sent back to GitHub’s servers but just
stored locally (e.g localstorage, cookies etc...).

🍎 Bonus task: if time allows, a language filter would be an awesome addition to
have.

## Implementation Details 🔎

GitHub provides a public search endpoint which you can use for fetching the most
starred repositories:
https://api.github.com/search/repositories?q=created:>2017-01-
10&sort=stars&order=desc

We value: clear, easy to understand code, use of semantic HTML, CSS naming
conventions and tests. The technology you use is up to you, but we work with React so
seeing this in the solution is always great as well.
Have fun!

## Next steps

Please either send us back a link to a github repo or a zip file containing your code. If
we proceed with a follow up interview, part of that interview will involve extending your
codebase with an additional feature.
