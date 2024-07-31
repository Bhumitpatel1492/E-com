import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { addOrder } from '../redux/actions/Actions';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import { AlertView } from '../components/AlertView/Alert';



const Checkout = () => {
    const cartData = useSelector(state => state.reducers);
    const addressList = useSelector(state => state.AddaddressReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [selectedAddress, setSelectedAddress] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const getTotal = () => {
        let total = 0;
        cartData.map((item) => {
            total = total + item.price

        })
        return total;
    }

    const handlePlaceOrder = () => {
        if (selectedAddress == '') {
            setShowAlert(true);
        } else {
            var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_TvepvKiP66mh1J', // Your api key
                amount: 1000,
                name: 'Daily Deals',
                prefill: {
                    email: 'dailydeals@razorpay.com',
                    contact: '6351347992',
                    name: 'Razorpay Software'
                },
                theme: { color: '#F37254' }
            };

            RazorpayCheckout.open(options)
                .then((data) => {
                    if (data?.razorpay_payment_id) {
                        console.log('data------>', data);

                        dispatch(addOrder({ items: cartData, address: selectedAddress, total: getTotal() }));
                        navigation.navigate('OrderSuccess', {
                            status: 'success'
                        });
                    } else {
                        dispatch(addOrder({ items: cartData, address: selectedAddress, total: getTotal() }));
                        navigation.navigate('OrderSuccess', {
                            status: 'success'
                        });
                    }
                })
                .catch((error) => {
                    console.log('error------->', error.code);
                    console.log('err0r--2222--->', error.description);
                    if (error.code === undefined || NaN || "") {
                        console.log('check --- if --- condition');
                        dispatch(addOrder({ items: cartData, address: selectedAddress, total: getTotal() }));
                        navigation.navigate('OrderSuccess', {
                            status: 'success'
                        });
                    } else {
                        navigation.navigate('OrderSuccess', {
                            status: 'fail'
                        });
                    }

                });
        }


    };


    return (
        <View style={style.container}>
            <View>
                {showAlert == true ? (
                    <AlertView
                        showAlert={showAlert}
                        onDismiss={() => setShowAlert(false)}
                        // title="Alert"
                        message="Please select an address"
                        showCancelButton={false} // Set this to true if you want to show a cancel button
                        cancelButtonColor="#DD6B55" // Customize the cancel button color if needed
                        onConfirmPressed={() => setShowAlert(false)} // Callback when the confirm button is pressed
                    />
                ) : (null)

                }
                <FlatList
                    data={cartData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={style.mainview}>
                                <Image source={item?.image} style={style.img} />
                                <View style={{ padding: 10, }}>
                                    <Text style={{ fontSize: 18 }}>{item?.name}</Text>
                                    <Text style={{ marginTop: 10 }} >{"Price: " + '₹' + item?.price}</Text>

                                </View>
                                <View style={style.subview}>
                                    <Text>total :</Text>
                                    <Text>{'₹' + getTotal()}</Text>
                                </View>
                            </View>
                        )
                    }
                    }
                />
            </View>
            <View>
                <FlatList data={addressList} renderItem={({ item, index }) => {
                    return (
                        <View style={style.addressview}>
                            <View>
                                <Text style={style.txt}>{"City:" + item?.cityName}</Text>
                                <Text style={style.txt}>{"Building:" + item?.buildingName}</Text>
                                <Text style={[style.txt, { marginBottom: 10 }]}>{"Pincode:" + item?.pincode}</Text>
                            </View>
                            <TouchableOpacity style={style.addressbtn} onPress={() => {
                                setSelectedAddress('City:' + item?.cityName + ' Building:' + item?.buildingName + ' Pincode:' + item?.pincode)
                            }} >
                                <Text>Select address</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }} />
            </View>
            {
                addressList?.length == 0 ? (
                    <TouchableOpacity onPress={() => navigation.navigate('MyAddress')}>
                        <Text style={style.addtxt}>Add Address</Text>
                        <Text style={style.selecttxt}>{'Please Add Address'}</Text>
                    </TouchableOpacity>
                ) : (
                    <View>
                        <Text style={style.addtxt}>Select Address</Text>
                        <Text style={style.selecttxt}>{selectedAddress == '' ? 'Please Select Address From Above List' : selectedAddress}</Text>
                    </View>
                )
            }

            <View >
                <TouchableOpacity style={style.loginButton} onPress={() => handlePlaceOrder()} >
                    <Text style={style.loginButtonText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Checkout


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainview: {
        width: '80%',
        height: 110,
        flexDirection: 'row',
        marginTop: 10,
        // backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 42
    },
    img: {
        height: 70,
        width: 70,
        marginRight: 10
    },
    subview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingLeft: 20,
        paddingRight: 20,
        // borderTopWidth: 0.5,
        borderTopColor: '#8c8c8c',
        marginTop: 30,
        height: 50
    },
    addressview: {
        width: '100%',
        borderWidth: 0.2,
        borderColor: "#8c8c8c",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    addressbtn: {
        borderWidth: 0.2,
        padding: 7,
        marginRight: 20
    },
    txt: {
        marginLeft: 20
    },
    addtxt: {
        margin: 20,
        fontSize: 18
    },
    selecttxt: {
        fontSize: 18,
        marginLeft: 20
    },
    loginButton: {
        marginTop: 16,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        width: '50%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});