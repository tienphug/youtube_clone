const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuSideBar = $(".star-menu");
const sideBar = $(".side-bar__menu");
const sideBarModal = $(".side-bar__modal");
const sideBarBtn = $(".side-bar--active > .star-menu");
const modalNav = $(".side-bar__modal");
const commentInput = $(".comment-input");
const submitCm = $(".submit-comment");
const navVideo = $(".video-section__list");
const videoTitle = $(".video-section__content-name");
const likeBtn = $(".total-right__icon:nth-child(1)");
const showNavList = $(".nav-home--showmore");
const showMorebtn = $(".nav-home__item--more");
const showMoretext = $(".nav-home__item--more > span");
const showIcon = $$(".nav-home__item--more > .nav-home__item-icon");
const showLyric = $(".video-section__desc--showmore");
const showLyricbtn = $(".video-section__desc-showmore");
const showLyricSpan = $(".video-section__desc-showmore span");
const commentBtn = $(".people__comment-showmore");
const commentShow = $(".people__comment--hide-wrap");

console.log(likeBtn);

const App = {
    videos: [
        {
            videoLink: "./video-01.html",
            videoImg: "../assest/img/img1-1.webp",
            videoImg2: "./assest/img/img1.webp",
            duration: "04:37",
            avatar: "../img/avataChanel1.jpg",
            videoName: "Tình Yêu Màu Hồng (Lofi Ver.) - Hồ Văn Quý x Xám x Freak D",
            chanelName: "Freak D Music",
            videoView: "25.811.258 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./video-02.html",
            videoImg: "../assest/img/img2.webp",
            duration: "44:56",
            avatar: "../img/avataChanel2jpg.jpg",
            videoName:
                "3107-2 - Sau Này Liệu Chúng Ta - Sợ Lắm 2 ft. Hẹn Yêu - Mix Freak D Mashup Lofi Sad Cực Chill - P2",
            chanelName: "Pii Music",
            videoView: "22.755.759 lượt xem",
            videoDate: "4 tháng trước",
        },
        {
            videoLink: "./video-03.html",
            videoImg: "../assest/img/img3.webp",
            duration: "56:02",
            avatar: "../img/avataChanel3.jpg",
            videoName:
                "Những Bài Hát Lofi Acoustic Tiếng Anh Cực Chill Hay Nhất | Nhạc Lofi Chill Tik Tok Nhẹ Nhàng 🎵",
            chanelName: "#Musikrimix",
            videoView: "5.288.685 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./video-04.html",
            videoImg: "../assest/img/img4.webp",
            duration: "01:56:52",
            avatar: "../img/avataChanel4.jpg",
            videoName: "HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shibuya, Tokyo",
            chanelName: "Abao ở Tokyo",
            videoView: "3.210.088 lượt xem",
            videoDate: "3 tháng trước",
        },
        {
            videoLink: "./video-05.html",
            videoImg: "../assest/img/img5.webp",
            duration: "06:49",
            avatar: "../img/avataChanel5.jpg",
            videoName: "Lyrics || YÊU 5 - Rhymastic",
            chanelName: "Jen Hoang",
            videoView: "99.128.773 lượt xem",
            videoDate: "23 thg 1, 2017",
        },
        {
            videoLink: "./video-06.html",
            videoImg: "../assest/img/img6.webp",
            duration: "03:53:57",
            avatar: "../img/avataChanel6.jpg",
            videoName: "[3 Giờ] Nhạc Baroque Tập Trung Học Tập Làm Việc",
            chanelName: "Quin Mee",
            videoView: "1.079.786 lượt xem",
            videoDate: "9 thg 6, 2020",
        },
        {
            videoLink: "./video-07.html",
            videoImg: "../assest/img/img-7.webp",
            duration: "04:37",
            avatar: "../img/avataChanel7.jpg",
            videoName:
                "Nhạc Chill TikTok - Ví Dầu Đưa Dâu, Cưa Là Đổ, Khuê Mộc Lang | Nhạc Lofi Chill Hay Nhất 2022",
            chanelName: "LX Lofi",
            videoView: "18.199 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./video-08.html",
            videoImg: "../assest/img/img8.webp",
            duration: "56:02",
            avatar: "../img/avataChanel8.jpg",
            videoName: "Đen - Mang Tiền Về Cho Mẹ ft. Nguyên Thảo (M/V)",
            chanelName: "Đen Vâu Official",
            videoView: "58.254.187 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./video-01.html",
            videoImg: "../assest/img/img1-1.webp",
            videoImg2: "./assest/img/img1.webp",
            duration: "04:37",
            avatar: "../img/avataChanel1.jpg",
            videoName: "Tình Yêu Màu Hồng (Lofi Ver.) - Hồ Văn Quý x Xám x Freak D",
            chanelName: "Freak D Music",
            videoView: "25.811.258 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./video-02.html",
            videoImg: "../assest/img/img2.webp",
            duration: "44:56",
            avatar: "../img/avataChanel2jpg.jpg",
            videoName:
                "3107-2 - Sau Này Liệu Chúng Ta - Sợ Lắm 2 ft. Hẹn Yêu - Mix Freak D Mashup Lofi Sad Cực Chill - P2",
            chanelName: "Pii Music",
            videoView: "22.755.759 lượt xem",
            videoDate: "4 tháng trước",
        },
        {
            videoLink: "./video-03.html",
            videoImg: "../assest/img/img3.webp",
            duration: "56:02",
            avatar: "../img/avataChanel3.jpg",
            videoName:
                "Những Bài Hát Lofi Acoustic Tiếng Anh Cực Chill Hay Nhất | Nhạc Lofi Chill Tik Tok Nhẹ Nhàng 🎵",
            chanelName: "#Musikrimix",
            videoView: "5.288.685 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./video-04.html",
            videoImg: "../assest/img/img4.webp",
            duration: "01:56:52",
            avatar: "../img/avataChanel4.jpg",
            videoName: "HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shibuya, Tokyo",
            chanelName: "Abao ở Tokyo",
            videoView: "3.210.088 lượt xem",
            videoDate: "3 tháng trước",
        },
        {
            videoLink: "./video-05.html",
            videoImg: "../assest/img/img5.webp",
            duration: "06:49",
            avatar: "../img/avataChanel5.jpg",
            videoName: "Lyrics || YÊU 5 - Rhymastic",
            chanelName: "Jen Hoang",
            videoView: "99.128.773 lượt xem",
            videoDate: "23 thg 1, 2017",
        },
        {
            videoLink: "./video-06.html",
            videoImg: "../assest/img/img6.webp",
            duration: "03:53:57",
            avatar: "../img/avataChanel6.jpg",
            videoName: "[3 Giờ] Nhạc Baroque Tập Trung Học Tập Làm Việc",
            chanelName: "Quin Mee",
            videoView: "1.079.786 lượt xem",
            videoDate: "9 thg 6, 2020",
        },
        {
            videoLink: "./video-07.html",
            videoImg: "../assest/img/img-7.webp",
            duration: "04:37",
            avatar: "../img/avataChanel7.jpg",
            videoName:
                "Nhạc Chill TikTok - Ví Dầu Đưa Dâu, Cưa Là Đổ, Khuê Mộc Lang | Nhạc Lofi Chill Hay Nhất 2022",
            chanelName: "LX Lofi",
            videoView: "18.199 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./video-08.html",
            videoImg: "../assest/img/img8.webp",
            duration: "56:02",
            avatar: "../img/avataChanel8.jpg",
            videoName: "Đen - Mang Tiền Về Cho Mẹ ft. Nguyên Thảo (M/V)",
            chanelName: "Đen Vâu Official",
            videoView: "58.254.187 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./video-01.html",
            videoImg: "../assest/img/img4.webp",
            duration: "01:56:52",
            avatar: "../img/avataChanel4.jpg",
            videoName: "HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shibuya, Tokyo",
            chanelName: "Abao ở Tokyo",
            videoView: "3.210.088 lượt xem",
            videoDate: "Đã công chiếu vào 30 thg 9, 2021",
        },
    ],
    renderListVideo() {
        var html = this.videos.map((video, index) => {
            return `
            <a href='${video.videoLink}' class="video-section__item">
                            <div class="video-section__item-img">
                                <img src='${video.videoImg}' alt="">
                            </div>
                            <div class="video-section__item-content">
                                <p class='video-section__item-content-name'>
                                    ${video.videoName}
                                </p>
                                <span class='video-section__item-content-author'>${video.chanelName}<span><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 14px; height: 14px;"><g class="style-scope yt-icon"><path d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z" class="style-scope yt-icon"></path></g></svg></span></p></span>
                                <p class='video-section__item-content-view'> 
                                    <span>${video.videoView}</span> 
                                    <span>${video.videoDate}</span>
                                </p>
                            </div>
                        </a>
            `;
        });
        navVideo.innerHTML = html.join("");
    },
    isLike: false,
    isShown: false,
    handleEvent() {
        //like button
        likeBtn.onclick = () => {
            this.isLike = !this.isLike;
            console.log(this.isLike);
            if (this.isLike) {
                likeBtn.style.fill = "red";
            } else {
                likeBtn.style.fill = "green";
            }
        };
        // show more
        showMorebtn.onclick = () => {
            showNavList.classList.toggle("show");
            if (showMoretext.innerHTML === "Thêm") {
                showMoretext.innerHTML = "Ẩn bớt";
                console.log(showMoretext.innerHTML);
            } else {
                showMoretext.innerHTML = "Thêm";
            }
            showIcon.forEach(function (icon) {
                icon.classList.toggle("active");
            });
        };
        //Video title
        window.top.document.title = videoTitle.innerText.toString();
        //sidebar
        menuSideBar.onclick = () => {
            sideBar.classList.toggle("active");
            sideBarModal.classList.toggle("active");
        };
        sideBarModal.onclick = () => {
            sideBarModal.classList.toggle("active");
            sideBar.classList.toggle("active");
        };
        sideBarBtn.onclick = () => {
            sideBarModal.classList.toggle("active");
            sideBar.classList.toggle("active");
        };
        modalNav.addEventListener("scroll", (e) => {
            console.log(e.target);
        });
        //comment
        commentInput.onfocus = () => {
            commentInput.classList.add("active");
        };
        commentInput.onblur = () => {
            commentInput.classList.remove("active");
        };
        commentInput.oninput = (e) => {
            e.target.value !== ""
                ? (submitCm.style = "color : #fff; background-color :  #065FD4")
                : (submitCm.style = "color : var(--text-color)");
        };

        //show lyrics b
        showLyricbtn.onclick = () => {
            showLyric.classList.toggle("active");
            this.isShown = !this.isShown;
            if (this.isShown) {
                showLyricSpan.innerText = "Ẩn bớt";
            } else {
                showLyricSpan.innerText = "Hiện thêm";
            }
        };
        //Comment
        commentBtn.onclick = () => {
            commentShow.classList.toggle("active");
        };
        //C
    },

    render() {
        this.renderListVideo();
    },
    start() {
        this.render();
        this.handleEvent();
    },
};
App.start();
