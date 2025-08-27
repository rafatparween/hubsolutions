
// 'use client';

// const Disclaimer = () => {
//     return (
//         <div className="bg-white text-gray-800 px-4 md:px-20 py-10 md:py-20">
//             <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-blue-900">Disclaimer</h1>

//             {/* New Disclaimer Text */}
//             <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-6 mb-10 rounded-md">
//                 <p className="mb-4">
//                     <strong>Print Hub Solutions</strong> is an independent informational website and is not affiliated with or endorsed by any printer manufacturers, including but not limited to HP (Hewlett-Packard), Epson, Canon, Brother, or Lexmark.
//                 </p>
//                 <p className="mb-4">
//                     All brand names, trademarks, logos, and product images are the property of their respective owners and are used strictly for informational and reference purposes only.
//                 </p>
//                 <p>
//                     The troubleshooting guides and content provided on this site are based on general user experiences and known issues. While we strive for accuracy, we do not guarantee that the solutions will resolve your specific problem. For brand-authorized assistance, we recommend contacting the official support channels of your printer manufacturer.
//                 </p>
//             </div>

//             {/* Existing Content */}
//             <div className="space-y-6 text-lg leading-relaxed">
//                 <p>
//                     The information provided by <strong>Print Hub Solutions</strong> ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
//                 </p>
//                 <p>
//                     Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
//                 </p>
//                 <p>
//                     The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
//                 </p>
//                 <p>
//                     We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Disclaimer;





import Head from 'next/head';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Head>
        <title>Disclaimer | Print Hub Solutions</title>
        <meta name="description" content="Disclaimer for Print Hub Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">123printerssetupsteps</h1>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Disclaimer</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at support@printhubsolutions.com.
            </p>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                General Information
              </h3>
              <p className="text-gray-700">
                The information provided by Print Hub Solutionson this website is for general informational purposes only. While we strive to ensure the accuracy and reliability of our refurbished printers, we do not make any warranties or guarantees about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Product Condition and Availability
              </h3>
              <p className="text-gray-700">
                All refurbished printers sold by Print Hub Solutions have been thoroughly inspected, tested, and certified by our skilled technicians. However, as these are pre-owned items, they may show minor signs of previous use. We ensure that all functionality meets our rigorous standards, but physical imperfections may exist. Availability of specific models may vary, and we cannot guarantee the availability of any particular product.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Warranty and Returns
              </h3>
              <p className="text-gray-700">
              Print Hub Solutions offers a six-month warranty on all refurbished printers. The terms and conditions of the warranty, including the duration and coverage, are outlined in the warranty documentation provided with each product. The warranty covers defects in materials and workmanship under normal use during the warranty period. We also provide a return policy, the details of which can be found on our Returns page. Customers are encouraged to review the warranty and return policy details before making a purchase. Any claims under the warranty must be made in accordance with the procedures outlined in the warranty documentation.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                Limitation of Liability
              </h3>
              <p className="text-gray-700">
                In no event will Print Hub Solutions be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website or the purchase and use of our products.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
                External Links
              </h3>
              <p className="text-gray-700">
                Through this website, you may be able to link to other websites which are not under the control of Print Hub Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Legal Compliance
              </h3>
              <p className="text-gray-700">
               Print Hub Solutions operates in compliance with all applicable laws and regulations of the United States. It is the responsibility of the customer to ensure that their use of our products complies with any applicable local, state, or federal laws.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M5 6l7-4 7 4M4 10v11h16V10" />
                  </svg>
                </span>
                Governing Law
              </h3>
              <p className="text-gray-700">
                This disclaimer and any disputes arising out of or in connection with the use of this website or the purchase of our products shall be governed by and construed in accordance with the laws of the United States.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </span>
                Modifications
              </h3>
              <p className="text-gray-700">
              Print Hub Solutions reserves the right to modify this disclaimer at any time. Any changes will be posted on this page, and it is your responsibility to review this page periodically for updates.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Contact Information
              </h3>
              <p className="text-gray-700">
                If you have any questions or concerns about this disclaimer, please contact our customer service team at:
                <br />
                Email: support@printhubsolutions.com
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Agreement
              </h3>
              <p className="text-gray-700">
                By using our website and purchasing our products, you agree to this disclaimer in full. If you do not agree with any part of this disclaimer, you must not use our website or purchase our products. Thank you for choosing Print Hub Solutions
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Disclaimer</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li> Print Hub Solutionson is an independent content provider offering informational guides and tutorials for printer setup and troubleshooting.</li>
                <li>We are not affiliated, authorized, or endorsed by any printer brand or manufacturer.</li>
                <li>All brand names, trademarks, and logos are the property of their respective owners and are used strictly for educational and reference purposes only.</li>
                <li>For official printer warranty claims, hardware repairs, or brand-specific support, please contact the manufacturer directly.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Print Hub Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
