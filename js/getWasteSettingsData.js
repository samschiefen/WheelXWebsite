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
  
    // Create FormData object to send data to server
    const formData = new FormData();
    formData.append('wasteTypes', JSON.stringify(wasteTypes));
    formData.append('volumes', JSON.stringify(volumes));
    formData.append('sizes', JSON.stringify(sizes));
    formData.append('weights', JSON.stringify(weights));
  
    try {
      // Send data to server using fetch
      const response = await fetch('/save-waste-settings', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to save waste settings.');
      }
  
      const data = await response.json();
      console.log(data.message); // Log success message
  
    } catch (error) {
      console.error('Error saving waste settings:', error);
      // Handle error
    }
  });