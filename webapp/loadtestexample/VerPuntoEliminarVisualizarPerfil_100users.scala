
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class VerPuntoEliminarVisualizarPerfil_100users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://c.tile.openstreetmap.org")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_1 = Map(
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
  
  private val headers_2 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Access-Control-Request-Headers" -> "authorization,content-type,dpop",
  		"Access-Control-Request-Method" -> "GET",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
  )
  
  private val headers_3 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9yZXZpZXdzL3Jldmlld3MuanNvbiIsImh0bSI6IkdFVCIsImp0aSI6ImI1ZmM5Zjc3LWJkZjQtNDVjZi04NDA0LWI2YTNhNzM4MGUxYyIsImlhdCI6MTY4MzA0MTU3Mn0.pwh9eKozw-a4s43ue34uJ_QFYsD668IxOyI-ex5rz-_M_DXFBnI_bubtGIOvTGOJLn8xL7XjLEWv3CUDrvzwdA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_11 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJmNDNmNTg4ZC1lMzRiLTQ3MjMtYjMxMi0wMTZmNTY1MzIwMzAiLCJpYXQiOjE2ODMwNDE1Nzd9.2_7U1roSU8BtOl_2KGqAys4Qf0XYbEgCVBeD-NowFfUYR53Af7KZrbrQ3Krsk-y5d5sNCb0COwpAqQA_2Cs36Q",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_16 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJlYmRlZGM1ZS03ZjFkLTQ1MWQtODVkMC0wNWM1ODU1NjExMTYiLCJpYXQiOjE2ODMwNDE1ODF9.TEM7MjZGZ47U7outuaYN6ryrttU5Luk2r7h5CGK3hhk3CowUvScVjipkD6AU7rmJKi7tIVIYlrBTrAHmgTIIhA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_30 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJQVVQiLCJqdGkiOiI5N2U4ZjllZi0xYmY5LTRiZjItYjc2MS1iNjYwZmE4MWQ0MjAiLCJpYXQiOjE2ODMwNDE1ODF9.SQDcbLJc9VK9IqV87iV4jB1OxbIPEPtOjqfC12rmCfDMyu_1OdycHzGdpGZFpu_7dDX-9bqpo5eBxlYdAArr_g",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNGFkMDhkYzctOWFhMi00MmM3LWE0N2MtODUxYmRkNTcwYzgzIiwiaWF0IjoxNjgzMDQxNTgxfQ.HGl1LRusVtHXrx3lwfwjiKMxEuM5xPV6N2rLS8XVKyQxtlZhXjhnKW3epqcayflgLKk3uHRH2ctwAYYGRYCxqg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_32 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiIyYjM3MmI3ZS0yYjdkLTQ2MTUtYTAxZC0yMGNiMzMyOThjZmMiLCJpYXQiOjE2ODMwNDE1ODF9.oY_-YVpeF-XB4LWfSUNOuZ9mgLB3xdO_1wxfKzaY8-hRZZoVvbacwjNpUexCzN1fcdyJ5tEyP9f0L2kV0qPtvA",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZWU2ZDEzNTUtODA0Yy00NGJmLTgzZjgtYzAzZmMyYTNmOTQyIiwiaWF0IjoxNjgzMDQxNTgzfQ.EpPSt9PevRChTtKDaoYD_ZGXWMuTSHBsrawJ_Y91x1ctF_dLOToSHX2ilQd9ljmAbamRnXPVACOdKNsUvyPfUg",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYTg2ZDQ0OTMtM2I5MS00ZjUzLWI4N2YtNjJmYzUyOGNjZDhkIiwiaWF0IjoxNjgzMDQxNTgzfQ.R9hd-IqxPjpcu0snA9fWZfCqg5MMlBteXOonHVH6JkoTVsxPcvgM-2u6Vujy6ti1UMizvbU4UoUjMMITZmUXBQ",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImMzZDQzNDBkLTk0OTQtNGEzZC04ZjFlLTgwYjNkYjhhNTQxNCIsImlhdCI6MTY4MzA0MTU4M30.r5AC5gChsuc3uK7WKZi5GZ0cGGJVZGCL488Org2Ba1WMxiXGeYUpK_5HArK3_D4-Mf0JinwH6Qc2YGg3v5dAxg",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjEyYzIzZTgyLWRjNDMtNGVjYi1hMmNkLWFjMTUwMjNkYzNmMSIsImlhdCI6MTY4MzA0MTU4M30.ZczlbCXBil_JwRn9idZTXZG_EIetLmOr7w3QnzatL0lszUSjQI5MXIQ3wnRUeGFeTQlBtGWmd2Sa6Ws8M91-SA",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjQwY2U1M2Y0LTZiMDctNDM1MS04ODMxLTk3NzgwY2MyMjJkZiIsImlhdCI6MTY4MzA0MTU4M30.00VYw1vOfgimM7i-1VwA1UemQFMN_xIcaUwKrSA40E5Gnxyzv7yg4__SbkUpvB8x6csDEUSskWVzpkcIx9r1Ig",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_38 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjMwY2QyNWMyLTNlNzItNDk5OS05ZTUxLTYyYjdiNDk5YWIzYSIsImlhdCI6MTY4MzA0MTU4NH0.jSjSLBDFW27KA0W6gwS0FgMy5Qa38Om6ngQkZIJcjiA_EXynXryPVkctsyUOQsYDUs0Pt5jIFYNtvuCs9K61tg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_39 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMmYyMmU3ZmQtNjA2Ny00ZmMxLTgwMTYtMDVhNGFlYTI3ODdiIiwiaWF0IjoxNjgzMDQxNTg0fQ.QSF1rm5X72bz6S9RIkA0-NUgpS2SzLG6JLcSzDjtSzanSM5ynr9L1APLzrvsZB2XqnzMXzNgCrEWcHZh3rrmkQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_40 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZWU3YWIyMWMtNGU5MC00NTZhLWFjODctNjJmYTAyYTk2Y2RmIiwiaWF0IjoxNjgzMDQxNTg0fQ.QYgKLsfB8q52WGYRaaFpV8iW7V-NJIE83cIV9sy3QbYj2YKtm-VEt0cE0uByy3Z0ybTgyN-uyPbyQZ2zASEKOQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_41 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNTg0ZTlmOTAtM2VmMy00NTg3LWEzMTUtMDE0YTJlY2E0ZWM3IiwiaWF0IjoxNjgzMDQxNTg0fQ.dXDnMEGCMCFH8NBdjUdnXYYs39o4HRlz8aVbYjqJrOgLTHluwjOg6ZKOSUTuYOElMEiTmVzjccxgqhdIq5x9CQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_42 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiOWNhNjk1MDUtZDhhZS00YzEzLWFmNDUtZDlmZmM2YzU2NjE3IiwiaWF0IjoxNjgzMDQxNTg1fQ.lO-z-mylB5HJe-Xpdg1tZIu1dffsz-8PVeQlQOSzKTwRtDfGQOtuOLpaVfpzQnpbvMPcckeQiaCB8Vtr8uzy0g",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_43 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3ByaXZhdGUvc2hhcmVkcG9pbnRzL3VvMjcxNTcyL3NoYXJlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiZGMzZmZmOWYtZTdlMC00MTQ1LWI1MGQtMDNlMTMxNTQ5MWMzIiwiaWF0IjoxNjgzMDQxNTg1fQ.aItMOjJBqd773l_46Sqv0UAYKeVPKanKdGgZeAB9LCmTg3ZxWQyOkXcRHn_0u9lCywLRrsu6P-zaDhCL4zFUJA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_44 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJpdmF0ZS9zaGFyZWRwb2ludHMvdW8yNzE1NzIvc2hhcmVkUG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJmOTdiNTg3OC1hOWJhLTQxNmQtOGEwMC1kNjU0YjExMmJkNTgiLCJpYXQiOjE2ODMwNDE1ODV9.bCcRBKcvnQHqheA4mb0adoUDpfY6mlfxJrYcLTI8eX7fjZfbSRljKhO7XEMXZLzSYQwGrCg6V441hZ80cfqiBA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_49 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiI5OWY4MjRhZi01OGRiLTQyZGEtOGI5MC03YzRmYjdjNGQxMzMiLCJpYXQiOjE2ODMwNDE1ODZ9.kpe1ncfF4Vf4yDcRjZiwBDEh6xSJGpIMgsLaFEov09jTT3J2FBSSkn-65dbMIUuuikhbdhbj_GrLxznM0z9GHQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri2 = "https://pruebasolid1.inrupt.net"
  
  private val uri3 = "https://b.tile.openstreetmap.org/13"
  
  private val uri4 = "https://a.tile.openstreetmap.org/13"
  
  private val uri5 = "https://pruebasolid2.solidcommunity.net"
  
  private val uri6 = "https://uo271572.inrupt.net"

  private val scn = scenario("VerPuntoEliminarVisualizarPerfil")
    .exec(
      http("request_0")
        .get("/13/3962/2997.png?")
        .resources(
          http("request_1")
            .get("/13/3962/2997.png?")
            .headers(headers_1),
          http("request_2")
            .options(uri6 + "/private/reviews/reviews.json")
            .headers(headers_2),
          http("request_3")
            .get(uri6 + "/private/reviews/reviews.json")
            .headers(headers_3)
            .check(status.is(404))
        )
    )
    .pause(4)
    .exec(
      http("request_4")
        .get("/13/3962/2997.png?")
        .resources(
          http("request_5")
            .get(uri3 + "/3961/2997.png?"),
          http("request_6")
            .get("/13/3961/2998.png?"),
          http("request_7")
            .get("/13/3963/2999.png?"),
          http("request_8")
            .get(uri4 + "/3964/2999.png?"),
          http("request_9")
            .get("/13/3962/2997.png?")
            .headers(headers_1),
          http("request_10")
            .get(uri4 + "/3964/2999.png?")
            .headers(headers_1),
          http("request_11")
            .get(uri6 + "/private/points/points.json")
            .headers(headers_11),
          http("request_12")
            .get("/13/3962/2997.png?"),
          http("request_13")
            .get(uri4 + "/3964/2999.png?"),
          http("request_14")
            .get("/13/3962/2997.png?")
            .headers(headers_1),
          http("request_15")
            .get(uri4 + "/3964/2999.png?")
            .headers(headers_1)
        )
    )
    .pause(3)
    .exec(
      http("request_16")
        .get(uri6 + "/private/points/points.json")
        .headers(headers_16)
        .resources(
          http("request_17")
            .get(uri3 + "/3962/2999.png?"),
          http("request_18")
            .get("/13/3962/2997.png?"),
          http("request_19")
            .get("/13/3964/2998.png?"),
          http("request_20")
            .get(uri4 + "/3961/2999.png?"),
          http("request_21")
            .get(uri4 + "/3964/2999.png?"),
          http("request_22")
            .get("/13/3962/3000.png?"),
          http("request_23")
            .get(uri4 + "/3963/3000.png?"),
          http("request_24")
            .get(uri3 + "/3964/2997.png?"),
          http("request_25")
            .get(uri3 + "/3961/3000.png?"),
          http("request_26")
            .get(uri3 + "/3964/3000.png?"),
          http("request_27")
            .get("/13/3962/2997.png?")
            .headers(headers_1),
          http("request_28")
            .get(uri4 + "/3961/2999.png?")
            .headers(headers_1),
          http("request_29")
            .get(uri4 + "/3964/2999.png?")
            .headers(headers_1),
          http("request_30")
            .put(uri6 + "/private/points/points.json")
            .headers(headers_30)
            .body(RawFileBody("verpuntoeliminarvisualizarperfil/0030_request.txt")),
          http("request_31")
            .get(uri6 + "/profile/card")
            .headers(headers_31),
          http("request_32")
            .get(uri6 + "/private/points/points.json")
            .headers(headers_32),
          http("request_33")
            .get(uri6 + "/profile/card")
            .headers(headers_33),
          http("request_34")
            .get(uri6 + "/profile/card")
            .headers(headers_34),
          http("request_35")
            .get(uri2 + "/profile/card")
            .headers(headers_35),
          http("request_36")
            .get(uri2 + "/profile/card")
            .headers(headers_36),
          http("request_37")
            .get(uri2 + "/profile/card")
            .headers(headers_37),
          http("request_38")
            .get(uri2 + "/profile/card")
            .headers(headers_38),
          http("request_39")
            .get(uri5 + "/profile/card")
            .headers(headers_39),
          http("request_40")
            .get(uri5 + "/profile/card")
            .headers(headers_40),
          http("request_41")
            .get(uri5 + "/profile/card")
            .headers(headers_41),
          http("request_42")
            .get(uri5 + "/profile/card")
            .headers(headers_42),
          http("request_43")
            .get(uri2 + "/private/sharedpoints/uo271572/sharedPoints.json")
            .headers(headers_43)
            .check(status.is(403)),
          http("request_44")
            .get(uri5 + "/private/sharedpoints/uo271572/sharedPoints.json")
            .headers(headers_44)
            .check(status.is(403)),
          http("request_45")
            .get(uri4 + "/3964/2999.png?"),
          http("request_46")
            .get("/13/3962/2997.png?"),
          http("request_47")
            .get("/13/3962/2997.png?")
            .headers(headers_1),
          http("request_48")
            .get(uri4 + "/3964/2999.png?")
            .headers(headers_1),
          http("request_49")
            .get(uri6 + "/private/points/points.json")
            .headers(headers_49),
          http("request_50")
            .get(uri4 + "/3964/2999.png?"),
          http("request_51")
            .get("/13/3962/2997.png?"),
          http("request_52")
            .get("/13/3962/2997.png?")
            .headers(headers_1),
          http("request_53")
            .get(uri4 + "/3964/2999.png?")
            .headers(headers_1)
        )
    )
	setUp(scn.inject(constantUsersPerSec(2) during (50 seconds) randomized).protocols(httpProtocol))
}
