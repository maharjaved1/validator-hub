import React from "react";

const UniversalPage = ({ section }) => {
  return (
    <div className="container">
      {/* 🔹 Header Navigation */}
      <header className="header">
        <nav>
          <ul>
            <li>Ecosystems</li>
            <li>Chains</li>
            <li>Validators</li>
            <li>Staking Pools</li>
            <li>Governance</li>
            <li>Opportunities</li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Page Content – Changes Dynamically */}
      <main className="content">
        {section === "ecosystem" && <EcosystemView />}
        {section === "chain" && <ChainView />}
        {section === "validator" && <ValidatorView />}
        {section === "staking" && <StakingPoolsView />}
        {section === "governance" && <GovernanceView />}
        {section === "opportunities" && <OpportunitiesView />}
      </main>

      {/* 🔹 Footer */}
      <footer className="footer">
        <p>Validator Hub © 2025</p>
      </footer>
    </div>
  );
};

export default UniversalPage;
