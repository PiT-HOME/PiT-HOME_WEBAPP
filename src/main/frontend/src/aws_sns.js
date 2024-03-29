const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'AKIAVKLB5GC7KQLEWIF2',
    secretAccessKey: '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',
    region: 'ap-northeast-2'
});


const sns = new AWS.SNS();

const params = {
    TopicArn: 'arn:aws:sns:ap-northeast-2:365814427838:ddos_alarm'
};

sns.listSubscriptionsByTopic(params, (err, data) => {
    if (err) console.error('Error:', err);
    else {
        data.Subscriptions.forEach(subscription => {
            console.log('Subscription:', subscription);
        });
    }
});
