document.addEventListener('DOMContentLoaded', () => {
    
    // ============================
    // 1. 圖片輪播功能 (首頁)
    // ============================
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (slide && images.length > 0) {
        let counter = 0;
        const size = images[0].clientWidth;

        // 點擊下一張
        nextBtn.addEventListener('click', () => {
            if (counter >= images.length - 1) return;
            counter++;
            slide.style.transition = "transform 0.5s ease-in-out";
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        // 點擊上一張
        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            counter--;
            slide.style.transition = "transform 0.5s ease-in-out";
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });
    }

    // ============================
    // 2. 彈出優惠訊息 (首頁)
    // ============================
    const promoBtn = document.getElementById('promoBtn');
    const modal = document.getElementById('promoModal');
    const closeBtn = document.querySelector('.close-btn');

    if (promoBtn && modal && closeBtn) {
        // 點擊按鈕開啟視窗
        promoBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        // 點擊 X 關閉視窗
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // 點擊視窗外部也能關閉
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // ============================
    // 3. 聯絡表單提交 (聯絡我們)
    // ============================
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 阻止表單預設跳轉行為
            formResponse.textContent = "感謝您的訊息！我們會盡快與您聯繫。";
            contactForm.reset(); // 清空表單
            
            // 3秒後清除訊息
            setTimeout(() => {
                formResponse.textContent = "";
            }, 3000);
        });
    }
});