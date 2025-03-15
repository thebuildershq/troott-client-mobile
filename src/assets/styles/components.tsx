import { StyleSheet } from "react-native";
import { spacing } from "../../designSystem/theme/spacing";
import { palette } from "../../designSystem/theme/palette";
import { fonts } from "../../designSystem/theme/font";
import { Divider } from "react-native-paper";

const componentStyles = StyleSheet.create({
  //TextInput
  textInputContainer: {
    paddingHorizontal: spacing.space20,
    paddingVertical: spacing.space8,
    borderRadius: spacing.space8,
    width: "95%",
    
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    color: palette.white,
    fontFamily: fonts.family.matterLight,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  inputRoot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //ButtonStyles
  button: {
    padding: spacing.space16,
    marginVertical: spacing.space8,
    borderRadius: spacing.space4,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 130,
    paddingVertical: 18,
    backgroundColor: palette.baseGreen,
  },
  buttonText: {
    color: palette.baseBlack,
    fontFamily: fonts.family.matterMedium,
  },
  //ButtonPrimary
  buttonPrimary: {
    backgroundColor: palette.baseGreen,
  },
  //ButtonSecondary
  buttonSecondary: {
    backgroundColor: palette.white,
    borderColor: palette.lightBlue,
    borderWidth: 1,
  },
  //ButtonSecondaryOutline
  buttonSecondaryOutline: {
    backgroundColor: "transparent",
    borderColor: palette.lightBlue,
    borderWidth: 1,
  },

  
  //Auth Styles
  backButton: {
    position: "absolute",
    left: 0,
    top: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: palette.white,
    fontFamily: fonts.family.matterBold,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: palette.white,
    marginTop: 10,
    fontFamily: fonts.family.matterRegular,
    lineHeight: 20
    
  },
  link: {
    color: palette.green700,
    textDecorationLine: "underline"
  },

  //Divider

  OrCongtainer: {
    position: "relative", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: palette.grey400,
    position: "relative",
  },

  orText: {
    fontSize: 16,
    fontFamily: fonts.family.matterBold,
    color: palette.grey400,
    position: "absolute",
    backgroundColor: palette.baseBlack,
    top: -13,
    left: 165.5,
    paddingHorizontal: 10,
    zIndex: 1
  },

  urlText: {
    fontSize: 14,
    textAlign: "left",
    color: palette.grey400,
    marginBottom: 10,
    fontFamily: fonts.family.matterRegular,
    lineHeight: 20,
    textDecorationLine: "underline"
  },


  //OAuth
  oAuthbuttonBase: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.space8,
  },
  oAuthtext: {
    fontFamily: fonts.family.matterLight,
    fontSize: 16,
  },
  oAuthrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    marginRight: 8,
    width: 18,
    height: 18,
  },


  // TextInput
  twrapper: {
    width: "100%",
  },
  tlabel: {
    fontSize: 14,
    fontFamily: fonts.family.matterRegular,
    color: palette.white,
    marginBottom: 8,
  },
  tcontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 55,
  },
  toutline: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tinput: {
    flex: 1,
    fontSize: 16,
    color: palette.white,
    paddingVertical: 10,
  },
  tdisabledInput: {
    color: palette.grey900,
  },
  ticon: {
    marginHorizontal: -50,
    width: 20,
    height: 20,
  },
});

export default componentStyles;
