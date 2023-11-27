
const Footer = () => {
    return (<>
        <footer className="footer p-10  bg-[#4D455D] text-base-content">
            <aside>
                <div className="flex">
                    <img className="text-[#F5E9CF]" src="https://i.ibb.co/MRrQKbC/icons8-v-100.png" alt="" />
                    <h2 className="text-4xl mt-10 font-bold  text-[#F5E9CF]">oxly</h2>
                </div>
                <p className="text-[#F5E9CF]">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav className="justify-center">
                <header className="footer-title text-[#F5E9CF]">Services</header>
                <a className="link text-[#F5E9CF] link-hover">Branding</a>
                <a className="link text-[#F5E9CF] link-hover">Design</a>
                <a className="link text-[#F5E9CF] link-hover">Marketing</a>
                <a className="link text-[#F5E9CF] link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title text-[#F5E9CF]">Company</header>
                <a className="link text-[#F5E9CF] link-hover">About us</a>
                <a className="link text-[#F5E9CF] link-hover">Contact</a>
                <a className="link text-[#F5E9CF] link-hover">Jobs</a>
                <a className="link text-[#F5E9CF] link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-[#F5E9CF]">Legal</header>
                <a className="link text-[#F5E9CF] link-hover">Terms of use</a>
                <a className="link text-[#F5E9CF] link-hover">Privacy policy</a>
                <a className="link text-[#F5E9CF] link-hover">Cookie policy</a>
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