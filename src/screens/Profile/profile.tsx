import React from "react";
import {Image, Text,TouchableOpacity,View} from 'react-native';
import styles from "./styles";


export default function Profile({route}) {
    const {item} = route.params;
        console.log(item);
              return (
                  <TouchableOpacity onPress={() =>({ item: item })}>
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
  }