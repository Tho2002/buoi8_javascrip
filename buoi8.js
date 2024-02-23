///Arrow funcition(Hàm mũi tên)
// setTimeout(() => console.log("ok"), 3000);
//vi du tinh tong cac so chan trong mang
// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tongsochan = (array) => {
//   let tong = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       tong += array[i];
//     }
//   }
//   return tong;
// };
// const result = tongsochan(mang);
// console.log(result);
//tinh tong cac so le trong mang
// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const tongsole = (array) => {
//   let tong = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       tong += array[i];
//     }
//   }
//   return tong;
// };
// const result = tongsole(mang);
// console.log(result);
//vi du 2
// const bieuthuc = (n) => {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i / n;
//   }
//   return result;
// };
// let n;
// do {
//   n = parseInt(prompt("nhap n"));
//   if (n <= 0) {
//     console.log("vui long nhap so lon hon0");
//   } else {
//     const result = bieuthuc(n);
//     console.log(result);
//   }
// } while (n <= 0);

//Try Catch

//try catch là một khối lệnh dùng để bắt lỗi chương trình
//Sử dụng Try catch khi muốn chương trình không bị dừng khi một lệnh nào đó bị lỗi
//Cú pháp :
//try{
/////chạy đầu tiên
// }catch(error){
// /////nếu lỗi chạy vào đây
// }finally{
// //////luôn luôn chạy vào đây và chạy sau cùng
// }
//vi du
// const a = 10;
// try {
//   console.log("a=" + a);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("luôn chạy vào đây");
// }
