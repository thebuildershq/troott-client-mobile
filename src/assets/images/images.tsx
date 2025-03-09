import troott from "./tt/troott-logo.svg"
import troottLogo from "./tt/troott-logo.png"

export const IMAGES = {
    troott,
    troottLogo
  

} as const;

export type ImageName = keyof typeof IMAGES;
