import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as AppConstants from '../constants/AppConstants';
import AntDesign, {Antdesign} from 'react-native-vector-icons/AntDesign';
import {pixelNormalize} from '../constants/AppConstants';

export default function CategoryScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{backgroundColor: '#FFEFF3'}}>
          <View>
            <View style={styles.userContainer}>
              <View style={styles.userIconContainer}>
                <Image
                  source={require('../assets/userIcon.png')}
                  style={styles.userIcon}
                />
              </View>
              <View>
                <Text style={styles.userName}>Hello Mr. User</Text>
              </View>
            </View>
            <View style={styles.services}>
              <Text style={styles.serviceText}>Select Service Type</Text>

              <View style={styles.serviceTypeSection}>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Labour</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (161 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#FF7058', padding: hp('2.5')}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>
                    Loaders & Unloaders
                  </Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (2 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#FFD321', padding: hp(2.5)}}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.serviceTypeSection}>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Mistri</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (161 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#1961C6', padding: hp('2.5')}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Electrician</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (2 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#0817A8', padding: hp(2.5)}}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.serviceTypeSection}>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Painter</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (161 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#0FB857', padding: hp('2.5')}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Carpenter</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (2 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#CF0059', padding: hp(2.5)}}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.serviceTypeSection}>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Plumber</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (161 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#8114B8', padding: hp('2.5')}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.serviceTypeContainer}>
                  <Text style={styles.serviceTypeBigText}>Fabricator</Text>
                  <Text style={styles.serviceTypeSmallText}>
                    (2 helpers available)
                  </Text>
                  <View style={styles.ImageIconSection}>
                    <View style={styles.serviceImage}>
                      <Image
                        source={require('../assets/userIcon.png')}
                        style={styles.userIcon}
                      />
                    </View>
                    <View style={styles.icon}>
                      <AntDesign
                        name="right"
                        size={hp(2.5)}
                        color="white"
                        style={{backgroundColor: '#040404', padding: hp(2.5)}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bg: {
    flex: 1,
    height: hp('100%'),
  },
  userContainer: {
    flexDirection: 'row',
    width: wp('80%'), //304
    height: hp('6%'), //43
    marginTop: hp('4%'), //54
    marginHorizontal: wp('4%'), //15
  },
  userIconContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: AppConstants.pixelNormalize(42),
    height: AppConstants.pixelNormalize(42),
    marginLeft: AppConstants.pixelNormalize(28),
  },
  userIcon: {
    width: AppConstants.pixelNormalize(42),
    height: AppConstants.pixelNormalize(42),
    borderRadius: AppConstants.pixelNormalize(100),
  },
  userName: {
    margin: AppConstants.pixelNormalize(10),
    fontSize: AppConstants.pixelNormalize(15),
    color: '#000000',
  },
  userImage: {
    marginLeft: AppConstants.pixelNormalize(50),
    width: AppConstants.pixelNormalize(42),
    height: AppConstants.pixelNormalize(42),
  },
  services: {
    width: '100%',
    height: hp('84%'), //662
    marginTop: hp('3.5%'),
    backgroundColor: '#faf8ff',
    borderRadius: 50,
  },
  serviceText: {
    fontSize: AppConstants.pixelNormalize(16),
    marginTop: hp('3.5%'), //28
    marginLeft: AppConstants.pixelNormalize(28),
    marginRight: AppConstants.pixelNormalize(81),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceTypeSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('3%'), //24
  },
  serviceTypeContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: wp('37.5%'), //140
    height: hp('15.5%'), //120
    borderRadius: 10,
    overflow: 'hidden',
  },
  serviceTypeBigText: {
    fontSize: AppConstants.pixelNormalize(14),
    marginTop: hp('1.75%'), //14
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  serviceTypeSmallText: {
    fontSize: AppConstants.pixelNormalize(10),
    marginTop: hp('0.5%'), //6
    color: '#AAAAAA',
    textAlign: 'center',
  },
  serviceImage: {
    width: wp('16%'), //62
    height: hp('7%'), //44
    marginTop: hp('2%'), //20
    marginLeft: wp('4%'), //15
  },
  ImageIconSection: {
    flexDirection: 'row',
  },
  icon: {
    opacity: 0.4,
    width: pixelNormalize(50),
    height: pixelNormalize(50),
    borderRadius: pixelNormalize(100),
    marginLeft: wp('6%'), //15
    marginTop: hp('3%'), //15
    overflow: 'hidden',
  },
});
