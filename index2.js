function handleTicketChange(ticketType, isIncrease) {

    var ticketCount = getInputValue(ticketType);
    var newTicketCount = ticketCount;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    document.getElementById(ticketType + '-count').value = newTicketCount;
    var ticketTotal = 0;
    if (ticketType == 'firstClass') {
        ticketTotal = newTicketCount * 150;
    }
    if (ticketType == 'economyClass') {
        ticketTotal = newTicketCount * 100;
    }
    document.getElementById(ticketType + '-total').innerText = "$" + ticketTotal;
    totalTicketPrice();

}


// total Ticket Price Calculate
function totalTicketPrice() {
    var firstClassCount = getInputValue('firstClass');
    var economyClassCount = getInputValue('economyClass');

    var totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('total').innerText = "$" + totalPrice;

    var vat = totalPrice * 0.1;
    document.getElementById('vat').innerText = "$" + vat;

    var grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = "$" + grandTotal;

    var totalTicket = firstClassCount + economyClassCount;
    document.getElementById('total-ticket').innerText = totalTicket;
    document.getElementById('total-ticket-price').innerText = grandTotal;
    document.getElementById('total-vat').innerText = vat;

}



// book now button functionality
var bookNowBtn = document.getElementById('book-now').addEventListener('click', function () {
    var showArea = document.getElementById('hide');
    showArea.style.display = 'block';
    var bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
})

// get input value function
function getInputValue(ticket) {
    var ticketInput = document.getElementById(ticket + '-count');
    var ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}