import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 1,
    
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },

  loanTitleView: {
    backgroundColor: 'white',
    marginHorizontal: "15%",    
    height: "6%",
    borderRadius: 5,
    marginTop: "6%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    
  },

  sendLoanView: {
    backgroundColor: '#72ebd8',
    marginHorizontal: "5%",
    height: "15%",
    borderRadius: 20,
    marginTop: "2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    
  },

  sendLoanText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "10%",
    marginRight: "10%"
  },
  sendLoanButton: {
    backgroundColor: 'white',
    marginHorizontal: "15%",    
    height: "4%",
    borderRadius: 5,
    marginTop: "5%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: "95%",
  },
  sendLoanButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  sendLoanInput: {
    backgroundColor: 'white',
    width:"95%",
    height: "60%",
    borderRadius: 5,
    marginTop: "2%",
    
    
  },

  
 
});
export default styles;