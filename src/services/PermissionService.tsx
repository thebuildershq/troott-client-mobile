import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

// ✅ 1. Request Permissions & Get Push Token
export const getPushToken = async (): Promise<string | null> => {
  try {
    if (!Device.isDevice) {
      console.warn("Push notifications only work on physical devices.");
      return null;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      console.warn("Push notifications permission not granted.");
      return null;
    }

    const tokenData = await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    console.log("Expo Push Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting push token:", error);
    return null;
  }
};

// ✅ 2. Listen for Notifications (Foreground & Tap Events)
export const setupNotificationListeners = () => {
  // Foreground listener
  Notifications.addNotificationReceivedListener((notification) => {
    console.log("Foreground notification received:", notification);
  });

  // When the user taps the notification
  Notifications.addNotificationResponseReceivedListener((response) => {
    console.log("Notification tapped:", response);
  });

  console.log("Expo notification listeners set up.");
};

// ✅ 3. Schedule Local Notification
// export const scheduleLocalNotification = async (
//   title: string,
//   body: string,
//   delay: number = 5
// ) => {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title,
//       body,
//       sound: true,
//     },
//     trigger: {
//       seconds: delay,
//       repeats: false,
//       type: "timeInterval", // 👈 required for both platforms
//     },
//   });

//   console.log(`Local notification scheduled in ${delay} seconds.`);
// };

// ✅ 4. Cancel All Scheduled Notifications
export const cancelAllNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log("All scheduled notifications canceled.");
};

// ✅ 5 & 6. Set / Clear App Badge Number
export const setBadgeCount = async (count: number) => {
  if (Platform.OS === "ios") {
    await Notifications.setBadgeCountAsync(count);
  }
};

export const clearBadgeCount = async () => {
  if (Platform.OS === "ios") {
    await Notifications.setBadgeCountAsync(0);
  }
};

// ✅ 7. Handle App Opened from Notification (Optional Manual Check)
export const handleNotificationAppLaunch = async () => {
  const response = await Notifications.getLastNotificationResponseAsync();
  if (response) {
    console.log("App launched from notification:", response);
  }
};

