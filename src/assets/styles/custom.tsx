import { StyleSheet } from "react-native";
import { spacing } from "../../designSystem/theme/spacing";
import { fonts } from "../../designSystem/theme/font";
import { palette } from "../../designSystem/theme/palette";

const customStyles = StyleSheet.create({
  //welcomeScreen
  WelcomeScreenContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:'black'
    // flexGrow: 1,
  },

  WelcomeScreenLogo: {
    width: 110,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },

  WelcomeScreenText: {
    fontSize: 20,
    fontFamily: fonts.family.matterLight,
    color: palette.white,
    justifyContent: "center",
    alignItems: "center",
  },

  WelcomeScreenView: {
    justifyContent: "center",
    alignItems: "center",
  },

  //base
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: palette.baseBlack
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

  //margins
  mt5: {
    marginTop: 5,
  },

  mt10: {
    marginTop: 10,
  },

  mt15: {
    marginTop: 15,
  },

  mt20: {
    marginTop: 20,
  },

  mt25: {
    marginTop: 25,
  },

  mt30: {
    marginTop: 30,
  },

  mt40: {
    marginTop: 40,
  },

  mt50: {
    marginTop: 50,
  },

  mt60: {
    marginTop: 60,
  },

  mt80: {
    marginTop: 100,
  },

  mt100: {
    marginTop: 100,
  },

  mt120: {
    marginTop: 120,
  },

  //gaps
  g0: {
    gap: 0,
  },
  g5: {
    gap: 5,
  },

  g10: {
    gap: 10,
  },

  g15: {
    gap: 15,
  },

  g20: {
    gap: 20,
  },

  g25: {
    gap: 25,
  },

  g30: {
    gap: 30,
  },

  g40: {
    gap: 40,
  },

  g50: {
    gap: 50,
  },

  g60: {
    gap: 60,
  },

  g80: {
    gap: 100,
  },

  g100: {
    gap: 100,
  },

  g120: {
    gap: 120,
  },
});

export default customStyles;
