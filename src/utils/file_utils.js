const fs = require('fs');
const path = require('path');

// Define the path to the public folder and the JSON file
const publicFolderPath = path.join(__dirname, 'public');
const jsonFilePath = path.join(publicFolderPath, 'data.json');

// Function to read JSON file
const readJsonFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (err) {
        reject(err);
      }
    });
  });
};

// Function to write JSON file
const writeJsonFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

// Main function to modify JSON file
const modifyJsonFile = async () => {
  try {
    // Read the existing JSON data
    const data = await readJsonFile(jsonFilePath);
    console.log('Current Data:', data);

    // Modify the data
    data.age = 31; // For example, update the age
    data.city = 'San Francisco'; // Update the city

    // Write the updated data back to the file
    await writeJsonFile(jsonFilePath, data);
    console.log('JSON data successfully updated in data.json');
  } catch (err) {
    console.error('Error modifying JSON file:', err);
  }
};