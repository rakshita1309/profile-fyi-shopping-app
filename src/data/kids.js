let kids = [
  {
    name: "Girls Panel Tier Dress",
    id: "ak",
    price: 800,
    sizes : ["4-5 Y", "5-6 Y", "6-7 Y", "7-8 Y", "8-9 Y"],
    pictures: [
      "https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EATTKGDR888-10Y/665/EATTKGDR888-10Y_1_2962.webp", 
      "https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EATTKGDR888-10Y/665/EATTKGDR888-10Y_2_4102.webp", 
      "https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EATTKGDR888-10Y/665/EATTKGDR888-10Y_3_4949.webp"
    ],
    rating: 4.5
  },
  {
    name: "Boys Blue Denims Set",
    id: "bk",
    price: 2000,
    sizes : ["4-5 Y", "6-7 Y", "7-8 Y", "8-9 Y"],
    pictures: [
      "https://includ.com/cdn/shop/files/O1CN01tPEnk21FZ2pi1c5nN__3967440500-0-cib_a3178cb0-0516-4397-84f8-5d235619c6f2_1024x1024.jpg?v=1721828248", 
      "https://includ.com/cdn/shop/files/O1CN01MOqJu51FZ2psrphEX__3967440500-0-cib_6f0c2276-a3c4-4d07-b36a-246719ebac0e_1024x1024.jpg?v=1721841117", 
      "https://includ.com/cdn/shop/files/O1CN01kzfQmc1FZ2pfuFk83__3967440500-0-cib_3c922c86-4d9a-45b9-acc4-54ec22099daa_1024x1024.jpg?v=1721828248"
    ],
    rating: 4
  },
  {
    name: "Orange Cotton Printed Long Kurta",
    id: "ck",
    price: 600,
    sizes : ["4-5 Y", "6-7 Y", "7-8 Y", "8-9 Y"],
    colors: ["orange", "green"],
    pictures: {
      orange: [
        "https://apisap.fabindia.com/medias/20058041-01.jpg?context=bWFzdGVyfGltYWdlc3w5ODMxMXxpbWFnZS9qcGVnfGFEZzVMMmd5TlM4NU1qYzJNVEE0TmpNMk1Ua3dMekl3TURVNE1EUXhYekF4TG1wd1p3fGIyYjRjOGZjZDU0ZWRlZWI2YWUwMDIzOGJiNGI4ODcxNjNiZmViODJkYjMwMGM0NmUyNzAyNWRlMzhhOTYwOTU", 
        "https://apisap.fabindia.com/medias/20058041-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDMxNjB8aW1hZ2UvanBlZ3xhR0ZtTDJneVppODVNamMyTVRBNU1ESTVOREEyTHpJd01EVTRNRFF4WHpBeUxtcHdad3w4ZWM4ZjQzNzUyNGI0ZWQ1YWNjYTEyNzYyNjQxOGRmMjFjOGY0N2FkYTJiMDY5NDg4ZGU0ODk2MTVjZjMzMTg4", 
        "https://apisap.fabindia.com/medias/20058041-03.jpg?context=bWFzdGVyfGltYWdlc3w4MDkzMnxpbWFnZS9qcGVnfGFHRTNMMmd6WkM4NU1qYzJNVEE1TkRVMU16a3dMekl3TURVNE1EUXhYekF6TG1wd1p3fDY4NGUxNjNmZDk3NTk4NmZjYjhjZWJkYjhhOTNiNGZlN2I0MDBkZTVjYjFhYzljYzA3MTA1ZjFhOGQ0MjM1YjM",
      "https://apisap.fabindia.com/medias/20058041-04.jpg?context=bWFzdGVyfGltYWdlc3w5NjczMHxpbWFnZS9qcGVnfGFETTBMMmcwWWk4NU1qYzJNVEE1T0RRNE5qQTJMekl3TURVNE1EUXhYekEwTG1wd1p3fGMwZDRjNDY1OWZkNjRkZjVhZWI1OTFiOTI0ZjkxNGNhMDQ3NDc0MDk4NTY3ZDJlZTIzNzY1YWMxY2Q5MGJmM2I"
    ],
    green: [
      "https://apisap.fabindia.com/medias/20058037-01.jpg?context=bWFzdGVyfGltYWdlc3wxMTE0MDB8aW1hZ2UvanBlZ3xhR0UzTDJobU9TODVNamMyTVRBMk1qYzJPRGswTHpJd01EVTRNRE0zWHpBeExtcHdad3xhYWE5YmZmMWQ0NGM3ZjgxOGFmYTlkOWU3ZjNhMTY1NDhmYmJiZDkxNDRmMjFkMTQ4OTI5ZmIxY2M5MWM5MDY4",
      "https://apisap.fabindia.com/medias/20058037-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDQwNjh8aW1hZ2UvanBlZ3xhREl4TDJobU9TODVNamMyTVRBMk5qTTNNelF5THpJd01EVTRNRE0zWHpBeUxtcHdad3wzYWM0ZTYyMjM1NDA1MmVlMDhhNjMwMzcyYTE1NmEzMWUxOWI4ZWQ5YzdhYjFmN2E4OWI3YzVhNWMzODliOTE4",
      "https://apisap.fabindia.com/medias/20058037-03.jpg?context=bWFzdGVyfGltYWdlc3w5Mjg0OHxpbWFnZS9qcGVnfGFHUTFMMmhoTXk4NU1qYzJNVEEzTURNd05UVTRMekl3TURVNE1ETTNYekF6TG1wd1p3fDk4MDVjMjhkNGE3M2JjYjM1NzljMDI2ZmIwMmNkOWY2Nzg1ZDdkZjBjNDk4ZmE0YWI2NjJkZjYyYjgwZTQ0NzI"
    ]
    },
    
    rating: 4
  },
];


export default kids;