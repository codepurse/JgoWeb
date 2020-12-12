import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";
import AuthService from "../services/auth.service";
import Mobilenav from "../component/mobilenav";
import { useRouter } from "next/router";
import Navbar from "../component/navbar1";
import App from 'next/app'
function showModal() {
  localStorage.setItem("showmodal", "1");
}

export default function faq() {
  const router = useRouter();
  function goSupport() {
    if (AuthService.getToken()) {
      router.push("/profile");
    } else $("#modalSupport").modal("toggle");
  }

  useEffect(() => {
    $(".modal-backdrop").hide();
  }, []);

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <Navbar></Navbar>
      <div className="divNavbar">
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>
      <Mobilenav></Mobilenav>

      <div className="container-fluid conFaq conHide">
        <div className="container" style={{ paddingTop: "150px" }}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="pFaq">FREQUENTLY ASK QUESTION</p>
            </div>
            <div className="col-lg-12" style={{ marginTop: "20px" }}>
              <p className="pFaqSub">Customer</p>
              <div className="accordion">
                <div className="accordion-item">
                  <button id="accordion-button-1" aria-expanded="false">
                    <span className="accordion-title">
                      How do I place a delivery booking with JGO? Paano mag book
                      ng delivery sa JGO?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      You may book through the following methods: JGO App and
                      JGO Website (insert link) Maaring mag book ng delivery sa
                      mga sumusunod: JGO App at JGO Website (insert link)
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-2" aria-expanded="false">
                    <span className="accordion-title">
                      Can I get receipt for every booking made with JGO
                      App/Website? Makakakuha ba ako ng resibo para sa aking
                      delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, an e-receipt will be sent to your registered email
                      upon every successful delivery. Oo, ang e-receipt ay
                      ipapadala sa iyong registered email para sa mga
                      nakumpletong delivery.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-3" aria-expanded="false">
                    <span className="accordion-title">
                      Can I input multiple addresses on a single delivery
                      request? Maari bang magbook ng maraming address para sa
                      isang delivery request?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, you can book up to a maximum of fifteen addresses on
                      a single delivery request. You may arrange the order of
                      each delivery by priority. Oo, maari kang mag book ng
                      hanggang fifteen na mga addresses sa isang single delivery
                      request. Maari mo ring ayusin ang pagkakasunod sunod ng
                      iyong delivery.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-4" aria-expanded="false">
                    <span className="accordion-title">
                      How much is the base rate of the delivery fee? Magkano ang
                      base rate para sa delivery fee?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      JGO Delivery offers Php 60 base rate for the delivery
                      service Ang JGO Delivery ay nag ooffer ng Php 60 na base
                      rate para sa delivery service
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      What if there is a damage to the goods? How should I
                      report it? Paano kung nagkaroon ng sira ang ipinadala kong
                      item? Paano ko ito irereport?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      We always make sure your shipment will be delivered in
                      good condition. If damage will occur, you may report the
                      incident to our customer care within 24 hours. Palagi
                      naming sinisuguro na maayos ang pagdeliver sa inyong mga
                      items. Kung magkaroon man ng sira, maaring ninyo itong
                      ireport sa aming customer care sa loob lamang ng 24 oras.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      What are the available payment methods? Ano-ano ang mga
                      paraan ng pagbabayad para sa delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Cashless payment: Pay thru PayMaya, GCash, Debit/Credit or
                      Card Cash On Delivery (COD): Pay directly to your JGO
                      Rider
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Where does JGO deliver? Saan nagdedeliver ang JGO?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      The services of JGO Delivery is available within Metro
                      Manila and the following areas. Ang serbisyo ng JGO
                      Delivery ay maasahan sa Metro Manila kabilang ang mga
                      sumusunod na lugar:
                      <ul class>
                        <li>Muntinlupa</li>
                        <li>Paranaque</li>
                        <li>Las Pinas</li>
                        <li>Makati</li>
                        <li>Cavite Area</li>
                        <li>
                          Laguna Area (Sta. Rosa) - farthest in South Area
                        </li>
                        <li>Malabon</li>
                        <li>Caloocan</li>
                        <li>Navotas</li>
                        <li>Marikina</li>
                        <li>San Juan</li>
                        <li>Pasig</li>
                        <li>Mandaluyong</li>
                        <li>Quezon City - farthest in North Area</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Can I cancel my booking? Maari bang mag cancel ng
                      delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Customers may cancel a delivery but is subject to a 20%
                      penalty based on the delivery cost provided on the app
                      upon booking Maaring mag cancel ng delivery ngunit may
                      katumbas na 20% penalty base sa halaga ng delivery fee na
                      provided sa app matapos mag book ng delivery
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      What type of items can I book for delivery with JGO?
                      Ano-anong mga klaseng item ang maaring ipadala sa JGO?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <ul>
                      <li>
                        Maximum item dimensions (LxWxH): 1.6 x 1.25 x 1.6 ft
                      </li>
                      <li>Maximum item weight: 10kg</li>
                      <li>
                        Items which can be delivered: <br></br>- Documents
                        except credit/debit card/ Mga dokumento maliban sa
                        credit/debit card <br></br> Parcels packed or inside a
                        bag/ Mga item na nakabalot o nasa bag - Packed food/ Mga
                        pagkain na nakabalot
                      </li>
                      <li>
                        Items which cannot be delivered:
                        <br /> Illegal items and substances (drugs)/ Mga ilegal
                        na bagay o ipinagbabawal na gamot
                        <br /> Explosive, hazardous and flammable/ Sumasabog,
                        delikado at mga bagay na nagsisimula ng apoy
                        <br></br> Weapons including firearms and ammunition/
                        baril at bala
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Why does the JGO Rider took a photo of my item? Bakit
                      kinunan ng picture ng JGO Rider ang item na for delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      The purpose of the photo is to record the condition of the
                      item from the time of pick up until its drop-off Ang
                      purpose ng pagkuha ng picture ay para ma document ang
                      kundisyon ng iyong item sa oras ng pag pick up hanggang sa
                      drop-off nito
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12" style={{ marginTop: "20px" }}>
              <p className="pFaqSub">Rider</p>
              <div className="accordion">
                <div className="accordion-item">
                  <button id="accordion-button-1" aria-expanded="false">
                    <span className="accordion-title">
                      What are the minimum requirements to become a JGO rider?
                      Anu-ano ang mga minimum na kuwalipikasyon para maging
                      isang JGO Rider?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <ul>
                      <li>At least 18 years old</li>
                      <li>With professional driver’s license</li>
                      <li>Access to a motorcycle</li>
                      <li>
                        Access to a smartphone (Android/iOS) with mobile data
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-2" aria-expanded="false">
                    <span className="accordion-title">
                      What are the steps to register as a rider? , Anu-ano ang
                      mga hakbang para mag register bilang JGO Rider?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <ul>
                      <li>
                        Download the JGO Rider app/ Mag download ng JGO Rider
                        app
                      </li>
                      <li>
                        Fill in the information to register and upload the
                        required documents/ Punan ang mga impormasyon para
                        makapag register at mag upload ng mga required documents
                      </li>
                      <li>Access to a motorcycle</li>
                      <li>
                        Wait for the email confirmation within 7 days after the
                        submission of application/ Hintayin ang email
                        confirmation sa loob ng 7 araw mula sa araw na nag
                        submit ng application
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-3" aria-expanded="false">
                    <span className="accordion-title">
                      How long does it take to get an approval for my
                      application? , Gaano katagal ang approval ng aking
                      aplikasyon?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Confirmation will be sent within 7 days upon submission of
                      application through the JGO rider app. A confirmation will
                      be sent through your registered email Ang kumpirmasyon ng
                      application ay within 7 days simula ng magsubmit ang
                      application mula sa JGO Rider App. Ang confirmation ay
                      ipapadala sa iyong registered email
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-4" aria-expanded="false">
                    <span className="accordion-title">
                      How can I start earning with JGO Delivery? Paano ako
                      kikita sa JGO Delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      JGO Riders may start earning by accepting delivery order
                      through the JGO rider App Ang mga JGO Rider ay maaring
                      magsimulag kumita sa pamamagitan ng pag access sa JGO
                      Rider App at magsimulang tumanggap ng delivery request
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Is there a training to become a JGO Rider? Mayroon bang
                      pagsasanay para maging isang JGO Rider?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, the virtual training is included once you register as
                      a JGO Rider. Oo, may virtual training na kasama kung ikaw
                      ay magregister bilang JGO Rider.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Does JGO take any commission?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, a 20% commission shall be taken by JGO Delivery for
                      every delivery requests accepted and completed through the
                      JGO platform Oo, ang 20% na kumisyon ay mapupunta sa JGO
                      Delivery para sa bawat delivery request na tinanggap at
                      nakumpleto gamit ang JGO platform
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Which areas are covered by JGO Delivery? Anu-anong mga
                      lugar ang sakop ng JGO Delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      The services of JGO Delivery is available within Metro
                      Manila and the following areas. Ang serbisyo ng JGO
                      Delivery ay maasahan sa Metro Manila kabilang ang mga
                      sumusunod na lugar:
                      <ul class>
                        <li>Muntinlupa</li>
                        <li>Paranaque</li>
                        <li>Las Pinas</li>
                        <li>Makati</li>
                        <li>Cavite Area</li>
                        <li>
                          Laguna Area (Sta. Rosa) - farthest in South Area
                        </li>
                        <li>Malabon</li>
                        <li>Caloocan</li>
                        <li>Navotas</li>
                        <li>Marikina</li>
                        <li>San Juan</li>
                        <li>Pasig</li>
                        <li>Mandaluyong</li>
                        <li>Quezon City - farthest in North Area</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Can I cancel my booking? Maari bang mag cancel ng
                      delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Customers may cancel a delivery but is subject to a 20%
                      penalty based on the delivery cost provided on the app
                      upon booking Maaring mag cancel ng delivery ngunit may
                      katumbas na 20% penalty base sa halaga ng delivery fee na
                      provided sa app matapos mag book ng delivery
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Is it possible to receive multiple delivery bookings in
                      one trip? Posible bang makatanggap ng maraming delivery sa
                      isang trip?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, you may receive up to fifteen deliveries in a single
                      delivery request. You may check on your rider app the
                      arrangement of delivery set by the customer. Oo, maaaring
                      makatanggap ng fifteen deliveries sa isang delivery
                      request. Maari mong makita ang pagkakasunod sunod ng
                      delivery sa iyong rider app base sa pagsasaayos ng iyong
                      customer
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      Are riders allowed to check the items for delivery? May
                      pahintulot ba ang riders na mag check ng mga bagay na
                      naibook para sa delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      The rider has the right to inspect the item for delivery
                      on the basis of suspicion that the item is prohibited and
                      to reject the acceptance and delivery of the item. You may
                      report the cancellation of such with the “JGO Rider Care”.
                      Ang rider ay may karapatan na mag inspect ng item para sa
                      delivery base sa suspetsa na ang item ay ipinagbabawal at
                      ireject ang pagtanggap at pag deliver ng item. Maaring
                      ireport ito sa “JGO Rider Care”.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      What are the incentives offered for riders? Anu-ano ang
                      mga benepisyo na maaring matanggap ng riders?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      We will send out rider programs soon through your
                      registered email to inform you of the incentives that JGO
                      Delivery is providing for our riders Ang mga impormasyon
                      tungkol sa mga incentives na binibigay ng JGO Delivery sa
                      aming mga riders ay ipapadala sa inyong registered email
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      What type of items can we accept for delivery? Anu-anong
                      mga bagay ang maaring tanggapon para sa delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <ul>
                      <li>
                        Maximum item dimensions (LxWxH): 1.6 x 1.25 x 1.6 ft
                      </li>
                      <li>Maximum item weight: 10kg</li>
                      <li>
                        Items which can be delivered:
                        <br />
                        Documents except credit/debit card/ Mga dokumento
                        maliban sa credit/debit card
                        <br />
                        Parcels packed or inside a bag/ Mga item na nakabalot o
                        nasa bag
                        <br />
                        Packed food/ Mga pagkain na nakabalot
                      </li>
                      <li>
                        Items which cannot be delivered/ Mga items na
                        ipinagbabawal ideliver:
                        <br /> Illegal items and substances (drugs)/ Mga ilegal
                        na bagay o ipinagbabawal na gamot
                        <br />
                        Explosive, hazardous and flammable/ Sumasabog, delikado
                        at mga bagay na nakaksunog
                        <br />
                        Explosive, hazardous and flammable/ Sumasabog, delikado
                        at mga bagay na nakaksunog
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      How and when do I get paid for the completed delivery
                      requests? Paano at kailan ko matatanggap ang bayad para sa
                      mga nakumpletong delivery?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      You may request payout of earnings daily from 8:00 AM to
                      5:00 PM Maaaring mag request ng payout daily mula 8:00 AM
                      hanggang 5:00 PM
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      How is performance rating being measured?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Customers are asked to give ratings or feedback for the
                      service of every JGO Riders. They may give out 1-5 stars
                      depending on how satisfied they are with your service. Ang
                      ating mga customers ay hinihingan ng ratings o feedback
                      para sa serbisyo ng bawat JGO Riders. Maaari silang
                      magbigay ng 1-5 stars depende sa kung gaano sila nasiyahan
                      sa iyong serbisyo.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      How does cancellation affects my performance rating as a
                      rider? Paano makakaapekto ang mga kanselasyon sa aking
                      performance bilang rider?
                    </span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="accordion-content">
                    <p>
                      Customers may give low ratings once you cancelled a
                      delivery request which affects your performance as a JGO
                      Rider. Maaaring magbigay ng mababang rating ang iyong
                      customer para sa pagkansela ng delivery request na
                      nakakaapekto sa iyong performance bilang isang JGO Rider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conFaqmap conHide">
        <div className="row" style = {{padding: "0px"}}>
          <div className="col-lg-12" style = {{padding: "0px"}}>
            <div id="googleMap" style = {{padding: "0px"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.106561444371!2d120.99639031489468!3d14.478569989880306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce7b517c1a79%3A0xcccd8f656dede7e3!2s8161%20Dr%20Arcadio%20Santos%20Ave%2C%20Para%C3%B1aque%2C%201700%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1607525028376!5m2!1sen!2sph"
                width= "100%"
                height="100%"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid conHide "
        id="contact"
        style={{ backgroundColor: "white" }}
      >
        <div className="container" style={{ padding: "65px 15px" }}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="pFaq">CONTACT US</p>
            </div>
          </div>
          <div
            className="row"
            style={{ borderBottom: "1px solid gray", paddingTop: "20px" }}
          >
            <div className="col-lg-6">
              <p className="pContact1">For Corporate Clients</p>
            </div>
            <div className="col-lg-6">
              <p className="pContact2">Contact your assigned Account Manager</p>
            </div>
          </div>
          <div className="row" style={{ borderBottom: "1px solid gray" }}>
            <div className="col-lg-6">
              <p className="pContact1">For Individual Customer</p>
            </div>
            <div className="col-lg-6">
              <p className="pContact2">Contact us via In-App Chat </p>
            </div>
          </div>
          <div className="row" style={{ borderBottom: "1px solid gray" }}>
            <div className="col-lg-6">
              <p className="pContact1">For Partner Drivers</p>
            </div>
            <div className="col-lg-6">
              <p className="pContact2">Contact us via Driver-App Chat </p>
            </div>
          </div>
          <div className="row" style={{ borderBottom: "1px solid gray" }}>
            <div className="col-lg-6">
              <p className="pContact1">Contact Us</p>
            </div>
            <div className="col-lg-6">
              <p className="pContact2">(02) 85634498</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conHide">
        <Footer></Footer>
      </div>
    </>
  );
}
