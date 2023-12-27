import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import  { Navigation } from 'swiper/modules'
import cardlogo from '../../../assets/icons/business-insider.svg';
import Card from './Card';
import cardicon from '../../../assets/icons/business-insider.svg'
import cardiconcross from '../../../assets/icons/business-insider.svg'
import cardiconcontext from '../../../assets/icons/business-insider.svg'
import cardiconcom from '../../../assets/icons/business-insider.svg'
import "../../../styles/CardSwipper/CardSwipper.scss"

SwiperCore.use([Navigation]);

const CardSlider = () => {
    const cards = [
        { id: 1, icon: cardicon, title: 'Cookieless', image: cardlogo, description: 'Teads offers the most advanced cookieless targeting in the industry allowing you to have 60% more reach as compared to cookie-based campaigns.' },
        { id: 1, icon: cardiconcross, title: 'Cross Screen', image: cardlogo, description: 'Teads offers the most advanced cookieless targeting in the industry allowing you to have 60% more reach as compared to cookie-based campaigns.' },
        { id: 1, icon: cardiconcontext, title: 'Contextual', image: cardlogo, description: 'Teads offers the most advanced cookieless targeting in the industry allowing you to have 60% more reach as compared to cookie-based campaigns.' },
        { id: 1, icon: cardiconcom, title: 'Commerce', image: cardlogo, description: 'Teads offers the most advanced cookieless targeting in the industry allowing you to have 60% more reach as compared to cookie-based campaigns.' },
        { id: 1, icon: cardicon, title: 'Cookieless', image: cardlogo, description: 'Teads offers the most advanced cookieless targeting in the industry allowing you to have 60% more reach as compared to cookie-based campaigns.' },
        // ... (other card objects)
    ];

    return (
        <div className='data-driven-reach'>
            <h2>Data Driven Reach</h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                className="myySwiper"

            >

                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <Card icon={card.icon} title={card.title} imageUrl={card.image} description={card.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;

