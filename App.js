/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import I18n from "./src/i18n";

import { getLanguages } from "react-native-i18n";

getLanguages().then(languages => {
  console.log(languages); // ['en-US', 'en']
});
var selected_lang = "en";
type Props = {};
export default class App extends Component<Props> {
  changeLanguage() {
    if (selected_lang === "en") selected_lang = "fr";
    else selected_lang = "en";
    this.forceUpdate();

    getLanguages().then(languages => {
      console.log(languages); // ['en-US', 'en']
    });
  }
  render() {
    I18n.locale = selected_lang;
    return (
      <View style={styles.container}>
        <View style={styles.center_element}>
          <Text style={styles.selected_lang}>
            Selected Language is {" -> " + selected_lang}
          </Text>
          <Text>{"\n" + "\n" + I18n.t("greeting")}</Text>
        </View>
        <View style={styles.camera_view}>
          <TouchableOpacity
            style={styles.camera_button}
            onPress={() => this.changeLanguage()}
          >
            <Text style={styles.camera_text}>change Language</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera_button: {
    backgroundColor: "#166088",
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "gray",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    alignSelf: "stretch",
    marginHorizontal: 20,
    height: 40
  },
  camera_text: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  camera_view: {
    alignItems: "center",
    flexDirection: "column",
    alignContent: "space-around",
    padding: 10
  },
  center_element: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 80
  },
  selected_lang: {
    fontWeight: "bold"
  }
});
