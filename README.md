# Website Update Instructions

Here are instructions how to do some common types of updates. The general procedure is always:

1. Check out website repository from GitHub (or pull changes if you have it already checked out, which I suggest)
2. Find correct markdown or config file, edit it
3. Push to master. A GitHub Action will automatically deploy your changes. [Check the build status](https://github.com/icetlab/icetlab.github.io/actions) to see when it has finished deploying (should take not more than a few minutes).

## Adding a new publication

For publications to show up in our publication list you only need to add them to the [bibtex file](https://github.com/icetlab/icetlab.github.io/blob/master/_bibliography/papers.bib) (`_bibliography/papers.bib`). This will make the publication show up in the [overall list](https://www.icet-lab.eu/publications/), and enables a few cool extra features.

Some non-standard bibtex fields are used to enable some nice formatting on the website:

- `preview = {IMAGENAME}`: what image to use left of the publication entry. The general algorithm is that it should be the profile image of the first author if that author is part of ICET-lab, and if not it should be the logo of the first author's affiliation.

- `abbr = {NAME_OF_VENUE}`: what "venue badge" should be used. If you are adding a conference that is not yet available you also need to add it to the [database file](https://github.com/icetlab/icetlab.github.io/blob/master/_data/venues.yml) (`_data/venues.yml`). As a rule, journals use color `#00369f` and proceedings (conferences, workshops) use color `#009f36`. For co-located events (MSR, CHASE, etc.) also say which event it is co-located with (e.g., "MSR @ ICSE 2020"). For journals just the journal acronym is enough (e.g., "TSE").

- `pdf = {LINK}` and `url = {LINK}`: if there is a green open access version of the paper (e.g., author copy, arXiv, etc.) please provide the link here.

- `supp = {LINK}`: if there is supplementary material (e.g., an online appendix or Zenodo link), please provide the link here.

- `thesis = {LINK}`: if this work is based on a publicly available bachelor's or master's thesis, please add a link to the thesis here.

Bibtex entries can have arbitrary additional extra fields, which you can use to display only a subset of papers. For example, papers with a field `selected = {true}` show up in the overview on the title page of the website. If you add additional fields that should not be displayed, you need to configure the website not to print these fields in the [config file](https://github.com/icetlab/icetlab.github.io/blob/master/_config.yml) (`_config.yml`, key `filtered_bibtex_keywords`).

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

## Debugging and Tips

- If you use Bootstrap for layouting (putting things next to each other, etc.), be aware that Markdown does not seem to work *within a div* (you seem to need to use plain HTML). There is probably a trick that I'm not getting to make this work, but if you see random HTML on pages that's probably why.

- Aside from that, if your Markdown is not rendering properly there is a good chance that you forgot to close a div somewhere earlier.

- Some useful Bootstrap / CSS classes:
    - `d-none d-md-block`: hide element on small screens (i.e., hide some nice but non-essential visuals on mobile)

    - `justify-content-sm-center`: center elements *vertically*, for example if you have two images of different height next to each other. Needs to go into the wrapping container.

    - `offset-sm-2`: "offset" a container by a certain (2 in this case) number of columns, for example to manually center a div horizontally that's not supposed to span all 12 columns.

    - `caption`: a special class to use for figure captions. Should go into a separate div *after* the figure (but in the same container as the figure).

- Templating magic:
    - `{% include figure.liquid loading="eager" path="assets/img/cwb-show-execution.png" title="Cloud Workbench" class="img-fluid rounded z-depth-1" %}`: include a figure, with nice shadow. Use a Bootstrap container to control the size of the figure. Don't forget to also `git add` the figure.
    
    - `{% cite leitner:16 %}`: cite a paper
    
    - `{% bibliography --group_by none --query @*[selected=true]* %}`: generate a custom bibliography (in this case only including papers that have a field "selected" with a value of "true"). Can be used to generate publication lists for a specific author, for a topic etc. Check the [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) website for documentation.

## Known issues

While I believe the website is already in a much better state than our previous Wordpress based site, I am aware that there are a few problems:

- The [teaching page](https://www.icet-lab.eu/teaching/) is lacking detail and better formatting.
- Some images are "grainy" and low-resolution.
- The team overview on the [website landing page](https://www.icet-lab.eu) is extremely out of date.
- Some pages do not render nicely on mobile. Since the entire page uses Bootstrap that should be easy enough to fix, but so far I have not focused much on how the website looks on smaller screens.
- So far I have not adapted the theme / visual styling at all (the current website uses the default of the template I used). I am fairly happy with how the website looks, and I'm not much of a designer in the first place, so I don't plan to change this right now - but if somebody else wants to give it a stab please talk to me.

If you find any other issues (and you cannot, or do not want to, fix them right away) you can always create an [issue in the project issue tracker](https://github.com/icetlab/icetlab.github.io/issues).