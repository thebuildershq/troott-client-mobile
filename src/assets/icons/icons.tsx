import email from "@/assets/icons/tt/email-icon.svg";
import passwordLock from "@/assets/icons/password-lock.svg";


export const ICONS = {
    email,
    passwordLock,

} as const;

export type IconName = keyof typeof ICONS;
