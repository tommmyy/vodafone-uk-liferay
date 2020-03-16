# ii. React and CMS 

## 02-01. Gatsby and Wordpress

1. Clone [this repo](https://github.com/tommmyy/vodafone-uk-gatsby-wp). 
2. Install and run the app:

```sh
yarn && yarn start
```

The app should be running at [http://localhost:8000/](http://localhost:8000/).

3. Get a quick look at `gatsby-*.js` files.

4. Show additional information for every post in the main feed by modyfing `page/index.js`.

Show `date` and list of `tags` for each post. 

Firstly modify graphql query to select additional fields (see hint bellow).

Next edit the component to show new fields. 

Be creative.

### Hints

Look at [graphiql explorer](http://localhost:8000/\_\_graphiql) and the `allFormatsPost` query to find out what fields you should select.
