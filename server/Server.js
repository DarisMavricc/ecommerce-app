import express from 'express';
import cors from 'cors';
import multer from 'multer';
import connectDB from './db.js'
import productRoutes from './products.js';
import userRoutes from './user.js'
import loginRoutes from './login.js'
import registerRoutes from './register.js'
import getProducts  from './getProducts.js';
import logoutRoutes from './logout.js'
import cookieParser from 'cookie-parser';


connectDB();

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('../client/public/images', express.static('images'))

app.use(cookieParser());
app.use(express.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/images')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })


app.use('/api/upload', upload.single('file'),productRoutes);
app.use('/api/',getProducts)
app.use('/user',userRoutes);
app.use('/login',loginRoutes);
app.use('/register',registerRoutes)
app.use('/logout',logoutRoutes)



app.listen(7000,() => {
    console.log('Server is listening on port 7000...');
})