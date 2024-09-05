import SingleCompanyJob from "./SingleCompanyJob";

const tempCompanies = [
  {
    id: "1",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/13711_big_teleperf_1571606.jpg",
  },
  {
    id: "2",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/25029_big_retaillog_4905314.jpg",
  },
  {
    id: "3",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/7820_big_pepsi_old_5882986.jpg",
  },
  {
    id: "4",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/4466_4466_big_bs2_8916225_2927775.jpeg",
  },
  {
    id: "5",
    companyLogo: "https://jobs.ge/data/clients/logo_big/3480_big.jpg",
  },
  {
    id: "6",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/1144_big_ee_8455509.jpg",
  },
  {
    id: "7",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/9686_evolution_logo_online_500x98__1__4436550.jpg",
  },
  {
    id: "8",
    companyLogo: "https://jobs.ge/data/clients/logo_big/2829_big.jpg",
  },
  {
    id: "9",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/3876_big_newhosp_4887822.jpg",
  },
  {
    id: "10",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/16782_big_boltfood_9649545.jpg",
  },
  {
    id: "11",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/11742_big_daily_8230397.jpg",
  },
  {
    id: "12",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/1173_big_silknet_7426092.jpg",
  },
  {
    id: "13",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/17368_big_universaltransit_2444106.jpg",
  },
  {
    id: "14",
    companyLogo: "https://jobs.ge/data/clients/logo_big/1009_big.jpg",
  },
  {
    id: "15",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/1030_big_basisbank_6071617.jpg",
  },
  {
    id: "16",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/1880_big_zoommer_8611804.jpg",
  },
  {
    id: "17",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/6147_big_redberry1_7823645.jpg",
  },
  {
    id: "18",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/1974_big_2nabiji_9515926.jpg",
  },
  {
    id: "19",
    companyLogo: "https://jobs.ge/data/clients/logo_big/11178_big.jpg",
  },
  {
    id: "20",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/5440_big_evex_6657159.jpg",
  },
  {
    id: "21",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/11346_big_eltbd_2253091.jpg",
  },
  {
    id: "22",
    companyLogo:
      "https://jobs.ge/data/clients/logo_big/4602_big_subwaynew_6490176.jpg",
  },
  {
    id: "23",
    companyLogo: "	https://jobs.ge/data/clients/logo_big/2038_big.jpg",
  },
];

const CompanyJobsList = () => {
  return (
    <ul className="max-w-[70rem] mx-auto flex flex-wrap justify-center lg:justify-start items-center mt-5 gap-5">
      {tempCompanies.map((company) => (
        <SingleCompanyJob key={company.id} company={company} />
      ))}
    </ul>
  );
};

export default CompanyJobsList;
