import type { Locale } from "./i18n";

export type GuideId =
  | "how-to-analyze-an-investment-property"
  | "what-is-a-good-rental-yield"
  | "cap-rate-vs-roi"
  | "rental-yield-formula"
  | "rental-property-cash-flow";

export type GuideSlug =
  | GuideId
  | "immobilieninvestment-analysieren"
  | "gute-mietrendite"
  | "mietrendite-formel"
  | "cashflow-vermietungsimmobilie";

export type GuideArticle = {
  id: GuideId;
  locale: Locale;
  slug: GuideSlug;
  title: string;
  description: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  related: GuideId[];
};

export const guideArticles: GuideArticle[] = [
  {
    id: "how-to-analyze-an-investment-property",
    locale: "en",
    slug: "how-to-analyze-an-investment-property",
    title: "How to Analyze an Investment Property",
    description: "A practical guide to analyzing a rental property with examples for price, rent, costs, financing, yield, cash flow and risk checks.",
    intro: "A useful investment property analysis is not a single percentage. It is a structured review of purchase price, rent, operating costs, financing, cash flow, and the assumptions that could make the deal better or worse over time. The goal is to understand what the property itself produces, what the financing does to monthly liquidity, and how much margin remains if reality is less favorable than the brochure.",
    sections: [
      {
        title: "Start with the full acquisition cost",
        paragraphs: [
          "The purchase price is only the starting point. A practical analysis should include acquisition costs such as transfer taxes, legal fees, broker fees, due diligence costs, and any immediate work needed before the property can be rented. If you only measure returns against the purchase price, you can make a deal look stronger than it really is.",
          "For example, assume a property costs 250,000 and acquisition costs are 10%. The total cost is 275,000 before any renovation. If you also expect 12,000 of immediate repairs, the real starting cost is 287,000. A 12,000 annual rent looks like a 4.8% gross yield on the purchase price, but only 4.18% against the more complete 287,000 cost base.",
          "This distinction matters because the cash you put into transaction costs and initial work is still capital committed to the deal. It must be recovered through income, appreciation, principal repayment, or a combination of those outcomes.",
        ],
      },
      {
        title: "Estimate rent conservatively",
        paragraphs: [
          "Use rent that can be supported by comparable listings, existing leases, and local vacancy conditions. If you rely on a rent increase, separate the current result from the improved result so you can see how much of the investment case depends on execution.",
          "A simple example shows why this matters. If current rent is 950 per month but you believe market rent is 1,100, the annual difference is 1,800. On a tight deal, that 150 per month may be the entire positive cash flow. Analyze the property at 950 first, then add a second case at 1,100 only if the increase is realistic and legally possible.",
          "Gross rent is useful for a first screen, but net rent and recoverable costs matter more for cash flow. A property with high rent and high unrecoverable costs may produce weaker economics than a lower-rent property with cleaner expenses.",
        ],
      },
      {
        title: "Separate operating cash flow from financing",
        paragraphs: [
          "Operating cash flow shows whether the property works before debt. It usually starts with rent and subtracts non-recoverable operating costs, maintenance, vacancy assumptions, management, and other owner expenses. This is the income profile of the asset before your personal financing choices are added.",
          "Suppose monthly rent is 1,100. Non-recoverable operating costs are 120, maintenance and management are 130, and you reserve 50 for vacancy. Operating cash flow is 800 per month, or 9,600 per year. If the loan payment is 920 per month, cash flow after financing is negative 120 per month even though the property produces positive operating income.",
          "Keeping these layers separate makes comparison easier. Two buyers may use different equity contributions and loan terms, but the property's operating result should be evaluated on a consistent basis.",
        ],
      },
      {
        title: "Review the core metrics together",
        paragraphs: [
          "No single metric tells the whole story. Gross rental yield is fast, operating yield is more realistic, cash flow shows monthly affordability, and equity return shows the effect of leverage and principal repayment. The stronger the deal, the less it depends on one optimistic assumption.",
          "Take a property with a 275,000 total cost and 9,600 annual operating cash flow before financing. The operating yield is 3.49%. If you invest 75,000 equity and repay 5,000 of principal in the first year while cash flow after financing is negative 1,440, your first-year wealth build-up before appreciation is 3,560. That is a 4.75% return on equity before taxes and price changes.",
          "A stronger analysis also includes sensitivity checks. Test what happens if rent is 5% lower, costs are 10% higher, interest rates rise, or the property sits vacant for one month. If a small change turns the result from acceptable to painful, the asking price or financing structure may need to be reconsidered.",
        ],
        bullets: [
          "Total cost: purchase price plus acquisition costs and initial work.",
          "Gross yield: annual rent divided by purchase price.",
          "Operating yield: annual operating cash flow divided by total cost.",
          "Cash flow after financing: operating cash flow minus debt service.",
          "Break-even rent: the rent required to cover costs and financing.",
        ],
      },
      {
        title: "Turn the analysis into a decision",
        paragraphs: [
          "A good analysis should lead to a clear decision: proceed, renegotiate, improve the financing, or pass. If the numbers only work with best-case rent, low maintenance, and strong appreciation, the risk is concentrated in assumptions you do not fully control.",
          "Use the main calculator to model your own price, rent, costs, and loan terms. Then compare the result with the related guides on rental yield, cash flow, and cap rate versus ROI so each metric is interpreted in the right context.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the first number to check when analyzing a rental property?",
        answer: "Start with total acquisition cost, not just the purchase price. The total cost gives you the correct base for yield, cash invested, and financing need.",
      },
      {
        question: "Should I analyze current rent or expected market rent?",
        answer: "Analyze current rent first, then create a separate upside case for expected market rent. This shows whether the property works today or only after a successful rent increase.",
      },
      {
        question: "Is positive cash flow required for a good investment property?",
        answer: "Not always, but negative cash flow must be affordable and justified by other factors such as principal repayment, strong location quality, or realistic appreciation. It should never be a surprise.",
      },
      {
        question: "How many scenarios should I run?",
        answer: "At minimum, run a base case, a conservative case with lower rent or higher costs, and a financing stress case. The conservative case often tells you more than the optimistic one.",
      },
    ],
    related: ["rental-yield-formula", "rental-property-cash-flow", "cap-rate-vs-roi"],
  },
  {
    id: "what-is-a-good-rental-yield",
    locale: "en",
    slug: "what-is-a-good-rental-yield",
    title: "What Is a Good Rental Yield?",
    description: "Learn what a good rental yield means, with examples for gross yield, operating yield, market context, cash flow and risk.",
    intro: "A good rental yield is one that fits the local market, covers realistic costs, supports the financing plan, and still leaves a margin for risk. The right number depends on location, property type, taxes, maintenance, vacancy, financing, and how much future appreciation you are assuming.",
    sections: [
      {
        title: "Gross yield is a quick screen",
        paragraphs: [
          "Gross rental yield compares annual rent with the purchase price. It is useful when filtering many properties because it only needs two inputs, but it ignores transaction costs, operating expenses, vacancy, repairs, and financing.",
          "For example, a property that rents for 1,200 per month produces 14,400 of annual rent. If the purchase price is 300,000, the gross rental yield is 4.8%. That may be acceptable in one city and weak in another. The percentage alone does not tell you whether the property is affordable after costs and debt service.",
          "Because it is simple, gross yield can overstate the strength of a property. Two properties with the same gross yield can have very different outcomes if one has higher maintenance, unrecoverable costs, or acquisition costs.",
        ],
      },
      {
        title: "Net or operating yield is more meaningful",
        paragraphs: [
          "A better measure subtracts recurring owner costs from rent before comparing the annual operating result with the total acquisition cost. This is closer to the return generated by the property itself before financing.",
          "Using the same 300,000 property, assume acquisition costs are 30,000, so total cost is 330,000. Annual rent is 14,400. Non-recoverable operating costs, maintenance, and vacancy allowance total 4,200 per year. Operating cash flow before financing is 10,200, so operating yield is 3.09% on total cost.",
          "That lower figure is usually more useful than the 4.8% gross yield. It tells you what the property produces after recurring costs but before the effect of leverage.",
        ],
      },
      {
        title: "Market context matters",
        paragraphs: [
          "Lower-yield markets often price in stronger location quality, lower vacancy risk, better liquidity, or stronger expected appreciation. Higher-yield markets may offer more income but can carry higher vacancy, maintenance, tenant, financing, or resale risk.",
          "A 3.5% operating yield in a stable central market may be reasonable if vacancy risk is low and financing is conservative. A 7% gross yield in a weaker market may still be unattractive if the building needs regular repairs, rents are volatile, or resale demand is thin.",
          "A good yield is therefore not just the highest yield. It is a yield that remains acceptable after realistic cost assumptions and stress tests.",
        ],
      },
      {
        title: "Use yield with cash flow",
        paragraphs: [
          "Yield helps compare properties, but monthly cash flow shows whether the property can carry itself under your financing assumptions. A property can have a reasonable yield and still produce negative cash flow if the loan payment is high.",
          "For instance, 10,200 of annual operating cash flow equals 850 per month. If the monthly loan payment is 980, the property is negative 130 per month before taxes. If the payment is 760, it is positive 90 per month. The yield did not change, but the financing result did.",
          "Before buying, compare gross yield, operating yield, cash flow after financing, and break-even rent. The combination gives a clearer view than any single metric.",
        ],
      },
      {
        title: "What range is good?",
        paragraphs: [
          "There is no universal good rental yield. A property should first clear your local market benchmark, then survive realistic cost and financing assumptions. As a practical screen, many investors compare a property to nearby alternatives, current borrowing costs, and the return they could get from less active investments.",
          "If the operating yield is below the interest rate on the debt, the deal may still work through amortization or appreciation, but the income side is not carrying the investment strongly. If the operating yield is comfortably above the borrowing cost and the property still has positive cash flow, the income case is stronger.",
        ],
      },
      {
        title: "Build a local benchmark",
        paragraphs: [
          "A practical way to define good yield is to build a small local benchmark. Pick five to ten comparable rental properties in the same area, with similar size, condition, tenant profile, and ownership costs. Estimate gross yield for each, then adjust the most serious candidates for recurring costs and acquisition costs.",
          "For example, if comparable properties cluster around 4.2% to 4.8% gross yield, a listing at 5.3% deserves attention but still needs scrutiny. The higher yield may come from a motivated seller, but it may also reflect deferred maintenance, optimistic rent, a less liquid micro-location, or higher vacancy risk.",
          "The benchmark also protects you from using national rules of thumb in a local market. A yield that is excellent in one city can be ordinary in another. Your decision should be based on the spread between this property, nearby alternatives, financing costs, and the risk you are taking.",
        ],
      },
      {
        title: "Do not ignore capital expenditure",
        paragraphs: [
          "Rental yield calculations often miss larger capital expenditure because it does not appear every month. Roof work, heating systems, exterior repairs, appliance replacement, and common-area improvements can materially reduce the real return.",
          "If a property shows 2,400 of annual surplus but you expect 12,000 of repairs over the next five years, that is an average of 2,400 per year. The apparent surplus is effectively consumed by the repair reserve. A good rental yield should leave room for these irregular costs, not just the visible monthly bills.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a higher rental yield always better?",
        answer: "No. Higher yield can come with higher vacancy, maintenance, tenant, or resale risk. The best yield is one that remains attractive after realistic costs and stress tests.",
      },
      {
        question: "Should I use gross or net yield?",
        answer: "Use gross yield for quick screening and net or operating yield for real decisions. Operating yield includes recurring owner costs and is usually more informative.",
      },
      {
        question: "Can a property have good yield and bad cash flow?",
        answer: "Yes. If debt service is high, a property can show acceptable operating yield but still have negative monthly cash flow after financing.",
      },
      {
        question: "What should I compare rental yield against?",
        answer: "Compare it with similar local properties, borrowing costs, expected risk, and your alternative uses for the same capital.",
      },
    ],
    related: ["rental-yield-formula", "rental-property-cash-flow", "how-to-analyze-an-investment-property"],
  },
  {
    id: "cap-rate-vs-roi",
    locale: "en",
    slug: "cap-rate-vs-roi",
    title: "Cap Rate vs ROI: What Is the Difference?",
    description: "Compare cap rate and ROI for rental properties with examples showing property performance, leverage, cash flow and investor return.",
    intro: "Cap rate and ROI answer different questions. Cap rate focuses on the property before financing. ROI focuses on the investor's return after considering capital invested, financing, principal repayment, and sometimes appreciation. Confusing the two can make a property look better or worse than it really is.",
    sections: [
      {
        title: "Cap rate measures the property",
        paragraphs: [
          "Capitalization rate, or cap rate, is commonly calculated as net operating income divided by property value or purchase price. It is designed to compare the income-producing ability of properties independent of the buyer's financing.",
          "Assume a property generates 18,000 of annual rent and has 6,000 of operating expenses before financing. Net operating income is 12,000. If the property price is 300,000, the cap rate is 4%. If another similar property produces 15,000 of net operating income at the same price, its cap rate is 5%.",
          "That makes cap rate useful for comparing assets. If two properties are in similar markets with similar risk, the cap rate can help show which one produces more operating income relative to price.",
        ],
      },
      {
        title: "ROI measures the investor outcome",
        paragraphs: [
          "Return on investment usually compares the investor's gain with the cash invested. In rental property analysis, ROI may include cash flow after financing, principal repayment, and sometimes property appreciation.",
          "Using the 300,000 property with 12,000 of net operating income, assume the buyer invests 80,000 of equity and finances the rest. If first-year interest and principal payments total 13,200, cash flow after financing is negative 1,200. If 5,000 of that payment is principal repayment, the investor's wealth build-up before appreciation is 3,800. Divided by 80,000 of equity, that is 4.75% before taxes and price changes.",
          "Because ROI can include financing effects, it is more sensitive to loan terms, equity contribution, interest rate, and repayment schedule. The same property can produce different ROI figures for different buyers.",
        ],
      },
      {
        title: "Why both metrics can disagree",
        paragraphs: [
          "A property can have a strong cap rate but a weak ROI if financing is expensive or the required equity contribution is high. A property can also show a strong leveraged ROI while having a mediocre operating profile, which increases risk if rent falls or costs rise.",
          "For example, a 5% cap rate can still produce negative cash flow if the interest rate and repayment schedule create a large monthly payment. On the other hand, a 3.5% cap rate can show a high equity return if the buyer uses aggressive leverage and assumes appreciation. The first case may be safer than it looks weak, and the second may be riskier than it looks strong.",
          "For that reason, cap rate is often better for comparing the property itself, while ROI is better for understanding the buyer-specific investment result.",
        ],
      },
      {
        title: "Use each metric for the right decision",
        paragraphs: [
          "Use cap rate or operating yield to compare properties before financing. Use ROI and cash flow after financing to decide whether a specific deal fits your capital, debt structure, and risk tolerance.",
          "A practical workflow is to screen properties by gross yield, compare serious candidates by operating yield or cap rate, then evaluate your final shortlist with cash flow after financing and return on equity. This keeps the asset question separate from the financing question.",
          "When a deal only works because of aggressive financing or optimistic appreciation, the analysis should show that clearly instead of hiding it inside one headline return number.",
        ],
      },
      {
        title: "Cap rate, yield and the calculator",
        paragraphs: [
          "Residential investors often use rental yield language instead of cap rate language, but the idea is similar: income compared with price or cost. The important detail is whether the calculation uses gross rent, net operating income, purchase price, or total acquisition cost.",
          "Use the calculator for the property-specific cash flow and yield picture, then use this guide to interpret whether the result describes the property itself or your leveraged investor outcome.",
        ],
      },
      {
        title: "A side-by-side example",
        paragraphs: [
          "Consider two properties priced at 300,000. Property A has 12,000 of net operating income, so its cap rate is 4%. Property B has 15,000 of net operating income, so its cap rate is 5%. Before financing, Property B produces more income for the same price and would normally look stronger on the asset-level income test.",
          "Now assume Property A can be financed with a lower interest rate because it is in a stronger location and has better collateral quality. Property A might produce only 50 per month of negative cash flow, while Property B produces 120 per month of negative cash flow despite the higher cap rate. The better property-level income does not automatically create the better investor outcome.",
          "This is why cap rate and ROI should be read together. Cap rate tells you how efficiently the property generates operating income. ROI tells you what happens to your capital after financing, principal repayment, appreciation assumptions, and cash flow are included.",
        ],
      },
      {
        title: "Be careful with appreciation in ROI",
        paragraphs: [
          "ROI can change dramatically when appreciation is included. If an 80,000 equity investment benefits from 9,000 of annual property appreciation, the return can look excellent even when cash flow is weak. That may be a reasonable upside case, but it should not be confused with income performance.",
          "A disciplined analysis separates current income return, financing effect, principal repayment, and appreciation. When each layer is visible, you can see whether the deal is supported by rent today or mainly by a future resale assumption.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is cap rate the same as rental yield?",
        answer: "They are related but not always identical. Cap rate usually uses net operating income, while rental yield may use gross rent or operating cash flow depending on the formula.",
      },
      {
        question: "Does cap rate include mortgage payments?",
        answer: "No. Cap rate is normally calculated before financing so properties can be compared without buyer-specific loan terms.",
      },
      {
        question: "Why can ROI be higher than cap rate?",
        answer: "ROI can be boosted by leverage, principal repayment, and appreciation assumptions. That can be useful, but it also means ROI depends heavily on financing and assumptions.",
      },
      {
        question: "Which metric should I use first?",
        answer: "Use cap rate or operating yield first to judge the property. Use ROI and cash flow after financing after you know your loan terms and equity contribution.",
      },
    ],
    related: ["rental-property-cash-flow", "rental-yield-formula", "how-to-analyze-an-investment-property"],
  },
  {
    id: "rental-yield-formula",
    locale: "en",
    slug: "rental-yield-formula",
    title: "Rental Yield Formula for Investment Properties",
    description: "Rental yield formulas explained with examples for gross yield, net yield, operating yield, total cost and cash flow checks.",
    intro: "Rental yield compares rental income with the price or total cost of a property. The formula can be simple, but the result is only useful when the inputs match the decision you are trying to make. A quick screen may use purchase price and gross rent. A buying decision should usually use total acquisition cost and recurring owner expenses.",
    sections: [
      {
        title: "Gross rental yield formula",
        paragraphs: [
          "Gross rental yield is annual rent divided by purchase price, multiplied by 100. If a property rents for 1,000 per month and costs 250,000, annual rent is 12,000 and the gross yield is 4.8%.",
          "The formula is: annual rent / purchase price x 100. In this example, 12,000 / 250,000 x 100 = 4.8%. This is fast and helpful for screening, especially when comparing many listings with limited data.",
          "The weakness is that gross yield ignores acquisition costs, vacancies, repairs, operating costs, taxes, and financing. It is a first filter, not a final answer.",
        ],
      },
      {
        title: "Net or operating yield formula",
        paragraphs: [
          "A more practical version uses annual operating cash flow before financing divided by total acquisition cost. Operating cash flow usually means annual net rent minus non-recoverable operating costs, maintenance, management, and other recurring owner costs.",
          "Assume the 250,000 property has 25,000 of acquisition costs. Total acquisition cost is 275,000. Annual rent is 12,000, but annual non-recoverable operating costs, maintenance, and vacancy allowance total 3,300. Operating cash flow before financing is 8,700. Operating yield is 8,700 / 275,000 x 100 = 3.16%.",
          "This makes the yield lower than the gross yield but more useful for judging the property economics. It tells you what the asset produces before debt.",
        ],
      },
      {
        title: "Which cost base should you use?",
        paragraphs: [
          "Use purchase price when you want a quick market comparison. Use total acquisition cost when deciding whether a specific deal works for you. If you expect immediate renovation costs, include them in the cost base or analyze them separately.",
          "For example, Property A costs 250,000 with 25,000 of transaction costs. Property B costs 260,000 with only 10,000 of transaction costs. If both rent for 1,000 per month, Property A has the better gross yield on purchase price, but Property B has the better yield on total cost.",
          "Consistency matters. Comparing one property on purchase price and another on full cost can make the wrong property look better.",
        ],
      },
      {
        title: "Yield is not the same as cash flow",
        paragraphs: [
          "Rental yield measures income relative to cost. Cash flow measures surplus or shortfall in currency terms. A property can have an acceptable yield but negative cash flow after financing if the loan payment is too high.",
          "If operating cash flow is 725 per month and the loan payment is 850, the property is negative 125 per month after financing. If a larger down payment reduces the loan payment to 650, the same property becomes positive 75 per month. The yield before financing did not change, but the monthly result did.",
          "Use yield to compare properties, then use a cash flow model to test whether the rent covers costs, interest, and repayment.",
        ],
      },
      {
        title: "Common formula mistakes",
        paragraphs: [
          "The most common mistake is mixing monthly and annual numbers. If rent is monthly, multiply by 12 before dividing by price. Another common mistake is using gross rent in one property and net rent in another. That makes the comparison unreliable.",
          "A third mistake is ignoring acquisition costs. If purchase costs are material in your market, they should be included when deciding whether to buy. The calculator can help keep purchase price, acquisition costs, rent, operating costs, and financing assumptions in one model.",
        ],
      },
      {
        title: "Worked comparison",
        paragraphs: [
          "Suppose Property A costs 240,000 and rents for 950 per month. Annual rent is 11,400, so gross yield is 4.75%. Property B costs 280,000 and rents for 1,150 per month. Annual rent is 13,800, so gross yield is 4.93%. On gross yield alone, Property B looks slightly better.",
          "Now include costs. Property A has 24,000 of acquisition costs and 2,700 of annual recurring owner costs. Its operating yield is 8,700 / 264,000 = 3.30%. Property B has 36,000 of acquisition costs and 4,500 of annual recurring owner costs. Its operating yield is 9,300 / 316,000 = 2.94%. The ranking changes once the formula uses fuller inputs.",
          "This is why the formula is less important than consistency. Decide whether you are screening or making a purchase decision, then use the same income definition and cost base across every property you compare.",
        ],
      },
      {
        title: "Where financing fits",
        paragraphs: [
          "Financing should usually be analyzed after rental yield, not inside the first yield formula. Otherwise, two buyers can calculate different yields for the same property simply because they use different loans. That makes market comparison harder.",
          "After yield tells you whether the property income is attractive relative to price, cash flow after financing tells you whether your specific loan structure is manageable. Both answers matter, but they answer different questions.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the basic rental yield formula?",
        answer: "The basic gross rental yield formula is annual rent divided by purchase price, multiplied by 100.",
      },
      {
        question: "What is the difference between gross and net rental yield?",
        answer: "Gross yield uses rent before expenses. Net or operating yield subtracts recurring owner costs before comparing income with the property cost.",
      },
      {
        question: "Should acquisition costs be included?",
        answer: "For a serious buying decision, yes. Acquisition costs are real capital committed to the deal and should usually be included in the cost base.",
      },
      {
        question: "Can rental yield be calculated after financing?",
        answer: "You can calculate leveraged returns after financing, but that is closer to return on equity or ROI. Rental yield is usually most useful before financing.",
      },
    ],
    related: ["what-is-a-good-rental-yield", "rental-property-cash-flow", "cap-rate-vs-roi"],
  },
  {
    id: "rental-property-cash-flow",
    locale: "en",
    slug: "rental-property-cash-flow",
    title: "Rental Property Cash Flow Explained",
    description: "Rental property cash flow explained with examples for rent, operating costs, financing, break-even rent and downside risk.",
    intro: "Rental property cash flow is the money left after rent is collected and property-related costs are paid. For financed properties, the most important practical question is often whether cash flow remains positive after the loan payment. Cash flow does not replace yield or ROI, but it tells you whether the investment can carry itself month by month.",
    sections: [
      {
        title: "Start with rental income",
        paragraphs: [
          "The first input is rent. Use current rent if the property is already leased, or conservative market rent if it is vacant. If utilities or operating costs are partly recoverable from the tenant, separate those amounts from true owner costs.",
          "For example, a unit renting for 1,150 per month generates 13,800 of annual rent. If 180 per month of service charges are paid by the owner but 120 is recoverable from the tenant, only 60 should usually reduce owner cash flow. The distinction between paid costs and unrecoverable costs is important.",
          "Do not rely only on optimistic rent assumptions. If the deal depends on a rent increase, model the current case and the improved case separately.",
        ],
      },
      {
        title: "Subtract operating costs",
        paragraphs: [
          "Operating costs can include non-recoverable service charges, maintenance, management, insurance, vacancy allowance, and other recurring expenses. Some costs happen monthly, while others should be annualized.",
          "Assume monthly rent is 1,150. Non-recoverable operating costs are 60, maintenance and management are 140, and vacancy allowance is 50. Operating cash flow before financing is 900 per month, or 10,800 per year.",
          "The result before financing is operating cash flow. This shows whether the property produces surplus income before debt and makes it easier to compare with rental yield or cap rate.",
        ],
      },
      {
        title: "Subtract financing costs",
        paragraphs: [
          "For a financed property, subtract interest and principal repayment to estimate cash flow after financing. Interest is a cost of debt, while principal repayment also builds equity, but both affect monthly liquidity.",
          "If the loan payment is 820 per month, the example property has positive cash flow of 80 per month. If the payment is 1,020, it has negative cash flow of 120 per month. Over a year, that is the difference between receiving 960 and funding a 1,440 shortfall.",
          "A property with negative cash flow is not automatically bad, but the shortfall needs to be intentional, affordable, and justified by other parts of the investment case.",
        ],
      },
      {
        title: "Use break-even rent as a risk check",
        paragraphs: [
          "Break-even rent shows the rent required to cover operating costs and financing. If operating costs are 250 per month and loan payment is 820, break-even rent is 1,070. With market rent at 1,150, the margin is only 80 per month. With market rent at 1,300, the margin is 230.",
          "If the break-even rent is close to or above realistic market rent, the deal has little margin for vacancy, repairs, or rate changes. Break-even rent is one of the quickest ways to see whether the property is fragile.",
          "Cash flow analysis works best when paired with rental yield, cap rate, and sensitivity checks. Together they show income quality, financing pressure, and downside risk.",
        ],
      },
      {
        title: "Plan for irregular expenses",
        paragraphs: [
          "Many cash flow mistakes come from ignoring costs that do not happen every month. A boiler replacement, vacancy period, insurance increase, special assessment, or larger repair can erase a year of small monthly surplus.",
          "If a property shows positive cash flow of only 50 per month, one 1,200 repair equals two years of surplus. That does not automatically make the property bad, but it means the cash reserve and risk tolerance need to match the deal.",
        ],
      },
      {
        title: "Stress-test the monthly result",
        paragraphs: [
          "A cash flow estimate should not stop at one base case. Test a lower-rent case, a higher-cost case, and a financing case with a higher payment. These simple scenarios show whether the property has a real buffer or only works when every input is favorable.",
          "For example, a property with 80 per month of positive cash flow may turn negative 35 if rent is 5% lower. It may turn negative 70 if maintenance is 150 instead of 60. If both happen at the same time, the property could require more than 1,000 per year from the owner despite looking positive in the base case.",
          "This does not mean every property needs large positive cash flow. It means the investor should know the size and probability of the shortfall before buying, and should hold enough reserves to avoid making forced decisions during vacancies or repairs.",
        ],
      },
      {
        title: "Connect cash flow to return",
        paragraphs: [
          "Cash flow is about liquidity, not the full investment return. Principal repayment, tax treatment, and appreciation can improve the long-term outcome even when monthly cash flow is modest. Still, weak cash flow creates pressure because the owner must fund shortfalls from other income.",
          "A balanced analysis treats cash flow as one part of the picture. Use it with rental yield to judge income quality and with cap rate versus ROI thinking to separate property performance from leverage-driven investor returns.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is rental property cash flow?",
        answer: "It is the surplus or shortfall after rent is collected and operating costs and, for financed properties, loan payments are paid.",
      },
      {
        question: "Should principal repayment count as an expense?",
        answer: "For monthly cash flow, yes, because it leaves your bank account. For wealth analysis, principal repayment also builds equity, so it should be shown separately.",
      },
      {
        question: "What is break-even rent?",
        answer: "Break-even rent is the rent needed to cover operating costs and financing payments. It helps show how much margin the property has.",
      },
      {
        question: "Is negative cash flow always a bad sign?",
        answer: "Not always, but it raises the bar. The shortfall should be affordable, planned, and supported by a clear reason such as amortization, location quality, or realistic upside.",
      },
    ],
    related: ["how-to-analyze-an-investment-property", "rental-yield-formula", "cap-rate-vs-roi"],
  },
];

export const germanGuideArticles: GuideArticle[] = [
  {
    id: "how-to-analyze-an-investment-property",
    locale: "de",
    slug: "immobilieninvestment-analysieren",
    title: "Immobilieninvestment analysieren",
    description: "Praxisnaher Leitfaden zur Analyse einer Vermietungsimmobilie: Kaufpreis, Miete, Kosten, Finanzierung, Rendite, Cashflow und Risiko.",
    intro: "Eine gute Analyse eines Immobilieninvestments besteht nicht aus einer einzigen Kennzahl. Entscheidend ist ein strukturierter Blick auf Kaufpreis, Erwerbsnebenkosten, Miete, laufende Kosten, Finanzierung, Cashflow und die Annahmen, die das Ergebnis verbessern oder verschlechtern können. Ziel ist, zu verstehen, was die Immobilie selbst erwirtschaftet, wie stark die Finanzierung den monatlichen Cashflow belastet und wie viel Puffer bleibt, wenn die Realität weniger freundlich ausfällt als die Verkaufsunterlagen.",
    sections: [
      {
        title: "Beginne mit den vollständigen Erwerbskosten",
        paragraphs: [
          "Der Kaufpreis ist nur der Ausgangspunkt. In eine saubere Analyse gehören auch Erwerbsnebenkosten wie Grunderwerbsteuer, Notar, Grundbuch, Makler, Prüfungskosten und Arbeiten, die sofort nach dem Kauf notwendig sind. Wer Renditen nur auf den Kaufpreis rechnet, stellt ein Investment schnell zu positiv dar.",
          "Ein Beispiel: Eine Wohnung kostet 250.000 und die Erwerbsnebenkosten liegen bei 10%. Damit beträgt der Kapitalbedarf vor Renovierung 275.000. Kommen 12.000 für sofortige Reparaturen hinzu, liegt die reale Ausgangsbasis bei 287.000. Eine Jahresnettomiete von 12.000 entspricht 4,8% Bruttomietrendite auf den Kaufpreis, aber nur 4,18% auf die vollständige Kostenbasis.",
          "Diese Unterscheidung ist wichtig, weil auch Nebenkosten und Anfangsinvestitionen gebundenes Kapital sind. Sie müssen über Mieteinnahmen, Wertsteigerung, Tilgung oder eine Kombination daraus wieder verdient werden.",
        ],
      },
      {
        title: "Schätze die Miete konservativ",
        paragraphs: [
          "Nutze eine Miete, die durch Vergleichsangebote, bestehende Mietverträge und die lokale Nachfrage plausibel ist. Wenn ein Investment nur mit einer höheren Marktmiete funktioniert, sollte die aktuelle Situation getrennt von einem möglichen Upside-Szenario betrachtet werden.",
          "Angenommen, die aktuelle Nettomiete beträgt 950 pro Monat, du hältst aber 1.100 für erreichbar. Die Differenz beträgt 150 monatlich oder 1.800 pro Jahr. Bei einem engen Deal kann genau diese Differenz der gesamte positive Cashflow sein. Rechne deshalb zuerst mit 950 und erst danach mit 1.100, wenn die Erhöhung realistisch und rechtlich möglich ist.",
          "Die Bruttomiete hilft beim ersten Screening. Für die Entscheidung zählen aber Nettomiete, umlagefähige Kosten und nicht umlagefähige Eigentümerkosten. Eine Immobilie mit hoher Miete und hohen nicht umlagefähigen Kosten kann schwächer sein als ein Objekt mit niedrigerer Miete, aber klarer Kostenstruktur.",
        ],
      },
      {
        title: "Trenne operativen Cashflow und Finanzierung",
        paragraphs: [
          "Der operative Cashflow zeigt, ob die Immobilie vor Finanzierung funktioniert. Er startet bei der Nettomiete und zieht nicht umlagefähige Betriebskosten, Instandhaltung, Verwaltung, Leerstandsreserve und sonstige Eigentümerkosten ab. Damit siehst du die Einkommensqualität des Objekts unabhängig von deinem Darlehen.",
          "Beispiel: Die monatliche Nettomiete beträgt 1.100. Nicht umlagefähige Kosten liegen bei 120, Instandhaltung und Verwaltung bei 130, zusätzlich planst du 50 Leerstandsreserve. Der operative Cashflow beträgt 800 pro Monat oder 9.600 pro Jahr. Liegt die Kreditrate inklusive Zins und Tilgung bei 920 pro Monat, entsteht nach Finanzierung ein negativer Cashflow von 120 pro Monat, obwohl die Immobilie operativ positiv ist.",
          "Diese Trennung erleichtert den Vergleich. Zwei Käufer können unterschiedliche Eigenkapitalquoten, Zinsen und Tilgungen haben, aber das operative Ergebnis der Immobilie sollte auf derselben Grundlage beurteilt werden.",
        ],
      },
      {
        title: "Bewerte mehrere Kennzahlen zusammen",
        paragraphs: [
          "Keine Kennzahl erzählt die ganze Geschichte. Die Bruttomietrendite ist schnell, die Nettomietrendite realistischer, der Cashflow zeigt die monatliche Tragfähigkeit und die Eigenkapitalrendite zeigt den Effekt von Finanzierung und Tilgung. Je robuster ein Deal ist, desto weniger hängt er von einer optimistischen Annahme ab.",
          "Nimm eine Immobilie mit 275.000 Gesamtkosten und 9.600 operativem Cashflow vor Finanzierung. Die Nettomietrendite liegt bei 3,49%. Wenn du 75.000 Eigenkapital einsetzt, im ersten Jahr 5.000 tilgst und der Cashflow nach Finanzierung bei minus 1.440 liegt, beträgt der Vermögensaufbau vor Wertsteigerung 3.560. Das entspricht 4,75% auf das eingesetzte Eigenkapital vor Steuern und Wertänderungen.",
          "Ergänze immer Sensitivitäten. Was passiert, wenn die Miete 5% niedriger ist, Kosten 10% höher ausfallen, der Zinssatz steigt oder ein Monat Leerstand entsteht? Wenn eine kleine Änderung das Ergebnis kippt, müssen Kaufpreis oder Finanzierung kritisch geprüft werden.",
        ],
        bullets: [
          "Gesamtkosten: Kaufpreis plus Erwerbsnebenkosten und Anfangsinvestitionen.",
          "Bruttomietrendite: Jahresnettomiete geteilt durch Kaufpreis.",
          "Nettomietrendite: operativer Jahres-Cashflow geteilt durch Gesamtkosten.",
          "Cashflow nach Finanzierung: operativer Cashflow minus Zins und Tilgung.",
          "Break-even-Miete: Miete, die Kosten und Finanzierung deckt.",
        ],
      },
      {
        title: "Leite daraus eine Entscheidung ab",
        paragraphs: [
          "Eine Analyse sollte zu einer klaren Entscheidung führen: kaufen, nachverhandeln, Finanzierung anpassen oder Abstand nehmen. Wenn die Zahlen nur mit Best-Case-Miete, niedriger Instandhaltung und hoher Wertsteigerung funktionieren, liegt das Risiko in Annahmen, die du nicht vollständig kontrollierst.",
          "Nutze den Rechner, um Kaufpreis, Miete, Kosten und Finanzierung mit deinen eigenen Zahlen zu modellieren. Vergleiche das Ergebnis anschließend mit den Ratgebern zu Mietrendite, Cashflow und Cap Rate vs ROI, damit jede Kennzahl im richtigen Zusammenhang steht.",
        ],
      },
    ],
    faqs: [
      {
        question: "Welche Zahl sollte ich zuerst prüfen?",
        answer: "Beginne mit den vollständigen Erwerbskosten, nicht nur mit dem Kaufpreis. Diese Basis ist entscheidend für Rendite, Kapitalbedarf und Finanzierungsbedarf.",
      },
      {
        question: "Soll ich mit aktueller Miete oder Marktmiete rechnen?",
        answer: "Rechne zuerst mit der aktuellen Miete und erst danach mit einem separaten Upside-Szenario. So erkennst du, ob der Deal heute funktioniert oder nur nach einer erfolgreichen Mietsteigerung.",
      },
      {
        question: "Muss ein gutes Investment positiven Cashflow haben?",
        answer: "Nicht zwingend. Negativer Cashflow muss aber bezahlbar, geplant und durch andere Faktoren wie Tilgung, Lagequalität oder realistische Wertentwicklung begründet sein.",
      },
      {
        question: "Wie viele Szenarien sind sinnvoll?",
        answer: "Mindestens ein Basisszenario, ein konservatives Szenario mit niedrigerer Miete oder höheren Kosten und ein Finanzierungsszenario mit stärkerer Belastung.",
      },
    ],
    related: ["rental-yield-formula", "rental-property-cash-flow", "cap-rate-vs-roi"],
  },
  {
    id: "what-is-a-good-rental-yield",
    locale: "de",
    slug: "gute-mietrendite",
    title: "Was ist eine gute Mietrendite?",
    description: "Erklärt, was eine gute Mietrendite ausmacht, mit Beispielen zu Bruttomietrendite, Nettomietrendite, Marktvergleich, Cashflow und Risiko.",
    intro: "Eine gute Mietrendite passt zum lokalen Markt, deckt realistische Kosten, trägt die Finanzierung und lässt trotzdem Risikopuffer. Die richtige Höhe hängt von Lage, Objektart, Steuern, Instandhaltung, Leerstand, Finanzierung und den Erwartungen an die Wertentwicklung ab.",
    sections: [
      {
        title: "Die Bruttomietrendite ist ein erster Filter",
        paragraphs: [
          "Die Bruttomietrendite vergleicht die Jahresnettomiete mit dem Kaufpreis. Sie eignet sich, um viele Angebote schnell zu filtern, weil nur zwei Eingaben nötig sind. Sie ignoriert aber Erwerbsnebenkosten, Betriebskosten, Leerstand, Reparaturen und Finanzierung.",
          "Beispiel: Eine Wohnung bringt 1.200 Nettomiete pro Monat, also 14.400 pro Jahr. Bei einem Kaufpreis von 300.000 ergibt das 4,8% Bruttomietrendite. In einem Markt kann das attraktiv sein, in einem anderen schwach. Die Prozentzahl allein sagt noch nicht, ob die Immobilie nach Kosten und Kreditrate tragfähig ist.",
          "Gerade weil die Bruttomietrendite so einfach ist, kann sie ein Objekt zu positiv darstellen. Zwei Immobilien mit gleicher Bruttomietrendite können völlig unterschiedliche Ergebnisse liefern, wenn Kosten, Instandhaltung oder Erwerbsnebenkosten abweichen.",
        ],
      },
      {
        title: "Die Nettomietrendite ist aussagekräftiger",
        paragraphs: [
          "Für eine Kaufentscheidung ist die Nettomietrendite meistens wichtiger. Dabei werden laufende Eigentümerkosten von der Miete abgezogen und der verbleibende operative Jahres-Cashflow ins Verhältnis zu den vollständigen Erwerbskosten gesetzt.",
          "Beim 300.000-Beispiel kommen 30.000 Erwerbsnebenkosten hinzu. Die Gesamtkosten liegen also bei 330.000. Die Jahresnettomiete beträgt 14.400, aber nicht umlagefähige Kosten, Instandhaltung und Leerstandsreserve summieren sich auf 4.200 pro Jahr. Der operative Cashflow vor Finanzierung beträgt 10.200. Die Nettomietrendite liegt damit bei 3,09%.",
          "Diese niedrigere Zahl ist meist nützlicher als die 4,8% Bruttomietrendite, weil sie zeigt, was das Objekt nach wiederkehrenden Kosten vor Finanzierung erwirtschaftet.",
        ],
      },
      {
        title: "Der Marktvergleich entscheidet",
        paragraphs: [
          "Niedrigere Renditen in starken Lagen können durch geringeres Leerstandsrisiko, bessere Liquidität, stabilere Mieterstruktur oder höhere erwartete Wertentwicklung begründet sein. Höhere Renditen können mehr laufendes Einkommen bieten, gehen aber oft mit mehr Instandhaltung, höherem Leerstand oder schwierigerem Wiederverkauf einher.",
          "Eine 3,5% Nettomietrendite in einer stabilen Innenstadtlage kann vernünftig sein, wenn die Finanzierung konservativ ist. Eine 7% Bruttomietrendite in einem schwächeren Markt kann trotzdem unattraktiv sein, wenn das Gebäude regelmäßig Kapital bindet oder die Mieten unsicher sind.",
          "Eine gute Mietrendite ist deshalb nicht automatisch die höchste Mietrendite. Gut ist eine Rendite, die nach realistischen Kosten und Stresstests noch überzeugt.",
        ],
      },
      {
        title: "Rendite und Cashflow gehören zusammen",
        paragraphs: [
          "Die Mietrendite hilft beim Vergleich von Immobilien. Der monatliche Cashflow zeigt, ob das Objekt mit deiner Finanzierung tragfähig ist. Eine Immobilie kann eine akzeptable Nettomietrendite haben und trotzdem negativen Cashflow erzeugen, wenn Zins und Tilgung hoch sind.",
          "Wenn 10.200 operativer Jahres-Cashflow 850 pro Monat entsprechen und die Kreditrate 980 beträgt, liegt der Cashflow vor Steuern bei minus 130 pro Monat. Bei einer Rate von 760 ist derselbe Deal plus 90 pro Monat. Die Rendite vor Finanzierung ist gleich, die Liquidität aber nicht.",
          "Vergleiche vor dem Kauf Bruttomietrendite, Nettomietrendite, Cashflow nach Finanzierung und Break-even-Miete. Zusammen zeigen sie deutlich mehr als eine einzelne Kennzahl.",
        ],
      },
      {
        title: "Baue dir einen lokalen Vergleichswert",
        paragraphs: [
          "Ein praktischer Ansatz ist ein kleiner lokaler Benchmark. Suche fünf bis zehn vergleichbare Wohnungen in ähnlicher Lage, Größe, Ausstattung und Mieterstruktur. Schätze zuerst die Bruttomietrendite und prüfe bei den interessanten Objekten anschließend Kosten und Erwerbsnebenkosten.",
          "Wenn vergleichbare Objekte zwischen 4,2% und 4,8% Bruttomietrendite liegen, ist ein Angebot mit 5,3% interessant, aber nicht automatisch besser. Die höhere Rendite kann auf einen guten Preis hinweisen, aber auch auf Instandhaltungsstau, zu optimistische Miete, schwächere Mikrolage oder höheres Leerstandsrisiko.",
          "Der lokale Vergleich schützt vor pauschalen Faustregeln. Eine Rendite, die in einer Stadt stark ist, kann in einer anderen durchschnittlich sein.",
        ],
      },
      {
        title: "Vergiss größere Investitionen nicht",
        paragraphs: [
          "Viele Renditerechnungen unterschätzen größere Ausgaben, weil sie nicht monatlich auftreten. Dach, Heizung, Fassade, Gemeinschaftseigentum, Einbaugeräte oder Sonderumlagen können die reale Rendite stark reduzieren.",
          "Wenn eine Immobilie 2.400 jährlichen Überschuss zeigt, du aber in fünf Jahren 12.000 Reparaturen erwartest, entspricht das rechnerisch 2.400 pro Jahr. Der scheinbare Überschuss ist dann im Grunde die Reparaturrücklage. Eine gute Mietrendite sollte auch solche unregelmäßigen Kosten tragen können.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ist eine höhere Mietrendite immer besser?",
        answer: "Nein. Eine höhere Rendite kann mit höherem Leerstand, mehr Instandhaltung, schwächerer Lage oder höherem Wiederverkaufsrisiko verbunden sein.",
      },
      {
        question: "Soll ich Brutto- oder Nettomietrendite nutzen?",
        answer: "Für das schnelle Screening ist die Bruttomietrendite nützlich. Für Entscheidungen ist die Nettomietrendite meist aussagekräftiger, weil laufende Eigentümerkosten berücksichtigt werden.",
      },
      {
        question: "Kann eine gute Mietrendite trotzdem negativen Cashflow haben?",
        answer: "Ja. Wenn die Finanzierung teuer oder die Tilgung hoch ist, kann der monatliche Cashflow trotz akzeptabler Objektrendite negativ sein.",
      },
      {
        question: "Womit sollte ich die Mietrendite vergleichen?",
        answer: "Mit ähnlichen lokalen Objekten, Finanzierungskosten, Risiko, Instandhaltungsbedarf und alternativen Einsatzmöglichkeiten deines Eigenkapitals.",
      },
    ],
    related: ["rental-yield-formula", "rental-property-cash-flow", "how-to-analyze-an-investment-property"],
  },
  {
    id: "cap-rate-vs-roi",
    locale: "de",
    slug: "cap-rate-vs-roi",
    title: "Cap Rate vs ROI: der Unterschied",
    description: "Cap Rate und ROI bei Immobilien erklärt: Objektkennzahl, Finanzierungseffekt, Cashflow, Tilgung und Eigenkapitalrendite mit Beispielen.",
    intro: "Cap Rate und ROI beantworten unterschiedliche Fragen. Die Cap Rate betrachtet die Immobilie vor Finanzierung. Der ROI betrachtet das Ergebnis für den Investor nach Eigenkapital, Finanzierung, Tilgung und teilweise Wertentwicklung. Wer beides vermischt, kann ein Objekt besser oder schlechter einschätzen, als es wirklich ist.",
    sections: [
      {
        title: "Die Cap Rate bewertet das Objekt",
        paragraphs: [
          "Die Cap Rate wird üblicherweise als Net Operating Income geteilt durch Kaufpreis oder Marktwert berechnet. Sie soll zeigen, wie viel laufendes Einkommen die Immobilie unabhängig von der konkreten Finanzierung erzeugt.",
          "Beispiel: Eine Immobilie erzielt 18.000 Jahresmiete und hat 6.000 operative Kosten vor Finanzierung. Das Net Operating Income beträgt 12.000. Bei einem Kaufpreis von 300.000 liegt die Cap Rate bei 4%. Erzielt ein vergleichbares Objekt 15.000 NOI bei gleichem Preis, liegt die Cap Rate bei 5%.",
          "Damit eignet sich die Cap Rate zum Vergleich von Objekten. Bei ähnlicher Lage und ähnlichem Risiko zeigt sie, welches Objekt mehr operatives Einkommen im Verhältnis zum Preis liefert.",
        ],
      },
      {
        title: "Der ROI misst das Investorenergebnis",
        paragraphs: [
          "Der Return on Investment vergleicht den Gewinn oder Vermögensaufbau mit dem eingesetzten Kapital. Bei Immobilien kann der ROI Cashflow nach Finanzierung, Tilgung und teilweise Wertsteigerung enthalten.",
          "Nutzen wir das 300.000-Objekt mit 12.000 NOI. Der Käufer setzt 80.000 Eigenkapital ein und finanziert den Rest. Wenn Zins und Tilgung im ersten Jahr 13.200 betragen, liegt der Cashflow nach Finanzierung bei minus 1.200. Enthält die Rate 5.000 Tilgung, beträgt der Vermögensaufbau vor Wertsteigerung 3.800. Auf 80.000 Eigenkapital sind das 4,75% vor Steuern und Wertänderungen.",
          "Weil der ROI Finanzierungseffekte enthält, reagiert er stark auf Eigenkapitalquote, Zinssatz, Tilgung und Darlehensstruktur. Dasselbe Objekt kann für zwei Käufer unterschiedliche ROI-Werte haben.",
        ],
      },
      {
        title: "Warum beide Kennzahlen auseinanderlaufen",
        paragraphs: [
          "Ein Objekt kann eine starke Cap Rate haben und trotzdem einen schwachen ROI liefern, wenn die Finanzierung teuer ist oder sehr viel Eigenkapital gebunden wird. Umgekehrt kann ein Objekt mit mittelmäßiger Objektrendite durch hohen Fremdkapitaleinsatz eine starke Eigenkapitalrendite zeigen, aber mehr Risiko tragen.",
          "Eine 5% Cap Rate kann bei hoher Kreditrate negativen Cashflow erzeugen. Eine 3,5% Cap Rate kann mit aggressiver Finanzierung und angenommener Wertsteigerung eine hohe Eigenkapitalrendite zeigen. Der erste Fall ist möglicherweise solider, als er aussieht; der zweite riskanter, als die ROI-Zahl vermuten lässt.",
          "Deshalb ist die Cap Rate eher eine Objektkennzahl, während ROI und Eigenkapitalrendite das käuferspezifische Ergebnis beschreiben.",
        ],
      },
      {
        title: "Nutze jede Kennzahl für die passende Entscheidung",
        paragraphs: [
          "Nutze Cap Rate oder Nettomietrendite, um Immobilien vor Finanzierung zu vergleichen. Nutze ROI, Eigenkapitalrendite und Cashflow nach Finanzierung, um zu prüfen, ob ein konkreter Deal zu deinem Kapital, deiner Finanzierung und deinem Risiko passt.",
          "Ein sinnvoller Ablauf: zuerst über Bruttomietrendite screenen, ernsthafte Kandidaten über Nettomietrendite oder Cap Rate vergleichen und die finale Auswahl mit Cashflow nach Finanzierung und Eigenkapitalrendite prüfen.",
          "Wenn ein Deal nur durch aggressive Finanzierung oder optimistische Wertsteigerung funktioniert, sollte die Analyse das sichtbar machen, statt es in einer einzigen Renditekennzahl zu verstecken.",
        ],
      },
      {
        title: "Cap Rate, Mietrendite und Rechner",
        paragraphs: [
          "Bei Wohnimmobilien sprechen Investoren im deutschsprachigen Raum häufiger von Mietrendite als von Cap Rate. Die Logik ist ähnlich: Einkommen wird ins Verhältnis zu Kaufpreis oder Gesamtkosten gesetzt. Entscheidend ist, ob Bruttomiete, operativer Cashflow, Kaufpreis oder vollständige Erwerbskosten verwendet werden.",
          "Nutze den Rechner für die objektbezogene Cashflow- und Renditeanalyse und diesen Ratgeber, um einzuordnen, ob die Kennzahl das Objekt selbst oder dein gehebeltes Investorenergebnis beschreibt.",
        ],
      },
      {
        title: "Ein Vergleich zweier Objekte",
        paragraphs: [
          "Zwei Immobilien kosten jeweils 300.000. Objekt A erzielt 12.000 NOI und hat damit 4% Cap Rate. Objekt B erzielt 15.000 NOI und hat 5% Cap Rate. Vor Finanzierung sieht Objekt B stärker aus, weil es mehr Einkommen zum gleichen Preis liefert.",
          "Nun kann Objekt A wegen stärkerer Lage und besserer Beleihbarkeit günstiger finanziert werden. Objekt A erzeugt vielleicht nur 50 negativen Cashflow pro Monat, während Objekt B trotz höherer Cap Rate 120 negativen Cashflow hat. Die bessere Objektkennzahl führt nicht automatisch zum besseren Investorenergebnis.",
          "Cap Rate und ROI sollten deshalb zusammen gelesen werden: Die Cap Rate zeigt die Einkommensqualität des Objekts, der ROI zeigt, was nach Finanzierung, Tilgung, Wertannahmen und Cashflow mit deinem Kapital passiert.",
        ],
      },
      {
        title: "Vorsicht mit Wertsteigerung im ROI",
        paragraphs: [
          "Der ROI kann stark steigen, wenn Wertsteigerung eingerechnet wird. Wenn 80.000 Eigenkapital von 9.000 jährlicher Wertsteigerung profitieren, sieht die Rendite schnell sehr gut aus, auch wenn der laufende Cashflow schwach ist.",
          "Diszipliniert ist es, laufende Rendite, Finanzierungseffekt, Tilgung und Wertsteigerung getrennt auszuweisen. Dann wird sichtbar, ob der Deal heute durch Miete getragen wird oder vor allem auf einen späteren Verkauf setzt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ist Cap Rate dasselbe wie Mietrendite?",
        answer: "Nicht ganz. Die Cap Rate nutzt meist Net Operating Income, während Mietrendite je nach Formel Bruttomiete oder operativen Cashflow verwenden kann.",
      },
      {
        question: "Enthält die Cap Rate die Kreditrate?",
        answer: "Normalerweise nein. Die Cap Rate wird vor Finanzierung berechnet, damit Objekte ohne käuferspezifische Darlehensbedingungen vergleichbar sind.",
      },
      {
        question: "Warum kann der ROI höher sein als die Cap Rate?",
        answer: "Der ROI kann durch Fremdkapital, Tilgung und Wertsteigerungsannahmen steigen. Das kann sinnvoll sein, macht den ROI aber abhängig von Finanzierung und Annahmen.",
      },
      {
        question: "Welche Kennzahl nutze ich zuerst?",
        answer: "Zuerst Cap Rate oder Nettomietrendite zur Objektbewertung. Danach ROI und Cashflow nach Finanzierung, wenn Eigenkapital und Darlehen feststehen.",
      },
    ],
    related: ["rental-property-cash-flow", "rental-yield-formula", "how-to-analyze-an-investment-property"],
  },
  {
    id: "rental-yield-formula",
    locale: "de",
    slug: "mietrendite-formel",
    title: "Mietrendite berechnen: Formel und Beispiele",
    description: "Formeln für Bruttomietrendite, Nettomietrendite und operative Rendite mit Beispielen zu Kaufpreis, Erwerbsnebenkosten, Kosten und Cashflow.",
    intro: "Die Mietrendite setzt Mieteinnahmen ins Verhältnis zum Kaufpreis oder zu den vollständigen Erwerbskosten einer Immobilie. Die Formel ist einfach, aber nur dann nützlich, wenn die Eingaben zur Entscheidung passen. Für ein erstes Screening reichen Kaufpreis und Miete. Für eine Kaufentscheidung sollten Erwerbsnebenkosten und laufende Eigentümerkosten einbezogen werden.",
    sections: [
      {
        title: "Formel für die Bruttomietrendite",
        paragraphs: [
          "Die Bruttomietrendite lautet: Jahresnettomiete geteilt durch Kaufpreis mal 100. Wenn eine Wohnung 1.000 pro Monat einbringt und 250.000 kostet, beträgt die Jahresnettomiete 12.000 und die Bruttomietrendite 4,8%.",
          "Die Rechnung ist also: 12.000 / 250.000 x 100 = 4,8%. Das ist schnell und hilfreich, wenn viele Angebote mit wenigen Daten verglichen werden.",
          "Der Nachteil: Die Bruttomietrendite ignoriert Erwerbsnebenkosten, Leerstand, Reparaturen, nicht umlagefähige Kosten, Steuern und Finanzierung. Sie ist ein erster Filter, keine finale Entscheidung.",
        ],
      },
      {
        title: "Formel für Nettomietrendite oder operative Rendite",
        paragraphs: [
          "Praxisnäher ist die Nettomietrendite: operativer Jahres-Cashflow vor Finanzierung geteilt durch vollständige Erwerbskosten mal 100. Operativer Cashflow bedeutet meist Jahresnettomiete minus nicht umlagefähige Kosten, Instandhaltung, Verwaltung, Leerstandsreserve und weitere laufende Eigentümerkosten.",
          "Angenommen, die 250.000-Wohnung hat 25.000 Erwerbsnebenkosten. Die Gesamtkosten liegen bei 275.000. Die Jahresnettomiete beträgt 12.000, aber laufende nicht umlagefähige Kosten und Rücklagen betragen 3.300. Der operative Cashflow vor Finanzierung liegt bei 8.700. Die Nettomietrendite beträgt 8.700 / 275.000 x 100 = 3,16%.",
          "Diese Zahl ist niedriger als die Bruttomietrendite, aber deutlich aussagekräftiger. Sie zeigt, was das Objekt vor Finanzierung wirklich erwirtschaftet.",
        ],
      },
      {
        title: "Welche Kostenbasis ist richtig?",
        paragraphs: [
          "Nutze den Kaufpreis, wenn du schnell einen Marktvergleich machen willst. Nutze vollständige Erwerbskosten, wenn du entscheiden willst, ob ein konkretes Objekt für dich funktioniert. Geplante Sofortmaßnahmen sollten entweder in die Kostenbasis aufgenommen oder separat analysiert werden.",
          "Beispiel: Objekt A kostet 250.000 plus 25.000 Nebenkosten. Objekt B kostet 260.000 plus nur 10.000 Nebenkosten. Beide bringen 1.000 Miete pro Monat. Auf Kaufpreis wirkt Objekt A besser, auf vollständige Kostenbasis kann Objekt B attraktiver sein.",
          "Wichtig ist Konsistenz. Wer ein Objekt auf Kaufpreis und ein anderes auf Gesamtkosten rechnet, vergleicht nicht sauber.",
        ],
      },
      {
        title: "Mietrendite ist nicht Cashflow",
        paragraphs: [
          "Die Mietrendite misst Einkommen im Verhältnis zu Kosten. Cashflow misst den monatlichen Überschuss oder Fehlbetrag in Euro. Ein Objekt kann eine akzeptable Nettomietrendite haben und nach Finanzierung trotzdem negativ sein.",
          "Wenn der operative Cashflow 725 pro Monat beträgt und die Kreditrate 850, liegt der Cashflow nach Finanzierung bei minus 125. Reduziert mehr Eigenkapital die Rate auf 650, wird derselbe Deal plus 75 pro Monat. Die Objektrendite vor Finanzierung bleibt gleich, das monatliche Ergebnis ändert sich.",
          "Nutze die Mietrendite zum Vergleich von Immobilien und den Cashflow, um zu prüfen, ob Miete, Kosten, Zins und Tilgung zusammen tragfähig sind.",
        ],
      },
      {
        title: "Häufige Fehler bei der Formel",
        paragraphs: [
          "Der häufigste Fehler ist das Mischen von Monats- und Jahreszahlen. Eine Monatsmiete muss mit 12 multipliziert werden, bevor sie durch den Kaufpreis geteilt wird. Ein weiterer Fehler ist, bei einem Objekt Bruttomiete und beim anderen Nettomiete zu verwenden.",
          "Auch Erwerbsnebenkosten werden oft vergessen. In Märkten mit hohen Kaufnebenkosten gehören sie in eine ernsthafte Kaufentscheidung. Der Rechner hilft, Kaufpreis, Erwerbsnebenkosten, Miete, laufende Kosten und Finanzierung in einem Modell zusammenzuführen.",
        ],
      },
      {
        title: "Vergleich zweier Objekte",
        paragraphs: [
          "Objekt A kostet 240.000 und bringt 950 Miete pro Monat. Die Jahresnettomiete beträgt 11.400, die Bruttomietrendite 4,75%. Objekt B kostet 280.000 und bringt 1.150 pro Monat. Die Jahresnettomiete beträgt 13.800, die Bruttomietrendite 4,93%. Brutto sieht Objekt B leicht besser aus.",
          "Jetzt kommen Kosten dazu. Objekt A hat 24.000 Erwerbsnebenkosten und 2.700 jährliche Eigentümerkosten. Die operative Rendite beträgt 8.700 / 264.000 = 3,30%. Objekt B hat 36.000 Erwerbsnebenkosten und 4.500 jährliche Kosten. Die operative Rendite beträgt 9.300 / 316.000 = 2,94%. Die Rangfolge dreht sich.",
          "Die Formel ist also nur so gut wie ihre Eingaben. Entscheide zuerst, ob du screenst oder kaufen willst, und nutze dann über alle Objekte hinweg dieselbe Definition von Miete und Kostenbasis.",
        ],
      },
      {
        title: "Wo die Finanzierung dazugehört",
        paragraphs: [
          "Die Finanzierung sollte meist nach der Mietrendite analysiert werden, nicht in der ersten Renditeformel. Sonst erhalten zwei Käufer für dasselbe Objekt unterschiedliche Renditen, nur weil sie unterschiedliche Darlehen nutzen.",
          "Nachdem die Mietrendite zeigt, ob das Objekt im Verhältnis zum Preis attraktiv ist, zeigt der Cashflow nach Finanzierung, ob deine konkrete Darlehensstruktur tragfähig ist. Beide Antworten sind wichtig, aber sie beantworten unterschiedliche Fragen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie lautet die einfache Mietrendite-Formel?",
        answer: "Die Bruttomietrendite ist Jahresnettomiete geteilt durch Kaufpreis mal 100.",
      },
      {
        question: "Was ist der Unterschied zwischen Brutto- und Nettomietrendite?",
        answer: "Die Bruttomietrendite nutzt Miete vor Kosten. Die Nettomietrendite zieht laufende Eigentümerkosten ab und setzt den operativen Cashflow ins Verhältnis zu den Kosten.",
      },
      {
        question: "Sollte ich Erwerbsnebenkosten einbeziehen?",
        answer: "Für eine Kaufentscheidung ja. Erwerbsnebenkosten sind reales gebundenes Kapital und gehören in die Kostenbasis.",
      },
      {
        question: "Kann man Mietrendite nach Finanzierung berechnen?",
        answer: "Man kann gehebelte Renditen berechnen, aber das ist eher Eigenkapitalrendite oder ROI. Mietrendite ist vor Finanzierung am besten vergleichbar.",
      },
    ],
    related: ["what-is-a-good-rental-yield", "rental-property-cash-flow", "cap-rate-vs-roi"],
  },
  {
    id: "rental-property-cash-flow",
    locale: "de",
    slug: "cashflow-vermietungsimmobilie",
    title: "Cashflow bei Vermietungsimmobilien erklärt",
    description: "Cashflow bei Vermietungsimmobilien mit Beispielen zu Miete, laufenden Kosten, Finanzierung, Break-even-Miete und Risiko erklärt.",
    intro: "Der Cashflow einer Vermietungsimmobilie ist der Betrag, der nach Mieteinnahmen und immobilienbezogenen Ausgaben übrig bleibt oder fehlt. Bei finanzierten Immobilien ist die entscheidende praktische Frage oft, ob der Cashflow nach Zins und Tilgung positiv bleibt. Cashflow ersetzt nicht Mietrendite oder ROI, zeigt aber, ob sich das Investment monatlich selbst trägt.",
    sections: [
      {
        title: "Starte mit der Miete",
        paragraphs: [
          "Die erste Eingabe ist die Miete. Nutze die aktuelle Nettomiete, wenn die Immobilie vermietet ist, oder eine konservative Marktmiete, wenn sie leer steht. Wenn Betriebskosten teilweise auf Mieter umgelegt werden, trenne gezahlte Kosten von tatsächlichen Eigentümerkosten.",
          "Beispiel: Eine Wohnung bringt 1.150 Nettomiete pro Monat, also 13.800 pro Jahr. Der Eigentümer zahlt 180 monatliche Nebenkosten, davon sind 120 umlagefähig. Dann belasten nur 60 den Eigentümer-Cashflow. Diese Trennung ist zentral.",
          "Verlasse dich nicht nur auf optimistische Mietannahmen. Wenn der Deal von einer Mietsteigerung abhängt, rechne die aktuelle Situation und das verbesserte Szenario getrennt.",
        ],
      },
      {
        title: "Ziehe laufende Kosten ab",
        paragraphs: [
          "Laufende Kosten können nicht umlagefähige Betriebskosten, Instandhaltung, Verwaltung, Versicherung, Leerstandsreserve und weitere wiederkehrende Ausgaben umfassen. Manche Kosten fallen monatlich an, andere sollten auf Jahresbasis umgelegt werden.",
          "Angenommen, die monatliche Nettomiete beträgt 1.150. Nicht umlagefähige Kosten liegen bei 60, Instandhaltung und Verwaltung bei 140, Leerstandsreserve bei 50. Der operative Cashflow vor Finanzierung beträgt 900 pro Monat oder 10.800 pro Jahr.",
          "Dieses Ergebnis zeigt, ob die Immobilie vor Darlehen Überschuss erwirtschaftet. Es ist auch die Grundlage für den Vergleich mit Mietrendite oder Cap Rate.",
        ],
      },
      {
        title: "Ziehe Finanzierungskosten ab",
        paragraphs: [
          "Bei einer finanzierten Immobilie werden Zins und Tilgung abgezogen, um den Cashflow nach Finanzierung zu ermitteln. Zinsen sind Finanzierungskosten, Tilgung baut Eigenkapital auf, beide belasten aber die monatliche Liquidität.",
          "Wenn die Kreditrate 820 pro Monat beträgt, hat das Beispielobjekt plus 80 monatlichen Cashflow. Bei 1.020 Kreditrate liegt der Cashflow bei minus 120. Auf ein Jahr gesehen ist das der Unterschied zwischen 960 Überschuss und 1.440 Zuschussbedarf.",
          "Negativer Cashflow ist nicht automatisch ein Ausschlusskriterium. Er muss aber geplant, bezahlbar und durch andere Teile der Investmentthese begründet sein.",
        ],
      },
      {
        title: "Nutze die Break-even-Miete als Risikoprüfung",
        paragraphs: [
          "Die Break-even-Miete zeigt, welche Miete nötig ist, um laufende Kosten und Finanzierung zu decken. Wenn laufende Kosten 250 pro Monat und die Kreditrate 820 betragen, liegt die Break-even-Miete bei 1.070. Bei 1.150 Marktmiete beträgt der Puffer nur 80. Bei 1.300 Marktmiete sind es 230.",
          "Liegt die Break-even-Miete nahe an der realistischen Marktmiete oder darüber, hat der Deal wenig Spielraum für Leerstand, Reparaturen oder Zinsänderungen. Diese Kennzahl zeigt schnell, wie fragil ein Investment ist.",
          "Cashflow-Analyse funktioniert am besten zusammen mit Mietrendite, Cap Rate und Sensitivitäten. Gemeinsam zeigen sie Einkommensqualität, Finanzierungsdruck und Abwärtsrisiko.",
        ],
      },
      {
        title: "Plane unregelmäßige Ausgaben ein",
        paragraphs: [
          "Viele Cashflow-Rechnungen scheitern an Kosten, die nicht jeden Monat auftreten. Heizung, Leerstand, Versicherungsanstieg, Sonderumlage oder größere Reparaturen können ein Jahr kleiner Überschüsse aufzehren.",
          "Wenn ein Objekt nur 50 positiven Cashflow pro Monat zeigt, entspricht eine Reparatur von 1.200 bereits zwei Jahren Überschuss. Das macht die Immobilie nicht automatisch schlecht, aber Rücklagen und Risikotoleranz müssen dazu passen.",
        ],
      },
      {
        title: "Teste den monatlichen Cashflow",
        paragraphs: [
          "Eine Cashflow-Rechnung sollte nicht beim Basisszenario enden. Prüfe eine niedrigere Miete, höhere Kosten und eine stärkere Finanzierungsbelastung. Diese einfachen Szenarien zeigen, ob echter Puffer vorhanden ist oder ob der Deal nur bei idealen Annahmen funktioniert.",
          "Ein Objekt mit plus 80 pro Monat kann bei 5% niedrigerer Miete auf minus 35 fallen. Steigt die Instandhaltung von 60 auf 150, kann es minus 70 werden. Treten beide Effekte gemeinsam auf, benötigt der Eigentümer trotz positivem Basisszenario über 1.000 pro Jahr Zuschuss.",
          "Nicht jede Immobilie braucht hohen positiven Cashflow. Aber der Investor sollte vor dem Kauf wissen, wie groß ein möglicher Fehlbetrag ist und genügend Rücklagen halten.",
        ],
      },
      {
        title: "Verbinde Cashflow mit Rendite",
        paragraphs: [
          "Cashflow beschreibt Liquidität, nicht die gesamte Rendite. Tilgung, steuerliche Behandlung und Wertentwicklung können das langfristige Ergebnis verbessern, auch wenn der monatliche Cashflow knapp ist. Schwacher Cashflow erzeugt trotzdem Druck, weil Fehlbeträge aus anderem Einkommen finanziert werden müssen.",
          "Eine ausgewogene Analyse betrachtet Cashflow als einen Baustein. Nutze ihn zusammen mit Mietrendite zur Beurteilung der Einkommensqualität und mit Cap Rate vs ROI, um Objektleistung und hebelgetriebene Eigenkapitalrendite zu trennen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was ist Cashflow bei einer Vermietungsimmobilie?",
        answer: "Cashflow ist der Überschuss oder Fehlbetrag nach Mieteinnahmen, laufenden Kosten und bei finanzierten Objekten nach Zins und Tilgung.",
      },
      {
        question: "Zählt Tilgung als Ausgabe?",
        answer: "Für den monatlichen Cashflow ja, weil sie Liquidität bindet. Für die Vermögensanalyse sollte Tilgung separat gezeigt werden, weil sie Eigenkapital aufbaut.",
      },
      {
        question: "Was ist die Break-even-Miete?",
        answer: "Die Break-even-Miete ist die Miete, die nötig ist, um laufende Kosten und Finanzierung zu decken. Sie zeigt den Sicherheitspuffer.",
      },
      {
        question: "Ist negativer Cashflow immer schlecht?",
        answer: "Nicht immer, aber er erhöht die Anforderungen. Der Fehlbetrag sollte bezahlbar, geplant und durch Tilgung, Lagequalität oder realistische Entwicklung begründet sein.",
      },
    ],
    related: ["how-to-analyze-an-investment-property", "rental-yield-formula", "cap-rate-vs-roi"],
  },
];

export const allGuideArticles = [...guideArticles, ...germanGuideArticles];

export const guideIndexContent: Record<Locale, { title: string; description: string; intro: string; ctaTitle: string; ctaText: string; ctaLabel: string; eyebrow: string; calculatorLabel: string; guidesLabel: string }> = {
  en: {
    title: "Investment Property Guides",
    description: "Plain-English guides to rental yield, cash flow, cap rate, ROI and investment property analysis, with practical examples for comparing rental deals.",
    intro: "Start with the full investment property analysis guide, then use the rental yield, cash flow, cap rate and ROI articles to check specific parts of a deal. When you are ready to test your own numbers, open the",
    ctaTitle: "Analyze a rental property",
    ctaText: "Use the calculator to turn these concepts into property-specific cash flow, rental yield and financing numbers.",
    ctaLabel: "Open the calculator",
    eyebrow: "Guides",
    calculatorLabel: "Calculator",
    guidesLabel: "Guides",
  },
  de: {
    title: "Ratgeber für Immobilieninvestments",
    description: "Praxisnahe Ratgeber zu Mietrendite, Cashflow, Cap Rate, ROI, Finanzierung und Analyse von Vermietungsimmobilien.",
    intro: "Starte mit der vollständigen Analyse eines Immobilieninvestments und nutze danach die Ratgeber zu Mietrendite, Cashflow, Cap Rate und ROI, um einzelne Teile eines Deals zu prüfen. Wenn du deine eigenen Zahlen testen willst, öffne den",
    ctaTitle: "Vermietungsimmobilie analysieren",
    ctaText: "Nutze den Rechner, um aus diesen Konzepten konkrete Cashflow-, Mietrendite- und Finanzierungszahlen für dein Objekt zu machen.",
    ctaLabel: "Rechner öffnen",
    eyebrow: "Ratgeber",
    calculatorLabel: "Rechner",
    guidesLabel: "Ratgeber",
  },
};

export const guideIndexTitle = guideIndexContent.en.title;
export const guideIndexDescription = guideIndexContent.en.description;

export function guideIndexPath(locale: Locale) {
  return locale === "de" ? "/ratgeber" : "/guides";
}

export function getGuideArticles(locale: Locale) {
  return locale === "de" ? germanGuideArticles : guideArticles;
}

export function getGuideArticle(locale: Locale, slug: string) {
  return getGuideArticles(locale).find((article) => article.slug === slug);
}

export function getGuideArticleById(locale: Locale, id: GuideId) {
  return getGuideArticles(locale).find((article) => article.id === id);
}

export function getRelatedGuides(article: GuideArticle) {
  return article.related
    .map((id) => getGuideArticleById(article.locale, id))
    .filter((related): related is GuideArticle => Boolean(related));
}

export function guidePath(article: GuideArticle) {
  return `/${article.locale}/${article.slug}`;
}

export function guideAlternatesById(id: GuideId) {
  const de = getGuideArticleById("de", id);
  const en = getGuideArticleById("en", id);

  return {
    de: de ? `/${de.locale}/${de.slug}` : undefined,
    en: en ? `/${en.locale}/${en.slug}` : undefined,
  };
}
