import Link from "next/link";
import Image from "next/image";
import send_us from "./assets/procces/send_us.jpg";
import looking from "./assets/procces/looking.jpg";
import card from "./assets/procces/card.jpg";
import "./globals.css";

export default function Home() {
  // الحالة للغة الافتراضية

  return (
    <div>
      {/* قسم الترحيب */}
      <div className="loading-div">
        <div>
          <h1>On Stock - مرحباً بك في خدمة نقل وتخزين البضائع</h1>
          <p dir="rtl">
            اعثر على الشاحنة المناسبة لاحتياجاتك في النقل بسهولة. نحن نربطك
            بالخدمة المناسبة لتسهيل عملية الشحن والنقل
          </p>
          <Link href="/allTruck">شاهد المزيد</Link>
        </div>
      </div>

      {/* قسم معلومات الخدمة */}
      <div className="service-info-div">
        <div id="title-service-info">
          <h1>شريكك الموثوق لحلول النقل</h1>
          <p>On Stock - مراكش المحاميد 7</p>
        </div>
        <div>
          <div id="location-service-info">
            <img
              src="https://images.squarespace-cdn.com/content/v1/581a35bf9f745674443c98b1/1539350992409-FY84EDPCKUCTGEWPA776/screw_the_average_marrakesh_morocco_tips_info_google_city_tourist_map_directions.png"
              alt="location_marrakech"
              loading="lazy"
            />
          </div>
          <div id="paragraph-service-info">
            <p dir="rtl">
              يقع مقرنا في قلب مراكش بالمحاميد 7، ويهدف On Stock إلى تلبية جميع
              احتياجاتك في النقل بسهولة وسلاسة. سواء كنت بحاجة لنقل شحنة كبيرة
              أو لتوصيل سريع، نحن هنا لنوفر لك الشاحنة المناسبة وسائقاً موثوقاً.
              مهمتنا هي دعمك في كل خطوة، بدءاً من طلبك الأول وصولاً إلى التسليم
              النهائي. بفضل شبكتنا الواسعة من خدمات النقل الموثوقة، نضع راحتك
              ورضاك في المقام الأول ونتأكد من أن جميع مراحل الرحلة تحت السيطرة.
              تواصل معنا في أي وقت على الرقم: 0643082137، واستمتع بتجربة نقل
              سلسة وخدمة لوجستية متميزة وشخصية.
            </p>
          </div>
        </div>
      </div>

      {/* قسم الشاحنات الأعلى تقييمًا */}
      {/* <div className="cars-top-4-div">
        <h1>{translate.top4TruckTitle[lang]}</h1>
        <p>{translate.top4TruckTitle2[lang]}</p>
        <div id="cards-cars-id">
        {topStars.map((item) => (
            <a href={`./allTruck/${item._id}`} id="card" key={item._id}>
              <div id="image-car-id">
                <img src={item.image} alt={item.titleEN} />
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  : {item.stars}
                </li>
              </div>
              <div id="info-car-id">
                <h1>{item.titleEN}</h1>
                <li>{item.LoactionEN}</li>
              </div>
              <hr id="line" />
              <div id="name-car-id">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <h1>{item.nameEN}</h1>
              </div>
            </a>
          ))}
        </div>
      </div> */}

      {/* قسم الاتصال والحجز */}
      <div className="reserve-div">
        <div className="description-div" dir="rtl">
          <h1>
            نحن هنا لمساعدتك في العثور على الشاحنة التي تحتاجها بالضبط. فقط
            أخبرنا بمتطلباتك، وسنتولى الباقي!
          </h1>
          <p>
            مرحباً بك عزيزي العميل، يمكنك إرسال رسالة لنا عبر الواتساب أو البريد
            الإلكتروني، أو الاتصال بنا مباشرةً، وسنقوم بالعثور على الشاحنة
            المثالية لاحتياجاتك. لا تقلق – لن تحتاج لدفع أي شيء للبدء. نحن هنا
            لمساعدتك!
          </p>
        </div>
        <div className="details-div">
          <li>
            <p>+212 643082137</p>
            <a href="https://wa.link/f8jxwc">Send</a>
          </li>
          <li>
            <p>chadiidac@gmail.com</p>
            <a href="mailto:chadiidac@gmail.com">Send</a>
          </li>
        </div>
      </div>
      <div className="procces-div">
        {" "}
        <h1>خدمة نقل احترافية بخطوات بسيطة وسهلة</h1>
        <p>نحن نقدم خدمة النقل من خلال ثلاث خطوات مريحة لضمان أفضل تجربة لك</p>
        <div className="cards-procces">
          <div id="card-procces">
            <Image src={send_us} alt="اتصل بنا" />
            <p>
              <span>الخطوة 1: تواصل معنا</span> : بمجرد الاتصال بنا، سنجمع منك
              كل المعلومات اللازمة، بما في ذلك الموقع والوقت والهدف من عملية
              النقل.
            </p>
          </div>
          <div id="card-procces">
            <Image src={looking} alt="نبحث عن الناقل" />
            <p>
              <span>الخطوة 2: البحث عن الناقل</span> : سنقوم بالتحقق من
              المتوفرين من أصحاب الشاحنات ونتواصل معهم لترتيب لقاء معك.
            </p>
          </div>
          <div id="card-procces">
            <Image src={card} alt="عملية النقل" />
            <p>
              <span>الخطوة 3: بدء عملية النقل</span> : سيأتي الناقل إليك في
              الوقت المحدد لنقل بضاعتك بأمان.
            </p>
          </div>
        </div>
      </div>

      <hr id="link-footer"/>
    </div>
  );
}
