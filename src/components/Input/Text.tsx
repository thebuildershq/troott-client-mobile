import { Text as RNText, TextStyle } from "react-native";
import { IText } from "../../utils/interface.utl";
import { palette } from "../../designSystem/theme/palette";
import { fonts } from "../../designSystem/theme/font";
import { spacing } from "../../designSystem/theme/spacing";

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
