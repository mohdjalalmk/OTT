import React, { useEffect, useState} from 'react'
import { Pressable, Image,StyleSheet ,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getPosterImage } from '../services/moviePicture';

const MovieTile= ({ posterUrl,movieNmae }) => {
    const onMoviePress = () => {
        // navigation to next screen
        // navigation.navigate('MovieDetailsScreen', { id: movie.id })
    }

    return (
        <Pressable style={styles.tile}onPress={onMoviePress}>
            <Image style={styles.image} source={getPosterImage(posterUrl)} testID="movie-tile-image"/>
            <Text style={styles.movieName} numberOfLines={1} >{movieNmae}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    tile: {
        flex:1,
        marginBottom:25,
        // width:'33%'
    },
    image: {
        width: 110,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
        // margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    movieName:{
        color:'#fff',
        marginTop:10
        // marginLeft:5
    }
});

export default MovieTile