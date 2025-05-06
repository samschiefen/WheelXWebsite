// Helper Functions

function hidePages(pages, clickedPage) {
  // Loop through all pages
  pages.forEach(page => {
      if (page !== clickedPage)
          page.classList.add('hidden');
  })
  clickedPage.classList.remove('hidden');
}

function toggleFAQ(element) {
  var dd = element.nextElementSibling;
  var sign = element.querySelector('.sign');

  if (dd.classList.contains('hidden')) {
    dd.classList.remove('hidden');
    sign.innerHTML = '&#8722;'; // Change to minus sign
  } else {
    dd.classList.add('hidden');
    sign.innerHTML = '&#43;'; // Change back to plus sign
  }
}

function displayConfirmation(totalPrice, selectedPickupAddress, selectedWasteType, selectedSize, selectedQuantity, selectedTime = null) {
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Create elements for confirmation message
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Confirmation';

  const priceParagraph = document.createElement('p');
  priceParagraph.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  
  const wasteTypeParagraph = document.createElement('p');
  wasteTypeParagraph.textContent = `Waste Type: ${selectedWasteType}`;

  const sizeParagraph = document.createElement('p');
  sizeParagraph.textContent = `Volume: ${selectedSize}`;

  const quantityParagraph = document.createElement('p');
  quantityParagraph.textContent = `Quantity: ${selectedQuantity}`;

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => {
    if (selectedTime) {
      closeModal();
      displayConnectVenmoOverlay();
    } else {
      closeModal();
      displayRequestSubmittedOverlay();
    }
  });

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    closeModal();
  });

  // Append elements to modal content
  modalContent.appendChild(titleElement);
  modalContent.appendChild(priceParagraph);
  if (selectedTime) {
    const addressParagraph = document.createElement('p');
    addressParagraph.textContent = `Drop Off Address: ${selectedPickupAddress}`;
    modalContent.appendChild(addressParagraph);
  } else {
    const addressParagraph = document.createElement('p');
    addressParagraph.textContent = `Pickup Address: ${selectedPickupAddress}`;
    modalContent.appendChild(addressParagraph);
  }
  modalContent.appendChild(wasteTypeParagraph);
  modalContent.appendChild(sizeParagraph);
  modalContent.appendChild(quantityParagraph);
  if (selectedTime) {
    const timeParagraph = document.createElement('p');
    timeParagraph.textContent = `Selected Drop Off Time: ${selectedTime}`;
    modalContent.appendChild(timeParagraph); 
  }
  modalContent.appendChild(submitButton);
  modalContent.appendChild(closeButton);

  // Append modal content to modal overlay
  modalOverlay.appendChild(modalContent);

  // Append modal overlay to body
  document.body.appendChild(modalOverlay);
}

function displayRequestSubmittedOverlay() {
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Create elements for "Request submitted!" message
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Request submitted!';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    closeModal();
  });

  // Append elements to modal content
  modalContent.appendChild(titleElement);
  modalContent.appendChild(closeButton);

  // Append modal content to modal overlay
  modalOverlay.appendChild(modalContent);

  // Append modal overlay to body
  document.body.appendChild(modalOverlay);
}

function displayConnectVenmoOverlay() {
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Create elements for "Connect to Venmo" message
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Please connect to Venmo to pay and submit request!';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cancel';
  closeButton.addEventListener('click', () => {
    closeModal();
  });

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Connect to Venmo';
  submitButton.addEventListener('click', () => {
  });

  // Append elements to modal content
  modalContent.appendChild(titleElement);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(submitButton);

  // Append modal content to modal overlay
  modalOverlay.appendChild(modalContent);

  // Append modal overlay to body
  document.body.appendChild(modalOverlay);
}

function displayRequestForPriceOverlay() {
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Create elements for "Request for Price" message
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'An admin has been requested to calculate price!';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    closeModal();
  });

  // Append elements to modal content
  modalContent.appendChild(titleElement);
  modalContent.appendChild(closeButton);

  // Append modal content to modal overlay
  modalOverlay.appendChild(modalContent);

  // Append modal overlay to body
  document.body.appendChild(modalOverlay);
}

function closeModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    document.body.removeChild(modalOverlay);
  }
}

function displayNoPriceConfirmation(selectedPickupAddress, selectedWasteType, selectedSize, selectedQuantity, selectedTime = null) {
  // Display alert box indicating no price and allow user to review input
  const confirmationMessage = 'No price listed. Request sent to admin for pricing.';
  
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Create elements for confirmation message
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Confirmation';

  const priceParagraph = document.createElement('p');
  priceParagraph.textContent = `${confirmationMessage}`;

  const wasteTypeParagraph = document.createElement('p');
  wasteTypeParagraph.textContent = `Waste Type: ${selectedWasteType}`;

  const sizeParagraph = document.createElement('p');
  sizeParagraph.textContent = `Size: ${selectedSize}`;

  const quantityParagraph = document.createElement('p');
  quantityParagraph.textContent = `Quantity: ${selectedQuantity}`;

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => {
    if (selectedTime) {
      closeModal();
      displayRequestForPriceOverlay();
    } else {
      closeModal();
      displayRequestSubmittedOverlay();
    }
  });

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    closeModal();
  });

  // Append elements to modal content
  modalContent.appendChild(titleElement);
  modalContent.appendChild(priceParagraph);
  if (selectedTime) {
    const addressParagraph = document.createElement('p');
    addressParagraph.textContent = `Drop Off Address: ${selectedPickupAddress}`;
    modalContent.appendChild(addressParagraph);
  } else {
    const addressParagraph = document.createElement('p');
    addressParagraph.textContent = `Pickup Address: ${selectedPickupAddress}`;
    modalContent.appendChild(addressParagraph);
  }
  modalContent.appendChild(wasteTypeParagraph);
  modalContent.appendChild(sizeParagraph);
  modalContent.appendChild(quantityParagraph);
  if (selectedTime) {
    const timeParagraph = document.createElement('p');
    timeParagraph.textContent = `Selected Drop Off Time: ${selectedTime}`;
    modalContent.appendChild(timeParagraph);
  }
  modalContent.appendChild(submitButton);
  modalContent.appendChild(closeButton);

  // Append modal content to modal overlay
  modalOverlay.appendChild(modalContent);

  // Append modal overlay to body
  document.body.appendChild(modalOverlay);
}

function handlePageButtonClick(event) {
  const clickedButton = event.target;
  const buttonId = clickedButton.id;
  const pageIdToShow = buttonId.replace('Button', ''); // Remove 'Button' from buttonId
  const pages = document.querySelectorAll('.page');    

  // Loop through all pages
  pages.forEach(page => {
      // Check if the page has the 'hidden' class
      const isHidden = page.classList.contains('hidden');

      if (pageIdToShow == 'requestPickup') {
          document.body.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Get opacity to work?
          document.body.style.backgroundImage = "url('https://storage.cloud.google.com/example_web_bucket/images/people_sorting_trash.jpg')";
          document.body.style.backgroundSize = "90em";
          document.body.style.backgroundPosition = "center";
      } else if (pageIdToShow == 'requestPurchase') {
          document.body.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Get opacity to work?
          document.body.style.backgroundImage = "url('https://storage.cloud.google.com/example_web_bucket/images/buying_cycle.jpg')";
          document.body.style.backgroundSize = "85em";
          document.body.style.backgroundPosition = "center";
      }
      else {
          document.body.style.backgroundColor = "rgb(255, 255, 255)";
          document.body.style.backgroundImage = "none";
          document.body.style.backgroundSize = "auto";
          document.body.style.backgroundPosition = "center";
      }

      if (page.id === pageIdToShow && isHidden) {
          // If the page's id matches the one to show and it is hidden, remove 'hidden'
          page.classList.remove('hidden');
      } else if (page.id !== pageIdToShow && !isHidden) {
          // If the page's id doesn't match the one to show and it is not hidden, add 'hidden'
          page.classList.add('hidden');
      }

  });
}

