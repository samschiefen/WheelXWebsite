/*// Fetch and display FAQ data
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
*/

document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to "Add FAQ Entry" button
  const faqAddEntry = document.getElementById('addFaq');
  faqAddEntry.addEventListener('click', async () => {
    // Retrieve input values
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    // Validate if both fields are not blank
    if (question !== '' && answer !== '') {
      // If not blank, proceed with adding the FAQ question (e.g., sending to server, etc.)
      console.log('Question:', question);
      console.log('Answer:', answer);

      const response = await fetch('http://34.30.158.215:8080/add-faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer })
      });

      if (response.ok) {
        // Add the new FAQ entry to the FAQ list
        console.log("Add Response Good");
        const faqList = document.getElementById('FAQList');
        const newEntry = document.createElement('div');
        newEntry.innerHTML = `
          <dt>${question}</dt>
          <dd>${answer}<input type="button" value="Remove" name="Remove"></dd>
        `;
        faqList.appendChild(newEntry);

        // Attach event listener to the "Remove" button of this FAQ entry
        newEntry.querySelector('[name="Remove"]').addEventListener('click', async () => {
          const response2 = await fetch('http://34.30.158.215:8080/remove-faq', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
          });

          if (response2.ok) {
            // Remove the entire FAQ item from the DOM
            newEntry.remove();
          } else {
            console.error('Failed to remove FAQ entry');
          }
        });

        // Reset form fields
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
      } else {
        console.error('Failed to add FAQ entry');
      }
    } else {
      // If either field is blank, display an error message
      alert('Please fill in both question and answer fields.');
    }
  });

  // Add event listeners to "Remove" buttons
  document.querySelectorAll('[name="Remove"]').forEach(button => {
    button.addEventListener('click', async () => {
      const dtElement = button.parentNode.parentNode.querySelector('dt');
      const ddElement = button.parentNode.parentNode.querySelector('dd');
      const question = dtElement.textContent;

      await fetch('http://34.30.158.215:8080/remove-faq', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      
      // Remove the FAQ entry from the DOM
      dtElement.parentNode.removeChild(dtElement);
      ddElement.parentNode.removeChild(ddElement);
    });
  });

});