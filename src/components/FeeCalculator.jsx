import React, { useState } from "react";
import { Calculator, CheckCircle2, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { feeStructure } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function FeeCalculator() {
  const [numChildren, setNumChildren] = useState(2);
  const { setIsAdmissionModalOpen } = useSchool();

  // Calculate monthly fee per child
  const getChildMonthlyFee = (index) => {
    const base = feeStructure.monthlyFee;
    if (index === 0) return { fee: base, discount: 0, percent: 0 };
    if (index === 1) return { fee: base * 0.90, discount: base * 0.10, percent: 10 };
    if (index === 2) return { fee: base * 0.85, discount: base * 0.15, percent: 15 };
    return { fee: base * 0.75, discount: base * 0.25, percent: 25 };
  };

  const childrenData = Array.from({ length: numChildren }, (_, i) => getChildMonthlyFee(i));
  const totalMonthlyFee = childrenData.reduce((acc, curr) => acc + curr.fee, 0);
  const totalMonthlySavings = childrenData.reduce((acc, curr) => acc + curr.discount, 0);
  const standardMonthlyFee = numChildren * feeStructure.monthlyFee;

  return (
    <div className="te-calculator-card">
      <div className="d-flex align-items-center gap-2 mb-3">
        <div className="te-badge gold mb-0">
          <Calculator size={14} />
          <span>Interactive Estimator</span>
        </div>
        <span className="badge bg-primary text-white">Session 2026-2027</span>
      </div>

      <h3 className="fw-bold mb-2" style={{ color: "var(--te-navy-dark)" }}>
        Fee & Sibling Discount Calculator
      </h3>
      <p className="text-muted small mb-4">
        Calculate exact monthly tuition fees and sibling discounts according to the approved school fee schedule.
      </p>

      {/* Selector: Number of Children */}
      <div className="mb-4">
        <label className="fw-semibold text-dark small mb-2 d-block">
          Select Number of Biological Children Enrolling:
        </label>
        <div className="btn-group w-100" role="group">
          {[1, 2, 3, 4].map((count) => (
            <button
              key={count}
              type="button"
              className={`btn py-2 fw-bold ${
                numChildren === count
                  ? "btn-te-primary shadow-sm"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setNumChildren(count)}
            >
              {count} {count === 1 ? "Child" : "Children"}
            </button>
          ))}
        </div>
      </div>

      {/* Children Breakdown */}
      <div className="bg-white p-3 rounded-3 border mb-4">
        <div className="small fw-bold text-muted mb-3 text-uppercase" style={{ letterSpacing: "0.05em" }}>
          Monthly Fee Breakdown:
        </div>

        <div className="d-flex flex-column gap-2">
          {childrenData.map((child, idx) => (
            <div 
              key={idx} 
              className="d-flex justify-content-between align-items-center p-2 rounded-2"
              style={{ backgroundColor: idx % 2 === 0 ? "var(--te-bg-subtle)" : "#FFFFFF" }}
            >
              <div>
                <strong className="text-dark small d-block">
                  Child {idx + 1} {idx === 0 ? "(Eldest / 1st)" : `(${child.percent}% Sibling Discount)`}
                </strong>
                {child.percent > 0 ? (
                  <span className="badge bg-success-subtle text-success border border-success-subtle" style={{ fontSize: "0.72rem" }}>
                    Saves PKR {child.discount.toLocaleString()}/mo
                  </span>
                ) : (
                  <span className="text-muted" style={{ fontSize: "0.72rem" }}>
                    Standard Monthly Rate
                  </span>
                )}
              </div>
              <div className="text-end">
                <span className="fw-bold text-primary">
                  PKR {child.fee.toLocaleString()}
                </span>
                <span className="text-muted small"> / mo</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Summary Box */}
      <div className="p-3 rounded-3 mb-4" style={{ background: "linear-gradient(135deg, #0B2545 0%, #133E70 100%)", color: "#FFFFFF" }}>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="small text-light-50">Standard Monthly Tuition:</span>
          <span className="text-decoration-line-through text-light-50 small">
            PKR {standardMonthlyFee.toLocaleString()}
          </span>
        </div>

        {totalMonthlySavings > 0 && (
          <div className="d-flex justify-content-between align-items-center mb-2 text-warning fw-semibold small">
            <span>Sibling Discount Applied:</span>
            <span>- PKR {totalMonthlySavings.toLocaleString()} / mo</span>
          </div>
        )}

        <hr className="my-2 border-white opacity-25" />

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="small text-light-50">Total Payable Monthly:</div>
            <h4 className="fw-bold text-white mb-0">
              PKR {totalMonthlyFee.toLocaleString()}
              <small className="fs-6 fw-normal text-light-50"> / month</small>
            </h4>
          </div>
          {totalMonthlySavings > 0 && (
            <div className="text-end">
              <span className="badge bg-warning text-dark fw-bold px-2 py-1">
                Annual Saving: PKR {(totalMonthlySavings * 12).toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Sibling policy note */}
      <div className="d-flex align-items-start gap-2 mb-4 p-2 rounded-2 bg-light text-muted small">
        <HelpCircle size={16} className="text-primary flex-shrink-0 mt-1" />
        <span>
          <strong>Note:</strong> {feeStructure.siblingPolicyNote} Registration Fee (PKR 1,500) and Admission Fee (PKR 4,000) apply at the time of initial admission.
        </span>
      </div>

      {/* Action */}
      <button 
        onClick={() => setIsAdmissionModalOpen(true)}
        className="btn btn-te-gold w-100 py-2 d-flex align-items-center justify-content-center gap-2"
        type="button"
      >
        <Sparkles size={16} />
        <span>Apply for this Family Package</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
