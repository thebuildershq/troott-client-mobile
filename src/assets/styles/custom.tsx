import { StyleSheet } from "react-native";
import { spacing } from "../../designSystem/theme/spacing";
import { fonts } from "../../designSystem/theme/font";
import { palette } from "../../designSystem/theme/palette";

const customStyles = StyleSheet.create({
  //base
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: spacing.space16,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.family.matterBold,
    color: palette.white,
  },

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
});

export default customStyles;
