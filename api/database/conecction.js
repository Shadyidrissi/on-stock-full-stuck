const mongoose = require("mongoose");

// دالة لمعالجة الأخطاء
const handleError = (error) => {
    console.error("Database connection error:", error);
};

const connectionDB = async () => {
    try {
        // محاولة الاتصال بقاعدة البيانات
        await mongoose.connect("mongodb+srv://chadiidac:Ux2Uigkd3GW2U1PW@on-stock.w6j72.mongodb.net/?retryWrites=true&w=majority&appName=on-stock");
        console.log("Database is running");
    } catch (error) {
        handleError(error);
    }
};

module.exports = connectionDB;


// Ux2Uigkd3GW2U1PW
// chadiidac
// mongodb+srv://chadiidac:Ux2Uigkd3GW2U1PW@on-stock.w6j72.mongodb.net/?retryWrites=true&w=majority&appName=on-stock