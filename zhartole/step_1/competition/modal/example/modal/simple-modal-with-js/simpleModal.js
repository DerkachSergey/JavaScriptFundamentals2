/**
 * Created by qwerty on 17.12.2015.
 */
$(document).ready(function(){
//���������� �� ������� click �������� c id="#launch-modal"
    $('#launch-modal').click(function() {
//���������� ������� c id="myModal", ��� ��������� ����
        $('#myModal').modal({
//��������� ������������ ���� ��������� ���������:
            backdrop: 'static', /* ������ ��� ��� ������?! ������� ����!)  */
            keyboard: true
        });
    });
});