import { useState } from "react";
import "./SignIn.css";
import logo from "../assets/logo.svg";
import Github from "../assets/github.svg";
import Bitbucket from "../assets/bitbucket.svg";
import Azure from "../assets/azure.svg";
import Gitlab from "../assets/gitlab.svg";

export const SignIn = () => {
  const [deploymentType, setDeploymentType] = useState<'saas' | 'self-hosted'>('saas');

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        {/* Marketing Section - Hidden on Mobile */}
        <div className="marketing-section">
          <div className="marketing-content">
            <div className="marketing-header">
              <img src={logo} alt="CodeAnt AI" className="logo" />
              <h2>AI to Detect & Autofix Bad Code</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>30+</h3>
                <p>Language Support</p>
              </div>
              <div className="stat-item">
                <h3>10K+</h3>
                <p>Developers</p>
              </div>
              <div className="stat-item">
                <h3>100K+</h3>
                <p>Hours Saved</p>
              </div>
            </div>

            <div className="issues-card">
              <div className="issues-main">
                <div className="chart-icon">
                  <div className="chart-circle"></div>
                </div>
                <div className="issues-info">
                  <span>Issues Fixed</span>
                  <h3>500K+</h3>
                </div>
              </div>
              <div className="growth-indicator">
                <span className="arrow">↑</span>
                <span>14%</span>
                <span className="period">This week</span>
              </div>
            </div>

            <img src="/assets/gray-logo.svg" alt="" className="bottom-logo" />
          </div>
        </div>

        {/* Auth Section */}
        <div className="auth-section">
          <div className="auth-header">
            <img src="/assets/logo.svg" alt="CodeAnt AI" className="auth-logo" />
            <h1>Welcome to CodeAnt AI</h1>
          </div>

          <div className="deployment-toggle">
            <button
              className={deploymentType === 'saas' ? 'active' : ''}
              onClick={() => setDeploymentType('saas')}
            >
              SAAS
            </button>
            <button
              className={deploymentType === 'self-hosted' ? 'active' : ''}
              onClick={() => setDeploymentType('self-hosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className="auth-buttons">
            <button className="auth-button">
              <img src={Github} alt="" />
              <span>Sign in with Github</span>
            </button>
            <button className="auth-button">
              <img src={Bitbucket} alt="" />
              <span>Sign in with Bitbucket</span>
            </button>
            <button className="auth-button">
              <img src={Azure} alt="" />
              <span>Sign in with Azure Devops</span>
            </button>
            <button className="auth-button">
              <img src={Gitlab} alt="" />
              <span>Sign in with GitLab</span>
            </button>
          </div>

          <p className="privacy-notice">
            By signing up you agree to the <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

