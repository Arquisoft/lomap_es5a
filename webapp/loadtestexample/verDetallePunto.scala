
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class verDetallePunto extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://pruebasolid2.solidcommunity.net")
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZDM1ZjgzMTAtOTBkZC00Y2IzLWI2ZmQtYzQzNmE3NWVkOWQ4IiwiaWF0IjoxNjgyODY3MjI3fQ.9vspw1fGGMxJv1duYlufjjvVaWqDgHFy2yXqf3oA2Dox8-wUzlGpYFFA-FXFmI0P88tZWKXev2Axa_fwjCVh5Q",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_3 = Map(
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
  
  private val headers_5 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzY3NDksImlhdCI6MTY4Mjg2NzE0OSwianRpIjoiZmExNTU4MWM4ODkxM2NkNiIsImNuZiI6eyJqa3QiOiJ5cDM4My1MOFhtcUs5R3VMZFo3OHcyZHNRNFpNcWZJdVNVaXBXMkMxdHRZIn0sImNsaWVudF9pZCI6IjBiMmFlYTFlM2UxZThkOThkNDM0MjMwMjBhODMwMjBiIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.kJiacOlRJLM61FvKNewvbfSOMyQbQJVIwduljuWFdVa_HhCjfZi_41vjxxg0AT3cHK0D3dW96Lxf5lmpYFRE0pd2kAriWEL6SVhMot2vE1XyDKZzLcHSGZC0zbNipb6KE3InaER_Vr99bqPtw_KfZBcMoAn23q1_aYwx-UFUGNNiG2oqnTpVrGSfu8CTwukuOEv1qbhd-JhsgMPl6l3Rw2kAoNdCk5Fh8yACls9qL7-1wkpQIfjH3vCWW1qGVckQLQYCKSc7ah3U8WVe7kZ5H0A6AoMcA84EP2N36Suy1mB3-LRE28N9-eOkD9bZXCTrUu2rhCVE6N2jzuNCKNucgQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYmJhMjJjZjctZDRkNS00ODU5LTllYjQtODUxNzc1OTg4MDhiIiwiaWF0IjoxNjgyODY3MjI4fQ.lQtxwQSGXYkfuYSKI2I1zjqQN4CWf8YsD1vwY-Ejcx7oGyB4GRtr6jLNZg8TNZDBFj4g3BWtT_68GO2i_s0a-g",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_6 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzY3NDksImlhdCI6MTY4Mjg2NzE0OSwianRpIjoiZmExNTU4MWM4ODkxM2NkNiIsImNuZiI6eyJqa3QiOiJ5cDM4My1MOFhtcUs5R3VMZFo3OHcyZHNRNFpNcWZJdVNVaXBXMkMxdHRZIn0sImNsaWVudF9pZCI6IjBiMmFlYTFlM2UxZThkOThkNDM0MjMwMjBhODMwMjBiIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.kJiacOlRJLM61FvKNewvbfSOMyQbQJVIwduljuWFdVa_HhCjfZi_41vjxxg0AT3cHK0D3dW96Lxf5lmpYFRE0pd2kAriWEL6SVhMot2vE1XyDKZzLcHSGZC0zbNipb6KE3InaER_Vr99bqPtw_KfZBcMoAn23q1_aYwx-UFUGNNiG2oqnTpVrGSfu8CTwukuOEv1qbhd-JhsgMPl6l3Rw2kAoNdCk5Fh8yACls9qL7-1wkpQIfjH3vCWW1qGVckQLQYCKSc7ah3U8WVe7kZ5H0A6AoMcA84EP2N36Suy1mB3-LRE28N9-eOkD9bZXCTrUu2rhCVE6N2jzuNCKNucgQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImI0ZmQ2N2FhLWU1MzYtNDgwNi05ZTk3LWYyMTQ2ZGI4ZDBjNyIsImlhdCI6MTY4Mjg2NzIyOH0.5UQn0cCQILyCmbobz8dYcuMvs1w1JJ3WiHJ9HHGH8ev0YAR0ph46AlWKi_UKbUS9BUOJdjQ-VPHkdJ73g4Ff2A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_7 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzY3NDksImlhdCI6MTY4Mjg2NzE0OSwianRpIjoiZmExNTU4MWM4ODkxM2NkNiIsImNuZiI6eyJqa3QiOiJ5cDM4My1MOFhtcUs5R3VMZFo3OHcyZHNRNFpNcWZJdVNVaXBXMkMxdHRZIn0sImNsaWVudF9pZCI6IjBiMmFlYTFlM2UxZThkOThkNDM0MjMwMjBhODMwMjBiIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.kJiacOlRJLM61FvKNewvbfSOMyQbQJVIwduljuWFdVa_HhCjfZi_41vjxxg0AT3cHK0D3dW96Lxf5lmpYFRE0pd2kAriWEL6SVhMot2vE1XyDKZzLcHSGZC0zbNipb6KE3InaER_Vr99bqPtw_KfZBcMoAn23q1_aYwx-UFUGNNiG2oqnTpVrGSfu8CTwukuOEv1qbhd-JhsgMPl6l3Rw2kAoNdCk5Fh8yACls9qL7-1wkpQIfjH3vCWW1qGVckQLQYCKSc7ah3U8WVe7kZ5H0A6AoMcA84EP2N36Suy1mB3-LRE28N9-eOkD9bZXCTrUu2rhCVE6N2jzuNCKNucgQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IktldGhQaTUycHc2eXREX0x4aDhrSlR1dUdlZU9rSnM1Q1M4emp0SFFBMG8iLCJ5IjoibFlLTmpPTDhPc2Q1c0RJRi1FNDZ6dTRjc0tsbUJGLWg1TFNicDg3T2pUWSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6Ijg5NTU0OGI0LTQyYjQtNGI2Mi05NzU0LTdkNTY4ZjA1MjM1ZiIsImlhdCI6MTY4Mjg2NzIyOX0.Fp3vEt4n_CT53YMkmuLh1UmWPS4mJ4bd2sQ0L0QfrzguBSIoCk2ioT9H6dUNT3JWNBoYrVqhLxtewmz5DVUCfQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "https://a.tile.openstreetmap.org/13"
  
  private val uri2 = "https://richardpix.solidcommunity.net/profile/card"

  private val scn = scenario("verDetallePunto")
    .exec(
      http("request_0")
        .get("/profile/card")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get(uri1 + "/3963/2997.png?"),
          http("request_2")
            .get(uri1 + "/3962/2998.png?"),
          http("request_3")
            .get(uri1 + "/3963/2997.png?")
            .headers(headers_3),
          http("request_4")
            .get(uri1 + "/3962/2998.png?")
            .headers(headers_3),
          http("request_5")
            .get("/profile/card")
            .headers(headers_5),
          http("request_6")
            .get(uri2)
            .headers(headers_6),
          http("request_7")
            .get(uri2)
            .headers(headers_7)
        )
    )

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}
