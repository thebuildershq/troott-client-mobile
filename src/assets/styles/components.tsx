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
    color: "#659DF6",
    textDecorationLine: "underline",
    marginTop: 15,
  },

  // ChangeData 
  clink: {
    color: palette.grey200,
    fontFamily: fonts.family.matterBold,
  },

  dlink: {
    color: palette.green700,
    fontFamily: fonts.family.matterMedium,
    lineHeight: 20,
  },

  // Resend Code
  rlink: {
    color: palette.baseGreen,
    fontFamily: fonts.family.matterBold,
    marginTop: 5,

  },

  // Terms and Conditions
  termsSubText: {
    fontSize: 14,
    textAlign: "left",
    color: palette.white,
    marginTop: 10,
    fontFamily: fonts.family.matterRegular,
    lineHeight: 20
  },

  // resend code
  rSubText: {
    fontSize: 14,
    textAlign: "left",
    color: palette.grey400,
    fontFamily: fonts.family.matterRegular,
  },

  // Reset Password
  reSubText: {
    fontSize: 14,
    textAlign: "center",
    color: palette.grey200,
    fontFamily: fonts.family.matterRegular,
    lineHeight:18
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
    paddingHorizontal: 10,
    height: 55,
    borderWidth: 1,
    borderColor: palette.grey400,
    borderRadius: 4,
    fontFamily: fonts.family.matterRegular,
    backgroundColor: palette.grey700,
    color: palette.white,
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

  //OTP Input 
  otpcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  otpBox: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: palette.grey400,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 4,
    backgroundColor: palette.grey700,
    color: palette.white,
  },


  // Register style
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10
  },
  rowInput: {
    flex: 1, 
    marginHorizontal: 5, 
  },


  //Error Boundary Components
  econtainer: {
    backgroundColor: '#fafafa',
    flex: 1,
    justifyContent: 'center',
  },
  econtent: {
    marginHorizontal: 16,
  },
  etitle: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    color: '#000',
  },
  esubtitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000',
  },
  eerror: {
    paddingVertical: 16,
  },
  ebutton: {
    backgroundColor: '#2196f3',
    borderRadius: 50,
    padding: 16,
  },
  ebuttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default componentStyles;
