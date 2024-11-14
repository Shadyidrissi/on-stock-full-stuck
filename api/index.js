const express = require('express');
const Truck = require("./modules/schema");
const category = require("./modules/category");
const connectionDB = require('./database/conecction');
const app = express();
const PORT = process.env.PORT || 3000;
const cors= require("cors")



app.use(express.json());
app.use(cors())

// Add a new item (POST request)
app.post('/addTruck', (req, res) => {
    const getData = req.body;

    const newPost = new Truck({
        titleAR: getData.titleAR,
        nameAR:getData.nameAR,
        phone:getData.phone,
        type: getData.type,
        DescriptionAR: getData.DescriptionAR,
        hidden: getData.hidden,
        Price: getData.Price,
        Price2: getData.Price2,
        LoactionAR: getData.LoactionAR,
        image: getData.image,
        stars:getData.stars
    });

    newPost.save()
        .then(() => {
            res.send('Post saved successfully');
            console.log('Post saved');
        })
        .catch((error) => {
            res.status(500).send('Error saving post');
            console.error('Error saving post:', error);
        });
});

// Show all items (GET request)
app.get("/show", (req, res) => {
    Truck.find()
        .then((items) => {
            res.json(items); // Send all the items back to the client as JSON
        })
        .catch((error) => {
            res.status(500).send('Error fetching items');
            console.error('Error fetching items:', error);
        });
});

// Delete a single item by ID (DELETE request)
app.delete("/delete/:id", (req, res) => {
    const itemId = req.params.id;

    Truck.findByIdAndDelete(itemId)
        .then(() => {
            res.send('Item deleted successfully');
            console.log('Item deleted');
        })
        .catch((error) => {
            res.status(500).send('Error deleting item');
            console.error('Error deleting item:', error);
        });
});

// Update an item (PUT request)
app.put("/edit/:id", (req, res) => {
    const itemId = req.params.id;
    const updatedData = req.body;

    Truck.findByIdAndUpdate(itemId, updatedData, { new: true })
        .then((updatedItem) => {
            if (!updatedItem) {
                return res.status(404).send('Item not found');
            }
            res.send('Item updated successfully');
            console.log('Item updated:', updatedItem);
        })
        .catch((error) => {
            res.status(500).send('Error updating item');
            console.error('Error updating item:', error);
        });
});

// Delete all items (DELETE request)
app.delete("/deleteAll", (req, res) => {
    Truck.deleteMany({})
        .then(() => {
            res.send('All items deleted successfully');
            console.log('All items deleted');
        })
        .catch((error) => {
            res.status(500).send('Error deleting all items');
            console.error('Error deleting all items:', error);
        });
});

// Show one item by ID (GET request)
app.get("/show/:id", (req, res) => {
  const itemId = req.params.id;

  Truck.findById(itemId)
      .then((item) => {
          if (!item) {
              return res.status(404).send('Item not found');
          }
          res.json(item); // Send the found item back to the client as JSON
      })
      .catch((error) => {
          res.status(500).send('Error fetching item');
          console.error('Error fetching item:', error);
      });
});


// category show
app.get("/all_Catrgory",(req,res)=>{
    category.find()
    .then((categorys) => {
        res.json(categorys);
    })
    .catch((error) => {
        res.status(500).send('Error fetching items');
        console.error('Error fetching items:', error);
    });
})
// category add
app.post('/add_category', (req, res) => {
    const getData = req.body;

    const newCategory = new category({
        title: getData.title,
        image:getData.image,
    });

    newCategory.save()
        .then(() => {
            res.send('Post saved successfully');
            console.log('Post saved');
        })
        .catch((error) => {
            res.status(500).send('Error saving post');
            console.error('Error saving post:', error);
        });
});
// Delete category
app.delete("/delete_category/:id", (req, res) => {
    const itemId = req.params.id;

    category.findByIdAndDelete(itemId)
        .then(() => {
            res.send('categroy deleted successfully');
            console.log('Item deleted');
        })
        .catch((error) => {
            res.status(500).send('Error deleting categroy');
            console.error('Error deleting item:', error);
        });
});
// Delete all items (DELETE request)
app.delete("/deleteAll_category", (req, res) => {
    category.deleteMany({})
        .then(() => {
            res.send('All categorys deleted successfully');
            console.log('All categorys deleted');
        })
        .catch((error) => {
            res.status(500).send('Error deleting all categorys');
            console.error('Error deleting all categorys:', error);
        });
});


// Start the server
app.listen(PORT, () => {
    connectionDB();
    console.log(`Server is running on port ${PORT}`);
});
