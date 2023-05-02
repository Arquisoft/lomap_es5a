
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class verMisPuntos_100users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://uo271572.inrupt.net")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_0 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Sec-Fetch-Dest" -> "document",
  		"Sec-Fetch-Mode" -> "navigate",
  		"Sec-Fetch-Site" -> "cross-site",
  		"Sec-Fetch-User" -> "?1",
  		"Upgrade-Insecure-Requests" -> "1",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_1 = Map(
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_3 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"If-None-Match" -> """W/"4ac-ibs7FMDcT/LugQv7+54WcO8A360"""",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_4 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"DPoP" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2lucnVwdC5uZXQvdG9rZW4iLCJodG0iOiJQT1NUIiwianRpIjoiMWM5N2I3NGMtNDgzYi00MGE4LTliMTEtNzY1ZGY0YjdjMDNjIiwiaWF0IjoxNjgzMDQwNDg0fQ.JIkdKUUdT3V_dUosSFByeDCqCBAAWBZoTQA6lNYBBA9uqjtkuYMvoAszqoQJJpU7wI214VQKdIQ_FadaguKeYg",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_5 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"If-None-Match" -> """W/"c12-Kvq8CS2lBBOkyBlGjEmnUK4oFkY"""",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_6 = Map(
  		"Accept" -> "text/turtle",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_23 = Map(
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
  
  private val headers_26 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNzgxNmExYTUtMTAyYy00NDZiLWI1OTYtYmE4ODRmMGVlODEyIiwiaWF0IjoxNjgzMDQwNDg0fQ.6gxpCjTPdelO5GX1pHN8SW5ZYg7OF9YdZbxJJEdNr5Uttnxh4gwQV8hPo3K1Vem-1L0fliXF2SoJK9VVEHoBsQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_27 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiIyYmFhODg2Ni1lMjUzLTQ4YjctYTIyNy01YTE3NTBiMjMxYmEiLCJpYXQiOjE2ODMwNDA0ODR9.3sY57xVOo6rUqFezApodhMWbwo2QsZIo7pxbNOCu9fnHIPxj87o-SzLc-pRFdK_WXXQAi2KkFiZT9iEg_Vx8sg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_28 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMDNkZjFkMGEtMjQyZS00YmM1LWJiNGUtMjc2ZWVhYTA4YTI2IiwiaWF0IjoxNjgzMDQwNDg1fQ.YuV0BA8FL-qGjpLp1aTmORpYs_Hg7YqCmD7DkoUxoZmQjgyX-jN65kLHasCNErDZB80CBOqpmhuoRKrlNJTXaw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_29 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMGE0MzU5MTAtZTRhMS00Yzc3LTlhYmMtOTAwM2FkNjEzZDgzIiwiaWF0IjoxNjgzMDQwNDg1fQ.IgWSnu20G_Lq5JUsJItXpTUVxtddaCKUZ_z5NXZ15K4fZQSApA19j_SOwrvbOkXuqkWB0nZaFvR3P2cIDK52Qg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_30 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImNmY2Y4YWFhLTNmNzEtNGU2Ni1iNjMyLTMxNTRiYTg5YTM2YSIsImlhdCI6MTY4MzA0MDQ4NX0.sPDYGeoNKUvAJ-2WR8GWdR8fSp8l9kCgX8O9ME8zTzy6vLY2VKjeFURV_GUuqSR16L9_59xKpjpr0rHE45n5Hw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_31 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImEzNTRiNjNkLWZhMWQtNGU2Zi05YzI5LTYyMjA1NTkyODVmZiIsImlhdCI6MTY4MzA0MDQ4NX0.hhAdaZsc6hr-_qy6_pghjOFgiKxjsHEjABSlO9xXFTeacbvzpDOkYrV6ZHGvfM7sktDdb7PRmIIg2E0eZcaijQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_32 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImRkMmY3NjMzLTc1ZmEtNGIzYy05Y2MyLTk5ODFjYTBjZWRmZCIsImlhdCI6MTY4MzA0MDQ4Nn0.3KEURGKNeHx6dJC0BLjlc17MwS2iON1RfXhkAau2SGIOcEKB9oZ07s59-9HLUS0Tc_GbxQtVlWEUsSQOKZa1cQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_33 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImYxNDRlZGRkLWMyNWQtNDhiMC04ZWQyLWZkODlhMWMwZTI2OCIsImlhdCI6MTY4MzA0MDQ4Nn0.3nDbtC2C4C9dDgzBJW5i7AhtuJTYZf4q-Du_wnX52sj1BTn237Z8EXvS0Jml_sX9Ud34WPwcCEgPcUO0Elty3A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_34 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYThiZmE1NTMtYTA1NC00M2FjLWJkNDYtOTg1MjYzMmYxM2NlIiwiaWF0IjoxNjgzMDQwNDg2fQ.dywAw0Ml9H32Hy9r6CzTEYbgld106Ukgwyn3jMC28DtwpjVLT_YFC8EAak4FNCpQyjEXIJSF5qliav2Q3HpcOQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_35 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMWFjNzNmYzMtN2YxNy00M2QzLTg4YjctOTRmOGFiN2UxY2UyIiwiaWF0IjoxNjgzMDQwNDg2fQ.-w6fT6T2bd7W3FSEVw2QUv5ByQoVp6Brri34i880s3hwSFPJIH7Ltb8ukyQ9t063kYcwxWshCg7aNIOqtz61Mw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_36 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZGRlMmI5NzEtNjAyNy00NzhmLWE1YzYtMDZjMWM4YWY4MDhiIiwiaWF0IjoxNjgzMDQwNDg2fQ.vYwrFnRM7eaQoYHADeRHh6Ym68LTrkBrDvNJ3kaQj2uNKF23RogBzOyu23OGaHGhDWkeVdTBDNAVMpCzDUYeVg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_37 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZGU4ZTgyOTYtZTA3MC00YThmLTk0N2MtM2ZlNThjYWU1ZDAwIiwiaWF0IjoxNjgzMDQwNDg3fQ.mgCExBzVlwS5fxqRgSGAsIRt5GiiLGauomXGJo6AWO5-HoqyC_KlYj-pZn1kW-0E44DGe0doOiS5eHpYMtzs6w",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_38 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3ByaXZhdGUvc2hhcmVkcG9pbnRzL3VvMjcxNTcyL3NoYXJlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiODg5NzNlY2EtMTYwOS00NWI3LTk1OTUtMjQ5ZjAzYTE3MzQwIiwiaWF0IjoxNjgzMDQwNDg3fQ.eX-dpUAdLQ00oYrVgq-pShmKXJRRUuJrDLAgGDKXF1jjF0UMX8WB6RQz6bC4Jp2pInPEpD2PG2Z2YZoDrbeV4A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_39 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJpdmF0ZS9zaGFyZWRwb2ludHMvdW8yNzE1NzIvc2hhcmVkUG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJmMThjM2RlZS0yZTZhLTQ0ZjctODM4YS05Mzk2YTBmYTcyNTciLCJpYXQiOjE2ODMwNDA0ODd9.tRgbKxPmGJ8bzg2sxohJC3hbqkO2Qp0OVAyorIXmCtSPJ4tcDzaZc8WPcqZISr_sXRPH0Si4FykFuhMai7Sb9A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_40 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiI5YjhjODNmZi0wMGYxLTQzYTAtYTI2NC1iM2NlOWY3MjU5N2EiLCJpYXQiOjE2ODMwNDA0ODl9.jSqvl_MLIXDbpvZdIMNpsTwhrhCHavM8gShrwSuZUoyL2xt7FG7UBnn_S6pN6sDLpoWNGoHyFFs228WkXdy8Rw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_45 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZjY2NzFiNDMtMDA4Zi00OGNjLWJjYTctMDcxYzQ1NDI0YTQ5IiwiaWF0IjoxNjgzMDQwNDkyfQ.0A1NAhlatNFZ5nETpVCcaEAvDQIdyBEJLPsU8I9svWZOiA95lzw-Go9NhdcFPSnqBkhvJqrzC50ZEq4luYUNNg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_46 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjI2Mjc4MTgxLTU4MWEtNGIwMy04ZmU0LTNmOWJhODcwNzk0NyIsImlhdCI6MTY4MzA0MDQ5M30.6tMS-ycJGR9eF9tNcjll4sYB2nlM0EOfseazZnV6h8NZ8Hh3V_Xq41zsU9usy290D8-rxHfk4jZrJtOfsMHN0w",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_47 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImE3YzZlNjEyLWRkMWYtNGY0MC1hNDQzLWI0NmMxZTEwNDFmNyIsImlhdCI6MTY4MzA0MDQ5M30.bsKXonN42qrFSe3Vch8FIovgelt4WyKGz53JT6jzK2m6VqUnGbn7I7mbdyaj02U20LjaupgXuZQsD-hsSy5JPA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_48 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNDJiMjY1NDAtM2M1Mi00OGYzLWEyMTgtNGI3ZmNhZWE2M2MyIiwiaWF0IjoxNjgzMDQwNDk0fQ.4f1o33sJG88XKit8ioh7hxEvKiW0qBgPQK6R0ByiPXsGeejLIvcrw_ewp4WDpQb72OyYC8XhhtPJjptxwcxdzQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_49 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYTFlNmY5ODMtNWQzYi00ODE2LTlkY2MtYTIzMTJhYTUxMDNlIiwiaWF0IjoxNjgzMDQwNDk0fQ.SlHQDlh0tCjoayNO0WPuTclRnxkJlhFDtCh0ty-5eo46C4uE08X9Axl6BYND9L8tUNb04dY4XeYPPUA4pAt-zw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "https://c.tile.openstreetmap.org/13"
  
  private val uri2 = "https://pruebasolid1.inrupt.net"
  
  private val uri3 = "https://inrupt.net"
  
  private val uri4 = "https://franciscocoya.github.io/lomapes05a_production/manifest.json"
  
  private val uri5 = "https://b.tile.openstreetmap.org/13"
  
  private val uri6 = "https://a.tile.openstreetmap.org/13"
  
  private val uri7 = "https://pruebasolid2.solidcommunity.net"
  
  private val uri8 = "https://fonts.googleapis.com/css2"

  private val scn = scenario("verMisPuntos")
    .exec(
      http("request_0")
        .get(uri3 + "/authorize?client_id=e3bedd3d5d9e7d6a72642c672e32a3c4&redirect_uri=https%3A%2F%2Ffranciscocoya.github.io%2Flomapes05a_production%2F&response_type=code&scope=openid%20offline_access%20webid&state=501e5a01e10848038f929d9aed0cb4c7&code_challenge=VX_gSL3dPaWLW54yxJKBOwNSwzwI_pXXfUcHjG17Ep4&code_challenge_method=S256&prompt=consent&response_mode=query")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get(uri8 + "?family=Manrope:wght@200;300;500;700&display=swap")
            .headers(headers_1),
          http("request_2")
            .get(uri4),
          http("request_3")
            .get(uri3 + "/.well-known/openid-configuration")
            .headers(headers_3),
          http("request_4")
            .post(uri3 + "/token")
            .headers(headers_4)
            .formParam("grant_type", "authorization_code")
            .formParam("redirect_uri", "https://franciscocoya.github.io/lomapes05a_production/")
            .formParam("code", "f040c4a782bb0a8c9fc293039b6e4e4f")
            .formParam("code_verifier", "f89a3dca8ce6412ca300063b9e26242414cce76906774525b64d1d335353a292d7bfa671a5a34accb852f9d493ba239e")
            .formParam("client_id", "e3bedd3d5d9e7d6a72642c672e32a3c4")
            .basicAuth("e3bedd3d5d9e7d6a72642c672e32a3c4","6b2112d71aa8cd8798c3c90130b655f2"),
          http("request_5")
            .get(uri3 + "/jwks")
            .headers(headers_5),
          http("request_6")
            .get("/profile/card")
            .headers(headers_6),
          http("request_7")
            .get(uri6 + "/3962/2998.png?"),
          http("request_8")
            .get(uri5 + "/3963/2998.png?"),
          http("request_9")
            .get(uri5 + "/3962/2999.png?"),
          http("request_10")
            .get(uri1 + "/3963/2999.png?"),
          http("request_11")
            .get(uri6 + "/3963/2997.png?"),
          http("request_12")
            .get(uri1 + "/3962/2997.png?"),
          http("request_13")
            .get(uri1 + "/3961/2998.png?"),
          http("request_14")
            .get(uri1 + "/3964/2998.png?"),
          http("request_15")
            .get(uri1 + "/3962/3000.png?"),
          http("request_16")
            .get(uri6 + "/3963/3000.png?"),
          http("request_17")
            .get(uri5 + "/3961/2997.png?"),
          http("request_18")
            .get(uri6 + "/3961/2999.png?"),
          http("request_19")
            .get(uri5 + "/3964/2997.png?"),
          http("request_20")
            .get(uri5 + "/3961/3000.png?"),
          http("request_21")
            .get(uri6 + "/3964/2999.png?"),
          http("request_22")
            .get(uri5 + "/3964/3000.png?"),
          http("request_23")
            .get(uri1 + "/3962/2997.png?")
            .headers(headers_23),
          http("request_24")
            .get(uri6 + "/3961/2999.png?")
            .headers(headers_23),
          http("request_25")
            .get(uri6 + "/3964/2999.png?")
            .headers(headers_23),
          http("request_26")
            .get("/profile/card")
            .headers(headers_26),
          http("request_27")
            .get("/private/points/points.json")
            .headers(headers_27),
          http("request_28")
            .get("/profile/card")
            .headers(headers_28),
          http("request_29")
            .get("/profile/card")
            .headers(headers_29),
          http("request_30")
            .get(uri2 + "/profile/card")
            .headers(headers_30),
          http("request_31")
            .get(uri2 + "/profile/card")
            .headers(headers_31),
          http("request_32")
            .get(uri2 + "/profile/card")
            .headers(headers_32),
          http("request_33")
            .get(uri2 + "/profile/card")
            .headers(headers_33),
          http("request_34")
            .get(uri7 + "/profile/card")
            .headers(headers_34),
          http("request_35")
            .get(uri7 + "/profile/card")
            .headers(headers_35),
          http("request_36")
            .get(uri7 + "/profile/card")
            .headers(headers_36),
          http("request_37")
            .get(uri7 + "/profile/card")
            .headers(headers_37),
          http("request_38")
            .get(uri2 + "/private/sharedpoints/uo271572/sharedPoints.json")
            .headers(headers_38)
            .check(status.is(403)),
          http("request_39")
            .get(uri7 + "/private/sharedpoints/uo271572/sharedPoints.json")
            .headers(headers_39)
            .check(status.is(403))
        )
    )
    .pause(1)
    .exec(
      http("request_40")
        .get("/private/points/points.json")
        .headers(headers_40)
        .resources(
          http("request_41")
            .get(uri1 + "/3962/2997.png?"),
          http("request_42")
            .get(uri6 + "/3964/2999.png?"),
          http("request_43")
            .get(uri1 + "/3962/2997.png?")
            .headers(headers_23),
          http("request_44")
            .get(uri6 + "/3964/2999.png?")
            .headers(headers_23)
        )
    )
    .pause(2)
    .exec(
      http("request_45")
        .get("/profile/card")
        .headers(headers_45)
        .resources(
          http("request_46")
            .get(uri2 + "/profile/card")
            .headers(headers_46),
          http("request_47")
            .get(uri2 + "/profile/card")
            .headers(headers_47),
          http("request_48")
            .get(uri7 + "/profile/card")
            .headers(headers_48),
          http("request_49")
            .get(uri7 + "/profile/card")
            .headers(headers_49)
        )
    )

	setUp(scn.inject(constantUsersPerSec(2) during (50 seconds) randomized).protocols(httpProtocol))
}
