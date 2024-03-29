package com.example.PiTHomeIoT.IoTDevices;

import com.example.PiTHomeIoT.IotHub.IotHubService2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.microsoft.azure.sdk.iot.service.exceptions.IotHubException;
import java.io.IOException;

@RestController
public class PowerbarController { // 멀티탭 작동 조작

    @Autowired
    private IotHubService2 iotHubService2;

    @PostMapping("/powerbar/on") // iot hub로 "powerbar-on"라는 direct method 전송
    public void powerBarOn() throws IotHubException, IOException {
        iotHubService2.callDirectMethod("powerbar-on", "");
    }

    @PostMapping("/powerbar/off") // iot hub로 "powerbar-off"라는 direct method 전송
    public void powerBarOff() throws IotHubException, IOException {
        iotHubService2.callDirectMethod("powerbar-off", "");
    }
}
