import compStyles from "./dashboard.css";

import Link from "next/link";

export default function DashboardComp() {
  return (
    <>
      <div className="page-container">
        <div className="flexbox-container-w">
          <p className="flexbox-item-w">Welcome XXX to your Dashboard</p>
        </div>
        <div className="flexbox-container-links">
          <Link href="/displayallsu" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img" src="/icons8-view-32.png" alt="View Service User Icon" />
              <p className="item-links-text">View Service Users</p>
            </div>
          </Link>
          <Link href="/addsu" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img"  src="icons8-add-male-user-64.png"
                  alt="Add Service User Icon" />
              <p className="item-links-text">Add Service User</p>
            </div>
          </Link>
          <Link href="/referrallinks" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img" src="icons8-referral-24.png"alt="Referral Link Button" />
              <p className="item-links-text">Referral Links</p>
            </div>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img" src="icons8-sign-out-50.png" alt="Sign out Button" />
              <p className="item-links-text">Sign Out</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
