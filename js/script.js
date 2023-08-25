document
    .querySelector('.enviarMensagem')
    .addEventListener('click', function () {
        let d = new Date(),
            h = d.getHours(),
            diaNoiteTarde;
        if (h >= 6 && h <= 12) {
            diaNoiteTarde = 'bom dia!!';
        } else if (h >= 13 && h < 18) {
            diaNoiteTarde = 'boa tarde!';
        } else if (h >= 18 && h <= 23) {
            diaNoiteTarde = 'boa noite!';
        } else if (h >= 0 && h <= 6) {
            diaNoiteTarde = 'boa noite!';
        }

        let btnEnviar = document.querySelector('.enviarMensagem'),
            nomeClient = document.querySelector('#name').value,
            emailClient = document.querySelector('#mail').value,
            tituloProject = document.querySelector('#tl').value,
            descProject = document.querySelector('#ms').value,
            msgDev = `Olá, ${diaNoiteTarde}
Eu me chamo *${nomeClient}* gostaria de realizar um orçamento!
        
## Informações sobre o pedido de orçamento
    *º Nome:* _${nomeClient}_
    *º Email:* _${emailClient}_
    *º Telefone:* _${tituloProject}_ \n
    *º Descrição:* 
    _${descProject}_
        
*Contato via site*`;
        msgDev = window.encodeURIComponent(msgDev);
        let url = `https://api.whatsapp.com/send?phone=5521988027028&text=${msgDev}`;
        btnEnviar.href = `${url}`;
    });
