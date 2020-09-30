import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  backContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  arrow: {
    marginTop: -270,
  },
  backText: {
    marginTop: -270,
    marginLeft: 15,
    color: "white",
    fontWeight: "bold",
  },
  heartContainer: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  heart: {
    marginTop: -60,
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
  },
  nameContainer: {
    marginTop: 20,
  },
  nameText: {
    fontSize: 20,
  },
  addressText: {
    fontSize: 16,
  },
  starContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    marginLeft: 30,
    fontSize: 12,
  },
  infoContainer: {
    marginTop: 30,
    width: width / 1.1,
  },
  amenitiesText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 14,
  },
  amenitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amenitiesTop: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  rightText: {
    marginLeft: 20,
  },
  readMore: {
    marginTop: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reviewRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  separator: {
    backgroundColor: "gray",
    height: 1,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  seeMoreReview: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatButton: {
    borderRadius: 20,
    height: 40,
    width: width / 5,
    backgroundColor: "cyan",
  },
  chatText: {
    alignSelf: "center",
    marginTop: 10,
  },
  seeMoreText: {
    color: "blue",
  },
  footerContainer: {
    // marginRight: 20,
    marginTop: 10,
    padding: 30,
    backgroundColor: "white",
    // position: "fixed",
    // bottom: 0,
    // left: 0,
    width: "100%",
  },
  insideFooter: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
  },
  checkButton: {
    borderRadius: 20,
    height: 40,
    width: width / 2.5,
    backgroundColor: "cyan",
  },
  leftTextFooter: {
    marginLeft: -20,
  },
  rightTextFooter: {
    alignSelf: "center",
    marginTop: 10,
  },
  price: {
    color: "blue",
  },
  pricePerNight: {
    fontSize: 12,
  },
});

export default styles;
