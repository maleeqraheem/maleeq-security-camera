
 //code to display the modal with a video when the video play button is clicked 
 // creating variables to be used 
 //all variables are created from getting each element by ID or query selector 
 const modal = document.getElementById('videoModal');//creating a variable that finds the modal to be displayed 
    const btn = document.getElementById('openModal');//creating a variable that opens the modal to be displayed 
    const span = document.querySelector('.close');// creating a variable that that is used to close the modal 
    const video = document.getElementById('myVideo');//creating a variable for the modal  content which is the video 

    // Open modal and play video
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
      video.play();
    });

    // Close modal when clicking "×"
    span.addEventListener('click', () => {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0; // reset video
    });

    // Close modal when clicking outside the video box
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
      }
    });
    // code to display a modal when you subscribe to your newsletter 
    // declaring variables, getting HTML elements by their ID 
      const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const errorMsg = document.getElementById("errorMsg");
    const modalnews = document.getElementById("thankYouModal");
    const closeBtn = document.getElementById("close");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      const email = emailInput.value.trim();
      const isValid = emailInput.checkValidity();

// checking the validity of mail to determine if the error message will display or not 
      if (!isValid) {
        errorMsg.style.display = "block";
        emailInput.focus();
        return;
      } else {
        errorMsg.style.display = "none";
      }

      // Show thank you modal with user's email
      thankYouMessage.textContent = `Thank you honorable user, ${email} , for signing up to our newsletter!`;
      modalnews.style.display = "flex";
      form.reset();
    });

    // Close the  modal with the close icon 
    closeBtn.addEventListener("click", () => {
      modalnews.style.display = "none";
    });
// closing the modal when anu part outside the modal is clicked 
    window.addEventListener("click", (e) => {
      if (e.target === modalnews) modalnews.style.display = "none";
    });





    
   // code to display a modal when you fill the contact form 
    // Elements
    const contactform = document.getElementById("contactform");
    const fullname = document.getElementById("fname");
    const contactmail = document.getElementById("contactemail");
    const usermessage = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const contactmodal = document.getElementById("contactmodal");
    const successmodal = document.getElementById("successmodal");
    const contactmodalcloseBtn = document.getElementById("closecontactmodal");
    const contactMessage = document.getElementById("contactMessage");
    const okayBtn = document.getElementById("okay");

    // Correct email regex (single backslashes)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Live input handlers to hide errors as user types
    fullname.addEventListener("input", () => {
      if (fullname.value.trim() !== "") {
        nameError.style.display = "none";
    
      }
    });
    contactmail.addEventListener("input", () => {
      if (emailPattern.test(contactmail.value.trim())) {
        emailError.style.display = "none";
   
      }
    });
    usermessage.addEventListener("input", () => {
      if (usermessage.value.trim() !== "") {
        messageError.style.display = "none";

      }
    });

    // Submit handler
    contactform.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent page reload

      let valid = true;

      // Validate Name inputed
      if (fullname.value.trim() === "") {
        nameError.style.display = "block";
        valid = false;
      } else {
        nameError.style.display = "none";
 
      }

      // Validate Email using the corrected regex
      const emailValue = contactmail.value.trim();
      if (!emailPattern.test(emailValue)) {
        emailError.style.display = "block";
        valid = false;
      } else {
        emailError.style.display = "none";
      
      }

      // Validate Message
      if (usermessage.value.trim() === "") {
        messageError.style.display = "block";
  
        valid = false;
      } else {
        messageError.style.display = "none";
      
      }

      if (!valid) return; // Stop if any check failed

      // All good users input are accurate show confirm modal, the first modal
      contactMessage.innerHTML = `
              <br> <strong>Dear User, kindly confirm your contact details and message, click 'OK' to succefully send your message to us </strong> <br> <hr>
        <strong>Name:</strong> ${fullname.value}<br>
        <strong>Email:</strong> ${contactmail.value}<br>
        <strong>Message:</strong> ${usermessage.value}<br>
      `;
      contactmodal.style.display = "flex";
 
    });

    // Close contact modal
    contactmodalcloseBtn.addEventListener("click", () => {
      contactmodal.style.display = "none";
     
    });

    // OK button -> show success, reset form
    okayBtn.addEventListener("click", () => {
      contactmodal.style.display = "none";
      successmodal.style.display = "flex";
 

      // Hide success modal after 2 seconds
      setTimeout(() => {
        successmodal.style.display = "none";
          nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

    
       
      }, 2000);

      contactform.reset();
    });

    // Close modals when clicking outside modal content
    window.addEventListener("click", (e) => {
      if (e.target === contactmodal) {
        contactmodal.style.display = "none";
       
      }
      if (e.target === successmodal) {
        successmodal.style.display = "none";
     
      }
    });


    // creating a scroll to top button 
    // Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 1000px
