package com.example.PiTHomeIoT.IoTDevices;

import com.example.PiTHomeIoT.IotHub.IotHubService;
import com.microsoft.azure.sdk.iot.service.exceptions.IotHubException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class DoorController { // 도어락 작동 조작

    @Autowired
    private IotHubService iotHubService;

    @PostMapping("/door/open") // iot hub로 "door-open"라는 direct method 전송
    public void openDoor() throws IOException, IotHubException {
        iotHubService.callDirectMethod("door-open", "");
    }

    @PostMapping("/door/close") // iot hub로 "door-close"라는 direct method 전송
    public void closeDoor() throws IOException, IotHubException {
        iotHubService.callDirectMethod("door-close", "");
    }
}
