import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// Endpoint to check if the server is running
// Example: GET /
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Endpoint to get all menus
// Example: GET /menus
app.get("/menus", (req, res) => {
  res.json(menus);
});

// Endpoint to get a specific menu by ID
// Example: GET /menus/1
app.get("/menus/:id", (req, res) => {
  const menuId = parseInt(req.params.id);
  const menu = menus.find((menu) => menu.id === menuId);
  if (!menu) {
    return res.status(404).json({ message: "Menu not found" });
  }

  res.status(200).json(menu);
});

// End point to add a new menu
// Example: POST /menus
/* Body: 
  {
    "restaurant": "New Restaurant",
    "menu": [
      {
        "category": "Starters",
        "items": [
          { "name": "Soup", "price": 3.0 }
        ]
      }
    ]
  }
*/
app.post("/menus", (req, res) => {
  const newMenuData = req.body;
  const newMenu = {
    id: menus.length + 1,
    restaurant: newMenuData.restaurant,
    menu: newMenuData.menu,
  };
  menus.push(newMenu);

  if (!newMenuData.restaurant || !newMenuData.menu) {
    return res
      .status(400)
      .json({ message: "Restaurant and menu are required" });
  }

  res.status(201).json(newMenu);
});

// Endpoint to update a menu by ID
// Example: PUT /menus/1
/* Body: 
  {
    "restaurant": "Updated Restaurant",
    "menu": [
      {
        "category": "Starters",
        "items": [
          { "name": "Updated Soup", "price": 4.0 }
        ]
      }
    ]
  }
*/
app.put("/menus/:id", (req, res) => {
  const menuId = parseInt(req.params.id);
  const menuIndex = menus.findIndex((menu) => menu.id === menuId);
  if (menuIndex === -1) {
    return res.status(404).json({ message: "Menu not found" });
  }

  const updatedMenuData = req.body;
  const updatedMenu = {
    id: menuId,
    restaurant: updatedMenuData.restaurant,
    menu: updatedMenuData.menu,
  };
  menus[menuIndex] = updatedMenu;

  if (!updatedMenuData.restaurant || !updatedMenuData.menu) {
    return res
      .status(400)
      .json({ message: "Restaurant and menu are required" });
  }

  res.status(200).json(updatedMenu);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
