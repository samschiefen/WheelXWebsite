import React, { useEffect, useState } from 'react';
import '../../styles/stylesheet.css';

export default function FAQEntryForm() {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Simulate initial data fetch
  useEffect(() => {
    fetch('http://localhost:5000/faq')
        .then(res => res.json())
        .then(data => setFaqs(data))
        .catch(err => console.error('Failed to fetch FAQs:', err));
  }, []);

  const handleAddFAQ = () => {
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.trim();

    if (trimmedQuestion && trimmedAnswer) {
      setFaqs([...faqs, { question: trimmedQuestion, answer: trimmedAnswer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  const handleRemoveFAQ = (indexToRemove) => {
    setFaqs(faqs.filter((_, i) => i !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:5000/faqs/bulk-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ faqs }), // send entire list
      });
  
      if (!res.ok) throw new Error('Failed to update FAQs');
  
      console.log('FAQs updated successfully');
    } catch (err) {
      console.error('Error submitting FAQs:', err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} id="FAQEntryForm" className="settingsPage">
      <div id="FAQSettingsDiv" className="settingsDiv">
        <div id="existingFAQEntries" className="List">
          <h3>Current FAQ Entries:</h3>
          <dl id="FAQList">
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div><strong>{faq.question}</strong></div>
                <div style={{ marginLeft: '1.5rem', marginTop: '0.25rem' }}>
                  {faq.answer}
                  <button
                    type="button"
                    className="remove"
                    style={{ float: 'right' }}
                    onClick={() => handleRemoveFAQ(idx)} >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div id="addFAQEntry">
          <h3>Add New FAQ Entry:</h3>
          <label htmlFor="question">Question: </label>
          <input
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <br />
          <label htmlFor="answer">Answer: </label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <div>
            <button
              type="button"
              id="addFaq"
              name="Add"
              className="saveButtons"
              onClick={handleAddFAQ}
              style={{ marginTop: '0.5rem' }}
            >
              Add FAQ Entry
            </button>
          </div>
        </div>
      </div>
      <div className="saveButtons" style={{ marginTop: '1.5rem' }}>
        <input type="reset" value="Cancel" />
        <input type="submit" value="Save Changes" />
      </div>
    </form>
  );
}
