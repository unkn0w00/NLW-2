import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveCLassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
            resizeMode="contain" 
            source={giveCLassesBgImage} 
            style={styles.content} 
            >
                <Text style={styles.title}> Quer ser um Proffy? </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como um professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses