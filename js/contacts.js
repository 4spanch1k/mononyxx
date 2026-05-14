var WHATSAPP_NUMBER = '77089508019';

function buildWhatsAppLink(prefilledText) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(prefilledText);
}
