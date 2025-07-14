import Link from "next/link";

export default function Breadcrumb({ page }: any) {
    return (
        <div className="d-flex align-items-center gap-2">
            <img src="assets/imgs/pages/yoga/template/icons/favicon-sm.svg" alt="AstraX" />
            <Link href="/" className="text-white me-1">
                <span className="fw-semibold text-capitalize">home</span>
            </Link>
            <i className="fa-solid fa-angle-right text-white me-1 fw-semibold opacity-50" />
            <span className="text-white me-1">
                <span className="fw-semibold text-capitalize">{page}</span>
            </span>
        </div>
    );
}
