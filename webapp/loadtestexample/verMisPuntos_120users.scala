
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class verMisPuntos_120users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://uo271572.inrupt.net")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_0 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzY3NDksImlhdCI6MTY4Mjg2NzE0OSwianRpIjoiZmExNTU4MWM4ODkxM2NkNiIsImNuZiI6eyJqa3QiOiJ5cDM4My1MOFhtcUs5R3VMZFo3OHcyZHNRNFpNcWZJdVNVaXBXMkMxdHRZIn0sImNsaWVudF9pZCI6IjBiMmFlYTFlM2UxZThkOThkNDM0MjMwMjBhODMwMjBiIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.kJiacOlRJLM61FvKNewvbfSOMyQbQJVIwduljuWFdVa_HhCjfZi_41vjxxg0AT3cHK0D3dW96Lxf5lmpYFRE0pd2kAriWEL6SVhMot2vE1XyDKZzLcHSGZC0zbNipb6KE3InaER_Vr99bqPtw_KfZBcMoAn23q1_aYwx-UFUGNNiG2oqnTpVrGSfu8CTwukuOEv1qbhd-JhsgMPl6l3Rw2kAoNdCk5Fh8yACls9qL7-1wkpQIfjH3vCWW1qGVckQLQYCKSc7ah3U8WVe7kZ5H0A6AoMcA84EP2N36Suy1mB3-LRE28N9-eOkD9bZXCTrUu2rhCVE6N2jzuNCKNucgQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYTZhYTdmZDgtOWU4Ny00ZDU2LWE0ZGQtNDA0NDNkMjgxMTNiIiwiaWF0IjoxNjgyODY3MTgxfQ.-XlUV8orrIm0CPwN8Hjlyb63dMidSCyGbZzQZi2vHrOEMfNiIPPY9S3XdyC02rbZ51IXWqnzbDTmvABFs7nhrg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_1 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzY3NDksImlhdCI6MTY4Mjg2NzE0OSwianRpIjoiZmExNTU4MWM4ODkxM2NkNiIsImNuZiI6eyJqa3QiOiJ5cDM4My1MOFhtcUs5R3VMZFo3OHcyZHNRNFpNcWZJdVNVaXBXMkMxdHRZIn0sImNsaWVudF9pZCI6IjBiMmFlYTFlM2UxZThkOThkNDM0MjMwMjBhODMwMjBiIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.kJiacOlRJLM61FvKNewvbfSOMyQbQJVIwduljuWFdVa_HhCjfZi_41vjxxg0AT3cHK0D3dW96Lxf5lmpYFRE0pd2kAriWEL6SVhMot2vE1XyDKZzLcHSGZC0zbNipb6KE3InaER_Vr99bqPtw_KfZBcMoAn23q1_aYwx-UFUGNNiG2oqnTpVrGSfu8CTwukuOEv1qbhd-JhsgMPl6l3Rw2kAoNdCk5Fh8yACls9qL7-1wkpQIfjH3vCWW1qGVckQLQYCKSc7ah3U8WVe7kZ5H0A6AoMcA84EP2N36Suy1mB3-LRE28N9-eOkD9bZXCTrUu2rhCVE6N2jzuNCKNucgQ",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJjODMwMGJiNi0yMjM5LTQ5NTMtYTExYi1kYzcxOGY1MTcyZTMiLCJpYXQiOjE2ODI4NjcxODF9.NFXiL-iZ6hvuQ-OzMHHPtfY1OBsdERI_WIsICi83MUCNGbYFCEi6TpPplwdd3aifsmejO4lkWwrwF-wo4q-oLw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_8 = Map(
  		"accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  		"accept-encoding" -> "gzip, deflate, br",
  		"accept-language" -> "es-ES,es;q=0.9",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows",
  		"sec-fetch-dest" -> "image",
  		"sec-fetch-mode" -> "no-cors",
  		"sec-fetch-site" -> "cross-site",
  		"user-agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
  )
  
  private val headers_12 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzY3NDksImlhdCI6MTY4Mjg2NzE0OSwianRpIjoiZmExNTU4MWM4ODkxM2NkNiIsImNuZiI6eyJqa3QiOiJ5cDM4My1MOFhtcUs5R3VMZFo3OHcyZHNRNFpNcWZJdVNVaXBXMkMxdHRZIn0sImNsaWVudF9pZCI6IjBiMmFlYTFlM2UxZThkOThkNDM0MjMwMjBhODMwMjBiIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.kJiacOlRJLM61FvKNewvbfSOMyQbQJVIwduljuWFdVa_HhCjfZi_41vjxxg0AT3cHK0D3dW96Lxf5lmpYFRE0pd2kAriWEL6SVhMot2vE1XyDKZzLcHSGZC0zbNipb6KE3InaER_Vr99bqPtw_KfZBcMoAn23q1_aYwx-UFUGNNiG2oqnTpVrGSfu8CTwukuOEv1qbhd-JhsgMPl6l3Rw2kAoNdCk5Fh8yACls9qL7-1wkpQIfjH3vCWW1qGVckQLQYCKSc7ah3U8WVe7kZ5H0A6AoMcA84EP2N36Suy1mB3-LRE28N9-eOkD9bZXCTrUu2rhCVE6N2jzuNCKNucgQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjJjNjY4YjY5LTJkMGMtNDJiZC1iOTE3LTc5ZTA3ZjExNzA0YSIsImlhdCI6MTY4Mjg2NzE4Nn0.f3cQrLk_dv9AeY46q5H8hfFQyFfwv-Y363rPYa9xGHzm0kAIJz1365dkurlQtUMFhNrqFB3B0V6IsEkmPhNR3A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "https://c.tile.openstreetmap.org/13"
  
  private val uri2 = "https://b.tile.openstreetmap.org/13"
  
  private val uri3 = "https://a.tile.openstreetmap.org/13"
  
  private val uri4 = "https://eloquen17.inrupt.net/profile/card"

  private val scn = scenario("verMisPuntos")
    .exec(
      http("request_0")
        .get("/profile/card")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get("/private/points/points.json")
            .headers(headers_1),
          http("request_2")
            .get(uri1 + "/3962/2997.png?"),
          http("request_3")
            .get(uri3 + "/3963/2997.png?"),
          http("request_4")
            .get(uri3 + "/3962/2998.png?"),
          http("request_5")
            .get(uri2 + "/3963/2998.png?"),
          http("request_6")
            .get(uri2 + "/3961/2997.png?"),
          http("request_7")
            .get(uri1 + "/3961/2998.png?"),
          http("request_8")
            .get(uri3 + "/3963/2997.png?")
            .headers(headers_8),
          http("request_9")
            .get(uri3 + "/3962/2998.png?")
            .headers(headers_8),
          http("request_10")
            .get(uri2 + "/3961/2997.png?")
            .headers(headers_8),
          http("request_11")
            .get(uri1 + "/3961/2998.png?")
            .headers(headers_8),
          http("request_12")
            .get(uri4)
            .headers(headers_12)
        )
    )

	setUp(scn.inject(constantUsersPerSec(2) during (60 seconds) randomized).protocols(httpProtocol))
}
