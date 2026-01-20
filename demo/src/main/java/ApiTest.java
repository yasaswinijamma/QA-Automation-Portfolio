import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue; // This line is crucial for equalTo and notNullValue

import static io.restassured.RestAssured.given;

public class ApiTest {
    public static void main(String[] args) {
        System.out.println("Starting API Test...");

        given()
            .baseUri("https://jsonplaceholder.typicode.com")
        .when()
            .get("/posts/1")
        .then()
            .statusCode(200)
            .body("id", equalTo(1))
            .body("title", notNullValue())
            .log().all();

        System.out.println("API Test Completed Successfully!");
    }
}