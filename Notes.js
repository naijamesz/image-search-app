/* [[[Client]]] |  
==============================================================  
Headers                 | Accept: Version:v1 |  
                        | Authorization: Client-ID:123456789 |  
==============================================================  
Body                    | { "name": "John", "age": 30 }      |  
==============================================================  
                        |                                    |  
==============================================================  
                        |                                    |  
                        |                                    |
                        |                                    |
                        |                                    |
                        |                                    |
===============================================================

API ทำงานใน 4 รูปแบบด้วยกัน โดยขึ้นอยู่กับเวลาและสาเหตุที่สร้าง API

- SOAP API = Simple Object Access Protocol
- RPC API = Remote Procedure Call
- Websocket API = 2-way communication ใช้ JSON ส่งข้อมูล เป็นการสื่อสารระหว่าง client กับ server
- REST API = REST: Representational State Transfer || API:Application Programming Interface เป็น API ที่ได้รับความนิยมสูงสุดและยืดเหยุ่นที่สุดในปัจจุบัน
HTTP Request & Response
*/
/*
HTTP Request Line | GET https://api.upslash/image/search HTTP/1.1 }
==============================================================
=req=> |Server|
=req=> |Server|
=req=> | |
=req=> |Server|
=req=> | |
=req=> |Server|
| |
|Server|
|Server|
|Server| <=res=  
|Server| <=res=  
|Server| <=res=  
==================================================================

         HTTP Response
         [[[Server]]]
==============================================================
|Status Line     | HTTP/1.1 200 OK                           |
==============================================================
|Headers         |                                           |
|                | Content-Length:1234                       |
|                |  Content-Type:app/JSON                    |
==============================================================
|                |                                           |
|Body            | [{ "name": "John",                        |
|                | "age": 30                                 |
|                | }]                                        |
==============================================================
# HTTP Methods

- GET | ใช้สำหรับดึงข้อมูลจาก server |
- POST | ใช้สำหรับสร้างข้อมูลใหม่ server |
- PUT | ใช้สำหรับอัพเดทข้อมูลบน server |
- PATCH | ใช้สำหรับอัพเดทข้อมูลบน server |
- # DELETE | ใช้สำหรับลบข้อมูลบน server |

# HTTP Status Code

- 1xx | Informational responses
- 200 | Success
- 201 | Created
- 202 | Accepted
- 204 | No Content or Deleted

---

---

- 300 | Redirection
- 301 | Made request to a URL that has been moved permanently
- 304 | Not Modified
- 307 | Temporary Redirect
- 308 | Permanent Redirect

---

- 400 | Client Error & Bad Request Something wrong with the request
- 401 | Unauthorized. You must be authorized to access this resource
- 403 | Forbidden. Access to this resource is denied
- 404 | Not Found. The resource you are looking for could not be found
- 405 | Method Not Allowed. The method you are using is not allowed
- 409 | Conflict. There was a conflict when processing the request
- 429 | Too Many Requests. Too many requests hit the API too quickly
- 451 | Unavailable For Legal Reasons. Resource is unavailable for legal reasons

---

- 500 | Server Error & Internal Server Error
- 501 | Not Implemented. The server does not recognize the request method
- # 502 | Bad Gateway. The server was acting as a gateway and received an invalid response
  # JS ไม่ใช้ async await
  เริ่มร้องขอข้อมูลด้วยการเรียกใช้ function ที่ชื่อว่า fetchData
  const fetchData =() => {
  เมื่อ function ถูกเรียกใช้งาน จะทำการเรียกใช้ function ที่ชื่อว่า makeRequest
  const response = makeRequest();
  เริ่มทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  }
  =============================================================
  JS โดยใช้ async await แบบทั่วไป ไม่ใช้ try catch
  =============================================================
  JS เริ่มร้องขอข้อมูล
  const fetchData = async () => {
  บอก JS ให้รอจนกว่าข้อมูลจะมาถึง
  const response = await makeRequest();
  รอจนกว่าข้อมูลจะมาถึงแล้วค่อยทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  =============================================================
  JS โดยใช้ async await แบบทั่วไป ใช้ try catch
  =============================================================
  JS เริ่มร้องขอข้อมูล
  const fetchData = async () => {
  บอก JS ให้รอจนกว่าข้อมูลจะมาถึง
  const response = await makeRequest();
  รอจนกว่าข้อมูลจะมาถึงแล้วค่อยทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  try { ถ้าไม่มี error ให้ทำอะไรบ้าง
  const response = await makeRequest();
  รอจนกว่าข้อมูลจะมาถึงแล้วค่อยทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  } catch (error) { ถ้ามี error ให้ทำอะไรบ้าง
  console.log(error);
  }
  }
  =============================================================
  JS โดยใช้ async await แบบทั่วไป ใช้ try catch และ return
  =============================================================
  JS เริ่มร้องขอข้อมูล
  const fetchData = async () => { บอก JS ให้รอจนกว่าข้อมูลจะมาถึง
  const response = await makeRequest(); รอจนกว่าข้อมูลจะมาถึงแล้วค่อยทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  try { ถ้าไม่มี error ให้ทำอะไรบ้าง
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  } catch (error) { ถ้ามี error ให้ทำอะไรบ้าง
  console.log(error);
  } return response; ส่งค่า response กลับไปให้ function ที่เรียกใช้งาน fetchData
  }
  =============================================================
  JS โดยใช้ async await แบบทั่วไป ใช้ try catch และ return แบบ Promise
  =============================================================
  JS เริ่มร้องขอข้อมูล
  const fetchData = async () => { บอก JS ให้รอจนกว่าข้อมูลจะมาถึง
  const response = await makeRequest(); รอจนกว่าข้อมูลจะมาถึงแล้วค่อยทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  try { ถ้าไม่มี error ให้ทำอะไรบ้าง
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  } catch (error) { ถ้ามี error ให้ทำอะไรบ้าง
  console.log(error);
  } return Promise.resolve(response); ส่งค่า response กลับไปให้ function ที่เรียกใช้งาน fetchData
  }
  =============================================================
  JS โดยใช้ async await แบบทั่วไป ใช้ try catch และ return แบบ Promise และใช้ .then .catch
  .then คือ method ที่ใช้เมื่อ Promise ทำงานเสร็จแล้ว
  .catch คือ method ที่ใช้เมื่อเกิด error ขึ้น
  =============================================================
  JS เริ่มร้องขอข้อมูล
  const fetchData = async () => { บอก JS ให้รอจนกว่าข้อมูลจะมาถึง
  const response = await makeRequest(); รอจนกว่าข้อมูลจะมาถึงแล้วค่อยทำงานบรรทัดข้างล่างนี้
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  try { ถ้าไม่มี error ให้ทำอะไรบ้าง
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  } catch (error) { ถ้ามี error ให้ทำอะไรบ้าง
  console.log(error);
  } return Promise.resolve(response); ส่งค่า response กลับไปให้ function ที่เรียกใช้งาน fetchData
  .then((response) => { ถ้าไม่มี error ให้ทำอะไรบ้าง
  console.log(response);(ใช้ console.log เป็นตัวอย่าง)
  }).catch((error) => { ถ้ามี error ให้ทำอะไรบ้าง
  }
  =============================================================
  โดยพื้นฐานแล้วตัว React.js เองนั้นไม่มีฟังก์ชั่นหรือเครื่องมือสำหรับการเข้าถึงข้อมูลด้วย HTTP Request ในตัวเองอยู่แล้ว
  -จำเป็นต้องใช้ requests จาก library อื่นๆ เช่น axios, fetch หรือ superagent เป็นต้น

เริ่มโดยการ npm install axios หรือ yarn add axios pnpnm add axios เพื่อติดตั้งแพ็คเกจไปยัง node_modules ของโปรเจค
หลังจากนั้เรียกใช้โดยการ const axios = require('axios'); ในรูปแบบ es5 หรือ import axios from 'axios'; es6 (แนะนำ)ก็สามารถใช้งานได้เลย
\*/
