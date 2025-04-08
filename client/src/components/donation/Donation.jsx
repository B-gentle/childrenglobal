import React, { useState } from "react";
import "./donation.css";

const Donation = () => {
  const [bankNames, setBankNames] = useState(null);
  const [accountNumber, setaccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const grabBanks = () => {
    setPending(true);
    fetch("https://api.paystack.co/bank", {
      headers: {
        Authorization: "sk_live_2d10c00b39c644f1166c680b54cd8352308cfbe9",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((banks) => {
        setBankNames(banks.data);
        setPending(false);
      });
  };

  const handleChange = (e) => {
    const limit = 10;
    setaccountNumber(e.target.value.slice(0, limit));
  };

  const validateAccount = (e) => {
    setPending(true);
    fetch(
      `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${e.target.value}`,
      {
        headers: {
          Authorization:
            "Bearer sk_live_b485f4137eeaee271719ecc71102677037e064ac",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAccountName(data.data.account_name);
        setPending(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountNumber < 10) {
      alert("invalid account details");
    }
  };
  return (
    <div className="donation">
      <h2>Get Involved</h2>
      <p>
        Together, we can create lasting change. Join Omojesu Children Global
        Initiative in our mission to empower and transform lives.
      </p>

      <section className="payment-box">
        <div className="payment-div">
          <div>
            {" "}
            <span>Local and International Transfers</span>
            <span>Pay with Card</span>
          </div>
          <div>
            <div>2002317204 Fcmb Omojesu children global initiative</div>
            <div>
              <form>
                <div className="accountNumber-div">
                  <input
                    type="number"
                    placeholder="enter account number"
                    onChange={handleChange}
                    value={accountNumber}
                    required
                    maxLength={10}
                  />
                  <div className="accountNumber-error">
                    {accountNumber.length < 10 && <p>10 Digits required</p>}
                  </div>
                </div>
                <div className="bankSelect-div">
                  <select onClick={grabBanks} onChange={validateAccount}>
                    <option default>Select bank</option>
                    {bankNames &&
                      bankNames.map((bank, id) => {
                        return (
                          <option value={bank.code} key={id}>
                            {bank.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                {pending && <div>please wait...</div>}
                <input
                  className="accountName"
                  type="text"
                  placeholder="Account Name"
                  value={accountName}
                  disabled
                />
                <button
                  className="submitButton"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
