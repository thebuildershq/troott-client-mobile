import email from "./tt/email-icon.svg";
import passwordLock from "./tt/password-lock.svg";


export const ICONS = {
    email,
    passwordLock,

} as const;

export type IconName = keyof typeof ICONS;
