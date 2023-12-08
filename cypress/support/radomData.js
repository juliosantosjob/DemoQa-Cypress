import { faker } from '@faker-js/faker';

module.exports = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: 'Male',
    mobile: '7185551313',
    hobbies: 'Music',
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.streetAddress(),
    file: '/test-image.jpg',
};