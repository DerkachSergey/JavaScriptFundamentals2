/**
 * Created by qwerty on 17.12.2015.
 */
$(window).load(function() {
// �������� ����� setInterval, ������� ����� �������� ��������� ���� ������ 5 �����, ���� ��� �� �������
    setInterval(function() {
// ���� ���� �� ������� (�.�. �� ����� ����� in)
        if (!$("#myMmodal").hasClass("in")) {
// �� ������� ��������� ����
            $("#myModal").modal('show');
        }
    }, 300000);
});