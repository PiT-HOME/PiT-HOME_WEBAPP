package com.example.PiTHomeIoT.IoTDevices;

import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import com.amazonaws.services.sns.model.PublishRequest;

public class CloudWatchAlertPublisher {

    public void publishAlertToSNS(String alertMessage, String topicARN) {
        AmazonSNS snsClient = AmazonSNSClientBuilder.defaultClient();

        PublishRequest request = new PublishRequest(topicARN, alertMessage);
        snsClient.publish(request);
    }
}

