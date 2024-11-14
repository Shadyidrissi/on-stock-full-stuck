import React from "react";
import translate from "../../translate/translate";

function Page() {


  // Dummy data for trucks; can be replaced with fetched data.
 

  const trucks = [
    {
      title: "TRIPORTEUR",
      description: "تريبيور هو شاحنة ثلاثية العجلات متعددة الاستخدامات، مصممة خصيصاً للنقل الحضري والتسليمات الصغيرة. توفر هذه الشاحنة قدرة فائقة على المناورة، مما يجعلها مثالية للطرق الضيقة. بالإضافة إلى ذلك، تتميز بكفاءة استهلاك الوقود، مما يقلل من تكاليف التشغيل.",
      width: "100 cm",
      height: "120 cm",
      weight: "800 kg",
      available: "true",
      type: "مركبة خفيفة",
      imageSrc: "https://scontent.frba1-3.fna.fbcdn.net/v/t1.6435-9/105455610_1607180322796351_4503525192029723782_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeFiB9rgPFsOnL6qvhbbC7jyiedeZoVDvYqJ515mhUO9iu0PEILNXldoWGRKpBzyw3y-U_xUV7llThreTgzD1d9p&_nc_ohc=sGLgd0WW3AkQ7kNvgFkn_R-&_nc_zt=23&_nc_ht=scontent.frba1-3.fna&_nc_gid=AASMnk8stwcwA4oKD8JaWeE&oh=00_AYBj8pYG5sFHpwwqYn0H8AkxuR_k8ykEd7xDzG_LHPUuYg&oe=674D54F4", // Replace with actual image URLs
    },
    {
      title: "Honda Suzuki",
      description: "شاحنة هوندا سوزوكي هي شاحنة موثوقة وفعالة من حيث استهلاك الوقود، مثالية لنقل الأحمال الصغيرة إلى المتوسطة. تتمتع هذه الشاحنة بتصميم يتيح سهولة الوصول إلى الحمولة، مما يجعلها خياراً ممتازاً للأعمال التجارية الصغيرة.",
      width: "150 cm",
      height: "140 cm",
      weight: "900 kg",
      available: "true",
      type: "شاحنة خفيفة",
      imageSrc: "https://content.avito.ma/classifieds/images/10120123138?t=images", // Replace with actual image URLs
    },
    {
      title: "Canter 3.5 Model 99",
      description: "شاحنة كانتر 3.5 موديل 99 هي شاحنة خفيفة ومتينة، مثالية لنقل البضائع والمواد. تتميز بقوة محركها وقدرتها على تحمل الأحمال الثقيلة، مما يجعلها خياراً مفضلاً للشركات التي تتطلب شاحنة موثوقة لنقل المواد.",
      width: "180 cm",
      height: "160 cm",
      weight: "1200 kg",
      available: "true",
      type: "شاحنة متوسطة",
      imageSrc: "https://content.avito.ma/classifieds/images/10126849399?t=images", // Replace with actual image URLs
    },
    {
      title: "DFSK Super Cab",
      description: "شاحنة DFSK سوبر كاب هي شاحنة مدمجة مصممة خصيصاً للقيادة في المدن، وتوفر إمكانية مناورة ممتازة. تناسب هذه الشاحنة بشكل خاص التنقل في المناطق ذات الازدحام المروري، مما يجعلها خياراً مثالياً للتوصيل السريع.",
      width: "140 cm",
      height: "130 cm",
      weight: "750 kg",
      available: "true",
      type: "شاحنة خفيفة",
      imageSrc: "https://scontent.frba1-3.fna.fbcdn.net/v/t1.6435-9/182745231_301539541470531_8939019476143471977_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0VLt4NjdAvt1rTukc4g8GiLDBdrcfILGIsMF2tx8gsR5Ek6a7axqWfSS18-apSAGz3lyToffV4mtRLVdEW8DX&_nc_ohc=Ah8UL07xqfMQ7kNvgHa8lbN&_nc_zt=23&_nc_ht=scontent.frba1-3.fna&_nc_gid=AwxmW4GRpCm8lpoojgLOF8w&oh=00_AYDZzUQMgtAJybYNbeXEsFnGzxTnbWTxgB0a8gdmwJXlPQ&oe=674D7B1F", // Replace with actual image URLs
    },
    {
      title: "MITSUBISHI Canter 1999",
      description: "شاحنة ميتسوبيشي كانتر موديل 1999 هي شاحنة قوية ومناسبة لنقل الأحمال الثقيلة. بفضل تصميمها المتين ومحركها القوي، تعد خياراً ممتازاً لنقل البضائع في البيئات القاسية. توفر هذه الشاحنة أداءً موثوقًا وخدمة طويلة الأمد.",
      width: "190 cm",
      height: "170 cm",
      weight: "1300 kg",
      available: "true",
      type: "شاحنة ثقيلة",
      imageSrc: "https://www.moteur.ma/media/photos/ads/resized/mitsubishi-autre-289609.jpg", 
    },
  ];
  
  return (
    <div className="info-truck-div">
      <div id="header-info-truck">
        <h1>معلومات عن الشاحنات</h1>
        <p>جميع معلومات الشاحنة حول الحجم والمعلومات الأخرى</p>
      </div>
      <div id="cards-car-info">
        {trucks.map((truck, index) => (
          <div id="card-truck-info" key={index} dir="rtl">
            <div id="image-card-truck">
              <img src={truck.imageSrc} alt={`${truck.title} image`} />
            </div>
            <div id="description-card-truck">
              <h1>{truck.title}</h1>
              <p>{truck.description}</p>
            </div>
            <div id="conclusion-card-truck">
              <li>العرض : {truck.width}</li>
              <li>الارتفاع : {truck.height}</li>
              <li>الوزن : {truck.weight}</li>
              <li>متاح : {truck.available}</li>
              <li>النوع : {truck.type}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
