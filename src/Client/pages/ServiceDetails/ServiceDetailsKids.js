import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../../components/Card/ServiceCard";
import Footer from "../HomePage/Footer";
import { Scrollbars } from "react-custom-scrollbars";
import ServiceCategorySelectBut from "../../components/buttons/ServiceCategorySelectBut";
import ServiceImage from "../../images/services/salon working-01.png";
import ServiceCardTopic from "../../components/Card/ServiceCardTopic";
import { getAllServices } from "../../../actions/services";

export default function ServiceDetailsKids() {
  const dispatch = useDispatch();
  const [isBackdrop, setIsBackDrop] = useState(false);

  // const [ispoup, setIspopup] = useState(false);
  const { Services, loading } = useSelector((state) => state.services);
  const { location } = useSelector((state) => state.location);

  console.log(location);
  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <>
      <div className="md:h-full lg:h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6">
        {/* <!--Card 1--> */}
        <div className="border-r border-gray-200 flex md:flex-col flex-row justify-center md:justify-start px-8">
          <ServiceCategorySelectBut
            content="Hair"
            BaseUrl="ServiceDetailsKids"
          />
          <ServiceCategorySelectBut
            content="Skin"
            BaseUrl="ServiceDetailsKids"
          />
          <ServiceCategorySelectBut
            content="Face"
            BaseUrl="ServiceDetailsKids"
          />
        </div>
        {/* <!--Card 2--> */}
        <div className="border-r border-gray-200 ">
          <Scrollbars style={{ height: 800 }}>
            <ServiceCardTopic Topic="Face" />
            {!loading ? (
              location !== null ? (
                Services.map(
                  (service) =>
                    service.serviceType === "Kid" &&
                    service.category === "Face" &&
                    service.location === location && (
                      <ServiceCard
                        service={service}
                        setIsBackDrop={setIsBackDrop}
                      />
                    )
                )
              ) : (
                Services.map(
                  (service) =>
                    service.serviceType === "Kid" &&
                    service.category === "Face" && (
                      <ServiceCard
                        service={service}
                        setIsBackDrop={setIsBackDrop}
                      />
                    )
                )
              )
            ) : (
              <div>Loading...</div>
            )}

            <ServiceCardTopic Topic="Hair" />
            {!loading ? (
              location !== null ? (
                Services.map(
                  (service) =>
                    service.serviceType === "Kid" &&
                    service.category === "Hair" &&
                    service.location === location && (
                      <ServiceCard
                        service={service}
                        setIsBackDrop={setIsBackDrop}
                      />
                    )
                )
              ) : (
                Services.map(
                  (service) =>
                    service.serviceType === "Kid" &&
                    service.category === "Hair" && (
                      <ServiceCard
                        service={service}
                        setIsBackDrop={setIsBackDrop}
                      />
                    )
                )
              )
            ) : (
              <div>Loading...</div>
            )}
            <ServiceCardTopic Topic="Skin" />
            {!loading ? (
              location !== null ? (
                Services.map(
                  (service) =>
                    service.serviceType === "Kid" &&
                    service.category === "Skin" &&
                    service.location === location && (
                      <ServiceCard
                        service={service}
                        setIsBackDrop={setIsBackDrop}
                      />
                    )
                )
              ) : (
                Services.map(
                  (service) =>
                    service.serviceType === "Kid" &&
                    service.category === "Skin" && (
                      <ServiceCard
                        service={service}
                        setIsBackDrop={setIsBackDrop}
                      />
                    )
                )
              )
            ) : (
              <div>Loading...</div>
            )}
          </Scrollbars>{" "}
        </div>

        {/* <!--Card 3--> */}
        <div className="border-r border-gray-200">
          <img alt="meaningfull" className="pt-44" src={ServiceImage} />
        </div>
      </div>
      <Footer />
      {isBackdrop && (
        <div onClick={() => setIsBackDrop(false)} className="backdrop"></div>
      )}
    </>
  );
}
