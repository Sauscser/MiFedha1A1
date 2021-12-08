import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import styles from './styles';

const KFNdogoScreen = props => {
  const navigation = useNavigation();

  

  const DpstMneys = () => {
    navigation.navigate('DpstMney');
  };

  
  const RegMFNdogos = () => {
    navigation.navigate('RegMFNdgScrn');
  };

  

  const UpdtMFNPWss = () => {
    navigation.navigate('UpdtMFNPWs');
  };

  const WthdrwMFNss = () => {
    navigation.navigate('WthdrwMFNs');
  };

  const WthdrwMFNFltss = () => {
    navigation.navigate('WthdrwMFNFlts');
  };

  const VwMFNAccountSgnInss = () => {
    navigation.navigate('VwMFNAccountSgnIns');
  };

  const BuyFloatFrmUsrAcss = () => {
    navigation.navigate('BuyFloatFrmUsrAcs');
  };
  const FltWthdrwlsSgnInss = () => {
    navigation.navigate('FltWthdrwlsSgnIns');
  };

  const UsrWthdrwlsSgnInss = () => {
    navigation.navigate('UsrWthdrwlsSgnIns');
  };

  const MFNWithdrawlsSgnInss = () => {
    navigation.navigate('MFNWithdrawlsSgnIns');
  };

  const UsrDpositSgnInss = () => {
    navigation.navigate('UsrDpositSgnIns');
  };
  const FloatBghtSgnInss = () => {
    navigation.navigate('FloatBghtSgnIns');
  };

  const UpdateMFNComss = () => {
    navigation.navigate('UpdateMFNComs');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.floatimage}>
       <View style={styles.floatMainView}>
          <Text style={styles.floatText}>View</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={FloatBghtSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>UsrDposit</Text>
            </Pressable>

            <Pressable
              onPress={UsrDpositSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>FloatBght</Text>
            </Pressable>

            <Pressable
              onPress={MFNWithdrawlsSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>MFNWithdrawls</Text>
            </Pressable>
            <Pressable
              onPress={UsrWthdrwlsSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>UsrWthdrwls</Text>
            </Pressable>

            <Pressable
              onPress={FltWthdrwlsSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>FltWthdrwls</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>My Account</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={UpdtMFNPWss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={VwMFNAccountSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>ViewAc</Text>
            </Pressable>

            <Pressable
              onPress={RegMFNdogos}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>CreateAc</Text>
            </Pressable>
          </View>
        </View>

         <View style={styles.floatMainView}>
          <Text style={styles.floatText}>Float</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>Buy (Coming Soon)</Text>
            </Pressable>

            
            <Pressable
              onPress={WthdrwMFNFltss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>MFN Withdraw</Text>
            </Pressable>
            <Pressable
              onPress={DpstMneys}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>User Deposit</Text>
            </Pressable>
          </View>
        </View>

        


        <View style={styles.floatMainView}>
          <Text style={styles.floatText}> Earnings</Text>

          <View style={styles.viewForFloatPressables}>
            
            <Pressable onPress={WthdrwMFNss} style={styles.floatView}>
              <Text style={styles.floatPressableText}>Withdraw</Text>
            </Pressable>

            

            <Pressable
              onPress={UpdateMFNComss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>UpdtCom</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFNdogoScreen;