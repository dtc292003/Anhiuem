// Thay đổi nội dung búc thư ở đây
var letterContent =" Nay là Valentine đầu tiên của tụi mình, cảm ơn embe đã đến bên anh cho anh cơ hội để được iu em, chăm sóc em. Anh biết là anh vẫn còn rất là nhìu khuyết điểm nhưng mà cảm ơn cucdangg của anh đã lun tạo điều kiện cho anh sửa saii nhaa. Anh chúc bé iu lun hạnh phúc, lunn vuii vẻ và đặc biệt là lunn iu anh nhaaa. Anh hy vọng là chúng ta sẽ cùng nhau đón thiệt nhìu mùa Valentine nữa Anh yêu emmm💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})