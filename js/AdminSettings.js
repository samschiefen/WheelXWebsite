// Helper functions

function createButton(id, text, parent, buttonList) {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    parent.appendChild(button);
    if (buttonList.length === 0) {
        button.classList.add('clicked');
    }
    buttonList.push(button);
    addButtonClickListener(button, buttonList);
    return button;
}

function addButtonClickListener(button, buttonList) {
    button.addEventListener('click', function (e) {
    // Make sure the target clicked is a button
    if (e.target && e.target.nodeName == "BUTTON") {
        buttonList.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove("clicked");
        } else {
            btn.classList.add("clicked");
        }
        });
    }
    });
}

// Function to populate a list with items
function populateList(listId, items) {
    const list = document.getElementById(listId);
    list.innerHTML = ''; // Clear existing items
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement("input");
        removeBtn.type = "button";
        removeBtn.value = "Remove";
        removeBtn.name = "Remove";
        removeBtn.className = "remove";
        removeBtn.addEventListener("click", function() {
            list.removeChild(li);
        });
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}
  
// Function to load waste settings data into lists
async function loadWasteSettingsIntoLists() {
    fetch('http://34.30.158.215:8080/wasteSettings')
      .then(response => response.json())
      .then(data => {
        populateList('wasteTypesList', data.wasteTypes);
        populateList('volumesList', data.volumes);
        populateList('sizesList', data.sizes);
        populateList('weightsList', data.weights);
    })
    .catch(error => {
        console.error('Error fetching logo and app name:', error);
    });
}

function createGeneralSettingsPages() {
    const nameLogo = document.querySelector("#nameLogo");
    const rolesPermission = document.querySelector("#rolesPermission");
    const wasteSettings = document.querySelector("#wasteSettings");
    const priceSettings = document.querySelector("#priceSettings");
    const workflowSettings = document.querySelector("#workflowSettings");
    const payMethods = document.querySelector("#payMethods");
    const FAQSettings = document.querySelector("#FAQSettings");

    const pages = document.querySelectorAll('.settingsPage');

    // Initially hide forms
    const nameLogoForm = document.querySelector('#nameLogoForm')
    hidePages(pages, nameLogoForm)
        
    const buttonList = [
        nameLogo, rolesPermission, wasteSettings,
        priceSettings, workflowSettings, payMethods, FAQSettings
    ];

    buttonList.forEach(button => {
        addButtonClickListener(button, buttonList);
    });

    nameLogo.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            // register, login, forgotten password, subscription success, pending failed
            hidePages(pages, nameLogoForm);
        }
    });

    rolesPermission.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            // CRUD operation for admin, collector, buyer, transporter
            const rolesPermissionsForm = document.querySelector('#rolesPermissionsForm');
            hidePages(pages, rolesPermissionsForm);
        }
    });

    wasteSettings.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            /*
             Waste type: plastic, glass bottles, aluminum cans, 
             Volume: cl, ml, l, 
             Sizes: less than 1 litre, 1-2 litres, greater than than 3 liters
             Weight: lb, kg */
             const wasteSettingsForm = document.querySelector('#wasteSettingsForm');
            hidePages(pages, wasteSettingsForm);

            loadWasteSettingsIntoLists();

            function addItemToList(listId, inputId) {
                const list = document.getElementById(listId);
                const input = document.getElementById(inputId);
                if (input.value.trim() !== "") {
                  const newItem = document.createElement("li");
                  newItem.textContent = input.value.trim();
                  const removeBtn = document.createElement("input");
                  removeBtn.type = "button";
                  removeBtn.value = "Remove";
                  removeBtn.name = "Remove";
                  removeBtn.className = "remove";
                  removeBtn.addEventListener("click", function() {
                    list.removeChild(newItem);
                  });
                  newItem.appendChild(removeBtn);
                  list.appendChild(newItem);
                  input.value = "";
                }
            }
            
            // Add event listeners for adding waste types, volumes, sizes, and weights
            document.getElementById("addWasteTypeBtn").addEventListener("click", function() {
                addItemToList("wasteTypesList", "addWasteTypeInput");
            });

            document.getElementById("addVolumeBtn").addEventListener("click", function() {
                addItemToList("volumesList", "addVolumeInput");
            });

            document.getElementById("addSizeBtn").addEventListener("click", function() {
                addItemToList("sizesList", "addSizeInput");
            });

            document.getElementById("addWeightBtn").addEventListener("click", function() {
                addItemToList("weightsList", "addWeightInput");
            });
            
            // Add event listeners to remove existing items
            const removeButtons = document.querySelectorAll(".remove");
            removeButtons.forEach(button => {
                button.addEventListener("click", function() {
                  const listItem = this.parentNode;
                  const list = listItem.parentNode;
                  list.removeChild(listItem);
                });
            });

            document.getElementById('wasteSettingsForm').addEventListener('submit', async function(event) {
                event.preventDefault(); // Prevent default form submission
              
                // Initialize empty arrays to store waste settings
                const wasteTypes = [];
                const volumes = [];
                const sizes = [];
                const weights = [];
              
                // Function to extract text content of list items and add to arrays
                function extractListItems(listId, array) {
                  const list = document.getElementById(listId);
                  list.querySelectorAll('li').forEach(item => {
                    array.push(item.textContent.trim());
                  });
                }
              
                // Extract waste types, volumes, sizes, and weights
                extractListItems('wasteTypesList', wasteTypes);
                extractListItems('volumesList', volumes);
                extractListItems('sizesList', sizes);
                extractListItems('weightsList', weights);
            
                try {
                    const formData = {
                        wasteTypes: wasteTypes,
                        volumes: volumes,
                        sizes: sizes,
                        weights: weights
                    };

                    // Send the data to the server
                    fetch('http://34.30.158.215:8080/save-waste-settings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data.message);
                        })
                        .catch(error => {
                            console.error('Error updating logo:', error);
                        });
              
                } catch (error) {
                  console.error('Error saving waste settings:', error);
                }
            });
        }
    });

    priceSettings.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            /* (set price by waste type, volume, weight)
             Price by waste type = size x quantity  or weight */
             const priceSettingsForm = document.querySelector('#priceSettingForm');
            hidePages(pages, priceSettingsForm);

            // Javascript for Admin Price Settings
            fetch('http://34.30.158.215:8080/wasteSettings')
                .then(response => response.json())
                .then(data => {
                    // Fill waste types select
                    const wasteTypeSelect = document.getElementById('wasteType');
                    wasteTypeSelect.innerHTML = "";
                    const wasteTypeSelectOption = document.createElement('option');
                    wasteTypeSelectOption.value = "none";
                    wasteTypeSelectOption.textContent = "Select Waste Type";
                    wasteTypeSelect.appendChild(wasteTypeSelectOption);
                    data.wasteTypes.forEach(wasteType => {
                        const option = document.createElement('option');
                        option.value = wasteType;
                        option.textContent = wasteType;
                        wasteTypeSelect.appendChild(option);
                    });

                    // Fill waste size select
                    const wasteSizeSelect = document.getElementById('size');
                    wasteSizeSelect.innerHTML = "";
                    const wasteSizeSelectOption = document.createElement('option');
                    wasteSizeSelectOption.value = "none";
                    wasteSizeSelectOption.textContent = "Select Waste Size";
                    wasteSizeSelect.appendChild(wasteSizeSelectOption);
                    data.sizes.forEach(size => {
                        const option = document.createElement('option');
                        option.value = size;
                        option.textContent = size;
                        wasteSizeSelect.appendChild(option);
                    });

                })
                .catch(error => {
                    console.error('Error fetching waste data:', error);
                });

            priceSettingsForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission behavior
                    
                // Extract form data
                const wasteTypeSelect = document.getElementById('wasteType');
                const selectedWasteType = wasteTypeSelect.value;

                const sizeSelect = document.getElementById('size');
                const selectedSize = sizeSelect.value;

                const formData = new FormData(priceSettingsForm);

                try {
                    const data = {
                        wasteType: selectedWasteType,
                        size: selectedSize,
                        quantity: formData.get('quantity'),
                        price: formData.get('price')
                    };
                        
                    // Send data to the server
                    fetch('http://34.30.158.215:8080/save-price-settings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data.message);
                        })
                        .catch(error => {
                            console.error('Error updating price settings', error);
                        });
              
                } catch (error) {
                  console.error('Error saving waste settings:', error);
                }
            });
        }
    });

    workflowSettings.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            // add: dynamic add Draft, Request sent, pickup pending, in-transit, et
            const workflowSettingsForm = document.querySelector('#workflowSettingsForm');
            hidePages(pages, workflowSettingsForm);
        }
    });

    payMethods.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            // Interac, Bank Transfer, Voucher
            const payMethodsForm = document.querySelector('#payMethodsForm');
            hidePages(pages, payMethodsForm);
        }
    });

    FAQSettings.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            const FAQEntryForm = document.querySelector('#FAQEntryForm');
            hidePages(pages, FAQEntryForm);

        }
    });
}

