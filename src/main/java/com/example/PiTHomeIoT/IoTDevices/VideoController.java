package com.example.PiTHomeIoT.IoTDevices;

import com.microsoft.azure.sdk.iot.service.devicetwin.DeviceMethod;
import com.microsoft.azure.sdk.iot.service.devicetwin.MethodResult;
import com.microsoft.azure.sdk.iot.service.exceptions.IotHubException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

import java.io.IOException;
import java.util.logging.Logger;

@RestController
public class VideoController {
    private static final String iotHubConnectionString = "HostName=cream-pi.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=2k/IH0iqrmGjULwys484GlEo1Z8ZAKdKaAIoTHEcQ5c=";
    private static final String deviceId = "kdj-pi";
    private static final Long responseTimeout = 120L; // 응답 타임아웃을 120초로 늘림
    private static final Long connectTimeout = 5L;
    private static final Logger logger = Logger.getLogger(VideoController.class.getName());

    // Blob URL 저장소
    private String blobUrl;

    @PostMapping("/video/on")
    public String videoOn() {
        // Blob URL을 사용하는 나머지 코드...
        invokeDeviceMethod("VIDEO_ON");
        return "VIDEO_ON method is invoked. Waiting for the Blob URL...";
    }

    @PostMapping("/video/on/complete")
    public String videoComplete(@RequestBody Map<String, String> payload) {
        String url = payload.get("url");

        if (url == null || url.isEmpty()) {
            throw new RuntimeException("No Blob URL available.");
        }

        // Blob URL을 저장하거나 사용하는 코드...
        blobUrl = url;

        return "Successfully received the Blob URL: " + url;
    }

    @GetMapping("/video/url")
    public String getVideoUrl() {
        if (blobUrl == null || blobUrl.isEmpty()) {
            throw new RuntimeException("No Blob URL available.");
        }

        return blobUrl;
    }



    @PostMapping("/video/off")
    public String videoOff() {
        return invokeDeviceMethod("VIDEO_OFF");
    }

    //

    private String invokeDeviceMethod(String methodName) {
        try {
            // Initialize device method client
            DeviceMethod methodClient = DeviceMethod.createFromConnectionString(iotHubConnectionString);

            // Call the specified method
            MethodResult methodData = methodClient.invoke(deviceId, methodName, responseTimeout, connectTimeout, null);

            // Log the methodData
            logger.info("Method data: " + methodData.toString());

            // Check if the method call was successful
            if (methodData.getStatus() == 200) {
                // Return the method response payload
                String payload = methodData.getPayload().toString();
                logger.info("Received payload: " + payload); // Payload 출력
                return payload;
            } else {
                throw new Exception("Failed to call method " + methodName + ": " + methodData.getStatus());
            }
        } catch (java.net.SocketTimeoutException e) {
            logger.severe("SocketTimeoutException occurred: " + e.getMessage());
            return null;
        } catch (IotHubException | IOException e) {
            // Handle exception
            logger.severe("Exception occurred: " + e.getMessage());
            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}