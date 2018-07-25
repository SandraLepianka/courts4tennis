const mongoose = require('mongoose');
const Courts = require('../models/courts');

const dbName = 'courts4tennis';
mongoose.connect(process.env.MONGODB_URI);

const courts = [
  {
    name:  "Grove Isle Tennis Club",
    address: "4 Grove Isle Dr",
    city: "Miami",
    zipCode: "33133",
    price: 10,
    bookable: "True",
    membershipRequired: "False"

  },
  {
    name:  "Lakeshore Park Tennis",
    address: "8501 S Sherman Cir, Miramar, FL 33025",
    city: "Miramar",
    zipCode: "33025",
    price: 20,
    bookable: "False",
    membershipRequired: "False"
  },
  {
    name:  "Weston Tennis Center",
    address: "16451 Raquet Club Rd. Weston, FL 33326",
    city: "Weston",
    zipCode: "33326",
    price: 30,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Lago Mar Country Club",
    address: "500 NW 127th Ave, Plantation, FL 33325",
    city: "Plantation",
    zipCode: "33325",
    price: 10,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Frank Veltri Tennis Center",
    address: "9101 NW 2nd, Plantation, FL 33324",
    city: "Plantation",
    zipCode: "33324",
    price: 20,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Saviano High Performance Tennis",
    address: "9101 NW 2nd St, Plantation, FL 33324",
    city: "Plantation",
    zipCode: "33324",
    price: 10,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Lauderdale Isles Yacht & Tennis Club",
    address: "2637 Whale Harbor Ln, Fort Lauderdale, FL 33312",
    city: "Fort Lauderdale",
    zipCode: "33312",
    price: 30,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Sunrise Tennis Club Park",
    address: "9605 W Oakland Park Blvd, Sunrise FL 33351",
    city: "Sunrise",
    zipCode: "33351",
    price: 20,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Evert Tennis Academy",
    address: "10334 Diego Dr S, Boca Raton, FL 33428",
    city: "Boca Raton",
    zipCode: "33428",
    price: 40,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Flamingo Park Tennis Center",
    address: "11th St & Jefferson Ave, Miami Beach, FL 33139",
    city: "Miami",
    zipCode: "33133",
    price: 10,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Boca Raton Bath & Tennis Club",
    address: "2801 N Military Trl, Boca Raton, FL 33431",
    city: "Boca Raton",
    zipCode: "33431",
    price: 20,
    bookable: "True",
    membershipRequired: "False"
  },

  {
    name:  "Rick Macci Tennis Academy",
    address: "9045 Vista Del Lago, Boca Raton, FL 33428",
    city: "Boca Raton",
    zipCode: "33428",
    price: 30,
    bookable: "True",
    membershipRequired: "False"
  },
  {
    name:  "Delray Beach Tennis Center",
    address: "201 W Atlantic Ave, Delray Beach, FL 33444",
    city: "Delray Beach",
    zipCode: "33444",
    price: 15,
    bookable: "True",
    membershipRequired: "False"
  }
]

Courts.create(courts, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${courts.length} courts`)
  mongoose.connection.close()
});