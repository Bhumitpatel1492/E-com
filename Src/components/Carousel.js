import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import { CarouselData } from '../Data/Carouseldata';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import colors from '../Utils/Colours';



const sliderWidth = Dimensions.get('screen').width;
const CarouselComponent = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    const carouselRef = useRef();

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.imgstyle} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={CarouselData}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={500}
                onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={CarouselData.length}
                activeDotIndex={activeSlide}
                containerStyle={{ position: 'absolute', bottom: 0, left: '15%' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,

                }}
                inactiveDotStyle={{
                    width: 15, height: 15, borderRadius: 10
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                dotColor="green"
                inactiveDotColor="#FFFFFF"
            />
        </View>
    );
};

export default CarouselComponent;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    slide: {

    },
    imgstyle: {
        height: 250,
        width: '100%'
    }
});

