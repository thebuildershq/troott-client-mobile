import { Notifications } from "react-native-notifications";
import messaging from "@react-native-firebase/messaging";
import { Platform } from "react-native";

// ✅ 1. Request Permissions & Get Push Token
export const getPushToken = async (): Promise<string | null> => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      console.warn("Push notifications permission not granted.");
      return null;
    }

    const token = await messaging().getToken();
    console.log("Push Notification Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting push notification token:", error);
    return null;
  }
};

// ✅ 2. Listen for Notifications (Foreground, Background, and Quit State)
export const setupNotificationListeners = () => {
  // Foreground Notification Handler
  Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
    console.log("Foreground Notification Received:", notification);
    completion({ alert: true, sound: true, badge: false });
  });

  // Notification Opened (When tapped in background)
  Notifications.events().registerNotificationOpened((notification, completion) => {
    console.log("Notification Opened:", notification);
    completion();
  });

  // Background Notification Handler (for iOS)
  Notifications.registerRemoteNotifications();
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Background Message Received:", remoteMessage);
  });

  console.log("Notification listeners set up.");
};

// ✅ 3. Schedule a Local Notification
export const scheduleLocalNotification = (title: string, body: string, delay: number = 5) => {
  Notifications.postLocalNotification({
    title,
    body,
    sound: "default",
    category: "SCHEDULED",
    fireDate: new Date().getTime() + delay * 1000, // Schedule after delay (seconds)
  });

  console.log(`Local notification scheduled in ${delay} seconds.`);
};

// ✅ 4. Cancel All Scheduled Notifications
export const cancelAllNotifications = () => {
  Notifications.cancelLocalNotification("*"); 
  console.log("All scheduled notifications canceled.");
};

// ✅ 5. Set App Badge Number
export const setBadgeCount = (count: number) => {
  if (Platform.OS === "ios") {
    Notifications.ios.setBadgeCount(count);
  }
};

// ✅ 6. Clear Badge Count
export const clearBadgeCount = () => {
  if (Platform.OS === "ios") {
    Notifications.ios.setBadgeCount(0);
  }
};

// ✅ 7. Handle App Termination
export const handleNotificationAppLaunch = async () => {
  const initialNotification = await messaging().getInitialNotification();
  if (initialNotification) {
    console.log("App opened from a notification:", initialNotification);
  }
};
