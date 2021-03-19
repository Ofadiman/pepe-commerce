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
git clone git@github.com:Ofadiman/a36d85899d2b473c5147128a71d611f3.git

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
