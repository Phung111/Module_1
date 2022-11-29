

//Tham khảo screenshot (104)

//Tạo lớp mobile
class Mobile {
//Vùng nhớ
    constructor(id, name, pin, draft, inbox, sent, ) {
        this.id = id;
        this.name = name;
        this.pin = pin;
        this.message = "";
    }
    

//Chức năng
    //Kiểm tra trạng thái bật tắt
    getPin(){
        return this.pin = pin;
    }
    //Bật tắt dt

    //Xạc pin dt

    //Soạn tn
    setMessage(message){
        return this.message = message;
    }
    //Nhận tn từ mobile khác
    getMessage(){
        return this.message;
    }
    //Gửi tn đến mobile khác
    sendMessage(message, mobile){
        mobile.sendMessage(message)
    }
    //Xem tn trong hộp thư đến

    //Xem tn đã gửi

    //Pin giảm 1dv sau khi sử dụng một chức năng

    //Không thể hoạt động nếu dt chưa bật
}