export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {
            name: "email",
            text: "yueruwang2019@outlook.com",
            icon: "fas fa-envelope",
            url: "mailto:yueruwang2019@outlook.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/enigmawxy"
        },
        {
            name: "csdn",
            text: "",
            icon: "fab fa-medium-m",
            url: "https://blog.csdn.net/weixin_28710515?spm=1000.2115.3001.5343"
        },
        {
            name: "twitter",
            text: "",
            icon: "fab fa-twitter",
            url: "https://twitter.com"
        },
        {
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/"
        },
        {
            name: "instagram",
            text: "",
            icon: "fab fa-instagram",
            url: "https://instagram.com"
        },
        {
            name: "facebook",
            text: "",
            icon: "fab fa-facebook-f",
            url: "https://zh-tw.facebook.com/people/%E7%8E%8B%E7%8E%A5%E8%8C%B9/100041044065906/"
        }
    ] ) )
}
