import React from "react";

const MobileAccessories = () => {
    return (
        <section className="p-6">
            <h2 className="text-3xl font-bold text-center mb-4">What Can You Buy From Us?</h2>

            <h3 className="text-xl font-bold mt-4">Mobile Phones</h3>
            <p className="text-gray-800 mb-4">
                From budget phones to state-of-the-art smartphones, we have a mobile for 
                everybody out there. Whether you're looking for larger screens, power-packed 
                batteries, blazing-fast processors, or high-tech selfie cameras, we’ve got you 
                covered. Explore top brands like Samsung, Apple, Oppo, Xiaomi, and more.
            </p>

            <h3 className="text-xl font-bold mt-4">Electronic Devices and Accessories</h3>
            <p className="text-gray-700 mb-4">
                Discover our extensive collection of laptops, cameras, and mobile accessories. 
                Looking for high-performance laptops? Our <a href="/" className="text-blue-500 underline">Back to College Store</a> 
                offers personalized recommendations for students and professionals alike. Turn your 
                home into a theater with our range of Sony home theaters, JBL soundbars, and Philips 
                tower speakers.
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-semibold text-base">
                <li>Designer cases and covers for smartphones</li>
                <li>Wireless headphones with noise cancellation</li>
                <li>Power banks for charging on the go</li>
                <li>Tripods and selfie sticks for photography enthusiasts</li>
            </ul>

            <h3 className="text-xl font-bold mt-4">Protective Cases and Covers</h3>
            <p className="text-gray-700 mb-4">
                Keep your mobile devices safe with our wide range of designer cases and covers. From rugged 
                armor cases to slim and stylish covers, we offer options for all popular brands like Samsung, 
                Apple, and Xiaomi.
            </p>

            <h3 className="text-xl font-bold mt-4">Wireless Headphones and Earbuds</h3>
            <p className="text-gray-700 mb-4">
                Experience crystal-clear audio with our collection of wireless headphones and earbuds. 
                Featuring noise cancellation, long battery life, and sleek designs, these accessories are 
                perfect for music lovers and professionals on the go.
            </p>

            <h3 className="text-xl font-bold mt-4">Portable Power Banks</h3>
            <p className="text-gray-700 mb-4">
                Stay powered up wherever you go with our high-capacity power banks. Whether you're traveling 
                or simply need extra backup, our range ensures your devices are always charged and ready to 
                use.
            </p>

            <h3 className="text-xl font-bold mt-4">Photography Accessories</h3>
            <p className="text-gray-700 mb-4">
                Enhance your mobile photography skills with our collection of tripods, selfie sticks, and 
                clip-on lenses. Capture moments with precision and creativity, whether you're a beginner or a 
                seasoned photographer.
            </p>
        </section>
    );
};

export default MobileAccessories;

