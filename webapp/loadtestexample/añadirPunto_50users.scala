
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class añadirPunto_50users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://a.tile.openstreetmap.org")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_4 = Map(
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
  
  private val headers_6 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMDZmNGRkMjEtNTdjZi00MWUyLTkyZjktMjRkYjgxOTk2NjI1IiwiaWF0IjoxNjgyODY3ODYxfQ.-zQDN4NFyRdPe56oVAIwcTLS7b7fNx6IznNXgmWfuUqYGmMeKaJU3KtVNGlgPR3DtmSFBSJyf_6JjdIIJRi8cg",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMjZlYmViMDItNDFmZS00ZTcyLWI4YmUtYjgzNjVmZWZiYTE5IiwiaWF0IjoxNjgyODY3ODYyfQ.rETic7nfSmU0spryxULQuz-Jk3vwNQDVwv5dWXKzHaTR4YA8u_VINUzpZbgsipAW9LJ6U2bwtfHgyZmlOJutwg",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiZjQ1MzJkOGMtNTAzMC00NjMwLWIxNTEtYzZiZDIwMWJjMWIzIiwiaWF0IjoxNjgyODY3ODYwfQ.thDZOg0oHvucP09L1IYTcs_bEHBtYfiIhnF6AsaBUNuVC_bIT8LWdFVwc0sLMVdXlhOp_BBPo4_OxdwmWD2j2Q",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjJmMWI4ZjgzLTJjMmMtNGJlMi1iZDUwLTc4ZjVjMWE0MTZkYSIsImlhdCI6MTY4Mjg2Nzg2M30.vCb1A-SI1LS1Wf5Vut9QSoXvz0KgLBmTEIqcqXdMgC3CP-ye18uIUT1R6z7ZyU5Hl1PbtI_DU6CpsUPfA0S1CQ",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImNlMGUwMGE0LTM3YmYtNDRjOC04MTMxLWZlN2UxNTRhYjFmYiIsImlhdCI6MTY4Mjg2Nzg2M30.AVblo9SNE24xVX7qfewCMwXIi6fI45twGlB768h8ECjyDEAHVHBUnHYJw5rfFN9QDY6bu-zPNBuJQGj94eYbQQ",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiOGU3ZDIzYjUtZWY1MC00ZTg1LTgxOGYtNzcyNWRlOWYyYTRiIiwiaWF0IjoxNjgyODY3ODY1fQ.IuUjyfEBYdaRz4prg_OU4fhOklp6lu8GJIqE43B1M1Xa8sTiVfl1n4KEDcHhUnxAcBKbenAGktXj6l41klTYPw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiODU5NzcxMTAtYjE5My00M2VkLWEwODEtYWVhMjFhNjJiZWFjIiwiaWF0IjoxNjgyODY3ODY1fQ.ghtRtk4EHLLZJnUy5KDUifP4yPjaN5Vd7YGUGNlFCc0_oo272AAtm8TgAKW3nWKGcwtnPTptm5GpniBZypErRA",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjFiMTljNzVjLWNlMjktNDAyNC04NzY2LWM0MzJlOTUzN2I2NyIsImlhdCI6MTY4Mjg2Nzg2NX0.UfnzIQeXKO7pzhPtWxGH-O4UgzOJYYOK8J0dz3hqoFeWh5aPGcU0kQTbXEf4BdZeqfQTlzJqrt-3ORAUWPr74w",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjU4ZGUyYzZmLWNlNDQtNGQyNS1iNjljLTUwNzQzODVkODNjOSIsImlhdCI6MTY4Mjg2Nzg2Nn0.ToBZoB8qv8q6Y1aF3htxHYDGr9goWR_wdeufrF0vVbozvL01E5xIN2mmF2DlyTq4eHG4H7C5hs-BYIj5HnEo1g",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_15 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImFiN2Y1YTlkLWRlNjMtNDA2MS04ZGY1LTk1MTViMzdiOTQwZSIsImlhdCI6MTY4Mjg2Nzg2MX0.RuKpuy_VycgAiYG5Q1-vyZaE77gcOAX4yO9jtYMh8AqszmN1obiqAEOYc1cggeseyMhW4VC4MlVSNDintQwZ3w",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_16 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjM4Mzk3MTdiLTYzNjItNGM2Yi05NGZjLTkyZDAxZDMzYTFlZiIsImlhdCI6MTY4Mjg2Nzg2NH0.jIzeNrii3EOBWoxaGb5qAuqRzXfN1bsh4zO7z7U2MWKjrfU6ncry_doohzcYym_KsJ90yyGY3DpN6vLCztcSdA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_17 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjZhODFkZjQ4LTNmZmMtNDE0ZC1hNzExLTVkM2NlYTcyZjgzZCIsImlhdCI6MTY4Mjg2Nzg2M30.b8t4VbTJ5a5-ekybY0Fch6USc1HqUC5dhuu74EzkJIhPAXSyMd18vYhyl6SKuxJp1RsFv_6X7IT-rGv4aBeNUg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_18 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImI3NDQxNTRjLWMxMjgtNGJjZi1iZTUzLTg2YWJkMzg4YjZiYSIsImlhdCI6MTY4Mjg2Nzg2N30.TRD1SabVXgR2lv0A_QElvHspW0wlcGcVhIkJcAFSwOcLRCNxXg55zatPqf-KruBMV-rT73VAPXi7-NH2MScvew",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImYwMDJmYjNhLWZmMTAtNDk0OC05OGU4LThjM2NiOGIyYTI2YSIsImlhdCI6MTY4Mjg2Nzg2OX0.XUlvRQR7L1X-gdQyVEonwCjsTQTS6XjeerFjBDEXQCDdGeWA_4kndtZFrnMJIn-ZmVlF3rMt-PPBK_YsGaSrlA",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImUxM2Y5Njk3LWQzNzUtNDI0MS1hOWVjLWEwZWJmYjQ2NjA1ZiIsImlhdCI6MTY4Mjg2Nzg2OH0.f3kmF3KbHQitrII2q71WHPW8rm3JMV7I3jqomaT3Gdoc7j1IhkCbPKErvRVe0r8pg86lqMCuEb0E89LajwMWqw",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYWJkOGM1ZjktMzNiNi00NDM1LTk3ZDEtZDIyZjc4YjdhZjI4IiwiaWF0IjoxNjgyODY3ODcyfQ.bkrTL818B_MO_0vYF0r1kYFPn8nSPDHKoQna9FLU5yUE6u9fZWLk0VjQ43BwIMgZrUpWrDV6EBhSHqYdcNsjqg",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMzU5ZmE1OWEtYmM1My00ZWNiLWIxZWItNWFmODk2MDgxMTEwIiwiaWF0IjoxNjgyODY3ODczfQ.woyauVWDR0N9P0ZJmRCopdWIv_HdpfZneA5XaoQvfP74W_hLFnMSaLMJyUW_1LOfqUIdsuXSbIWHkWTNBy51OQ",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjU1MWM0ZDVmLTBmZWMtNDMyMy05NWMwLTlmMjk4NmM5NmZjZiIsImlhdCI6MTY4Mjg2Nzg3NH0.OCd2IgzEoem3Z4nvVfa-7q_D8djz5psvCpXA0lAtCQOEwWBmrLqvykTmGiWoSYoRt0CexdNs59js5zKY8MtLMA",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImI4M2JlOTA4LTNkOGUtNGVlZi1hMmQ3LWM1NGVlYWJjODZjYyIsImlhdCI6MTY4Mjg2Nzg3NX0.VDC3X8Gx-9rWVK3CNKsGAdbuDgnEEDpYo077DiidrV3AGqJzEJo-Si5TM_fB97WbBYQDl8VUmfTd5mmMTD1Fzg",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjU2OTdlYzAxLTYwZWYtNDRiYy05MGM5LTNiZmViZjJkNGI4NCIsImlhdCI6MTY4Mjg2Nzg3MH0.y0OHhh2PyXM5-x5CGxIrGfREfKv6g15Vz673xOcgChtPZCNKTfZ6p0FfyiZPW9FS4kGSimtvZ3yKIplBuPCUwg",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiMDM2OTdmMzgtNzUyNi00YTRkLWI2ZDQtYWYxODE2ZmMyNjlhIiwiaWF0IjoxNjgyODY3ODc2fQ.3OuvTSehZXhEkxXLRVFvXPwlNY0qQYF_b_pS7MqzbpEK6QFdnkOL1DKo994E3GWtz5Wqq5ZeUmHjbgYJV15GVQ",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiOGI5NGM0ZjctZGJkOC00ZWEyLWFhZmYtNWEwZTMyZGFjOGNhIiwiaWF0IjoxNjgyODY3ODc2fQ.CNLJ1J_KajsFuVAVg_49UUj53RV8KfHBtFdX8bkyk_0IF36ywuCpxp-55eIwTwUo6rr7ZnwTXC8SXG2hj6JMhQ",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjljNWZjMzkyLTRjODAtNGQ0YS1iMDkxLTk3ZDk1NTA1ZTQ4YSIsImlhdCI6MTY4Mjg2Nzg3N30.XaLeH8aWa93xS5rb0JB53_eBEXFOTcRGzbbpDMCzHOjhlvWqUSCtHhQWTPA5TwYSo08rs-m_FNvbwEpWBQwT_A",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImQzZDNkNjZmLWM0M2MtNDUxOC04MDRiLThiMzZjMTIwZjliZiIsImlhdCI6MTY4Mjg2Nzg3N30.3Aib6GJRuNHxk1n129OYV2JMj-YkrCDloFC7_N51ZCAw8TOSQVAIf1qt5r0duG3PUl2nPH7UHF5UBNS7MGg1Iw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImYzNDg3OWE1LWM4OTEtNGQwZS1iNjIzLTRlNGI2MmYxZjg1MiIsImlhdCI6MTY4Mjg2Nzg3Mn0.taH53gsG5_-U26yPCSW_6bAKdwpCIBjRit7WPu00L8sb8efjFPpDu-CkQoUOZMPXLyfwKWmckfKQz87FLqTwBw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_39 = Map(
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
  
  private val headers_40 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjUxOGRhN2ZkLTg5MmUtNGYyZC04NjQyLWUxZjZmZDE3MjFjZSIsImlhdCI6MTY4Mjg2Nzg3OX0.lPmMlvV7Av4rjm4ZD6MtoGaZhvTAluOrmRXjZqsnBuEjyK8W92C6acmBmdWLeeu0_GSQb-9chGluxVC1G1djBQ",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNDFhMTZjNTQtODI0Ny00YjVjLTljYWYtNmM2ZjYyOWNjMWQ3IiwiaWF0IjoxNjgyODY3ODgyfQ.qy06LZ2hFG5zS7iuJQ8DIgHi8R1a_NwbtYmM7vc_JQ_FBms3P-0doVQNIw9Zv2m0mzxVvRC-FzOII3ctfNgWmQ",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMi5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYmUyMzJmMzctYTNjNC00NWNlLWFiMDktZTZmZGJjZmVjNGZkIiwiaWF0IjoxNjgyODY3ODgyfQ.sRptVFmLg7YTlhhY3Xx1WCHedzOVp1caE8nj0Z7frv57TLvAYW6lalDQ3TssRW387hvsI_s_TZZ5584-yGOvsg",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6ImFlMWNiMTJjLWIzYmItNDZmMy1hYWE0LTkyOWJkYzhkMDYxNSIsImlhdCI6MTY4Mjg2Nzg4M30.-7CK0b5uTqZuHGbnqc770b6URQUZ5FmjtaXrwkmFPUhfZJidTxKkyC9s6Q1WnXKVUVuQQh3OXfWuN2QiooK9MA",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvIiwiaHRtIjoiR0VUIiwianRpIjoiMmZhYjE3M2QtZGEwNS00OTkxLTgxNDAtNGQ3MDc2YjRlN2QzIiwiaWF0IjoxNjgyODY3ODc5fQ.jLjOydDzNWkdWfeo01-9F47jTD2bHd7IRlcTk15WsRZ0UG_1Pv4viiI4GAa7Y5f--AsFKhB0ergXrZIZfkKl0A",
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3JpY2hhcmRwaXguc29saWRjb21tdW5pdHkubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjE2OWRjMTFjLTQxMWYtNGZhOC05MTBkLWI4N2UwNGU3Y2NhMyIsImlhdCI6MTY4Mjg2Nzg4M30.eUWcvQCRgHqf70aUbTCTJUI_Gn9_1Y7Djj7Q_OpVgzMKUEkFCLwq2rEuWF_8K0mhmf5GCvYVGCl08OFhRLRF3w",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_48 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJiYjZmNzA5ZS0xMzYxLTQ2MTctYTU2Zi0zM2JlNzRjMWU4ZTUiLCJpYXQiOjE2ODI4Njc4ODV9.sxHqyqjTyQz0d2gDQ1GxwQyG5VqQCHrJezpymeIBAdAp4WTeYj1ckz-L-6pdTLRbgF12yMEUbx6RU_--CRVpRg",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiI0OTY4MmQwNC0yMGEzLTQ5NzAtOTBmYi0yZWFjODgwMzM3MDUiLCJpYXQiOjE2ODI4Njc4ODl9.zkxf-LLfsjnnv1ntpvaCZF_i-0arZ-ul0wfVfurouv7CPVLBp9vcuXRLtC5aH9_8r9AsYTasQHF7buCKuD8IRg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_67 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJQVVQiLCJqdGkiOiI3YmJhN2Q5Ni01MjA0LTQ0ZDEtYTM1MC1hYmY3NjUyZGQ4NDciLCJpYXQiOjE2ODI4Njc4OTN9.7g4QIA5b-1WsHMuI03USNTO_9S_dyPuCHS28wIFDLOttBoVdKFVlYSfJnrCAInDbJniYjDm7dr_zoa1MapeU2A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_68 = Map(
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
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiJjOGRmYjgxNi1hNmIxLTQ2YjEtOGNiYy0zYjc5M2Y4ZDY4OGMiLCJpYXQiOjE2ODI4Njc4OTR9.VjuH9KStLjnHzNEQn8RJXmerdADJR-lctdBYCmlcgurcRntc00Jny_WtAhKi57ElEasqSG-YWfQXSIVJpZ6WxA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_69 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYzljYTAyYTUtMTlkYi00N2UzLWIxZDQtOGM0ZTUyNjg2YzAwIiwiaWF0IjoxNjgyODY3ODk0fQ.d810c2uAPCvMQGqn66gaqLmZJxTaE616iOpgmqjM_qHB2SiKbtvmQoqw_WgJQPw1o0jCv1b4utOPBzlLfq_uEw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_70 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNmRmMTU4MjUtZjcwZi00YjVmLWFhZWEtYTI3ZmE2YjM1OTJjIiwiaWF0IjoxNjgyODY3ODk0fQ.U2AD7mu81aNx1v6XGuR4gz5ox5cenCUm63I0VAM9VcyxXJkK78xQFFP4cXOnn9QS3ddMDr4h1r8oJ74x_ui0BA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_71 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQwNzcwMjAsImlhdCI6MTY4Mjg2NzQyMCwianRpIjoiNmYxNWYwNDQ5MWUzM2FmNSIsImNuZiI6eyJqa3QiOiJKWjJ0dG9DQ3pNUXpUSDJFaUR2bEtWOVRxRUswdENyZzlqNkpnUThFQzA4In0sImNsaWVudF9pZCI6IjA5OTI3MGNlNGE3OTYzNzllMmFjYWI5ODAzNWI1NzdlIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.IVaMk1kfUc1gqj258xG3gN85VmD2hz4a89eDF6LW1szPyXUtYOm_Iqt3aTDFFGV5AHEc15ikr65GPqkSGuUku01AzHUt2MOjvsPBIhYeYCtfFSrhx8aIhSi7MuSusvhUdAI96wTXw5k2eg6cU_OkMHHgp5a43R8Bns8nlYj5Y4cy8dmXgOaNRxTXO_pR6vY7eqEvqzqB-eACnm2XoYsYjS1ZiXXiKinp1uwFe9_y-4ZNpnz-Fo-vh-7975HszpOmuBgr4AG4HwEMmXOh0ZSbnSDKwd6AcCKzR2ji_Wib9xXIgJyNkp6pjeXpE33Zahp1CE7EMeYloTnrucsmJ5uV7A",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkNCQ3MzZ3k2bmphRG56YVFjZkxhQW04QkVTbVVRaE5KOVphcTVUdGQ2QlkiLCJ5IjoieDNYbk9ILTA0c0xBdFU0ZVA4T1FFSUpkOVZZOGllczBIbnVKTVk1dDJwQSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2Vsb3F1ZW4xNy5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjRhZDQ1N2U4LWEwMzktNGNhOS04YWUzLWE5YjI2YzNiZDhhMyIsImlhdCI6MTY4Mjg2Nzg5N30.vWEFvOMjzrTKB1MN1PuuEnqSWWQB2NcqK1StyOC_rN4p4XcR563-hhxjNye6rT00Piy1UfKfNhjTKw-uDlOUTQ",
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

  private val scn = scenario("añadirPunto")
    .exec(
      http("request_0")
        .get("/13/3962/2998.png?")
        .resources(
          http("request_1")
            .get("/13/3963/2997.png?"),
          http("request_2")
            .get(uri3 + "/3962/2999.png?"),
          http("request_3")
            .get(uri1 + "/3963/2999.png?"),
          http("request_4")
            .get("/13/3963/2997.png?")
            .headers(headers_4),
          http("request_5")
            .get("/13/3962/2998.png?")
            .headers(headers_4)
        )
    )
    .pause(1)
    .exec(
      http("request_6")
        .get(uri7)
        .headers(headers_6)
        .resources(
          http("request_7")
            .get(uri7)
            .headers(headers_7),
          http("request_8")
            .get(uri8 + "/profile/card")
            .headers(headers_8),
          http("request_9")
            .get(uri5)
            .headers(headers_9),
          http("request_10")
            .get(uri5)
            .headers(headers_10)
        )
    )
    .pause(1)
    .exec(
      http("request_11")
        .get(uri7)
        .headers(headers_11)
        .resources(
          http("request_12")
            .get(uri7)
            .headers(headers_12),
          http("request_13")
            .get(uri5)
            .headers(headers_13),
          http("request_14")
            .get(uri5)
            .headers(headers_14),
          http("request_15")
            .get(uri6)
            .headers(headers_15),
          http("request_16")
            .get(uri2)
            .headers(headers_16),
          http("request_17")
            .get(uri6)
            .headers(headers_17),
          http("request_18")
            .get(uri2)
            .headers(headers_18)
        )
    )
    .pause(1)
    .exec(
      http("request_19")
        .get(uri1 + "/3962/3000.png?")
        .resources(
          http("request_20")
            .get("/13/3963/3000.png?"),
          http("request_21")
            .get("/13/3963/3000.png?")
            .headers(headers_4),
          http("request_22")
            .get(uri1 + "/3962/3000.png?")
            .headers(headers_4),
          http("request_23")
            .get("/13/3964/2999.png?"),
          http("request_24")
            .get(uri1 + "/3964/2998.png?"),
          http("request_25")
            .get(uri3 + "/3964/3000.png?"),
          http("request_26")
            .get("/13/3964/2999.png?")
            .headers(headers_4),
          http("request_27")
            .get(uri6)
            .headers(headers_27),
          http("request_28")
            .get(uri2)
            .headers(headers_28),
          http("request_29")
            .get(uri7)
            .headers(headers_29),
          http("request_30")
            .get(uri7)
            .headers(headers_30),
          http("request_31")
            .get(uri5)
            .headers(headers_31),
          http("request_32")
            .get(uri5)
            .headers(headers_32),
          http("request_33")
            .get(uri2)
            .headers(headers_33),
          http("request_34")
            .get(uri7)
            .headers(headers_34),
          http("request_35")
            .get(uri7)
            .headers(headers_35),
          http("request_36")
            .get(uri5)
            .headers(headers_36),
          http("request_37")
            .get(uri5)
            .headers(headers_37),
          http("request_38")
            .get(uri2)
            .headers(headers_38),
          http("request_39")
            .get(uri8 + "/profile/card")
            .headers(headers_39),
          http("request_40")
            .options(uri8 + "/private/points/")
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
            .get(uri8 + "/private/points/")
            .headers(headers_45),
          http("request_46")
            .get(uri5)
            .headers(headers_46),
          http("request_47")
            .get(uri8 + "/profile/card")
            .headers(headers_39),
          http("request_48")
            .get(uri8 + "/private/points/points.json")
            .headers(headers_48),
          http("request_49")
            .get(uri8 + "/private/points/points.json")
            .headers(headers_49)
        )
    )
    .pause(1)
    .exec(
      http("request_50")
        .get("/13/3962/2998.png?")
        .resources(
          http("request_51")
            .get("/13/3963/2997.png?"),
          http("request_52")
            .get(uri1 + "/3961/2998.png?"),
          http("request_53")
            .get("/13/3961/2999.png?"),
          http("request_54")
            .get("/13/3964/2999.png?"),
          http("request_55")
            .get(uri1 + "/3962/3000.png?"),
          http("request_56")
            .get("/13/3963/3000.png?"),
          http("request_57")
            .get(uri3 + "/3961/2997.png?"),
          http("request_58")
            .get(uri3 + "/3964/2997.png?"),
          http("request_59")
            .get(uri3 + "/3961/3000.png?"),
          http("request_60")
            .get("/13/3962/2998.png?")
            .headers(headers_4),
          http("request_61")
            .get("/13/3963/2997.png?")
            .headers(headers_4),
          http("request_62")
            .get("/13/3961/2999.png?")
            .headers(headers_4),
          http("request_63")
            .get("/13/3964/2999.png?")
            .headers(headers_4),
          http("request_64")
            .get(uri1 + "/3962/3000.png?")
            .headers(headers_4),
          http("request_65")
            .get("/13/3963/3000.png?")
            .headers(headers_4),
          http("request_66")
            .get(uri1 + "/3961/2998.png?")
            .headers(headers_4),
          http("request_67")
            .put(uri8 + "/private/points/points.json")
            .headers(headers_67)
            .body(RawFileBody("añadirpunto/0067_request.txt")),
          http("request_68")
            .get(uri8 + "/private/points/points.json")
            .headers(headers_68),
          http("request_69")
            .get(uri8 + "/profile/card")
            .headers(headers_69),
          http("request_70")
            .get(uri8 + "/profile/card")
            .headers(headers_70),
          http("request_71")
            .get(uri6)
            .headers(headers_71)
        )
    )
	setUp(scn.inject(rampUsers(50) during(60.seconds))).protocols(httpProtocol)
}
