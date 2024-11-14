"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current["full_name"].value;
    const email = form.current["gmail"].value;
    const message = form.current["message"].value;

    // Validation checks
    if (name.length <= 3) {
      Swal.fire({
        icon: "warning",
        title: "الاسم الكامل يجب أن يكون أطول من 3 أحرف",
      });
      return;
    }
    if (!email.includes("@") || !email.endsWith(".com")) {
      Swal.fire({
        icon: "warning",
        title: "الرجاء إدخال بريد إلكتروني صحيح",
      });
      return;
    }
    if (message.length <= 8) {
      Swal.fire({
        icon: "warning",
        title: "الرسالة يجب أن تكون أطول من 8 أحرف",
      });
      return;
    }

    // Send the email if validation passes
    emailjs
      .sendForm("service_ynw72wr", "template_mbr9c5a", form.current, {
        publicKey: "IbfgyXVApk-pON3rv",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "تم إرسال رسالتك بنجاح",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "عذراً، هناك خطأ",
            text: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى",
          });
        }
      );
  };

  return (
    <div className="contact-us-div">
      <form dir="rtl" ref={form} onSubmit={sendEmail}>
        <div>
          <h1>الاسم الكامل</h1>
          <input type="text" placeholder="الاسم الكامل" name="full_name" />
        </div>
        <div>
          <h1>عنوان الجيميل</h1>
          <input type="text" placeholder="عنوان الجيميل" name="gmail" />
        </div>
        <div>
          <h1>رسالة</h1>
          <textarea placeholder="رسالة" name="message" />
        </div>
        <div id="button-send">
          <button>إرسال</button>
        </div>
      </form>
      <div id="remarque-contact">
        <h1 dir="rtl">اتصل بنا</h1>
        <p dir="rtl">
          هل لديك أسئلة أو تحتاج إلى مساعدة؟ فريق "أون ستوك" هنا لخدمتك! نحن في
          "أون ستوك" ملتزمون بتقديم الدعم والمساعدة في كل خطوة. إذا كنت بحاجة
          إلى مساعدة في الحجز، تتبع الشحنات، أو إعداد الحساب، تواصل معنا عبر
          البريد الإلكتروني أو الهاتف. هدفنا هو رضاك التام وتقديم تجربة نقل
          خالية من المتاعب. فريقنا متاح للإجابة عن استفساراتك وتقديم الدعم
          اللازم لضمان تجربة نقل سلسة وآمنة.
        </p>
        <div id="icons-contact">
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </span>
            <p>OnStockBego@gmail.com</p>
          </li>
          <li>
            <span>
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <p>مراكش المحاميد 7</p>
          </li>
          <li>
            <span>
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </span>
            <p>+212 0643082137</p>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Page;
