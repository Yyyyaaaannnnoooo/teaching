//========================================================================================
/*                                                                                      *
 *                                      OPEN API's                                      *
 *                                                                                      */
//========================================================================================

//========================================================================================
/*                                                                                      *
 *                    xeno canto: https://xeno-canto.org/explore/api                    *
 *                        biriyani: https://biriyani.anoram.com/                        *
 *                       advice slip: https://api.adviceslip.com/                       *
 *                    punk api: https://punkapi.com/documentation/v2                    *
 *                    random coffee: https://coffee.alexflipnote.dev/                    *
 *                 foodish: https://github.com/surhud004/Foodish#readme                 *
 *                 cat facts: https://alexwohlbruck.github.io/cat-facts/                *
 *                                                                                      */
//========================================================================================


//========================================================================================
/*                                                                                      *
 *                                       cat facts                                      *
 *                                                                                      */
//========================================================================================


function fetch_cat_facts() {
  fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(data => show_cat_facts(data))
    .catch(error => console.log(error))
}

function show_cat_facts(data) {
  console.log(data)
}

fetch_cat_facts()

//========================================================================================
/*                                                                                      *
 *                                       textgain                                       *
 *                                                                                      */
//========================================================================================


const language = {
  de: "de",
  fr: "fr",
  it: "it",
  en: "en",
};

function query_text_API(query) {
  if (query.length > 3000) {
    console.log('your query should be less than 3000 chars')
    return
  }

  // let query = "I+wanted+to+have+a+dog,+but+my+other+pets+all+died+after+few+weeks."; // MAX 3000 CHAR

  const key = "62791490944da56a6881ce21"; // <= this should be kept secret!!!

  fetch(
    "https://api.textgain.com/sentiment?q=" +
    query +
    "&lang=" +
    language.en +
    "&key=" +
    key,
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      },
      mode: "cors",
    }
  )
    .then(
      response => response.json()
    )
    .then(
      data => {
        console.log(data)
        // make a function that does something with data
        show_response(data)
      }
    )
    .catch(error => console.log(error))
}

function show_response(data) {

  console.log('Do something with: ', data)
}

// query_text_API('I+wanted+to+have+a+dog,+but+my+other+pets+all+died+after+few+weeks.')