package java_auth_service.service;

import org.springframework.stereotype.Service;

@Service
public class BlockingService {
    
    public synchronized String blockingOperation() {
        try {
            // Simulate a blocking operation (e.g., a long-running task)
            Thread.sleep(5000); // Sleep for 5 seconds
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Restore interrupted status
            return "Operation was interrupted";
        }
        return "Blocking operation completed";
    }
}
