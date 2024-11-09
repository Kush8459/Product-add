const categorySubcategoryMap = {
  "Electronics": [
    "Mobile",
    "Watch",
    "Tablets",
    "Laptop",
    "Headphones",
    "Cameras",
    "Smart Home Devices",
    "Gaming Consoles",
    "Drones",
    "Home Audio Systems",
  ],
  "Clothing": [
    "T-Shirt",
    "Shirt",
    "Jeans",
    "Jackets",
    "Sweaters",
    "Dresses",
    "Shorts",
    "Activewear",
    "Skirts",
    "Socks & Hosiery",
  ],
  "Home Appliances": [
    "Washing Machine",
    "Refrigerator",
    "Microwave",
    "Blender",
    "Vacuum Cleaner",
    "Air Conditioner",
    "Coffee Maker",
    "Water Purifier",
    "Toaster",
    "Food Processor",
  ],
  "Furniture": [
    "Sofa",
    "Bed",
    "Dining Table",
    "Chair",
    "Wardrobe",
    "Bookshelf",
    "Coffee Table",
    "Recliners",
    "Office Chair",
    "Mattress",
  ],
  "Beauty & Health": [
    "Skincare",
    "Makeup",
    "Haircare",
    "Perfume",
    "Wellness",
    "Oral Care",
    "Nail Care",
    "Weight Loss",
    "Bath & Body",
    "Men’s Grooming",
  ],
  "Sports & Outdoors": [
    "Gym Equipment",
    "Hiking",
    "Cycling",
    "Swimming",
    "Camping",
    "Running",
    "Yoga",
    "Climbing Gear",
    "Snow Sports",
    "Fishing Gear",
  ],
  "Toys & Games": [
    "Educational Toys",
    "Board Games",
    "Action Figures",
    "Puzzles",
    "Dolls",
    "Remote Control Toys",
    "Stuffed Animals",
    "Playsets",
    "Art & Craft Kits",
    "Baby Toys",
  ],
  "Books": [
    "Fiction",
    "Non-Fiction",
    "Children’s Books",
    "Educational",
    "Comics",
    "Biographies",
    "Cookbooks",
    "Mystery & Thriller",
    "Fantasy",
    "Science Fiction",
  ],
  "Automotive": [
    "Car Accessories",
    "Motorcycle Accessories",
    "Tools & Equipment",
    "Oils & Fluids",
    "Car Care",
    "Tires & Wheels",
    "Interior Accessories",
    "GPS & Navigation",
    "Battery & Charging",
    "Car Electronics",
  ],
  "Food & Beverages": [
    "Snacks",
    "Beverages",
    "Organic",
    "Vegan",
    "Gourmet",
    "Sweets & Chocolates",
    "Dairy & Eggs",
    "Meat & Seafood",
    "Grains & Pasta",
    "Sauces & Spices",
  ],
  "Pets": [
    "Pet Food",
    "Pet Toys",
    "Pet Grooming",
    "Pet Healthcare",
    "Pet Accessories",
    "Dog",
    "Cat",
    "Birds",
    "Fish",
    "Small Animals",
  ],
  "Gardening": [
    "Seeds",
    "Pots & Planters",
    "Garden Tools",
    "Fertilizers",
    "Outdoor Furniture",
    "Lawn Care",
    "Indoor Plants",
    "Pest Control",
    "Watering Systems",
    "Garden Decor",
  ],
  "Office Supplies": [
    "Stationery",
    "Desks",
    "Office Chairs",
    "Printers & Scanners",
    "Storage & Organization",
    "Writing Instruments",
    "Calendars & Planners",
    "Office Decor",
    "File Folders",
    "Whiteboards",
  ],
  "Arts & Crafts": [
    "Painting & Drawing",
    "Beading & Jewelry Making",
    "Scrapbooking",
    "Knitting & Crochet",
    "Sewing",
    "Paper Crafts",
    "Clay & Pottery",
    "Fabric & Textiles",
    "Woodworking",
    "Craft Supplies",
  ],
  "Travel & Luggage": [
    "Luggage & Suitcases",
    "Travel Accessories",
    "Backpacks",
    "Duffel Bags",
    "Travel Pillows",
    "Camera Bags",
    "Wallets & Purses",
    "Travel Guides & Maps",
    "Sleeping Bags & Tents",
    "Carry-on Luggage",
  ],
  "Technology": [
    "Computers & Laptops",
    "Software",
    "Networking",
    "Wearables",
    "Printers & Scanners",
    "Virtual Reality",
    "Smart Watches",
    "Tablet Accessories",
    "Data Storage",
    "3D Printers",
  ],
  "Music & Instruments": [
    "Musical Instruments",
    "Headphones & Earbuds",
    "Speakers",
    "Audio Accessories",
    "Guitars",
    "Keyboards",
    "Drums & Percussion",
    "Microphones",
    "DJ Equipment",
    "Sheet Music",
  ],
  "Home Decor": [
    "Rugs & Carpets",
    "Wall Art",
    "Lighting",
    "Furniture",
    "Curtains & Blinds",
    "Clocks",
    "Mirrors",
    "Decorative Accessories",
    "Cushions & Throws",
    "Vases & Planters",
  ],
};

