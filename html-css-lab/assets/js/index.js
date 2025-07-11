const test = document.getElementById("test");
const imgTest = document.getElementById("imgTest");
const modifiedClass = document.getElementById("modifiedClass");
const nameInput = document.getElementById("name");
const btnShow = document.getElementById("btnShow");
const btnOn = document.getElementById("btnOn");
const btnOf = document.getElementById("btnOf");
const light = document.getElementById("light");
const btnOnOfTheme = document.getElementById("btnOnOfTheme");
const create_here = document.getElementById("create_here");

test.innerHTML = "use innerHTML to modified content in tags";
test.style.backgroundImage =
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)";
test.style.color = "white";
test.style.padding = "10px";
test.style.textAlign = "center";
imgTest.src = "https://theband-psi.vercel.app/assets/img/bandmember.jpg";

modifiedClass.className += " bg-black text-white";
modifiedClass.style.padding = "10px";
modifiedClass.style.textAlign = "center";

btnShow.onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email != "" && password != "") {
    let infor = document.getElementById("infor");
    infor.innerHTML += `
        <div class="account p-3">
            <p class="m-0">Email: ${email}</p>
            <p class="m-0">Password: ${password}</p>
        </div>
        `;
  }
};
function on() {
  light.src = "assets/img/pic_bulbon.gif";
  light.style.cursor = "pointer";
}
function of() {
  light.src = "assets/img/pic_bulboff.gif";
}
btnOn.onclick = on;
btnOf.onclick = of;
light.onmouseenter = on;
light.onmouseleave = of;

btnOnOfTheme.onclick = function () {
  document.querySelector("body").classList.toggle("dark");
};
light.onmousemove = function () {
  console.log("kha");
};

let imgTag = document.createElement("img");
imgTag.className = "h-100 w-100 p-3";
imgTag.src = "https://theband-psi.vercel.app/assets/img/bandmember.jpg";
create_here.appendChild(imgTag);
let tmp = 10 * 30;
create_here.innerHTML += `
<div class="bg-white text-danger fs-1 text-center">
<h1>${tmp}</h1>
</div>
`;
document.getElementById("btnCaculator").onclick = function () {
  let money_loan = document.getElementById("money_loan").value * 1;
  let money_payment = document.getElementById("money_payment").value * 1;
  if (money_loan != "" && money_payment != "") {
    if (money_loan > money_payment) {
      let re =
        money_loan - money_payment + (money_loan - money_payment) * 0.015;
      document.getElementById("result").innerHTML = `
          <p>You have not paid enough</p>
          <p>Amount to pay: ${re.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}</p>
          `;
    } else if (money_loan == money_payment) {
      document.getElementById("result").innerHTML = `
          <p>Money loan must be more than or equal money payment</p>
          `;
    } else {
      document.getElementById("result").innerHTML = `
          <p>You have paid enough</p>
          `;
    }
  }
  let str = document.getElementById("tmp").value;
  console.log(str);
  document.getElementById("money_loan").value = "";
  document.getElementById("money_payment").value = "";
};

function currentTime() {
  let cur = new Date();
  let hours_in = cur.getHours();
  let minute_in = cur.getMinutes();
  let second_in = cur.getSeconds();
  let perfixHours = hours_in < 10 ? "0" : "";
  let perfixMinute = minute_in < 10 ? "0" : "";
  let perfixSecond = second_in < 10 ? "0" : "";
  document.getElementById("time").innerHTML = `
    ${perfixHours}${hours_in}:${perfixMinute}${minute_in}:${perfixSecond}${second_in}
  `;
}
setInterval(currentTime, 1000);

function getTimeAtOffline() {
  let cur = new Date();
  let timestamp = cur.getTime();
  let hours = cur.getHours();
  let minutes = cur.getMinutes();
  let seconds = cur.getSeconds();
  let perfixHours = hours < 10 ? "0" : "";
  let perfixMinute = minutes < 10 ? "0" : "";
  let perfixSecond = seconds < 10 ? "0" : "";
  document.getElementById(
    "off_time"
  ).innerHTML = `Time click of: ${perfixHours}${hours}:${perfixMinute}${minutes}:${perfixSecond}${seconds}`;
  return timestamp;
}

