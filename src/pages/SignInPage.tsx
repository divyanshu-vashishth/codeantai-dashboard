import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import grayLogo from "../assets/gray-logo.svg";
import github from "../assets/github.svg";
import gitlab from "../assets/gitlab.svg";
import bitbucket from "../assets/bitbucket.svg";
import azure from "../assets/azure.svg";
import authKey from "../assets/auth-key.svg";
import styles from "./SignInPage.module.css";
import leftIcon from "../assets/left-icon.svg";
export default function SignInPage() {
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSection}>
        <div className={styles.cardContainer}>
          <img src={leftIcon} alt="CodeAnt AI"  />
          {/* <div className={`${styles.card} ${styles.statsCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.logoContainer}>
                <img src={logo} alt="CodeAnt AI" className={styles.logo} />
                <span className={styles.logoText}>
                  AI to Detect & Fix Security Issues
                </span>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>30+</div>
                  <div className={styles.statLabel}>Language Support</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>10K+</div>
                  <div className={styles.statLabel}>Developers</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>100K+</div>
                  <div className={styles.statLabel}>Hours Saved</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.issuesCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.issuesTitle}>Issues Fixed</div>
              <div className={styles.issuesValue}>500K+</div>
              <div className={styles.issuesIncrease}>↑ 14% This week</div>
            </div>
          </div> */}
        </div>
        <div className={styles.grayLogoContainer}>
          <img src={grayLogo} alt="CodeAnt AI" className={styles.grayLogo} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.signInCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoWithText}>
              <img src={logo} alt="CodeAnt AI" className={styles.headerLogo} />
              <span className={styles.brandName}>CodeAnt AI</span>
            </div>
            <h2 className={styles.headerTitle}>Welcome to CodeAnt AI</h2>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "saas" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("saas")}
              >
                SAAS
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "self-hosted" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("self-hosted")}
              >
                Self Hosted
              </button>
            </div>
            <div className={styles.tabContent}>
              {activeTab === "saas" ? (
                <>
                  <button
                    className={`${styles.signInButton} ${styles.githubButton}`}
                  >
                    <img
                      src={github}
                      alt="GitHub"
                      className={styles.buttonIcon}
                    />
                    Sign in with GitHub
                  </button>
                  <button
                    className={`${styles.signInButton} ${styles.bitbucketButton}`}
                  >
                    <img
                      src={bitbucket}
                      alt="Bitbucket"
                      className={styles.buttonIcon}
                    />
                    Sign in with Bitbucket
                  </button>
                  <button
                    className={`${styles.signInButton} ${styles.azureButton}`}
                  >
                    <img
                      src={azure}
                      alt="Azure DevOps"
                      className={styles.buttonIcon}
                    />
                    Sign in with Azure DevOps
                  </button>
                  <button
                    className={`${styles.signInButton} ${styles.gitlabButton}`}
                  >
                    <img
                      src={gitlab}
                      alt="GitLab"
                      className={styles.buttonIcon}
                    />
                    Sign in with GitLab
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`${styles.signInButton} ${styles.gitlabButton}`}
                  >
                    <img
                      src={gitlab}
                      alt="GitLab"
                      className={styles.buttonIcon}
                    />
                    Self Hosted GitLab
                  </button>
                  <button
                    className={`${styles.signInButton} ${styles.ssoButton}`}
                  >
                    <img
                      src={authKey}
                      alt="SSO"
                      className={styles.buttonIcon}
                    />
                    Sign in with SSO
                  </button>
                </>
              )}
            </div>
            <div className={styles.privacyPolicy}>
              By signing up you agree to the{" "}
              <Link to="/privacy" className={styles.privacyLink}>
                Privacy Policy
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
