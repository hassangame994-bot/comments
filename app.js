// // =====================================================
// // الدرس الأول : أول تطبيق Express
// // =====================================================


// // نستورد مكتبة Express من node_modules
// // require تعني: افتح لي المكتبة واعطني إياها
// const express = require("express");


// // نستورد مكتبة path المدمجة مع Node.js
// // تساعدنا في التعامل مع مسارات الملفات بشكل صحيح
// const path = require("path");


// // ننشئ تطبيق Express جديد
// // تخيل أننا بنينا مطعماً جديداً واسمه app
// const app = express();


// // ===============================================
// // Middleware
// // ===============================================


// // Express لا يفهم بيانات الفورم من HTML تلقائياً

// // هذا السطر يخبر Express:

// // "إذا وصلتك بيانات من Form افتحها وضعها داخل req.body"


// app.use(express.urlencoded({extended:true}));


// // extended:true
// // تسمح لـ Express بفهم البيانات البسيطة والمعقدة


// // ===============================================
// // عرض صفحة HTML
// // ===============================================


// // عندما يفتح المستخدم:

// // http://localhost:3000


// app.get('/',(req,res)=>{


//     // أرسل ملف lesson 1.html إلى المتصفح


//     res.sendFile(path.join(__dirname,"./lesson 1/lesson 1.html"));
// });



// // ===============================================
// // استقبال البيانات من المستخدم
// // ===============================================


// // إذا ضغط المستخدم زر الإرسال

// // وكان الفورم يرسل POST إلى /submit


// app.post('/submit',(req,res)=>{


//     // req.body تحتوي البيانات القادمة من HTML


//     // إذا المستخدم كتب Ahmed


//     // تصبح:


//     // req.body = {


//     // username:"Ahmed"


//     // }



//     console.log(

//         req.body.username

//     );



//     // أرسل للمستخدم رسالة ترحيب


//     res.send(

//         "Hello " +

//         req.body.username

//     );



// });



// // ===============================================
// // تشغيل السيرفر
// // ===============================================


// // افتح السيرفر على المنفذ 3000


// app.listen(3000,()=>{


//     console.log(

//         "Server Running"

//     );


// });
//--------------------------------------------------------------------------------------------------------------------------------------
// // =====================================================
// // الدرس الثاني : req.params
// // مشروع عملي: المستخدم يكتب رقم فيلم في الرابط
// // والسيرفر يعرض رقم الفيلم للمستخدم
// // =====================================================


// // نستورد مكتبة Express من node_modules
// // require معناها: افتح المكتبة وأعطني إياها لكي أستخدمها
// const express = require("express");


// // ننشئ تطبيق Express جديد
// // تخيل أننا بنينا مطعمًا جديدًا واسمه app
// // سنستخدم app لإنشاء الصفحات واستقبال الطلبات
// const app = express();


// // نستورد مكتبة path الموجودة داخل Node.js
// // نستخدمها للتعامل مع مسارات الملفات بطريقة صحيحة
// const path = require("path");


// // =====================================================
// // عرض صفحة HTML
// // =====================================================


// // عندما يدخل المستخدم إلى هذا الرابط:
// // http://localhost:3000

// app.get('/',(req,res)=>{


// // أرسل ملف HTML للمستخدم


// res.sendFile(


// // path.join وظيفته دمج المسارات بطريقة صحيحة
// path.join(


// // __dirname يعني:
// // المجلد الموجود فيه ملف app.js الحالي
// __dirname,


// // اسم المجلد والملف الذي نريد تشغيله
// "./lesson 2/lesson 2.html"


// )

// );


// });




// // =====================================================
// // استخدام req.params
// // =====================================================


// // إذا دخل المستخدم إلى رابط مثل:

// // http://localhost:3000/movie/5

// // أو

// // http://localhost:3000/movie/100


// app.get('/movie/:id',(req,res)=>{


// // req.params.id

// // معناها:

// // اقرأ القيمة التي كتبها المستخدم مكان :id


// res.send(


// // أرسل رسالة للمستخدم


// "رقم الفيلم هو "


// +


// // أضف رقم الفيلم الذي كتبه المستخدم


// req.params.id


// );


// });




// // =====================================================
// // تشغيل السيرفر
// // =====================================================


// // افتح السيرفر على المنفذ 3000

// // واستمع لطلبات المستخدمين


// app.listen(3000);
// ------------------------------------------------------------------------------------------------------------------------------
// تطبيق عملي للدرس الثالث
// const express = require("express");
// const app = express();
// const path = require("path");
// app.use(express.urlencoded(
//     {
//         extended:true
//     }
// ));
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"./lesson 3/lesson 3.html"))
// });
// app.get('/user',(req,res)=>{
//     if(req.query.age>=18){
//         res.send("can not sign in")
//     }
//     else{
//         res.send("hello "+req.query.name+"<br>"+"your are avilable "+req.query.age)
//     }

