import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { customPlanOptions } from "../../constants/ComponentConstants";

const CustomPlanModal = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState({
    photography: [],
    videography: [],
    creatives: "",
    reels: "",
    smm: [],
    branding: "",
    addOns: [],
    notes: "",
  });

  const toggleSelect = (field, value) => {
    setSelected((prev) => {
      const arr = prev[field] || [];
      return arr.includes(value)
        ? { ...prev, [field]: arr.filter((x) => x !== value) }
        : { ...prev, [field]: [...arr, value] };
    });
  };

  const sendEmail = () => {
    const templateParams = {
      photography: selected.photography.join(", "),
      videography: selected.videography.join(", "),
      creatives: selected.creatives,
      reels: selected.reels,
      smm: selected.smm.join(", "),
      branding: selected.branding,
      addOns: selected.addOns.join(", "),
      notes: selected.notes,
    };

    // emailjs
    //   .send(
    //     "YOUR_EMAILJS_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     templateParams,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(() => {
    //     alert("Your custom plan has been submitted!");
    //     onClose();
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     alert("Error sending email");
    //   });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.85 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-[90%] max-w-4xl p-8 rounded-3xl shadow-xl relative overflow-y-auto max-h-[85vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold mb-6 text-center">
            Create Your Custom Plan
          </h2>

          {/* Sections */}
          <div className="space-y-10">
            {/* Multi-select fields */}
            {["photography", "videography", "smm", "addOns"].map((section) => (
              <div key={section}>
                <h3 className="font-semibold text-lg mb-3 capitalize">
                  {section.replace(/([A-Z])/g, " $1")}
                </h3>

                <div className="grid md:grid-cols-2 gap-3">
                  {customPlanOptions[section].map((option, i) => {
                    const isSelected = selected[section]?.includes(option);
                    return (
                      <div
                        key={i}
                        onClick={() => toggleSelect(section, option)}
                        className={`p-3 border rounded-xl cursor-pointer transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600 shadow-md"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Single-select dropdowns */}
            {["creatives", "reels", "branding"].map((section) => (
              <div key={section}>
                <h3 className="font-semibold text-lg mb-3 capitalize">
                  {section}
                </h3>

                <select
                  className="w-full p-3 border rounded-xl bg-gray-50"
                  value={selected[section]}
                  onChange={(e) =>
                    setSelected({ ...selected, [section]: e.target.value })
                  }
                >
                  <option value="">Select an option</option>
                  {customPlanOptions[section].map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* Notes */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Additional Notes</h3>
              <textarea
                className="w-full border rounded-xl p-4 h-28 bg-gray-50"
                placeholder="Describe custom requirements..."
                value={selected.notes}
                onChange={(e) =>
                  setSelected({ ...selected, notes: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <button
              onClick={sendEmail}
              className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Submit Custom Plan
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomPlanModal;
