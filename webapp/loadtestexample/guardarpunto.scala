
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class GuardarPunto extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://uo271572.inrupt.net")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_0 = Map(
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
  
  private val headers_1 = Map(
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
  
  private val headers_2 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTEzNjAsImlhdCI6MTY4MzA0MTc2MCwianRpIjoiODk0MDQ3N2Y1MzJkYTg2ZSIsImNuZiI6eyJqa3QiOiJGT0hlaTFJNFVvdU96R0tZeVlMUVFwYkFfcEZRQVB6VDNITnhiMTE5ZTlRIn0sImNsaWVudF9pZCI6ImJmNzlmZjlmMzU5YjJiMWI2YjRjOTY2ZmY2MjNjYmRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.RDSpHqnBOi4uBmZ6qxafoh5Hyyb9wRWocFri9E48EfY2E0B62C2DbVhYf4Ex7RcC-gu5mFmRje9_Bg-fPU1Mlrh6nM0sj5ssQZcs9_hRHRY3cNbtCbOUHgP1dCyLgrHfV15m-3uaML9k9MPROAWr2g2fXI42ZEEwhCi4dmzbg-FwubdJZTSj7GzT3r5hsvKSD-5sobv7JwnZahWZnSDNg6yTD_xTHKHGJv5xZ7XBd0cnwJLQkOBRHK_cQSMa-cAR4MUe0sA1SXZZVaw4_8-lrsCYLvzd4gWRPpLmTu6ZFHBXg6rTC8SNw99B2wQmp8LqMVShAvadHkA37POWAJjyMQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6ImJSUlF3NWtrY3Q3QTBuXzVGcXBBek92blVZdVFjU0RYazlkLWduU0lvVWciLCJ5IjoiX1VKY2ktM2xqWDYxRy1SMmdXX0F6RnJ1VFdkbUZTRC1lbThzOFFTT3pvdyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy8iLCJodG0iOiJHRVQiLCJqdGkiOiI3Y2NlOThlZC04ZWNjLTQ5MWQtYWY2Ny1hOGNlZTJmZmMzZWQiLCJpYXQiOjE2ODMwNDE5NDl9.0KvgMokxEkOCFiXZUvk-bqX-w8JF7GovDCbkZuOEAkeKnfOm5Tekt5bpWcVh1W-631lmO0RDh8mDvAtFl1kC3A",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_4 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTEzNjAsImlhdCI6MTY4MzA0MTc2MCwianRpIjoiODk0MDQ3N2Y1MzJkYTg2ZSIsImNuZiI6eyJqa3QiOiJGT0hlaTFJNFVvdU96R0tZeVlMUVFwYkFfcEZRQVB6VDNITnhiMTE5ZTlRIn0sImNsaWVudF9pZCI6ImJmNzlmZjlmMzU5YjJiMWI2YjRjOTY2ZmY2MjNjYmRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.RDSpHqnBOi4uBmZ6qxafoh5Hyyb9wRWocFri9E48EfY2E0B62C2DbVhYf4Ex7RcC-gu5mFmRje9_Bg-fPU1Mlrh6nM0sj5ssQZcs9_hRHRY3cNbtCbOUHgP1dCyLgrHfV15m-3uaML9k9MPROAWr2g2fXI42ZEEwhCi4dmzbg-FwubdJZTSj7GzT3r5hsvKSD-5sobv7JwnZahWZnSDNg6yTD_xTHKHGJv5xZ7XBd0cnwJLQkOBRHK_cQSMa-cAR4MUe0sA1SXZZVaw4_8-lrsCYLvzd4gWRPpLmTu6ZFHBXg6rTC8SNw99B2wQmp8LqMVShAvadHkA37POWAJjyMQ",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6ImJSUlF3NWtrY3Q3QTBuXzVGcXBBek92blVZdVFjU0RYazlkLWduU0lvVWciLCJ5IjoiX1VKY2ktM2xqWDYxRy1SMmdXX0F6RnJ1VFdkbUZTRC1lbThzOFFTT3pvdyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiOTM3MGQ4ODYtYzk0Yy00NGJiLWEyYmMtMWFhZGEzMDQ3ZjJmIiwiaWF0IjoxNjgzMDQxOTUwfQ.woJ1j_YB4b-cT8qimWmk2sFNLJPNFPmw-wGlvpsSDuh4u2IzXgVTrEwN_HSbYcFoAmNTo2znZ7smupLsfyiRew",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTEzNjAsImlhdCI6MTY4MzA0MTc2MCwianRpIjoiODk0MDQ3N2Y1MzJkYTg2ZSIsImNuZiI6eyJqa3QiOiJGT0hlaTFJNFVvdU96R0tZeVlMUVFwYkFfcEZRQVB6VDNITnhiMTE5ZTlRIn0sImNsaWVudF9pZCI6ImJmNzlmZjlmMzU5YjJiMWI2YjRjOTY2ZmY2MjNjYmRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.RDSpHqnBOi4uBmZ6qxafoh5Hyyb9wRWocFri9E48EfY2E0B62C2DbVhYf4Ex7RcC-gu5mFmRje9_Bg-fPU1Mlrh6nM0sj5ssQZcs9_hRHRY3cNbtCbOUHgP1dCyLgrHfV15m-3uaML9k9MPROAWr2g2fXI42ZEEwhCi4dmzbg-FwubdJZTSj7GzT3r5hsvKSD-5sobv7JwnZahWZnSDNg6yTD_xTHKHGJv5xZ7XBd0cnwJLQkOBRHK_cQSMa-cAR4MUe0sA1SXZZVaw4_8-lrsCYLvzd4gWRPpLmTu6ZFHBXg6rTC8SNw99B2wQmp8LqMVShAvadHkA37POWAJjyMQ",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6ImJSUlF3NWtrY3Q3QTBuXzVGcXBBek92blVZdVFjU0RYazlkLWduU0lvVWciLCJ5IjoiX1VKY2ktM2xqWDYxRy1SMmdXX0F6RnJ1VFdkbUZTRC1lbThzOFFTT3pvdyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiYjQxZWU5M2EtNjBiNC00ZDNiLTk1MDctMTAzYTMzMDJmMGZlIiwiaWF0IjoxNjgzMDQxOTUwfQ.6eniptRxyY7VWicZ5TvPGaRPVv6HHKbFaaNp_cRfR8EU9gHw0D3c0CHAhVWOkracRr4BrCZHu-ZnCiicWvW6gw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_6 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTEzNjAsImlhdCI6MTY4MzA0MTc2MCwianRpIjoiODk0MDQ3N2Y1MzJkYTg2ZSIsImNuZiI6eyJqa3QiOiJGT0hlaTFJNFVvdU96R0tZeVlMUVFwYkFfcEZRQVB6VDNITnhiMTE5ZTlRIn0sImNsaWVudF9pZCI6ImJmNzlmZjlmMzU5YjJiMWI2YjRjOTY2ZmY2MjNjYmRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.RDSpHqnBOi4uBmZ6qxafoh5Hyyb9wRWocFri9E48EfY2E0B62C2DbVhYf4Ex7RcC-gu5mFmRje9_Bg-fPU1Mlrh6nM0sj5ssQZcs9_hRHRY3cNbtCbOUHgP1dCyLgrHfV15m-3uaML9k9MPROAWr2g2fXI42ZEEwhCi4dmzbg-FwubdJZTSj7GzT3r5hsvKSD-5sobv7JwnZahWZnSDNg6yTD_xTHKHGJv5xZ7XBd0cnwJLQkOBRHK_cQSMa-cAR4MUe0sA1SXZZVaw4_8-lrsCYLvzd4gWRPpLmTu6ZFHBXg6rTC8SNw99B2wQmp8LqMVShAvadHkA37POWAJjyMQ",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6ImJSUlF3NWtrY3Q3QTBuXzVGcXBBek92blVZdVFjU0RYazlkLWduU0lvVWciLCJ5IjoiX1VKY2ktM2xqWDYxRy1SMmdXX0F6RnJ1VFdkbUZTRC1lbThzOFFTT3pvdyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiUFVUIiwianRpIjoiYjBlNzk3YWQtYjFjYi00MDBhLWFlNDEtODY2NDg1NDMzN2NiIiwiaWF0IjoxNjgzMDQxOTUwfQ.-RO8dIIh4SLzzovToLMAJuXHrbMjFLjksA5BhwHvsp6m8X2Ghy4e39L7C-azDki70WcBk2x5JivupKl_ztd6dg",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_7 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNTEzNjAsImlhdCI6MTY4MzA0MTc2MCwianRpIjoiODk0MDQ3N2Y1MzJkYTg2ZSIsImNuZiI6eyJqa3QiOiJGT0hlaTFJNFVvdU96R0tZeVlMUVFwYkFfcEZRQVB6VDNITnhiMTE5ZTlRIn0sImNsaWVudF9pZCI6ImJmNzlmZjlmMzU5YjJiMWI2YjRjOTY2ZmY2MjNjYmRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.RDSpHqnBOi4uBmZ6qxafoh5Hyyb9wRWocFri9E48EfY2E0B62C2DbVhYf4Ex7RcC-gu5mFmRje9_Bg-fPU1Mlrh6nM0sj5ssQZcs9_hRHRY3cNbtCbOUHgP1dCyLgrHfV15m-3uaML9k9MPROAWr2g2fXI42ZEEwhCi4dmzbg-FwubdJZTSj7GzT3r5hsvKSD-5sobv7JwnZahWZnSDNg6yTD_xTHKHGJv5xZ7XBd0cnwJLQkOBRHK_cQSMa-cAR4MUe0sA1SXZZVaw4_8-lrsCYLvzd4gWRPpLmTu6ZFHBXg6rTC8SNw99B2wQmp8LqMVShAvadHkA37POWAJjyMQ",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6ImJSUlF3NWtrY3Q3QTBuXzVGcXBBek92blVZdVFjU0RYazlkLWduU0lvVWciLCJ5IjoiX1VKY2ktM2xqWDYxRy1SMmdXX0F6RnJ1VFdkbUZTRC1lbThzOFFTT3pvdyIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9zYXZlZFBvaW50cy9zYXZlZFBvaW50cy5qc29uIiwiaHRtIjoiR0VUIiwianRpIjoiNzU5OWFkOGYtYjMzYy00ZTY0LWI0ZGQtNjAxZWVjZjlhNDA0IiwiaWF0IjoxNjgzMDQxOTUzfQ.VDouTuHRbNKzwI1Wjoq4nhDG8gX2D-Pofbmou6QYgnSSVgBc0rCIN3IkQLteCT3Hav5ETV2vtyqVMluEvHUiFA",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_9 = Map(
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
  
  private val uri1 = "https://c.tile.openstreetmap.org/13/3965/2997.png"

  private val scn = scenario("GuardarPunto")
    .exec(
      http("request_0")
        .get("/profile/card")
        .headers(headers_0)
        .resources(
          http("request_1")
            .options("/private/savedPoints/")
            .headers(headers_1),
          http("request_2")
            .get("/private/savedPoints/")
            .headers(headers_2),
          http("request_3")
            .get("/profile/card")
            .headers(headers_0),
          http("request_4")
            .get("/private/savedPoints/savedPoints.json")
            .headers(headers_4),
          http("request_5")
            .get("/private/savedPoints/savedPoints.json")
            .headers(headers_5),
          http("request_6")
            .put("/private/savedPoints/savedPoints.json")
            .headers(headers_6)
            .body(RawFileBody("guardarpunto/0006_request.txt"))
        )
    )
    .pause(2)
    .exec(
      http("request_7")
        .get("/private/savedPoints/savedPoints.json")
        .headers(headers_7)
        .resources(
          http("request_8")
            .get(uri1 + "?"),
          http("request_9")
            .get(uri1 + "?")
            .headers(headers_9)
        )
    )

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}
