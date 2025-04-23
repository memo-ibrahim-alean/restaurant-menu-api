import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

const menus = [
  {
    id: 1,
    restaurant: "Bistro Express",
    menu: [
      {
        category: "Starters",
        items: [
          { name: "Garlic Bread", price: 3.5 },
          { name: "Bruschetta", price: 5.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", price: 12.0 },
          { name: "Grilled Salmon", price: 15.5 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Tiramisu", price: 6.0 },
          { name: "Chocolate Mousse", price: 5.5 },
        ],
      },
    ],
  },
  {
    id: 2,
    restaurant: "Tasty Haven",
    menu: [
      {
        category: "Starters",
        items: [
          { name: "Caesar Salad", price: 4.0 },
          { name: "Spring Rolls", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Beef Steak", price: 18.0 },
          { name: "Vegetable Pasta", price: 10.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Cheesecake", price: 5.0 },
          { name: "Ice Cream", price: 3.0 },
        ],
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/menus", (req, res) => {
  res.json(menus);
});

app.get("/menus/:id", (req, res) => {
  const menuId = parseInt(req.params.id);
  const menu = menus.find((menu) => menu.id === menuId);
  if (!menu) {
    return res.status(404).json({ message: "Menu not found" });
  }

  res.status(200).json(menu);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
