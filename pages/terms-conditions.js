import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";
import Footer from "../component/footer";
function showModal() {
  localStorage.setItem("showmodal","1");
}

export default function privacy_policy() {
  return (
    <>
      <Header />
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <div className="divNavbar">
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>

      <div className="container divMenu">
        <div className="container divMenu1">
          <div className="row align-items-center h-100">
            <div className="col-lg-12 text-center">
              <Link href="/">
                <p className="liNav" onClick = {showModal}>Ride with Us</p>
              </Link>
              <Link href="/support">
                <p className="liNav">JGO Support</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav
              className="navbar navbar-expand-md fixed-top"
              style={{ padding: "20px 20px" }}
            >
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <nav className="navbar-brand" href="#">
                <Link href="/">
                  <img
                    src="Image/logo.png"
                    className="img-fluid imgLogo"
                    style={{ width: "150px", marginTop: "10px" }}
                  />
                </Link>
              </nav>
              <div className="collapse navbar-collapse" id="collapse">
                <div className="col2 ml-auto">
                  <ul className="nav navbar-nav">
                    <li>
                      <a
                        className="nav-link nav-driver"
                        data-toggle="modal"
                        data-target="#driverModal"
                        style={{ color: "white" }}
                      >
                        Ride with Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link nav-driver"
                        style={{ color: "white" }}
                      >
                        Deliver Now
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link nav-driver"
                        style={{ color: "white" }}
                      >
                        JGO Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container conHide" style={{ marginTop: "8%" }}>
          <div className="row">
            <div className="col-lg-12">
              <p className="pPrivacy">Terms and Conditions</p>
              <p className="pPrivacySub pTitleprivacy">
                As a "User" of this JGO Delivery application, you hereby agree
                and conform to the following Terms of Use
              </p>
              <p className="pPrivacySub">Definitions</p>
              <p className="pPrivacySub">
                1.1 "JGO Delivery" means JGO Delivery Philippines, an online
                booking platform for private delivery services operated by JGO
                Deliveries, with registered office at 8161 Dr Arcadio Santos Ave
                Parañaque, 1700 Metro Manila. The Corporation is the authorized
                operator of the JGO Delivery User's application or program in
                the Philippines and is engaged in the business of providing the
                Services to Users in the Philippines.
              </p>
              <p className="pPrivacySub">
                1.2 "User" means any natural or juridical person who installs a
                copy of the Software on a mobile device and submits an Order
                through the Software for Private Carrier to be performed in the
                Philippines.
              </p>

              <p className="pPrivacySub">
                1.3 "Order" has the meaning given to it in Clause 2.3 below.
              </p>
              <p className="pPrivacySub">
                "Private Carrier Services" means the services provided by a
                Participating Driver for the account of a User, which includes
                the pickup, transportation and delivery of the User's Shipment
                from and to stated locations in the Philippines using a booked
                vehicle, as well as any add-on services, pursuant to an Order.
              </p>

              <p className="pPrivacySub">
                1.5 "Participating Driver" means a licensed driver, not
                registered as a common carrier or otherwise engaged in business
                as such, who has been accredited with JGO Delivery as part of a
                pool of drivers who may be willing, at his/her sole discretion,
                to provide Private Carrier Services to a User.
              </p>
              <p className="pPrivacySub">
                1.6 "Shipment" means all packages, parcels, delivery items or
                any part of the articles therein or contents thereof that travel
                under one Order.
              </p>

              <p className="pPrivacySub">
                1.7 "Contract" refers to the special contract of private
                carriage as contemplated under Philippine law which is
                automatically entered into between the Participating Driver and
                the User upon the acceptance by the Participating Driver of the
                User's Order through the Software. The Contract covers the
                provision of Private Carrier Services and the fulfillment by the
                Participating Driver of the terms of the Order, subject to the
                terms and conditions expressly provided as Annex "A".
              </p>
              <p className="pPrivacySub">
                1.8 "Services" means the services set out in Clause 2.4 below
                which are all performed by JGO Delivery electronically through
                the Software.
              </p>
              <p className="pPrivacySub">
                1.9 "User Wallet" refers to the deposit of money made by the
                User with JGO Delivery, from which deposit the fees and charges
                due for an Order may be deducted.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                Use of the Software; JGO Delivery Services
              </p>
              <p className="pPrivacySub">
                2.1 User is permitted to install a copy of the Software on
                User's mobile device for use in the Philippines provided that
                User shall not use the Software or the Services for any
                commercial purposes. Other than the license to use the Software
                as herein provided, no other license or right is granted to the
                use and ownership of the Software and all other rights are
                hereby expressly reserved by JGO Delivery User shall not:
              </p>
              <ul className="ulPrivacy">
                <li>
                  Rent, lease, sublicense, distribute or transfer copies of the
                  Software or the license for the use of the Software to any
                  third parties;
                </li>
                <li>
                  Modify, adapt, reverse engineer, decompile, disassemble,
                  translate the Software or create derivative works based on the
                  Software;
                </li>
                <li>
                  Interrupt the normal operation of the Software, or use any
                  methods to export or modify the source code of the Software;
                </li>
                <li>
                  Upload or send out any kinds of computer viruses, worms,
                  trojans, or malicious codes;
                </li>
                <li>
                  Install and/or execute the Software on any device other than
                  the mobile device running the operating systems approved by
                  JGO Delivery{" "}
                </li>
              </ul>
              <p className="pPrivacySub">
                The Software is delivered to Users on an "as is" basis and
                although JGO Delivery has used its best endeavors to make the
                Software work properly on mobile devices, JGO Delivery does not
                warrant the performance of the Software nor the compatibility of
                the Software with Users' mobile devices.
              </p>
              <p className="pPrivacySub">
                User may use the Software to submit a proposal to engage Private
                Carrier Services for compensation to be determined in accordance
                with the prevailing "Rates" on the Software (an "Order") and
                under terms and conditions provided in Annex "A".
              </p>
             
              <p className="pPrivacySub">
                JGO Delivery provides Services to facilitate the perfection and
                performance of the Contract between the User and the
                Participating Driver, as follows:
              </p>
              <ul className="ulPrivacy">
                <li>
                  The computation and determination of the fees and charges for
                  the fulfillment of an Order;
                </li>
                <li>
                  The publication of the details of an Order to eligible
                  Participating Drivers for their acceptance;
                </li>
                <li>
                  Upon the acceptance by a Participating Driver of an Order, the
                  transmission to the User of the details of the Participating
                  Driver who has accepted the Order;
                </li>
                <li>
                  Where the option for payment using the User Wallet is selected
                  by the User, the confirmation of receipt of the payment of the
                  fees and charges, for and on behalf of the Participating
                  Driver, which sum shall be deducted by JGO Delivery from the
                  User Wallet of the User for the account of the Participating
                  Driver.
                </li>
              </ul>
              <p className="pPrivacySub">
                The Orders submitted through the Software are completely and
                independently fulfilled by the Participating Driver pursuant to
                the Contract with the User. JGO Delivery is not a party to the
                Contract.
              </p>
              <p className="pPrivacySub">
                JGO Delivery reserves the right, but shall not be obliged, to
                pursue investigations and/or inquiries on the conduct and/or
                alleged violations by Participating Drivers based on User's
                reports or complaints, and to impose appropriate penalties or
                consequences on the Participating Drivers, at the sole and
                absolute discretion of JGO Delivery.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                Determination of Fees and Charges
              </p>
              <p className="pPrivacySub">
                The User will be charged the Standard Transport Fee in
                accordance with the prevailing "Rates" at the time of the
                Participating Driver's acceptance of the Order.
              </p>
              <p className="pPrivacySub">
                Prevailing rates are indicated in the "Rates" section on the JGO
                Delivery’s website or in the Software.
              </p>
              <p className="pPrivacySub">
                The fees and charges for the User's Shipment are determined in
                accordance with specified maximum weight, size, and quantity of
                the delivery item/s, the vehicles used, and add-on services
                availed, if any, as the case may be.
              </p>
              <p className="pPrivacySub">
                Additional charges, including but not limited to toll, parking
                fees and such other fees and expenses which are necessary,
                related or incidental to effect delivery to the recipient or
                return of the Shipment to the User shall be for the User's
                exclusive account and are not included in the Standard Transport
                Fee to be charged against the User.
              </p>
              <p className="pPrivacySub">
                An adjustment of the rates as well as additional charges shall
                likewise apply if the weight, size, or quantity of the Shipment
                declared by the User are different from the actual weight, size,
                or quantity thereof.
              </p>
              <p className="pPrivacySub">
                In the event that the Shipment is not accepted or refused by the
                recipient or the recipient's representative/s, all expenses for
                the return of the Shipment to the User shall be shouldered by
                the User.
              </p>
              <p className="pPrivacySub">
                No cancellation fees are chargeable as long as an Order is
                cancelled and communicated within sixty (60) minutes before the
                start of the Order pickup time. In the event that the
                cancellation was made after the Order pickup time has started,
                User shall be charged with the Standard Transport Fee as
                provided under Section 3.1.
              </p>
              <p className="pPrivacySub">
                The User shall pay the Participating Drivers in accordance with
                the agreed mode of payment selected through the Software upon
                submission of the Order.
              </p>
              <p className="pPrivacySub">
                3.9 For Users availing of payment using the User Wallet option,
                the final adjusted rates and additional charges shall be
                deducted from the User's Wallet. If an Order is cancelled within
                sixty (60) minutes before the start of the Order pickup time,
                JGO Delivery will automatically undo the transaction for
                debiting of funds from the User's Wallet.
              </p>
              <p className="pPrivacySub">
                3.10 For and in consideration for the performance of the
                Services, JGO Delivery shall be entitled to a percentage in the
                total fees and charges due for an Order.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                User's Obligations, Warranties and Undertakings
              </p>
              <p className="pPrivacySub">
                4.1 User warrants that he has the legal capacity to enter into
                and form contracts under Philippine laws.
              </p>
              <p className="pPrivacySub">
                4.2 By availing of JGO Delivery’s Services, the User
                conclusively agrees that the Private Carrier Services to be
                provided by the Participating Driver shall be subject to the
                terms and conditions herein provided, and those provided in
                Annex "A" hereof.
              </p>
              <p className="pPrivacySub">
                4.3. By availing of JGO Delivery’s Services, the User shall
                provide JGO Delivery complete and accurate information in
                submitting the Order, such as the description of the delivery
                items included in the Shipment, his choice of delivery vehicle
                type, add-on services availed, and handling instructions of the
                Shipment, if any, through the Software for initial determination
                of applicable rates.
              </p>
              <p className="pPrivacySub">
                4.5 User shall be responsible for the security of his account,
                shall safeguard any login name and password JGO Delivery may
                provide in relation to the Software and the Services and shall
                not disclose them to third parties, and undertakes to
                immediately notify JGO Delivery if there is any reason to
                believe that the security of the account has been compromised.
              </p>
              <p className="pPrivacySub">
                4.6 The User warrants that he has complied with all laws and
                regulations relating to the nature, condition, packing,
                handling, storage and carriage of the Shipment. User shall not
                propose to dispatch any articles that are prohibited by law,
                dangerous or hazardous materials or substances, radioactive
                material, or which may be harmful to the Participating Driver or
                the delivery vehicle.
              </p>
              <p className="pPrivacySub">
                4.7 The User is liable for any loss or damage suffered by the
                Participating Driver, JGO Delivery or any third party as a
                result of User's violation/s of herein terms and conditions
                and/or the Contract with the Participating Driver, including
                legal liabilities that may arise from the transportation or
                shipment of contraband goods or items the distribution of which
                are legally declared to be prohibited under Philippine law,
                local government regulation, or administrative regulation..
              </p>
              <p className="pPrivacySub">
                4.8 The User agrees to hold JGO Delivery free and harmless from
                any legal liability to any third party as a result of any breach
                of the User's obligations under herein terms and conditions
                and/or the Contract with the Participating Driver.
              </p>
              <p className="pPrivacySub pTitleprivacy">Disclaimer</p>
              <p className="pPrivacySub pTitleprivacy">
                The User hereby expressly agrees and acknowledges that:
              </p>
              <p className="pPrivacySub">
                5.1. JGO Delivery does not provide delivery or transportation
                services, and except to the extent that it provides the Services
                as defined herein, does not perform, manage, supervise or
                control the Private Carrier Services which are completely,
                exclusively and independently performed by the Participating
                Driver.
              </p>
              <p className="pPrivacySub">
                5.2. JGO Delivery is a software company and is not, and does not
                represent itself to be, engaged in the activities of a common or
                private carrier or a public utility or public service, as these
                terms are understood under Philippine law.
              </p>

              <p className="pPrivacySub">
                5.3 JGO Delivery does not warrant the availability of Private
                Carrier Services and the availability of delivery vehicles as
                may be requested by a User in an Order, the accuracy of the data
                or information provided as part of the Services, or the quality
                of the Private Carrier Services and the condition of the
                delivery vehicles provided by the Participating Drivers.
              </p>
              <p className="pPrivacySub">
                5.4. JGO Delivery shall not be liable to User for any damages,
                claims or costs whatsoever including any consequential,
                indirect, incidental damages or any loss of profit or damages to
                their mobile devices as a result of their installation and/or
                execution of the Software, or their availment of the Services or
                the Private Carrier Services using the Software, even if JGO
                Delivery or its representative has been advised of the
                possibility of such loss, damage or claim from User.
              </p>
              <p className="pPrivacySub">
                5.5 JGO Delivery is not the agent, principal, partner or
                employer, or any similar or analogous relation, of Participating
                Drivers or Users.
              </p>
              <p className="pPrivacySub">
                5.6. The rights, obligations and remedies between the User and
                Participating Driver are set forth in their Contract, which is
                hereby expressly acknowledged by the User as a special contract
                of private carriage of goods, as contemplated under the laws of
                the Republic of the Philippines. JGO Delivery shall not be
                liable for any loss or damages, including any injury which a
                User or Participating Driver may suffer as a result of the
                provision of the Private Carrier Services contracted by the User
                from a Participating Driver using the Software.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                Personal Data & Privacy
              </p>
              <p className="pPrivacySub">
                6.1. The User may be required to submit personal information to
                JGO Delivery in order to use certain functions of the Software
                and the Participating Driver confirms that the personal data so
                provided is true, correct and up to date.
              </p>
              <p className="pPrivacySub">
                6.2. The User agrees that JGO Delivery is entitled to collect,
                use, keep, store, update and process his/her personal
                information to such extent, for and at such time periods, as may
                be necessary for JGO Delivery to provide the Services.
                Specifically, the submitted personal data may be used for or in
                (a) the publication of an Order from User for acceptance by a
                Participating Driver, (b) confirmation/ clarification of the
                Order information between the User and the Participating Driver,
                (c) tracking the booked vehicles, (d) determining compliance
                with the terms and conditions of these Terms and Conditions, (e)
                addressing User complaints against the Participating Driver, (f)
                verifying the truthfulness of the submitted personal data, (g)
                compliance with legal process and investigation, (h) and other
                acts or procedures which are reasonably necessary or connected
                with the provision of the Services. All other lawful criteria
                for processing, use and disclosure of personal information under
                the Philippine Data Privacy Act (Republic Act No. 10173) are
                hereby incorporated in this agreement.
              </p>
              <p className="pPrivacySub">
                6.3 The User agrees that JGO Delivery shall not be liable for
                any misuse by the Participating Drivers of the User's personal
                information.
              </p>
              <p className="pPrivacySub">
                6.4. The User will receive and use the Participating Driver's
                personal data (Participating Driver's submitted name and contact
                number) for the purpose of fulfillment of the User's Order
                pursuant to the obligations of the User and Participating under
                their relevant Contract. The User may request further personal
                information of Participating Drivers to the extent that such may
                be necessary for consumer complaint resolutions and for the
                resolution of legal actions (whether administrative, civil or
                criminal), consistent with the lawful criteria for processing
                and disclosure of personal information under the Philippine Data
                Privacy Act (Republic Act No. 10173).
              </p>
              <p className="pPrivacySub">
                6.5 The User agrees that he will be liable to the Participating
                Driver for any misuse of the Participating Driver's personal
                data, and he agrees to hold JGO Delivery free and harmless from
                the misuse of the Participating Driver's personal data.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                Fair Use of the Software; Rules of Usage
              </p>
              <p className="pPrivacySub">
                7.1 The User shall not utilize the Software for or to promote
                any illegal acts.
              </p>
              <p className="pPrivacySub">
                7.2 The User shall not use the Software to produce any email
                advertisements or spam emails.
              </p>
              <p className="pPrivacySub">
                7.3 The User shall not use the Software in any way to track,
                stalk, harass or hurt any person.
              </p>
              <p className="pPrivacySub">
                7.4. The User shall not in any way interrupt/destroy the
                operation of the Software or the servers/network linked with the
                Software, or to violate the network requirements, process, or
                the herein terms and conditions.
              </p>
              <p className="pPrivacySub">
                7.5 The User shall not use the Software in another person's name
                or use the Software with property of others without consent of
                its owner.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                Confidentiality and Protection of Business Interests of JGO
                Delivery and Software Users
              </p>
              <p className="pPrivacySub">
                8.1 JGO Delivery owns or controls all trade secrets, proprietary
                information, and other Confidential Information relating to JGO
                Delivery and the Software.
              </p>
              <p className="pPrivacySub">
                8.2 "Confidential information" includes but is not limited to:
                the source code in respect of the mobile app, JGO Delivery App
                (the "Mobile App"), currently owned and/or operated by JGO
                Delivery in the Philippines; app contents of JGO Delivery;
                driver onboarding data operating procedures; non-public
                financial information; trade secrets (including but not limited
                to applicable rebate progams for corporate clients); business
                plans; copyrightable materials; operating procedures; financial
                information; non-public records, notes, reports,
                correspondences; supplier information; and proprietary
                information.
              </p>
              <p className="pPrivacySub">
                8.3. In the course of the use of the Software and/or provision
                by JGO Delivery of the Services, the User may become aware of
                trade secrets, proprietary information and other Confidential
                Information relating to JGO Delivery. User agrees that the
                disclosure of this information to any third party, and in
                particular to a competing business entity, would cause serious
                loss and damage to JGO Delivery business interests.
              </p>
              <p className="pPrivacySub">
                8.4. User agrees it shall not use any advantages derivable from
                such Confidential Information in its own business or affairs,
                and/or to the detriment or prejudice of JGO Delivery, its
                representatives, and/or the Participating Drivers
              </p>
              <p className="pPrivacySub pTitleprivacy">Miscellaneous</p>
              <p className="pPrivacySub">
                9.1 Non-Circumvention. The User hereby agrees for himself or
                herself, their officers, directors, agents, associates and any
                related parties, that they will not, directly or indirectly,
                contact, deal with or otherwise become involved with the
                Participating Drivers, any entity or any other entities or
                parties introduced, directly or indirectly, by or through the
                other party, its officers, directors, agents or associates, for
                the purpose of avoiding the payment to JGO Delivery of profits,
                fees or otherwise, without the specific written approval of JGO
                Delivery
              </p>
              <p className="pPrivacySub">
                9.2 Promotions. JGO Delivery reserves the exclusive right to
                introduce and enforce advertising and sales promotions.
              </p>
              <p className="pPrivacySub">
                9.3 Amendment. By agreeing to these Terms and Conditions, the
                User agrees that JGO Delivery may from time to time amend the
                terms of these Terms and Conditions by posting such amendments
                and additional terms and conditions on the website
                http://www.jgo.com.ph and/or by sending push notifications on
                the Mobile App. The User agrees that any such amendments on the
                Terms and Conditions made by JGO Delivery shall be binding upon
                him.
              </p>
              <p className="pPrivacySub">
                9.4 Entire agreement. The User acknowledges that he has read
                these Terms and Conditions, as may be amended from time to time,
                understood it and agreed to be bound by its terms, and further
                agrees that these Terms and Conditions, together with any
                document referred to herein in connection herewith, constitutes
                the whole agreement and is the complete and exclusive statement
                of the Terms and Conditions between JGO Delivery and the User
                with respect to the subject matter hereof, which supersedes all
                proposals, and all other communications, regardless of the form
                thereof, between the JGO Delivery and the User relating to the
                subject matter of these Terms and Conditions. No representation,
                promise or inducement has been made by JGO Delivery that is not
                embodied in these Terms and Conditions
              </p>
              <p className="pPrivacySub">
                9.5 Governing Law. These Terms and Conditions shall be governed
                by and construed in accordance with the laws of Philippines.
              </p>
              <p className="pPrivacySub">
                9.6 Venue of Action. In the event of any dispute, controversy,
                or claim arising from or relating to these Terms and Conditions,
                or the interpretation thereof, or any arrangements relating
                thereto or contemplated therein, or the breach, termination, or
                invalidity thereof, the parties hereto agree that venue shall be
                exclusively and properly set in the courts of Makati City,
                Philippines.
              </p>
              <p className="pPrivacySub">
                9.7 Assignment. JGO Delivery reserves the right to assign any or
                all of its rights, duties and obligations hereunder to any third
                party without need of notice to or consent from the User. The
                User may not assign his rights and obligations under these Terms
                and Conditions without the prior written consent of JGO
                Delivery.
              </p>
              <p className="pPrivacySub">
                9.8 Non-waiver. Failure by JGO Delivery to exercise any or all
                of its rights hereunder, or any partial exercise thereof, shall
                not be construed as a waiver of such rights, and JGO Delivery
                may, at any time, exercise any or all of the rights and
                discretions granted to it hereunder, or by law, without having
                to wait for the occurrence or re-occurrence of another or
                similar event which gives rise to such rights.
              </p>
              <p className="pPrivacySub">
                9.9 Severality. If any provision of these Terms and Conditions
                is or becomes invalid, illegal or unenforceable, the remaining
                provisions shall remain in full force and effect, and for the
                invalid, illegal or unenforceable provision shall be substituted
                a valid, legal and enforceable provision which shall be as
                similar as possible in economic and business objectives as
                intended by the parties.
              </p>
              <p className="pPrivacySub">
                9.10 Dispute Resolution. Any consumer complaint by the User
                against JGO Delivery should be resolved primarily through
                amicable settlement, compromise, or other alternative mode of
                dispute resolution, and such efforts to resolve the consumer
                complaint through amicable settlement, compromise, or other
                alternative mode of dispute resolution shall be a condition
                precedent prior to filing any administrative or court action,
                whether such action is within the jurisdiction of the Department
                of Trade and Industry or the courts. Efforts to resolve the
                consumer complaint through amicable settlement, compromise, or
                other alternative mode of dispute resolution shall be commenced
                by filing a letter or notice with the Corporation, through the
                contact information disclosed in the application; thereafter,
                the consumer complaint process should undergo such means as may
                be necessary and convenient for both parties to resolve the
                complaint, including meetings, conferences, exchange of
                correspondences, mediation, or arbitration. The Corporation
                shall be given opportunity to offer a compromise or settlement
                amount to the User, and such offer shall not be deemed to be the
                final offer unless so expressly indicated in a written letter or
                notice by the Corporation to the User. A proof of receipt by the
                Corporation of the letter or notice from the User rejecting any
                final offer of compromise or settlement from the Corporation
                shall serve as exclusive proof or evidence of fulfillment of the
                condition precedent referred to in this section prior to filing
                any administrative or judicial action.
              </p>
              <p className="pPrivacySub">
                9.11 Non-Tarnishment. By availing of the Services, User and
                Corporation agree that they will refrain from tarnishing the
                reputation of the other in the course of resolving a consumer
                complaint in accordance with Section 9.10. Any public disclosure
                of the correspondences and meetings between the User and
                Corporation in accordance with Section 9.10, without the consent
                of the other party, shall be prima facie evidence of tarnishment
                and shall give rise to minimum punitive damages which shall not
                be less than PhP50,000.
              </p>
              <p
                className="pPrivacySub pTitleprivacy"
                style={{ fontSize: "1.5rem" }}
              >
                Annex "A" Terms and Conditions of the Special Contract of
                Private Carriage of Goods Between User and Participating Driver
              </p>
              <p className="pPrivacySub">
                The User, by the submission of its Order using the Software and
                the acceptance of the computation provided by JGO Delivery of
                the fees and charges for said Order; and The Participating
                Driver, by its acceptance of the Order; hereby agree to be bound
                by this special contract of private carriage of goods (the
                "Contract"), subject to the terms and conditions hereinafter
                provided:
              </p>
              <p className="pPrivacySub pTitleprivacy">
                1. Definitions and Interpretation
              </p>
              <p className="pPrivacySub">
                1.1 Capitalized terms used in this Contract shall bear the
                meaning provided under the User's Terms and Conditions, and/or
                the Participating Driver's Terms and Conditions.
              </p>
              <p className="pPrivacySub">
                1.2 In case of conflict between the provisions of this Contract
                and the User's/ Participating Driver's Terms and Conditions, the
                rights, duties and obligations and remedies between the User and
                Participating Driver shall be governed by this Contract.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                2. Special Contract of Private Carriage of Goods
              </p>
              <p className="pPrivacySub">
                2.1. This Contract shall take effect between the User and the
                Participating Driver upon the acceptance by the Participating
                Driver of the User's Order.
              </p>
              <p className="pPrivacySub">
                2.2 For and in consideration of the payment by the User of the
                fees and charges as computed through the Software, the
                Participating Driver shall provide the Private Carrier Services
                for the account of the User in accordance with the terms
                indicated by the User in the Order.
              </p>
              <p className="pPrivacySub">
                2.3 The User shall pay the Participating Drivers in accordance
                with the agreed mode of payment selected through the Software
                upon submission of the Order.
              </p>
              <p className="pPrivacySub">
                2.4 No cancellation fees are chargeable as long as an Order is
                cancelled and communicated within sixty (60) minutes before the
                start of the Order pickup time. In the event that the
                cancellation was made after the Order pickup time has started,
                User shall be charged with the Standard Transport Fee.
              </p>
              <p className="pPrivacySub">
                2.5 It is expressly understood that this Contract exclusively
                covers the carriage of goods and does not extend to the carriage
                of persons. On a case-to-case basis, and subject to the sole
                discretion of the Participating Driver, the Participating Driver
                may allow persons to be transported as accompanying persons to
                the Shipment upon the request of the User. The User expressly
                agrees that the incidental transportation of accompanying
                persons may be allowed by the Participating Driver as a mere
                accommodation and only in cases where the accompanying persons
                are necessary to minimize any risk of damage or loss to the
                Shipment. The User expressly assumes any and all liability
                arising from the transportation of accompanying persons by the
                Participating Driver.
              </p>
              <p className="pPrivacySub">
                2.6 The User and the Participating Driver acknowledge that any
                payment to the Participating Driver is made exclusively for the
                provision of Private Carrier Services and does not cover
                services for carrying or transporting accompanying passengers.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                3. Participating Driver's Warranties; Duties and Obligations
              </p>
              <p className="pPrivacySub">
                3.1. The Participating Driver warrants that he is a duly
                licensed driver in accordance with the laws of the Philippines,
                and that he is the registered owner or the authorized driver of
                the delivery vehicle to be used in this Contract.
              </p>
              <p className="pPrivacySub">
                3.2 The Participating Driver undertakes to personally execute
                the duties and obligations of the private carrier under this
                Contract.
              </p>
              <p className="pPrivacySub">
                3.3 The Participating Driver represents and warrants to the User
                that he has the special skills, appropriate delivery vehicle and
                sufficient property to perform the Private Carrier Services
                under this Contract and in accordance with the instructions of
                the User as indicated in the Order.
              </p>
              <p className="pPrivacySub">
                3.4 The Participating Driver undertakes to faithfully comply
                with the Participating Driver's Code of Conduct and with the
                terms and conditions of this Contract.
              </p>
              <p className="pPrivacySub">
                3.5 The Participating Driver shall provide any additional
                manpower requirements as may be indicated in the Order, and
                shall exercise direct supervision and control over the acts and
                services performed by the additional personnel provided by him.
              </p>
              <p className="pPrivacySub">
                3.6 The Participating Driver shall provide due compensation to
                the additional personnel which he contracts to provide
                assistance to him in fulfilling the Order, and shall comply with
                all applicable laws in dealing with his assistants.
              </p>
              <p className="pPrivacySub">
                3.7 The Participating Driver agrees that he may be reported by
                the User to JGO Delivery for any violation of this Contract, and
                after due inquiry by JGO Delivery, may be penalized for his
                violation of the terms and conditions of this Contract and that
                he may be off-boarded from the Software as a consequence
                thereof.
              </p>
              <p className="pPrivacySub">
                3.8 The Participating Driver warrants that he is not engaged in
                the business of a public utility or a common carrier, and that
                he is not an employee, representative, agent, principal or
                officer of JGO Delivery.
              </p>
              <p className="pPrivacySub">
                3.9 The Participating Driver shall refuse any Shipment that is
                or appears to be prohibited by law, dangerous or hazardous
                materials or substances, and radioactive material, or which may
                be harmful to the Participating Driver or the delivery vehicle.
              </p>
              <p className="pPrivacySub">
                3.10 The Participating Driver shall exercise the diligence of a
                good father of the family to transmit the Shipment. He shall
                take reasonable precaution to prevent unauthorized persons from
                accessing the Shipment. He shall take reasonable precaution
                against loss of or damage to the Shipment while in transit.
              </p>
              <p className="pPrivacySub">
                3.11 The Participating Driver shall use reasonable effort to
                deliver the Shipment according to the instructions of the User
                and the estimated time of arrival. Participating Drivers shall
                not be liable (whether in contract, tort or otherwise) for any
                delays in effecting delivery thereof for whatever reasons,
                unless the delay is directly caused by the gross negligence or
                fault of the Participating Driver.
              </p>
              <p className="pPrivacySub">
                3.12 The Participating Driver shall not be liable for any loss
                or damage arising from or in connection with the User's
                violations of warranties and obligations as stated in the User's
                Terms and Conditions or in this Contract.
              </p>
              <p className="pPrivacySub">
                3.13 The Participating Driver shall not be liable for any delay
                in delivery of the Shipment, loss or damage due to force
                majeure, or any acts or omissions of any party other than the
                Participating Driver or his agents/assistants.
              </p>
              <p className="pPrivacySub">
                3.14 The Participating Driver expressly consents to the
                collection, processing, storage and disclosure of personal
                information as may be necessary for the performance of his
                undertakings under this Contract. Specifically, the
                Participating Driver also expressly consents to the collection,
                processing, storage and disclosure of his personal information
                insofar as may be necessary for consumer complaint resolutions
                and resolution of other legal actions, whether administrative,
                civil or criminal. All other lawful criteria for the processing,
                use and disclosure of personal information of the Participating
                Driver under the Philippine Data Privacy Act (Republic Act No.
                10173) are hereby incorporated in this agreement.
              </p>
              <p className="pPrivacySub">
                3.15 The Participating Driver warrants and represents that
                he/she has all the legal requirements, licenses, government
                approvals, government permits, mandatory government
                registrations, government consent, government notices, among
                others, including regular/periodic compliance with pertinent
                government regulations, including but not limited to the
                Securities and Exchange Commission, Department of Trade and
                Industry, Bureau of Internal Revenue, Social Security System,
                Home Development Mutual Fund, Philippine Health Insurance
                Corporation, local government units (including the Mayor's
                Office and the barangay), Department of Information and
                Communication Technologies, Land Transportation Office,
                Department of Transportation, and other applicable government
                agencies, in order to perform his/her contractual obligations
                herein. The Participating Driver acknowledges that JGO Delivery
                may rely on such warranty and representation without the need of
                documentary proof of the foregoing. The Participating Driver
                releases JGO Delivery from any liability, damage or claim that
                may result from the Participating Driver's misrepresentation or
                violation of warranty, as set forth in this section.
              </p>
              <p className="pPrivacySub">
                3.16 The Participating Driver hereby expressly waives any claim,
                right of action or cause of action against JGO Delivery for
                damages, losses, death, or physical injuries, to the Participant
                Driver's own person or to third persons, arising from accidents,
                fortuitous events, and other unforeseen events during the course
                of performance of the contractual obligations herein. The
                Participant Driver acknowledges that he/she is independently
                operating on his/her own judgment in the course of performing
                his/her service, without control by JGO Delivery over the means
                and methods of his/her work. The Participant Driver assumes the
                risks arising from such unforeseen events. The Participating
                Driver releases JGO Delivery from any liability, damage or claim
                that may result from such losses, damages, death, or physical
                injuries.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                4. User's Warranties; Duties and Obligations
              </p>
              <p className="pPrivacySub">
                4.1. The User warrants that he has the legal capacity to enter
                into this Contract under Philippine laws.
              </p>
              <p className="pPrivacySub">
                4.2 The User conclusively agrees that the Private Carrier
                Services to be provided by the Participating Driver shall be
                subject to this Contract.
              </p>
              <p className="pPrivacySub">
                4.3 The User acknowledges and agrees that the Participating
                Driver is a private carrier, and is not a public utility or a
                common carrier and thus, the rules pertaining to public
                utilities or common carriers shall have no application to this
                Contract.
              </p>
              <p className="pPrivacySub">
                4.4 The User warrants that he has provided complete and accurate
                information in submitting the Order, such as the description of
                the delivery items included in the Shipment, his choice of
                delivery vehicle type, add-on services availed, and handling
                instructions of the Shipment, if any, through the Software, and
                agrees that the Participating Driver may rely upon the
                information provided by the User as true and correct without
                conducting an independent verification of the same.
              </p>
              <p className="pPrivacySub">
                4.5 The User warrants to the Participating Driver that he is
                either the owner or the authorized agent of the owner of the
                Shipment, and that he is authorized to enter into this Contract
                not only for himself but also as agent for and on behalf of the
                owner of the Shipment.
              </p>
              <p className="pPrivacySub">
                4.6 The User warrants that he has complied with all laws and
                regulations relating to the nature, condition, packing,
                handling, storage and carriage of the Shipment. User shall not
                dispatch any articles that are prohibited by law, dangerous or
                hazardous materials or substances, radioactive material, or
                which may be harmful to the Participating Driver or the delivery
                vehicle.
              </p>
              <p className="pPrivacySub">
                4.7 The User bears complete responsibility to ensure that the
                Shipment is adequately packed to protect against damage in the
                course of transit. It is conclusively presumed that the delivery
                items in the Shipment are inadequately packed if it appears to
                have been removed without the case, wrapper or container, or
                where the seal or packaging of the delivery items in the
                Shipment are torn or broken.
              </p>
              <p className="pPrivacySub">
                4.8 The User agrees that Participating Driver is not obliged to
                open and inspect the Shipment, and that Participating Driver
                shall bear no responsibility or any legal liability resulting
                from the transportation of the Shipment.
              </p>
              <p className="pPrivacySub">
                4.9 The User is liable for any loss or damage suffered by the
                Participating Driver or any third party as a result of User's
                violation/s of this Contract.
              </p>
              <p className="pPrivacySub">
                4.10 The User agrees to hold the Participating Driver free and
                harmless from any legal liability to any third party as a result
                of any breach of the User's warranties, duties and obligations.
              </p>

              <p className="pPrivacySub">
                4.11 The User agrees and undertakes to indemnify the
                Participating Driver against any and all assessments,
                liabilities, claims, suits, demands, damages, judgments, fees,
                costs, fines, penalties, interests and expenses of any nature
                whatsoever that the Participating Driver may suffer arising out
                of or in connection with the transportation of accompanying
                persons to the Shipment upon the request of the User.
              </p>
              <p className="pPrivacySub pTitleprivacy">5. Miscellaneous</p>
              <p className="pPrivacySub">
                5.1. Participating Driver's Limited Liability. The liability of
                the Participating Driver to the User for loss or destruction of
                the Shipment shall be limited to Two Thousand Pesos (PHP 2,000)
                only. The User shall bear the risk of loss if he avails of the
                Private Carrier Services for Shipments with a value exceeding
                this amount.
              </p>
              <p className="pPrivacySub">
                5.2. Entire agreement. Both parties acknowledge that they have
                read this Contract, understood it and agreed to be bound by its
                terms and further agree that this Contract, together with the
                terms of the relevant Order, constitutes as the complete and
                exclusive statement of the agreement between the parties with
                respect to the subject matter hereof, which supersedes all
                proposals, and all other communications, regardless of the form
                thereof, between the parties relating to the subject matter of
                this Contract. No representation, promise or inducement has been
                made by either party that is not embodied in this Contract, and
                neither party shall be bound by or liable for any alleged
                representation, promise or inducement not otherwise contained in
                this Contract.
              </p>
              <p className="pPrivacySub">
                5.3 Governing Law. This Contract shall be governed by and
                construed in accordance with the laws of Philippines.
              </p>
              <p className="pPrivacySub">
                5.4 Venue of Action. In the event of any dispute, controversy,
                or claim arising from or relating to this Contract or the
                relevant Order, or the interpretation thereof, or any
                arrangements relating thereto or contemplated therein, or the
                breach, termination, or invalidity thereof, the parties hereto
                agree that venue shall be exclusively and properly set in the
                courts of Makati City, Philippines.
              </p>
              <p className="pPrivacySub">
                5.5 Severality. If any provision of this Contract is or becomes
                invalid, illegal or unenforceable, the remaining provisions
                shall remain in full force and effect, and for the invalid,
                illegal or unenforceable provision shall be substituted a valid,
                legal and enforceable provision which shall be as similar as
                possible in economic and business objectives as intended by the
                parties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
