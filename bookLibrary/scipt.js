const books = [];

//CONSTRUCTOR FUNCTION FOR BOOK OBJECT
function Book(tittle, author, pages, status) {
  this.tittle = tittle;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
//FUNCTION FOR CHANGING BOOK READ STATUS
function statusChange(e) {
  // document.querySelectorAll('.book')[e-1]
  document.querySelectorAll(".status")[e - 1].textContent === "STATUS : READ"
    ? (document.querySelectorAll(".status")[e - 1].textContent =
        "STATUS : NOT READ")
    : (document.querySelectorAll(".status")[e - 1].textContent =
        "STATUS : READ");
}

// document.querySelector(".statusChangeBtn") &&
//   document.querySelector(".statusChangeBtn").addEventListener("click", random);

// document.querySelector(".statusChangeBtn").onclick = () => {
//   console.log("hhh");
// document.querySelector(".status").textContent === "READ"
//   ? "NOT READ"
//   : "READ";
// };

document.querySelector(".add-book").addEventListener("click", () => {
  document.querySelector(".module").style.display = "flex";
});
document.querySelector(".close-form").addEventListener("click", () => {
  document.querySelector(".module").style.display = "none";
});

//FUNCTION FOR CREATING BOOK OBJECT WITH FORM VALUES
function creatingObject() {
  let tittle = document.getElementById("tittle").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus;
  document.querySelectorAll(".statusAns").forEach((elmnt) => {
    if (elmnt.checked) {
      readStatus = elmnt.value;
    }
  });
  return new Book(tittle, author, pages, readStatus);
}

//FUNCTION FOR CREATING BOOK ELEMENT WITH BOOK OBJECT VALUES
function creatingBookElement(bookObjectArray) {
  let book;
  bookObjectArray.forEach((boook) => {
    book = document.createElement("div");
    book.classList.add("book");
    console.log(Object.keys(boook));
    let index = 0;
    for (const key in boook) {
      let bookProp = document.createElement("div");
      bookProp.classList.add(key);

      if (key === "status") {
        boook[key] === "yes"
          ? (bookProp.textContent = Object.keys(boook)[index] + " : " + "Read")
          : (bookProp.textContent =
              Object.keys(boook)[index] + " : " + "Not Read");
      } else {
        bookProp.textContent = Object.keys(boook)[index] + " : " + boook[key];
        index++;
      }
      book.appendChild(bookProp);
    }
    const statusChangeBtn = document.createElement("button");
    statusChangeBtn.classList.add("statusChangeBtn");
    statusChangeBtn.innerText = "Change Status";
    statusChangeBtn.setAttribute("onclick", `statusChange(${books.length})`);
    book.appendChild(statusChangeBtn);
  });
  return book;
}

//FUNCTION FOR FORM SUBMIT
document.getElementById("submitbtn").addEventListener("submit", (e) => {
  e.preventDefault();
  // document.querySelector(".statusChangeBtn").style.display = "none";
  const tempBookArray = [];
  tempBookArray.push(creatingObject());

  books.push(tempBookArray[0]);
  document
    .getElementById("books")
    .appendChild(creatingBookElement(tempBookArray));
  document.querySelector(".module").style.display = "none";
  document.querySelector(".add-book").style.display = "block";
  document.getElementById("submitbtn").reset();
});
