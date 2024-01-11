function printItems() {
    var itemsSection = document.querySelector('.items').outerHTML;
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Your Items</title></head><body>');
    printWindow.document.write(itemsSection);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}