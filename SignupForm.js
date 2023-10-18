import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = ({ navigation }) => {

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        // fullname: Yup.string().required().min(2, 'A fullname is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least 8 characters'),
    })
    return (
        <View style={styles.wrapper}>

            <View style={styles.para}>
                <Text style={styles.paraText}>Sign up to see photos and videos</Text>
                <Text style={styles.paraText}>from your friends.</Text>
            </View>

            <Formik
                initialValues={{ email: '', fullname: '', username: '', password: '' }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >

                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField,
                        {
                            borderColor:
                                values.email.length < 1 || Validator.validate(values.email)
                                    ? '#ccc'
                                    : 'red',
                        },
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Phone Number or Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        {/* <View style={[styles.inputField,
                        {
                            borderColor:
                                1 > values.password.length || values.password.length > 2
                                    ? '#ccc'
                                    : 'red',
                        },
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Full Name'
                                autoFocus={true}
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                value={values.fullname}
                            />
                        </View> */}

                        <View style={[styles.inputField,
                        {
                            borderColor:
                                1 > values.username.length || values.username.length >= 2
                                    ? '#ccc'
                                    : 'red',
                        },
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View style={[styles.inputField,
                        {
                            borderColor:
                                1 > values.password.length || values.password.length > 7
                                    ? '#ccc'
                                    : 'red',
                        },
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.footer}>
                            <Text style={styles.paraText}>By signing up, you agree to our </Text>
                            <Text style={styles.paraText}>Terms & Privacy Policy.</Text>
                        </View>

                        <View style={styles.loginContainer}>
                            <Text>Have an account?</Text>
                            <TouchableOpacity onPress={( )=> navigation.goBack('LoginScreen')}>
                                <Text style={styles.loginText}> Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    para: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginTop: -50,
    },
    paraText: {
        fontWeight: '500',
        fontSize: 17,
    },
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },

    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 5,
        marginTop: 20,
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    loginContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
    loginText: {
        color: '#6BB0F5',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
})

export default SignupForm