document.addEventListener("DOMContentLoaded", function() {

  const pageButtons = document.querySelectorAll('.pageButton');

  // Attach click event listener to each page button
  pageButtons.forEach(button => {
      button.addEventListener('click', handlePageButtonClick);
  });

  // Javascript for dashboard pages

    //Load Waste Data into Forms
    const requestPickupButton = document.getElementById('requestPickupButton');
    requestPickupButton.addEventListener('click', function() {
      fetch('http://34.30.158.215:8080/wasteSettings')
        .then(response => response.json())
        .then(data => {
          // Fill waste types select
          const wasteTypeSelect = document.getElementById('wasteTypeSelect');
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
          const wasteSizeSelect = document.getElementById('wasteSize');
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

          // Fill weight unit select
          const weightUnitSelect = document.getElementById('weightUnit');
          weightUnitSelect.innerHTML = "";
          const weightUnitSelectOption = document.createElement('option');
          weightUnitSelectOption.value = "none";
          weightUnitSelectOption.textContent = "Select Weight Unit";
          weightUnitSelect.appendChild(weightUnitSelectOption);
          data.weights.forEach(weight => {
            const option = document.createElement('option');
            option.value = weight;
            option.textContent = weight;
            weightUnitSelect.appendChild(option);
          });
        })
        .catch(error => {
          console.error('Error fetching waste data:', error);
        });

      const requestPickupForm = document.querySelector('#requestPickupForm');
      requestPickupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(requestPickupForm);

        const pickupAddress = document.getElementById('pickupAddressInput');
        const selectedPickupAddress = pickupAddress.value;

        const wasteTypeSelect = document.getElementById('wasteTypeSelect');
        const selectedWasteType = wasteTypeSelect.value;

        const sizeSelect = document.getElementById('wasteSize');
        const selectedSize = sizeSelect.value;

        const selectedQuantity = formData.get("pickupQuantity");
        
        const errorDiv = document.getElementById('error-message');

        if (selectedWasteType == 'none' || selectedSize == 'none') {
          errorDiv.style.display = 'block';
        } else {
          errorDiv.style.display = 'none';
          fetch('http://34.30.158.215:8080/priceSettings')
            .then(response => response.json())
            .then(data => {
                let matchingItem = null;

              // Iterate over each object in the data array
                data.forEach(item => {
                    // Check if the current item's waste type matches the selected waste type and size
                    if (item.wasteType === selectedWasteType && item.size === selectedSize) {
                        matchingItem = item;
                    }
                });

                if (matchingItem) {
                    // If a matching item is found, calculate the total price and display the confirmation
                    const totalPrice = parseFloat(matchingItem.price) * parseFloat(selectedQuantity);
                    displayConfirmation(totalPrice, selectedPickupAddress, selectedWasteType, selectedSize, selectedQuantity);
                } else {
                    // If no matching item is found, display a message
                    displayNoPriceConfirmation(selectedPickupAddress, selectedWasteType, selectedSize, selectedQuantity);
                }
            })
            .catch(error => {
                console.error('Error fetching price data:', error);
            });
        }
      });
    });

    const requestPurchaseButton = document.getElementById('requestPurchaseButton');
    requestPurchaseButton.addEventListener('click', function() {
      fetch('http://34.30.158.215:8080/wasteSettings')
        .then(response => response.json())
        .then(data => {
          // Fill waste types select
          const verifiedSelect = document.getElementById('Verified');
          verifiedSelect.innerHTML = "";
          const selectOption = document.createElement('option');
          selectOption.value = "none";
          selectOption.textContent = "Select Waste Type";
          verifiedSelect.appendChild(selectOption);
          data.wasteTypes.forEach(wasteType => {
            const option = document.createElement('option');
            option.value = wasteType;
            option.textContent = wasteType;
            verifiedSelect.appendChild(option);
          });

          // Fill waste size select
          const wasteSize = document.getElementById('wasteSizeSelect');
          wasteSize.innerHTML = "";
          const wasteSizeSelectOption = document.createElement('option');
          wasteSizeSelectOption.value = "none";
          wasteSizeSelectOption.textContent = "Select Waste Size";
          wasteSize.appendChild(wasteSizeSelectOption);
          data.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            wasteSize.appendChild(option);
          });
      })
      .catch(error => {
        console.error('Error fetching waste data:', error);
      });

      const requestPurchaseForm = document.querySelector('#requestPurchaseForm');
      requestPurchaseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(requestPurchaseForm);

        const dropOffAddress = document.getElementById('dropAddress');
        const selectedDropOffAddress = dropOffAddress.value;

        const wasteTypeSelect = document.getElementById('Verified');
        const selectedWasteType = wasteTypeSelect.value;

        const timeSelect = document.getElementById('Time');
        const selectedTime = timeSelect.value;

        const sizeSelect = document.getElementById('wasteSizeSelect');
        const selectedSize = sizeSelect.value;

        const selectedQuantity = formData.get("purchaseQuantity");

        const errorDiv = document.getElementById('error-message2');

        if (selectedWasteType == 'none' || selectedTime == 'none' || selectedSize == 'none') {
          errorDiv.style.display = 'block';
        } else {
          errorDiv.style.display = 'none';
          fetch('http://34.30.158.215:8080/priceSettings')
            .then(response => response.json())
            .then(data => {
                let matchingItem = null;

                // Iterate over each object in the data array
                data.forEach(item => {
                    // Check if the current item's waste type matches the selected waste type and size
                   if (item.wasteType === selectedWasteType && item.size === selectedSize) {
                       matchingItem = item;
                    }
                });

                if (matchingItem) {
                    // If a matching item is found, calculate the total price and display the confirmation
                    const totalPrice = parseFloat(matchingItem.price) * parseFloat(selectedQuantity);
                    displayConfirmation(totalPrice, selectedDropOffAddress, selectedWasteType, selectedSize, selectedQuantity, selectedTime);
                } else {
                    // If no matching item is found, display a message
                    displayNoPriceConfirmation(selectedDropOffAddress, selectedWasteType, selectedSize, selectedQuantity, selectedTime);
                }
            })
            .catch(error => {
                console.error('Error fetching price data:', error);
            });
        }
      });
    });

    // Display Logo and appName
    fetch('http://34.30.158.215:8080/logoName')
      .then(response => response.json())
      .then(data => {
          // Update the logo image src
          document.querySelector('.logoImage').src = data.logo;
          // Update Settings logo
          document.getElementById('settingsLogo').src = data.logo;
          // Update the title text
          document.getElementById('pageTitle').innerHTML = data.appName;
          // Set the value of the input field to the fetched app name
          document.getElementById('appName').value = data.appName;
      })
      .catch(error => {
          console.error('Error fetching logo and app name:', error);
      });

  // Display FAQs on main dashboard
  fetch('http://34.30.158.215:8080/faqs')
    .then(response => response.json())
    .then(faqs => {
      // Get the FAQ section element
      const faqSection = document.getElementById('FAQ');

      // Iterate over the FAQ data and populate the FAQ section
      faqs.forEach(faq => {
        // Create HTML elements for the FAQ item
        const dtElement = document.createElement('dt');
        dtElement.onclick = function() {
            toggleFAQ(this);
        };
        dtElement.className = 'FAQTerm';
        dtElement.innerHTML = `
          <span>${faq.question}</span>
          <span class="sign">&#43;</span>
        `;

        const ddElement = document.createElement('dd');
        ddElement.className = 'hidden';
        ddElement.textContent = faq.answer;

        // Append the FAQ item to the FAQ section
        faqSection.querySelector('dl').appendChild(dtElement);
        faqSection.querySelector('dl').appendChild(ddElement);
      });
    })
    .catch(error => {
      console.error('Error fetching FAQ data:', error);
    });

  // Display FAQs on Admin Settings Page
  fetch('http://34.30.158.215:8080/faqs')
    .then(response => response.json())
    .then(faqs => {
      // Get the FAQ List element
      const faqList = document.getElementById('FAQList');

      // Iterate over the FAQ data and populate the FAQ section
      faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.innerHTML = `
          <dt>${faq.question}</dt>
          <dd>${faq.answer}<input type="button" value="Remove" name="Remove"></dd>
        `;
        faqList.appendChild(faqItem);

        // Attach event listener to the "Remove" button of this FAQ entry
        faqItem.querySelector('[name="Remove"]').addEventListener('click', async () => {
          const response = await fetch('http://34.30.158.215:8080/remove-faq', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ question: faq.question })
          });

          if (response.ok) {
              // Remove the entire FAQ item from the DOM
              faqItem.remove();
          } else {
              console.error('Failed to remove FAQ entry');
          }
        });
      });
    })
    .catch(error => {
      console.error('Error fetching FAQ data:', error);
    });
  
  const dashboard = document.querySelector('#dashboard');

  const FAQSection = document.querySelector('#FAQButton');
  const FAQDiv = document.querySelector('#FAQ');

  FAQSection.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName == "BUTTON") {
          const pages = document.querySelectorAll('.page');
          const isHidden = dashboard.classList.contains('hidden');
          
          if (isHidden) {
              // Loop through all pages
              pages.forEach(page => {
                  page.classList.add('hidden');
              })
              dashboard.classList.remove('hidden');
          }
          
          FAQDiv.scrollIntoView({ behavior: 'smooth' });
      }
  });

  const getEstimate = document.querySelector('#getEstimateButton');
  const getEstimateDiv = document.querySelector('#getEstimate');
  getEstimate.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName == "BUTTON") {
          const pages = document.querySelectorAll('.page');
          const isHidden = dashboard.classList.contains('hidden');
          
          if (isHidden) {
              // Loop through all pages
              pages.forEach(page => {
                  page.classList.add('hidden');
              })
              dashboard.classList.remove('hidden');
          }
          
          getEstimateDiv.scrollIntoView({ behavior: 'smooth' });
      }
  });

  // Javascript for dropdowns

  const regDropdown = document.querySelector('#regDropdown');
  const adminDropdown = document.querySelector('#adminDropdown');
  const userDropdown = document.querySelector('#userDropdown');

  const adminHeaderButtons = document.querySelector('#adminHeader');
  const headerButtons = document.querySelector('#regHeader');

  const adminDropdownButton = document.querySelector('#adminDropdownButton');
  const userDropdownButton = document.querySelector('#userDropdownButton');
  const adminLogout = document.querySelector('#adminLogout');
  const userLogout = document.querySelector('#userLogout');
  
  const dropdowns = document.querySelectorAll('.dropdown-container');
  const headers = document.querySelectorAll('.headers');
  const mainPages = document.querySelectorAll('.page');

  adminDropdownButton.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName == "A") {
          hidePages(dropdowns, adminDropdown);
          hidePages(headers, adminHeaderButtons);
          hidePages(mainPages, adminDashboard);
      }
  });

  userDropdownButton.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName == "A") {
          hidePages(headers, headerButtons);
          hidePages(dropdowns, userDropdown);
          hidePages(mainPages, dashboard);
      }
  });

  adminLogout.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName == "A") {
          hidePages(headers, headerButtons);
          hidePages(dropdowns, regDropdown);
          hidePages(mainPages, dashboard);
      }
  });

  userLogout.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName == "A") {
          hidePages(headers, headerButtons);
          hidePages(dropdowns, regDropdown);
          hidePages(mainPages, dashboard);
      }
  });

});