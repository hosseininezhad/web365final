export default function posts(req, res) {
    res.status(200).json([
        {
            id: 1,
            image: "/assets/images/posts/post1.jpg",
            title: "آموزش خرید هاست آلمان",
            createAt: "۱۴ فروردین",
            commentNumber: "۶"
    
        },
        {
            id: 2,
            image: "/assets/images/posts/post2.jpg",
            title: "نحوه مدیریت سی پنل",
            createAt: "۱۴ فروردین",
            commentNumber: "۶"
        },
        {
            id: 3,
            image: "/assets/images/posts/post3.jpg",
            title: "مزایای خرید آنلاین",
            createAt: "۱۴ فروردین",
            commentNumber: "۴"
        }
    ])

    res.status(500).json("message: Error")
  }