

//Tham khảo screenshot (104)

//Tạo lớp mobile
function Mobile(pin, draft, inbox, sent, ) {
//Vùng nhớ
    //Pin
    this.pin = pin;
    this.getPin = function(){
        return this.pin = pin
    }
    //Tin nhắn đang soạn
    this.draft = draft;
    this.getDraft = function(){
        return this.draft = draft
    }
    //Tin nhắn đến
    this.inbox = inbox;
    this.getInbox = function(){
        return this.inbox = inbox
    }
    //Tin nhắn đã gửi
    this.sent = sent;
    this.getSent = function(){
        return this.sent = sent
    }
//Chức năng
    //Kiểm tra trạng thái bật tắt
    this.checkOnOff = checkOnOff;
    this.getCheckOnOff = function(){
        return this.checkOnOff = checkOnOff
    }
    //Bật tắt dt

    //Xạc pin dt

    //Soạn tn

    //Nhận tn từ mobile khác

    //Gửi tn đến mobile khác

    //Xem tn trong hộp thư đến

    //Xem tn đã gửi

    //Pin giảm 1dv sau khi sử dụng một chức năng

    //Không thể hoạt động nếu dt chưa bật
}