// Event listener for category change
document.getElementById("category").addEventListener("change", function () {
  const selectedCategory = this.value;
  const subcategorySelect = document.getElementById("subcategory");

  // Clear previous subcategory options
  subcategorySelect.innerHTML = "<option value=''>Select Subcategory</option>";

  // Populate subcategories based on the selected category
  if (selectedCategory && categorySubcategoryMap[selectedCategory]) {
    categorySubcategoryMap[selectedCategory].forEach((subcategory) => {
      const option = document.createElement("option");
      option.value = subcategory;
      option.textContent = subcategory;
      subcategorySelect.appendChild(option);
    });
  }
});

// Event listener for category change
document.getElementById("category").addEventListener("change", function () {
  const selectedCategory = this.value;
  const subcategorySelect = document.getElementById("subcategory");

  // Clear previous subcategory options
  subcategorySelect.innerHTML = "<option value=''>Select Subcategory</option>";

  // Populate subcategories based on the selected category
  if (selectedCategory && categorySubcategoryMap[selectedCategory]) {
    categorySubcategoryMap[selectedCategory].forEach((subcategory) => {
      const option = document.createElement("option");
      option.value = subcategory;
      option.textContent = subcategory;
      subcategorySelect.appendChild(option);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn1 = document.getElementById("nextBtn-1");
  const nextBtn2 = document.getElementById("nextBtn-2");
  const nextBtn3 = document.getElementById("nextBtn-3");
  const nextBtn4 = document.getElementById("nextBtn-4");
  const nextBtn5 = document.getElementById("nextBtn-5");
  const prevBtn2 = document.getElementById("prevBtn-2");
  const prevBtn3 = document.getElementById("prevBtn-3");
  const prevBtn4 = document.getElementById("prevBtn-4");
  const prevBtn5 = document.getElementById("prevBtn-5");
  const step1 = document.getElementById("step-1");
  const step2 = document.getElementById("step-2");
  const step3 = document.getElementById("step-3");
  const step4 = document.getElementById("step-4");
  const step5 = document.getElementById("step-5");
  const step6 = document.getElementById("final-step");

  // Event Listener for 'Next' button in Step 1
  nextBtn1.addEventListener("click", () => {
    if (validateStep1()) {
      step1.style.display = "none";
      step2.style.display = "block";
    } else {
      alert("Please fill out all required fields in Step 1.");
    }
  });

  // Event Listener for 'Previous' button in Step 2
  prevBtn2.addEventListener("click", () => {
    step2.style.display = "none";
    step1.style.display = "block";
  });

  // Event Listener for 'Next' button in Step 2
  nextBtn2.addEventListener("click", () => {
    if (validateStep2()) {
      step2.style.display = "none";
      step3.style.display = "block";
    } else {
      alert("Please fill out all required fields in Step 2.");
    }
  });

  // Event Listener for 'Previous' button in Step 3
  prevBtn3.addEventListener("click", () => {
    step3.style.display = "none";
    step2.style.display = "block";
  });

  // Event Listener for 'Next' button in Step 3
  nextBtn3.addEventListener("click", () => {
    if (validateStep3()) {
      step3.style.display = "none";
      step4.style.display = "block";
    } else {
      alert("Please upload the main image.");
    }
  });

  // Event Listener for 'Previous' button in Step 4
  prevBtn4.addEventListener("click", () => {
    step4.style.display = "none";
    step3.style.display = "block";
  });

  nextBtn4.addEventListener("click", () => {
    if (validateStep4()) {
      step4.style.display = "none";
      step5.style.display = "block";
    } else {
      alert("Please add at least one variant before proceeding.");
    }
  });

  prevBtn5.addEventListener("click", () => {
    step5.style.display = "none";
    step4.style.display = "block";
  });

  // Event Listener for 'Next' button in Step 5
  nextBtn5.addEventListener("click", () => {
    if (validateStep5()) {
      // Proceed to the next step if validation is passed (implement the next step)
      alert("Proceeding to the final step.");
      step5.style.display = "none";
      step6.style.display = "block";
      // You can implement the final submission logic here
      const productData = getFormData();
      if (productData) {
        saveToLocalStorage(productData);
        displayProductData();
        clearForm();
      } else {
        alert("Please fill out all steps before submitting.");
      }
    } else {
      alert("Please fill out all required fields and check your calculations.");
    }
  });

  // Function to validate Step 1
  function validateStep1() {
    const productName = document.getElementById("productName").value;
    const sku = document.getElementById("sku").value;
    const category = document.getElementById("category").value;
    return productName !== "" && sku !== "" && category !== "";
  }

  // Function to validate Step 2
  function validateStep2() {
    const shortDescription = document.getElementById("shortDescription").value;
    return shortDescription !== "";
  }

  // Function to validate Step 3
  const galleryImages = document.getElementById("galleryImages");
  galleryImages.addEventListener("change", () => {
    if (galleryImages.files.length > 3) {
      alert("You can only upload a maximum of 3 images.");
      galleryImages.value = ""; // Reset the input
    }
  });

  function validateStep3() {
    const mainImage = document.getElementById("mainImage").files.length;
    return mainImage > 0;
  }

  // Function to validate Step 4
  function validateStep4() {
    const variantItems = variantList.getElementsByTagName("li");
    return variantItems.length > 0;
  }

  // Function to validate Step 5
  function validateStep5() {
    const basePrice = basePriceInput.value;
    const discount = discountInput.value;
    const shippingFee = shippingFeeInput.value;
    const totalStock = totalStockInput.value;
    return (
      basePrice !== "" &&
      discount !== "" &&
      shippingFee !== "" &&
      totalStock !== ""
    );
  }

  // Variant Modal Functionality for step 4
  const addVariantBtn = document.getElementById("addVariantBtn");
  const variantList = document.getElementById("variantList");
  const variantModal = new bootstrap.Modal(
    document.getElementById("variantModal")
  );
  const saveVariantBtn = document.getElementById("saveVariantBtn");
  const variantTypeSelect = document.getElementById("variantType");
  const sizeInput = document.getElementById("sizeInput");
  const colorInput = document.getElementById("colorInput");
  const unitInput = document.getElementById("unitInput");
  const sizeInputField = document.getElementById("size");
  const colorInputField = document.getElementById("color");
  const unitCountField = document.getElementById("unitCount");
  const unitTypeSelect = document.getElementById("unitType");

  // Event Listener for 'Add Variant' button
  addVariantBtn.addEventListener("click", () => {
    // Reset form and hide all variant input fields
    sizeInput.classList.add("d-none");
    colorInput.classList.add("d-none");
    unitInput.classList.add("d-none");
    variantTypeSelect.value = "";
    variantModal.show();
  });

  // Event Listener for variant type selection
  variantTypeSelect.addEventListener("change", () => {
    const variantType = variantTypeSelect.value;
    sizeInput.classList.add("d-none");
    colorInput.classList.add("d-none");
    unitInput.classList.add("d-none");

    if (variantType === "Size") {
      sizeInput.classList.remove("d-none");
    } else if (variantType === "Color") {
      colorInput.classList.remove("d-none");
    } else if (variantType === "Unit") {
      unitInput.classList.remove("d-none");
    }
  });

  // Event Listener for 'Save Variant' button
  saveVariantBtn.addEventListener("click", () => {
    const variantType = variantTypeSelect.value;
    let variantDetails = "";

    if (variantType === "Size") {
      variantDetails = `${sizeInputField.value}`;
    } else if (variantType === "Color") {
      variantDetails = `${colorInputField.value}`;
    } else if (variantType === "Unit") {
      variantDetails = `${unitCountField.value} ${unitTypeSelect.value}`;
    }

    if (variantType && variantDetails) {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = `${variantType}: ${variantDetails}`;

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger", "btn-sm", "float-end");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        variantList.removeChild(li);
      });

      li.appendChild(removeBtn);
      variantList.appendChild(li);

      variantModal.hide();
    } else {
      alert("Please fill out the variant details.");
    }
  });

  //price details for step 5
  const basePriceInput = document.getElementById("basePrice");
  const discountInput = document.getElementById("discount");
  const shippingFeeInput = document.getElementById("shippingFee");
  const finalPriceInput = document.getElementById("finalPrice");
  const totalStockInput = document.getElementById("totalStock");

  // Event Listener for changes in pricing fields
  [basePriceInput, discountInput, shippingFeeInput, totalStockInput].forEach(
    (input) => {
      input.addEventListener("input", updateFinalPrice);
    }
  );

  // Function to update the final price
  function updateFinalPrice() {
    const basePrice = parseFloat(basePriceInput.value) || 0;
    const discount = parseFloat(discountInput.value) || 0;
    const shippingFee = parseFloat(shippingFeeInput.value) || 0;
    const totalStock = parseInt(totalStockInput.value) || 0;

    // Calculate discount amount
    const discountAmount = (basePrice * discount) / 100;
    const finalPrice = basePrice - discountAmount + shippingFee;

    // Display the calculated final price
    finalPriceInput.value = finalPrice.toFixed(2);
  }

  const submitBtn = document.getElementById("submitBtn");
  const productTable = document.getElementById("productTable");
  const productTableBody = document.getElementById("productTableBody");

  // Function to get form data
  function getFormData() {
    const productName = document.getElementById("productName").value;
    const sku = document.getElementById("sku").value;
    const brandName = document.getElementById("brandName").value;
    const category = document.getElementById("category").value;
    const variantType = document.getElementById("variantType").value;
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;
    const unitCount = document.getElementById("unitCount").value;
    const unitType = document.getElementById("unitType").value;
    const basePrice = document.getElementById("basePrice").value;
    const discount = document.getElementById("discount").value;
    const shippingFee = document.getElementById("shippingFee").value;
    const finalPrice = document.getElementById("finalPrice").value;
    const totalStock = document.getElementById("totalStock").value;

    if (
      !productName ||
      !sku ||
      !category ||
      !basePrice ||
      !discount ||
      !shippingFee ||
      !totalStock
    ) {
      return null;
    }

    return {
      productName,
      sku,
      brandName,
      category,
      variantType,
      size,
      color,
      unitCount,
      unitType,
      basePrice,
      discount,
      shippingFee,
      finalPrice,
      totalStock,
    };
  }

  // Function to save data to local storage
  function saveToLocalStorage(productData) {
    let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    savedProducts.push(productData);
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }

  // Update displayProductData to allow inline editing
  function displayProductData() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    productTableBody.innerHTML = "";

    savedProducts.forEach((product, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><span class="editable" data-field="productName">${
          product.productName
        }</span></td>
        <td><span class="editable" data-field="sku">${product.sku}</span></td>
        <td><span class="editable" data-field="brandName">${
          product.brandName || ""
        }</span></td>
        <td><span class="editable" data-field="category">${
          product.category
        }</span></td>
        <td><span class="editable" data-field="variantType">${
          product.variantType
        } ${product.size || ""} ${product.color || ""} ${
        product.unitCount || ""
      } ${product.unitType || ""}</span></td>
        <td><span class="editable" data-field="basePrice">${
          product.basePrice
        }</span></td>
        <td><span class="editable" data-field="discount">${
          product.discount
        }</span></td>
        <td><span class="editable" data-field="shippingFee">${
          product.shippingFee
        }</span></td>
        <td><span class="editable" data-field="finalPrice">${
          product.finalPrice
        }</span></td>
        <td><span class="editable" data-field="totalStock">${
          product.totalStock
        }</span></td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editProduct(this, ${index})">Edit</button>
          <button class="btn btn-primary btn-sm d-none" onclick="saveEdit(this, ${index})">Save</button>
          <button class="btn btn-secondary btn-sm d-none mt-2" onclick="cancelEdit(this, ${index})">Cancel</button>
        </td>
      `;
      productTableBody.appendChild(row);
    });
  }

  // Inline edit function
  window.editProduct = (editBtn, index) => {
    const row = editBtn.closest("tr");
    const cells = row.querySelectorAll(".editable");

    // Make fields editable
    cells.forEach((cell) => {
      const field = cell.dataset.field;
      const input = document.createElement("input");
      input.value = cell.textContent.trim();
      input.classList.add("form-control", "form-control-sm");
      input.dataset.field = field;
      cell.replaceWith(input);
    });

    // Toggle buttons
    editBtn.classList.add("d-none");
    row.querySelector(".btn-primary").classList.remove("d-none");
    row.querySelector(".btn-secondary").classList.remove("d-none");
  };

  // Save the edited product
  window.saveEdit = (saveBtn, index) => {
    const row = saveBtn.closest("tr");
    const inputs = row.querySelectorAll("input");
    const updatedProduct = {};

    // Get updated values from inputs
    inputs.forEach((input) => {
      updatedProduct[input.dataset.field] = input.value.trim();
    });

    // Update localStorage
    let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    Object.assign(savedProducts[index], updatedProduct);
    localStorage.setItem("products", JSON.stringify(savedProducts));

    // Reload table with new data
    displayProductData();
  };

  // Cancel edit and revert changes
  window.cancelEdit = (cancelBtn, index) => {
    displayProductData(); // Re-render table to reset row
  };

  // Event listener for "Add Product" button on the final page
  const addProductBtn = document.getElementById("addProductBtn");
  addProductBtn.addEventListener("click", () => {
    // Hide the final step and show step 1
    clearForm();
    step6.style.display = "none";
    step1.style.display = "block";
  });

  // Initial call to display table on page load
  displayProductData();

  function clearForm() {
    document.getElementById("productName").value = "";
    document.getElementById("sku").value = "";
    document.getElementById("brandName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("variantType").value = "";
    document.getElementById("size").value = "";
    document.getElementById("color").value = "";
    document.getElementById("unitCount").value = "";
    document.getElementById("unitType").value = "";
    document.getElementById("basePrice").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("shippingFee").value = "";
    document.getElementById("finalPrice").value = "";
    document.getElementById("totalStock").value = "";
  }
});
