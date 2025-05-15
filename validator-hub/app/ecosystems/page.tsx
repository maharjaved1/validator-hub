import React, { useState } from "react";

const ecosystemsData = [
  { name: "Ethereum", tvl: "$60B", validators: "500+" },
  { name: "Solana", tvl: "$15B", validators: "200+" },
  { name: "Polygon", tvl: "$8B", validators: "150+" },
  { name: "Avalanche", tvl: "$5B", validators: "120+" },
];

const EcosystemPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEcosystems = ecosystemsData.filter((ecosystem) =>
    ecosystem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* 🔹 Header Section */}
      <header className="header">
        <h1>🌍 Blockchain Ecosystems</h1>
        <input
          type="text"
          placeholder="🔎 Search Ecosystem..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* 🔹 Ecosystem Cards */}
      <div className="card-container">
        {filteredEcosystems.map((ecosystem, index) => (
          <div key={index} className="card">
            <h3>{ecosystem.name}</h3>
            <p>TVL: {ecosystem.tvl}</p>
            <p>Validators: {ecosystem.validators}</p>
            <button>Explore</button>
          </div>
        ))}
      </div>

      {/* 🔥 Trending Chains Section */}
      <footer className="footer">
        <h2>🔥 Trending Chains</h2>
        <p>Near, Cosmos, Aptos</p>
      </footer>
    </div>
  );
};

export default EcosystemPage;
