import { Nav } from "./Nav";
import { SMediaContainer } from "./SMedia";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <SMediaContainer />
                <Nav />
            </div>
        </footer>
    );
};
