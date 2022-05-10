# API

> free api's can be found here: https://github.com/public-apis/public-apis

## Exercise build an interface for the API request, and display its content n HTML form

working with textgain

1. make a free account here: https://www.textgain.com/

2. we will also need this extension: https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/

3. go to `My Account` => `Dashboard` => `My API Keys`

4. keep this tab open because you will need the API key!

5. go to `Text Analytics API`=> `Web Services`

6. We will experiment with Sentiment Analysis

7. We will need to do a `GET`request using `fetch`

   ```javascript
   const language = {
     de: "de",
     fr: "fr",
     it: "it",
     en: "en",
   };

   let query = "some text";

   const key = "your API key"; // keep it secret

   async function get_data() {
     const response = await fetch(
       "https://api.textgain.com/sentiment?q=" +
         query +
         "&lang=" +
         language.en +
         "&key=" +
         key,
       {
         method: "GET",
         headers: {
           Accept: "application/json",
         },
         mode: "cors",
       }
     );

     const data = await response.json();
     console.log(data);
   }

   get_data();
   ```
