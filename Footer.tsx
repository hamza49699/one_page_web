function Footer() {
    return (
        <div>
            <footer className="bg-orange-400 flex justify-between items-center p-4">
                <p className="text-white">© 2024 Food Delivery, All rights reserved</p>
                <ul className="flex space-x-6 text-white">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;

