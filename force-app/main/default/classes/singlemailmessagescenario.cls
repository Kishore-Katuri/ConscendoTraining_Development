public with sharing class singlemailmessagescenario {
    public void singlemailmessage() {
        Messaging.singlemailmessage m=new Messaging.singlemailmessage();

        list<string>address=new list<string>{'katurikishore37@gmail.com','rupom.sfdc111@gmail.com'};
        m.setToAddresses(address);
        m.setSubject('test mail');
        m.setPlainTextBody('This is from VS Code during Conscendo training');
        list<Messaging.singlemailmessage> mList=new list<Messaging.singlemailmessage>();
        mlist.add(m);
        Messaging.sendEmail(mList);
    

    }
}