document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const container = document.getElementById('container');
    const ramaText = document.getElementById('ramaText');

    loveButton.addEventListener('click', () => {
        // 1. تغيير الخلفية إلى وردية
        document.body.style.backgroundColor = '#ffc0cb'; // لون وردي فاتح

        // 2. إخفاء الزر
        loveButton.style.opacity = '0';
        loveButton.style.pointerEvents = 'none'; // تعطيل التفاعل مع الزر بعد إخفائه

        // 3. إظهار اسم Rama
        setTimeout(() => {
            ramaText.classList.add('show');
        }, 500); // تأخير بسيط قبل ظهور الاسم

        // 4. تساقط القلوب
        let heartCount = 0;
        const maxHearts = 50; // عدد القلوب التي ستتساقط

        const createHeart = () => {
            if (heartCount < maxHearts) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤️'; // رمز القلب

                // تحديد موقع عشوائي للقلب في الأعلى
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // مدة سقوط عشوائية (3-5 ثواني)
                heart.style.animationDelay = (Math.random() * 0.5) + 's'; // تأخير عشوائي لبدء السقوط

                document.body.appendChild(heart);

                // إزالة القلب بعد انتهاء حركته لتجنب تراكم العناصر في DOM
                heart.addEventListener('animationend', () => {
                    heart.remove();
                });

                heartCount++;
            } else {
                clearInterval(heartInterval); // إيقاف إنشاء القلوب بعد الوصول للعدد الأقصى
            }
        };

        const heartInterval = setInterval(createHeart, 200); // إنشاء قلب كل 200 مللي ثانية
    });
});
