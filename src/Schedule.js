import React from 'react';
import { ScrollView, View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';



const data = [
    {
        id: '1',
        header: 'Battle of Games',
        image: require('./assets/BattleOfGames.jpg'),
        text: 'Battle of games is a game where you have to compete with other teams in various mini-games that test your skills, knowledge, and speed. You have to choose from different categories such as trivia, puzzles, word games, arcade games, etc. and try to score the most points in each round. You also have to face some challenges and surprises along the way. It is a fun and exciting game that lets you enjoy a variety of games and challenges. Are you ready to play battle of games in the event technotsav?',
    },
    {
        id: '2',
        header: 'Blind Scripting',
        image: require('./assets/BlindScripting.jpg'),
        text: 'Blind scripting is a game where you have to write a code in a programming language without seeing the output or the errors. You have to rely on your logic, syntax, and memory to create a working code. It is a fun and challenging game that tests your coding skills and knowledge. Are you interested in playing blind scripting in the event technotsav?',
    },
    {
        id: '3',
        header: 'Skit on Cyber Awareness',
        image: require('./assets/CyberSkit.jpg'),
        text: 'Skit on cyber security is a game where you have to perform a short play on a topic related to cyber security. You have to use your creativity, humor, and awareness to create a skit that educates and entertains the audience. You can choose from various themes such as phishing, ransomware, password protection, social engineering, etc. It is a fun and interactive game that helps you learn more about cyber security and its importance. Are you interested in playing skit on cyber security in the event technotsav?',
    },
    {
        id: '4',
        header: 'ReeloTech',
        image: require('./assets/Reelathon.jpg'),
        text: 'Reelothech is a game where you have to create short videos or reels on a given topic or theme. You have to use your camera, editing skills, and creativity to make a reel that is engaging and entertaining. You can choose from various genres such as comedy, horror, drama, action, etc. It is a fun and expressive game that lets you showcase your talent and personality. Are you interested in playing reelothech in the event technotsav?',
    },
    {
        id: '5',
        header: 'Math Enigma',
        image: require('./assets/MathEnigma.jpg'),
        text: 'Math Enigma is a game where you have to solve a series of mathematical puzzles and riddles. You have to use your logic, reasoning, and arithmetic skills to crack the codes and find the hidden messages. You can choose from various levels of difficulty and topics such as algebra, geometry, calculus, etc. It is a fun and stimulating game that challenges your mind and improves your math skills. Are you interested in playing math enigma in the event technotsav?',
    },
    {
        id: '6',
        header: 'Cyber War',
        image: require('./assets/CyberWar.jpg'),
        text: 'Cyber War is a game where you have to compete with other teams in various cyber security tasks and challenges. You have to use your hacking skills, tools, and knowledge to attack and defend different systems and networks. You can choose from various categories such as cryptography, forensics, web exploitation, reverse engineering, etc. It is a fun and competitive game that tests your cyber security skills and knowledge. Are you interested in playing cyber war in the event technotsav?',
    },
    {
        id: '7',
        header: 'Steganography Challenge',
        image: require('./assets/SteganographyChallenge.jpg'),
        text: 'Steganography Challenge is a game where you have to hide and reveal secret messages or data in different types of media, such as images, audio, video, text, etc. You have to use various techniques and methods of steganography, such as LSB, DCT, FFT, etc. to embed and extract the hidden information. You also have to avoid detection and analysis by other teams or tools. It is a fun and intriguing game that challenges your steganography skills and knowledge. Are you interested in playing steganography challenge in the event technotsav?',
    },
    {
        id: '8',
        header: 'Web Designing',
        image: require('./assets/WebDesign.jpg'),
        text: 'Web Designing Challenge is a game where you have to design and develop a website on a given topic or theme. You have to use your creativity, coding skills, and web development tools to create a website that is attractive, functional, and user-friendly. You can choose from various technologies and frameworks, such as HTML, CSS, JavaScript, Bootstrap, React, etc. to build your website. You also have to follow the web design principles and standards, such as responsiveness, accessibility, usability, etc. It is a fun and creative game that showcases your web designing skills and knowledge. Are you interested in playing web designing challenge in the event technotsav?',
    },
    {
        id: '9',
        header: 'Model Making',
        image: require('./assets/ModelMaking.jpg'),
        text: 'Model Making Challenge is a game where you have to create a physical or digital model of a given concept or idea. You have to use your imagination, innovation, and engineering skills to create a model that is realistic, feasible, and original. You can choose from various materials and tools, such as paper, cardboard, clay, wood, metal, plastic, etc. to make your physical model, or use various software and applications, such as SketchUp, Blender, AutoCAD, etc. to make your digital model. You also have to explain the purpose and functionality of your model to the judges and the audience. It is a fun and constructive game that demonstrates your model making skills and knowledge. Are you interested in playing model making challenge in the event technotsav?',
    },


];

const Schedule = () => {
    const renderItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.image} />
            <ScrollView style={{height:100}}>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardHeader}>{item.header}</Text>
                    <Text style={styles.cardText} >{item.text}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#00adb5',padding:10 }}>
                           <Text style={styles.cardText} >
                           Register
                            </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#00adb5',padding:10 }}>
                        <Text style={styles.cardText} >
                        Show pass
                        </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.headerText}>Event's and Registration</Text> */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                // snapToOffsets={[0, 10, 20]} // Adjust the offsets as needed
                decelerationRate="fast"
            // pagingEnabled
            // showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#393e46"
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#00adb5"
    },
    cardContainer: {
        flexDirection: 'column',
        width: 300,
        justifyContent: "flex-start",
        marginRight: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#222831',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    cardTextContainer: {
        padding: 10,
    },
    cardHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#00adb5'
    },
    cardText: {
        color: '#ffe4c4',
        fontSize: 17
    }
});

export default Schedule;
