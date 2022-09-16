import React from "react";
import {Image, Text,TouchableOpacity,View} from 'react-native';
import styles from "./styles";


export default function Profile({route}) {
    const {item} = route.params;
        console.log(item);
              return (
                <TouchableOpacity onPress={() =>({ item: item })}>
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
        );
    }