// const express = require('express');
// const bodyParser = require('body-parser');
//
// const app = express();
// const port = 8080;
//
// app.use(bodyParser.json());
//
// app.post('/Ids', (req, res) => {
//     console.log('Received confirmation message:', req.body);
//     // 여기에서 확인 메시지를 처리하고, 구독을 활성화하는 로직을 작성하세요.
//     // 예를 들어, 구독을 확인하고 활성화할 수 있는 AWS SDK 메서드를 호출합니다.
//     res.sendStatus(200); // 요청이 성공적으로 처리되었음을 응답합니다.
// });
//
// app.listen(port, () => {
//     console.log(`Server is running on http://43.203.124.111:${port}/Ids`);
// });
//

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// AWS SDK를 구성합니다.
AWS.config.update({ region: 'ap-northeast-2' }); // AWS 리전을 설정하세요.
const sns = new AWS.SNS();

app.post('/Ids', (req, res) => {
    console.log('Received confirmation message:', req.body);

    // SNS 구독 확인 메시지에서 필요한 정보를 추출합니다.
    const token = req.body.Token;
    const topicArn = req.body.TopicArn;

    // SNS로부터 받은 확인 메시지를 사용하여 구독을 확인합니다.
    const params = {
        Token: token,
        TopicArn: topicArn
    };

    sns.confirmSubscription(params, (err, data) => {
        if (err) {
            console.error('Error confirming subscription:', err);
            res.sendStatus(500); // 서버 오류 응답을 반환합니다.
        } else {
            console.log('Subscription confirmed:', data);
            res.sendStatus(200); // 요청이 성공적으로 처리되었음을 응답합니다.
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://43.203.119.177:${port}/Ids`);
});
