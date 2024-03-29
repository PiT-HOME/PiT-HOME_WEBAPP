package com.example.PiTHomeIoT.IotHub;

import com.microsoft.azure.sdk.iot.service.devicetwin.DeviceMethod;
import com.microsoft.azure.sdk.iot.service.exceptions.IotHubException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

@Service
public class IotHubService3 { // 라즈베리파이(cream) - 카메라, LED 연결
    private static final String connectionString = "HostName=cream-pi.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=2k/IH0iqrmGjULwys484GlEo1Z8ZAKdKaAIoTHEcQ5c=";
    private static final String deviceId = "kdj-pi";
    private static final Long responseTimeout = TimeUnit.SECONDS.toSeconds(30);
    private static final Long connectTimeout = TimeUnit.SECONDS.toSeconds(5);

    public void callDirectMethod(String methodName, String payload) throws IOException, IotHubException {
        // direct method 관련 인스턴스 생성
        DeviceMethod methodClient = DeviceMethod.createFromConnectionString(connectionString);

        // direct method 보내기
        methodClient.invoke(deviceId, methodName, responseTimeout, connectTimeout, payload);
    }
}
