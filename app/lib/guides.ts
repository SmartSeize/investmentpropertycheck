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
  faqs: {
    question: string;
    answer: string;
  }[];
  related: GuideSlug[];
};

export const guideArticles: GuideArticle[] = [
  {
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

export const guideIndexTitle = "Investment Property Guides";
export const guideIndexDescription = "Plain-English guides to rental yield, cash flow, cap rate, ROI and investment property analysis, with practical examples for comparing rental deals.";

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}

export function getRelatedGuides(article: GuideArticle) {
  return article.related
    .map((slug) => getGuideArticle(slug))
    .filter((related): related is GuideArticle => Boolean(related));
}
