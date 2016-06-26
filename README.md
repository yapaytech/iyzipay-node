# iyzipay-node

[![Build Status](https://travis-ci.org/iyzico/iyzipay-node.svg?branch=master)](https://travis-ci.org/iyzico/iyzipay-node)
[![NPM version](https://img.shields.io/npm/v/iyzipay.svg)](https://www.npmjs.com/package/iyzipay)

You can sign up for an iyzico account at [https://iyzico.com](https://iyzico.com)

# Installation

`npm install iyzipay`

# Usage

### Initialization

```js
var Iyzipay = require('iyzipay');

var iyzipay = new Iyzipay({
    apiKey: 'your api key',
    secretKey: 'your secret key',
    uri: 'https://sandbox-api.iyzipay.com'
});
```

As you can see, credentials information provided while creating new instance of Iyzipay class.
If you do not provide iyzipay credentials, default values will be fetched from environment variables
by following names.

```js
   IYZIPAY_URI
   IYZIPAY_API_KEY
   IYZIPAY_SECRET_KEY
```

In other words, you can initialize Iyzipay object like following:

```js
var iyzipay = new Iyzipay();
```

### Sample Usage

```js
var Iyzipay = require('iyzipay');

var iyzipay = new Iyzipay({
    apiKey: 'your api key',
    secretKey: 'your secret key',
    uri: 'https://sandbox-api.iyzipay.com'
});

var paymentAuth = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789',
    price: '1.0',
    paidPrice: '1.1',
    currency: Iyzipay.CURRENCY.TRY,
    installment: 1,
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    basketId: 'B67832',
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
        cardHolderName: 'John Doe',
        cardNumber: '5528790000000008',
        expireYear: '2030',
        expireMonth: '12',
        cvc: '123',
        registerCard: 0
    },
    buyer: {
        id: 'BY789',
        name: 'John',
        surname: 'Doe',
        identityNumber: '74300864791',
        email: 'email@email.com',
        gsmNumber: '+905350000000',
        registrationDate: '2013-04-21 15:12:09',
        lastLoginDate: '2015-10-05 12:43:35',
        registrationAddress: 'Address',
        city: 'Istanbul',
        country: 'Turkey',
        zipCode: '34732',
        ip: '85.34.78.112'
    },
    shippingAddress: {
        address: 'Address',
        zipCode: '34742',
        contactName: 'Jane Doe',
        city: 'Istanbul',
        country: 'Turkey'
    },
    billingAddress: {
        address: 'Address',
        zipCode: '34742',
        contactName: 'Jane Doe',
        city: 'Istanbul',
        country: 'Turkey'
    },
    basketItems: [
        {
            id: 'BI101',
            price: '0.3',
            name: 'Binocular',
            category1: 'Collectibles',
            category2: 'Accessories',
            itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL
        },
        {
            id: 'BI102',
            price: '0.5',
            name: 'Game code',
            category1: 'Game',
            category2: 'Online Game Items',
            itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL
        },
        {
            id: 'BI103',
            price: '0.2',
            name: 'Usb',
            category1: 'Electronics',
            category2: 'Usb / Cable',
            itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL
        }
    ]
};

iyzipay.paymentAuth.create(paymentAuth, function (err, result) {
    console.log(err, result);
    done();
});
```

You can see further examples in `test/samples` folder, and run them by `npm run-script samples`

### Testing

You need to have [mocha](https://mochajs.org/) installed on your machine in order to run tests.

`npm test`

# Available Resources and Methods

* approval
    * [`create({params})`](#create-approval)

* basicBkm
    * [`retrieve({params})`](#retrieve-basicbkm)

* basicBkmInitialize
    * [`create({params})`](#create-basicbkminitialize)

* basicPayment
    * [`create({params})`](#create-basicpayment)

* basicPaymentPostAuth
    * [`create({params})`](#create-basicpaymentpostauth)

* basicPaymentPreAuth
    * [`create({params})`](#create-basicpaymentpreauth)

* basicThreedsInitialize
    * [`create({params})`](#create-basicthreedsinitialize)

* basicThreedsInitializePreAuth
    * [`create({params})`](#create-basicthreedsinitializepreauth)

* basicThreedsPayment
    * [`create({params})`](#create-basicthreedspayment)

* binNumber
    * [`retrieve({params})`](#retrieve-binnumber)

* bkm
    * [`retrieve({params})`](#retrieve-bkmauth)

* bkmInitialize
    * [`create({params})`](#create-bkminitialize)

* bouncedBankTransferList
    * [`retrieve({params})`](#retrieve-bouncedbanktransferlist)

* cancel
    * [`create({params})`](#create-cancel)

* card
    * [`create({params})`](#create-card)
    * [`delete({params})`](#delete-card)

* cardList
    * [`retrieve({params})`](#retrieve-cardlist)

* checkoutForm
    * [`retrieve({params})`](#retrieve-checkoutform)

* checkoutFormInitialize
    * [`create({params})`](#create-checkoutforminitialize)

* checkoutFormInitializePreAuth
    * [`create({params})`](#create-checkoutforminitializepreauth)

* crossBookingFromSubMerchant
    * [`create({params})`](#create-crossbookingfromsubmerchant)

* crossBookingToSubMerchant
    * [`create({params})`](#create-crossbookingtosubmerchant)

* disapproval
    * [`create({params})`](#create-disapproval)

* installmentHtml
    * [`retrieve({params})`](#retrieve-installmenthtml)

* installmentInfo
    * [`retrieve({params})`](#retrieve-installmentinfo)

* payment
    * [`create({params})`](#create-payment)
    * [`retrieve({params})`](#retrieve-payment)

* paymentPostAuth
    * [`create({params})`](#create-paymentpostauth)

* paymentPreAuth
    * [`create({params})`](#create-paymentpreauth)
    * [`retrieve({params})`](#retrieve-paymentpreauth)

* payoutCompletedTransactionList
    * [`retrieve({params})`](#retrieve-payoutcompletedtransactionlist)

* peccoInitialize
    * [`create({params})`](#create-peccoinitialize)

* peccoPayment
    * [`create({params})`](#create-peccopayment)

* refund
    * [`create({params})`](#create-refund)

* refundChargedFromMerchant
    * [`create({params})`](#create-refundchargedfrommerchant)

* subMerchant
    * [`create({params})`](#create-submerchant)
    * [`update({params})`](#update-submerchant)
    * [`retrieve({params})`](#retrieve-submerchant)

* threedsInitialize
    * [`create({params})`](#create-threedsinitialize)

* threedsInitializePreAuth
    * [`create({params})`](#create-threedsinitializepreauth)

* threedsPayment
    * [`create({params})`](#create-threedspayment)
    * [`retrieve({params})`](#retrieve-threedspayment)

# Author

Originally by [Huseyin Babal](https://github.com/huseyinbabal) (huseyinbabal88@gmail.com). Now officially maintained by iyzico.