const request = require('supertest');
const app = require('./mockApp.js');
//const app = require('../app.ts');

// TODO due to some miss configuratiuon the unit tests are still broken

describe('categories API', () => {
  it('should fetch categories', async () => {
    const response = await request(app).get('/categories');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should create a category', async () => {
    const newCategory = {
      name: 'Test Category',
      description: 'This is a test category',
    };
    const response = await request(app).post('/categories').send(newCategory);
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual(newCategory.name);
    expect(response.body.description).toEqual(newCategory.description);
  });

  it('should update a category', async () => {
    const categories = await request(app).get('/categories');
    const categoryToUpdate = categories.body[0];
    const updatedCategory = {
      name: 'Updated Category',
      description: 'This category has been updated',
    };
    const response = await request(app)
      .patch('/categories')
      .send({
        categoryId: categoryToUpdate._id,
        category: updatedCategory,
      });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual(updatedCategory.name);
    expect(response.body.description).toEqual(updatedCategory.description);
  });

  it('should delete a category', async () => {
    const categories = await request(app).get('/categories');
    const categoryToDelete = categories.body[0];
    const response = await request(app)
      .delete('/categories')
      .send({ categoryId: categoryToDelete._id });
    expect(response.status).toEqual(200);
  });
});