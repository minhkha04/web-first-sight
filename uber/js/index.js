const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";
let use_first = 0;
let use_second = 0;
let use_third = 0;
let use_time_wait = 0;
let unit_price_first = 0;
let unit_price_second = 0;
let unit_price_third = 0;
let unit_price_time_wait = 0;

function caculator() {
  let km = document.getElementById("txt-km").value * 1;
  let timeWait = document.getElementById("txt-thoiGianCho").value * 1;
  let type = document.querySelector(".type input:checked").value;

  if (type == UBER_CAR) {
    unit_price_first = 8000;
    unit_price_second = 7500;
    unit_price_third = 7000;
    unit_price_time_wait = 2000;
    total = findTotal(
      km,
      timeWait,
      unit_price_first,
      unit_price_second,
      unit_price_third,
      unit_price_time_wait
    );
  } else if (type == UBER_SUV) {
    unit_price_first = 9000;
    unit_price_second = 8500;
    unit_price_third = 8000;
    unit_price_time_wait = 3000;
    total = findTotal(
      km,
      timeWait,
      unit_price_first,
      unit_price_second,
      unit_price_third,
      unit_price_time_wait
    );
  } else {
    unit_price_first = 10000;
    unit_price_second = 9500;
    unit_price_third = 9000;
    unit_price_time_wait = 3500;
    total = findTotal(
      km,
      timeWait,
      unit_price_first,
      unit_price_second,
      unit_price_third,
      unit_price_time_wait
    );
  }
  return total;
}
function findTotal(km, timeWait, first, form1to19, form19toUper, moneyWait) {
  let res = 0;
  if (km <= 1) {
    res = km * first;
    use_first = km;
  } else if (km > 1 && km <= 19) {
    res = first + (km - 1) * form1to19;
    use_first = 1;
    use_second = km - 1;
  } else {
    res = first + 18 * form1to19 + (km - 19) * form19toUper;
    use_first = 1;
    use_second = 18;
    use_third = km - 19;
  }
  if (timeWait >= 3) {
    let tmp = timeWait / 3;
    res += Math.floor(tmp) * moneyWait;
    use_time_wait = tmp;
  }
  return res;
}
function printBill() {
  caculator();
  document.getElementById("details").innerHTML = `
      <div class="col-12 border border-1 border-black border-bottom-0">
            <p class="fs-6 text-center text-danger fw-bold fs-3">INVOICE DETAILS</p>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">DETAILS</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">USE</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">UNIT PRICE</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0  border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">TOTAL</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">FIRST</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${use_first}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${unit_price_first}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${
                use_first * unit_price_first
              }</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">FROM 1 TO 19</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${use_second}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${unit_price_second}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${
                use_second * unit_price_second
              }</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">FROM 19 TO UPPER</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${use_third}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${unit_price_third}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${
                use_third * unit_price_third
              }</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">TIME WAITING</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${use_time_wait}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-end-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${unit_price_time_wait}</p>
            </div>
          </div>
          <div class="col-3 border border-1 border-bottom-0 border-black">
            <div class="content p-1">
              <p class="text-center text-black fs-6">${
                use_time_wait * unit_price_time_wait
              }</p>
            </div>
          </div>
          
          <div class="col-12 border border-1 border-black">
            <div class="content p-1">
              <p class="text-end text-black fs-6">TOTAL: <span>${caculator().toLocaleString(
                "vi",
                {
                  style: "currency",
                  currency: "VND",
                }
              )}</span></p>
            </div>
          </div>
    `;
}
function payment() {
  let total = caculator();
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerText = `${total.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}
document.getElementById("btnTinhTien").addEventListener("click", payment);
document.getElementById("btnInHoaDon").addEventListener("click", printBill);
