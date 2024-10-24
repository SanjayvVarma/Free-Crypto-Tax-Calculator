 const data = [
    {
      question: "How are cryptocurrencies taxed in Australia?",
      answer: (
        <p>
          The Australian Taxation Office (ATO) regards cryptocurrency as both
          property, which is subject to Capital Gains Tax (CGT), and income, which
          is subject to Income Tax. CGT applies when you sell, trade, gift, or
          make purchases using cryptocurrency. On the other hand, Income Tax
          applies when you receive cryptocurrency as payment for services, work,
          mining, staking, or other activities. To simplify tax calculations,
          consider using a free crypto tax calculator for Australia.
        </p>
      ),
    },
    {
      question:
        "What’s the difference between long-term and short-term capital gains?",
      answer: (
        <p>
          The distinction between long-term and short-term capital gains lies in
          the duration of ownership. When you own an asset, such as
          cryptocurrency, for more than 12 months, any gains from its sale are
          categorized as long-term. These long-term gains often receive a 50%
          discount on the capital gains tax (CGT). In contrast, if you hold the
          asset for 12 months or less, the gains are considered short-term, and
          they are taxed at your regular income tax rate.
        </p>
      ),
    },
    {
      question: "Do I have to pay tax on crypto-to-crypto transactions?",
      answer: (
        <div>
          <p>
            Yes, according to the ATO, when you trade one cryptocurrency for
            another, like NFTs, stablecoins, or tokens, it's seen as selling one
            asset to buy another, and any profit you make from this exchange is
            subject to Capital Gains Tax. To compute taxes for crypto-to-crypto
            transactions, you must determine the fair market value of your coins
            in AUD at both the acquisition and disposal times. However, this can
            be challenging because many exchanges use cryptocurrency as the
            standard for valuation.
          </p>
          <p>
            Explore KoinX for a streamlined experience in calculating your
            cryptocurrency taxes. Our historical price engine swiftly delivers the
            fair market value of your crypto holdings at the time of each
            transaction, making tax assessment hassle-free.
          </p>
        </div>
      ),
    },
    {
      question: "How do I lower my cryptocurrency taxes?",
      answer: (
        <div>
          <p>
            Here are the top 6 strategies for lowering your cryptocurrency taxes
            in Australia:
          </p>
          <ul className="list-disc ml-[2rem] ">
            <li>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Hold for over 12 months -
              </span>{" "}
              Hold your crypto for more than 12 months to qualify for a 50%
              long-term CGT discount to reduce your tax liability.
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Offset gains with losses -
              </span>{" "}
              Offset capital gains with capital losses from cryptocurrency,
              reducing your overall tax burden.
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Claim tax deductions -
              </span>{" "}
              Explore opportunities to claim significant deductions on your
              regular income if you're a trader or running a crypto business.
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Use crypto tax tools -
              </span>{" "}
              Employ crypto tax software like KoinX or seek help from a crypto tax
              specialist to streamline calculations and ensure compliance.
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Donate to charities -
              </span>{" "}
              Donate cryptocurrency to registered charities since it&#39;s not a
              taxable event, and claim deductions on the donated amount.
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Full disclosure -
              </span>{" "}
              Be transparent and disclose all your crypto transactions to the ATO
              to avoid penalties for hiding trading activities.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can the ATO track crypto?",
      answer: (
        <p>
          The Australian Taxation Office (ATO) possesses strong tracking
          capabilities for cryptocurrency transactions. Since 2014, they've been
          gathering data on crypto activities, including KYC info from exchanges
          and wallets. The ATO's data matching program, active since 2019, lets
          them access data from service providers like Binance and CoinJar,
          covering personal details and transaction specifics. Since 2020, the ATO
          has been notifying Australian crypto investors to report holdings to
          avoid penalties.
        </p>
      ),
    },
    {
      question: "What is the best crypto tax calculator for Australia?",
      answer: (
        <p>
          KoinX is a crypto tax platform that makes it easy to calculate tax on
          crypto transactions. It also provides portfolio insights of all crypto
          exchange accounts combined, making it a valuable tool for chartered
          accountants and VDA Investors alike.
        </p>
      ),
    },
    {
      question: "Do I have to pay tax if I lose money trading crypto?",
      answer: (
        <p>
          In Australia, when your cryptocurrency loses value, it's classified as a
          capital loss. This means you won't have to pay taxes on that loss. It's
          a way to offset any gains you might have made in other investments for
          tax purposes.
        </p>
      ),
    },
    {
      question: "Is using a crypto tax calculator safe?",
      answer: (
        <p>
          KoinX provides a reliable crypto tax calculator that can assist you in
          determining your tax obligations for cryptocurrency transactions. This
          tool accurately tracks your portfolio on your preferred exchange and
          computes your gains or losses based on the crypto amounts and prices
          involved.
        </p>
      ),
    },
    {
      question: "Which exchanges do you support?",
      answer: (
        <p>
          KoinX seamlessly integrates with a wide array of exchanges, including
          Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken, and numerous others.
          It effortlessly consolidates cryptocurrency transactions from over 180+
          chains, exchanges, and wallets, presenting them in a user-friendly
          unified dashboard.
        </p>
      ),
    },
    {
      question:
        "Do I have to pay tax if I transfer crypto from one wallet to another?",
      answer: (
        <p>
          Transferring cryptocurrency from one wallet to another that you own in
          Australia is not subject to tax, as it is not recognised as a taxable
          event, and capital gains tax is not triggered. Nevertheless, it's
          essential to keep detailed records of these transfers, particularly if
          you are utilizing automated crypto tax software like KoinX. KoinX, as a
          reliable crypto tax software, can streamline the process, making it
          easier to maintain accurate and efficient tax records and reporting
          while ensuring compliance with Australian tax regulations.
        </p>
      ),
    },
    {
      question: "How do I use a cryptocurrency tax calculator?",
      answer: (
        <div>
          <p>
            In order to use a cryptocurrency tax calculator, you need to input
            information about your cryptocurrency transactions.
          </p>
          <p>
            After you enter your information, the cryptocurrency tax calculator
            will calculate the gain or loss on every transaction.
          </p>
          <p>This includes:</p>
          <ul className=" list-decimal marker:font-bold ml-[2rem]">
            <li>The financial year you want to calculate your taxes for.</li>
            <li>The country you want to calculate your taxes for.</li>
            <li>The purchase price of the coin.</li>
            <li>The sale price of the coin.</li>
          </ul>
          <p>You will get results that mention the following:</p>
          <ul className=" list-decimal marker:font-bold ml-[2rem]">
            <li>The total profit/loss you made</li>
            <li>The tax you&#39;re liable to pay</li>
          </ul>
          <br></br>
          <p className="faq-span">
            Still have doubts?{" "}
            <a href="#s" className=" text-blue-700">
              Consult with a crypto taxation expert.
            </a>
          </p>
        </div>
      ),
    },
    {
      question: "How do I accurately calculate my tax liability in Australia?",
      answer: (
        <div>
          <p>
            To calculate your crypto tax in Australia accurately, you need to
            consider both income tax and capital gains tax.
          </p>
          <p className="font-bold my-2 text-base text-black">Income Tax</p>
          <p className="">
            In Australia, when an individual (investor) sells, trades, spends,
            earns (salary, mining, interest) or gifts cryptocurrency, the net
            capital gain is taxed at the same rate as their Income Tax. This tax
            rate is determined based on their total income for the tax year.
          </p>
  
          <p className="font-bold my-2 text-base text-black">
            ATO Individual Income Tax Rates 2022–2023:
          </p>
          <table className=" sm:mx-[0.2rem] my-[0.5rem]">
            <tr>
              <th>Income</th>
              <th>Tax Rate</th>
            </tr>
            <tr>
              <td>$0 - $18,200</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>$18,201 - $45,000</td>
              <td>Nil + 19% of excess over $18,200</td>
            </tr>
            <tr>
              <td>$45,000 - $120,000</td>
              <td>$5,092 + 32.5% of excess over $45,000</td>
            </tr>
            <tr>
              <td>$120,000 - $180,000</td>
              <td>$29,467 + 37% of excess over $120,000</td>
            </tr>
            <tr>
              <td>$180,001+</td>
              <td>$51,667 + 45% of excess over $180,000</td>
            </tr>
          </table>
  
          <p className="font-bold mt-[2rem] my-4 text-base text-black">
            Capital Gains Tax (CGT)
          </p>
          <p>
            Calculate your capital gains or losses on cryptocurrency transactions
            using this formula:
          </p>
          <p className="font-bold my-4 ">
            Capital Gain/Loss = Capital Proceeds - Cost Basis
          </p>
          <p className="font-bold my-2">Note:</p>
          <p className="font-bold">
            Capital Proceeds (sale value or any form of receipt)
          </p>
          <p className="font-bold">
            Cost Basis (costs incurred to acquire, hold, and dispose of the asset)
          </p>
          <p className="mt-4">
            Your tax rate depends on whether you held the cryptocurrency for more
            than 12 months (long-term) or less (short-term). Long-term gains
            receive a 50% discount
          </p>
          <br></br>
          <p>
            Calculate your Australian crypto taxes accurately and effortlessly
            with KoinX's free crypto tax calculator for Australia. It simplifies
            the process, ensuring compliance with the latest tax rates and
            regulations making crypto tax calculations easy and precise.
          </p>
        </div>
      ),
    },
  ];
  
  export default data