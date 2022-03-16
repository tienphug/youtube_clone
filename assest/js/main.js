const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBtn = $(".star-menu");
const sideBar = $("#side-bar");
const videoBody = $("#body");
const sideBarClass = $(".side-bar--class");
const videoList = $(".row.video-list");
const showNavList = $(".nav-home--showmore");
const showMorebtn = $(".nav-home__item--more");
const showMoretext = $(".nav-home__item--more > span");
const showIcon = $$(".nav-home__item--more > .nav-home__item-icon");
const iconMenu = $(".star-menu");

const App = {
    isMouseOver: true,
    videos: [
        {
            videoLink: "./Video-list/video-01.html",
            videoImg: "./assest/img/img1-1.webp",
            videoImg2: "./assest/img/img1.webp",
            duration: "04:37",
            avatar: "./assest/img/avataChanel1.jpg",
            videoName: "Tình Yêu Màu Hồng (Lofi Ver.) - Hồ Văn Quý x Xám x Freak D",
            chanelName: "Freak D Music",
            videoView: "25.811.258 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./Video-list/video-02.html",
            videoImg: "./assest/img/img2.webp",
            duration: "44:56",
            avatar: "./assest/img/avataChanel2jpg.jpg",
            videoName:
                "3107-2 - Sau Này Liệu Chúng Ta - Sợ Lắm 2 ft. Hẹn Yêu - Mix Freak D Mashup Lofi Sad Cực Chill - P2",
            chanelName: "Pii Music",
            videoView: "22.755.759 lượt xem",
            videoDate: "4 tháng trước",
        },
        {
            videoLink: "./Video-list/video-03.html",
            videoImg: "./assest/img/img3.webp",
            duration: "56:02",
            avatar: "./assest/img/avataChanel3.jpg",
            videoName:
                "Những Bài Hát Lofi Acoustic Tiếng Anh Cực Chill Hay Nhất | Nhạc Lofi Chill Tik Tok Nhẹ Nhàng 🎵",
            chanelName: "#Musikrimix",
            videoView: "5.288.685 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./Video-list/video-04.html",
            videoImg: "./assest/img/img4.webp",
            duration: "01:56:52",
            avatar: "./assest/img/avataChanel4.jpg",
            videoName: "HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shibuya, Tokyo",
            chanelName: "Abao ở Tokyo",
            videoView: "3.210.088 lượt xem",
            videoDate: "3 tháng trước",
        },
        {
            videoLink: "./Video-list/video-05.html",
            videoImg: "./assest/img/img5.webp",
            duration: "06:49",
            avatar: "./assest/img/avataChanel5.jpg",
            videoName: "Lyrics || YÊU 5 - Rhymastic",
            chanelName: "Jen Hoang",
            videoView: "99.128.773 lượt xem",
            videoDate: "23 thg 1, 2017",
        },
        {
            videoLink: "./Video-list/video-06.html",
            videoImg: "./assest/img/img6.webp",
            duration: "03:53:57",
            avatar: "./assest/img/avataChanel6.jpg",
            videoName: "[3 Giờ] Nhạc Baroque Tập Trung Học Tập Làm Việc",
            chanelName: "Quin Mee",
            videoView: "1.079.786 lượt xem",
            videoDate: "9 thg 6, 2020",
        },
        {
            videoLink: "./Video-list/video-07.html",
            videoImg: "./assest/img/img-7.webp",
            duration: "04:37",
            avatar: "./assest/img/avataChanel7.jpg",
            videoName:
                "Nhạc Chill TikTok - Ví Dầu Đưa Dâu, Cưa Là Đổ, Khuê Mộc Lang | Nhạc Lofi Chill Hay Nhất 2022",
            chanelName: "LX Lofi",
            videoView: "18.199 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./Video-list/video-08.html",
            videoImg: "./assest/img/img8.webp",
            duration: "56:02",
            avatar: "./assest/img/avataChanel8.jpg",
            videoName: "Đen - Mang Tiền Về Cho Mẹ ft. Nguyên Thảo (M/V)",
            chanelName: "Đen Vâu Official",
            videoView: "58.254.187 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./Video-list/video-03.html",
            videoImg: "./assest/img/img3.webp",
            duration: "56:02",
            avatar: "./assest/img/avataChanel3.jpg",
            videoName:
                "Những Bài Hát Lofi Acoustic Tiếng Anh Cực Chill Hay Nhất | Nhạc Lofi Chill Tik Tok Nhẹ Nhàng 🎵",
            chanelName: "#Musikrimix",
            videoView: "5.288.685 lượt xem",
            videoDate: "2 tháng trước",
        },
        {
            videoLink: "./Video-list/video-04.html",
            videoImg: "./assest/img/img4.webp",
            duration: "01:56:52",
            avatar: "./assest/img/avataChanel4.jpg",
            videoName: "HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shibuya, Tokyo",
            chanelName: "Abao ở Tokyo",
            videoView: "3.210.088 lượt xem",
            videoDate: "3 tháng trước",
        },
        {
            videoLink: "./Video-list/video-05.html",
            videoImg: "./assest/img/img5.webp",
            duration: "06:49",
            avatar: "./assest/img/avataChanel5.jpg",
            videoName: "Lyrics || YÊU 5 - Rhymastic",
            chanelName: "Jen Hoang",
            videoView: "99.128.773 lượt xem",
            videoDate: "23 thg 1, 2017",
        },
        {
            videoLink: "./Video-list/video-06.html",
            videoImg: "./assest/img/img6.webp",
            duration: "03:53:57",
            avatar: "./assest/img/avataChanel6.jpg",
            videoName: "[3 Giờ] Nhạc Baroque Tập Trung Học Tập Làm Việc",
            chanelName: "Quin Mee",
            videoView: "1.079.786 lượt xem",
            videoDate: "9 thg 6, 2020",
        },
        {
            videoLink: "./Video-list/video-01.html",
            videoImg: "./assest/img/img1-1.webp",
            videoImg2: "./assest/img/img1.webp",
            duration: "04:37",
            avatar: "./assest/img/avataChanel1.jpg",
            videoName: "Tình Yêu Màu Hồng (Lofi Ver.) - Hồ Văn Quý x Xám x Freak D",
            chanelName: "Freak D Music",
            videoView: "25.811.258 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./Video-list/video-02.html",
            videoImg: "./assest/img/img2.webp",
            duration: "44:56",
            avatar: "./assest/img/avataChanel2jpg.jpg",
            videoName:
                "3107-2 - Sau Này Liệu Chúng Ta - Sợ Lắm 2 ft. Hẹn Yêu - Mix Freak D Mashup Lofi Sad Cực Chill - P2",
            chanelName: "Pii Music",
            videoView: "22.755.759 lượt xem",
            videoDate: "4 tháng trước",
        },

        {
            videoLink: "./Video-list/video-07.html",
            videoImg: "./assest/img/img-7.webp",
            duration: "04:37",
            avatar: "./assest/img/avataChanel7.jpg",
            videoName:
                "Nhạc Chill TikTok - Ví Dầu Đưa Dâu, Cưa Là Đổ, Khuê Mộc Lang | Nhạc Lofi Chill Hay Nhất 2022",
            chanelName: "LX Lofi",
            videoView: "18.199 lượt xem",
            videoDate: "10 tháng trước",
        },
        {
            videoLink: "./Video-list/video-08.html",
            videoImg: "./assest/img/img8.webp",
            duration: "56:02",
            avatar: "./assest/img/avataChanel8.jpg",
            videoName: "Đen - Mang Tiền Về Cho Mẹ ft. Nguyên Thảo (M/V)",
            chanelName: "Đen Vâu Official",
            videoView: "58.254.187 lượt xem",
            videoDate: "2 tháng trước",
        },
    ],
    renderVideo() {
        var html = this.videos.map((video, index) => {
            return `
            <div class="col l-3 m-6">
            <div class="video-item">
                <a href='${video.videoLink}'>
                    <div class="video-item__img">
                        <img src='${video.videoImg}' data-index='${index}' alt="">
                        <div class="video-play">
                            <div class="video-play__later">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="video-play__list">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; fill:white;width: 24px; height: 24px;"><g class="style-scope yt-icon"><path d="M21,16h-7v-1h7V16z M21,11H9v1h12V11z M21,7H3v1h18V7z M10,15l-7-4v8L10,15z" class="style-scope yt-icon"></path></g></svg>
                            </div>
                        </div>
                        <div class="video-duration">
                            <span>${video.duration}</span>
                        </div>

                    </div>
                    <div class="video-item__prof">
                        <div class="video-item__prof-avt">
                            <img src=${video.avatar} alt="">
                        </div>
                        <div class="video-item__prof-title">
                            <h4>${video.videoName}</h4>
                            <span class="video-chanel">${video.chanelName}</span>
                            <p><span class='video-view'>${video.videoView}  -  </span><span class='video-day' >${video.videoDate}</span></p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
            `;
        });
        videoList.innerHTML = html.join("");
    },

    handleEvent() {
        // Load web
        window.onload = () => {
            // alert('Mong mọi người có những giây phút thư giãn sau những giờ học căng thẳng')
        };
        // Menu Navigation
        menuBtn.onclick = () => {
            //sidebar size
            sideBar.classList.toggle("l-2");
            sideBar.classList.toggle("l-05");
            // body-video
            videoBody.classList.toggle("l-115");
            videoBody.classList.toggle("l-11");
            videoBody.classList.toggle("active");
            sideBarClass.classList.toggle("active");
        };
        // Show more(less)
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
        // onmouse icon
        iconMenu.onmousedown = function () {
            iconMenu.classList.add("icon--active");
        };
        iconMenu.onmouseup = function () {
            iconMenu.classList.remove("icon--active");
        };
        // Video change
        const categories = $$(".content-category__item");
        console.log(categories);
        categories.forEach((category, index) => {
            category.onclick = () => {
                const categoryH = document.querySelector(".content-category__item.active");
                categoryH.classList.remove("active");
                category.classList.add("active");
            };
        });
    },

    render() {
        this.renderVideo();
    },
    start() {
        this.render();
        this.handleEvent();
    },
};
App.start();
