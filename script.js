const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "Oops", "More", "Next", "Continue", "Keep going", "Click me", "A new one", "Try Again", "So Close", "Well Done"];



const url = "https://jsonplaceholder.typicode.com/";


function getJson(item){
  const urlToFetch = url + item;
  console.log(urlToFetch);
  fetch(urlToFetch)
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse)
    return renderResponse(jsonResponse)
  })
  .catch(err => console.log(err))
}
getJson("posts")


async function sendJson(item){
try {
  
  const element = {
  id: 5,
  title: "this is my title",
  body: "this is my body",
  userId: 6
}

const data = {
  method: "POST",
  body: JSON.stringify(element),
  headers: {
    "Content-type" : "application/json"
  }
}

const response = await fetch (url + item, data)
const jsonResponse = await response.json();
console.log(jsonResponse);
} catch(err) {console.log(err)}

}

sendJson("posts")










// DO NOT CHANGE BELOW THIS LINE 
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  //console.log(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
}

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  //sendJson();
  jsonButton.innerHTML = `${collection[jsonSelection]}!`;
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
}

jsonButton.onclick = () => getJson("posts");