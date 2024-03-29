import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const SNS_TOPIC_ARN = 'arn:aws:sns:ap-northeast-2:365814427838:ddos_alarm:2974b054-7e51-4985-a36c-90f4c3a3ebe1'; // 구독할 SNS 토픽의 ARN을 여기에 입력하세요.

const sns = new AWS.SNS({
    region: 'ap-northeast-2', // AWS 리전을 지정하세요.
    credentials: {
        accessKeyId: 'AKIAVKLB5GC7KQLEWIF2', // AWS 액세스 키 ID를 입력하세요.
        secretAccessKey: '7BoHrKgPRYK/A+5zCC1BtG3nFb6BvriXnd3Ldwz+' // AWS 비밀 액세스 키를 입력하세요.
    }
});

const subscribeToSNS = async () => {
    const params = {
        Protocol: 'http', // 푸시 알림을 HTTPS로 받을 경우 'https'로 설정하세요.
        TopicArn: SNS_TOPIC_ARN, // 구독할 SNS 토픽의 ARN을 입력하세요.
        Endpoint: 'http://43.203.124.111:8080/Ids' // 푸시 알림을 받을 엔드포인트 URL을 입력하세요.
    };

    try {
        await sns.subscribe(params).promise();
        console.log('Subscribed to SNS topic successfully.');
    } catch (error) {
        console.error('Failed to subscribe to SNS topic:', error);
    }
};

const handleSNSMessage = (message) => {
    // SNS 메시지를 처리하고, 푸시 알림을 띄웁니다.
    console.log('Received SNS message:', message);
    // 여기에서 푸시 알림을 띄우는 작업을 수행하세요.
};

const SNSMessageHandler = () => {
    useEffect(() => {
        subscribeToSNS();

        const handleMessage = async () => {
            try {
                const message = await receiveSNSMessage();
                handleSNSMessage(message);
            } catch (error) {
                console.error('Error receiving SNS message:', error);
            }
        };

        handleMessage();

        // 컴포넌트가 언마운트되면 구독을 정리합니다.
        return () => {
            // 여기에 구독 정리 로직을 추가하세요.
        };
    }, []);

    const receiveSNSMessage = async () => {
        // 여기에서 AWS SDK를 사용하여 SQS 대기열에서 SNS 메시지를 받아오는 로직을 작성하세요.
        // SQS 대기열에서 SNS 메시지를 가져오는 코드를 작성하세요.
        const message = 'example SNS message'; // 예시로 받아온 SNS 메시지
        return message;
    };

    return (
        <div>
            {/* 여기에 컴포넌트 UI를 작성하세요 */}
        </div>
    );
};

export default SNSMessageHandler;
