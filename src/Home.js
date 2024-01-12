import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
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
    const nmflogo = require('./assets/nirmalalogo.png')
    const renderItem = ({ item }) => {
        return (
            <View style={styles.carouselItem}>
                <Image source={item} style={styles.carouselImage} />
            </View>
        );
    };

    return (
        <ScrollView>
            <View style={{backgroundColor:"#393e46"}} >
                <View style={styles.carousel}>

                    {/* <View> */}
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

                    <View style={styles.middle}>
                        <TouchableOpacity style={styles.middleOpacity}>
                            <Text style={{ color: "#00adb5", fontSize: 25, padding: 10, }} > About Nmfc </Text>
                            <Text style={{ color: "#ffe4c4", fontSize: 15, padding: 10, flexWrap: "wrap" }} >
                                Nirmala College of Commerce and Science is a reputed institution that offers quality education in various fields such as management, computer science, information technology, accountancy, finance, mass media, and communication. The college is affiliated with the University of Mumbai and has been accredited by NAAC with a B++ grade. The college has a dedicated faculty, a well-equipped infrastructure, and a vibrant campus life. The college also provides placement and internship opportunities to its students through its association with leading companies. Nirmala College of Commerce and Science is a place where students can learn, grow, and achieve their academic and professional goals.
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.middleOpacity}>
                            <Text style={{ color: "#00adb5", fontSize: 25, padding: 10, }} > What is Technotsav? </Text>
                            <Text style={{ color: "#ffe4c4", fontSize: 15, padding: 10, flexWrap: "wrap" }} >
                                Technotsav is a technical fest organized by the department of B.Sc. CS and B.Sc. IT at Nirmala College of Commerce and Science. It is a platform for students to showcase their skills and creativity in various technological domains. Technotsav has been running successfully for seven years and this is its eighth edition. It features various games and competitions such as coding war, reel making, e-waste recycling, and more. Technotsav is a fun and exciting event that celebrates the spirit of innovation and learning                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.middleOpacity}>
                            <Text style={{ color: "#00adb5", fontSize: 25, padding: 10 }} > Contacts </Text>
                            <Text style={{ color: "#ffe4c4", fontSize: 15, padding: 10, flexWrap: "wrap" }} >
                            Pavan : 9653626784 {'\n'} Om     : 9372583331 {'\n'} Varad : 9004782553

                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.logoWrapper}>
                        <Image source={nmflogo} style={styles.nmflogo} />
                        <Text style={{ color: "#00adb5", flexWrap: 'wrap', fontSize: 25 }} >Technotsav 2024</Text>
                    </View>
                    <View >
                        <Text style={{ color: "#00adb5", padding: 10, fontSize: 18 }}>Check out our social media handles</Text>
                        <View style={styles.social}>
                            <TouchableOpacity>

                                <AntDesign name="instagram" size={50} color="#ffe4c4" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="linkedin-square" size={50} color="#ffe4c4" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="twitter" size={50} color="#ffe4c4" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="youtube" size={50} color="#ffe4c4" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="facebook-square" size={50} color="#ffe4c4" />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    middle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: "center"

    },
    middleOpacityIcon: {
        // padding:7
    },
    middleOpacity: {
        width: "90%",
        // height: 60,
        backgroundColor: "#222831",
        margin: 8,
        // shadowColor: "#555555",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"


    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Background color of the container
    },
    social: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-between"
    },
    carousel: {
        marginTop: 10,

    },
    logoWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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
    nmflogo: {
        resizeMode: 'contain',
        width: 150,
        height: 75,
        marginTop: 10
    }
});

export default App;