// Admin Settings javascript

document.addEventListener("DOMContentLoaded", function() {
    const generalSettings = document.querySelector('#general');
    const security = document.querySelector('#security');
    const sideSettings = document.querySelector("#sideSettings");

    generalSettings.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            generalSettings.classList.add("clicked");
            security.classList.remove("clicked");
            sideSettings.textContent = "";
    
            const buttons = [
                { id: "nameLogo", text: "App Name & Logo"  },
                { id: "rolesPermission", text: "Roles & Permission" },
                { id: "wasteSettings", text: "Waste Settings" },
                { id: "priceSettings", text: "Price Settings" },
                { id: "workflowSettings", text: "Workflow Settings" },
                { id: "payMethods", text: "Pay Methods" },
                { id: "FAQSettings", text: "FAQ" },
            ];
    
            const buttonList = [];
    
            buttons.forEach(button => {
                const {id, text} = button;
                createButton(id, text, sideSettings, buttonList);
            });
    
            createGeneralSettingsPages();
        }
    });
    
    createGeneralSettingsPages();
    
    security.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            security.classList.add("clicked");
            generalSettings.classList.remove("clicked");
            sideSettings.textContent = "";

            // Initially hide forms
            const pages = document.querySelectorAll('.settingsPage');
            pages.forEach(page => {
                const isHidden = page.classList.contains('hidden');
                if (!isHidden)
                    page.classList.add('hidden');
            })
            const passwordForm = document.querySelector('#changePasswordForm');
            hidePages(pages, passwordForm);

            const buttons = [
                { id: "password", text: "Password"  },
                { id: "devices", text: "Devices" },
            ];
    
            const buttonList = [];
    
            buttons.forEach(button => {
                const {id, text} = button;
                createButton(id, text, sideSettings, buttonList);
            });

            const password = document.querySelector('#password');
            const devices = document.querySelector('#devices');

            const buttonsList = [
                password, devices
            ];
        
            buttonsList.forEach(button => {
                addButtonClickListener(button, buttonsList);
            });

            password.addEventListener('click', function(e) {
                if (e.target && e.target.nodeName == "BUTTON") {
                    hidePages(pages, passwordForm);
                }
            });

            devices.addEventListener('click', function(e) {
                if (e.target && e.target.nodeName == "BUTTON") {
                    const devices = document.querySelector('#devicesDiv');
                    hidePages(pages, devices);
                }
            });
        };
    });
})
