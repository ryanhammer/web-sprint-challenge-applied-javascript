  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const Header = (title, date, temp) => {
    
    // instantiate the needed elements
    const header = document.createElement("div");
    const dateSpan = document.createElement("span");
    const titlehead = document.createElement("h1");
    const tempSpan = document.createElement("span");

    // Assigning values and class attributes
    header.classList.add("header");
    dateSpan.textContent = date;
    dateSpan.classList.add("date");
    titlehead.textContent = title;
    tempSpan.textContent = temp;
    tempSpan.classList.add("temp");

    // Adding the element hierarchy
    header.appendChild(dateSpan);
    header.appendChild(titlehead);
    header.appendChild(tempSpan);

    // Return the completed markup
    return header;
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const headerAppender = (selector) => {
    // instantiate element attached to input selector value
    const selectorElement = document.querySelector(`${selector}`);
    // create header passing in random argument names
    const newHeader = Header("Lambda Times", "March 12, 2021", "75°");
    // append header to element matching selector
    selectorElement.appendChild(newHeader);
}

export { Header, headerAppender }
