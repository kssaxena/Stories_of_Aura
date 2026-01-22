import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button-wrapper";
import EnquiryForm from "../enquiry-form";

const BASE_PACKAGES = [
  {
    id: "starter",
    name: "Starter Base",
    description: "For early-stage brands",
    defaults: {
      creatives: 8,
      stories: 6,
      reels: 4,
    },
  },
  {
    id: "growth",
    name: "Growth Base",
    description: "For scaling brands",
    defaults: {
      creatives: 14,
      stories: 12,
      reels: 8,
    },
  },
  {
    id: "enterprise",
    name: "Enterprise Base",
    description: "For high-volume brands",
    defaults: {
      creatives: 20,
      stories: 30,
      reels: 12,
    },
  },
];

const CustomPackageModal = ({ onClose }) => {
  const [base, setBase] = useState(null);
  const [values, setValues] = useState({});
  const [billing, setBilling] = useState("monthly");
  const [addons, setAddons] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const toggleAddon = (addon) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon],
    );
  };

  return (
    <div className="w-full h-fit max-w-6xl rounded-3xl p-8 shadow-xl">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-2">Build Your Custom Package</h2>
      <p className="mb-8">
        Start with a base and customize everything to match your goals.
      </p>

      {/* STEP 1 – Base Package */}
      <h3 className="text-xl font-semibold mb-4">1. Choose Your Base</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {BASE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => {
              setBase(pkg);
              setValues(pkg.defaults);
            }}
            className={`cursor-pointer border rounded-2xl p-6 transition-all
              ${
                base?.id === pkg.id
                  ? "border-red-600 shadow-lg scale-[1.02]"
                  : "hover:shadow-md"
              }`}
          >
            <h4 className="text-lg font-bold">{pkg.name}</h4>
            <p className="text-sm mt-1">{pkg.description}</p>
            <ul className="text-sm mt-4 space-y-1">
              <li>{pkg.defaults.creatives} Creatives</li>
              <li>{pkg.defaults.stories} Stories</li>
              <li>{pkg.defaults.reels} Reels</li>
            </ul>
          </div>
        ))}
      </div>

      {/* STEP 2 – Customization */}
      {base && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-xl font-semibold mt-10 mb-4">
            2. Customize Deliverables
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(values).map(([key, val]) => (
              <div key={key} className="border rounded-xl p-4">
                <p className="font-semibold capitalize">{key}</p>
                <input
                  type="number"
                  min={0}
                  value={val}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      [key]: Number(e.target.value),
                    })
                  }
                  className="w-full border rounded-lg mt-2 px-3 py-2"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* STEP 3 – Add Ons */}
      {base && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-xl font-semibold mt-10 mb-4">3. Add-Ons</h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Exclusive Reels",
              "Influencer Collaboration",
              "Ad Campaign Setup",
              "Website Maintenance",
            ].map((addon) => (
              <button
                key={addon}
                onClick={() => toggleAddon(addon)}
                className={`border px-5 py-2 rounded-full text-sm transition
                  ${
                    addons.includes(addon)
                      ? "bg-red-600 text-white border-red-600"
                      : "hover:border-red-600"
                  }`}
              >
                {addon}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* STEP 4 – Billing */}
      {base && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-xl font-semibold mt-10 mb-4">4. Billing Type</h3>

          <div className="flex gap-6">
            {["monthly", "campaign"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={billing === type}
                  onChange={() => setBilling(type)}
                />
                <span className="capitalize">{type}</span>
              </label>
            ))}
          </div>
        </motion.div>
      )}

      {/* STEP 5 – Summary */}
      {base && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-xl font-semibold mt-10 mb-4">Package Summary</h3>

          <div className="border rounded-2xl p-6 text-sm space-y-2">
            <p>
              <strong>Base:</strong> {base.name}
            </p>
            <p>
              <strong>Deliverables:</strong>{" "}
              {Object.entries(values)
                .map(([k, v]) => `${v} ${k}`)
                .join(", ")}
            </p>
            <p>
              <strong>Add-Ons:</strong>{" "}
              {addons.length ? addons.join(", ") : "None"}
            </p>
            <p>
              <strong>Billing:</strong> {billing}
            </p>
          </div>
        </motion.div>
      )}

      {/* CTA */}
      {/* {base && (
        <div className="mt-10 flex justify-center">
          <Button
            Label="Request Custom Package"
            onClick={() => setOpenForm(true)}
          />
        </div>
        )} */}
      <div className="mt-10 flex justify-center gap-10">
        <Button Label="Cancel" onClick={onClose} />
        <Button
          Label="Request Custom Package"
          onClick={() => setOpenForm(true)}
        />
      </div>

      {/* Enquiry */}
      {/* <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          >
            <EnquiryForm
              onCancel={() => setOpenForm(false)}
              prefillData={{
                basePackage: base?.name,
                values,
                addons,
                billing,
              }}
              packageClassname="block"
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default CustomPackageModal;
