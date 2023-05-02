
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class login_100users extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://inrupt.net")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
  
  private val headers_0 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Cache-Control" -> "max-age=0",
  		"Origin" -> "https://inrupt.net",
  		"Sec-Fetch-Dest" -> "document",
  		"Sec-Fetch-Mode" -> "navigate",
  		"Sec-Fetch-Site" -> "same-origin",
  		"Sec-Fetch-User" -> "?1",
  		"Upgrade-Insecure-Requests" -> "1",
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
  		"Access-Control-Request-Headers" -> "authorization,dpop",
  		"Access-Control-Request-Method" -> "POST",
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
  		"DPoP" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ii1mRVU3LUlZc0QxZVItSVQ3djJ5cjJ5TnZCUlJiQTlsRGVteEtNNkY3VzgiLCJ5IjoiMFJJVE9FeERodGZTMjAyS0ttbWVlcldLQnRjTzJ6VHJmSlg2RFVndVhBRSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2lucnVwdC5uZXQvdG9rZW4iLCJodG0iOiJQT1NUIiwianRpIjoiMWZlMjA3MjMtODYzZS00MWJhLTgwNDctODE0NDgxMzcyMDlhIiwiaWF0IjoxNjgzMDQwMzk3fQ.nmr2OMjhogfW9iKvEN9ptEOZgAwMzJDGupFo3lhZetxTLiqx5O9ciE2lpyVqep6NDGrCNByHcwtlEBtZm7semQ",
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
  
  private val headers_7 = Map(
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
  
  private val headers_24 = Map(
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
  
  private val headers_38 = Map(
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
  
  private val headers_39 = Map(
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
  
  private val headers_40 = Map(
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"accept" -> "text/turtle",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNDk5OTksImlhdCI6MTY4MzA0MDM5OSwianRpIjoiYjhkZjlmOWQ3YmNjODczNiIsImNuZiI6eyJqa3QiOiJDcTlEdUV0eEZKODZnUVlSalpRVGp6eUFUUDE1bzdXal9hUUVTQm5pVElBIn0sImNsaWVudF9pZCI6IjU1MjMzNWIzMDI2NGNhYmM2NTkxNTg0YTNjOGVmYzRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.GQ3MmKgKQ1eKOVGVVOJwGvj_AYQn2btijhcwEn-t06QiN6GE03kxVEqVvUJufv66LRjTckq09-mHqdrVrVrGrLSl-aeCFXYQWgUN8OwvCSwuEUJV22s4UTTJDt-Wl4CMq9uelE1DuMo4dxRtFoPtfqAwAex8Y8oecuUbAtilwE5j3XMCEAC-bqVhRNrONRYyHrioSmEOnzkttZiQQXCaqJsoiWbmd-mjxNEWRGaW1B8KyEVj82RvGzhzMrEnpkp8nNeEqtu_ZZgsdgC2_D9uYIr9rgJY_Kd95arnbbcAHKVWsAFW7FYJSXinrd2o0eWOqVSDUMa_biBE2DuZPAjl8w",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ii1mRVU3LUlZc0QxZVItSVQ3djJ5cjJ5TnZCUlJiQTlsRGVteEtNNkY3VzgiLCJ5IjoiMFJJVE9FeERodGZTMjAyS0ttbWVlcldLQnRjTzJ6VHJmSlg2RFVndVhBRSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYWM5ZmJmMDYtOGIwYS00ZGI5LWE2MGMtYzBlZjFlMDNmMmJhIiwiaWF0IjoxNjgzMDQwNDA3fQ.TN7gJA6heYo-VJ3Pt31SmiwcVZGqlyS2VFgGEdcbq7Iqg1wy2isyRnhuZp4YjHDXlRlFtjz2DureWG2RTcL5Ag",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_41 = Map(
  		"Accept" -> "*/*",
  		"Accept-Encoding" -> "gzip, deflate, br",
  		"Accept-Language" -> "es-ES,es;q=0.9",
  		"Origin" -> "https://franciscocoya.github.io",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "cross-site",
  		"User-Agent" -> "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNDk5OTksImlhdCI6MTY4MzA0MDM5OSwianRpIjoiYjhkZjlmOWQ3YmNjODczNiIsImNuZiI6eyJqa3QiOiJDcTlEdUV0eEZKODZnUVlSalpRVGp6eUFUUDE1bzdXal9hUUVTQm5pVElBIn0sImNsaWVudF9pZCI6IjU1MjMzNWIzMDI2NGNhYmM2NTkxNTg0YTNjOGVmYzRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.GQ3MmKgKQ1eKOVGVVOJwGvj_AYQn2btijhcwEn-t06QiN6GE03kxVEqVvUJufv66LRjTckq09-mHqdrVrVrGrLSl-aeCFXYQWgUN8OwvCSwuEUJV22s4UTTJDt-Wl4CMq9uelE1DuMo4dxRtFoPtfqAwAex8Y8oecuUbAtilwE5j3XMCEAC-bqVhRNrONRYyHrioSmEOnzkttZiQQXCaqJsoiWbmd-mjxNEWRGaW1B8KyEVj82RvGzhzMrEnpkp8nNeEqtu_ZZgsdgC2_D9uYIr9rgJY_Kd95arnbbcAHKVWsAFW7FYJSXinrd2o0eWOqVSDUMa_biBE2DuZPAjl8w",
  		"content-type" -> "application/json",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ii1mRVU3LUlZc0QxZVItSVQ3djJ5cjJ5TnZCUlJiQTlsRGVteEtNNkY3VzgiLCJ5IjoiMFJJVE9FeERodGZTMjAyS0ttbWVlcldLQnRjTzJ6VHJmSlg2RFVndVhBRSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJpdmF0ZS9wb2ludHMvcG9pbnRzLmpzb24iLCJodG0iOiJHRVQiLCJqdGkiOiIyYTBlZGM0NC00Y2NiLTQ2OTAtYjY5Ny1jYThkMmNlZjhjMzQiLCJpYXQiOjE2ODMwNDA0MDd9.heruW7Wt_fQJf9VSOzqwTd9gAq-Fy-ABhIO5HzVXWxKUUo5lSFpnS0a7kfqn0lKqrlqcMfLcAjiQnNOnDUz-cw",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNDk5OTksImlhdCI6MTY4MzA0MDM5OSwianRpIjoiYjhkZjlmOWQ3YmNjODczNiIsImNuZiI6eyJqa3QiOiJDcTlEdUV0eEZKODZnUVlSalpRVGp6eUFUUDE1bzdXal9hUUVTQm5pVElBIn0sImNsaWVudF9pZCI6IjU1MjMzNWIzMDI2NGNhYmM2NTkxNTg0YTNjOGVmYzRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.GQ3MmKgKQ1eKOVGVVOJwGvj_AYQn2btijhcwEn-t06QiN6GE03kxVEqVvUJufv66LRjTckq09-mHqdrVrVrGrLSl-aeCFXYQWgUN8OwvCSwuEUJV22s4UTTJDt-Wl4CMq9uelE1DuMo4dxRtFoPtfqAwAex8Y8oecuUbAtilwE5j3XMCEAC-bqVhRNrONRYyHrioSmEOnzkttZiQQXCaqJsoiWbmd-mjxNEWRGaW1B8KyEVj82RvGzhzMrEnpkp8nNeEqtu_ZZgsdgC2_D9uYIr9rgJY_Kd95arnbbcAHKVWsAFW7FYJSXinrd2o0eWOqVSDUMa_biBE2DuZPAjl8w",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ii1mRVU3LUlZc0QxZVItSVQ3djJ5cjJ5TnZCUlJiQTlsRGVteEtNNkY3VzgiLCJ5IjoiMFJJVE9FeERodGZTMjAyS0ttbWVlcldLQnRjTzJ6VHJmSlg2RFVndVhBRSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiYzRiNDdmYTctYzAxZS00MTM5LWFhY2UtMjQwZWQzZmE1ZWQ4IiwiaWF0IjoxNjgzMDQwNDA5fQ.oTGS-0VsvJbQrqm-f8SyHUy9MvIA3GiF-Ze7QCQcsvdm5lse6wCiac-uDUZlYWhaSNJSJHme4t9Pa2oomSWg3w",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNDk5OTksImlhdCI6MTY4MzA0MDM5OSwianRpIjoiYjhkZjlmOWQ3YmNjODczNiIsImNuZiI6eyJqa3QiOiJDcTlEdUV0eEZKODZnUVlSalpRVGp6eUFUUDE1bzdXal9hUUVTQm5pVElBIn0sImNsaWVudF9pZCI6IjU1MjMzNWIzMDI2NGNhYmM2NTkxNTg0YTNjOGVmYzRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.GQ3MmKgKQ1eKOVGVVOJwGvj_AYQn2btijhcwEn-t06QiN6GE03kxVEqVvUJufv66LRjTckq09-mHqdrVrVrGrLSl-aeCFXYQWgUN8OwvCSwuEUJV22s4UTTJDt-Wl4CMq9uelE1DuMo4dxRtFoPtfqAwAex8Y8oecuUbAtilwE5j3XMCEAC-bqVhRNrONRYyHrioSmEOnzkttZiQQXCaqJsoiWbmd-mjxNEWRGaW1B8KyEVj82RvGzhzMrEnpkp8nNeEqtu_ZZgsdgC2_D9uYIr9rgJY_Kd95arnbbcAHKVWsAFW7FYJSXinrd2o0eWOqVSDUMa_biBE2DuZPAjl8w",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ii1mRVU3LUlZc0QxZVItSVQ3djJ5cjJ5TnZCUlJiQTlsRGVteEtNNkY3VzgiLCJ5IjoiMFJJVE9FeERodGZTMjAyS0ttbWVlcldLQnRjTzJ6VHJmSlg2RFVndVhBRSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkIiwiaHRtIjoiR0VUIiwianRpIjoiNTZiZmEyOTgtZDNiYy00YjYxLThmZjktODI4NzM2MTFkY2U1IiwiaWF0IjoxNjgzMDQwNDEwfQ.5OHXkZVcUbwEnbH54d5B9CI72u5RR6XB9Q7_hORowobUTWUgHU9l9bWkGaT_ZlJbj5BYJ51TQT3gwWE03hplxQ",
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
  		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vdW8yNzE1NzIuaW5ydXB0Lm5ldC9wcm9maWxlL2NhcmQjbWUiLCJleHAiOjE2ODQyNDk5OTksImlhdCI6MTY4MzA0MDM5OSwianRpIjoiYjhkZjlmOWQ3YmNjODczNiIsImNuZiI6eyJqa3QiOiJDcTlEdUV0eEZKODZnUVlSalpRVGp6eUFUUDE1bzdXal9hUUVTQm5pVElBIn0sImNsaWVudF9pZCI6IjU1MjMzNWIzMDI2NGNhYmM2NTkxNTg0YTNjOGVmYzRmIiwid2ViaWQiOiJodHRwczovL3VvMjcxNTcyLmlucnVwdC5uZXQvcHJvZmlsZS9jYXJkI21lIn0.GQ3MmKgKQ1eKOVGVVOJwGvj_AYQn2btijhcwEn-t06QiN6GE03kxVEqVvUJufv66LRjTckq09-mHqdrVrVrGrLSl-aeCFXYQWgUN8OwvCSwuEUJV22s4UTTJDt-Wl4CMq9uelE1DuMo4dxRtFoPtfqAwAex8Y8oecuUbAtilwE5j3XMCEAC-bqVhRNrONRYyHrioSmEOnzkttZiQQXCaqJsoiWbmd-mjxNEWRGaW1B8KyEVj82RvGzhzMrEnpkp8nNeEqtu_ZZgsdgC2_D9uYIr9rgJY_Kd95arnbbcAHKVWsAFW7FYJSXinrd2o0eWOqVSDUMa_biBE2DuZPAjl8w",
  		"dpop" -> "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6Ii1mRVU3LUlZc0QxZVItSVQ3djJ5cjJ5TnZCUlJiQTlsRGVteEtNNkY3VzgiLCJ5IjoiMFJJVE9FeERodGZTMjAyS0ttbWVlcldLQnRjTzJ6VHJmSlg2RFVndVhBRSIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL3BydWViYXNvbGlkMS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCIsImh0bSI6IkdFVCIsImp0aSI6IjA0OWJlNDg0LTIxZjItNDE4Mi1hZjMwLWRmZTNjOGUwNzFlYyIsImlhdCI6MTY4MzA0MDQxMX0.Z1NAJukMjtR3FI82aAhFXkknyYYtxhjPTlcHyIgqswk4vriWEIS0NwfXqn-LscoNeWKVBF25gPQD_NNJZ2zgEw",
  		"sec-ch-ua" -> """Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "https://c.tile.openstreetmap.org/13"
  
  private val uri2 = "https://pruebasolid1.inrupt.net/profile/card"
  
  private val uri4 = "https://franciscocoya.github.io/lomapes05a_production/manifest.json"
  
  private val uri5 = "https://b.tile.openstreetmap.org/13"
  
  private val uri6 = "https://a.tile.openstreetmap.org/13"
  
  private val uri7 = "https://fonts.googleapis.com/css2"
  
  private val uri8 = "https://uo271572.inrupt.net"

  private val scn = scenario("login")
    .exec(
      http("request_0")
        .post("/login/password")
        .headers(headers_0)
        .formParam("username", "UO271572")
        .formParam("password", "UnioviSergio2011")
        .formParam("response_type", "code")
        .formParam("display", "")
        .formParam("scope", "openid offline_access webid")
        .formParam("client_id", "552335b30264cabc6591584a3c8efc4f")
        .formParam("redirect_uri", "https://franciscocoya.github.io/lomapes05a_production/")
        .formParam("state", "7ea4e625505a4f3fb24b74e4cd9a5f4d")
        .formParam("nonce", "")
        .formParam("request", "")
        .resources(
          http("request_1")
            .get(uri7 + "?family=Manrope:wght@200;300;500;700&display=swap"),
          http("request_2")
            .get(uri4),
          http("request_3")
            .get("/.well-known/openid-configuration")
            .headers(headers_3),
          http("request_4")
            .options("/token")
            .headers(headers_4),
          http("request_5")
            .post("/token")
            .headers(headers_5)
            .formParam("grant_type", "authorization_code")
            .formParam("redirect_uri", "https://franciscocoya.github.io/lomapes05a_production/")
            .formParam("code", "67221740f93c451d646bb10e160750a6")
            .formParam("code_verifier", "35b16fee11554a328d189ff0ea5a54bbc0432c89e6f24d028b1a01c935c0c601b200274ec202418691f5018d3e3ec0bf")
            .formParam("client_id", "552335b30264cabc6591584a3c8efc4f")
            .basicAuth("552335b30264cabc6591584a3c8efc4f","a4cb8f02c140be6008fe45c8904230ea"),
          http("request_6")
            .get("/jwks")
            .headers(headers_6),
          http("request_7")
            .get(uri8 + "/profile/card")
            .headers(headers_7),
          http("request_8")
            .get(uri6 + "/3962/2998.png?"),
          http("request_9")
            .get(uri5 + "/3963/2998.png?"),
          http("request_10")
            .get(uri5 + "/3962/2999.png?"),
          http("request_11")
            .get(uri1 + "/3963/2999.png?"),
          http("request_12")
            .get(uri1 + "/3962/2997.png?"),
          http("request_13")
            .get(uri6 + "/3963/2997.png?"),
          http("request_14")
            .get(uri1 + "/3964/2998.png?"),
          http("request_15")
            .get(uri1 + "/3961/2998.png?"),
          http("request_16")
            .get(uri5 + "/3964/2997.png?"),
          http("request_17")
            .get(uri6 + "/3961/2999.png?"),
          http("request_18")
            .get(uri6 + "/3964/2999.png?"),
          http("request_19")
            .get(uri1 + "/3962/3000.png?"),
          http("request_20")
            .get(uri6 + "/3963/3000.png?"),
          http("request_21")
            .get(uri5 + "/3961/2997.png?"),
          http("request_22")
            .get(uri5 + "/3964/3000.png?"),
          http("request_23")
            .get(uri5 + "/3961/3000.png?"),
          http("request_24")
            .get(uri1 + "/3963/2999.png?")
            .headers(headers_24),
          http("request_25")
            .get(uri6 + "/3963/3000.png?")
            .headers(headers_24),
          http("request_26")
            .get(uri6 + "/3964/2999.png?")
            .headers(headers_24),
          http("request_27")
            .get(uri1 + "/3962/2997.png?")
            .headers(headers_24),
          http("request_28")
            .get(uri1 + "/3961/2998.png?")
            .headers(headers_24),
          http("request_29")
            .get(uri6 + "/3963/2997.png?")
            .headers(headers_24),
          http("request_30")
            .get(uri5 + "/3961/3000.png?")
            .headers(headers_24),
          http("request_31")
            .get(uri6 + "/3961/2999.png?")
            .headers(headers_24),
          http("request_32")
            .get(uri1 + "/3962/3000.png?")
            .headers(headers_24),
          http("request_33")
            .get(uri5 + "/3962/2999.png?")
            .headers(headers_24),
          http("request_34")
            .get(uri5 + "/3964/3000.png?")
            .headers(headers_24),
          http("request_35")
            .get(uri5 + "/3961/2997.png?")
            .headers(headers_24),
          http("request_36")
            .get(uri5 + "/3963/2998.png?")
            .headers(headers_24),
          http("request_37")
            .get(uri6 + "/3962/2998.png?")
            .headers(headers_24),
          http("request_38")
            .options(uri8 + "/profile/card")
            .headers(headers_38),
          http("request_39")
            .options(uri8 + "/private/points/points.json")
            .headers(headers_39),
          http("request_40")
            .get(uri8 + "/profile/card")
            .headers(headers_40),
          http("request_41")
            .get(uri8 + "/private/points/points.json")
            .headers(headers_41),
          http("request_42")
            .get(uri8 + "/profile/card")
            .headers(headers_42),
          http("request_43")
            .options(uri2)
            .headers(headers_38),
          http("request_44")
            .get(uri8 + "/profile/card")
            .headers(headers_44),
          http("request_45")
            .get(uri2)
            .headers(headers_45)
        )
    )

	setUp(scn.inject(constantUsersPerSec(2) during (50 seconds) randomized).protocols(httpProtocol))
}
