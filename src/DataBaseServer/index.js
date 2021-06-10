

const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname,"templates")))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}!`)
})

/* REST APIs */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/NGO_dataBase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("You are now connect to database!") })
    .catch((err) => console.log(err))

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    eMail: String,
    userRole: String,
    userID: String,
    passWord: String,
    cnfPassWord: String
})

const LoginSchema = new mongoose.Schema({
    userID: String,
    passWord: String,
    userRole: String
})

const DonationTypeSchema = new mongoose.Schema({
    Name: String
})

const PersonalInfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNum: Number,
    eMail: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zip: Number,
    userID: String
})


const DonationSchema = new mongoose.Schema({
    personalInfoId: String,
    gifts: []
})

User = mongoose.model('User', UserSchema);
Login = mongoose.model('Login', LoginSchema);
DonationType = mongoose.model('DonationType', DonationTypeSchema);
PersonalInfo = mongoose.model('PersonalInfo', PersonalInfoSchema);
Donation = mongoose.model('Donation', DonationSchema);

///Users

/* GET ALL */

app.get("/api/Users", (req, res, next) => {
    User.find((err, data) => {
        if (err) return next(err)
        res.json(data);
    })
})

/* GET ONE */

app.get("/api/Users/:id", (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* AUTHENTICATION */

app.get("/api/Users/authenticate/:username&:password", (req, res, next) => {
    let username = req.params.username;
    let password = req.params.password;
    User.findOne({ userID: username, passWord: password }, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})


/* DELETE ONE */

app.delete("/api/Users/:id", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndRemove(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})


/* CREATE ONE */

app.post("/api/Users", (req, res, next) => {
    console.log("POST /api/users");
    let create_object;
    if (req.body !== undefined) {
        create_object = req.body;
    }
    User.create(create_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})


/* UPDATE ONE */

app.put("/api/Users/:id", (req, res, next) => {
    let id = req.params.id;
    let updated_object;
    if (req.body !== undefined) {
        updated_object = req.body;
    }
    User.findByIdAndUpdate(id, updated_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

///Logins

app.get("/api/Logins", (req, res, next) => {
    Login.find((err, data) => {
        if (err) return next(err)
        res.json(data);
    })
})


app.post("/api/Logins", (req, res, next) => {

    let create_object;
    if (req.body !== undefined) {
        create_object = req.body;
    }
    Login.create(create_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })

})


app.get("/api/Logins", (req, res, next) => {
    Login.find((err, data) => {
        if (err) return next(err)
        res.json(data);
    })
})

/* GET ONE */

app.get("/api/Logins/:id", (req, res, next) => {
    let id = req.params.id;
    Login.findById(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* DELETE ONE */

app.delete("/api/Logins/:id", (req, res, next) => {
    let id = req.params.id;
    Login.findByIdAndRemove(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

///Donation Types

/* GET ALL */

app.get("/api/DonationTypes", (req, res, next) => {
    DonationType.find((err, data) => {
        if (err) return next(err)
        res.json(data);
    })
})

/* ADD ONE */

app.post("/api/DonationTypes", (req, res, next) => {
    let create_object;
    if (req.body !== undefined) {
        create_object = req.body;
    }
    DonationType.create(create_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* DELETE ONE */

app.delete("/api/DonationTypes/:id", (req, res, next) => {
    let id = req.params.id;
    DonationType.findByIdAndRemove(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* UPDATE ONE */
app.put("/api/DonationTypes/:id", (req, res, next) => {
    let id = req.params.id;
    let updated_object;
    if (req.body !== undefined) {
        updated_object = req.body;
    }
    DonationType.findByIdAndUpdate(id, updated_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

///Personal Info

/* ADD ONE */

app.post("/api/PersonalInfo", (req, res, next) => {
    let create_object;
    if (req.body !== undefined) {
        create_object = req.body;
    }
    PersonalInfo.create(create_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* DELETE ONE */

app.delete("/api/PersonalInfo/:id", (req, res, next) => {
    let id = req.params.id;
    PersonalInfo.findByIdAndRemove(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* GET ONE BY USERID */

app.get("/api/PersonalInfo/User/:userid", (req, res, next) => {
    let userid = req.params.userid;
    PersonalInfo.findOne({ userID: userid }, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* GET ONE BY PERSONALINFO ID */
app.get("/api/PersonalInfo/:id", (req, res, next) => {
    let id = req.params.id;
    PersonalInfo.findById(id, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* GET ALL */

app.get("/api/PersonalInfo", (req, res, next) => {
    PersonalInfo.find((err, data) => {
        if (err) return next(err)
        res.json(data);
    })
})

/* UPDATE ONE */

app.put("/api/PersonalInfo/:id", (req, res, next) => {
    let id = req.params.id;
    let updated_object;
    if (req.body !== undefined) {
        updated_object = req.body;
    }
    PersonalInfo.findByIdAndUpdate(id, updated_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

///Donation

/* ADD ONE */

app.post("/api/Donation", (req, res, next) => {
    let create_object;
    if (req.body !== undefined) {
        create_object = req.body;
    }
    Donation.create(create_object, (err, object) => {
        if (err) return next(err)
        res.json(object);
    })
})

/* GET ALL */

app.get("/api/Donation", (req, res, next) => {
    Donation.find((err, data) => {
        if (err) return next(err)
        res.json(data);
    })
})