import DateTimePickerModal from "react-native-modal-datetime-picker";
import { palette } from "../../theme/palette";


export function DatePicker(props: any) {

const {
    isVisible = true,
    mode = "date",
    handleConfirm,
    handleCancle,
  }: {
    isVisible?: boolean;
    mode?: "date" | "datetime" | "time";
    handleConfirm: () => void;
    handleCancle: () => void;
  } = props

  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      display="spinner"
      onConfirm={handleConfirm}
      onCancel={handleCancle}
      style={{backgroundColor: palette['baseBlack']}}
      accentColor={palette['baseBlack']}
      isDarkModeEnabled={true}
      themeVariant='dark'
    />
  );
}
