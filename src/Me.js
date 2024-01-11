import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,Image } from "react-native";
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { Image } from "react-native";
import QRCode from 'react-native-qrcode-svg';
// import QRCode from 'react-native-qrcode';
// import QRCodeScanner from 'react-native-qrcode-scanner';

GoogleSignin.configure({
    webClientId: "1027321405185-d0lroacnf987k10fiv548tjh9gpv1sr1.apps.googleusercontent.com",
});

const Me = ({ profile, setUser, setProfile, users }) => {
    const [photo, setPhoto] = React.useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const [email, setEmail] = useState("");
    // const [qrdata, setQrdata] = useState("");
    
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                const displayName = user.displayName ?? "Guest";
                // const em = user.email;
                const photoURL = user.photoURL ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
                setEmail(user.email)
                setProfile(photoURL);
                setUser(displayName);
                // const url = email + "&&" + users
                // const uri = QRCodeScanner.generate(url);
                // setQrdata(uri)
            } else {
                console.log("User not signed in");
            }
        });

        return () => unsubscribe(); // Cleanup subscription on component unmount
    }, [setUser, setProfile]);

    async function handleGoogleButtonPress() {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log("error", error);
        }
    }
    // console.log(users)
 

    return (
        <>
            <View style={styles.screen}>
                <View style={{ backgroundColor: "rgb(156, 182, 195)", marginBottom: 20, borderRadius: 10 }} >
                    <Text style={{ color: "black", fontSize: 20, padding: 10 }}> Visitor </Text>
                </View>
                <Image source={{ uri: profile }} style={styles.profile} />
                <Text style={styles.title}>{users}</Text>
                <Text style={styles.titleEmail}> {email}</Text>
                {users.length > 0 ? null : (
                    <GoogleSigninButton onPress={handleGoogleButtonPress} />
                )}
                {users === "Guest" ? (
                    <>
                        <GoogleSigninButton onPress={handleGoogleButtonPress} />

                    </>

                ) : null}


                    {users != "Guest" ? (
                    <>
                        <View style={{
                            borderWidth: 1,
                            borderBlockColor: "black",
                            padding: 15,
                            borderRadius: 10
                        }}>

                            {/* <Image source={{ qrdata }} style={{ width: 256, height: 256 }} /> */}
                            <QRCode
                                value={email + "&&" + users}
                                // logoSize={80}
                                size={250}
                                logoBorderRadius={20}
                               
                            />
                        </View>
                    </>

                    ) : null}

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 25,
        // marginBottom: 30,
        color: "black",
        margin: 15
    },
    titleEmail: {
        fontSize: 20,
        // marginBottom: 30,
        color: "black",
        marginBottom: 50
    },
    profile: {
        height: 150,
        width: 150,
        borderRadius: 20,
        // marginBottom: 20,
    }
});

export default Me;
