// Selecting element

const formEl = document.querySelector(".phone-form");
const minEl = document.querySelector(".min");
const maxEl = document.querySelector(".max");
const btnEl = document.querySelector(".btn--search");
const gridEl = document.querySelector(".grid");

const hideGrid = function (phone) {
  gridEl.innerHTML = "";
  const phoneArr = phone;
};

const createPohne = async function () {
  try {
    const res = await fetch(
      `https://ezeapi-prod-copy.herokuapp.com/api/v1/sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,OnePlus`
    );
    const dat = await res.json();
    console.log(dat);
    if (!res.ok) throw new Error(`${dat.message}`);
    let { data } = dat.data;
    let phone;
    data.map((el) => {
      // console.log(el);
      phone = {
        brand: el.brand,
        image: el.imgUrl,
        name: el.name,
        storage: el.lowestAsk.storageSize,
      };
      console.log(phone.storage);
    });

    btnEl.addEventListener("click", function (e) {
      e.preventDefault();

      const formArr = [formEl.value];
      const formAr = formArr[0].toLowerCase().replaceAll(" ", "").split(",");
      if (formAr.length > 3)
        throw new Error("it must be three items separated by comma");
      const [brand, name] = [...formAr];
    });
  } catch (err) {
    console.log("💥💥", err);
  }
};
 
create one();
