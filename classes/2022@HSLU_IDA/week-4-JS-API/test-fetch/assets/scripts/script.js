
function request_cats_facts() {

  let base_url = 'https://cat-fact.herokuapp.com'

  let query = '/facts'

  fetch(base_url + query) // first request to remote server
    .then(//server answer back with ok or not ok, if ok starts downloading packets
      function (response) {
        // how do we format the pakets?
        return response.json()
      }
    )
    .then(function (data) {
      // what do we do with the in fomation that we collected?
      build_facts(data)
    })
    .catch(function (error) {
      console.log(error)
    })
}





function build_facts(data) {
  // let javascript mess with your html class
  let cat_facts_div = document.querySelector('.cats-facts')
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    let data_point = data[i]
    // console.log(data_point)
    // display only the text
    console.log(data_point['text'])
    // build a virtual div in javascript
    let cat_fact = document.createElement('div')
    // text to it
    cat_fact.textContent = data_point['text']
    // add it to the html element that we grabbed above
    cat_facts_div.appendChild(cat_fact)
  }
}


function request_coffee() {
  let base_url = 'https://coffee.alexflipnote.dev'
  let query = '/random.json'
  fetch(base_url + query)
    .then(
      function (response) {
        return response.json()
      }
    )
    .then(
      function (data) {
        build_coffee(data)
      }
    )
    .catch(
      function (error) {
        console.log(error)
      }
    )
}


function build_coffee(data) {
  console.log(data['file'])
  let coffee_div = document.querySelector('.coffee')
  let coffee_img = document.createElement('img')
  coffee_img.src = data['file']
  coffee_div.appendChild(coffee_img)
}

// wait until the html page is loaded
window.onload = function () {

  // get the button 
  let coffee_button = document.querySelector('.kafi')
  console.log(coffee_button)
  // add an event listener to the button in tis case click
  coffee_button.addEventListener('click', request_coffee)
}















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
    "&key=" + key,
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


