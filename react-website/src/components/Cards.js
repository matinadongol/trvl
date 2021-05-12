import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        key='1'
                        src="images/img-1.jpg"
                        text="Go trekking to the himalayas "
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        key='2'
                        src="images/img-2.jpg"
                        text="Travel through the islands of Bali "
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        key='3'
                        src="images/img-6.jpg"
                        text="Paris' monument-lined boulevards, museums, classical bistros "
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        key='4'
                        src="images/img-5.jpg"
                        text=" Summer Staycation Cruises Summer Staycation Cruises"
                        label='Luxury'
                        path='/services'
                        />
                        <CardItem
                        key='5' 
                        src="images/img-3.jpg"
                        text="Explore the deep ocean Explore the deep ocean "
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
