

let food_database = {
   HotBeverages: {
       name: 'Hot Beverages',
       id: 'HotBeverages',
       image_src: 'img/hot.jpg',
       price: 5
   },
   ColdBeverages: {
       name: 'Cold Beverages',
       id: 'ColdBeverages',
       image_src: 'img/R.jpg',
       price: 8
   },
   Donuts: {
       name: 'Donuts',
       id: 'Donuts',
       image_src: 'img/don.jpg',
       price: 6
   },
   Lunch: {
       name: 'Lunch (11am-10pm)',
       id: 'Lunch',
       image_src: 'img/lu.jpg',
       price: 10
   },
}

// id has to be without space

let categories_database = {
   novel: {
       1: {
           name: 'harry potter',
           id: 'novel-harry-poter',
           image_url: 'img/harry-potter.jpg'
       },
       2: {
           name: 'Anna Karenina',
           id: 'novel-Anna-Karenina',
           image_url: 'img/an.jpg'
       },
       3: {
           name: 'To Kill a Mockingbird',
           id: 'novel-ToKillaMockingbird',
           image_url: 'img/th.jpg'
       },
       4: {
           name: 'Jane Eyre',
           id: 'novel-Jane-Eyre',
           image_url: 'img/429.jpg'
       }
   },
   ebook: {
       1: {
           name: 'Math',
           id: 'ebook-math',
           image_url: 'img/math.png'
       }


   },
   comic: {
       1: {
           name: 'Spider Man',
           id: 'comic-spider-man',
           image_url: 'img/spider-man.jpg'
       },
       2: {
           name: 'Spider Man',
           id: 'comic-spider-man',
           image_url: 'img/spider-man.jpg'
       },
       3: {
           name: 'Spider Man',
           id: 'comic-spider-man',
           image_url: 'img/spider-man.jpg'
       }
   }
}



let categories_information = {
   novel: {
       name: 'novel',
       description: 'A novel is a relatively long work of narrative fiction, typically written in prose and published as a book.',
   },
   ebook: {
       name: 'ebook',
       description: 'An ebook, also known as an e-book or eBook, is a book publication made available in digital form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.'
   },
   comic: {
       name: 'comic book',
       description: 'A comic book, also called comicbook, comic magazine or simply comic, is a publication that consists of comics art in the form of sequential juxtaposed panels that represent individual scenes.'
   }
}

let footer = `
<div class="part-2">
      <!-- info section -->
      <section class="info_section layout_padding-top layout_padding2-bottom">
        <div class="container">
          <div class="social_container">
            <h4>Follow Us</h4>
            <div class="social_box">
              <a href="https://www.facebook.com/">
                <img src="img/fb.png" alt="" />
              </a>
              <a href="https://twitter.com/">
                <img src="img/twitter.png" alt="" />
              </a>
              <a href="www.linkedin.com/in/">
                <img src="img/linkedin.png" alt="" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="img/OIP.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
<!-- footer section -->
      <section class="container-fluid footer_section">
        <div class="container">
          <p>
            <em
              >Copyright &copy;2020 mahsar <br />
              <a href="mailto:mahsaroostam@gmail.com">
                mahsa@roostaei.com</a
              ></em
            >
          </p>
        </div>
      </section>
      <!-- footer section -->
`

document.getElementById('footer').innerHTML = footer


document.getElementById("header").innerHTML = nav

//Email Validation Fuction
function validateEmail(email) {
   let regExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
   return regExp.test(email);
}
//Name Validation Fuction
function validateName(name) {
   let regExp = /(^[a-zA-Z][a-zA-Z\s]{0,50}[a-zA-Z]$)/;
   return regExp.test(name);
}

//Register Form Validation Functiom
function validateRegisterForm() {
   document.getElementById("register").addEventListener("submit", function (event) {
       event.preventDefault;
       let fName = document.forms["register"][name = "fName"].value;
       let lName = document.forms["register"][name = "lName"].value;
       let dob = document.forms["register"][name = "DOB"].value;
       let email = document.forms["register"][name = "email"].value;
       let phone = document.forms["register"][name = "phone"].value;
       let now = new Date();

       if (!validateName(fName)) {
           alert('Please enter a valid first name');
       }
       else if (!validateName(lName)) {
           alert('Please enter a valid last name');
       }
       else if (!validateEmail(email)) {
           alert('Please enter a valid email');
       }
       else if (parseInt(now.getFullYear()) - parseInt(dob.substring(0, 4)) <= 12) {
           alert("Please enter a valid birth of date. if you are younger than 12, you need"
               + "your parent permisson to register.")
       }
       else if ((phone != "") && (isNaN(phone) || phone.length != 10)) {
           alert("Field Phone must be a number with 10 digits.");
       }
       else {
           alert("Your information has been submitted successfully.")
       }
   });
}

//Register Form Validation Functiom
function validateContactForm() {
   document.getElementById("contact").addEventListener("submit", function (event) {
       event.preventDefault;
       let fullName = document.forms["contact"][name = "fullName"].value;
       let email = document.forms["contact"][name = "email"].value;
       let phone = document.forms["contact"][name = "phone"].value;

       if (!validateName(fullName)) {
           alert('Please enter a valid name');
       }
       else if (!validateEmail(email)) {
           alert('Please enter a valid email');
       }
       else if ((phone != "") && (isNaN(phone) || phone.length != 10)) {
           alert("Field Phone must be a number with 10 digits.");
           return;
       }
       else {
           alert("We received your message successfully.")
       }
   });
}

