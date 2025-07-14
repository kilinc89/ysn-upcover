import Link from "next/link";

const listnews = [
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        name_author: "Smith",
        tag: "Business",
        title: "Strength & Flexibility Through Yoga",
        description: "Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services",
    },
    {
        img: "img-new-2.png",
        link: "/classes-details",
        link_author: "#",
        name_author: "Smith",
        tag: "Business",
        title: "Mindfulness 101: A Quick Guide",
        description: "Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services",
    },
    {
        img: "img-new-3.png",
        link: "/classes-details",
        link_author: "#",
        name_author: "Smith",
        tag: "Business",
        title: "Yoga’s Health Benefits Explained",
        description: "Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services",
    },
];
export default function Section2() {
    return (
        <section className="yoga-blog-section-2 position-relative overflow-hidden py-120 bg-secondary-2">
            <div className="container">
                <h2 className="text-anime-style-2 mb-6 text-anime-style-2">Latest News</h2>
                <div className="row g-5">
                    <div className="col-lg-8">
                        {listnews.map(({ img, link, link_author, name_author, tag, title, description }) => (
                            <div className="card-new position-relative wow img-custom-anim-top mb-6">
                                <div className="card-new-img position-relative rounded-top-3 overflow-hidden zoom-img">
                                    <img className="w-100" src={`assets/imgs/pages/yoga/page-classes-details/${img}`} alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0 w-100 py-2 bg-dark bg-opacity-75">
                                        <div className="d-flex card-news-information gap-4 ps-10 ms-3">
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-regular fa-circle-user text-white" />
                                                <p className="mb-0 text-white">
                                                    by
                                                    <Link href={`${link_author}`} className="text-white">
                                                        {name_author}
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-tags text-white" />
                                                <p className="text-white mb-0">{tag}</p>
                                            </div>
                                        </div>
                                        <div className="position-absolute top-0 start-0 translate-middle-y icon-shape icon-xl bg-primary rounded-3 ms-5">
                                            <h6 className="text-white mb-0 fs-20 lh-1">
                                                <span>15</span> <br />
                                                <span className="fs-8 text-white">Jan</span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-new-content p-5 bg-white rounded-bottom-3">
                                    <h5 className="text-anime-style-3">{title}</h5>
                                    <p className="mb-5 pb-5 border-bottom">{description}</p>
                                    <Link href="link" className="btn btn-primary hover-up">
                                        <span> KEEP READING </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="row pt-3 text-center">
                            <div className="d-flex justify-content-start align-items-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination gap-2">
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#" aria-label="Previous">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                    <path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#">
                                                1
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link active pagination_item border-0 icon-shape fw-regular" href="#">
                                                2
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#">
                                                3
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#">
                                                ...
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#" aria-label="Next">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                    <path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-lg-5 mb-lg-0 mb-5">
                        <div className="block-search p-lg-5 p-3 bg-white rounded-4 border-primary-2">
                            <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                Search Here
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <form className="input-group mt-3" data-aos="zoom-in">
                                <input type="text" className="form-control border" placeholder="Enter Your Keywords" aria-label="Enter Your Keywords" aria-describedby="button-addon2" />
                                <button aria-label="search" type="submit" className="btn btn-primary bg-primary border-0 rounded-2" id="button-addon2">
                                    <i className="fa-solid fa-magnifying-glass text-white" />
                                </button>
                            </form>
                        </div>
                        <div className="block-our-services p-lg-5 p-4 bg-white rounded-4 border-primary-2 mt-4">
                            <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                Categories
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" data-aos="fade-up" data-aos-delay={0}>
                                <span className="fw-medium">Yoga Practices &amp; Techniques</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 active p-3 rounded-3" data-aos="fade-up" data-aos-delay={200}>
                                <span className="fw-medium">Mindfulness &amp; Meditation</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" data-aos="fade-up" data-aos-delay={400}>
                                <span className="fw-medium">Health &amp; Wellness</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" data-aos="fade-up" data-aos-delay={600}>
                                <span className="fw-medium">Yoga for Everyday Life</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" data-aos="fade-up" data-aos-delay={800}>
                                <span className="fw-medium">Instructor Insights</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                        <div className="p-lg-5 p-4 rounded-4 bg-white mt-4">
                            <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                Recent Posts
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <div className="d-flex align-items-center mb-4 wow img-custom-anim-top">
                                <div className="pe-4">
                                    <div className="icon-80">
                                        <Link href="#">
                                            <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/recent-img.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-flex gap-1">
                                        <i className="fa-regular fa-clock fs-7 text-secondary" />
                                        <p className="fs-8 mb-0 fw-medium">15 Jan, 2025</p>
                                    </span>
                                    <Link href="#">
                                        <h6 className="mb-0 fs-18">10 Easy Yoga Poses for Energy</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4 wow img-custom-anim-top">
                                <div className="pe-4">
                                    <div className="icon-80">
                                        <Link href="#">
                                            <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/recent-img-2.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-flex gap-1">
                                        <i className="fa-regular fa-clock fs-7 text-secondary" />
                                        <p className="fs-8 mb-0 fw-medium">15 Jan, 2025</p>
                                    </span>
                                    <Link href="#">
                                        <h6 className="mb-0 fs-18">How Meditation Can Transform Your Daily Life</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4 wow img-custom-anim-top">
                                <div className="pe-4">
                                    <div className="icon-80">
                                        <Link href="#">
                                            <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/recent-img-3.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-flex gap-1">
                                        <i className="fa-regular fa-clock fs-7 text-secondary" />
                                        <p className="fs-8 mb-0 fw-medium">15 Jan, 2025</p>
                                    </span>
                                    <Link href="#">
                                        <h6 className="mb-0 fs-18">Balance Yoga with a Busy Life</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__widget p-4 rounded-3 mt-5 bg-white">
                            <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                Gallery Posts
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <div className="sidebar__tag-list" data-aos="zoom-in">
                                <ul className="list-unstyled d-flex flex-wrap gap-2">
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-1.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-2.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-3.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-4.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-5.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-6.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-7.png" alt="AstraX" />
                                    </li>
                                    <li>
                                        <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/gallery-8.png" alt="AstraX" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar__widget p-lg-5 p-4 mt-4 bg-white rounded-4 border-primary-2">
                            <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                Popular Tags
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <div className="sidebar__tag-list wow img-custom-anim-top">
                                <ul className="list-wrap d-flex flex-wrap gap-2">
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Yoga
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Meditation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Mindfulness
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Wellness
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0 active">
                                            Breathwork
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Relaxation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Flexibility
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Strength
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">
                                            Balance
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-primary p-lg-7 p-5 mt-4 rounded-4">
                            <h6 className="text-white text-anime-style-3">Have any Questions? Call us Today!</h6>
                            <p className="text-white mb-4 mt-3">Bichir sand dab chimaera glowlight danio bombay duck</p>
                            <Link href="tel:+(123) 222-8888">
                                <h5 className="text-white">+(123) 222-8888</h5>
                            </Link>
                            <Link href="#" className="btn btn-white w-100 mt-3">
                                <span className="text-primary">Make Appointment</span>
                                <i className="fa-solid fa-arrow-right text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
