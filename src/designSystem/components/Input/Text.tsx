import { Text as RNText, TextStyle } from "react-native";
import { IText } from "../../../utils/interface.utl";
import { palette } from "../../theme/palette";
import { fonts } from "../../theme/font";
import { spacing } from "../../theme/spacing";

export const Text = (props: IText) => {
 
  const { color, fontFamily, fontSize, children, styles } = props;

  return (
    <>
      <RNText
        style={[
          {
            color: palette[color],
            fontFamily: fonts.family[fontFamily],
            fontSize: spacing[fontSize],
          },
          styles,
        ]}
      >
        {children}
      </RNText>
    </>
  );
};