function showTimeOnlineAgo(timeOffline) {
  let cur = new Date();
  let timestamp_now = cur.getTime();
  let tmp = timestamp_now - timeOffline;
  let second = Math.floor(tmp / 1000);
  let minute = Math.floor(second / 60);
  let hours = Math.floor(minute / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);
  let time = document.getElementById("time_off");
  let str = "";
  if (second > 0 && second < 60) {
    str = `${second} seconds`;
  }
  if (minute > 0 && minute < 60) {
    str = `${minute} minutes`;
  }
  if (hours > 0 && hours < 24) {
    str = `${hours} hours`;
  }
  if (years > 0) {
    str = `${years} years`;
  }
  time.innerHTML = `Online ${str} ago`;
}

let offlineTime = 0;
document.getElementById("btnOff").onclick = function () {
  document.getElementById("btnOff").disabled = true;
  offlineTime = getTimeAtOffline();
};
document.getElementById("btnCheck").onclick = function () {
  showTimeOnlineAgo(offlineTime);
};
document.getElementById("btnRest").addEventListener("click", function () {
  document.getElementById("btnOff").disabled = false;
  document.getElementById("time_off").innerHTML = "";
  document.getElementById("off_time").innerHTML = "";
});
function countDown() {
  document.getElementById("btnRun").disabled = true;
  let minute = document.getElementById("timeInput").value * 1;
  let second = minute * 60;
  let connt = setInterval(function () {
    let minute_out = Math.floor(second / 60);
    let second_out = second % 60;
    let perfixSecond = second_out < 10 ? "0" : "";
    let perfixMinute = minute_out < 10 ? "0" : "";
    document.getElementById(
      "time_out"
    ).innerHTML = `${perfixMinute}${minute_out}:${perfixSecond}${second_out}`;
    if (second < 0) {
      clearInterval(connt);
      alert("Time Out");
      document.getElementById("time_out").innerHTML = "00:00";
      document.getElementById("btnRun").disabled = false;
    } else {
      second--;
    }
  }, 1000);
}
document.getElementById("btnRun").onclick = countDown;

function xanh_do() {
  for (let i = 1; i <= 10; i++) {
    let tagDiv = document.createElement("div");
    if (i % 2 == 1) {
      tagDiv.className = "bg-danger p-3";
    } else {
      tagDiv.className = "bg-primary p-3";
    }
    document.getElementById("result2").appendChild(tagDiv);
  }
}
document.getElementById("btnPrint").addEventListener("click", xanh_do);
document.getElementById("btnClean").addEventListener("click", function () {
  document.getElementById("result2").innerHTML = "";
});

function createChess() {
  let x = document.getElementById("row").value * 1;
  let y = document.getElementById("column").value * 1;
  let chess = document.getElementById("chess");
  chess.innerHTML = "";
  for (let i = 1; i <= x; i++) {
    let line = document.createElement("div");
    line.className = "d-flex justify-content-center";
    for (let z = 1; z <= y; z++) {
      let o = document.createElement("div");
      if ((i % 2 == 1 && z % 2 == 1) || (i % 2 == 0 && z % 2 == 0)) {
        o.className = "o bg-white";
      } else {
        o.className = "o bg-black";
      }
      line.appendChild(o);
    }
    chess.appendChild(line);
  }
}
function renderChess(x, y) {
  let chess = document.getElementById("chess");
  let res = ``;
  for (let i = 1; i <= x; i++) {
    let column = ``;
    for (let z = 1; z <= y; z++) {
      if ((i % 2 == 1 && z % 2 == 1) || (i % 2 == 0 && z % 2 == 0)) {
        column += `<div class="o bg-white"></div>`;
      } else {
        column += `<div class="o bg-black"></div>`;
      }
    }
    res += `<div class="d-flex justify-content-center">${column}</div>`;
  }
  return res;
}
document.getElementById("btnChess").addEventListener("click", createChess);

