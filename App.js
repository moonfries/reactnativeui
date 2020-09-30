import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Container, Icon } from "native-base";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import ReadMore from "react-native-read-more-text";
import { SliderBox } from "react-native-image-slider-box";
import styles from "./App.style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
      ],
    };
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ color: "blue", marginTop: 5 }} onPress={handlePress}>
        See all amenities
      </Text>
    );
  };

  _renderTruncatedFooter1 = (handlePress) => {
    return (
      <Text style={{ color: "blue", marginTop: 5 }} onPress={handlePress}>
        See more
      </Text>
    );
  };

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ color: "blue", marginTop: 5 }} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  _handleTextReady = () => {
    // ...
  };

  render() {
    let { text } = this.props;

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <SliderBox
            images={this.state.images}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
            dotStyle={{
              width: 0,
              height: 0,
            }}
          />
          <Container style={styles.backContainer}>
            <AntDesign
              name="arrowleft"
              size={30}
              color="white"
              style={styles.arrow}
            />
            <Text style={styles.backText}>Back</Text>
          </Container>
          <Container style={styles.heartContainer}>
            <Entypo name="heart" size={40} color="red" style={styles.heart} />
          </Container>
        </SafeAreaView>
        <Container style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Summit Galleria Cebu</Text>
              <Text style={styles.addressText}>General Max Ave</Text>
              <View style={styles.starContainer}>
                <Entypo name="star" size={20} color="#FFD700" />
                <Entypo name="star" size={20} color="#FFD700" />
                <Entypo name="star" size={20} color="#FFD700" />
                <Entypo name="star" size={20} color="#FFD700" />
                <Text style={styles.reviewText}>300 reviews</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text>
                  Summit Galleria Cebu, the flagship hotel of Summit Hotels and
                  Resorts is the epitome of artistic and urban contemporary
                  design. Every step taken inside the hotel will give you a
                  heart
                </Text>
              </View>
            </View>

            <Text style={styles.amenitiesText}>Amenities</Text>

            <View style={styles.amenitiesContainer}>
              <View>
                <View style={styles.amenitiesTop}>
                  <AntDesign name="wifi" size={30} color="black" />
                  <Text style={styles.rightText}>Free Wifi</Text>
                </View>
                <View style={styles.amenitiesTop}>
                  <AntDesign name="inbox" size={30} color="black" />
                  <Text style={styles.rightText}>AirCon</Text>
                </View>
                <View style={styles.amenitiesTop}>
                  <MaterialCommunityIcons
                    name="room-service-outline"
                    size={30}
                    color="black"
                  />
                  <Text style={styles.rightText}>Room Service</Text>
                </View>
              </View>

              <View>
                <View style={styles.amenitiesTop}>
                  <MaterialCommunityIcons name="pool" size={30} color="black" />
                  <Text style={styles.rightText}>Pool</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <MaterialCommunityIcons name="cup" size={30} color="black" />
                  <Text style={styles.rightText}>AirCon</Text>
                </View>
                <View style={styles.amenitiesTop}>
                  <MaterialCommunityIcons
                    name="parking"
                    size={30}
                    color="black"
                  />
                  <Text style={styles.rightText}>Free Parking</Text>
                </View>
              </View>
            </View>
            <View style={styles.readMore}>
              <ReadMore
                numberOfLines={1}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}
              >
                <Text>
                  Music, Basketball Court, Table, Tennis, Blackboard, SHop
                </Text>
              </ReadMore>
            </View>
            <View>
              <Text style={styles.amenitiesText}>Reviews</Text>
            </View>
            <View style={styles.reviewRightContainer}>
              <View>
                <MaterialCommunityIcons
                  name="face-profile"
                  size={40}
                  color="black"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.nameText}>Juan De La Cruz</Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo name="star" size={20} color="#FFD700" />
                  <Entypo name="star" size={20} color="#FFD700" />
                  <Entypo name="star" size={20} color="#FFD700" />
                  <Entypo name="star" size={20} color="#FFD700" />
                </View>
              </View>
            </View>
            <ReadMore
              numberOfLines={5}
              renderTruncatedFooter={this._renderTruncatedFooter1}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </ReadMore>
            <View style={styles.separator} />
            <View style={styles.reviewRightContainer}>
              <View>
                <MaterialCommunityIcons
                  name="face-profile"
                  size={40}
                  color="black"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.nameText}>Juan De La Cruz</Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo name="star" size={20} color="#FFD700" />
                  <Entypo name="star" size={20} color="#FFD700" />
                  <Entypo name="star" size={20} color="#FFD700" />
                  <Entypo name="star" size={20} color="#FFD700" />
                </View>
              </View>
            </View>
            <ReadMore
              numberOfLines={5}
              renderTruncatedFooter={this._renderTruncatedFooter1}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </ReadMore>
            <View style={styles.seeMoreReview}>
              <Text style={styles.seeMoreText}>See more reviews</Text>
              <TouchableOpacity style={styles.chatButton}>
                <Text style={styles.chatText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.footerContainer}>
            <View style={styles.insideFooter}>
              <View style={styles.leftTextFooter}>
                <Text style={styles.price}>4,230.00</Text>
                <Text style={styles.pricePerNight}>Price per night</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.checkButton}>
                  <Text style={styles.rightTextFooter}>Check Availability</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Container>
      </View>
    );
  }
}
