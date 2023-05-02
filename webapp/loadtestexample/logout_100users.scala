
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class logout_100users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://franciscocoya.github.io")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_1 = Map(
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri2 = "https://fonts.googleapis.com/css2"

  private val scn = scenario("logout")
    .exec(
      http("request_0")
        .get("/lomapes05a_production/")
        .resources(
          http("request_1")
            .get(uri2 + "?family=Manrope:wght@200;300;500;700&display=swap")
            .headers(headers_1),
          http("request_2")
            .get("/lomapes05a_production/manifest.json")
        )
    )

	setUp(scn.inject(constantUsersPerSec(2) during (50 seconds) randomized).protocols(httpProtocol))
}
