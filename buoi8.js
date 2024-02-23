// ///Arrow funcition(Hàm mũi tên)
// // setTimeout(() => console.log("ok"), 3000);
// //vi du tinh tong cac so chan trong mang
// // const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const tongsochan = (array) => {
// //   let tong = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] % 2 == 0) {
// //       tong += array[i];
// //     }
// //   }
// //   return tong;
// // };
// // const result = tongsochan(mang);
// // console.log(result);
// //tinh tong cac so le trong mang
// // const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const tongsole = (array) => {
// //   let tong = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] % 2 !== 0) {
// //       tong += array[i];
// //     }
// //   }
// //   return tong;
// // };
// // const result = tongsole(mang);
// // console.log(result);
// //vi du 2
// // const bieuthuc = (n) => {
// //   let result = 0;
// //   for (let i = 1; i <= n; i++) {
// //     result += i / n;
// //   }
// //   return result;
// // };
// // let n;
// // do {
// //   n = parseInt(prompt("nhap n"));
// //   if (n <= 0) {
// //     console.log("vui long nhap so lon hon0");
// //   } else {
// //     const result = bieuthuc(n);
// //     console.log(result);
// //   }
// // } while (n <= 0);

// //Try Catch

// //try catch là một khối lệnh dùng để bắt lỗi chương trình
// //Sử dụng Try catch khi muốn chương trình không bị dừng khi một lệnh nào đó bị lỗi
// //Cú pháp :
// //try{
// /////chạy đầu tiên
// // }catch(error){
// // /////nếu lỗi chạy vào đây
// // }finally{
// // //////luôn luôn chạy vào đây và chạy sau cùng
// // }
// //vi du
// // const a = 10;
// // try {
// //   console.log("a=" + a);
// // } catch (error) {
// //   console.log(error);
// // } finally {
// //   console.log("luôn chạy vào đây");
// // }
// try {
//   console.log("a=" + a);
// } catch (error) {
//   console.log(error);
// }

// console.log("chuc nang khac");

//3///Lamf việc với object nâng cao
//3.1 :Cách thêm mới 1 key vào object
//  cú pháp tenObject.tên key= value
//tenObject["tenKey"]=value
//ví dụ
// var inforUser = { name: "luu duc tho", pass: "122312" };
// inforUser.phone = "0234924582384";

// inforUser["dia chi"] = "nam dinh";
// delete inforUser.pass;
// console.log(inforUser);

// /4 làm việc với array nâng cao
//4.1//forEach():lặp qua từng phần tử trong mảng và thực hiện hành động nào đó
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number.forEach((item, index) => {
//   number[index] = item + 1;
// });
// console.log(number);
// number.forEach((item, index) => {
//   console.log(index);
// });
//4.2 evey() //kiểm tra tất cả các phần tử của mảng phải thỏa mãn một điều kiện nào đó
// const monhoc = [
//   { mon: "toan", diem: 10 },
//   { mon: "anh", diem: 9 },
//   { mon: "hoa", diem: 8 },
//   { mon: "su", diem: 7 },
// ];
// // const hocSinhgioi = monhoc.every((item, index) => {
// //   return item.diem >= 7;
// // });
// // console.log(hocSinhgioi);
// //lọc qua các phần tử chỉ cần 1 phần tử ko thỏa mãn điều kiện sẽ trả ra kết quả false

// //4.2 some()// chỉ cần 1 điều kiện đúng sẽ trả về kết quả true
// const hocSinhgioi = monhoc.some((item, index) => {
//   return item.diem >= 8;
// });
// console.log(hocSinhgioi);

//find()// Tìm xem trong mảng có giá trị nào giống với giá trị đang cần tìm hay ko
//nếu có thì trả về chính phần tử của mảng đó
//nếu ko thì trả về undefine
// chỉ tìm được 1 phần tử trong mảng
// const monhoc = [
//   { mon: "toan", diem: 10 },
//   { mon: "anh", diem: 9 },
//   { mon: "hoa", diem: 8 },
//   { mon: "su", diem: 7 },
// ];
// const monTin = monhoc.find((item) => {
//   return item.mon === "sinh";
// });
// console.log(monTin);
// console.log(monTin.diem);
//4.5 fillter() giống finf() ,có thể tìm được nhiều phần tử trong mảng ,
// const monTin = monhoc.filter((item) => {
//   return item.mon === "toan";
// });
// console.log(monTin);
//4.6 Map()
//lặp qua từng phần tử của mảng và trả về 1 mảng mới
//số lượng phần tử bằng mảng cũ
// giá trị trả về quyết định bởi từ khóa return

// const mangMoi = monhoc.map((item) => {
//   return item.mon; // trả về mamngr mới chỉ có tên môn học
//   //   return item.diem; trả về mảng mới chỉ có điểm
// });
// console.log(mangMoi);

///so sánh forEach với map
// forEach  trả về return thì undefine và ko sửa được mảng cũ
//map() trả về return được và sửa đucowj mảng cũ

// reduce() duyệt qua từng phần tử của mảng để tính toán và trả vêf một giá trị cuối cùng
//total là giá trị khởi tạo ban đầu tiên của mảng

// const number = [1, 2, 3, 4];
// const sum = number.reduce((total, item) => {
//   console.log(total);
//   console.log(item);
//   console.log("------");
//   return total + item;
// });
// console.log(sum);
// const monhoc = [
//   { mon: "toan", diem: 10 },
//   { mon: "anh", diem: 9 },
//   { mon: "hoa", diem: 8 },
//   { mon: "su", diem: 7 },
// ];
// // let tongdiem = 0;
// // monhoc.forEach((item) => {
// //   tongdiem = tongdiem + item.diem;
// // });
// // console.log(tongdiem);
// // let tongdiem = monhoc.reduce((total, item) => {
// //   return total + item.diem;
// // }, 0); //gắn 0 vào ban đầu nếu ko sẽ lấy cả obj
// // console.log(tongdiem);

// let diemTrungbinh = monhoc.reduce((average, item) => {
//   return average + item.diem / monhoc.length;
// }, 0);
// console.log(diemTrungbinh);
