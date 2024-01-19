// use axios and async await
import axios from 'axios';

const searchImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID B5F9ffiQ7QeoPYo0Gi35OgqnCce2PSlNdQUKQK-jEXQ',
    },
    params: {
      query: term,
    },
  });
  // console.log(response.data.results[0].urls.regular);
  return response.data.results;
};

export default searchImages;

// สร้าง function ชื่อ fetchData หรือชื่อที่สื่อถึงสิ่งที่จะทำ โดยให้มีการรับค่ามาเป็น async
// const fetchData = async () => {
//   // start request data ด้วย axios.get แล้วรอช้อมูลมาแสดงด้วย await
//   const response = await axios.get('https://api.unsplash.com/search/photos', {
//     // ยืนยันตัวตนด้วย Authorization และ Client-ID
//     headers: {
//       Authorization: 'Client-ID B5F9ffiQ7QeoPYo0Gi35OgqnCce2PSlNdQUKQK-jEXQ',
//     },
//     params: {
//       query: 'cars',
//     },
//   });
//   // แสดงข้อมูลที่ได้รับมา โดยเรียกใช้ console.log(response.data.results[0].urls.regular) (ก็ได้ถ้าจะแสดงแค่รูปแรก)
//   return response;
// };

// export default fetchData;
