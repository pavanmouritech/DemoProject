import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { callAlbum, selectAlbumInfo } from '../../List/slice';
import styles from './styles';

const Album = ({navigation}) => {

    const AlbumSchema = {
        name: "album",
        properties: {
          id: "int",
          title: "string",
          url: "string",
        },
        primaryKey: "id",
      };

    const dispatch = useAppDispatch();
    const { isLoading, album, albumResponseError } = useAppSelector(selectAlbumInfo);
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
            <Text style={styles.errorText}>{albumResponseError}</Text>
        </View>) :
            (
                <>
                    <FlatList
                        data={album}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() =>navigation.navigate('Profile',{ item: item })}>
                                        <View style={styles.AlbumContainer}>
                                            <Text style={styles.id1}>
                                              {item.id}</Text>
                                            <Text style={styles.title1}>
                                              {item.title}</Text>    
                                             <Image style={styles.image}
                                                    source={{
                                                        uri: item.url,
                                                      }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                    />
                </>
            );
}

export default Album;