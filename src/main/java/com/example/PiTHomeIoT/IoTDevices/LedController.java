package com.example.PiTHomeIoT.IoTDevices;

import com.example.PiTHomeIoT.IotHub.IotHubService;
import com.example.PiTHomeIoT.IotHub.IotHubService3;
import com.example.PiTHomeIoT.IotHub.IotHubService4;
import com.microsoft.azure.sdk.iot.service.exceptions.IotHubException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


@RestController
public class LedController { // LED 작동 조작

    @Autowired
    private IotHubService4 iotHubService4;

    @PostMapping("/led/on") // iot hub로 "LED_ON"라는 direct method 전송
    public void turnOnLed() throws IOException, IotHubException {
        iotHubService4.callDirectMethod("LED_ON", "");
    }

    @PostMapping("/led/off") // iot hub로 "LED_OFF"라는 direct method 전송
    public void turnOffLed() throws IOException, IotHubException {
        iotHubService4.callDirectMethod("LED_OFF", "");
    }
}