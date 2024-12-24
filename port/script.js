// script.js

// Smooth Fade-in Animation for Form Elements
document.addEventListener("DOMContentLoaded", () => {
    const formElements = document.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form button");
  
    formElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.animation = `fadeIn 0.8s ease-in-out forwards`;
      el.style.animationDelay = `${index * 0.2}s`;
    });
  });


// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Highlighting the current section in the navbar
const navLinks = document.querySelectorAll('.main-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Dynamically Add Digital Products
document.addEventListener("DOMContentLoaded", () => {
    const products = [
    {
      title: "E-book: NO EXCUSE",
      description: "Earn in six-digits with high income skills.",
      price: "3k",
      image: "assets/WhatsApp Image 2024-12-12 at 21.43.11_704e3116.jpg"
    },
    {
      title: "CRYPTO PROFIT KIT",
      description: "Learning technical analysis and how to use it to enter profitable trades.",
      price: "120k",
      image: "assets/WhatsApp Image 2024-12-12 at 21.48.29_fe0ee2d1.jpg"
    },
    {
      title: "PROFIT ACCELERATOR BLUEPRINT",
      description: "A Beginner-Friendly Programme that will guide you on how to make at least 300k monthly all done with your smartphone.",
      price: "8k",
      image: "assets/WhatsApp Image 2024-12-12 at 21.49.51_6c3892c3.jpg"
    },
    {
      title: "COMPLETE WEB DEVELOPMENT BUNDLE",
      description: "HTML, CSS, JAVASCRIPT, PHP, Laravel and more..",
      price: "4k",
      image: "assets/WhatsApp Image 2024-12-12 at 21.52.32_a571e980.jpg"
    },
    
    {
        title: "MOBILE APP DESIGN",
        description: "Zero coding, app design like a pro.",
        price: "2k",
        image: "assets/WhatsApp Image 2024-12-12 at 21.54.03_d581db7a.jpg"
      },
    {
        title: "TRADING CLASS",
        description: "Learn to trade with both Binance and Bitmax, and also receive free signal.",
        price: "$300",
        image: "assets/WhatsApp Image 2024-12-12 at 21.55.48_0da3caaf.jpg"
      },
    {
        title: "THE TRADING BLUEPRINT",
        description: "This is an educational program where I take you by your hand and teach you exactly every single thing I know about trading mastery.",
        price: "6.5k",
        image: "assets/WhatsApp Image 2024-12-12 at 21.57.15_fad5f949.jpg"
      },
    {
        title: "CONTENT CREATION MASTER CLASS",
        description: "Learn how to create contents that sells, how to come up with content ideas, never run out of social media post and lot more...",
        price: "25k",
        image: "assets/WhatsApp Image 2024-12-12 at 21.58.41_52c2580f.jpg"
      },
    {
        title: "LEARN FACELESS VIDEO CREATION",
        description: "After crossing 1M+ views, 10k+ leads and over 100k followers across social media with ORGAINIC faceless content, I've decided to show you how!.",
        price: "5k",
        image: "assets/WhatsApp Image 2024-12-12 at 22.00.34_bece0ecd.jpg"
      },
      {
        title: "PASSIVE INCOME",
        description: "How to make money on Instagram with 0-1000 followers.",
        price: "10k",
        image: "assets/WhatsApp Image 2024-12-12 at 22.02.57_e4422451.jpg"
    },
  ];


  
  const productContainer = document.querySelector(".product-container");

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-description">${product.description}</p>
      <p class="product-price">${product.price}</p>
      <a href="https://selar.co/p/9717e7?affiliate=f8os" class="product-button">Buy Now</a>
    `;

    productContainer.appendChild(productCard);
  });
});



let startX = 0;
let isDragging = false;

function scrollProducts(direction) {
  const container = document.querySelector('.product-container');
  const scrollAmount = window.innerWidth < 768 ? 150 : 300;

  // Smoothly scroll the container in the desired direction
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth',
  });

  // Pause the animation
  const wrapper = document.querySelector('.product-wrapper');
  wrapper.style.animation = 'none'; // Stop auto-scroll animation
}

// Add touch event listeners for swipe functionality
const container = document.querySelector('.product-container');

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;

  // Pause animation when touch starts
  const wrapper = document.querySelector('.product-wrapper');
  wrapper.style.animation = 'none';
});

container.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const difference = currentX - startX;

  // Scroll the container horizontally based on swipe direction
  container.scrollBy({
    left: -difference,
    behavior: 'auto', // Disable smooth behavior for responsive feel during swipe
  });

  startX = currentX; // Update start position
});

container.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("autoplay-video");

  // Play video with sound on page load
  video.play()
    .then(() => {
      console.log("Video is playing with sound.");
    })
    .catch((error) => {
      console.error("Autoplay failed:", error);
    });
});
