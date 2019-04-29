$(document).ready(function() {
    verificarCamposDoTipoFile();
});

function verificarCamposDoTipoFile() {
    for (let index = 0; index < $('#form-integra').find('div[xtype="FILE"]').length; index++) {
        $($($('#form-integra').find('div[xtype="FILE"]')[index]).children()[0]).text('Arquivo');  
    }
}
