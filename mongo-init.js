
// create categories collection
db.createCollection("categories", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "image", "description"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Category name"
                },
                image: {
                    bsonType: "string",
                    description: "Category image URL"
                },
                description: {
                    bsonType: "string",
                    description: "Category description"
                }
            }
        }
    }
});

// create products collection
db.createCollection("products", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "images", "description", "price", "category_id"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Product name"
                },
                images: {
                    bsonType: "array",
                    items: {
                        bsonType: "string",
                        description: "Product image URL"
                    }
                },
                description: {
                    bsonType: "string",
                    description: "Product description"
                },
                price: {
                    bsonType: "number",
                    description: "Product price"
                },
                category_id: {
                    bsonType: "objectId",
                    description: "Category ID that this product belongs to"
                }
            }
        }
    }
});

// create category index in products collection
db.products.createIndex({ category_id: 1 });

// insert test data for categories
db.categories.insertMany([
    {
        name: "Electronics",
        image: "https://example.com/images/electronics.jpg",
        description: "Electronics products"
    },
    {
        name: "Home Appliances",
        image: "https://example.com/images/home-appliances.jpg",
        description: "Home appliances products"
    }
]);

// insert test data for products
db.products.insertMany([
    {
        name: "Samsung TV",
        images: ["https://example.com/images/samsung-tv-1.jpg", "https://example.com/images/samsung-tv-2.jpg"],
        description: "Samsung smart TV",
        price: 1200.00,
        category_id: ObjectId("61e487a80a61ce3d3fbc9ca3")
    },
    {
        name: "LG Refrigerator",
        images: ["https://example.com/images/lg-refrigerator-1.jpg", "https://example.com/images/lg-refrigerator-2.jpg"],
        description: "LG smart refrigerator",
        price: 900.00,
        category_id: ObjectId("61e487a80a61ce3d3fbc9ca4")
    },
    {
        name: "Dyson Vacuum",
        images: ["https://example.com/images/dyson-vacuum-1.jpg", "https://example.com/images/dyson-vacuum-2.jpg"],
        description: "Dyson cordless vacuum",
        price: 500.00,
        category_id: ObjectId("61e487a80a61ce3d3fbc9ca4")
    }
]);