function checkRadio() {
  let radios = document.querySelectorAll(".select input");
  radios.forEach(function (radio) {
    if (radio.checked) {
      console.log("yes");
      console.log(radio.value);
    }
  });
}
document.getElementById("btnCheckRadio").onclick = checkRadio;
let arrNumber = [];
document.getElementById("btnShowArray").onclick = () => {
  let n = document.getElementById("numberN").value * 1;
  arrNumber.push(n);
  document.getElementById("resArr").innerHTML = arrNumber;
};
let arrMove = [
  {
    maPhim: 14034,
    tenPhim: "Tấm Vé Đến Thiên Đường",
    biDanh: "tam-ve-den-thien-duong",
    trailer: "https://youtu.be/pyYq_iGzetM",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/tam-ve-den-thien-duong_gp01.png",
    moTa: "Hai diễn viên kỳ cựu của Hollywood",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-08T00:00:00",
    danhGia: 8,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14045,
    tenPhim: "Doraemon: Nobita & bản giao hưởng Địa Cầu",
    biDanh: "doraemon-nobita-ban-giao-huong-dia-cau",
    trailer: "https://www.youtube.com/watch?v=Yug8gbDd5EQ",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/doraemon-nobita-va-ban-giao-huong-dia-cau_gp01.jpg",
    moTa: "Doraemon: Nobita và bản giao hưởng Địa Cầu là bộ phim điện ảnh thứ 43 trong loạt phim điện ảnh Doraemon. Bộ phim được đạo diễn bởi Imai Kazuaki, người cũng đã thực hiện hai phần phim trước đó là Nobita và đảo giấu vàng và Nobita và những bạn khủng long mới. Utsumi Teruko sẽ đảm nhận phần biên kịch cho bộ phim. ",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-04T20:37:12.097",
    danhGia: 8,
    hot: true,
    dangChieu: true,
    sapChieu: false,
  },
  {
    maPhim: 14057,
    tenPhim: "Đất rừng phương Nam",
    biDanh: "dat-rung-phuong-nam",
    trailer: "https://youtu.be/hktzirCnJmQ?si=uWvVMofTrwlEVv3i",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/dat-rung-phuong-nam_gp01.jpg",
    moTa: "Đất rừng phương Nam",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-05T00:00:00",
    danhGia: 7,
    hot: true,
    dangChieu: false,
    sapChieu: true,
  },
  {
    maPhim: 14058,
    tenPhim: "Thám tử Pikachu",
    biDanh: "tham-tu-pikachu",
    trailer: "https://youtu.be/1roy4o4tqQM",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/tham-tu-pikachu_gp01.png",
    moTa: "Hay lắm",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-06T00:00:00",
    danhGia: 5,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14059,
    tenPhim: "THOR 5 - Tình yêu sấm sét",
    biDanh: "thor-5-tinh-yeu-sam-set",
    trailer: "https://www.youtube.com/watch?v=229zaCyuWKQ",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/thor-5-tinh-yeu-sam-set_gp01.png",
    moTa: "Hayyyy",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-04T00:00:00",
    danhGia: 5,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14060,
    tenPhim: "Người sắt 4",
    biDanh: "nguoi-sat-4",
    trailer: "https://youtu.be/SwwlFvOwkhA",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-sat-4_gp01.png",
    moTa: "Do you know that iron man is a really rich man ?",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-07T00:00:00",
    danhGia: 10,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14061,
    tenPhim: "Captain Marvel 2",
    biDanh: "captain-marvel-2",
    trailer: "https://youtu.be/M3tBP1MyMB0",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/captain-marvel-2_gp01.png",
    moTa: "Hay ",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-04T00:00:00",
    danhGia: 7,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14063,
    tenPhim: "Nghề siêuu dễ",
    biDanh: "nghe-sieuu-de",
    trailer: "https://youtu.be/1anBxcsV5b8",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/nghe-sieuu-de_gp01.png",
    moTa: "Oke",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-08T00:00:00",
    danhGia: 5,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14065,
    tenPhim: "Tăng tốc phía em",
    biDanh: "tang-toc-phia-em",
    trailer: "https://youtu.be/h261_whvLPM",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/tang-toc-phia-em_gp01.png",
    moTa: "Oke",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-04T00:00:00",
    danhGia: 10,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14070,
    tenPhim: "Lật mặt 7: Một điều ước",
    biDanh: "lat-mat-7-mot-dieu-uoc",
    trailer: "https://youtu.be/d1ZHdosjNX8?si=-lBG_8wb4WbyJxIS",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-7-mot-dieu-uoc_gp01.jpg",
    moTa: "Mẹ thương yêu con vô điều kiện, nhưng mẹ bệnh con chưa đủ điều kiện để về chăm!\r\n\r\nPhim được phân loại K cho mọi lứa tuổi - các bé dưới 13 tuổi có thể xem khi đi cùng người lớn. \r\n\r\nLật Mặt 7: Một Điều Ước khởi chiếu 26.04.2024 tại các cụm rạp trên toàn quốc.",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-06T00:00:00",
    danhGia: 8,
    hot: true,
    dangChieu: false,
    sapChieu: true,
  },
  {
    maPhim: 14073,
    tenPhim: "Nhà Bà Nữuu",
    biDanh: "nha-ba-nuuu",
    trailer: "https://www.youtube.com/watch?v=uAop-vMrggI",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/nha-ba-nuuu_gp01.png",
    moTa: "Phim hay",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-10-10T00:00:00",
    danhGia: 3,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14074,
    tenPhim: "Kẻ Độc Hànhh",
    biDanh: "ke-doc-hanhh",
    trailer: "https://youtu.be/_iyC2aUCxY0",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ke-doc-hanhh_gp01.png",
    moTa: "Good",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-13T00:00:00",
    danhGia: 8,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14075,
    tenPhim: "BỖNG DƯNG TRÚNG S Ố",
    biDanh: "bong-dung-trung-s-o",
    trailer: "https://youtu.be/D3KbO3QF-lg",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/bong-dung-trung-s-o_gp01.png",
    moTa: "Phim hài hết biết",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-13T00:00:00",
    danhGia: 3,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14076,
    tenPhim: " Black AAdam",
    biDanh: "black-aadam",
    trailer: "https://youtu.be/uAop-vMrggI",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/black-aadam_gp01.png",
    moTa: "Dwayne Johnson sẽ góp mặt trong tác phẩm hành động - phiêu lưu mới của New Line",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-08T00:00:00",
    danhGia: 10,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14088,
    tenPhim: "nestJS",
    biDanh: "nestjs",
    trailer: "",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/nestjs_gp01.png",
    moTa: "desc nestJS",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-08T13:43:26.677",
    danhGia: 10,
    hot: true,
    dangChieu: true,
    sapChieu: false,
  },
  {
    maPhim: 14097,
    tenPhim: "Cô gái từ wá khứ",
    biDanh: "co-gai-tu-wa-khu",
    trailer: "https://youtu.be/WsBV9s1SqpM",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/co-gai-tu-wa-khu_gp01.png",
    moTa: "Phim có màu sắc u buồn",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-29T00:00:00",
    danhGia: 10,
    hot: true,
    dangChieu: true,
    sapChieu: true,
  },
  {
    maPhim: 14106,
    tenPhim: "NestJsMovie",
    biDanh: "nestjsmovie",
    trailer: "",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/nestjsmovie_gp01.png",
    moTa: "desc nestJsMovie",
    maNhom: "GP01",
    ngayKhoiChieu: "2024-06-08T00:00:00",
    danhGia: 1,
    hot: true,
    dangChieu: true,
    sapChieu: false,
  },
];
let content = "";
arrMove.forEach((item, index) => {
  let { hinhAnh, tenPhim, hot, danhGia } = item;
  content += `
    <div class="col-3 p-2">
        <div class="content">
            <div class="card custom_card">
                <img height = "300px" src=${hinhAnh} class="card-img-top object-fit-cover" alt="...">
                <div class="card-body">
                    <div class="d-flex py-2">${createVote(danhGia)}</div>
                    <h5 class="card-title">${tenPhim}</h5>
                    ${
                      hot
                        ? `<div class="bg-danger position-absolute top-0 end-0"><p style = "font-size: 20px"class="m-0 p-1">HOT</p></div>`
                        : ``
                    }
                    
                </div>
                
            </div>
        </div>
    </div>
  `;
});
document.getElementById("renderMovie").innerHTML = content;
function createVote(x) {
  let start_full = Math.floor(x / 2);
  let start_overplay = (x / 2 - start_full) * 100;
  let isExitStatart_overplay = start_overplay == 0 ? 0 : 1;
  let res = ``;
  for (let i = 1; i <= start_full; i++) {
    res += `<div class="my_start"><div class="start_overlay" style="clip-path: inset(0 0 0 0);"></div></div>`;
  }
  if (start_overplay != 0) {
    res += `<div class="my_start"><div class="start_overlay" style="clip-path: inset(0 ${
      100 - start_overplay
    }% 0 0);"></div></div>`;
  }
  for (let i = start_full + 1 + isExitStatart_overplay; i <= 5; i++) {
    res += `<div class="my_start"><div class="start_overlay" style="clip-path: inset(0 100% 0 0);"></div></div>`;
  }
  return res;
}
let arrUsers = [
  {
    taiKhoan: "13123",
    hoTen: "NguyenVan123",
    email: "Quyenvan@gmail.com",
    soDT: "0987654321",
    matKhau: "Movie12120088888888",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "abcdfgh",
    hoTen: "Có ai trong đây xin được job chưa ạ",
    email: "huiq@gmail.com",
    soDT: "0987654321",
    matKhau: "123456",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "admin_quyen_luc",
    hoTen: "admin_cui_bap",
    email: "admin_quyen_luc@gmail.com",
    soDT: "0323467891",
    matKhau: null,
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "admin0002",
    hoTen: "Có ai ở đây không",
    email: "AdminS@gmail.com",
    soDT: "0323467891",
    matKhau: "yurtal_tunalsos1",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "admin0003",
    hoTen: "Có ai trong đây xin được job chưa ạ",
    email: "phan03110991@gmail.com",
    soDT: "0987654324",
    matKhau: "John123@f",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "admin01",
    hoTen: "Có ai trong đây xin được job chưa ạ",
    email: "admin01@gmail.com",
    soDT: "0987654321",
    matKhau: "Movie2",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "admin1123",
    hoTen: "admin",
    email: "admin123@gmail.com",
    soDT: "0990090090",
    matKhau: "123321",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "admin321",
    hoTen: "admin 123",
    email: "admin321@gmail.com",
    soDT: "0987654321",
    matKhau: "321321",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "admin996",
    hoTen: "PhucDv",
    email: "admin999@gmail.com",
    soDT: "0396244169",
    matKhau: "123456",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "Admovie",
    hoTen: "Admovie",
    email: "ad@mail.com",
    soDT: "0909999999",
    matKhau: "123456",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "alphameta",
    hoTen: "Thằng ngu ",
    email: "alphametaa@gmail.com",
    soDT: "0937332232",
    matKhau: "123456789",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "Axxx",
    hoTen: "KIM CƯƠNG",
    email: "zzcc@gmail.com",
    soDT: "0376797569",
    matKhau: "@Abc132",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "BC42admin",
    hoTen: "stringUpdate",
    email: "stringupdate@g.xxx",
    soDT: "0333050242",
    matKhau: "nguvuathoi",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "BC55admin",
    hoTen: "BC55 Admin",
    email: "bc55admin@gmail.com",
    soDT: "7979",
    matKhau: "BC55admin",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "caovanlucn6",
    hoTen: "Cao Văn Lực",
    email: "vancaoluc@gmail.com",
    soDT: "0933991939",
    matKhau: "Anhyeuem1@",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "CbsAdmin",
    hoTen: "CBS Admin",
    email: "CbsAdmin@example.com",
    soDT: "0123456789",
    matKhau: "123456aA",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "conan123",
    hoTen: "Edogawa Conan",
    email: "conan123@gmail.com",
    soDT: "0909555666",
    matKhau: "Conan123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "dung251996",
    hoTen: "Mai Anh Dũng",
    email: "maianhdung02051996@gmail.com",
    soDT: "0784586066",
    matKhau: "dung123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "duyvbadmin",
    hoTen: "Duy",
    email: "duyvb1111@gmail.com",
    soDT: "1234567893",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "Hanh",
    hoTen: "Nguyễn Thị Hạnh ",
    email: "updatehanh@gmail.com",
    soDT: "0386992381",
    matKhau: "Bulong@122",
    maLoaiNguoiDung: "khachHang",
  },
  {
    taiKhoan: "Johnsan",
    hoTen: "John Hookasd",
    email: "hookKa@gmail.comasd",
    soDT: "0223452556",
    matKhau: "12356789asdsdaasd",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "mannguyenbc51fake",
    hoTen: "Man Ng",
    email: "mannguyen@gmail.com",
    soDT: "0855512123",
    matKhau: "123123123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "marking234",
    hoTen: "mark",
    email: "marking234@example.com",
    soDT: "0123456789",
    matKhau: "123456aA",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "meta",
    hoTen: "marking123",
    email: "meta@gmail.com",
    soDT: "0833523888",
    matKhau: "meta",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "nguyen#!",
    hoTen: "Update",
    email: "update@gmail.com",
    soDT: "0386992381",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "nguyentest",
    hoTen: "ntntestUpdate2",
    email: "testntnguyen275@gmailcom",
    soDT: "0386992381",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "nhlong2305",
    hoTen: "Đây Là Đâu",
    email: "nhlong2305@gmail.com",
    soDT: "0987654321",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "robinnhi125admin",
    hoTen: "GumayuLong",
    email: "lt6883958@gmail.com",
    soDT: "0922461176",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "tannienad",
    hoTen: "tan nien",
    email: "ad321@gmail.com",
    soDT: "123456789",
    matKhau: "123123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "thebao27",
    hoTen: "Bao Tran",
    email: "email2710@gmail.com",
    soDT: "2710199798",
    matKhau: "thebao27105",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "TienAdmin",
    hoTen: "Tien Nguyen",
    email: "tiennguyentest@gmail.com",
    soDT: "0123456789",
    matKhau: "Anhtien@1999",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "tinadmin",
    hoTen: "XUI THÔI",
    email: "adminbb@gmail.com",
    soDT: "0833523887",
    matKhau: "Abc@123",
    maLoaiNguoiDung: "KhachHang",
  },
];
let content_c2 = ``;
arrUsers.forEach((item, index) => {
  let { taiKhoan, hoTen, email, maLoaiNguoiDung } = item;
  content_c2 += `<tr><td>${taiKhoan}</td><td>${hoTen}</td><td>${email}</td><td>${maLoaiNguoiDung == "QuanTri" ? "Quản trị" : "Khách hàng"}</td></tr>`;
});
document.getElementById("tbody").innerHTML = content_c2;

