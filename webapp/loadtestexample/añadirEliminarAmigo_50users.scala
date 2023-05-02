
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class añadirEliminarAmigo_50users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://uo271572.inrupt.net")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_0 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Access-Control-Request-Headers" -> "authorization,dpop",
  		"Access-Control-Request-Method" -> "GET",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
  )
  
  private val headers_1 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjZiMzU2NjA0LTQ1YTktNDUzOS1iNDY3LTA4YWQyYmNhNmU2MyIsImlhdCI6MTY4MzA0MTUxNH0.kJ4eh5Ou0FxUlOqZfs2G3J7YvYmOyJ751St9cur_4aDZgchhE79KBlHzsfrUgqnT1ehGcgvMpqE1sNkSh1AVYA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_3 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMzk4OTdiNjctOWE3Mi00NWZkLWI5ZmQtY2IxOGQwMGFkNGRlIiwiaWF0IjoxNjgzMDQxNTE1fQ.DPYAjyHFAO16jH9Hu9xFLe2LJu1PYQh8SI8bOygF97DPvidmPObpZ3IbOh2AWBuFN_tQmabxsZAUkigp9T2OpQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_4 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Access-Control-Request-Headers" -> "authorization,content-type,dpop",
  		"Access-Control-Request-Method" -> "PATCH",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
  )
  
  private val headers_5 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"content-type" -> "application/sparql-update",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiUEFUQ0giLCJqdGkiOiI5NTQ3YjU3MC03ZTY3LTQwMzYtODkxZi01ZTQ2ZDk5NGM4ZmQiLCJpYXQiOjE2ODMwNDE1MTZ9.4BAnAPNBa6MWYOnCEuZ4nacVftcj7eI8qDge_pBTyNcW20q60_uNInl66sbaKHkEpoyi68REuNPDTE-HWD7aug",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNjY3NDYxOTctYzNlMy00NjZkLWFiNjctMDhjYTFlMDc0ZjUxIiwiaWF0IjoxNjgzMDQxNTIwfQ.mxwxonMPnLG7_Q_9UE4h_KSC0XBmWMW7B3PdAK0TlsJSUTm6kJwkT7eb5ZtrCqCxTgVRBhwcKYlA5KZLnTMFuw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_8 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjdmNDBkNTk3LTNlOGUtNDUzNy05NzIwLTkyOGI3ZmUwY2JjYSIsImlhdCI6MTY4MzA0MTUyMH0._dQ6zMmG-iB9aS7nb3wyWMLoz5t07sKvCkZlmdBTm-b0mBudRfo2TxdFqp8e7EKtmIa5QmDKDAS3YHHlAczpqA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_9 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImRmMzQxYjY5LTEyYTUtNDFjYy1hMGEyLTU4NTM4NTZhZmJmZiIsImlhdCI6MTY4MzA0MTUyMH0.jZeOUlhsOW7ntrq8i8AMhKNT8BVPQj-275oaGp8N5tYrjfUA3uXWJijDVfrtMgsB_SKcgWbKM4buau56pWyoGg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_10 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImJmZGQyNzRmLWY4YjktNDJjMy04MWY5LWM5N2ZiMDAyOWVlNCIsImlhdCI6MTY4MzA0MTUyMX0.1YiJCX-dKoUauvOD3XLADklVKlofD5OjAo-mqUmO9ibTfPQ8piXcPDRX0h76DZzbbgbD3y8iW43fOrOhBXjbKg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_11 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImMzMGY3MGNhLTlhNTgtNDFmMy1iNWI4LTM4NmFkY2U3MGVmOCIsImlhdCI6MTY4MzA0MTUyMn0.aOxiNDSzJ6V0FcOohsqm3kd9ZuDb08Tak5MknYpLPQ9wGzwJYCMjzaAvx6DObjgVCpIygYqLQZvgmZcFsO-h1A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiY2ZhNjhhMTktOWY2Mi00MTc4LTljMzMtNzg3YmZlY2U0NTQ5IiwiaWF0IjoxNjgzMDQxNTIzfQ.N_jUyV-mrHWYxcOdwDNSgSlc0HXiJ4h6kulcTHorzfH43nLWIshZLyNVgX7LU47TlrGq3PLFMGIjAAq2znEuaw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_13 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiODNjOWJlYzktMThhMS00NmRiLTlmMDAtNGJjOTc1ZjE0NDIyIiwiaWF0IjoxNjgzMDQxNTIzfQ.Gu3XmgC8cH630gFuqr95yaIhpss3vcwO-QPIp72UjtCpxUFWfXf7bjDmck5bBn_K5mFsYjyziwgXVPTRpUkOhA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_14 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNjc1Y2E5MzgtMTY1YS00OTg0LTgxZjctYmQ5Y2QxMWNjMjY3IiwiaWF0IjoxNjgzMDQxNTI4fQ._MLJ0Y8CX4HvfpcGZobEVAK0UfUQpFk8D6DAdvACmjm4-lAONeKLfTcsT8Sny7SQLmKICT0pJjA94Kx_EFoCQw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_17 = Map(
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
  
  private val headers_19 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTAwODQsImlhdCI6MTY4MzA0MDQ4NCwianRpIjoiZGFjMTU5NzJiNDNjYTVmNiIsImNuZiI6eyJqa3QiOiJBOHZLNHFHNm9wQ3FFSllpVTZFanpSdFVSZFZ3MXRMVGxmOGF4U01WYlRvIn0sImNsaWVudF9pZCI6ImUzYmVkZDNkNWQ5ZTdkNmE3MjY0MmM2NzJlMzJhM2M0Iiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.VIsS4cNx_8TBtDEU1g-PwmuVQretUNjtT1HT3j9rlLpyFyUoEY-TJqz-V9mhBZ40A_zrBX9-rg_mhXQWwjsdhlmwOoUwIw3rHWlNCk9ElDPXHJDUASCW-alULzrZ91RxbcXdwHWcZFGW_y7fhYTIPirwDrPt2FvO-7EWAprFJlaw-SVeY_hY_1VjW-VlzcpY9rm61McgzaqiozWLqedrZoIncJEfg23L1h5UL_o4oHUrRCyWHqDJiSzQdomWDOQ0jsNA5C1sMm5zwLVtejvHYUHkH3Uf2vQGjV6T3a_ky2d5v2IPM_7MjWW9qwlxUN0PHAkFcJzb3uYzdXrN-2D3Cg",
  		"content-type" -> "application/sparql-update",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ilh5VXBUZXpjNWI3eUs5UDZqaENkOHZOTy1WM09hbTFVT0xuN25Qam53SEUiLCJ5IjoiaE1qVlROTm1nQ1BzblhaNGV2Zjh4WUMtWmI0ejlUTTJldUpxTWg5eEtWYyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiUEFUQ0giLCJqdGkiOiI1YjMwNWQwYi0yYzU5LTRiNjEtODJmNy0yOTRmNTcxMmQ4NmUiLCJpYXQiOjE2ODMwNDE1Mjl9.IvxwXVsoKfOBVAq-dYc6qhCb5smz4VyCInqhMfQ5nan4wr3iASP9gqadKVb5XpOSkNrxJxRnL4IZpCc5VrBeqg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "https://c.tile.openstreetmap.org/13/3962/2997.png"
  
  private val uri2 = "https://pruebasolid1.inrupt.net/profile/card"
  
  private val uri3 = "https://a.tile.openstreetmap.org/13/3964/2999.png"
  
  private val uri4 = "https://eloquen17.inrupt.net/profile/card"
  
  private val uri5 = "https://pruebasolid2.solidcommunity.net/profile/card"

  private val scn = scenario("añadirEliminarAmigo")
    .exec(
      http("request_0")
        .options(uri4)
        .headers(headers_0)
        .resources(
          http("request_1")
            .get(uri4)
            .headers(headers_1),
          http("request_2")
            .options("/profile/card")
            .headers(headers_0),
          http("request_3")
            .get("/profile/card")
            .headers(headers_3),
          http("request_4")
            .options("/profile/card")
            .headers(headers_4),
          http("request_5")
            .patch("/profile/card")
            .headers(headers_5)
            .body(RawFileBody("añadireliminaramigo/0005_request.html"))
        )
    )
    .pause(3)
    .exec(
      http("request_6")
        .get("/profile/card")
        .headers(headers_6)
        .resources(
          http("request_7")
            .options(uri4)
            .headers(headers_0),
          http("request_8")
            .get(uri4)
            .headers(headers_8),
          http("request_9")
            .get(uri4)
            .headers(headers_9),
          http("request_10")
            .get(uri2)
            .headers(headers_10),
          http("request_11")
            .get(uri2)
            .headers(headers_11),
          http("request_12")
            .get(uri5)
            .headers(headers_12),
          http("request_13")
            .get(uri5)
            .headers(headers_13)
        )
    )
    .pause(4)
    .exec(
      http("request_14")
        .get("/profile/card")
        .headers(headers_14)
        .resources(
          http("request_15")
            .get(uri1 + "?"),
          http("request_16")
            .get(uri3 + "?"),
          http("request_17")
            .get(uri3 + "?")
            .headers(headers_17),
          http("request_18")
            .get(uri1 + "?")
            .headers(headers_17),
          http("request_19")
            .patch("/profile/card")
            .headers(headers_19)
            .body(RawFileBody("añadireliminaramigo/0019_request.html"))
        )
    )

	setUp(scn.inject(rampUsers(50) during(60.seconds))).protocols(httpProtocol)
}
