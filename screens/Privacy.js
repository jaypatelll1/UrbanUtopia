import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const Privacy = ({navigation: { goBack }}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.iconcont}>
            <TouchableOpacity onPress={() => goBack()}>
          <Icon name="arrow-left" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.headertxt}>Privacy Policy</Text>
        </View>
        <View>
          <Text style={styles.textcont}>
            [Insert Company Name] ("we" or "us") is committed to protecting the
            privacy of users ("you" or "user") of our fashion app ("App"). This
            Privacy Policy outlines how we collect, use, disclose, and safeguard
            your information when you use our App.
          </Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.headertxt2}> Information we collect</Text>
        </View>
        <View>
          <Text style={styles.textcont}>
            We may collect the following types of information when you use our
            App:
          </Text>
          <Text style={styles.textcont2}>
            Personal Information: We may collect personal information such as
            your name, email address, phone number, and billing information when
            you create an account through our App.
          </Text>
          <Text style={styles.textcont2}>
            Usage Information: We may collect information about how you interact
            with our App, such as your device type, IP address, browser type,
            pages visited, and actions taken within the App.
          </Text>
          <Text style={styles.textcont2}>
            Location Information: With your consent, we may collect your precise
            or approximate location information through your device when you use
            location-based features of our App.
          </Text>
          <Text style={styles.textcont2}>
            Device Information: We may collect device-specific information such
            as device model, operating system version, and unique device
            identifiers.
          </Text>
          <Text style={styles.textcont2}>
            Cookies and SimilarTechnologies: We may use cookies, web beacons,
            and similar technologies to collect information about your usage of
            the App and to personalize your experience.
          </Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.headertxt2}> Additionals</Text>
        </View>
        <View>
          <View style={styles.textheadercont}>
            <Text style={styles.textheader}>Data Retention</Text>
            <Text style={styles.textcont3}>
              We will retain your information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy unless a
              longer retention period is required or permitted by law.
            </Text>
          </View>
          <View style={styles.textheadercont}>
            <Text style={styles.textheader}>Security</Text>
            <Text style={styles.textcont3}>
              We take reasonable measures to protect the security of your
              information and to prevent unauthorized access, use, or
              disclosure. However, no method of transmission over the internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security
            </Text>
          </View>
          <View style={styles.textheadercont}>
            <Text style={styles.textheader}>Your Choices</Text>
            <Text style={styles.textcont3}>
              You may choose not to provide certain information, but this may
              limit your ability to use certain features of our App. You can
              also opt-out of certain data collection and processing activities,
              such as targeted advertising, by adjusting your device or browser
              settings.
            </Text>
          </View>
          <View style={styles.textheadercont}>
            <Text style={styles.textheader}>Children's Privacy</Text>
            <Text style={styles.textcont3}>
              Our App is not intended for children under the age of 13, and we
              do not knowingly collect personal information from children under
              13. If you believe we have collected personal information from a
              child under 13, please contact us immediately. settings.
            </Text>
          </View>
          <View style={styles.textheadercont}>
            <Text style={styles.textheader}>
              Changes to This Privacy Policy
            </Text>
            <Text style={styles.textcont3}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any material changes by posting the updated Privacy Policy on
              our App. Your continued use of the App after the effective date of
              the revised Privacy Policy constitutes your acceptance of the
              changes.
            </Text>
          </View>
          <View style={styles.bottomtext}>
            <Text style={styles.textcont3}>
              By using our App, you consent to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  iconcont: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginLeft: 15,
  },
  header: {
    backgroundColor: "#EBEBEB",
    width: "100%",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  header2: {
    backgroundColor: "#EBEBEB",
    width: "100%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  headertxt: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  headertxt2: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  textcont: {
    width: "90%",
    marginHorizontal: "5%",
    textAlign: "justify",
  },
  textcont2: {
    width: "85%",
    marginHorizontal: "5%",
    textAlign: "justify",
    marginLeft: "10%",
    marginTop: 10,
    fontSize: 13,
  },
  textcont3: {
    width: "83%",
    textAlign: "justify",
    marginLeft: "10%",
    fontSize: 13,
  },
  textheader: {
    width: "85%",
    textAlign: "justify",
    marginLeft: "10%",
    fontWeight: "600",
  },
  textheadercont: {
    marginTop: 10,
  },bottomtext:{
    marginTop:20,
    marginBottom:20
  }
});
