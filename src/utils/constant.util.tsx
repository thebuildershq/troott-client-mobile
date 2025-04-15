import { Dimensions } from "react-native";
import { palette, Palette} from "../designSystem/theme/palette";
import { spacing, } from "../designSystem/theme/spacing";
import { padding, } from "../designSystem/theme/padding";
import { column,  } from "../designSystem/theme/column";


export const FLEX = { flex: 1 };
export const BACKGROUND_COLOR = { backgroundColor: palette.baseBlack };

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCALE = SCREEN_WIDTH / 375; // 375 is used as a base width (e.g., iPhone X)


 // Define constants
 const columns = column.three
 const imageSpacing = spacing.space10; // Gap between images
 const horizontalPadding = padding.xlarge; // Padding on the left and right of the screen

 // Calculate available width for images
 const availableWidth = SCREEN_WIDTH - (horizontalPadding * 2) - (imageSpacing * (columns - 1));

 // Calculate image width
 export const imageWidth = Math.floor(availableWidth / columns);
 
 // Make height equal to width for square aspect ratio
export const imageHeight = imageWidth;

const minSize = 80;
const maxSize = 150;

export const RESPONSIVE_SIZE = Math.max(
  minSize,
  Math.min(maxSize, Math.round(110 * SCALE))
);


