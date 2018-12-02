package ru.doneathome.boomberman.DTO;

public class MessageDto {
    /**
     * от кого сообщение
     */
    private String FromLogin;
    /**
     * кому сообщение
     */
    private String toLogin;
    /**
     * текст сообщения
     */
    private String textContent;

    public String getFromLogin() {
        return FromLogin;
    }

    public void setFromLogin(String fromLogin) {
        FromLogin = fromLogin;
    }

    public String getToLogin() {
        return toLogin;
    }

    public void setToLogin(String toLogin) {
        this.toLogin = toLogin;
    }

    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }
}
