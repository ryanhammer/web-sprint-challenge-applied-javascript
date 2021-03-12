  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {
    // Instantiating the needed elements
    const card = document.createElement("div");
    const articleHeadline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorSpan = document.createElement("span");

    // Assigning values and class attributes
    card.classList.add("card");
    articleHeadline.textContent = article.headline;
    articleHeadline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    img.src = article.authorPhoto;
    authorSpan.textContent = `By ${article.authorName}`;

    // Adding the element hierarchy
    card.appendChild(articleHeadline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorSpan);
    imgContainer.appendChild(img);

    // Return the completed markup
    return card;
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
    // Instantiating element attached to input selector value
    const selectorElement = document.querySelector(`${selector}`);
    // Obtaining topics from the given endpoint
    axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    // If promise is resolved, use Card to create cards
    .then( (res) => {
        // Creating array of topics because each topic has array of article objects
        const articleTopics = Object.keys(res.data.articles);
        // Creating forEach loop that iterates through each topic
        articleTopics.forEach( (topic) => {
            const topicArticles = res.data.articles[topic];
            // Creating forEach loop that iterates through each article for the current topic and uses Card to create a card for that article
            topicArticles.forEach( (artObj) => {
                const newCard = Card(artObj);
                selectorElement.appendChild(newCard);
            });
        });
    })
    // If promise is not resolved, log error message to console
    .catch( (err) => {
        console.log(err);
    })
    // Log "done" to the console when promise is settled
    .finally( () => {
        console.log("done");
    })
}

export { Card, cardAppender }
