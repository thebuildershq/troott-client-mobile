import troott from "./tt/troott-logo.svg"
import troottLogo from "./tt/troott-logo.svg"

const png = require("./tt/troott-logo.png")

export const IMAGES = {
    troott,
    troottLogo,
    png

  

} as const;

export type ImageName = keyof typeof IMAGES;
