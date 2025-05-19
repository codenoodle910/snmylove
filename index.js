const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");

const texts = [
  "Chúc Thanh Tâm sinh nhật đón tuổi 14  vui vẻ  🥳🔥",
  "Chúc e tuổi mới có thể vui vẻ mong rằng cô gái của a không phải chịu những điều tích cực, luôn tích cực, mạnh mẽ như cô gái hàng ngày nhắn tin với a, đạt được những thành công trong học tập cũng, xinh sẵn nên chắc cũng thừa =))) 😎✨",
  "Có thể rằng thời gian ta quen chưa đủ dài nhưng dù gì cũng đã có cơ hội gặp nhau nên a cũng muốn mình có thể trở thành 1 điều gì đấy trong cuộc đời e. Đối với a , e là người tuyệt vời nhất .Tuổi mới mong rằng ta có thể đồng hành cùng nhau hơn 🎁🎉"
];

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    setTimeout(() => {
        message.style.display = 'block';
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40); // Tốc độ gõ
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 2000); // Đợi 2 giây rồi chuyển quan đoạn khác
        }
    } else {
        // Thêm gif
        setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift-center');
        message.appendChild(imgGift);
	const imgGiftRight = document.createElement('div');
        imgGiftRight.classList.add('img-gift-right');
        document.body.appendChild(imgGiftRight); 
        }, 1500);
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);
});
