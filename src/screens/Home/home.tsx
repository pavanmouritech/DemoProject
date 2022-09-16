import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { callAlbum, selectAlbumInfo } from '../../redux/slice';
import styles from './styles';

const Album = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const { isLoading, album, albumResponseError} = useAppSelector(selectAlbumInfo);
    console.log(albumResponseError);
    useEffect(() => {
        dispatch(callAlbum());
    }, [dispatch]);
    return isLoading ?
        (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00ff" />
            </View>

        )
        : albumResponseError ? (<View style={styles.container}>
            <Text style={styles.errorText}>{albumResponseError.error}</Text>
        </View>) :
            (
                <>
                    <FlatList
                        data={album}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({ item }) => {
                                return (
                            <TouchableOpacity onPress={()=>navigation.navigate('Profile',({ item: item }))}>
                                <View style={styles.AlbumContainer}>
                                    <View style={{flexDirection: 'row'}}>
                                            <Image style={styles.image}
                                                    source={{
                                                        uri: item.image,
                                                    }}
                                            />
                                    <Text style={styles.title1}>
                                            {item.title}
                                    </Text>
                                    </View>       
                                        <TouchableOpacity onPress={() => ('')}style={styles.price}>
                                                <Text>{item.price}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() =>('')}style={styles.category}>
                                                <Text>{item.category}</Text>
                                        </TouchableOpacity>
                                </View> 
                            </TouchableOpacity>
                     )
                }}
            />
        </>
    );
}

export default Album;