let arrActor = ["Kha", "Tran", "Hung", "Hang"];
function fake(chucNang) {
  let newArrActor = [];
  for(let i in arrActor) {
    let actor = chucNang(arrActor[i], i);
    newArrActor.push(actor);
  }
  return newArrActor;
}
fake((value, index) => {
  console.log(index + " " + value);
  return `Actor: ${value}`;
});
let arrChampion = [
  {
    name: "Garen",
    damge: 93,
    def: 55,
    defAp: 40,
  },
  {
    name: "Kaisa",
    damge: 80,
    def: 30,
    defAp: 35,
  },
  {
    name: "Jhin",
    damge: 109,
    def: 35,
    defAp: 30,
  },
  {
    name: "Aatrox",
    damge: 85,
    def: 40,
    defAp: 25,
  },
];
function fakeFilter(chucNang) {
  let newArrChampion = [];
  for (let i in arrChampion) {
    if(chucNang(i, arrChampion[i])) {
      newArrChampion.push(arrChampion[i])
    }
  }
  return newArrChampion;
}
function checkDamge(index, value) {
  return value.damge > 80;
}
function checkDefAP(index, value) {
  return value.defAp > 30;

}
let tmp_new = fakeFilter(checkDamge);
console.log(tmp_new);
let tmp_new_2 = fakeFilter(checkDefAP);
console.log(tmp_new_2);
