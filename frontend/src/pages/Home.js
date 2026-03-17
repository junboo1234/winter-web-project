import React, { useState, useEffect } from 'react';
const SLIDE_ITEMS = [
    { id: 1, title: "오늘 하루 기분이 어떠신가요?", sub: "당신의 기분에 맞춘 음악을 추천합니다.", color: "#6c5ce7" },
    { id: 2, title: "지친 당신을 위한 위로", sub: "음악이 당신의 마음을 안아줄 거예요.", color: "#a29bfe" },
    { id: 3, title: "새로운 음악 탐색", sub: "지금 당신의 감정에 어울리는 곡을 찾아보세요.", color: "#fab1a0" },
    { id: 4, title: "새로운 음악 탐색1", sub: "지금 당신의 감정에 어울리는 곡을 찾아보세요1.", color: "#000000" }
];

function Home() { 
    const [currentIndex, setCurrentIndex] = useState(0);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDE_ITEMS.length);
        
        }, 3000);
        return () => clearTimeout(timer); 
    }, [currentIndex]);

    return (
        <div className="home-container">
            {/* 4. 긴 기차 부분: currentIndex에 따라 왼쪽으로 밀립니다 */}
            <div 
                className="slide-wrapper" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {SLIDE_ITEMS.map((item) => (
                    <div key={item.id} className="slide-item" style={{ backgroundColor: item.color }}>
                        <section className="start-section">
                            <h1>{item.title}</h1>
                            <p>{item.sub}</p>
                            <button className="start-button">지금 기록하기</button>
                        </section>
                    </div>
                ))}
            </div>

            {/* 5. 아래쪽 점(인디케이터) 표시 */}
            <div className="slide-dots">
                {SLIDE_ITEMS.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(index);
                        }}                    
                    ></span>
                ))}
            </div>
        </div>
    );


}

export default Home;