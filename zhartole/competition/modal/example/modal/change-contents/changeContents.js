/**
 * Created by qwerty on 17.12.2015.
 */
// ��� �������� ���������� ����
$('#myModal').on('show.bs.modal', function (event) {
// �������� ������, ������� ��� �������
    var button = $(event.relatedTarget);
// ������� ���������� �� �������� data-content
    var content = button.data('content');
// ������� ��� ���������� � �������, ������� id="content"
    $(this).find('#content').text(content);
});