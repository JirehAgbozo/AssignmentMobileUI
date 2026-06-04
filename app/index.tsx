import React from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.page}>
        <ImageBackground
          source={require("../assets/images/klm-hero.jpg")}
          style={styles.heroImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.logo}>KLM</Text>

            <View>
              <Text style={styles.heroTitle}>
                Experience more with Flying Blue
              </Text>

              <Text style={styles.heroText}>
                Join today to earn Miles, book flights easily, and enjoy
                exclusive deals.
              </Text>

              <Pressable style={styles.signInButton}>
                <Text style={styles.signInText}>Sign up or log in</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.offerText}>
            Offers from <Text style={styles.blueText}>Toronto (YYZ)</Text>
          </Text>

          <Text style={styles.sectionTitle}>
            Discover the best deals for you
          </Text>

          <View style={styles.dealCard}>
            <Image
              source={require("../assets/images/prague.jpg")}
              style={styles.dealImage}
            />

            <View style={styles.dealInfo}>
              <Text style={styles.city}>Prague</Text>
              <Text style={styles.country}>Czech Rep</Text>

              <Pressable style={styles.priceButton}>
                <Text style={styles.priceText}>From CAD 877</Text>
              </Pressable>
            </View>
          </View>

          <Pressable
            style={styles.alertButton}
            onPress={() => Alert.alert("Alert Button pressed")}
          >
            <Text style={styles.alertText}>Alert</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.activeNav}>Home</Text>
        <Text style={styles.nav}>Buy</Text>
        <Text style={styles.nav}>Trips</Text>
        <Text style={styles.nav}>Status</Text>
        <Text style={styles.nav}>Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f2f6f9",
  },

  page: {
    paddingBottom: 90,
  },

  heroImage: {
    width: "100%",
    height: 430,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 20, 40, 0.45)",
    padding: 24,
    paddingTop: 60,
    justifyContent: "space-between",
  },

  logo: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },

  heroTitle: {
    color: "white",
    fontSize: 31,
    fontWeight: "bold",
    marginBottom: 14,
  },

  heroText: {
    color: "white",
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 22,
  },

  signInButton: {
    backgroundColor: "#0078c9",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  signInText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  content: {
    padding: 20,
  },

  offerText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#001f33",
    marginBottom: 18,
  },

  blueText: {
    color: "#0078c9",
  },

  sectionTitle: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#001f33",
    marginBottom: 16,
  },

  dealCard: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
  },

  dealImage: {
    width: "100%",
    height: 300,
  },

  dealInfo: {
    padding: 10,
  },

  city: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#001f33",
  },

  country: {
    fontSize: 18,
    color: "#52616b",
    marginTop: 4,
    marginBottom: 16,
  },

  priceButton: {
    backgroundColor: "#0078c9",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  priceText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  alertButton: {
    backgroundColor: "#001f33",
    marginTop: 24,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  alertText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  activeNav: {
    color: "#0078c9",
    fontWeight: "bold",
  },

  nav: {
    color: "#64748b",
    fontWeight: "bold",
  },
});
