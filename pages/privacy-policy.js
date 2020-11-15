import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar1";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";
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
          <div className="row">
            <div className="col-lg-12">
              <ul className="ulNav">
                <li
                  className="liNav"
                  data-toggle="modal"
                  data-target="#driverModal"
                >
                  Ride with Us
                </li>
                <li className="liNav">Deliver Now</li>
                <li className="liNav">JGO Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conHide">
        <div className="row">
          <div className="col-lg-12">
           <Navbar></Navbar>
          </div>
        </div>
        <div className="container" style={{ marginTop: "8%" }}>
          <div className="row">
            <div className="col-lg-12">
              <p className="pPrivacy">Privacy Policy</p>
              <p className="pPrivacySub">
                JGO Philippines, Inc. (“JGO”) is committed to the secure
                processing of the personal data it acquires from or pertaining
                to the users of its website (“Website”), mobile device software
                application (“JGO App”) and/or services (“Users” or,
                individually, “User”), as well as licensed drivers who install
                the JGO App on a mobile device, and have been accredited with
                JGO as part of a pool of drivers who may be willing, at their
                sole discretion, to provide pick-up, transportation of parcels,
                and delivery services as well as any add-on services (“Private
                Carrier Services”) to a User (“Participating Drivers”). In this
                regard, JGO shall ensure that its processing of such personal
                data is in accordance with the Data Privacy Act of 2012 (“DPA”),
                its Implementing Rules and Regulations (“DPA IRR”), issuances of
                the National Privacy Commission (“NPC”) and other applicable
                laws and regulations on data privacy. This Privacy Policy (For
                Users and Participating Drivers) is in line with JGO’s
                commitment to the protection of privacy rights.
              </p>
              <p className="pPrivacySub">
                This Privacy Policy (For Users and Participating Drivers)
                outlines the terms under which JGO processes the personal data
                of the Users and Participating Drivers and how such personal
                data is stored, used, retained, shared and accessed. This
                Privacy Policy (For Users and Participating Drivers) likewise
                informs the Users and Participating Drivers of their rights and
                remedies as data subjects, and the measures JGO undertakes for
                the protection of their personal information.
              </p>
              <p className="pPrivacySub">
                By agreeing to the terms and conditions of this Privacy Policy
                (For Users and Participating Drivers), the User and/or
                Participating Driver expressly consents to the collection, use,
                disclosure and all other forms of processing of his/her personal
                data as provided in this Privacy Policy (For Users and
                Participating Drivers).
              </p>
              <p className="pPrivacySub pTitleprivacy">
                A. Personal information collected or otherwise processed by JGO
              </p>
              <p className="pPrivacySub">
                JGO collects and processes personal data from or pertaining to
                the User and/or Participating Driver when the User and/or
                Participating Driver registers on the Website, downloads or
                registers through the JGO App, is accredited as a Participating
                Driver by JGO, or avails of JGO’s services whether through the
                Website or the JGO App in order to avail of Private Carrier
                Services from Participating Drivers or provide Private Carrier
                Services to Users.
              </p>
              <p className="pPrivacySub">
                Such personal data from or pertaining to the User are as
                follows:
              </p>
              <ul className="ulPrivacy">
                <li>Name</li>
                <li>Mobile or landline number</li>
                <li>Residential/office/billing address or location</li>
                <li>E-mail address</li>
                <li>Credit card or debit card number</li>
              </ul>
              <p className="pPrivacySub pTitleprivacy">
                Such personal data from or pertaining to the Participating
                Driver are as follows:
              </p>
              <ul className="ulPrivacy">
                <li>Name</li>
                <li>Mobile or landline number</li>
                <li>
                  Residential/office/billing address or location of the
                  Participating Driver through the tracking of the booked
                  vehicle(s)
                </li>
                <li>Driver’s License details</li>
                <li>
                  Other relevant government-issued ID details including but not
                  limited to NBI or Police Clearance
                </li>
                <li>E-mail address</li>
                <li>Credit card or debit card number</li>
                <li>Average Monthly Income</li>
                <li>Date of birth</li>
              </ul>
              <p className="pPrivacySub">
                Users and Participating Drivers accept that JGO or its
                authorized service providers, third party vendors, contractors,
                subcontractors, agents and corporate partners (“Third Parties”),
                as well as said Third Parties’ member companies, affiliates
                and/or service providers, may use cookies to store information
                on the Users and Participating Drivers in order to provide Users
                and Participating Drivers with a customized and more efficient
                experience in accessing or using the Website and/or the JGO App.
              </p>
              <p className="pPrivacySub">
                If a User and/or Participating Driver provides the personal data
                of a third party to JGO, the User or Participating Driver
                warrants that the required consent from the third party
                concerned was secured by the User and/or Participating Driver
                prior to providing the personal data pertaining to said third
                party to JGO.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                B. Purpose of collection and other processing of personal
                information by JGO
              </p>
              <p className="pPrivacySub">
                JGO collects and otherwise processes the above personal data for
                the following purposes:
              </p>
              <ul className="ulPrivacy">
                <li>
                  To publish a User’s proposal to engage the services of a
                  Participating Driver, which include Private Carrier Services
                  of the User’s package/s, parcel/s, delivery item/s or part
                  thereof (“Shipment”) for compensation to be determined in
                  accordance with the prevailing rates on the Website or the JGO
                  App (“Order”), depending on which platform is used to place
                  the Order;
                </li>
                <li>To confirm or clarify an Order</li>
                <li>To track the booked vehicles</li>
                <li>
                  To determine compliance with the User’s or Participating
                  Drivers’ Terms and Conditions
                  {/* (https://www.lalamove.com/en-ph-driver-terms); */}
                </li>
                <li>
                  To address Users’ complaints against the Participating Driver
                  concerned
                </li>
                <li>
                  To verify the truthfulness of the personal data provided
                </li>
                <li>
                  To facilitate the availment and monitoring of the discounted
                  products and services, special promotions and other benefits
                  (the “Benefits”) by Users or Participating Drivers from JGO
                  and/or JGO’s corporate and institutional partners
                </li>
                <li>
                  To facilitate Users’ use of the Private Carrier Services
                </li>
                <li>
                  To facilitate Participating Drivers’ provision of the Private
                  Carrier Services
                </li>
                <li>
                  To facilitate Users’ and Participating Drivers’ use of and
                  access to the Website and/or the JGO App
                </li>
                <li>
                  To administer Users’ and Participating Drivers’ accounts
                </li>
                <li>To facilitate Users’ payment for their Orders</li>
                <li>
                  To facilitate Participating Drivers’ receipt of their eighty
                  percent (80%) share from successfully completed Orders
                </li>
                <li>
                  To provide Users updates on the fulfillment of Users’ Orders
                </li>
                <li>
                  To provide Users updates on the fulfillment of Users’ Orders
                </li>
                <li>
                  To carry out research on Users’ and Participating Drivers’
                  demographics, behavior as consumer and individual preferences
                </li>
                <li>
                  To monitor Users’ and Participating Drivers’ use of the
                  Website and/or the JGO App
                </li>
                <li>
                  To comply with the orders or regulations of enforcement
                  agencies, judicial and quasi-judicial bodies, or other
                  competent government authority
                </li>
                <li>
                  To fulfill the legitimate objectives of JGO as a duly
                  registered corporation, including any and all contractual
                  obligations that JGO may have entered into that are necessary
                  or directly related to the services provided, the performance
                  of which being at all times consistent with the DPA and the
                  DPA IRR, issuances of the NPC and other applicable laws and
                  regulations on data privacy
                </li>
                <li>To protect Users and Participating Drivers</li>
                <li>
                  To establish, exercise or defend legal claims in favor of or
                  against JGO
                </li>
                <li>To prevent fraud and illegal activities</li>
                <li>To provide information on promos or discounts</li>
                <li>To market JGO’s services</li>
                <li>
                  To fulfill any purpose directly related to the above purposes
                </li>
              </ul>
              <p className="pPrivacySub pTitleprivacy">
                JGO’s processing of Users’ and Participating Drivers’ personal
                information
              </p>
              <p className="pPrivacySub">
                Apart from collecting Users’ and Participating Drivers’ personal
                data, JGO shall engage in all other forms of processing, such as
                recording, organization, storage, updating, modification,
                retrieval, consultation, use, consolidation, blocking, erasure
                or destruction of personal data.
              </p>
              <p className="pPrivacySub">
                JGO’s processing may be performed manually or through automated
                means.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                B. Purpose of collection and other processing of personal
                information by JGO
              </p>
              <ul className="ulPrivacy">
                <li>
                  JGO may share Users’ and Participating Drivers’ personal data
                  to third parties for the fulfillment of any of the purposes
                  enumerated above or, in extraordinary circumstances, when JGO
                  believes that the sharing of such personal data is necessary
                  to prevent a threat to the life or health of another. Such
                  third parties include but are not limited to the following
                </li>
                <li>Users and Participating Drivers</li>
                <li>Subsidiaries, parent company or other related companies</li>
                <li>
                  Service providers who provide technical, operational and/or
                  logistical support for all functions necessary, desirable to
                  or in any manner related to the business of JGO
                </li>
                <li>
                  Courts, quasi-judicial agencies and tribunals, as a response
                  to an order, subpoena or other legal processes
                </li>
                <li>
                  Law enforcement personnel, government agencies and other state
                  entities in the exercise of their investigative or regulatory
                  powers
                </li>
                <li>
                  Entities engaged by JGO to assist in establishing, exercising
                  or defending legal claims or protecting JGO’s rights and
                  assets
                </li>
                <li>Corporate and institutional partners</li>
                <li>
                  In all instances where the sharing of personal data is for
                  commercial purposes, JGO shall ensure that the same is covered
                  by a data sharing agreement which shall establish, or oblige
                  the Personal Information Controller (“PIC”) or Personal
                  Information Processor (“PIP”) to whom the User’s and
                  Participating Driver’s personal data will be shared to
                  establish, organizational, physical and technical safeguards
                  for data privacy and security no less than those provided in
                  this Privacy Policy (For Users and Participating Drivers),
                  which in all instances shall comply with the DPA, the DPA IRR,
                  issuances of the NPC and other applicable laws and regulations
                  on data privacy
                </li>
                <li>
                  Before a User’s and Participating Driver’s personal data is
                  shared, JGO shall obtain the User’s and Participating Driver’s
                  consent and provide the Participating Driver with the
                  following information
                </li>
                <li>
                  Identity of the PIC or PIP to whom the User’s and
                  Participating Driver’s personal information will be shared
                </li>
                <li>Purpose of the data sharing</li>
                <li>Categories of personal data to be shared</li>
                <li>
                  Intended recipients or categories of recipients of the
                  personal data
                </li>
                <li>
                  Existence of the User’s and Participating Driver’s rights as a
                  data subject under the DPA, the DPA IRR, issuances of the NPC,
                  other applicable laws and regulations on data privacy and the
                  data sharing agreement between JGO and the PIC or PIP to whom
                  the Participating Driver’s personal data will be shared; and
                  Other information that would sufficiently notify the User and
                  Participating Driver of the nature and extent of the data
                  sharing involved and the manner of the processing of his/her
                  personal data
                </li>
              </ul>
              <p className="pPrivacySub pTitleprivacy">
                E. Outsourcing by JGO of the processing of Users’ and
                Participating Drivers’ personal information
              </p>
              <p className="pPrivacySub">
                JGO may engage a third party to process Participating Drivers’
                personal data. Such engagement will be covered by an outsourcing
                agreement mandating said third party to put in place the
                organizational, physical and technical measures no less than
                those provided in this Privacy Policy (For Users and
                Participating Drivers), which in all instances shall comply with
                the DPA, the DPA IRR, issuances of the NPC and other applicable
                laws and regulations on data privacy.
              </p>
              <p className="pPrivacySub">
                JGO guarantees that it will not sell Users’ and Participating
                Drivers’ personal data
              </p>
              <p className="pPrivacySub pTitleprivacy">
                F. JGO’s storage and retention of Users’ and Participating
                Drivers’ personal data
              </p>
              <p className="pPrivacySub">
                Users’ and Participating Drivers’ personal data collected or
                otherwise processed by JGO shall be stored in secure online
                storage platforms, protected cloud infrastructure and on-site
                drives of JGO. Users’ and Participating Drivers’ personal data
                collected or otherwise processed by JGO shall be stored in
                secure online storage platforms, protected cloud infrastructure
                and on-site drives of JGO which are only accessible to JGO
                employees. JGO uses industry-standard encryption to provide
                protection for the information and requires users and drivers to
                verify their identity through their log-in username and password
                before they can amend information on their accounts. Physical
                copies of said personal data, if any, shall be stored in JGO’s
                offices in secure and monitored rooms accessible only to duly
                authorized personnel
              </p>
              <p className="pPrivacySub">
                JGO will retain Users’ and Participating Drivers’ personal data
                for as long as the purposes for which they are being processed
                are not accomplished.
              </p>

              <p className="pPrivacySub pTitleprivacy">
                G. Users’ and Participating Drivers’ access to their personal
                information
              </p>
              <p className="pPrivacySub">
                Users and Participating Drivers who wish to access their
                personal data collected or otherwise processed by JGO may e-mail
                JGO’s Data Protection Officer (“DPO”), through his/her e-mail
                below, to request copies of said personal data or acquire
                information on JGO’s use, sharing, other disclosure or other
                processing of the said data within a particular period.
              </p>
              <p className="pPrivacySub">
                JGO shall, however, require proof of a User’s or Participating
                Driver’s identity before granting access to said information.
                JGO reserves the right to take reasonable measures to further
                confirm a Participating Driver’s identity before granting
                access.
              </p>
              <p className="pPrivacySub">
                JGO reserves the right to charge a reasonable fee for the
                retrieval and reproduction of the Participating Driver’s
                personal data or information on JGO’s use, sharing, other
                disclosure or other processing of the Participating Driver’s
                personal data within the requested period.
              </p>

              <p className="pPrivacySub pTitleprivacy">
                H. Other rights of the Users and Participating Drivers as data
                subjects
              </p>
              <p className="pPrivacySub">
                Users and Participating Drivers have the right to correct,
                update or otherwise modify their personal data as collected and
                processed by JGO. Users and Participating Drivers may correct,
                update or otherwise modify such personal data by accessing their
                account through the Website or the JGO App.
              </p>
              <p className="pPrivacySub">
                Users and Participating Drivers also have the right to withdraw
                their consent to the processing of their personal data, object
                thereto and/or demand that said data be erased from JGO’s
                records. The Users and Participating Drivers understand that the
                withdrawal of their consent, objection to JGO’s processing
                and/or demand for erasure may mean that JGO may be unable to
                provide its services to the Participating Drivers withdrawing
                such consent, objecting to JGO’s processing or demanding erasure
                of their personal data from JGO’s records.
              </p>
              <p className="pPrivacySub">
                To exercise any of the above rights, Users and Participating
                Drivers may e-mail JGO’s DPO, through his/her e-mail below. If
                JGO is unable or unwilling to acknowledge these rights or give
                them due course, Users and Participating Drivers may file a
                complaint before the NPC.
              </p>
              <p className="pPrivacySub pTitleprivacy">
                I. JGO’s protection of Users’ and Participating Drivers’
                personal data
              </p>
              <p className="pPrivacySub">
                JGO implements the organizational, physical and technical
                measures provided in the DPA, DPA IRR, issuances of the NPC and
                other applicable laws or regulations on data privacy for the
                protection of Participating Drivers’ personal data. JGO
                restricts access of its employees, other than those specifically
                authorized, to Users’ and Participating Drivers’ personal
                information.
              </p>
              <p className="pPrivacySub">
                JGO employs a dedicated information technology team to protect
                its Users’ and Participating Drivers’ personal data. JGO
                maintains technological safeguards to prevent unauthorized
                access to Participating Drivers’ personal data. JGO ensures that
                credit card information is processed by PCI-certified
                merchants/payment providers.
              </p>
              <p className="pPrivacySub">
                JGO undertakes to constantly assess and improve upon its data
                protection measures to ensure the safety and integrity of the
                personal data it processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
