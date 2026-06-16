export type GuideSlug =
  | "how-to-analyze-an-investment-property"
  | "what-is-a-good-rental-yield"
  | "cap-rate-vs-roi"
  | "rental-yield-formula"
  | "rental-property-cash-flow";

export type GuideArticle = {
  slug: GuideSlug;
  title: string;
  description: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  related: GuideSlug[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "how-to-analyze-an-investment-property",
    title: "How to Analyze an Investment Property",
    description: "Learn the core steps for analyzing a rental property, including rent, costs, financing, cash flow, yield and risk assumptions.",
    intro: "A useful investment property analysis is not a single percentage. It is a structured review of price, rent, operating costs, financing, cash flow, and the assumptions that could make the deal better or worse over time.",
    sections: [
      {
        title: "Start with the full acquisition cost",
        paragraphs: [
          "The purchase price is only the starting point. A practical analysis should include acquisition costs such as transfer taxes, legal fees, broker fees, due diligence costs, and any immediate work needed before the property can be rented.",
          "Using total acquisition cost keeps the numbers honest. A property can look attractive when measured against the purchase price alone, but become much less compelling once transaction costs and initial repairs are included.",
        ],
      },
      {
        title: "Estimate rent conservatively",
        paragraphs: [
          "Use market rent that can be supported by comparable listings and existing leases. If you rely on a rent increase, separate the current result from the improved result so you can see how much of the investment case depends on execution.",
          "Gross rent is useful for a first screen, but net rent and recoverable costs matter more for cash flow. A property with high rent and high unrecoverable costs may produce weaker economics than a lower-rent property with cleaner expenses.",
        ],
      },
      {
        title: "Separate operating cash flow from financing",
        paragraphs: [
          "Operating cash flow shows whether the property works before debt. It usually starts with rent and subtracts non-recoverable operating costs, maintenance, vacancy assumptions, management, and other owner expenses.",
          "Financing then shows how much of that operating surplus is left after interest and principal repayment. Keeping these layers separate makes it easier to compare properties with different loan structures.",
        ],
      },
      {
        title: "Review the core metrics together",
        paragraphs: [
          "No single metric tells the whole story. Gross rental yield is fast, operating yield is more realistic, cash flow shows monthly affordability, and equity return shows the effect of leverage and principal repayment.",
          "A stronger analysis also includes sensitivity checks. Test what happens if rent is lower, costs are higher, interest rates rise, or the property sits vacant for part of the year.",
        ],
        bullets: [
          "Total cost: purchase price plus acquisition costs and initial work.",
          "Gross yield: annual rent divided by purchase price.",
          "Operating yield: annual operating cash flow divided by total cost.",
          "Cash flow after financing: operating cash flow minus debt service.",
          "Break-even rent: the rent required to cover costs and financing.",
        ],
      },
    ],
    related: ["rental-yield-formula", "rental-property-cash-flow", "cap-rate-vs-roi"],
  },
  {
    slug: "what-is-a-good-rental-yield",
    title: "What Is a Good Rental Yield?",
    description: "Understand what makes a rental yield good, why market context matters, and how to compare gross and net rental yield.",
    intro: "A good rental yield is one that fits the local market, covers realistic costs, supports the financing plan, and still leaves a margin for risk. The right number depends on location, property type, financing, taxes, and expected maintenance.",
    sections: [
      {
        title: "Gross yield is a quick screen",
        paragraphs: [
          "Gross rental yield compares annual rent with the purchase price. It is useful when filtering many properties because it only needs two inputs, but it ignores transaction costs, operating expenses, vacancy, repairs, and financing.",
          "Because it is simple, gross yield can overstate the strength of a property. Two properties with the same gross yield can have very different outcomes if one has higher maintenance, unrecoverable costs, or acquisition costs.",
        ],
      },
      {
        title: "Net or operating yield is more meaningful",
        paragraphs: [
          "A better measure subtracts recurring owner costs from rent before comparing the annual operating result with the total acquisition cost. This is closer to the return generated by the property itself before financing.",
          "For example, a property with a modest gross yield can still be attractive if operating costs are low and the financing is manageable. A property with a high gross yield can disappoint if it requires frequent repairs or has unstable occupancy.",
        ],
      },
      {
        title: "Market context matters",
        paragraphs: [
          "Lower-yield markets often price in stronger location quality, lower vacancy risk, better liquidity, or stronger expected appreciation. Higher-yield markets may offer more income but can carry higher vacancy, maintenance, tenant, or resale risk.",
          "A good yield is therefore not just the highest yield. It is a yield that remains acceptable after realistic cost assumptions and stress tests.",
        ],
      },
      {
        title: "Use yield with cash flow",
        paragraphs: [
          "Yield helps compare properties, but monthly cash flow shows whether the property can carry itself under your financing assumptions. A property can have a reasonable yield and still produce negative cash flow if the loan payment is high.",
          "Before buying, compare gross yield, operating yield, cash flow after financing, and break-even rent. The combination gives a clearer view than any single metric.",
        ],
      },
    ],
    related: ["rental-yield-formula", "rental-property-cash-flow", "how-to-analyze-an-investment-property"],
  },
  {
    slug: "cap-rate-vs-roi",
    title: "Cap Rate vs ROI: What Is the Difference?",
    description: "Compare cap rate and ROI for rental properties, including what each metric measures and when each one is useful.",
    intro: "Cap rate and ROI answer different questions. Cap rate focuses on the property before financing. ROI focuses on the investor's return after considering capital invested, financing, and sometimes appreciation or principal repayment.",
    sections: [
      {
        title: "Cap rate measures the property",
        paragraphs: [
          "Capitalization rate, or cap rate, is commonly calculated as net operating income divided by property value or purchase price. It is designed to compare the income-producing ability of properties independent of the buyer's financing.",
          "That makes cap rate useful for comparing assets. If two properties are in similar markets with similar risk, the cap rate can help show which one produces more operating income relative to price.",
        ],
      },
      {
        title: "ROI measures the investor outcome",
        paragraphs: [
          "Return on investment usually compares the investor's gain with the cash invested. In rental property analysis, ROI may include cash flow after financing, principal repayment, and sometimes property appreciation.",
          "Because ROI can include financing effects, it is more sensitive to loan terms, equity contribution, interest rate, and repayment schedule. The same property can produce different ROI figures for different buyers.",
        ],
      },
      {
        title: "Why both metrics can disagree",
        paragraphs: [
          "A property can have a strong cap rate but a weak ROI if financing is expensive or the required equity contribution is high. A property can also show a strong leveraged ROI while having a mediocre operating profile, which increases risk if rent falls or costs rise.",
          "For that reason, cap rate is often better for comparing the property itself, while ROI is better for understanding the buyer-specific investment result.",
        ],
      },
      {
        title: "Use each metric for the right decision",
        paragraphs: [
          "Use cap rate or operating yield to compare properties before financing. Use ROI and cash flow after financing to decide whether a specific deal fits your capital, debt structure, and risk tolerance.",
          "When a deal only works because of aggressive financing or optimistic appreciation, the analysis should show that clearly instead of hiding it inside one headline return number.",
        ],
      },
    ],
    related: ["rental-property-cash-flow", "rental-yield-formula", "how-to-analyze-an-investment-property"],
  },
  {
    slug: "rental-yield-formula",
    title: "Rental Yield Formula for Investment Properties",
    description: "Learn the gross and net rental yield formulas, what inputs to use, and how rental yield fits into property analysis.",
    intro: "Rental yield compares rental income with the price or total cost of a property. The formula can be simple, but the result is only useful when the inputs match the decision you are trying to make.",
    sections: [
      {
        title: "Gross rental yield formula",
        paragraphs: [
          "Gross rental yield is annual rent divided by purchase price, multiplied by 100. If a property rents for 1,000 per month and costs 250,000, annual rent is 12,000 and the gross yield is 4.8%.",
          "This formula is fast and helpful for screening, but it ignores acquisition costs, vacancies, repairs, operating costs, taxes, and financing.",
        ],
      },
      {
        title: "Net or operating yield formula",
        paragraphs: [
          "A more practical version uses annual operating cash flow before financing divided by total acquisition cost. Operating cash flow usually means annual net rent minus non-recoverable operating costs, maintenance, management, and other recurring owner costs.",
          "Total acquisition cost should include purchase price plus transaction costs and initial capital expenditure. This makes the yield lower than the gross yield but more useful for judging the property economics.",
        ],
      },
      {
        title: "Which cost base should you use?",
        paragraphs: [
          "Use purchase price when you want a quick market comparison. Use total acquisition cost when deciding whether a specific deal works for you. If you expect immediate renovation costs, include them in the cost base or analyze them separately.",
          "Consistency matters. Comparing one property on purchase price and another on full cost can make the wrong property look better.",
        ],
      },
      {
        title: "Yield is not the same as cash flow",
        paragraphs: [
          "Rental yield measures income relative to cost. Cash flow measures surplus or shortfall in currency terms. A property can have an acceptable yield but negative cash flow after financing if the loan payment is too high.",
          "Use yield to compare properties, then use a cash flow model to test whether the rent covers costs, interest, and repayment.",
        ],
      },
    ],
    related: ["what-is-a-good-rental-yield", "rental-property-cash-flow", "cap-rate-vs-roi"],
  },
  {
    slug: "rental-property-cash-flow",
    title: "Rental Property Cash Flow Explained",
    description: "Learn how rental property cash flow is calculated, what costs to include, and why cash flow after financing matters.",
    intro: "Rental property cash flow is the money left after rent is collected and property-related costs are paid. For financed properties, the most important practical question is often whether cash flow remains positive after the loan payment.",
    sections: [
      {
        title: "Start with rental income",
        paragraphs: [
          "The first input is rent. Use current rent if the property is already leased, or conservative market rent if it is vacant. If utilities or operating costs are partly recoverable from the tenant, separate those amounts from true owner costs.",
          "Do not rely only on optimistic rent assumptions. If the deal depends on a rent increase, model the current case and the improved case separately.",
        ],
      },
      {
        title: "Subtract operating costs",
        paragraphs: [
          "Operating costs can include non-recoverable service charges, maintenance, management, insurance, vacancy allowance, and other recurring expenses. Some costs happen monthly, while others should be annualized.",
          "The result before financing is operating cash flow. This shows whether the property produces surplus income before debt.",
        ],
      },
      {
        title: "Subtract financing costs",
        paragraphs: [
          "For a financed property, subtract interest and principal repayment to estimate cash flow after financing. Interest is a cost of debt, while principal repayment also builds equity, but both affect monthly liquidity.",
          "A property with negative cash flow is not automatically bad, but the shortfall needs to be intentional, affordable, and justified by other parts of the investment case.",
        ],
      },
      {
        title: "Use break-even rent as a risk check",
        paragraphs: [
          "Break-even rent shows the rent required to cover operating costs and financing. If the break-even rent is close to or above realistic market rent, the deal has little margin for vacancy, repairs, or rate changes.",
          "Cash flow analysis works best when paired with rental yield, cap rate, and sensitivity checks. Together they show income quality, financing pressure, and downside risk.",
        ],
      },
    ],
    related: ["how-to-analyze-an-investment-property", "rental-yield-formula", "cap-rate-vs-roi"],
  },
];

export const guideIndexTitle = "Investment Property Guides";
export const guideIndexDescription = "Plain-English guides to rental yield, cash flow, cap rate, ROI and investment property analysis.";

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}

export function getRelatedGuides(article: GuideArticle) {
  return article.related
    .map((slug) => getGuideArticle(slug))
    .filter((related): related is GuideArticle => Boolean(related));
}
