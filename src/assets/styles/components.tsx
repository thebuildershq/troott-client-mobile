import { StyleSheet } from "react-native";
import { spacing } from "../../designSystem/theme/spacing";
import { palette } from "../../designSystem/theme/palette";
import { fonts } from "../../designSystem/theme/font";

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

});

export default componentStyles;