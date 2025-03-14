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
    paddingVertical: 23,
    backgroundColor: palette.lightBlue,
  },
  buttonText: {
    color: palette.white,
    fontFamily: fonts.family.matterBold,
  },
  //ButtonPrimary
  buttonPrimary: {
    backgroundColor: palette.lightBlue,
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
    fontWeight: "bold",
    textAlign: "center",
    color: palette.white,
    fontFamily: fonts.family.matterBold,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: palette.white,
    marginTop: 10,
  },
  link: {
    color: "#007BFF",
    fontWeight: "600",
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

  
  //OAuth
  oAuthbutton: {
    padding: spacing.space16,
    marginVertical: spacing.space8,
    borderRadius: spacing.space4,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 130,
    paddingVertical: 23,
    backgroundColor: palette.lightBlue,
  },
  appleButton: {
    backgroundColor: "#000",
  },
  googleButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  oAuthbuttonText: {
    color: palette.white,
    fontFamily: fonts.family.matterBold,
    fontSize: 16,
    marginLeft: 10,
  },
  buttonTextGoogle: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: fonts.family.matterBold,
    color: palette.white,
  },
  icon: {
    marginRight: 8,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
});

export default componentStyles;
