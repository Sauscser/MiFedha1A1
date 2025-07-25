import React from 'react';
import {View, Text,   ScrollView} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      name: string,
      balance: number,  
      loanStatus: string,
      acStatus: string,
      blStatus: string, 
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      ttlNonLonsRecSM: number,
      ttlNonLonsSentSM:number,
      benefitsAmount:number,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm:number,
    p2pchmBenefits:number,
      MaxTymsBL: number,
      
      
    

      
    
    
      TtlActvLonsTmsLnrCov: number,
      TtlActvLonsTmsLneeCov: number,
      TtlActvLonsAmtLnrCov: number,
      TtlActvLonsAmtLneeCov: number,
      
      TtlBLLonsTmsLneeCov: number,
      
      TtlBLLonsAmtLneeCov: number,
      TtlClrdLonsTmsLnrCov: number,
      TtlClrdLonsTmsLneeCov: number,
      TtlClrdLonsAmtLnrCov: number,
      TtlClrdLonsAmtLneeCov: number,

      TtlBLLonsTmsLnrCov: number,
      TtlBLLonsAmtLnrCov: number,
      TtlBLLonsTmsLnrNonCov: number,
      TtlBLLonsTmsLneeNonCov: number,
      
      TtlActvLonsTmsLneeChmCov: number,
      TtlActvLonsAmtLneeChmCov: number,
      TtlBLLonsTmsLneeChmCov: number,
      TtlBLLonsAmtLneeChmCov: number,
      TtlClrdLonsTmsLneeChmCov: number,
      TtlClrdLonsAmtLneeChmCov: number,
         
      TtlActvLonsTmsSllrCov: number,
      TtlActvLonsTmsByrCov: number,
      TtlActvLonsAmtSllrCov: number,
      TtlActvLonsAmtByrCov: number,
      TtlBLLonsTmsSllrCov: number,
      TtlBLLonsTmsByrCov: number,
      TtlBLLonsAmtSllrCov: number,
      TtlBLLonsAmtByrCov: number,
      TtlClrdLonsTmsSllrCov: number,
      TtlClrdLonsTmsByrCov: number,
      TtlClrdLonsAmtSllrCov: number,
      TtlClrdLonsAmtByrCov: number,
      
    
      TtlActvLonsTmsLnrNonCov: number,
      TtlActvLonsTmsLneeNonCov: number,
      TtlActvLonsAmtLnrNonCov: number,
      TtlActvLonsAmtLneeNonCov: number,
      
      TtlBLLonsAmtLnrNonCov: number,
      TtlBLLonsAmtLneeNonCov: number,
      TtlClrdLonsTmsLnrNonCov: number,
      TtlClrdLonsTmsLneeNonCov: number,
      TtlClrdLonsAmtLnrNonCov: number,
      TtlClrdLonsAmtLneeNonCov: number,
      
      TtlActvLonsTmsLneeChmNonCov: number,
      TtlActvLonsAmtLneeChmNonCov: number,
      TtlBLLonsTmsLneeChmNonCov: number,
      TtlBLLonsAmtLneeChmNonCov: number,
      TtlClrdLonsTmsLneeChmNonCov: number,
      TtlClrdLonsAmtLneeChmNonCov: number,
      
      TtlActvLonsTmsSllrNonCov: number,
      TtlActvLonsTmsByrNonCov: number,
      TtlActvLonsAmtSllrNonCov: number,
      TtlActvLonsAmtByrNonCov: number,
      TtlBLLonsTmsSllrNonCov: number,
      TtlBLLonsTmsByrNonCov: number,
      TtlBLLonsAmtSllrNonCov: number,
      TtlBLLonsAmtByrNonCov: number,
      TtlClrdLonsTmsSllrNonCov: number,
      TtlClrdLonsTmsByrNonCov: number,
      TtlClrdLonsAmtSllrNonCov: number,
      TtlClrdLonsAmtByrNonCov: number,
    
      

        
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
         name,
         balance,   
         ttlDpstSM,
         TtlWthdrwnSM,
       
         benefitsAmount,
         p2pchmBenefits,
         TtlActvLonsTmsLnrCov,
         TtlActvLonsTmsLneeCov,
         TtlActvLonsAmtLnrCov,
         TtlActvLonsAmtLneeCov,
         
         TtlBLLonsTmsLneeCov,
         
         TtlBLLonsAmtLneeCov,
         TtlClrdLonsTmsLnrCov,
         TtlClrdLonsTmsLneeCov,
         TtlClrdLonsAmtLnrCov,
         TtlClrdLonsAmtLneeCov,
         
         TtlActvLonsTmsLneeChmCov,
         TtlActvLonsAmtLneeChmCov,
         TtlBLLonsTmsLneeChmCov,
         TtlBLLonsAmtLneeChmCov,
         TtlClrdLonsTmsLneeChmCov,
         TtlClrdLonsAmtLneeChmCov,
            
         TtlActvLonsTmsSllrCov,
         TtlActvLonsTmsByrCov,
         TtlActvLonsAmtSllrCov,
         TtlActvLonsAmtByrCov,
         TtlBLLonsTmsSllrCov,
         TtlBLLonsTmsByrCov,
         TtlBLLonsAmtSllrCov,
         TtlBLLonsAmtByrCov,
         TtlClrdLonsTmsSllrCov,
         TtlClrdLonsTmsByrCov,
         TtlClrdLonsAmtSllrCov,
         TtlClrdLonsAmtByrCov,


         TtlBLLonsTmsLnrCov,
         TtlBLLonsAmtLnrCov,
         TtlBLLonsTmsLnrNonCov,
         TtlBLLonsTmsLneeNonCov,
       
         TtlActvLonsTmsLnrNonCov,
         TtlActvLonsTmsLneeNonCov,
         TtlActvLonsAmtLnrNonCov,
         TtlActvLonsAmtLneeNonCov,
         
         TtlBLLonsAmtLnrNonCov,
         TtlBLLonsAmtLneeNonCov,
         TtlClrdLonsTmsLnrNonCov,
         TtlClrdLonsTmsLneeNonCov,
         TtlClrdLonsAmtLnrNonCov,
         TtlClrdLonsAmtLneeNonCov,
         
         TtlActvLonsTmsLneeChmNonCov,
         TtlActvLonsAmtLneeChmNonCov,
         TtlBLLonsTmsLneeChmNonCov,
         TtlBLLonsAmtLneeChmNonCov,
         TtlClrdLonsTmsLneeChmNonCov,
         TtlClrdLonsAmtLneeChmNonCov,
         
         TtlActvLonsTmsSllrNonCov,
         TtlActvLonsTmsByrNonCov,
         TtlActvLonsAmtSllrNonCov,
         TtlActvLonsAmtByrNonCov,
         TtlBLLonsTmsSllrNonCov,
         TtlBLLonsTmsByrNonCov,
         TtlBLLonsAmtSllrNonCov,
         TtlBLLonsAmtByrNonCov,
         TtlClrdLonsTmsSllrNonCov,
         TtlClrdLonsTmsByrNonCov,
         TtlClrdLonsAmtSllrNonCov,
         TtlClrdLonsAmtByrNonCov,
       
         ttlNonLonsRecSM,
         ttlNonLonsSentSM,
       
         ttlNonLonsRecChm,
         ttlNonLonsSentChm,
       
         MaxTymsBL,
        
       
         loanStatus,
         acStatus,
         blStatus,
   }} = props ;

 
    return (
        <View style = {styles.pageContainer}>              
            
            
            <View style={styles.card}>         
            <Text style={styles.prodInfo}><Text style={styles.label}>Ac Balance:</Text> KES {balance.toFixed(2)}</Text>
            <Text style={styles.prodInfo}><Text style={styles.label}>Times I am Black-Listed: </Text> {MaxTymsBL}</Text>
            <Text style={styles.prodInfo}><Text style={styles.label}>Secured Benefits Pooled:</Text> KES {benefitsAmount.toFixed(2)}</Text>
              
            <Text style={styles.prodDesc}>Cash Flow  </Text>
    
            <Text style={styles.prodInfo}><Text style={styles.label}>Total Deposits:</Text> KES {ttlDpstSM.toFixed(2)}</Text>
            <Text style={styles.prodInfo}><Text style={styles.label}>Total Withdrawn:</Text> KES {TtlWthdrwnSM}</Text>

        </View>
                
        </View>
    );
}; 

export default SMCvLnStts