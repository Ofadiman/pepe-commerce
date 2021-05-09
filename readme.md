# In pepe, we trust.

### Running the application

The development process is carried out using [docker](https://www.docker.com/)
and [docker-compose](https://docs.docker.com/compose/) tools. Before you start, make sure they are installed on your
machine by running `docker -v` and `docker-compose -v` commands in your terminal. The project
uses [yarn](https://yarnpkg.com/) as package manager. Issue the following command to confirm that you have yarn
installed `yarn -v`.

<br/>

```shell
# Clone the repository.
git clone git@github.com:Ofadiman/pepe-commerce.git

# Install dependencies in root directory as well as in all of the packages.
yarn setup
```

### Committing

We are using conventional commits to keep our code clean and organised. you can read more about it [here](https://www.conventionalcommits.org/en/v1.0.0/). To get a quick grasp on how it works, checkout the prefixes below.

- `build` - Changes that affect the build system or external dependencies.
- `chore` - Something mundane that has to be done.
- `ci` - Changes to our CI configuration files and scripts.
- `docs` - Documentation only changes.
- `feat` - A new feature.
- `fix` - A bug fix.
- `perf` - A code change that improves performance.
- `refactor` - A code change that neither fixes a bug nor adds a feature.
- `revert` - Revert unwanted changes.
- `style` - Changes that do not affect the meaning of the code (white-space, formatting, etc).
- `test` - Adding missing tests or correcting existing tests.

### Issue workflow

Our workflow utilizes GitHub projects and GitHub issues. A typical steps taken with an issue look like that:

1. Create an issue and add appropriate labels.
2. Assign an issue to yourself and start working on it.
3. Open a pull request and request a review from colleagues.
4. Link issues that are related to opened pull request.
5. Merge code to the `main` branch.

Issues are managed with some automation provided by `github-project-automation-plus` GitHub action. We are currently handling the following events:

1. `issue_opened` - The issue is moved to the `Todo` column on project board.
2. `issue_assigned` - The issue is moved to the `In progress` column on project board.
3. `issue_closed` - The issue is moved to the `Done` column on project board.
4. `pull_request_opened` - The pull request is moved to the `Code review` column on project board.
5. `pull_request_closed` - The pull request is moved to the `Done` column on project board.
