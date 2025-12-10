import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ข้อมูลสินค้าจากเว็บ HTML ของคุณ
const products = [
  {
    id: 1,
    name: "Grapes",
    price: 4.99,
    unit: "kg",
    category: "Fruits",
    image: "/Image/grepes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit A"
  },
  {
    id: 2,
    name: "Raspberries",
    price: 4.99,
    unit: "kg",
    category: "Fruits",
    image: "/Image/red berry.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit B"
  },
  {
    id: 3,
    name: "Apricots",
    price: 4.99,
    unit: "kg",
    category: "Fruits",
    image: "/Image/pump.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit C"
  },
  {
    id: 4,
    name: "Banana",
    price: 4.99,
    unit: "kg",
    category: "Fruits",
    image: "/Image/banana.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit D"
  },
  {
    id: 5,
    name: "Oranges",
    price: 4.99,
    unit: "kg",
    category: "Fruits",
    image: "/Image/orange.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit E"
  }
];

// ✅ API Route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ เปิดเซิร์ฟเวอร์
app.listen(3001, () => {
  console.log("✅ Server running at http://localhost:5000");
});
