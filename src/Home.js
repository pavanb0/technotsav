import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const App = () => {
    const images = [
        require('./assets/im1.jpg'),
        require('./assets/im2.jpg'),
        require('./assets/im3.jpg'),
        require('./assets/im4.jpg'),
        require('./assets/im5.jpg'),
        require('./assets/im7.jpg'),
        require('./assets/im8.jpg')
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={styles.carouselItem}>
                <Image source={item} style={styles.carouselImage} />
            </View>
        );
    };

    return (
        <>
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                <Carousel
                    data={images}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width - 40}
                    layout={'default'}
                    loop
                    autoplay
                    autoplayInterval={3000}
                />
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Background color of the container
    },
    carouselItem: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff', // Background color of each carousel item
        elevation: 5, // Shadow depth
    },
    carouselImage: {
        width: '100%',
        height: 200,
        borderRadius: 10, // Border radius for the image
    },
});

export default App;
