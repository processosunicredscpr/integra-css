$(document).ready(function() {
    $('.form-group [XTYPE="TEXT"]').css('display', 'block');
    $('.form-group [XTYPE="SELECT"]').css('display', 'block');
    $('#rangeFaturamentoOutput').hide();
    $('#rangeFaturamentoInput').hide();
    $('inp:tpvMensalEstimado').parent().show();
    $('inp:cooperativa').parent().parent().show();
    $('#taxas td').show();
    $('#taxas th').show(); 
});
