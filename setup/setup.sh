#!/bin/bash

# Echo environment variables for debugging
echo "MONGODB_USERNAME: ${MONGODB_USERNAME}"
echo "MONGODB_PASSWORD: ${MONGODB_PASSWORD}"
echo "MONGODB_DATABASE_NAME: ${MONGODB_DATABASE_NAME}"

# Wait for MongoDB to start
until mongosh --host mongo --eval "print(\"waited for connection\")"
do
    echo "Waiting for MongoDB to start..."
    sleep 1
done

# Connect to MongoDB and create the database and collections
# note that this will delete the db everytime the container restarts
mongosh --host mongo --port 27017 --username $MONGODB_USERNAME --password $MONGODB_PASSWORD --authenticationDatabase admin <<EOF
use $MONGODB_DATABASE_NAME
db.dropDatabase()
db.getSiblingDB('$MONGODB_DATABASE_NAME')"
use $MONGODB_DATABASE_NAME

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
})

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
})

db.products.createIndex({ category_id: 1 })

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
])

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
])

EOF