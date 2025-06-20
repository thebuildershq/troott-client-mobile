import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "@/components/ui/text";
import Header from "@/components/shared/headers";
import { theme } from "@/constants/theme";
import Input from "@/components/ui/input";
import { SearchNormal } from "iconsax-react-nativejs";
import { PlayListCardItem } from "@/components/tracks";
import { SolidIcons } from "@/assets/icons";
import ScreenModalAndroidView from "@/components/ui/screen-modal-android";
import { ScrollView } from "react-native-gesture-handler";

const UserPlayList = () => {
  return (
    <ScreenModalAndroidView>
      <View style={styles.container}>
        <Header />
        <Input
          placeholder="Find in playlist"
          leftIcon={<SearchNormal color={theme.colors.grey[200]} size={18} />}
          placeholderTextColor={theme.colors.grey[200]}
          containerstyle={{
            backgroundColor: theme.colors.grey[700],
            borderRadius: theme.sizes.radius.base,
            borderWidth: 0,
            marginHorizontal: theme.sizes.spacing.xs,
          }}
        />
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.sizes.spacing.md,
            gap: theme.sizes.spacing.md,
          }}
          nestedScrollEnabled
        >
          <AllPlayList />
        </ScrollView>
      </View>
    </ScreenModalAndroidView>
  );
};

function NewPlayList() {
  return (
    <View>
      <View>
        <SolidIcons.PlusIcon color={"#fff"} size={22} />
      </View>
      <Text>New playlist</Text>
    </View>
  );
}

function AllPlayList() {
  return (
    <View
      style={{
        gap: theme.sizes.spacing.lg,
        marginTop: theme.sizes.spacing.xl,
      }}
    >
      <Text color={theme.colors.grey[200]} size="md" weight="medium">
        All Playlists
      </Text>
      <View style={{ gap: theme.sizes.spacing.md }}>
        {[...Array(20)].map((_, index) => (
          <PlayListCardItem
            title="Loved Sermon"
            description="Auto playlist"
            image=""
            id=""
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

export default UserPlayList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey[900],
    paddingVertical: 16,
    gap: theme.sizes.spacing.md,
    borderTopRightRadius: theme.sizes.radius.base,
    borderTopLeftRadius: theme.sizes.radius.base,
  },
});