window.onscroll = function() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// When clicked, scroll to the top smoothly
scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// creating a function for the cart badge 
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}





//Creating the add to cart code to add product to card 
// CART STORAGE
  let cart = [];

  // SELECT ALL ADD TO CART BUTTONS
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      addToCart(button);
    });
  });

  // ADD PRODUCT TO CART
  function addToCart(button) {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const image = button.dataset.image;

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
      });
    }

    renderCart();
    showCartModal();
    updateCartCount();
    refreshCheckoutIfOpen();

  }

  // DISPLAY CART
  function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const checkoutBtn = document.getElementById("checkout-btn");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
      emptyCart.style.display = "block";
      checkoutBtn.disabled = true;
    } else {
      emptyCart.style.display = "none";
      checkoutBtn.disabled = false;
    }

    let total = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;

      const li = document.createElement("li");
li.innerHTML = `
  <div class="cart-item">
    <img src="${item.image}" alt="${item.name}" class="cart-img">

    <div class="cart-details">
      <strong>${item.name}</strong>
      <p>$${item.price}</p>

      <div class="cart-controls">
        <button onclick="decreaseQty(${index})">−</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQty(${index})">+</button>
        <button onclick="removeItem(${index})" class="remove">Remove</button>
      </div>
    </div>
  </div>
`;


      cartItems.appendChild(li);
    });

    document.getElementById("cart-total").textContent = total.toFixed(2);
  }

  // INCREASE QUANTITY
  function increaseQty(index) {
    cart[index].quantity++;
    renderCart();
    updateCartCount();
refreshCheckoutIfOpen();
  }

  // DECREASE QUANTITY
  function decreaseQty(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    }
    renderCart();
    updateCartCount();
refreshCheckoutIfOpen();
  }

  // REMOVE ITEM
  function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCount();
refreshCheckoutIfOpen();
  }
  //modal ro display succesful add to cart
  function showCartModal() {
  const modal = document.getElementById("cart-modal");

  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.display = "none";
  }, 1000);
}
/*CHECKOUT SECTION DISPLAY*/
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutSection = document.getElementById("checkout");

checkoutBtn.addEventListener("click", () => {
  checkoutSection.classList.remove("hidden");
  checkoutSection.scrollIntoView({ behavior: "smooth" });
  updateCheckoutTotals();
});

/*DELIVERY OPTION LOGIC*/
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const addressField = document.getElementById("address-field");
const deliveryFeeEl = document.getElementById("delivery-fee");
const checkoutSubtotalEl = document.getElementById("checkout-subtotal");
const checkoutTotalEl = document.getElementById("checkout-total");

deliveryRadios.forEach(radio => {
  radio.addEventListener("change", updateCheckoutTotals);
});

/*CALCULATE CART SUBTOTAL*/
function calculateCartSubtotal() {
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  return subtotal;
}
function renderCheckoutItems() {
  const list = document.getElementById("checkout-items-list");
  list.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "checkout-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-item-info">
        <strong>${item.name}</strong>
        <span>Qty: ${item.quantity}</span>
      </div>
      <div class="checkout-item-price">
        $${(item.price * item.quantity).toFixed(2)}
      </div>
    `;

    list.appendChild(div);
  });
}


/* UPDATE CHECKOUT TOTALS*/
function updateCheckoutTotals() {
  const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
  const deliveryFee = selectedDelivery ? Number(selectedDelivery.value) : 0;

  // Show / hide address field
  if (deliveryFee === 3) {
    addressField.classList.remove("hidden");
  } else {
    addressField.classList.add("hidden");
  }

  const subtotal = calculateCartSubtotal();
  const total = subtotal + deliveryFee;

  checkoutSubtotalEl.textContent = subtotal.toFixed(2);
  deliveryFeeEl.textContent = deliveryFee.toFixed(2);
  checkoutTotalEl.textContent = total.toFixed(2);

  renderCheckoutItems();
}
function refreshCheckoutIfOpen() {
  const checkoutSection = document.getElementById("checkout");

  if (!checkoutSection.classList.contains("hidden")) {
    updateCheckoutTotals();
  }
}


/*CHECKOUT FORM SUBMISSION*/
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert(" Your cart is empty");
    return;
  }

  const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
  const addressInput = document.getElementById("address");

  if (!selectedDelivery) {
    alert(" Please select Delivery or Pickup");
    return;
  }

  if (Number(selectedDelivery.value) === 3 && addressInput.value.trim() === "") {
    alert("Please enter your delivery address");
    return;
  }

  alert(" Order placed successfully!");

  // OPTIONAL: Clear cart after checkout
  cart = [];
  renderCart();
  updateCartCount();

  // Hide checkout section
  checkoutSection.classList.add("hidden");
});
