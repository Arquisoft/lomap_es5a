
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class guardarpunto_120users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://a.tile.openstreetmap.org")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_12 = Map(
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
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZGY0YTVhY2QtNzEzZi00NGU4LTg2NTMtZDM2MWQyN2YzNWYyIiwiaWF0IjoxNjgyODY3NTY5fQ.U0dFwTviKe-Cs0SzslvepV7_MTsY3WA7Cdxv5UBYZrQwiaxBrQbDB9KzNUqrGXEwQF-2NBT_Myt-GMiCB6o4-w",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_20 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYjI0YzY2ZmYtNDRmMi00MjUzLTliNWYtMjgzNzE5YmEzODg2IiwiaWF0IjoxNjgyODY3NTcwfQ.BSspdsM7zVqgXnoig--usHLQCZCOlg7xGvpxef-bBIhx_zmLRACBrPnfTdNWrd0MrKg5Fj_pl0bnF95Ntay8sw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_21 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjBjYjhlMTI4LTliMDUtNGZmNC1hNGViLWQ2Mzg0NTE0MDU0YiIsImlhdCI6MTY4Mjg2NzU3MH0.Rirx4n03xfeizGX198UP2JBdG4wd9tUejnSyRv3J3EHmK2tNZjuOLE51uC2-HoLIIdHWVmmuMecz_rq7wf2DPw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_22 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjM2ODdlZWY1LTdjZTEtNDNlOC1hNDFmLTU2YzNhYWVhMWY5MyIsImlhdCI6MTY4Mjg2NzU3MX0.3XHoSzAN3hF_dMKu1knMh2MmwiyTMgxXcA7URcZEVYsrsncmqUifw8635wZIV7lsBiVdM9bG8vsHt8Kf6JkgyA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_23 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiOTFmNDk0MDUtMDQyYy00Y2VlLWEwNWYtNDZiMjU2MjI0YWE0IiwiaWF0IjoxNjgyODY3NTY5fQ.RO5rY64GDW3ifreceZQMnWa3StNtF6KZuYGgiLcAJuaGqWB1NVbxZUSFa17j_NGrepZlLjvT-WoI8OdipDm3pA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_24 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiIwZTRjMjNiMC1hNmJiLTQzMjEtOWJkMC02M2U2YTk4NmMyMjciLCJpYXQiOjE2ODI4Njc1Njl9.Rx0by5Wf6XiK6kMPmcH5tiOfAoFMBsL0AfpWthOzB9NTpScZTXdNQfZ4Gc7TvvblwILUoTWtGs12_A27L4TlyA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_25 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImZmMTk1MzZkLWM0NzAtNGNiNS1iODkxLTgxYTFhZWY5MzE3ZCIsImlhdCI6MTY4Mjg2NzU2OH0.N5zvqSQYjy-y9GJiosbm4gX-PSwnPp__znxDeGI4sObo-zAHM6Sx1F0TFu9xf1pWt5pzcUzstsApQa4LEe9VsA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYzAxYjM1NjMtMjFkMC00NDU1LTk4ZGMtYmU0NDY1MmI5YjBiIiwiaWF0IjoxNjgyODY3NTczfQ.GmWfPBhhKuXWbbuViQ8-Sr6uIvwKGuBbHYvJO_B8JeeeWZpwlQk7Ltri-riS2TsVZd-ABerJ7Iu568DGCK8khg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_27 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYTA2YzI4N2YtY2QyOC00MzVmLTk2OGMtYjU3OGU1MTdhNTM1IiwiaWF0IjoxNjgyODY3NTc0fQ.Gzn8JG3F2E4l29iIprFvmnNf_ckEThLZ8L2gqZUG2VtiexWTGbQYXEjV5IJFcFyiQmu0CiUglJf7Z0z1UOUkcQ",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImYzMGM3NjMyLWJkNzgtNDJhOC1iNDdhLTE4ODc3OTA3ZjkxMSIsImlhdCI6MTY4Mjg2NzU3NH0.X_kqRmNHVC_L-Z4ft85XKf3nvCTmZxCLBGw5_LQM0DwC-xc5dqotRTbiLMY8jgavRX6G4LNmfbb4rbdyDQ83nw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjE1MmJiZWE4LWVkOTUtNDgzMi05Zjc3LTQzMWRiYTEwNjY0MyIsImlhdCI6MTY4Mjg2NzU3NH0.fycsI6QVy77yEszB5pGt90NLGN2eC2IwsmYEtHziW2J0oa-504f5FGedZpEvUj5aQh3b2WsQjLL08A5nRAjPXA",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZDUwMmVhYTgtZThhYS00NWYyLWFiNGYtNjY2ZGVkMTZhZGQ1IiwiaWF0IjoxNjgyODY3NTY5fQ.pPeWe9ECx7PDH45lY8WVPcgbUgeeawfINM2C8H7QJT8XpqkjL_DORjkxxEH833EIp3S5IEVTLkxfzXTkX5YXiw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImRmN2NlNmFjLTc0MTMtNGI1My05N2QzLWVmZWZlOWIxMDQxOSIsImlhdCI6MTY4Mjg2NzU3MX0.7q8-g4uG_KYl8Aym3ccH2y4Z7EeyeG16oRW9yKr8Z0UfAAHZtaObiT1J_pavgm9StlWrL9IYhk2CLUxe2Ea73w",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNWQ1MjNkNGUtMmJlOS00NGIyLWEyNzAtMDNlOTZhMzE5OGFjIiwiaWF0IjoxNjgyODY3NTc2fQ.9XmLfkA8AnEXu6jIQ6OB-E9XM-LJwRk4o3Azi0OerLXg5AIL2NAU4bjcyujnbMt4uTStuBQf_wf4r_8-iuM34g",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjY2Y2IzZTI4LWUzYWMtNDBiYS1hYmNhLWQyNWVhMWEzYjVjMyIsImlhdCI6MTY4Mjg2NzU3M30.1eyviVznvVhi59WCjbSKWHFUB3_sCf-XHdOky1QX-lGlmUnEi1dIuLOpuB4wB8zKhvxjLPcVP133JFIVBaB1UQ",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNmNmNjZmZmMtMTY3Yi00NDFhLWFhN2UtYzQ1ODExOGNmMzkyIiwiaWF0IjoxNjgyODY3NTc2fQ.SuXfDNxULVVkpMRAyS67wmrXd7klBI-aoOcTS0mNNWhEcksYeDXedEUjmD25RzGsw4b2bZUc6MDIXiaJKNqamw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjRkYzA2Y2VkLTgzMWUtNDlhZS1iYzRkLTJmYjJjY2EwYTA1NiIsImlhdCI6MTY4Mjg2NzU3N30.SpXVvydfhLQJ814_zmHe2q5pLuaxNS5SMmMg0Bd5PI0KgwA_96JhPrM2-BXEi8nhP-_LLVx7kfkhyBaDAH4YVQ",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjY2MWE2ZjhmLTgzNTEtNGFhZC1hYTEzLTQyNGY3Yzk3ZDVlYiIsImlhdCI6MTY4Mjg2NzU3N30.5wYD6lQi6ya-vYBlIr9rQHzZ1FxiW_a8_m9Xd6am4taCvrrr3dqsxEFCdosNP1ek_Wdtd9GGdsOnZMadAQsJOw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjVlMjcxYjBmLWUwMmUtNGM4Yi1iN2VjLTliZmExYjc4N2Q4YyIsImlhdCI6MTY4Mjg2NzU3N30.l8IJ9q5Ib6LGZ4tpyxp-tfU_lerPqIjrqZ6DJofj2upF4Yf9QuNruW8ci4-2WAuSIDs7q8_etRxefhkmAXTgPg",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiNWNiMWZkMzUtZjVlZC00MzMwLWE4MjgtMjc4ZWM4MTJhZTJjIiwiaWF0IjoxNjgyODY3NTc4fQ.yH8B8QEbHDNgX_4vnFN29i2nscSLUWkVZL_OKnOwMzKLBfA9zpp7xJrbGdl7mczuYzNFudEuAFv_beSGA_1k5Q",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjhiNjJhNmQxLTQzOWMtNDQyMC1hNjkwLWUyNDkzYTI4MmZkYSIsImlhdCI6MTY4Mjg2NzU3OX0.bLKxkILCL2U_mccr0JQxcg5qGLgqFyVjPI_JLRDdIGAqhczI7z5QOvLIogQ5nIZuW0djSxjC1QhZM0nEUCiVpA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_40 = Map(
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
  
  private val headers_41 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImUyMWI0NjE4LTY4NDQtNDZlMS1hMGNjLWFiMWQ1MDBlNzk3MiIsImlhdCI6MTY4Mjg2NzU4Mn0.Ijxb6KxJvheRgJyPKia0RAFERTH4TaX1FRy8zZUc0L_R8YELHwJjUsIco0DHfTvRBhqBk37gKzRE98QBe-ZhOw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNDMxZDRhMzctNjUzOS00ZmRjLTg2ZGMtZWU1NjVlZjU4MzYxIiwiaWF0IjoxNjgyODY3NTg1fQ.5xURFsAGr9Q54I4lnhuYZ2sS4Z1AHsP7Q1Cm3lzbj2LbZPiCgkhlKs4AXD9zUXRMDvEVK75xOYeLJMQ_Q1lL4A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_43 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNjNmZGM3ZjYtZGZlNy00MWQwLWEyNGUtMGY0ZTJiYjgyMDI4IiwiaWF0IjoxNjgyODY3NTg2fQ.Cose5kN245RgoevikAKn9-rQMSGse20Z_wDB5D7l6AGTzYkdjzQ7QxG0FnJjKlAlNmgzGDNkaOOUgegsIW1thA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_44 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjBkNWM4Y2U1LThlNmItNDQ2Zi05Njg1LWFkYjkxZjFhZjc5NSIsImlhdCI6MTY4Mjg2NzU4Nn0.UD5kBq-AWx8B51itq4By09hbrxoXOLcojFn27YbaTnatKpbRcvsbqLBoaDyYFnSEkEreo8OWr5UJCjx0Zrb48w",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjYyZGM0OWRlLWFlY2EtNDY0MC1hODc3LTc0MDk4NWY4NTk0MyIsImlhdCI6MTY4Mjg2NzU4Nn0.WXNkzjRok0rIQWoaM-Ly_31vGc2F9maeemeH49ZWgVocaj4Uu_mciqUkWZno6XC7Mk28jmW5Bb1CrLykYFFQFA",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy8iLCJodG0iOiJHRVQiLCJqdGkiOiI1NGQ4ODg4OS05Mzc4LTQ3NzQtYjcxYS1jNTQ0NTkxOTQ3NDgiLCJpYXQiOjE2ODI4Njc1ODJ9.tAnIBE2co3Eej2fHOfWXjGU16KtXL8jcbw-zmjncyEH9c_L1lerHY45h0RSJ7tAd71E8wqFY85yW1NC4VdbiRg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_47 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiNDkyZTAzN2ItNDg1MC00MDYwLWE1MzItYmI3MDBkODZmNjU3IiwiaWF0IjoxNjgyODY3NTg2fQ.1_nO6GZTsfLd0Pd_zFshdgtQOxdFOlbwQYg8xoXyMpx7i-JCRrZUXvUws69mXNAefyeqHNDxhDYOhflEQmd_SA",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYzZmZDA3N2UtYWNmNy00NTVmLTk1MWMtOWQxZTM3NTIyMzhhIiwiaWF0IjoxNjgyODY3NTg2fQ.-0hvajULBj5vBq9kuyx26F_Wllp7QTMpVrOuHAoKTMnrf7T6nsuz_bXKWmLwygAlqB7iNDChAF3VaXQHwQxxbw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_50 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjgwNzM2MTE0LTVhYzctNDY5Yy05NTNjLTQ0ZDYxOTQwM2VhZSIsImlhdCI6MTY4Mjg2NzU5M30.j5QraW_RAMOkyc2c71mCdVIvM6nX31RtrDRBpXi9C2vlgfVDl_0aIJuXHte36XsYUrOVUh3MVhp1oLMOY9lBHA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_51 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjllNWMzOGQ5LTk1NjItNGI3NC1hYWQzLWY4ZDc3Y2RkMmU0YyIsImlhdCI6MTY4Mjg2NzU5N30.f97barjRtYazzAaXVeCz6XCKZ8BObHQWX8qtQkcDY2FlVpMSbunN8cYa1MgNnYM2Ca1clCghZsQZk2Tw4bD8Jg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_52 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiYjA0YzM0YTgtNzdhZC00NmJlLWFlMTQtM2M3NTNkNzIzOWM1IiwiaWF0IjoxNjgyODY3NTk3fQ.7ukrHdgYLDzfVZRKVEWdAd2rObGgoSF8AZ-iDkGdfESnxlRIuMFUUmWqubJREYu0_lG_Uob4G4sUR7wTzvlrPg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_53 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiOGEwNTM4Y2ItMWZiNC00N2IxLWEwNmEtYjAzMmMwMGZlNzI2IiwiaWF0IjoxNjgyODY3NjAxfQ.OuNgibah2aDaN8f5B1p-Q_MDltKrkofll58CBQSUPUFFoXPJUjC8yvn_UJMevzSuUITB1AlLLw7Q7UJTOXSnDQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_54 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjkzZWM2NmY1LTExNjMtNDQ0Yy04MjY4LTNlOTk4ZjQxMWIxZiIsImlhdCI6MTY4Mjg2NzU5OX0.XLUbD3ncO44pCId5xKW3tePyq2KvYHlBU8dQE5dloGSgOYwdEWKPwfVuem0wetoKpr1CqRCx1jc0V_WQbVnhAw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_55 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiUFVUIiwianRpIjoiYzAyZmRlNjItYjQxZi00YmFjLTkzNWItZTMxOGY5MDkxNGZhIiwiaWF0IjoxNjgyODY3NjAzfQ.Yxq_1C0cSB0A-5weI8MUiG7cl3rdVHCVH9oGZjN8Xt6JFATzuysfK11Zcs_epLkkLPGuCHE22DnYIIRNy6Pe9g",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_56 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImE1YWYxODgzLWQwNzQtNDQyYS1hM2Q0LTljMTQ4ODU0NDMyMSIsImlhdCI6MTY4Mjg2NzYwNH0.bGKKPolqHKs40-MGkgWYormdhUO2zxWAjIw3zUX6C3QG2XXFlb-V6wDywThjUvhOSVINSKluZz5P6Kvjn3Z6PQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_57 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYmI1NGIzY2ItOTBlNi00YWU3LTkyMDctOWQ1NWNmOGY5ZDJmIiwiaWF0IjoxNjgyODY3NjA2fQ.xVSykyiewKRiP1vlqcq6ZwzsyiPgheLCr3lhKJqNg_9LHXX3JSPdLCiBEqLXJqd98d-sygv2we7ky3kPQFqMSQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_58 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZDI1MGY2ODQtNWFiZi00ODE2LWE5NTMtYzlmMzI4NDU4ZWZhIiwiaWF0IjoxNjgyODY3NjA3fQ.lDRNK0wALqViZjGorgzHi4w3h6HOkDkLCoJxwvowsG71U90d0BnLBrlvxzcWP4-jlymW4yKr_2-jiOQveWwJmg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_59 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6Ijk1YTBmZmRiLTg4NWYtNDNhZi1hMzBmLTg3NTI0Yzg4M2FlNCIsImlhdCI6MTY4Mjg2NzYwN30.QYONuDv1QWMiBEDr9UlV0F9T976M1_dT-CK3aZv14Xy3Hd9sCpEJxxdI9uRNfG0h3_LpaKWT-s6wFenGWTDPuQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_60 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImJhZTkyMjFmLWZjMzgtNGNiMC04MjA3LTNiNzQwY2FmYjYyYyIsImlhdCI6MTY4Mjg2NzYwOH0.fw1xnm_M2-Fu_LCByxTLQc1VxOPmx-psMSxt7cPIAb7dSgjzfUj7vi_zM3oSAo6rfSElWMa4O4pyXOuGlGg3iA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_61 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYmY3MzhmODAtZTA5Mi00ZWFlLTkxYmEtNjY5OGVlMWJhMmQyIiwiaWF0IjoxNjgyODY3NjA4fQ.ZOntLJbaLvBkfJ0AYe33L6GgyxIS6oczlUYS413KNsWRjtXS_AKYltIYe2yE2zsagCcUkbIXOiMQF1YAkvDGHw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_62 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImVmMWZlNGVkLTVjYzEtNDcxMS1hYTJmLTJjOTA1NWQwNTAzZSIsImlhdCI6MTY4Mjg2NzYxMX0.hzbMwJJ21CEx6EzF-l7IWz7sTDAsoTYvOIagOXlAZFc2pppBuyi8FbDacH_maQEEAj1LYCWbNgaYhYwwrb_F5w",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_63 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjA1NTJkZmJmLWY2NWItNDQzMS05OWZmLTY0MTE5MDI1Yzk4ZCIsImlhdCI6MTY4Mjg2NzYxNH0.HJxfKWOUBIo-GcCbKTA2ZwUjkdBh2ahPNB-9cAVQBL3Iss6H-tU_tSSHbNMltidebc8GChcHKZqskVK9b4V22A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_73 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjIxZjYxNTU1LTVkMWUtNDQzMC04Yzk1LWFlMjk1NzA0MzZkNSIsImlhdCI6MTY4Mjg2NzYxNn0.DSoT-sDl1Ex7yGiHVUS5ZcAdLPi1XY6VgRyJVt-6x0OIvPVk6Kjp51jbysgnh-Nbq8381OY3aGCl4SBmOhUpGA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_74 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjY5MDAwMGVmLWY3NjQtNGI4Ni05ZTNiLTY5YzY2YTkzZDllOCIsImlhdCI6MTY4Mjg2NzYyMn0.EJCq-CHSKe80g3pkskCXB3dgxK5DfWZ_AjRUiAagHjtFHcLQaDX5wm1x6Wh0nAiG2TXJ9Fs61rreoLs2WUZhAA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_75 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMDVjZWE0Y2QtODEzNC00MWViLTllNjItZTE3MWM2MTU2OThjIiwiaWF0IjoxNjgyODY3NjIzfQ.kPPUeff1SP0XerALfQLAwD214tYLrc3i_eqzS_-lRKgaY_5SYLyfEr3QB81LPNTUtHKycuXqQipqHEKzQrWKPQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_76 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiOWUxNjE3MmUtYWZkZC00OTI5LTk4ZmMtZWMyMGU0ZmIyMjM2IiwiaWF0IjoxNjgyODY3NjI0fQ.8E-IVyN_uHGWLZ716VYYs6g7q1wfnQyG_RDwQN9MgN5WrqmsXpey6sGB8nWsZkss0ACfIt-KYv2-aDIOoiijrA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_77 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjQzMDEzMGQ4LWFkYWYtNDA2Ni04MTRjLWYwZTU0NTM1MjUyMyIsImlhdCI6MTY4Mjg2NzYyNH0.Ma71f92vCy0N3wJ-F26yyxtTSn3peFbBREAXkpkFWGi1ZJR_-cdpQp9MmXLz40azjORgd2QKqs_3mu4BEpR0GA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_78 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjkxYjc2ODIzLWFjNjUtNDZhYS04OTRkLTI5NjZlNTRjZDhjNSIsImlhdCI6MTY4Mjg2NzYyNX0.ND0QdOE58v3jCQ8osiG7ny1v37A8GZHLE6a1_B88cNmFwm5hRSQi1BcGp1kVJh6DFEs3lq24fv1b_fEBLaH2_Q",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_79 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMDhlZDk4NjEtNDUyNC00NmNmLWFmZTMtMWE1MmIxYWQwMzA1IiwiaWF0IjoxNjgyODY3NjIwfQ.X5OnAo7fkrEz2leN9-jo62GsKGeuxn8WJH_CvcfZyRVUjZDor2_mgI0V3KquwqAeWLn4RivG5U963VVWLXwuFg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_80 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiI5OTBlYjA3Yi1kMDFmLTRhNjEtYTYwZS1mOWYwODg3YmQ4MDEiLCJpYXQiOjE2ODI4Njc2MjB9.Jd8BHOG-28ByZobevsi-tVf8ORSiv9Dz6N7XzKUxRNF5NE-83tCShiRFFc1b7o2YmZ8iWmXid0bT9e3hQrwdpA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_81 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiZDJhM2MxMjAtNWYwMy00NGE5LWFhMTEtNzdkN2Q0MDc1NWVkIiwiaWF0IjoxNjgyODY3NjIzfQ.EW85fAcvTKzImrj2VLEkDh30--j4LNrBkw65EqdCRd4yVv04pfXvDo6TW6LTrQ-wxiGc2gkZOA5E6QfcpwNmrw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_91 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMWQxMWE0M2MtMjBiZS00ZmJjLTljZTctMDQ5NWI4YTk5YjUwIiwiaWF0IjoxNjgyODY3NjIzfQ.GLAaxS60x8-WGDFpB_2bdxZqX9mG30Sy0pj4aPRnDPPpXiVNqeC1_gMKbMBrKGB9ahwLq3yjw9skdlfOOfv8gQ",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_92 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZGZkNDZkZmMtYTYzNy00NzMxLWFiYmYtZWZmMDQzYTQ0MmM3IiwiaWF0IjoxNjgyODY3NjI1fQ.Z6b0O6iEeuiOk-rIPPUDKpt18g1aLOZ7VZbAXjD_TcL-s3xLIsl8CenlVpEsslz-Wih2yDhFsay3-Vr39LhIqw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_93 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImY2ODM1YWU5LTc0OWMtNDgyNi04M2YyLWRiMDA0YzRiYmE2OSIsImlhdCI6MTY4Mjg2NzYyNX0.5d5oq6uW_Um9u1-_x8pH9fIqGbxkFnExm2a4HEFBmfXJF4qupO3LjzAtBBEkFM-CPUPvZF_FP48Dd7Dp_RAJPg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_94 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImI0NjM0MjFlLTliNDgtNGE2MS05MzViLTRiMmRiNTAyZmQ0MSIsImlhdCI6MTY4Mjg2NzYyOH0.YCvC8yKNO7HNz1K9r7aThsUWM-xkGg5wCQdyl0AOVZCKiIto9pX6ust9FLSZHpLhBNl2ksOAy-pB_Vfofv2c-g",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "https://c.tile.openstreetmap.org/13"
  
  private val uri2 = "https://pruebasolid1.inrupt.net/profile/card"
  
  private val uri3 = "https://b.tile.openstreetmap.org/13"
  
  private val uri5 = "https://richardpix.solidcommunity.net/profile/card"
  
  private val uri6 = "https://eloquen17.inrupt.net/profile/card"
  
  private val uri7 = "https://pruebasolid2.solidcommunity.net/profile/card"
  
  private val uri8 = "https://uo271572.inrupt.net"

  private val scn = scenario("guardarpunto")
    .exec(
      http("request_0")
        .get("/13/3962/2998.png?")
        .resources(
          http("request_1")
            .get("/13/3963/2997.png?"),
          http("request_2")
            .get(uri1 + "/3961/2998.png?"),
          http("request_3")
            .get(uri1 + "/3964/2998.png?"),
          http("request_4")
            .get("/13/3961/2999.png?"),
          http("request_5")
            .get("/13/3964/2999.png?"),
          http("request_6")
            .get(uri1 + "/3962/3000.png?"),
          http("request_7")
            .get("/13/3963/3000.png?"),
          http("request_8")
            .get(uri3 + "/3961/2997.png?"),
          http("request_9")
            .get(uri3 + "/3964/2997.png?"),
          http("request_10")
            .get(uri3 + "/3961/3000.png?"),
          http("request_11")
            .get(uri3 + "/3964/3000.png?"),
          http("request_12")
            .get("/13/3962/2998.png?")
            .headers(headers_12),
          http("request_13")
            .get("/13/3963/2997.png?")
            .headers(headers_12),
          http("request_14")
            .get(uri1 + "/3961/2998.png?")
            .headers(headers_12),
          http("request_15")
            .get("/13/3964/2999.png?")
            .headers(headers_12),
          http("request_16")
            .get("/13/3961/2999.png?")
            .headers(headers_12),
          http("request_17")
            .get(uri1 + "/3962/3000.png?")
            .headers(headers_12),
          http("request_18")
            .get("/13/3963/3000.png?")
            .headers(headers_12),
          http("request_19")
            .get(uri7)
            .headers(headers_19),
          http("request_20")
            .get(uri7)
            .headers(headers_20),
          http("request_21")
            .get(uri5)
            .headers(headers_21),
          http("request_22")
            .get(uri5)
            .headers(headers_22),
          http("request_23")
            .get(uri8 + "/profile/card")
            .headers(headers_23),
          http("request_24")
            .get(uri8 + "/private/points/points.json")
            .headers(headers_24),
          http("request_25")
            .get(uri2)
            .headers(headers_25),
          http("request_26")
            .get(uri7)
            .headers(headers_26),
          http("request_27")
            .get(uri7)
            .headers(headers_27),
          http("request_28")
            .get(uri5)
            .headers(headers_28),
          http("request_29")
            .get(uri5)
            .headers(headers_29),
          http("request_30")
            .get(uri8 + "/profile/card")
            .headers(headers_30),
          http("request_31")
            .get(uri2)
            .headers(headers_31),
          http("request_32")
            .get(uri7)
            .headers(headers_32),
          http("request_33")
            .get(uri6)
            .headers(headers_33),
          http("request_34")
            .get(uri7)
            .headers(headers_34),
          http("request_35")
            .get(uri5)
            .headers(headers_35),
          http("request_36")
            .get(uri5)
            .headers(headers_36),
          http("request_37")
            .get(uri6)
            .headers(headers_37),
          http("request_38")
            .get(uri8 + "/private/savedPoints/savedPoints.json")
            .headers(headers_38),
          http("request_39")
            .get(uri2)
            .headers(headers_39),
          http("request_40")
            .get(uri8 + "/profile/card")
            .headers(headers_40),
          http("request_41")
            .get(uri2)
            .headers(headers_41),
          http("request_42")
            .get(uri7)
            .headers(headers_42),
          http("request_43")
            .get(uri7)
            .headers(headers_43),
          http("request_44")
            .get(uri5)
            .headers(headers_44),
          http("request_45")
            .get(uri5)
            .headers(headers_45),
          http("request_46")
            .get(uri8 + "/private/savedPoints/")
            .headers(headers_46),
          http("request_47")
            .get(uri8 + "/private/savedPoints/savedPoints.json")
            .headers(headers_47),
          http("request_48")
            .get(uri8 + "/profile/card")
            .headers(headers_48),
          http("request_49")
            .get(uri8 + "/profile/card")
            .headers(headers_40),
          http("request_50")
            .get(uri6)
            .headers(headers_50),
          http("request_51")
            .get(uri6)
            .headers(headers_51),
          http("request_52")
            .get(uri8 + "/private/savedPoints/savedPoints.json")
            .headers(headers_52),
          http("request_53")
            .get(uri8 + "/private/savedPoints/savedPoints.json")
            .headers(headers_53),
          http("request_54")
            .get(uri2)
            .headers(headers_54),
          http("request_55")
            .put(uri8 + "/private/savedPoints/savedPoints.json")
            .headers(headers_55)
            .body(RawFileBody("guardarpunto/0055_request.txt")),
          http("request_56")
            .get(uri2)
            .headers(headers_56),
          http("request_57")
            .get(uri7)
            .headers(headers_57),
          http("request_58")
            .get(uri7)
            .headers(headers_58),
          http("request_59")
            .get(uri5)
            .headers(headers_59),
          http("request_60")
            .get(uri5)
            .headers(headers_60),
          http("request_61")
            .get(uri8 + "/profile/card")
            .headers(headers_61),
          http("request_62")
            .get(uri6)
            .headers(headers_62),
          http("request_63")
            .get(uri6)
            .headers(headers_63)
        )
    )
    .pause(3)
    .exec(
      http("request_64")
        .get(uri1 + "/3962/2997.png?")
        .resources(
          http("request_65")
            .get("/13/3963/2997.png?"),
          http("request_66")
            .get("/13/3962/2998.png?"),
          http("request_67")
            .get(uri3 + "/3961/2997.png?"),
          http("request_68")
            .get(uri1 + "/3961/2998.png?"),
          http("request_69")
            .get(uri3 + "/3963/2998.png?"),
          http("request_70")
            .get("/13/3962/2998.png?")
            .headers(headers_12),
          http("request_71")
            .get(uri1 + "/3961/2998.png?")
            .headers(headers_12),
          http("request_72")
            .get("/13/3963/2997.png?")
            .headers(headers_12),
          http("request_73")
            .get(uri2)
            .headers(headers_73),
          http("request_74")
            .get(uri2)
            .headers(headers_74),
          http("request_75")
            .get(uri7)
            .headers(headers_75),
          http("request_76")
            .get(uri7)
            .headers(headers_76),
          http("request_77")
            .get(uri5)
            .headers(headers_77),
          http("request_78")
            .get(uri5)
            .headers(headers_78),
          http("request_79")
            .get(uri8 + "/profile/card")
            .headers(headers_79),
          http("request_80")
            .get(uri8 + "/private/points/points.json")
            .headers(headers_80),
          http("request_81")
            .get(uri8 + "/private/savedPoints/savedPoints.json")
            .headers(headers_81),
          http("request_82")
            .get(uri1 + "/3962/2997.png?"),
          http("request_83")
            .get("/13/3962/2998.png?"),
          http("request_84")
            .get(uri3 + "/3961/2997.png?"),
          http("request_85")
            .get("/13/3963/2997.png?"),
          http("request_86")
            .get(uri1 + "/3961/2998.png?"),
          http("request_87")
            .get(uri3 + "/3963/2998.png?"),
          http("request_88")
            .get("/13/3963/2997.png?")
            .headers(headers_12),
          http("request_89")
            .get(uri1 + "/3961/2998.png?")
            .headers(headers_12),
          http("request_90")
            .get("/13/3962/2998.png?")
            .headers(headers_12),
          http("request_91")
            .get(uri8 + "/profile/card")
            .headers(headers_91),
          http("request_92")
            .get(uri8 + "/profile/card")
            .headers(headers_92),
          http("request_93")
            .get(uri6)
            .headers(headers_93),
          http("request_94")
            .get(uri6)
            .headers(headers_94)
        )
    )

	setUp(scn.inject(constantUsersPerSec(2) during (60 seconds) randomized).protocols(httpProtocol))
}
