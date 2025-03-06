import { ReactElement } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

type SMediaProps = {
    element: ReactElement;
};

export function SMediaContainer() {
    return (
        <div className="social-medias">
            <ul>
                <SMedia element={<FaGithubAlt />} />
                <SMedia element={<FaLinkedinIn />} />
            </ul>
        </div>
    );
}

function SMedia({ element }: SMediaProps) {
    return (
        <li>
            <a href="">{element}</a>
        </li>
    );
}
