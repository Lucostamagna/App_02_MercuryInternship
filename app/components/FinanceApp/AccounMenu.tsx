import React from 'react'
import { ViewStyle, Dimensions, Image, Pressable, useColorScheme, ImageStyle, View } from 'react-native';
import {colors} from "../../theme"
import img1 from "../images/wallet.png"
import img2 from "../images/card.png"
import img3 from "../images/transaction.png"
import img4 from "../images/archive.png"

const { width } = Dimensions.get("window")
const AccounMenu = () => {
    const theme = useColorScheme()
  return (
    
    <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
    <Image source={img1} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    <Image source={img2} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    <Image source={img3}></Image>
    <Image source={img4} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
  </Pressable> 
  )
}

export default AccounMenu
const $menuContainer: ViewStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.whiteBackground,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 96,
  }
  const $menuIcon: ImageStyle = {
     tintColor: colors.menuIcons 

    }
