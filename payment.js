function handlePaymentSubmission(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;
    const nameOnCard = document.getElementById('name-on-card').value;

    // Validate form fields
    if (!cardNumber || !expiryDate || !cvc || !nameOnCard) {
        alert('Please fill out all fields before proceeding.');
        return;
    }

    // Perform payment processing here
    const paymentInfo = {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvc: cvc,
        nameOnCard: nameOnCard
    };

    // Store payment information in local storage
    localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
}

// Define a function to enable the "Pay" button based on field validity
function enablePayButton() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;
    const nameOnCard = document.getElementById('name-on-card').value;

    const isValid = cardNumber && expiryDate && cvc && nameOnCard;

    document.getElementById('pay-button').disabled = !isValid;
}

// Attach event listeners to form fields
document.addEventListener('DOMContentLoaded', function () {
    const summaryTableHTML = localStorage.getItem('summaryTableHTML');
    document.getElementById('summary-table').innerHTML = summaryTableHTML;

    document.getElementById('card-number').addEventListener('input', enablePayButton);
    document.getElementById('expiry-date').addEventListener('input', enablePayButton);
    document.getElementById('cvc').addEventListener('input', enablePayButton);
    document.getElementById('name-on-card').addEventListener('input', enablePayButton);

    document.getElementById('pay-button').addEventListener('click', handlePaymentSubmission);
});