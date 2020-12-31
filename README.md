# Shopify-challenge

[Demo](https://kozr.github.io/shopify-challenge/)

I've made plenty of web apps before. Whether it was for personal use, work, or the hackathon community, I always try to learn a new thing or two every new project. This time, I decided to not use boilerplate code and to also try TypeScript on the frontend.

I learned a few things from this project. Arguably, TypeScript isn't the most "bang for the time" for frontend development. It takes longer to develop a full feature, but of course, it could pay off when others start using the code as well. It was also good to have learned how to set up webpack, eslint, tsconfig, babel, and prettier.

Next time I'll pick up a few tricks on how to optimize performance based on the lighthouse report.

## Technical requirements:
- [X] Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- [X] Each search result should list at least its title, year of release and a button to nominate that film.
- [X] Updates to the search terms should update the result list
- [X] Movies in search results can be added and removed from the nomination list.
- [X] If a search result has already been nominated, disable its nominate button.
- [X] Display a banner when the user has 5 nominations.

## Extras:
- [X] Done in TypeScript strict mode
- [X] Save and retrieve nominated movies from localstorage
- [X] Hid API keys in a custom lambda wrapper for security reasons
- [X] 100% score for Accessbility from Lighthouse
- [X] 100% score for Best Practices from Lighthouse
- [X] Removed search results that were already in the nominations list

![image](https://user-images.githubusercontent.com/40312631/103390274-6ac2d480-4ac8-11eb-9dfd-8bd6ef083202.png)

![image](https://user-images.githubusercontent.com/40312631/103403240-497fd980-4b04-11eb-9f3c-83f038b17bcd.png)
