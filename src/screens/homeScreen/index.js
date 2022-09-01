import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import RewardPickup from '../../components/rewardPickup/RewardPickup'
import styles from './style'
const HomeScreen = () => {
    const ProductsIno = [
        {
          id: "1",
          title: "Iced Drinks",
          subTitle:"Iced Coffees, Teas, Espresso and more",
          img: "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
          price: "2,000",
          category: "Hottest",
          packConatains: [
            "Red Quinoa, ",
            "Lime, ",
            "Honey, ",
            "Blueberries, ",
            "Strawberries, ",
            "Mango, ",
            "Fresh mint",
          ],
        },
        {
          id: "2",
          title: "Hot Coffee Drinks",
          subTitle:"Coffees, Teas, Espresso & Lattes and more",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
          price: "8,000",
          category: "Hottest",
          packConatains: [
            "Red Quinoa, ",
            "Lime, ",
            "Honey, ",
            "Blueberries, ",
            "Strawberries, ",
            "Mango, ",
            "Fresh mint",
          ],
        },
        {
          id: "3",
      
          title: "Hot Teas",
          subTitle:"Ginger Tea, Peppermint Tea, Sage Tea and more",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
          price: "8,000",
        },
        {
          id: "4",
      
          title: "Berry mango combo",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
          price: "8,000",
        },
        {
          id: "5",
          title: "Honey lime combo",
          img: "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
          price: "2,000",
        },
        {
          id: "6",
          title: "Honey lime combo",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
          price: "8,000",
        },
        {
          id: "7",
          title: "Honey lime combo",
          img: "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
          price: "2,000",
        },
        {
          id: "8",
          title: "Honey lime combo",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
          price: "8,000",
        },
        {
          id: 9,
          title: "Honey lime combo",
          img: "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
          price: "2,000",
        },]
  return (
    <View>
     <View style={{height:314}}>
        <Image style={{position:'relative'}} source={require("../../../assets/img/homeBanner.png")} />
        <View style={{position:'absolute'}}>
         <RewardPickup />
        </View>
     </View>

    <View style={{padding:40, backgroundColor:"#161616", borderRadius:40, marginTop:-40 }}>

        <FlatList 
            data={ProductsIno}
            renderItem={({item})=>(
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{height:70, width:70, borderRadius:35}} source={{
                      uri: item.img,
                }}/>
                    <View style={{marginLeft:30}}>
                      <Text style={{color:"#fff"}}>{item.title}</Text>
                      <Text style={{color:"#A29E9F"}}>{item.subTitle}</Text>
                    </View>
              </View>
                // console.log(item.title)
            )
        }

        // horizontal={true}
        showsHorizontalScrollIndicator={true}

        ItemSeparatorComponent={
          Platform.OS == 'android' &&
          (({ highlighted }) => (
            <View
              style={[
                styles.separator,
                highlighted && { marginLeft: 0 }
              ]}
            />
          ))
        }
        />  
        {/* End The Flatlist */}
       
    </View>

    </View>
  )
}

export default HomeScreen