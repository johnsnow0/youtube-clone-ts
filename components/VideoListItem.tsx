import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

type VideoListItemsProps = {
    video: {
        createdAt: string,
        id: number,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        user: {
            name: string,
            image?: string,
        }
    }
}

const VideoListItem = (props: VideoListItemsProps) => {
    const {video } = props;
    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;

    let viewString = video.views.toString();
    if (video.views > 1_000_000) {
        viewString = (video.views / 1_000_000).toFixed(1) + 'm'
    } else if (video.views > 1_000) {
        viewString = (video.views / 1_000).toFixed(1) + 'k'
    }
    
  return (
    <View>
    <View>
        <View>
            <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
            </View>
        </View>
        <View className='flex-row p-2'>
            <Image style={styles.avatar} source={{ uri: video.user.image }} />
            <View className='flex-1' style={styles.midContainer}>
                <Text className='pl-2' style={styles.title}>{video.title}</Text>
                <Text style={styles.subtitle}>{video.user.name}{viewString} {video.createdAt}</Text>
            </View>
            <Entypo name='dots-three-vertical' size={24} color='white'/>
        </View>
    </View>
</View>
  )
}

export default VideoListItem

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        aspectRatio: 16 / 9
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    time: {
        color: 'white'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    titleRow: {

    },
    midContainer: {

    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    subtitle: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500'
    }
})