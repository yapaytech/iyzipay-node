var should = require('should'),
    assert = require('assert'),
    Iyzipay = require('../lib/Iyzipay'),
    TestUtils = require('../test/utils/TestUtils');

describe('Iyzipay API Test', function () {

    var iyzipay;

    before(function (done) {
        iyzipay = new Iyzipay();
        done();
    });

    describe('ApiTest', function () {

        it('should test api', function (done) {
            iyzipay.apiTest.retrieve({}, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Approval', function () {

        it('should approve payment item', function (done) {
            iyzipay.approval.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: "123456789",
                paymentTransactionId: "1"
            }, function (err, result) {
                console.log(err, result);
                done();
            })
        });
    });

    describe('DisApproval', function () {

        it('should disapprove payment item', function (done) {
            iyzipay.disapproval.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                paymentTransactionId: '1'
            }, function (err, result) {
                console.log(err, result);
                done();
            })
        })
    });

    describe('BinNumber', function () {

        it('should retrieve bin number', function (done) {
            iyzipay.binNumber.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456',
                binNumber: '454671'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Bkm', function () {

        it('should initialize bkm express', function (done) {
            var bkmInitRequest = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: '1.0',
                basketId: 'B67832',
                paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                callbackUrl: 'https://www.merchant.com/callback',

                buyer: {
                    id: 'BY789',
                    name: 'John',
                    surname: 'Doe',
                    gsmNumber: '+905350000000',
                    email: 'email@email.com',
                    identityNumber: '74300864791',
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: 'Address',
                    ip: '85.34.78.112',
                    city: 'Istanbul',
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: 'BI101',
                        name: 'Binocular',
                        category1: 'Collectibles',
                        category2: 'Accessories',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.3',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.27'
                    },
                    {
                        id: 'BI102',
                        name: 'Game code',
                        category1: 'Game',
                        category2: 'Online Game Items',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                        price: '0.5',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.42'
                    },
                    {
                        id: 'BI103',
                        name: 'Usb',
                        category1: 'Electronics',
                        category2: 'Usb / Cable',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.2',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.18'
                    }
                ]
            };

            iyzipay.bkmInitialize.create(bkmInitRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve bkm auth', function (done) {
            iyzipay.bkm.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                token: 'token'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        })
    });

    describe('Cancel', function () {

        it('should cancel payment', function (done) {
            iyzipay.cancel.create({
                conversationId: '123456789',
                locale: Iyzipay.LOCALE.TR,
                paymentId: '1',
                ip: '85.34.78.112'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Card', function () {

        it('should create user and add card', function (done) {
            iyzipay.card.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                email: 'email@email.com',
                externalId: 'external id',
                card: {
                    cardAlias: 'card alias',
                    cardHolderName: 'John Doe',
                    cardNumber: '5528790000000008',
                    expireMonth: '12',
                    expireYear: '2030'
                }
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should create card', function (done) {
            iyzipay.card.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                cardUserKey: 'card user key',
                externalId: 'external id',
                card: {
                    cardAlias: 'card alias',
                    cardHolderName: 'John Doe',
                    cardNumber: '5528790000000008',
                    expireMonth: '12',
                    expireYear: '2030'
                }
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should delete card', function (done) {
            iyzipay.card.delete({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                cardUserKey: 'card user key',
                cardToken: 'card token'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve cards', function (done) {
            iyzipay.cardList.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                cardUserKey: 'card user key'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        })
    });

    describe('Checkout Form', function () {

        it('should initialize checkout form', function (done) {
            var checkoutFormInitRequest = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: '1.0',
                paidPrice: '1.2',
                currency: Iyzipay.CURRENCY.TRY,
                basketId: 'B67832',
                paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                callbackUrl: 'https://www.merchant.com/callback',
                enabledInstallments: [1, 2, 3, 6, 9],

                buyer: {
                    id: 'BY789',
                    name: 'John',
                    surname: 'Doe',
                    gsmNumber: '+905350000000',
                    email: 'email@email.com',
                    identityNumber: '74300864791',
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: 'Address',
                    ip: '85.34.78.112',
                    city: 'Istanbul',
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: 'BI101',
                        name: 'Binocular',
                        category1: 'Collectibles',
                        category2: 'Accessories',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.3',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.27'
                    },
                    {
                        id: 'BI102',
                        name: 'Game code',
                        category1: 'Game',
                        category2: 'Online Game Items',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                        price: '0.5',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.42'
                    },
                    {
                        id: 'BI103',
                        name: 'Usb',
                        category1: 'Electronics',
                        category2: 'Usb / Cable',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.2',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.18'
                    }
                ]
            };

            iyzipay.checkoutFormInitialize.create(checkoutFormInitRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve checkout form auth', function (done) {
            iyzipay.checkoutForm.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                token: 'token'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        })
    });

    describe('Installment', function () {

        it('should retrieve installment info', function (done) {
            iyzipay.installmentInfo.retrieve({
                conversationId: '123456789',
                locale: Iyzipay.LOCALE.TR,
                binNumber: '454671',
                price: '1.0'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Payment', function () {

        it('should create payment', function (done) {
            var payment = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: '1.0',
                paidPrice: '1.1',
                currency: Iyzipay.CURRENCY.TRY,
                installment: '1',
                basketId: 'B67832',
                paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,

                paymentCard: {
                    cardHolderName: 'John Doe',
                    cardNumber: '5528790000000008',
                    expireMonth: '12',
                    expireYear: '2030',
                    cvc: '123',
                    registerCard: '0'
                },
                buyer: {
                    id: 'BY789',
                    name: 'John',
                    surname: 'Doe',
                    gsmNumber: '+905350000000',
                    email: 'email@email.com',
                    identityNumber: '74300864791',
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: 'Address',
                    ip: '85.34.78.112',
                    city: 'Istanbul',
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: 'BI101',
                        name: 'Binocular',
                        category1: 'Collectibles',
                        category2: 'Accessories',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.3'
                    },
                    {
                        id: 'BI102',
                        name: 'Game code',
                        category1: 'Game',
                        category2: 'Online Game Items',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                        price: '0.5'
                    },
                    {
                        id: 'BI103',
                        name: 'Usb',
                        category1: 'Electronics',
                        category2: 'Usb / Cable',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.2'
                    }
                ]
            };

            iyzipay.payment.create(payment, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should create marketplace payment', function (done) {
            var payment = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: '1.0',
                paidPrice: '1.1',
                currency: Iyzipay.CURRENCY.TRY,
                installment: '1',
                basketId: 'B67832',
                paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,

                paymentCard: {
                    cardHolderName: 'John Doe',
                    cardNumber: '5528790000000008',
                    expireMonth: '12',
                    expireYear: '2030',
                    cvc: '123',
                    registerCard: '0'
                },
                buyer: {
                    id: 'BY789',
                    name: 'John',
                    surname: 'Doe',
                    gsmNumber: '+905350000000',
                    email: 'email@email.com',
                    identityNumber: '74300864791',
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: 'Address',
                    ip: '85.34.78.112',
                    city: 'Istanbul',
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: 'BI101',
                        name: 'Binocular',
                        category1: 'Collectibles',
                        category2: 'Accessories',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.3',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.27'
                    },
                    {
                        id: 'BI102',
                        name: 'Game code',
                        category1: 'Game',
                        category2: 'Online Game Items',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                        price: '0.5',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.42'
                    },
                    {
                        id: 'BI103',
                        name: 'Usb',
                        category1: 'Electronics',
                        category2: 'Usb / Cable',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.2',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.18'
                    }
                ]
            };

            iyzipay.payment.create(payment, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve payment', function (done) {
            iyzipay.payment.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                paymentId: '1',
                paymentConversationId: '123456789'
            }, function (err, result) {
                console.log(err, result);
                done();
            })
        });

    });

    describe('Pecco', function () {

        it('should initialize pecco', function (done) {
            var peccoInitRequest = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: '1.0',
                paidPrice: '1.2',
                currency: Iyzipay.CURRENCY.IRR,
                basketId: 'B67832',
                paymentGroup: "PRODUCT",
                callbackUrl: 'https://www.merchant.com/callback',

                buyer: {
                    id: 'BY789',
                    name: 'John',
                    surname: 'Doe',
                    gsmNumber: '+905350000000',
                    email: 'email@email.com',
                    identityNumber: '74300864791',
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: 'Address',
                    ip: '85.34.78.112',
                    city: 'Istanbul',
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: 'BI101',
                        name: 'Binocular',
                        category1: 'Collectibles',
                        category2: 'Accessories',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.3',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.27'
                    },
                    {
                        id: 'BI102',
                        name: 'Game code',
                        category1: 'Game',
                        category2: 'Online Game Items',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                        price: '0.5',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.42'
                    },
                    {
                        id: 'BI103',
                        name: 'Usb',
                        category1: 'Electronics',
                        category2: 'Usb / Cable',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.2',
                        subMerchantKey: 'sub merchant key',
                        subMerchantPrice: '0.18'
                    }
                ]
            };

            iyzipay.peccoInitialize.create(peccoInitRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should auth pecco payment', function (done) {
            iyzipay.peccoPayment.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                token: 'token'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        })
    });

    describe('Refund', function () {

        it('should refund', function (done) {
            iyzipay.refund.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                paymentTransactionId: '1',
                price: '0.1',
                currency: Iyzipay.CURRENCY.TRY,
                ip: '85.34.78.112'
            }, function (err, result) {
                console.log(err, result);
                done();
            })
        });
    });

    describe('Retrieve Transactions Sample', function () {

        it('should retrieve payout completed transactions', function (done) {
            iyzipay.payoutCompletedTransactionList.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                date: '2016-01-22 19:13:00'
            }, function (err, result) {
                console.log(err, result);
                done();
            })
        });

        it('should retrieve bounced bank transfers', function (done) {
            iyzipay.bouncedBankTransferList.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                date: '2016-01-22 19:13:00'
            }, function (err, result) {
                console.log(err, result);
                done();
            })
        });
    });

    describe('Sub Merchant', function () {

        it('should create personal sub merchant', function (done) {
            iyzipay.subMerchant.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantExternalId: 'B49224',
                subMerchantType: Iyzipay.SUB_MERCHANT_TYPE.PERSONAL,
                address: 'Address',
                contactName: 'John',
                contactSurname: 'Doe',
                email: 'email@submerchantemail.com',
                gsmNumber: '+905350000000',
                name: 'John\'s market',
                iban: 'TR180006200119000006672315',
                identityNumber: '1234567890',
                currency: Iyzipay.CURRENCY.TRY
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should create private sub merchant', function (done) {
            iyzipay.subMerchant.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantExternalId: 'B49224',
                subMerchantType: Iyzipay.SUB_MERCHANT_TYPE.PRIVATE_COMPANY,
                address: 'Address',
                taxOffice: 'Tax office',
                legalCompanyTitle: 'John Doe inc',
                email: 'email@submerchantemail.com',
                gsmNumber: '+905350000000',
                name: 'John\'s market',
                iban: 'TR180006200119000006672315',
                identityNumber: '1234567890',
                currency: Iyzipay.CURRENCY.TRY
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should create limited company sub merchant', function (done) {
            iyzipay.subMerchant.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantExternalId: 'B49224',
                subMerchantType: Iyzipay.SUB_MERCHANT_TYPE.LIMITED_OR_JOINT_STOCK_COMPANY,
                address: 'Address',
                taxOffice: 'Tax office',
                taxNumber: '9261877',
                legalCompanyTitle: 'John Doe inc',
                email: 'email@submerchantemail.com',
                gsmNumber: '+905350000000',
                name: 'John\'s market',
                iban: 'TR180006200119000006672315',
                currency: Iyzipay.CURRENCY.TRY
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should update personal sub merchant', function (done) {
            iyzipay.subMerchant.update({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantKey: 'sub merchant key',
                address: 'Address',
                contactName: 'John',
                contactSurname: 'Doe',
                email: 'email@submerchantemail.com',
                gsmNumber: '+905350000000',
                name: 'John\'s market',
                iban: 'TR180006200119000006672315',
                identityNumber: '1234567890',
                currency: Iyzipay.CURRENCY.TRY
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should update private sub merchant', function (done) {
            iyzipay.subMerchant.update({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantKey: 'sub merchant key',
                address: 'Address',
                taxOffice: 'Tax office',
                legalCompanyTitle: 'John Doe inc',
                email: 'email@submerchantemail.com',
                gsmNumber: '+905350000000',
                name: 'John\'s market',
                iban: 'TR180006200119000006672315',
                identityNumber: '1234567890',
                currency: Iyzipay.CURRENCY.TRY
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should update limited company sub merchant', function (done) {
            iyzipay.subMerchant.update({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantKey: 'sub merchant key',
                address: 'Address',
                taxOffice: 'Tax office',
                taxNumber: '9261877',
                legalCompanyTitle: 'John Doe inc',
                email: 'email@submerchantemail.com',
                gsmNumber: '+905350000000',
                name: 'John\'s market',
                iban: 'TR180006200119000006672315',
                currency: Iyzipay.CURRENCY.TRY
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve sub merchant', function (done) {
            iyzipay.subMerchant.retrieve({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                subMerchantExternalId: 'AS49224'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Threeds', function () {

        it('should initialize threeds payment', function (done) {
            var threedsRequest = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: '1.0',
                paidPrice: '1.1',
                currency: Iyzipay.CURRENCY.TRY,
                installment: '1',
                basketId: 'B67832',
                paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
                callbackUrl: 'https://www.merchant.com/callback',

                paymentCard: {
                    cardHolderName: 'John Doe',
                    cardNumber: '5528790000000008',
                    expireMonth: '12',
                    expireYear: '2030',
                    cvc: '123',
                    registerCard: '0'
                },
                buyer: {
                    id: 'BY789',
                    name: 'John',
                    surname: 'Doe',
                    gsmNumber: '+905350000000',
                    email: 'email@email.com',
                    identityNumber: '74300864791',
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: 'Address',
                    ip: '85.34.78.112',
                    city: 'Istanbul',
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Address',
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: 'BI101',
                        name: 'Binocular',
                        category1: 'Collectibles',
                        category2: 'Accessories',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.3'
                    },
                    {
                        id: 'BI102',
                        name: 'Game code',
                        category1: 'Game',
                        category2: 'Online Game Items',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                        price: '0.5'
                    },
                    {
                        id: 'BI103',
                        name: 'Usb',
                        category1: 'Electronics',
                        category2: 'Usb / Cable',
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: '0.2'
                    }
                ]
            };

            iyzipay.threedsInitialize.create(threedsRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should create threeds payment', function (done) {
            iyzipay.threedsPayment.create({
                conversationId: '123456789',
                locale: Iyzipay.LOCALE.TR,
                paymentId: '1',
                conversationData: 'conversation data'
            }, function (err, result) {
                console.log(err, result);
                done();
            });
        });

    });

});