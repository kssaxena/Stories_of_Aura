import React, { useState } from "react";
import Button from "../button-wrapper";
import CustomPlanModal from "./pricingTableCustom";

const PricingTable = ({ packageData }) => {
  const [showCustom, setShowCustom] = useState(false);
  //   <CustomPlanModal isOpen={showCustom} onClose={() => setShowCustom(false)} />;
  return (
    <div className="w-full py-16 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8 px-4">
        {packageData?.map((pkg, index) => (
          <div
            key={index}
            className={`
              relative border rounded-3xl p-8 shadow-sm 
              hover:shadow-xl transition-all duration-300
              ${pkg.popular ? "border-red-600 shadow-xl scale-[1.03]" : ""}
            `}
          >
            {/* MOST POPULAR TAG */}
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                MOST POPULAR
              </div>
            )}

            {/* DISCOUNT TAG */}
            {/* <div
              className={`
                absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full
                ${
                  pkg.popular
                    ? "bg-red-600 text-white"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {pkg.badge}
            </div> */}

            {/* Title */}
            <h2 className="text-2xl font-bold mb-1">{pkg.name}</h2>
            <p className=" mb-4">{pkg.subtitle}</p>

            {/* Price */}
            {/* <div className="text-4xl font-extrabold mb-2">{pkg.price}</div> */}
            {/* <div className="text-sm  mb-6">{pkg.occasional}</div> */}

            {/* Button */}

            {/* Features */}
            <div className="lg:space-y-4 space-y-2 border-t pt-6">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm">
                    <span className="font-semibold">{feature.label}:</span>{" "}
                    {feature.value === true ? "Included" : feature.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full mt-6 flex justify-center items-center">
              <Button Label="Contact Us" />
            </div>
          </div>
        ))}
      </div>

      {/* COMPARE BUTTON */}
      <div className=" mt-12">
        <Button
          Label="Choose your desired package"
          onClick={() => setShowCustom(true)}
        />
      </div>
      {showCustom && (
        <div>
          <CustomPlanModal
            isOpen={showCustom}
            onClose={() => setShowCustom(false)}
          />
        </div>
      )}
    </div>
  );
};

export default PricingTable;
