var bigParent = '';
var child = '';
addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 0,
        slidesPerView: "auto",
        centeredSlides: true,
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
        },
        on: {
            click: function () {
                // Thực hiện các xử lý khác khi slide thay đổi
                if (bigParent) {
                    // var parent = document.getElementById(elVideo);
                    // const childImages = parent.querySelectorAll('video');
                    // childImages.forEach(function(anchor) {
                    //     anchor.remove();
                    //   });
                    var parent = document.getElementById(bigParent);

                    while (parent.firstChild) {
                        parent.removeChild(parent.firstChild);
                    }
                    // // NEW HTML
                    var newDiv = document.createElement('div');
                    newDiv.className = 'lg:hidden'; // Thêm class cho thẻ div mới
                    var img = document.createElement('img');
                    img.src = './assets/images/product.png'; // Đường dẫn tới ảnh của bạn
                    img.alt = "product"
                    img.className = "img-product"
                    newDiv.appendChild(img);
                    parent.appendChild(newDiv);
                    /***/

                    var nestedDiv1 = document.createElement('div');
                    nestedDiv1.className = 'hidden lg:block'; // Thêm class cho thẻ div mới
                    var img1 = document.createElement('img');
                    img1.src = './assets/images/product-pc.png'; // Đường dẫn tới ảnh của bạn
                    img1.alt = "product"
                    img1.className = "img-product"
                    nestedDiv1.appendChild(img1)
                    parent.appendChild(nestedDiv1);

                    /***/

                    var button = document.createElement('button');
                    button.className = "btn-play z-10"
                    button.id = bigParent
                    // Tạo thẻ img và đặt src (link tới ảnh của bạn)
                    var imgBt = document.createElement('img');
                    imgBt.src = './assets/images/play.svg'; // Đường dẫn tới ảnh của bạn
                    imgBt.alt = "play"
                    // Thêm thẻ img vào thẻ button
                    button.appendChild(imgBt);
                    // button.onclick = "loadVideo('WfdcLWjNwD8?si=xgS7wJY8aLlH2GeI', bigParent)";
                    // button.onclick = loadVideo('WfdcLWjNwD8?si=xgS7wJY8aLlH2GeI', bigParent)
                    // button.onclick = loadVideo('WfdcLWjNwD8?si=xgS7wJY8aLlH2GeI', 'bigParent')
                    button.onclick = function () {
                        // console.log('button was clicked: ', button.id);
                        loadVideo('WfdcLWjNwD8?si=xgS7wJY8aLlH2GeI', button.id)
                    };
                    // button.addEventListener('click', () => {
                    //     loadVideo('WfdcLWjNwD8?si=xgS7wJY8aLlH2GeI', bigParent)
                    //     console.log('button was clicked: ', bigParent);
                    //   })
                    parent.appendChild(button);

                    /***/
                    var nestedDiv2 = document.createElement('div');
                    nestedDiv2.id = 'video-container-' + bigParent;
                    nestedDiv2.className = 'video-frame video-frame--product'
                    parent.appendChild(nestedDiv2);
                    bigParent = '';
                }
            }
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
        const offset = -90; // Set your desired offset
        const offsetPosition = targetSection.offsetTop + offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        const isUnder1024 = window.innerWidth < 1024;
        if (isUnder1024) {
            sidebar.style.right = '-100%';
            backdrop.style.display = 'none';
        }
    }

    // Attach click event listeners to navigation links
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    document.getElementById('scrollButton').addEventListener('click', function () {
        console.log('vao')
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });


});

function loadVideo(videoId, containerId) {
    // Hide thumbnail
    // document.getElementById(containerId).style.display = 'none';

    // Create and append iframe

    const video = document.createElement('video');
    video.style.width = '100%'; // Set width to 100%
    video.style.height = '100%';
    video.autoplay = true;
    video.controls = true; // Show controls (play, pause, etc.)
    video.src = "./assets/video/test.mp4";


    // const iframe = document.createElement('iframe');
    // iframe.width = '100%';
    // iframe.height = '100%';
    // iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    // iframe.frameborder = '0';
    // iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    // iframe.allowfullscreen = true;
    bigParent = containerId;
    var elVideo = 'video-container-' + containerId;

    const parentDiv = document.getElementById(containerId);
    console.log("parentDiv: ", parentDiv)
    const childImages = parentDiv.getElementsByTagName('img');

    for (let i = 0; i < childImages.length; i++) {
        child = childImages[i];
        childImages[i].style.opacity = '0';
    }

    document.getElementById(elVideo).style.zIndex = 20;
    document.getElementById(elVideo).appendChild(video);
}

function loadVideo2(videoId, containerId) {
    // Hide thumbnail
    // document.getElementById(containerId).style.display = 'none';

    // Create and append iframe

    const video = document.createElement('video');
    video.style.width = '100%'; // Set width to 100%
    video.style.height = '100%';
    video.autoplay = true;
    video.controls = true; // Show controls (play, pause, etc.)
    video.src = "./assets/video/test.mp4";


    // const iframe = document.createElement('iframe');
    // iframe.width = '100%';
    // iframe.height = '100%';
    // iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    // iframe.frameborder = '0';
    // iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    // iframe.allowfullscreen = true;
    var elVideo = 'video-container-' + containerId;

    const parentDiv = document.getElementById(containerId);
    console.log("parentDiv: ", parentDiv)
    const childImages = parentDiv.getElementsByTagName('img');

    for (let i = 0; i < childImages.length; i++) {
        child = childImages[i];
        childImages[i].style.opacity = '0';
    }

    document.getElementById(elVideo).style.zIndex = 20;
    document.getElementById(elVideo).appendChild(video);
}

