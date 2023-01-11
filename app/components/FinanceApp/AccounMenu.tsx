import React from 'react'
import { ViewStyle, Dimensions, Image, Pressable, useColorScheme, ImageStyle } from "react-native"
import {colors} from "../../theme"
import Img1 from "../images/Path 40350.png"
import Img2 from "../images/Path 40344.png"
import Img3 from "../images/Path 40346.png"
import Img4 from "../images/Path 40344.png"



const { width } = Dimensions.get("window")
const AccounMenu = () => {
    const theme = useColorScheme()
  return (
    <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
      <Image source={Img1} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image source={Img2} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image source={Img3}></Image>
      <Image source={Img4} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
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
    width,
    height: 96,
  }
  const $menuIcon: ImageStyle = { tintColor: colors.menuIcons }
