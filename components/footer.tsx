const Footer = () => {
    return (
        <footer className="bg-s dark:bg-gray-900 mt-[10%] bg-gradient-to-r from-primarylight to-primary">
            <div className="grid grid-cols-2 gap-8 px-6 py-6 md:grid-cols-3 item-center">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Company</h2>
                    <ul className="text-white dark:text-white">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
                    <ul className="text-white dark:text-white">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                    <ul className="text-white dark:text-white">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-4 py-6 bg-gradient-to-r from-primarylight to-primary dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white dark:text-gray-300 sm:text-center">© 2023 <a href="#" className="text-white">AI BigData</a>. All Rights Reserved.</span>
                <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                    <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* Facebook SVG */}
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* Instagram SVG */}
                        </svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* Twitter SVG */}
                        </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* GitHub SVG */}
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
