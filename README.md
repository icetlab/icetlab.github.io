# Website Update Instructions

Here are instructions how to do some common types of updates. The general procedure is always:

1. Check out website repository from GitHub (or pull changes if you have it already checked out, which I suggest)
2. Find correct markdown or config file, edit it
3. Push to master. A GitHub Action will automatically deploy your changes. [Check the build status](https://github.com/icetlab/icetlab.github.io/actions) to see when it has finished deploying (should take not more than a few minutes).

## Adding a new publication

For publications to show up in our publication list you only need to add them to the [bibtex file](https://github.com/icetlab/icetlab.github.io/blob/master/_bibliography/papers.bib) (`_bibliograpphy/papers.bib`). This will make the publication show up in the [overall list](https://www.icet-lab.eu/publications/), and enables a few cool extra features. For example, papers in the bibtex file can be cited using `{% cite BIBTEXKEY %}` in markdown on the webpage.

Bibtex entries can have arbitrary extra fields, which you can use to display only a subset of papers. For example, papers with a field `selected = {true}` show up in the overview on the title page of the website. If you add additional fields that should not be displayed, you need to configure the website not to show them in the overall [config file](filtered_bibtex_keywords) (`_config.yml`, key `filtered_bibtex_keywords`).

## Adding or editing your profile

In order to edit your profile page on the [team overview](https://www.icet-lab.eu/people/) (or adding a new page), you need to edit a few different files:

- The [overview](https://github.com/icetlab/icetlab.github.io/blob/master/_pages/profiles.md) (`_pages/profiles.md`) contains metadata how the team page should be rendered. Entries here should be self-explanatory.
- The actual text should be in a separate markdown page for each person (`_includes/people/YOUR_LAST_NAME.md`). You can use either HTML or Jekyll markdown. Check existing pages for examples.
- Your profile picture should go into `assets/img/YOUR_LAST_NAME.png` (or jpg).

## Creating a news entry

The [website landing page](https://www.icet-lab.eu) has an entry for news items. News items can either be short (just a date and a string) or long (link to a subpage).

News entries are created by adding a new markdown page in the [correct folder](https://github.com/icetlab/icetlab.github.io/tree/master/_news) (`_news`). All markdown files in this directory are rendered automatically, no further configuration is needed. Prefix the file name with the date, as this is used to determine the order in which the markdown is rendered (and newest entries should come first, of course).

Check the existing examples to see how to create short or long news entries.

## Editing our research page

The [research subpage](https://www.icet-lab.eu/research/) has research themes (performance, bots, etc.), and each theme has a few specific topics (all of which link to a separate subpage with a description of this research, and some key papers).

The overview page is configured [here](https://github.com/icetlab/icetlab.github.io/blob/master/_pages/research.md) (`_pages/research.md`, this markdown page also contains all the "overall" text at the top of the page). The config key `display_categories` steers which research themes should be displayed, and in what order.

The actual research topics are contained in a [separate folder](https://github.com/icetlab/icetlab.github.io/tree/master/_projects) (`_projects`). Unlike with news entries, *not* all markdown files here are automatically rendered (there will actually be a bunch of example files in the folder that are not actually rendered). Only topics with a "category" that is configured to be shown will be shown.

Topic pages can be arbitrarily complex markdown or HTML, but should contain a simple overview of a specific research topic in ICET-lab (this can be a single paper, a PhD project, or a longer-running research theme, as appropriate). You can cite papers from our bibtex file using `{% cite BIBTEXKEY %}`.

## Known issues

While I believe the website is already in a much better state than our previous Wordpress based site, I am aware that there are a few problems:

- The [teaching page](https://www.icet-lab.eu/teaching/) is lacking detail and better formatting.
- Some images are "grainy" and low-resolution.
- The team overview on the [website landing page](https://www.icet-lab.eu) is extremely out of date.
- Some pages do not render nicely on mobile. Since the entire page uses Bootstrap that should be easy enough to fix, but so far I have not focused much on how the website looks on smaller screens.

If you find any other issues (and you cannot, or do not want to, fix them right away) you can always create an [issue in the project issue tracker](https://github.com/icetlab/icetlab.github.io/issues).