// })
// app.listen(3000)
//------------------------------------------------------------------------------------------------------------------------------
// ============================================
// الدرس 11 : Middleware
// الكود الذهبي لفهم Middleware
// ============================================


// استدعاء مكتبة Express
// const express = require("express");


// // تشغيل Express وإنشاء التطبيق
// const app = express();


// // ============================================
// // Middleware
// // ============================================

// // هذا الكود سيعمل قبل أي Route
// app.use((req,res,next)=>{


//     // طباعة رسالة في Terminal
//     console.log("شخص دخل الموقع");


//     // أخبر Express أنني انتهيت
//     // اسمح للطلب أن يكمل طريقه
//     next();


// });


// // ============================================
// // Route
// // ============================================

// // عندما يدخل المستخدم إلى /
// app.get('/',(req,res)=>{


//     // إرسال رسالة للمستخدم
//     res.send("Welcome");


// });


// // ============================================
// // تشغيل السيرفر
// // ============================================

// app.listen(3000,()=>{


//     console.log("Server Running");


// });
//---------------------------------------------------------------------
// تطبيق على ال middlewhre
// const express = require("express");
// const app = express();
// app.use(express.urlencoded({extended:true}));
// let define = true
// app.use((req,res,next)=>{
//     if(req.query.age<18){
//         console.log("not avilable")
//         define = false
//     }
//     else{
//         console.log("avilable")
//     }
//     next()
// });
// app.get('/',(req,res)=>{
//     if(define===true){
//         res.send("Hello")
//     }
//     else{
//         res.send("you can not subscribe in club")
//     }
// });
// app.listen(3000)
//---------------------------------------------------------------------------------------------------------
// الدرس السادس كيف تستخدم مكتبه ejs
// المكتبات
// const express = require('express');
// const app = express();
// const path = require("path")
// // انشاء السيرفر
// app.get('/',(req,res)=>{
//     let a = 0
//     a = 1000
//     // هنا بنحاول نضيف المتغير a من خلال object علشان اقدر استعين بيها
//     res.render(path.join(__dirname,"./lesson 4/lesson4.ejs"),{
//         number:a
//     })
// });
// // تشغيل السيرفر
// app.listen(3000)
//--------------------------------------------------------------------------------------------------------
const express = require("express"); // استيراد مكتبة Express لإنشاء خادم الويب
const app = express(); // تهيئة تطبيق Express
const mongoose = require("mongoose"); // استيراد مكتبة Mongoose للتعامل مع MongoDB
const description = require("./lesson 5/article"); // استيراد الموديل الخاص بالمقالة
const path = require("path"); // استيراد مكتبة Path للتعامل مع المسارات

// ✅ 1. حل مشكلة الـ Views على Vercel (تحديد المسار المطلق)
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// برمجية وسيطة لتمكين السيرفر من قراءة البيانات القادمة من الفورم
app.use(express.urlencoded({extended:true}));

// ✅ 2. حل مشكلة الـ Buffering Timeout في بيئة Serverless
async function connectDB() {
    // إذا كانت قاعدة البيانات متصلة بالفعل، اخرج ولا تفتح اتصال جديد
    if (mongoose.connection.readyState === 1) {
        return;
    }
    console.log("Connecting to MongoDB...");
    await mongoose.connect("mongodb://rgl0ogno8m_db_user:k1lG1V4lDZOiUzqg@ac-f3s2kej-shard-00-00.xzwb3vq.mongodb.net:27017,ac-f3s2kej-shard-00-01.xzwb3vq.mongodb.net:27017,ac-f3s2kej-shard-00-02.xzwb3vq.mongodb.net:27017/?ssl=true&authSource=admin");
    console.log("Connected to MongoDB successfully!");
}

// Middleware يضمن تمام الاتصال بقاعدة البيانات قبل تنفيذ أي طلب
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next(); // اسمح للطلب بالمرور
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        res.status(500).send("Database Connection Error");
    }
});

// مسار عرض التعليقات
app.get('/', async(req, res) => {
    try {
        const all_description = await description.find();
        res.render("comments.ejs", {
            descriptions: all_description
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading comments");
    }
});

// مسار إضافة تعليق جديد (تم حذف السطر الزائد لتحسين الأداء)
app.post('/', async(req, res) => {
    try {
        const desc = new description();
        desc.name = req.body.name;
        desc.description = req.body.comment;
        await desc.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving comment");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
