// Toggle menu visibility
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');

  // Show menu
  openMenu.addEventListener('click', () => {
    navLinks.style.right = "0";
  });

  // Hide menu
  closeMenu.addEventListener('click', () => {
    navLinks.style.right = "-200px";
  });
});






  




    // Group each image and card into a pair for better alignment

    document.addEventListener('DOMContentLoaded', function() {
        const categories = document.querySelector('.cbc-categories');
        if (!categories) return;
        const children = Array.from(categories.children);
        const pairs = [];
        for (let i = 0; i < children.length; i += 2) {
            const pairDiv = document.createElement('div');
            pairDiv.className = 'cbc-pair';
            if (children[i]) pairDiv.appendChild(children[i]);
            if (children[i+1]) pairDiv.appendChild(children[i+1]);
            pairs.push(pairDiv);
        }
        categories.innerHTML = '';
        pairs.forEach(pair => categories.appendChild(pair));
    });


//Revie Images
      window.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.slide-in-left').style.opacity = '1';
            document.querySelector('.slide-in-right').style.opacity = '1';
        });