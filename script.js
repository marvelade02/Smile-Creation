function showSidebar() {
    const show = document.querySelector('.side-bar');
    show.style.display = 'block'
  document.getElementById("overlay").style.display = 'block';
}

function hideSidebar() {
    const hide = document.querySelector('.side-bar');
    hide.style.display = 'none'
}

function gotoTreats() {
  const treats = document.getElementById('treats');
  treats.scrollIntoView({ behavior: 'smooth' });
}

function openOrder(id) {
  // Hide all open orders first
  document.querySelectorAll('.orders').forEach(o => {
    o.classList.remove('active');
  });

  // Show selected one
  const orderBox = document.getElementById(id);
  orderBox.classList.add('active');
  document.getElementById("overlay").style.display = 'block';
}

// Close on overlay click
document.getElementById("overlay").addEventListener("click", () => {
  document.querySelectorAll('.orders').forEach(o => o.classList.remove('active'));
  const hidee = document.querySelector('.side-bar');
  hidee.style.display = 'none'
  document.getElementById("overlay").style.display = 'none';
});

// Close on "X" button
document.querySelectorAll('.orders .close-btn').forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.remove('active');
    document.getElementById("overlay").style.display = 'none';
  });
});

document.querySelectorAll('.side-bar a').forEach(link => {
    link.addEventListener('click', hideSidebar);
});

function calculatePrice2 () {
  const quantity2 = document.getElementById('quantity2').value;
  const amt = document.querySelector('.amt');
  const amtt = amt.textContent
  let a = Number(amtt)
  total = quantity2 * a

 const submit = document.getElementById('submit2');

 if (submit.innerHTML === 'Confirm Order') {
   submit.style.display = 'none'

  document.querySelector('.confirmText').innerHTML = 'Your Order is successful 🥰😊'

  document.querySelector('.totalPrice').style.display = 'none'
  setTimeout(() => location.reload(), 3000);

 } else {
   document.querySelector('.totalPrice').innerHTML = `Your total price is $${total}`
  submit.innerHTML = 'Confirm Order';
  
 }
}

function calculatePrice1 () {
  const quantity1 = document.getElementById('quantity1').value;
  const amt = document.querySelector('.amt1');
  const amtt = amt.textContent
  let a = Number(amtt)
  total = quantity1 * a

   const submit = document.getElementById('submit1');

 if (submit.innerHTML === 'Confirm Order') {
   submit.style.display = 'none'

  document.querySelector('.confirmText1').innerHTML = 'Your Order is successful 🥰😊'

  document.querySelector('.totalPrice1').style.display = 'none'
  setTimeout(() => location.reload(), 3000);

 } else {
   document.querySelector('.totalPrice1').innerHTML = `Your total price is $${total}`
  submit.innerHTML = 'Confirm Order';
  
 }
}

function calculatePrice3 () {
  const quantity = document.getElementById('quantity3').value;
  const amt = document.querySelector('.amt3');
  const amtt = amt.textContent
  let a = Number(amtt)
  total = quantity * a

   const submit = document.getElementById('submit3');

 if (submit.innerHTML === 'Confirm Order') {
   submit.style.display = 'none'

  document.querySelector('.confirmText3').innerHTML = 'Your Order is successful 🥰😊'

  document.querySelector('.totalPrice3').style.display = 'none'
  setTimeout(() => location.reload(), 3000);

 } else {
   document.querySelector('.totalPrice3').innerHTML = `Your total price is $${total}`
  submit.innerHTML = 'Confirm Order';
  
 }
}

function calculatePrice4 () {
  const quantity = document.getElementById('quantity4').value;
  const amt = document.querySelector('.amt4');
  const amtt = amt.textContent
  let a = Number(amtt)
  total = quantity * a

   const submit = document.getElementById('submit4');

 if (submit.innerHTML === 'Confirm Order') {
   submit.style.display = 'none'

  document.querySelector('.confirmText4').innerHTML = 'Your Order is successful 🥰😊'

  document.querySelector('.totalPrice4').style.display = 'none'
  setTimeout(() => location.reload(), 3000);

 } else {
   document.querySelector('.totalPrice4').innerHTML = `Your total price is $${total}`
  submit.innerHTML = 'Confirm Order';
  
 }
}