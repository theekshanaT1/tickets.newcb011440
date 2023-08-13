/* window.onload = function () {
    
    const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
    document.getElementById('summary-table').innerHTML = summaryTableHTML;
  
    const form = document.getElementById('details-form');
    const continueBtn = document.getElementById('continue-btn');
    const mobileNumberInput = document.getElementById('mobile-number');
    const intlTelInput = window.intlTelInput(mobileNumberInput, {
      preferredCountries: ['us', 'gb'], // Specify preferred countries
      separateDialCode: true, // Show separate dial code input
    });
  
    form.addEventListener('input', () => {
      if (form.checkValidity()) {
        continueBtn.removeAttribute('disabled');
      } else {
        continueBtn.setAttribute('disabled', 'true');
      }
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      localStorage.setItem('fullName', form['full-name'].value);
      localStorage.setItem('mobileNumber', intlTelInput.getNumber());
      localStorage.setItem('email', form['email'].value);
      localStorage.setItem('gender', form['gender'].value);
  
      window.location.href = 'payment.html';
    });
  }; */



  window.onload = function () {
    const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
    document.getElementById('summary-table').innerHTML = summaryTableHTML;
  
    const form = document.getElementById('details-form');
    const continueBtn = document.getElementById('continue-btn');
    const mobileNumberInput = document.getElementById('mobile-number');
    const intlTelInput = window.intlTelInput(mobileNumberInput, {
      preferredCountries: ['us', 'gb'], // Specify preferred countries
      separateDialCode: true, // Show separate dial code input
    });
  
    form.addEventListener('input', () => {
      continueBtn.disabled = !form.checkValidity();
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      localStorage.setItem('fullName', form['full-name'].value);
      localStorage.setItem('mobileNumber', intlTelInput.getNumber());
      localStorage.setItem('email', form['email'].value);
      localStorage.setItem('gender', form['gender'].value);
  
      window.location.href = 'payment.html';
    });
  };
  