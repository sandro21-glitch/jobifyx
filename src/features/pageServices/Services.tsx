import AdditionalInformation from "./servicesContent/AdditionalInformation";
import EmployerConfidentiality from "./servicesContent/EmployerConfidentiality";
import ServiceRefusal from "./servicesContent/ServiceRefusal";
import ServicesMainHeading from "./servicesContent/ServicesMainHeading";
import SpecialCases from "./servicesContent/SpecialCases";

const Services = () => {
  return (
    <section className="section-center min-h-[65vh]">
      <ServicesMainHeading />
      <AdditionalInformation />
      <SpecialCases />
      <ServiceRefusal />
      <EmployerConfidentiality />
    </section>
  );
};

export default Services;
