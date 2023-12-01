
import incomeChart from "../../assets/income-chart.png"

export default function Income() {

    const transactionsData = [
        {amount: 720, date: "10/11/22", id: 1},
        {amount: 560, date: "03/12/22", id: 2},
        {amount: 980, date: "23/11/22", id: 3}
    ]

    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>Last <span>30 days</span></p>
            <h2>$2,260</h2>
            <img src={incomeChart} alt="" />
            <div className="transactions-header">
                <h2>Your transactions (3)</h2>
                <p>Last <span>30 days</span></p>
            </div>
            <div className="transactions-list">
                {transactionsData.map(transaction => (
                    <div className="transaction" key={transaction.id}>
                        <h1>${transaction.amount}</h1>
                        <p>{transaction.date}</p>
                    </div>
                ))}     
            </div>
        </section>
    )
}