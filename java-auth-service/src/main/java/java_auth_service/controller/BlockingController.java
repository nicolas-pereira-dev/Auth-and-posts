package java_auth_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java_auth_service.service.BlockingService;

@RestController
public class BlockingController {
    private final BlockingService blockingService;

    public BlockingController(BlockingService blockingService) {
        this.blockingService = blockingService;
    }

    @GetMapping("/blockingEndpoint")
    public String blockingEndpoint() {
        return this.blockingService.blockingOperation();
    }
}
