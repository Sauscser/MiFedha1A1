import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      id: string,
      itemName: string,
  
      buyerContact: string,
      
      buyerName:string,
   
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      lonBala:number,
      description: string,
      status: string,
      advregnu: string,
      createdAt:string,
      updatedAt:string,
        
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      id,
      itemName,
     
      buyerContact,
      
      buyerName,
   
      amountSold,
      amountexpectedBack,
      amountRepaid,
      repaymentPeriod,
      lonBala,
      description,
      status,
      advregnu,
      createdAt,
      updatedAt,
   }} = props ;
   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("VwMyPal2BizLoaneesDtld", {id})
   }

   const VwRpayments = () => {
      navigation.navigate ("CredP2BReceived", {id})
   }

   const Blacklist = () => {
      navigation.navigate ("BLCredPal2Biz", {id})
   }

   
   
    return (
        <View style = {{marginTop:"10%"}}>              
            
            <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Buyer Name: {buyerName}               
                    </Text>
                  
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {id}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Buyer Contact: {buyerContact}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/* interest*/}
                       Loan Balance(Ksh): {lonBala.toFixed(2)}                    
                    </Text> 

                    </Pressable>

                    <View style = {styles.viewForPressables2}>
                    <View>
                    <Pressable
                      onPress={VwRpayments}
                      style = {styles.loanFriendButton}
                      >            
                        <Text>ViewRpymnts</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={Blacklist}
                      style = {styles.loanFriendButton}>            
                        <Text>BlackList</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
        </View>
    );
}; 

export default CredSlrCvLnStts