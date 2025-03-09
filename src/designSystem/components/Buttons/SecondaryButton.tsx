import { DimensionValue } from "react-native";
import { spacing } from "../../theme/spacing";
import { Button } from "./ButtonPrimary";


function SecondaryButton({
  title = "Next",
  onPress,
  loading,
  disabled,
  width = "30%"
}: {
  title: string;
  loading: boolean;
  disabled: boolean;
  width?: DimensionValue,
  onPress: () => void;
}) {
  return (
    <Button
      title={title}
      color="baseBlack"
      backgroundColor="white"
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: width,
        marginTop: spacing["space-16"],
      }}
      onPress={onPress}
      loading={loading}
      alignSelf="center"
      disabled={disabled}
    />
  );
}

export default SecondaryButton;
