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

function calculatePrice () {
  const quantity2 = document.getElementById('quantity2').value;
  const price = document.getElementById('price');
  const pricee = price.textContent
  let a = Number(pricee)
  total = quantity2 * a

 const abc = document.getElementById('s');

 if (abc.innerHTML === 'Confirm Order') {
   abc.style.display = 'none'
   document.querySelector('.order').style.display = 'none'

  document.getElementById('confirmText').innerHTML = 'Your Order is successful 🥰😊'
  setTimeout(() => location.reload(), 3000);

 } else {
   document.getElementById('totalPrice').innerHTML = `Your total price is $${total}`
  abc.innerHTML = 'Confirm Order';
  
 }
}

function confirmOrder() {
  document.querySelector('.d').style.display = 'none'
}