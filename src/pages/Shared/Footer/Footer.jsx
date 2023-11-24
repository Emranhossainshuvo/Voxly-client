
const Footer = () => {
    return (<>
        <footer className="footer p-10 text-base-content">
            <aside>
                <div className="flex">
                    <img className="text-[#F5E9CF]" src="https://i.ibb.co/MRrQKbC/icons8-v-100.png" alt="" />
                    <h2 className="text-4xl mt-10 font-bold  text-[#F5E9CF]">oxly</h2>
                </div>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title text-[#F5E9CF]">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title text-[#F5E9CF]">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-[#F5E9CF]">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        <div>
            <footer className="footer footer-center p-4 bg-[#F5E9CF] text-base-content">
                <aside>
                    <p className="text-black font-semibold text-lg">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    </>
    );
};

export default Footer;