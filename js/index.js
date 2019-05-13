const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('header nav a');
let navBar = document.querySelector('nav');
let homeItem = document.createElement('a');
let dontClickItem = document.createElement('a');
dontClickItem.style.color = 'green';

homeItem.textContent = 'Home';
homeItem.style.color = 'green';
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';
dontClickItem.textContent = 'Dont Click';
navBar.appendChild(dontClickItem);
navBar.prepend(homeItem);

navItems.forEach(function (ele) {
  ele.style.color = 'green';
})

let h1Item = document.querySelector('h1');
// let br = document.createElement('BR');
// h1Item.textContent = 'DOM ' + document.write('<br> /') + 'IS AWESOME';
h1Item.innerHTML = 'DOM <br /> IS <br /> AWESOME';
let buttonOne = document.querySelector('button');
buttonOne.textContent = 'Get Started';

let headerIMG = document.getElementById('cta-img');
headerIMG.src = 'img/header-img.png';

let mainContent = document.querySelectorAll('.text-content');
mainContent[0].firstChild.textContent = 'Features';
mainContent[0].lastChild.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainContent[1].firstChild.textContent = 'About';
mainContent[1].lastChild.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainContent[2].firstChild.textContent = 'Services';
mainContent[2].lastChild.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainContent[3].firstChild.textContent = 'Product';
mainContent[3].lastChild.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainContent[4].firstChild.textContent = 'Vision';
mainContent[4].lastChild.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let mainIMG = document.getElementById('middle-img');
mainIMG.src = 'img/mid-page-accent.jpg';

let contactInfo = document.querySelector('.contact');
let contactH4 = document.createElement('h4');
contactH4.textContent = 'Contact';
let contactAddress = document.createElement('p');
contactAddress.innerHTML = '123 Way 456 Street, <br /> Somewhere, USA';
let contactNumber = document.createElement('p');
contactNumber.textContent = '1 (888) 888-8888';
let contactEmail = document.createElement('p');
contactEmail.textContent = 'sales@greatidea.io';

contactInfo.appendChild(contactH4);
contactInfo.appendChild(contactAddress);
contactInfo.appendChild(contactNumber);
contactInfo.appendChild(contactEmail);

let footerItem = document.createElement('footer');
document.body.append(footerItem);
let footerP = document.createElement('p');
footerP.textContent = 'Copyright Great Idea! 2018';
footerItem.appendChild(footerP);
