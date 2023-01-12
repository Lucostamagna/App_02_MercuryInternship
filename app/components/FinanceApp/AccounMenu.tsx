import React from 'react'
import { ViewStyle, Dimensions, Image, Pressable, useColorScheme, ImageStyle } from "react-native"
import {colors} from "../../theme"
import wallet from "../images/Path 40344.png"
import card from "../images/Path 40350.png"
import analtic from "../images/Path 40346.png"
import payment from "../images/Path 40350.png"

const { width } = Dimensions.get("window")
const AccounMenu = () => {
    const theme = useColorScheme()
  return (
    <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
       <Image source={wallet} style={{...$menuIcon, tintColor:colors[theme].icon}}></Image>
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
