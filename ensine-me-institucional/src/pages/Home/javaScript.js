import React, { useEffect } from "react";

const Code = () => {
    useEffect(() => {
        const swiper = new swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiperPagination',
                type: 'bullets',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3
                }
            }
        });

        const targetElement = document.getElementById('video-como-funciona');
        function playVideo() {
            const targetPosition = targetElement.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;
            if (targetPosition < viewportHeight) {
                targetElement.play();
                window.removeEventListener('scroll', playVideo);
            }
        }
        window.addEventListener('scroll', playVideo);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', playVideo);
        };
    }, []);

    return (
        <div>
            {/* Component JSX */}
        </div>
    );
} 

export default Code;