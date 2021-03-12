  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

const Tabs = (topics) => {
    // Instantiate parent div element and add proper class attribute
    const topicsDiv = document.createElement("div");
    topicsDiv.classList.add("topics");
    // Instantiate div element for each topic, assign text and proper class attribute and create element hierarchy within parent div element
    topics.forEach(element => {
        const newTopicDiv = document.createElement("div");
        newTopicDiv.textContent = element;
        newTopicDiv.classList.add("tab");
        topicsDiv.appendChild(newTopicDiv);
    });
    // Return markup finished markup element
    return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
