addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 0,
        slidesPerView: "auto",
        centeredSlides:true,
        roundLengths: true,
        autoHeight: true,
        loop: true,
        loopAdditionalSlides: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                var bulletText = ['STUDIO', '1PN', '1PN+1', '2PN', '2PN+1', '3PN'];
                return '<span class="' + className + '">' + bulletText[index] + '</span>';
              },
          }
      });
      

      const sidebar = document.getElementById('sidebar');
      const toggleBtn = document.getElementById('menu');
      const backdrop = document.getElementById('backdrop');
  
      toggleBtn.addEventListener('click', function () {
          const isOpen = sidebar.style.right === '0px';
          sidebar.style.right = isOpen ? '-100%' : '0';
          backdrop.style.display = isOpen ? 'none' : 'block';
      });
  
      backdrop.addEventListener('click', function () {
          sidebar.style.right = '-100%';
          backdrop.style.display = 'none';
      });

      function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        const offset = (window.innerHeight - targetSection.offsetHeight) / 2; // Set your desired offset
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
        const isUnder1024 = window.innerWidth < 1024;
        if(isUnder1024){
            sidebar.style.right = '-100%';
            backdrop.style.display = 'none';
        }
        }

        // Attach click event listeners to navigation links
        document.querySelectorAll('.a-scroll').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId)
            });
        });

        const scrollTop = document.getElementById('scrollTop');
        const scrollTopWrap = document.getElementById('scrollTopWrap');
        const header = document.getElementById('header');
        
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopWrap.style.right = '22px';
                header.classList.add('header-fixed');
            } else {
                scrollTopWrap.style.right = '-100%';
                header.classList.remove('header-fixed');
            }
        };
      
        scrollTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
});