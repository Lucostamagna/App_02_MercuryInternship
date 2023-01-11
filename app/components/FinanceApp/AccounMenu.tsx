import React from 'react'
import { ViewStyle, Dimensions, Image, Pressable, useColorScheme, ImageStyle } from "react-native"
import {colors} from "../../theme"

const { width } = Dimensions.get("window")
const AccounMenu = () => {
    const theme = useColorScheme()
  return (
    <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
      <Image resizeMode='cover' source={require("../images/Path 40350.png")} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image resizeMode='cover' source={require("../images/Path 40344.png")} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image resizeMode='cover' source={require("../images/Path 40346.png")}></Image>
      <Image  resizeMode='cover' source={require("../images/Path 40344.png")} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
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
